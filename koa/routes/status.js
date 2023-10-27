const Router = require("koa-router");
const db = require("../db/db");

const router = new Router({
  prefix: "/status",
});

router.get("/", async (ctx, next) => {
  next();
  const d = await db.query("SELECT * FROM status");
  const data = d.rows;
  ctx.body = JSON.stringify(data);
  ctx.set("Content-Type", "application/json");
});

module.exports = router;
