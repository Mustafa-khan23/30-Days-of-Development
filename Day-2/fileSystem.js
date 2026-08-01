const fs = require("node:fs"); //require the file system

fs.writeFile("example.txt", "Learining Development", (err) => {
  if (err) console.err(err);
  else console.log("success");
});

fs.appendFile("example.txt", " from Apna college", (err) => {
  if (err) console.err(err);
  else console.log("Done");
});

fs.rename("example.txt", "content.txt", (err) => {
  if (err) console.err(err);
  else console.log("fileName changed");
});

fs.copyFile("content.txt", "copied.txt", (err) => {
  if (err) console.err(err);
  else console.log("copied!");
});

fs.mkdir("./Day3", { recursive: true }, (err) => {
  if (err) console.log(err.message);
  else console.log("created");
});

fs.rm("./Day3", { recursive: true, force: true }, (err) => {
  if (err) console.log(err.message);
  else console.log("Removed!");
});

fs.rename("copied.txt", "content2.txt", (err) => {
  if (err) console.log(err.message);
  else console.log("Renamed!");
});

fs.unlink("content2.txt", (err) => {
  if (err) console.log(err.message);
  else console.log("removed!");
});
