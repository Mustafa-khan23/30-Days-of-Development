const url = "https://catfact.ninja/fact";
const axios = require("axios");

async function callFact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log(e);
  }
}

callFact();
