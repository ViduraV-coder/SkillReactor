import mongoose from "mongoose";

const databaseURI = process.env.MDB_CONNECTION_STRING;

export const ConnectMongo = async () => {
  mongoose.connect(databaseURI!);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("MDB Connected");
  });
};
