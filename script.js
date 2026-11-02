// ---------- pixel art ----------
// Each picture is a list of rows; every letter is one pixel, "." is see-through.
const colours = {
  k: "#3B3324", // outline
  w: "#FFF8E7", // cream
  c: "#F1E6C8", // shadowed cream
  p: "#F2A7B8", // pink
  q: "#E07A93", // deeper pink (inside the ears)
  s: "#F6D3B8", // skin
  h: "#F7B9C6", // pink cat-ear hood
  g: "#6F6E86", // Nymeria's grey
  l: "#A9A8BE", // her light grey heart
  d: "#55546A", // darker grey
  y: "#E8B04B", // mustard
  b: "#8A5A3B", // brown
  m: "#B9B9C8", // blade
  o: "#5E7F96", // dusty blue (LinkedIn icon)
  r: "#D9534F", // red
  u: "#BFE3F2", // sky
  n: "#7CC46B", // green
  v: "#9EA2F0", // purple
  a: "#6C6FC2", // deep purple
  e: "#25D366", // WhatsApp green
};

const sprites = {
  // About Me: a face in a cat-ear hood
  face: [
    ".kk..........kk.",
    ".khk........khk.",
    ".khqk......kqhk.",
    ".khhkkkkkkkkhhk.",
    "khhhhhhhhhhhhhhk",
    "khhssssssssssshk",
    "khsssssssssssshk",
    "khsskssssskssshk",
    "khsskssssskssshk",
    "khspssssssspsshk",
    "khsssssksksssshk",
    "khhsssssssssshhk",
    ".khhsssssssshhk.",
    "..khhhhhhhhhhk..",
    "...kkkkkkkkkk...",
  ],
  // My Games: a controller
  pad: [
    "................",
    "..kkkk....kkkk..",
    ".kwwwwkkkkwwwwk.",
    "kwwwwwwwwwwwwwwk",
    "kwwkwwwwwwwwpwwk",
    "kwkkkwwwwwwpwpwk",
    "kwwkwwwwwwwwpwwk",
    "kwwwwwwkkwwwwwwk",
    "kcwwwwk..kwwwwck",
    ".kcwwk....kwwck.",
    "..kkk......kkk..",
  ],
  // Skills: a little sword
  sword: [
    "............kkk.",
    "...........kmmk.",
    "..........kmmwk.",
    ".........kmmwk..",
    "........kmmwk...",
    ".......kmmwk....",
    "..k...kmmwk.....",
    ".kyk.kmmwk......",
    "..kykmmwk.......",
    "...kykwk........",
    "...kbkyk........",
    "..kbk.kyk.......",
    ".kbk...k........",
    "kbk.............",
    "kk..............",
  ],
  // Nymeria asleep, as a loaf (grey, pink ears, light heart on her chest)
  nymeria: [
    "..k....k................",
    ".kpk..kpk...............",
    ".kggkkggkkkkkkkkkk......",
    "kggggggggggggggggggk....",
    "kggggggggggggggggggggk..",
    "kgkkggkkgggggggggggggk..",
    "kggggpggglllgggggggggk..",
    "kgggkgkggllllggggggggk.k",
    ".kgggggglllllgggggggkkgk",
    ".kggggggglllgggggggggggk",
    "..kggggggglgggggggggddk.",
    "...kkkkkkkkkkkkkkkkkkk..",
  ],
  heart: [
    ".kk.kk.",
    "kppkppk",
    "kpppppk",
    ".kpppk.",
    "..kpk..",
    "...k...",
  ],
  cloud: [
    "..........kkkk........",
    "........kkwwwwkk......",
    "...kkk.kwwwwwwwwk.....",
    "..kwwwkwwwwwwwwwwkkk..",
    ".kwwwwwwwwwwwwwwwwwwk.",
    "kwwwwwwwwwwwwwwwwwwwwk",
    "kccwwwwwwwwwwwwwwwwcck",
    ".kcccccccccccccccccck.",
    "..kkkkkkkkkkkkkkkkkk..",
  ],
  mail: [
    "kkkkkkkkkk",
    "kwkwwwwkwk",
    "kwwkwwkwwk",
    "kwwwkkwwwk",
    "kwwwwwwwwk",
    "kkkkkkkkkk",
  ],
  linked: [
    "kkkkkkkkk",
    "kowoooook",
    "koooooook",
    "kowowwwok",
    "kowowowok",
    "kowowowok",
    "koooooook",
    "kkkkkkkkk",
  ],
  // GitHub: the white cat in a dark circle
  github: [
    "....kkkkk....",
    "..kkkkkkkkk..",
    ".kkwkkkkkwkk.",
    ".kkwwkkkwwkk.",
    "kkwwwwwwwwwkk",
    "kkwwwwwwwwwkk",
    "kkwwwwwwwwwkk",
    "kkkwwwwwwwkkk",
    "kkkkkwwwkkkkk",
    ".kwkkwwwkkkk.",
    ".kkwwwwwkkkk.",
    "..kkkkkkkkk..",
    "....kkkkk....",
  ],
  // WhatsApp: a green speech bubble with a white phone
  whatsapp: [
    "...kkkkk...",
    ".kkeeeeekk.",
    ".keeeeeeek.",
    "keewweeeeek",
    "keewweeeeek",
    "keeewweeeek",
    "keeeewwweek",
    "keeeeewweek",
    ".keeeeeeek.",
    "kkkeeeeekk.",
    "kkk.kkkk...",
  ],
  paper: [
    "kkkkkk..",
    "kwwwwkk.",
    "kwkkwwkk",
    "kwwwwwwk",
    "kwkkkkwk",
    "kwwwwwwk",
    "kwkkkkwk",
    "kwwwwwwk",
    "kkkkkkkk",
  ],
  // ----- Skills inventory items -----
  unity: [
    ".....kk.....",
    "...kkwwkk...",
    ".kkwwwwwwkk.",
    "kwwwwwwwwwwk",
    "kllkwwwwkggk",
    "kllllkkggggk",
    "kllllkkggggk",
    "kllllkkggggk",
    ".kkllkkggkk.",
    "...kkkkkk...",
  ],
  scroll: [
    ".kkkkkkkkkk.",
    "kcwwwwwwwwck",
    ".kwkkkkkkwk.",
    ".kwwwwwwwwk.",
    ".kwkkkkkwwk.",
    ".kwwwwwwwwk.",
    ".kwkkkkkkwk.",
    ".kwwwwwwwwk.",
    "kcwwwwwwwwck",
    ".kkkkkkkkkk.",
  ],
  snake: [
    "....kkkk....",
    "...knnnnk...",
    "...knknnk...",
    "...knnnnkr..",
    "....kknnk...",
    ".kkkkknnk...",
    "knnnnnnnk...",
    "knnkkkkk....",
    "knnnnnnnnkk.",
    ".kkkkknnnnyk",
    "......kkkkk.",
  ],
  branch: [
    "..kkk.......",
    ".kyyyk..kkk.",
    ".kyyyk.kyyyk",
    "..kbk..kyyyk",
    "..kbk...kbk.",
    "..kbk..kbk..",
    "..kbkkkbk...",
    "..kbbbbk....",
    "..kbk.......",
    ".kyyyk......",
    ".kyyyk......",
    "..kkk.......",
  ],
  crystal: [
    "...kkkkkk...",
    "..kvvvvwwk..",
    ".kvvvvvvwwk.",
    ".kvvvvvvvwk.",
    ".kvvpvvvvvk.",
    ".kvvvvvvvvk.",
    "..kvvvvvvk..",
    "...kkkkkk...",
    "..kyyyyyyk..",
    ".kbbbbbbbbk.",
    ".kkkkkkkkkk.",
  ],
  quill: [
    "..........kk",
    ".........kwk",
    "........kwwk",
    ".......kwwk.",
    "......kwwck.",
    ".....kwwck..",
    "....kwwck...",
    "...kwcck....",
    "...kcck.....",
    "..kkk.......",
    ".kk.........",
    "kk..........",
  ],
  spellbook: [
    ".kkkkkkkkk.",
    "kaaaaaaaaak",
    "kavvvvvvvak",
    "kavvvyvvvak",
    "kavvyyyvvak",
    "kavvvyvvvak",
    "kavvvvvvvak",
    "kaaaaaaaaak",
    "kwwwwwwwwwk",
    ".kkkkkkkkk.",
  ],
  brush: [
    ".........kk.",
    "........kbbk",
    ".......kbbk.",
    "......kbbk..",
    ".....kbbk...",
    "....kmmk....",
    "...kmmk.....",
    "..kppk......",
    ".kpppk......",
    "kpppk.......",
    "kppk........",
    ".kk.........",
  ],
  globe: [
    "...kkkkkk...",
    "..kuunnuuk..",
    ".kunnnnuuuk.",
    "kuunnnuuuuuk",
    "kuuunnuunnuk",
    "kuuuuuunnnuk",
    "kunnuuuunnuk",
    "knnnnuuuuuuk",
    ".kunnuuuuuk.",
    "..kuuuuuuk..",
    "...kkkkkk...",
  ],
  magnifier: [
    "..kkkk......",
    ".kuuwuk.....",
    "kuuuuwuk....",
    "kuuuuuuk....",
    "kuuuuuuk....",
    ".kuuuuk.....",
    "..kkkkbk....",
    "......kbk...",
    ".......kbk..",
    "........kbk.",
    ".........kk.",
  ],
  speech: [
    ".kkkkkkkkkk.",
    "kwwwwwwwwwwk",
    "kwwwwwwwwwwk",
    "kwwpwwpwwpwk",
    "kwwwwwwwwwwk",
    ".kkwwkkkkkk.",
    ".kwwk.......",
    ".kk.........",
  ],
  bubbles: [
    "kkkkkkk.....",
    "kvvvvvk.....",
    "kvwvwvk.....",
    "kvvvvvkkkkkk",
    "kkvkkkpppppk",
    ".kk..kpwpwpk",
    ".....kpppppk",
    ".....kkkpkkk",
    ".......kk...",
  ],
  tube: [ // (empty rows around it keep it the same size as the other items)
    "..........",
    "..........",
    "..kkkkkk..",
    "...kwwk...",
    "...kwwk...",
    "...kwwk...",
    "...kppk...",
    "...kppk...",
    "...kpqk...",
    "...kppk...",
    "....kk....",
    "..........",
  ],
  medal: [
    "kkk....kkk",
    "kvvk..kppk",
    ".kvvkkppk.",
    "..kvvppk..",
    "...kkkk...",
    "..kyyyyk..",
    ".kyywyyyk.",
    ".kyyyyyyk.",
    ".kyyyyyyk.",
    "..kyyyyk..",
    "...kkkk...",
  ],
  // music player buttons (drawn in one colour, so CSS can recolour them)
  play: [
    "k......",
    "kkk....",
    "kkkkk..",
    "kkkkkkk",
    "kkkkk..",
    "kkk....",
    "k......",
  ],
  pause: [
    "kk.kk",
    "kk.kk",
    "kk.kk",
    "kk.kk",
    "kk.kk",
    "kk.kk",
    "kk.kk",
  ],
  prev: [
    "k.....k",
    "k....kk",
    "k...kkk",
    "k..kkkk",
    "k...kkk",
    "k....kk",
    "k.....k",
  ],
  next: [
    "k.....k",
    "kk....k",
    "kkk...k",
    "kkkk..k",
    "kkk...k",
    "kk....k",
    "k.....k",
  ],
  shuffle: [
    ".......k.",
    "kk...kkkk",
    "..k.k..k.",
    "...k.....",
    "..k.k..k.",
    "kk...kkkk",
    ".......k.",
  ],
  repeat: [
    ".....k...",
    ".kkkkkk..",
    "k....k...",
    "k.......k",
    "...k....k",
    "..kkkkkk.",
    "...k.....",
  ],
  speaker: [
    "...k.....",
    "..kk...k.",
    "kkkk.k..k",
    "kkkk.k..k",
    "kkkk.k..k",
    "..kk...k.",
    "...k.....",
  ],
  fold: [
    "kk...kk",
    ".kk.kk.",
    "..kkk..",
    "...k...",
  ],
  unfold: [
    "...k...",
    "..kkk..",
    ".kk.kk.",
    "kk...kk",
  ],
  mute: [
    "...k.....",
    "..kk.....",
    "kkkk.k.k.",
    "kkkk..k..",
    "kkkk.k.k.",
    "..kk.....",
    "...k.....",
  ],
};

// Billie and Angel, Dina's real cats: the same sleepy tabby loaf, each in their own colours
// (g = fur, d = stripes, l = white chest and chin, p = ears and nose, c = collar)
const catLoaf = [
  "..k....k................",
  ".kpk..kpk...............",
  ".kggkkggkkkkkkkkkk......",
  "kgdgggdgggdggggdgggk....",
  "kggggggggggdggggdggggk..",
  "kgkkggkkgggdggggdggggk..",
  "kglllpllggggggggggggdk..",
  "kgllkllggggggggggggggk.k",
  ".kccccccggggggggggggkkdk",
  ".kgllllggggggggggggggggk",
  "..kggggggggdgggggggddk.",
  "...kkkkkkkkkkkkkkkkkkk..",
];
sprites.billie = { rows: catLoaf, palette: { g: "#DDD6C8", d: "#A99580", l: "#FBF8F2", p: "#F2A7B8", c: "#3F8FD6", k: "#4A4038" } };
sprites.angel = { rows: catLoaf, palette: { g: "#9A7853", d: "#5C4430", l: "#EFE6D6", p: "#E3A09A", c: "#9A7853", k: "#33281E" } };

// Turns a picture into crisp SVG squares.
function pixelSvg(rows, palette = {}) {
  const width = Math.max(...rows.map(r => r.length));
  let rects = "";
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = palette[ch] || colours[ch];
      if (fill) rects += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${fill}"/>`;
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${rows.length}" shape-rendering="crispEdges">${rects}</svg>`;
}

document.querySelectorAll("[data-sprite]").forEach(el => {
  const sprite = sprites[el.dataset.sprite];
  if (Array.isArray(sprite)) el.innerHTML = pixelSvg(sprite);
  else if (sprite) el.innerHTML = pixelSvg(sprite.rows, sprite.palette);
});

// ---------- Skills: the RPG inventory ----------
const skills = [
  { sprite: "unity", name: "Unity", desc: "Built and published two games in Unity 6: Hey Jane! and Project Cloud Nine. Editor, GameObjects, 2D/3D physics and UI systems." },
  { sprite: "scroll", name: "C# Scripting", desc: "Gameplay and UI scripting in Unity with C#." },
  { sprite: "snake", name: "Python", desc: "Pearson IT Specialist – Python certified. Data types, flow control, file handling, debugging and unit testing (unittest)." },
  { sprite: "branch", name: "Git & GitHub", desc: "Version control and project backups with Git and GitHub Desktop." },
  { sprite: "crystal", name: "AI Tools", desc: "AI tools used as part of the development workflow, with every feature planned, reviewed and tested in Unity." },
  { sprite: "quill", name: "Story & Dialogue", desc: "Wrote the full 7-chapter story and all dialogue for Hey Jane!" },
  { sprite: "spellbook", name: "Narrative Design", desc: "Designed a story told through gameplay, using in-game chats, emails and a journal to reveal the plot." },
  { sprite: "brush", name: "Pixel Art & Art Direction", desc: "Created or art-directed the pixel art, illustrations and in-game video for Hey Jane!" },
  { sprite: "globe", name: "World Building", desc: "Designed a simulated 2003 desktop with working messenger, email, journal, web browser, photo and file apps." },
  { sprite: "magnifier", name: "Playtesting & Bug Hunting", desc: "Tested every build chapter by chapter, reported bugs with clear reproduction steps, and re-tested fixes before each release." },
  { sprite: "speech", name: "Communication", desc: "2+ years in customer service across insurance, e-commerce and hospitality. 120+ daily interactions with a 95% satisfaction rating." },
  { sprite: "heart", name: "Listening & Patience", desc: "Active listening, de-escalation and root-cause problem solving, built through handling escalated customer cases." },
  { sprite: "bubbles", name: "English & Malay", desc: "Fluent in English and Bahasa Malaysia." },
  { sprite: "tube", name: "Attention to Detail", desc: "Diploma in Medical Laboratory Technology. 100% accuracy in lab testing and insurance documentation." },
  { sprite: "medal", name: "Certificates", desc: "Pearson IT Specialist – Python (2026). Unity Essentials Pathway, Unity Technologies (2026)." },
];

const invGrid = document.querySelector(".inv-grid");
skills.forEach((skill, i) => {
  const slot = document.createElement("button");
  slot.className = "slot";
  slot.title = skill.name;
  slot.innerHTML = `<span>${pixelSvg(sprites[skill.sprite])}</span>`;
  ["mouseenter", "focus", "click"].forEach(type => slot.addEventListener(type, () => pickSkill(i)));
  invGrid.appendChild(slot);
});

// Shows the item's name and description in the box under the slots
function pickSkill(index) {
  const skill = skills[index];
  invGrid.querySelectorAll(".slot").forEach((slot, i) => slot.classList.toggle("picked", i === index));
  document.querySelector(".inv-icon").innerHTML = pixelSvg(sprites[skill.sprite]);
  document.querySelector(".inv-name").textContent = skill.name;
  document.querySelector(".inv-desc").textContent = skill.desc;
}
pickSkill(0);

// ---------- photo viewer: click a cat photo to see it big ----------
// (also the pictures in "How I made it")
const viewer = document.querySelector(".viewer");
document.querySelectorAll(".cat-card img, .devlog .zoom").forEach(photo => photo.addEventListener("click", () => {
  viewer.querySelector("img").src = photo.src;
  viewer.querySelector("img").alt = photo.alt;
  const card = photo.closest(".cat-card");
  viewer.querySelector("figcaption").textContent = card ? card.querySelector("b").textContent : photo.alt;
  viewer.classList.add("open");
}));
// closes with the X, by clicking outside the photo, or with Esc
viewer.addEventListener("click", e => { if (e.target === viewer || e.target.closest(".close")) viewer.classList.remove("open"); });

// ---------- "How I made it" window ----------
const devlog = document.querySelector(".devlog");
document.querySelector(".btn.more").addEventListener("click", e => {
  e.preventDefault();
  devlog.classList.add("open");
  devlog.querySelector(".win-body").scrollTop = 0;
});
devlog.addEventListener("click", e => { if (e.target === devlog || e.target.closest(".win-close")) devlog.classList.remove("open"); });

// Esc closes the photo first, then the window
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (viewer.classList.contains("open")) viewer.classList.remove("open");
  else devlog.classList.remove("open");
});

// ---------- the L / R menu ----------
const tabs = [...document.querySelectorAll(".tab")];
const names = { about: "About Me", games: "My Games", skills: "Skills" };
// For trying things out: index.html?theme=pink (or purple, pages) and &page=about (or games, skills)
const options = new URLSearchParams(location.search);
document.body.dataset.theme = options.get("theme") || "pages"; // Dina's pick: every page its own colour
let current = Math.max(0, tabs.findIndex(tab => tab.dataset.page === (options.get("page") || "games")));

function show(index) {
  current = (index + tabs.length) % tabs.length;
  tabs.forEach((tab, i) => tab.classList.toggle("active", i === current));
  const page = tabs[current].dataset.page;
  document.body.dataset.page = page;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === page));
  document.querySelector(".page-name").textContent = names[page];
}

tabs.forEach((tab, i) => tab.addEventListener("click", () => show(i)));
document.querySelectorAll(".shoulder").forEach(button =>
  button.addEventListener("click", () => show(current + Number(button.dataset.step))));

document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (key === "l" || key === "arrowleft") { show(current - 1); sfx.pop(); }
  if (key === "r" || key === "arrowright") { show(current + 1); sfx.pop(); }
});

show(current);
setTimeout(() => document.body.classList.add("ready"), 200); // so the first colour doesn't fade in

// ---------- click sounds (little chiptune blips made in code, no sound files) ----------
// They follow the player's volume and mute
let audioCtx;
let volume = Number(localStorage.getItem("dina-volume") || 0.4);
let muted = localStorage.getItem("dina-muted") === "on";

function beep(from, to, length, type = "square", loudness = 0.05) {
  if (muted || volume === 0) return;
  audioCtx = audioCtx || new AudioContext();
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t);
  osc.frequency.exponentialRampToValueAtTime(to, t + length);
  gain.gain.setValueAtTime(loudness * volume / 0.4, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + length);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + length);
}

const sfx = {
  pop: () => beep(520, 880, 0.08),
  tick: () => beep(1200, 1500, 0.04, "square", 0.03),
  pick: () => { beep(660, 990, 0.06, "triangle", 0.1); setTimeout(() => beep(990, 1320, 0.08, "triangle", 0.1), 60); },
  mew: () => {
    beep(700, 1200, 0.12, "triangle", 0.12);
    setTimeout(() => beep(1200, 750, 0.22, "triangle", 0.12), 110);
  },
};

// A pink heart that floats up from where a cat was clicked
function floatHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.innerHTML = pixelSvg(sprites.heart);
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

document.addEventListener("click", e => {
  if (e.target.closest(".cat, .nymeria, .mini")) { sfx.mew(); floatHeart(e.clientX, e.clientY); }
  else if (e.target.closest(".slot")) sfx.pick();
  else if (e.target.closest(".tab, .shoulder, .player button")) sfx.pop();
  else if (e.target.closest("a, button")) sfx.tick();
});

// The paw squishes while the mouse button is held down
document.addEventListener("pointerdown", () => document.documentElement.classList.add("pressing"));
["pointerup", "pointercancel"].forEach(type =>
  document.addEventListener(type, () => document.documentElement.classList.remove("pressing")));

// ---------- music player ----------
const tracks = [
  { name: "Sunrise", file: "music/lofi1.mp3" },
  { name: "Pure Clouds", file: "music/lofi2.mp3" },
  { name: "Magic Lotus", file: "music/lofi3.mp3" },
];
const player = document.querySelector(".player");
const audio = player.querySelector("audio");
const bar = player.querySelector(".bar");
const playBtn = player.querySelector(".play");
const shuffleBtn = player.querySelector(".shuffle");
const repeatBtn = player.querySelector(".repeat");
const muteBtn = player.querySelector(".mute");
const foldBtn = player.querySelector(".fold");
let track = 0;
let shuffle = false;

const icon = name => pixelSvg(sprites[name], { k: "currentColor" });
player.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = icon(el.dataset.icon));
const setIcon = (button, name) => button.querySelector("span").innerHTML = icon(name);

const time = s => isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00";

function load(index, autoplay) {
  track = (index + tracks.length) % tracks.length;
  audio.src = tracks[track].file;
  player.querySelector(".song-name").textContent = tracks[track].name;
  localStorage.setItem("dina-track", track);
  if (autoplay) audio.play();
}

function next() {
  if (!shuffle) return load(track + 1, true);
  let pick;
  do pick = Math.floor(Math.random() * tracks.length); while (pick === track);
  load(pick, true);
}

function paintProgress() {
  const part = audio.duration ? audio.currentTime / audio.duration : 0;
  player.querySelector(".bar .fill").style.width = part * 100 + "%";
  player.querySelector(".now").textContent = time(audio.currentTime);
}

playBtn.addEventListener("click", () => audio.paused ? audio.play() : audio.pause());
player.querySelector(".next").addEventListener("click", next);
player.querySelector(".prev").addEventListener("click", () => {
  if (audio.currentTime > 3) audio.currentTime = 0; // like Spotify: back once restarts the song
  else load(track - 1, true);
});
shuffleBtn.addEventListener("click", () => shuffleBtn.classList.toggle("on", shuffle = !shuffle));
repeatBtn.addEventListener("click", () => repeatBtn.classList.toggle("on", audio.loop = !audio.loop));

// Volume: click the speaker to mute, click or drag the little bar to change how loud
function paintVolume() {
  audio.volume = volume;
  audio.muted = muted;
  player.querySelector(".vol-bar .fill").style.width = (muted ? 0 : volume * 100) + "%";
  setIcon(muteBtn, muted || volume === 0 ? "mute" : "speaker");
  muteBtn.title = muted ? "Unmute" : "Mute";
  localStorage.setItem("dina-volume", volume);
  localStorage.setItem("dina-muted", muted ? "on" : "off");
}
muteBtn.addEventListener("click", () => { muted = !muted; paintVolume(); });

// Fold the player down to just the play button (and back)
function setFolded(folded) {
  player.classList.toggle("folded", folded);
  setIcon(foldBtn, folded ? "unfold" : "fold");
  foldBtn.title = folded ? "Open the player" : "Make the player small";
}
foldBtn.addEventListener("click", () => {
  setFolded(!player.classList.contains("folded"));
  localStorage.setItem("dina-folded", player.classList.contains("folded") ? "on" : "off");
});

audio.addEventListener("play", () => { setIcon(playBtn, "pause"); playBtn.title = "Pause"; localStorage.setItem("dina-music", "on"); });
audio.addEventListener("pause", () => { setIcon(playBtn, "play"); playBtn.title = "Play"; localStorage.setItem("dina-music", "off"); });
audio.addEventListener("ended", next); // plays all three songs round and round (repeat keeps one song)
audio.addEventListener("loadedmetadata", () => player.querySelector(".total").textContent = time(audio.duration));
audio.addEventListener("timeupdate", paintProgress);

// Click or drag a bar: tells onPart how far along it (0 to 1)
function dragBar(el, onPart) {
  let down = false;
  const go = e => {
    const box = el.getBoundingClientRect();
    onPart(Math.min(1, Math.max(0, (e.clientX - box.left) / box.width)));
  };
  el.addEventListener("pointerdown", e => { down = true; el.setPointerCapture(e.pointerId); go(e); });
  el.addEventListener("pointermove", e => { if (down) go(e); });
  el.addEventListener("pointerup", () => down = false);
}
dragBar(bar, part => {
  if (audio.duration) audio.currentTime = part * audio.duration;
  paintProgress();
});
dragBar(player.querySelector(".vol-bar"), part => {
  volume = Math.round(part * 100) / 100;
  muted = false;
  paintVolume();
});

load(Number(localStorage.getItem("dina-track")) || 0, false);
paintVolume();
// Remembers if it was folded; on a first visit with a smaller screen it starts folded so it doesn't cover the page
const savedFold = localStorage.getItem("dina-folded");
setFolded(savedFold ? savedFold === "on" : window.innerWidth < 1320);
// Browsers won't start music by themselves, so if it was on last time, it comes back on the first click
if (localStorage.getItem("dina-music") === "on") {
  document.addEventListener("pointerdown", e => {
    if (!e.target.closest(".player")) audio.play().catch(() => {});
  }, { once: true });
}
