import express from 'express';
import {components} from "./types/api";
import {v4 as uuidv4} from "uuid";


type Article = components["schemas"]["Article"];
type ArticleInput = components["schemas"]["ArticleInput"];
const articles: Article[] = [];

const app = express();
app.use(express.json());

app.get('/articles', (req, res) => {
    res.json(articles);
});

app.post("/articles", (req, res) => {
    const articleInput: ArticleInput = req.body;
    const newArticle: Article = { ...articleInput, id: uuidv4() };

    articles.push(newArticle);
    res.status(201).json(newArticle);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})