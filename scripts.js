const emojis = ['🌵', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🍃', '🌾', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🍄', '🍅', '🥕', '🍓','🐛', '🐝', '🐞', '🐌', '🐜', '🕷', '🦗', '🐍', '🦎', '🐀', '🐇', '🦋', '🦔', '🕊']

const squiggly = "〰";

const root = document.querySelector("#root")

let divsHTML = "";

for (let i = 0; i < 1200; i += 1) {
    divsHTML +=  "<div>〰</div>\n";
}

root.innerHTML = divsHTML;

