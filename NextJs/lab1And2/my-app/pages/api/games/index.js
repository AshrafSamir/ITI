import { getCollection } from "../../../db/mongodb";

export default async function handler(req, res) {
  const gameCollection = await getCollection("games");
  switch (req.method) {
    case "POST":
      const { title, short_description, thumbnail } = req.body;
      await gameCollection.insertOne({
        title,
        short_description,
        thumbnail,
      });
      res.status(200).json({ message: "game added" });
      break;
    case "GET":
      const games = await gameCollection.find().toArray();
      res.status(200).json(games);
      break;
    default:
      res.status(400).json({ message: "wrong api method" });
      break;
  }
}
