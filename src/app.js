import path from "node:path";
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views")); // Node.js 20.11+
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.json()); // Importante para rotas REST
// --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
  res.render("home"); // Renderiza o esqueleto da página
});                     

import express from "express";
import { router as apiRouter } from "./routes/api.routes.js";
import { mdebug } from "./middlewares/debug.middleware.js";
import { notFound, errorHandler } from "./middlewares/errors.middleware.js";
import { mcors } from "./middlewares/mcors.middleware.js";
const app = express();
app.use(mcors);
app.use(express.json());
app.use(mdebug);
app.use("/api", apiRouter);

 // --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
  res.render("home"); // Renderiza o esqueleto da página
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/products", (req, res) => {
  res.render("products");
});

app.use(notFound);
app.use(errorHandler);
export default app;

app.get("/products", (req, res) => {
  const products = [
    {id: 1, nome: "Ainda estou aqui", disponivel: true},
    {id: 2, nome: "Se não fosse por você", disponivel: true},
    {id: 3, nome: "Amor em Roma", disponivel: false},
    {id: 4, nome: "Melhor do que nos filmes", disponivel: true},
    {id: 5, nome: "Não é como nos filmes", disponivel: false},
    {id: 6, nome: "Apostando no amor", disponivel: true},
    {id: 7, nome: "A hipotése do amor", disponivel: false},
    {id: 8, nome: "Amor, teoricamente", disponivel: true},
  ];
  res.render("products", {listaProdutos: products});
});

