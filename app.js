const express = require("express");
const router = require("./routers/router.js").router;
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running at Port No : ${PORT}...`);
});
