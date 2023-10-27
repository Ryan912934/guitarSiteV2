const Router = require("koa-router");
const db = require("../db/db");

const router = new Router({
  prefix: "/song",
});

router.get("/", async (ctx, next) => {
  next();
  const d =
    await db.query(`select s.song_id, s.title, a.name "artist_name", st.value status from song s
join artist a
on s.artist_id = a.artist_id
join status st
on s.status_id = st.status_id;`);
  const data = d.rows;
  ctx.body = JSON.stringify(data);
  ctx.set("Content-Type", "application/json");
});

module.exports = router;
