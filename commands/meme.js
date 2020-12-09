const fetch = require("node-fetch");
module.exports = {
  name: "meme",
  usage: "meme",
  description: "Posts a meme",
  async execute(message) {
    const { image } = await fetch(
      "https://some-random-api.ml/meme"
    ).then((response) => response.json());
    message.channel.send(image);
  },
};
