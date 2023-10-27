const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const session = require("koa-session");
const logger = require("koa-logger");
const App = new Koa();
const port = 8000;

//sessions
App.keys = ["secret2"];
App.use(session(App));

App.use(
  logger((str, args) => {
    // redirect koa logger to other output pipe
    // default is process.stdout(by console.log function)
    console.log(str);
  }),
);
App.use(parser());
App.use(cors());

//routes
const status = require("./routes/status.js");
const artist = require("./routes/artist.js");
const song = require("./routes/song.js");
App.use(status.routes());
App.use(artist.routes());
App.use(song.routes());

App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
});
