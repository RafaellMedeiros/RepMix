import Songs from "../../../models/songs";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { title, tone, position } = req.body;
      await Songs.create({ title, tone, position });
      res.status(201).json({ message: "Song created" });
    }

    if (req.method === "GET") {
      const songs = await Songs.findAll({
        attributes: ["id", "title", "tone"],
      });
      res.status(200).json({ songs });
    }

    if (req.method === "PUT") {
      await Songs.destroy({
        where: {},
        truncate: true,
      });

      await Songs.bulkCreate(req.body);
      res.status(200).json({ message: "Song updated" });
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(400).end();
  }
}
