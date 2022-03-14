const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
app.use(cors());
const mailRouter = require("./routers/routes/mail");
app.use(express.json());


app.use("/mail", mailRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
