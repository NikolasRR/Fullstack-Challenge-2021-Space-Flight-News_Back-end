import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import gzip from "node-gzip";
import axios from "axios";
import { createReadStream } from "fs";
import { createGunzip, InputType, unzipSync } from "zlib";

dotenv.config();

// export const mongoClient = new MongoClient(process.env.MONGO_URI);

const server = express();
server.use(cors());
server.use(json());

server.get("/teste", async (req, res) => {
    const response = await axios.get("https://static.openfoodfacts.org/data/openfoodfacts-products.jsonl.gz");
    // const aaa = unzipSync(response.data).toString( 'utf-8' );
    console.log(typeof response.data);
    
    res.send("ok");
})

server.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));