"use strict";
// const express = require("express");
// const app = express();
// const port = 3000;
// const shell = require("shelljs");
// var glob = require("glob");
// const dotenv = require("dotenv");
// const lineReader = require("line-reader");
// var fs = require("fs"),
//   es = require("event-stream");
// //let fetchedFiles = []
// dotenv.config({
//   silent: true,
// });
// const { Pool } = require("pg");
// const pool = new Pool({
//   host: process.env.host,
//   port: process.env.db_port,
//   database: process.env.database,
//   user: process.env.username,
//   password: process.env.password,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
// shell.exec("./pull.sh");
// const validIPaddress = (ipaddress: string): boolean => {
//   if (
//     /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
//       ipaddress
//     )
//   ) {
//     return true;
//   }
//   return false;
// };
// const loopFiles = (fetchedFiles) => {
//   console.log("Fetching from repo");
//   fetchedFiles.forEach((file) => {
//     let validIps = [];
//     // lineReader.eachLine(`${file}`, function (line) {
//     //   if (validIPaddress(line)) {
//     //       validIps.push(line)
//     //      //console.log(`Writing ${line} to db...`);
//     //      //insertIntoDb(validIps);
//     //   }
//     //   console.log(`Writing ${validIps} to db...`);
//     //   insertIntoDb(validIps);
//     // });
//     var lineNr = 0;
//     var s = fs
//       .createReadStream(`${file}`)
//       .pipe(es.split())
//       .pipe(
//         es
//           .mapSync(function (line) {
//             // pause the readstream
//             //console.log(line)
//             if (validIPaddress(line)) {
//                 validIps.push(line)
//             }
//             s.pause();
//             lineNr += 1;
//             // process line here and call s.resume() when rdy
//             // function below was for logging memory usage
//             // resume the readstream, possibly from a callback
//             s.resume();
//           })
//           .on("error", function (err) {
//             console.log("Error while reading file.", err);
//           })
//           .on("end", function () {
//             console.log("Read entire file.");
//           })
//       );
//       insertIntoDb(validIps);
//   });
// };
// const insertIntoDb = (data) => {
//   try {
//     const insertQuery = {
//       name: "insert-table",
//       text: "INSERT INTO ipsets (ipset) VALUES ($1);",
//     };
//     pool.connect(async (err, client, release) => {
//       if (err) {
//         return console.error("Error acquiring client", err.stack);
//       }
//       data.forEach(async (ips) => {
//         console.log(ips)
//         insertQuery.values = [ips];
//         const res = await client.query(insertQuery);
//         //   console.log(res);
//       });
//       release();
//     });
//   } catch (err) {}
// };
// const dropAndBuildDb = async () => {
//   const query = {
//     name: "drop-table",
//     text: "DROP TABLE IF EXISTS ipsets;",
//   };
//   const createTable = {
//     name: "create-table",
//     text: `
//             CREATE TABLE IF NOT EXISTS ipsets (
//                 id SERIAL PRIMARY KEY,
//                 ipset VARCHAR(20) UNIQUE
//             );
//         `,
//   };
//   try {
//     pool.connect(async (err, client, release) => {
//       if (err) {
//         return console.error("Error acquiring client", err.stack);
//       }
//       await client.query(query);
//       await client.query(createTable);
//       release();
//     });
//   } catch (err) {}
// };
// dropAndBuildDb();
// glob("./blocklist-ipsets/**/*.ipset", async (err, files) => {
//     loopFiles(files);
// });
console.log('Hello world!');
