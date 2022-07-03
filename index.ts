import { connect } from "mongoose";
import { app } from "./src/app";

const port = process.env.PORT || 4000;
const dbConnectionUrl = "mongodb+srv://dsrentcars:sWC64yoRbJXwgKKS@cluster0.ngimp.mongodb.net/?retryWrites=true&w=majority"

connect(dbConnectionUrl)
  .then(() => {
    app.listen(port, () => {
      console.log("application starts with ports ", port);
    });
  })
  .catch(() => console.log("unable to connect to the db"));
