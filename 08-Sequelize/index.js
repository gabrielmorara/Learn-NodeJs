const app = require("express")();
const bodyparser = require("body-parser");
const { Post } = require("./models");

app.use(bodyparser.json());

app.post("/api", async (req, res) => {
	try {
		const { title } = req.body;
		console.log('title :', title);
		const post = await Post.create({
			title
		});
		console.log("post :", post);
		return res.status(200).send(post);
	} catch (err) {
		return res.status(400).send("teste");
	}
});

app.listen(3000, () => {
	console.log("Servidor Rodando");
});
