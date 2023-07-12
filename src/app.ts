import express from "express";
import { OpenAiService } from "./services/openAi.service";
import { GoogleSearchService } from "./services/google-search.service";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/Admin&menter");

mongoose.set("strictQuery", false);


const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the AW Assistant API!");
});

app.get("/api/v1/learning-path", async(req, res) => {
  const {query} = req.body;
  let gs = new GoogleSearchService();
  let result = await gs.getAnswer(query);
  console.log(result, 'answer');
  res.send({"result": result});
});

app.get("/api/v1/searchGoogle", async(req, res) => {
  const {query} = req.body;
  let gs = new GoogleSearchService();
  let result = await gs.getAnswer(query);
  console.log(result, 'answer');
  res.send({"result": result});
});


app.post("/api/v1/chat", async(req, res) => {
  const { question } = req.body;
  let aiService = new OpenAiService();
  let ans = await aiService.getAnswer(question);
  res.send(ans);
});

app.listen(port, () => {
  return console.log(`Express is listening at 
  http://localhost:${port}`);
});
