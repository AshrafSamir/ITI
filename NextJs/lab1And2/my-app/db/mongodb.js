import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://ashrafsamer423:blackhat3@cluster0.hi2oj0h.mongodb.net/nextProject";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export async function getCollection(collectionName) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection(collectionName);
  return collection;
}
