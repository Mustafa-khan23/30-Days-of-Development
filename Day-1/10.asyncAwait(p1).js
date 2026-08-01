async function bookCab() {
  try {
    return new Promise((resolve, reject) => {
      let distance = Math.floor(Math.random() * 15) + 1;
      if (distance <= 7) {
        resolve(console.log(`Cab booked, ${distance} m away`));
      } else {
        reject(console.log(`cab is not booked, ${distance} far away`));
      }
    });
  } catch (e) {
    console.log(e);
  }
}

await bookCab()
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("Rejected");
  });


