import express from "express";

const app = express();

const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `文章标题${i + 1}`,
  body: `这是第${i + 1}篇文章的正文内容...`,
}));

app.get("/", (req, res) => {
  const now = new Date().toLocaleString();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>SSR 文章列表</title>
      </head>
      <body>
        <h1>文章列表</h1>
        <p>服务器生成时间：${now}</p>
        ${posts
          .map(
            (p) => `<article><h2>${p.title}</h2><p>${p.body}</p></article>`
          )
          .join("")}
      </body>
    </html>
  `;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SSR on http://localhost:${port}`);
});