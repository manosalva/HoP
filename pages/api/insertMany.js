/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../util/mongodb";
import neatCsv from 'neat-csv';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    console.log(JSON.stringify(req.body))
    const json = await neatCsv(req.body);

    const add = await db
      .collection("Services")
      .insertMany(json);

    console.log(add);

    res.json(add);
  }
};