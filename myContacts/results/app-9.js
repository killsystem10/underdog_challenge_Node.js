const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;



// app.use(logger);

app.route("/").get((req, res) => {
  res.status(200).send("Hello Node!");
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
