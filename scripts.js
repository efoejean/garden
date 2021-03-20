const emojis = [
  "🌵",
  "🌲",
  "🌳",
  "🌴",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🍃",
  "🌾",
  "🌷",
  "🌹",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🍄",
  "🍅",
  "🥕",
  "🍓",
  "🐛",
  "🐝",
  "🐞",
  "🐌",
  "🐜",
  "🕷",
  "🦗",
  "🐍",
  "🦎",
  "🐀",
  "🐇",
  "🦋",
  "🦔",
  "🕊",
];

const root = document.querySelector("#root");

let divsHTML = "";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 1200; i += 1) {
  divsHTML += "<div>〰</div>\n";
}

root.innerHTML = divsHTML;

document.querySelectorAll("div:not(#root)").forEach((div) => {
  div.addEventListener("mouseover", ({ target }) => {
    const currentTarget = target;
    currentTarget.innerText =
      emojis[getRandomIntInclusive(0, emojis.length - 1)];
  });
});
