import database from "infra/database";

export default function handler(req, res) {
  // database.testConnection();

  res.status(200).json({
    songs: [
      { id: 1, name: "Song 1", tone: "D" },
      { id: 2, name: "Song 2", tone: "E" },
      { id: 3, name: "Song 3", tone: "F" },
      { id: 4, name: "Song 4", tone: "G" },
      { id: 5, name: "Song 5", tone: "A" },
      { id: 6, name: "Song 6", tone: "B" },
      { id: 7, name: "Song 7", tone: "C" },
    ],
  });
}
