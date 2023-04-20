import { getCollection } from "../../../db/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { gameId } = req.query;
  const gameCollection = await getCollection("games");
  switch (req.method) {
    case "GET":
      const game = await gameCollection.findOne({ _id: new ObjectId(gameId) });
      res.status(200).json(game);
      break;
    case "PATCH":
      const { title, short_description, thumbnail } = req.body;
      console.log({ game: req.body, id: gameId });
      await gameCollection.updateOne(
        { _id: new ObjectId(gameId) },
        {
          $set: {
            title,
            short_description,
            thumbnail,
          },
        }
      );
      res.status(200).json({ message: "game updated" });
      break;

    case "DELETE":
      await gameCollection.deleteOne({ _id: new ObjectId(gameId) });
      res.status(200).json({ message: "game deleted" });
      console.log("delete " + gameId);
      break;
    default:
      res.status(400).json({ message: "wrong api method" });
      break;
  }
}
