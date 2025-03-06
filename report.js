const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    //collection: `https://api.postman.com/collections/39989719-1d05c7dc-4d3f-4011-8ab9-db9064632119?access_key=${process.env.secretKey}`,
    collection: require("./collection/dmoney-users-api.json"),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
