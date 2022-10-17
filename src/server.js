const express = require("express");
const app = express();
const query = require("./backend/query");
app.use(express.json());

app.get("/marcas", async (req, res) => {
  const result = await query.getAllMarcas();
  res.status(200).json(result)
});

app.listen(3000, () => {
  console.log(`server running on port: ${3000}`);
});
