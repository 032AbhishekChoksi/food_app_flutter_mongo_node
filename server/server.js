const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG, PORT } = require("./config/app.config");
const errors = require("./middleware/errors.js");

// connect to mongodb
/**
 * With useNewUrlParser: The underlying MongoDB driver has deprecated their current connection string parser.
 * Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.
 * You should set useNewUrlParser: true unless that prevents you from connecting.
 *
 * With useUnifiedTopology, the MongoDB driver sends a heartbeat every heartbeatFrequencyMS to check on the status of the connection.
 * A heartbeat is subject to serverSelectionTimeoutMS , so the MongoDB driver will retry failed heartbeats for up to 30 seconds by default.
 */
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log("Database connected");
    },
    (error) => {
        console.log("Database can't be connected: " + error);
    }
);

// initialize middleware
app.use(express.json());
app.use(cors());

// initialize routes
app.use("/api", require("./routes/server.routes"));

app.use(errors.errorHandler);

// listen for requests
app.listen(PORT || 4000, function () {
    console.log("Server is running on port " + PORT);
});