const mongoose = require("mongoose");

const connect = (onConnect) => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => {
    onConnect && onConnect();
  });
};

module.exports = {
  connect,
};
