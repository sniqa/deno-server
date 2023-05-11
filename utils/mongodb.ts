import { MongoClient } from "mongo";

export const mongodb = async (dbName: string) => {
  const client = new MongoClient();

  await client.connect("mongodb://127.0.0.1:27017");

  return client.database(dbName);
};

// Connect using srv url
// await client.connect(
//     "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1",
//   );
