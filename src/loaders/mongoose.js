const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb://spacemapdb:voronoi1!@docdb-2021-10-07-08-59-30.cluster-cciu2wubcctl.ap-northeast-2.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "COOP",
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));
