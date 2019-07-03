const sequelize = require("sequelize");

const Post = sequelize.define("Post", {
	title: {
		type: sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: "Essa campo não pode ser vazio"
			}
		}
	}
});

module.exports = Post;
