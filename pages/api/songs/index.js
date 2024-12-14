import Songs from "models/songs";

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

      await Songs.bulkCreate(req.body.songs);
      res.status(200).json({ message: "Song updated" });
    }

    if (req.method === "DELETE") {
      const song = await Songs.findOne({ where: { id: req.body.id } });
      if (!song) {
        res.status(404).json({ message: "Song not found" });
        return;
      }

      await Songs.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json({ message: "Song deleted" });
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(400).end();
  }
}
