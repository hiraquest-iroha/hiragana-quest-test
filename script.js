const SCORE_GRID_SIZE = 96;

/* ========================================
   せってい：BGM / SE の保存・即時反映
   読み上げ音声はSEに含めない
======================================== */
const audioPreferenceKeys = { bgm: "hiraquest-bgm-enabled", se: "hiraquest-se-enabled" };
function readAudioPreference(key) {
  try { return localStorage.getItem(audioPreferenceKeys[key]) !== "off"; }
  catch (error) { return true; }
}
let bgmEnabled = readAudioPreference("bgm");
let seEnabled = readAudioPreference("se");
function applyBgmPreference() {
  // 再生中のBGMも直ちにミュート／復帰。再生ノードは維持する。
  for (const gain of [
    typeof titleBgmGain !== "undefined" ? titleBgmGain : null,
    typeof battleBgmGain !== "undefined" ? battleBgmGain : null,
    typeof bookBgmGain !== "undefined" ? bookBgmGain : null
  ]) {
    if (gain) gain.gain.value = bgmEnabled ? 0.4 : 0;
  }
}


/* ========================================
   ひらがなくえすと
   モンスター・文字データ
======================================== */

/* ========================================
   URLを作る
======================================== */

const POSTIMG = "https:" + "//i.postimg.cc/";


/* ========================================
   ひらがなデータ
======================================== */

const letterData = {

  "あ": {
    guide:
      "./assets/guides/a.png",

    strokeStarts: [
      { x: 240, y: 315 },
      { x: 455, y: 130 },
      { x: 595, y: 350 }
    ]
  },

  "い": {
    guide:
      "./assets/guides/i.png",

    strokeStarts: [
      { x: 225, y: 320 },
      { x: 690, y: 370 }
    ]
  },

  "う": {
    guide:
      "./assets/guides/u.png",

    strokeStarts: [
      { x: 385, y: 165 },
      { x: 290, y: 400 }
    ]
  },

  "え": {
    guide:
      "./assets/guides/e.png",

    strokeStarts: [
      { x: 390, y: 180 },
      { x: 285, y: 405 }
    ]
  },

    "お": {
    guide:
      "./assets/guides/o.png",

    strokeStarts: [
      { x: 215, y: 405 },
      { x: 360, y: 170 },
      { x: 660, y: 310 }
    ]
  },

    "か": {
    guide:
      "./assets/guides/ka.png",

    strokeStarts: [
      { x: 175, y: 425 },
      { x: 430, y: 165 },
      { x: 675, y: 350 }
    ]
  },

  "き": {
    guide:
      "./assets/guides/ki.png",

    strokeStarts: [
      { x: 270, y: 355 },
      { x: 360, y: 475 },
      { x: 425, y: 185 },
      { x: 315, y: 655 }
    ]
  },

  "く": {
  guide:
    "./assets/guides/ku.png",

  strokeStarts: [
    { x: 610,  y: 185 }
  ]
},

  "け": {
  guide:
    "./assets/guides/ke.png",
  strokeStarts: [
  { x: 295, y: 230 },
  { x: 430, y: 405 },
  { x: 665, y: 180 }
]
},

  　"こ": {
  guide:
    "./assets/guides/ko.png",
  strokeStarts: [
    { x: 340, y: 280 },
    { x: 300, y: 630 }
  ]
},

};


/* ========================================
   モンスターデータ
======================================== */

const monsters = {

　
  "あ": {
    name: "ありぷり",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/aripuri1.png",

      small:
        "./assets/monsters/aripuri2.png",

      large:
        "./assets/monsters/aripuri3.png",

      critical:
        "./assets/monsters/aripuri4.png"
    }
  },


  "い": {
    name: "いもむっちり",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/imomutchiri1.png",

      small:
        "./assets/monsters/imomutchiri2.png",

      large:
        "./assets/monsters/imomutchiri3.png",

      critical:
        "./assets/monsters/imomutchiri4.png"
    }
  },

　　
  "う": {
    name: "うんこっく",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/unkokku1.png",

      small:
        "./assets/monsters/unkokku2.png",

      large:
        "./assets/monsters/unkokku3.png",

      critical:
        "./assets/monsters/unkokku4.png"
    }
  },

  "え": {
    name: "えっぐまん",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/egguman1.png",

      small:
        "./assets/monsters/egguman2.png",

      large:
        "./assets/monsters/egguman3.png",

      critical:
        "./assets/monsters/egguman4.png"
    }
  },

  "お": {
    name: "おくとぱちゅっ",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/okutopachu-tsu1.png",

      small:
        "./assets/monsters/okutopachu-tsu2.png",

      large:
        "./assets/monsters/okutopachu-tsu3.png",

      critical:
        "./assets/monsters/okutopachu-tsu4.png"
    }
  },

  
    
  "か": {
    name: "かちかちこおり",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/kachikachikoori1.png",

      small:
        "./assets/monsters/kachikachikoori2.png",

      large:
        "./assets/monsters/kachikachikoori3.png",

      critical:
        "./assets/monsters/kachikachikoori4.png"
    }
  },

  "き": {
    name: "きらくらげ",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/kirakurage1.png",

      small:
        "./assets/monsters/kirakurage2.png",

      large:
        "./assets/monsters/kirakurage3.png",

      critical:
        "./assets/monsters/kirakurage4.png"
    }
  },

  "く": {
    name: "くとぅるふ",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/kuto-urufu1.png",

      small:
        "./assets/monsters/kuto-urufu2.png",

      large:
        "./assets/monsters/kuto-urufu3.png",

      critical:
        "./assets/monsters/kuto-urufu4.png"
    }
  },

  "け": {
    name: "けぶかい",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/kebukai1.png",

      small:
        "./assets/monsters/kebukai2.png",

      large:
        "./assets/monsters/kebukai3.png",

      critical:
        "./assets/monsters/kebukai4.png"
    }
  },

  "こ": {
    name: "こんぶ",
    hp: 30,

    images: {
      normal:
        "./assets/monsters/konbu1.png",

      small:
        "./assets/monsters/konbu2.png",

      large:
        "./assets/monsters/konbu3.png",

      critical:
        "./assets/monsters/konbu4.png"
    }
  },


};



/* ========================================
   ひらがなくえすと
   描画・読み上げ・攻撃演出
======================================== */

/* ============================================================================
   01 文字・お手本・画面描画
============================================================================ */

function decodeReferenceMask(base64) {

  const binary = atob(base64);

  const mask =
    new Uint8Array(
      SCORE_GRID_SIZE *
      SCORE_GRID_SIZE
    );

  let bitIndex = 0;

  for (
    let i = 0;
    i < binary.length;
    i++
  ) {

    const byte =
      binary.charCodeAt(i);

    for (
      let bit = 7;
      bit >= 0;
      bit--
    ) {

      if (
        bitIndex >=
        mask.length
      ) {
        break;
      }

      mask[bitIndex] =
        (byte >> bit) & 1;

      bitIndex++;
    }
  }

  return mask;
}

function resizeCanvas() {

  const rect =
    canvas.getBoundingClientRect();

  const ratio =
    window.devicePixelRatio || 1;

  canvas.width =
    Math.round(
      rect.width * ratio
    );

  canvas.height =
    Math.round(
      rect.height * ratio
    );

  ctx.setTransform(
    ratio,
    0,
    0,
    ratio,
    0,
    0
  );

  ctx.lineWidth = 10;

  ctx.lineCap = "round";

  ctx.lineJoin = "round";

  ctx.strokeStyle =
    "#2c2723";

  updateStrokeStartDot();
}

function updateGuide() {

  const data =
    letterData[currentLetter];

  if (!data) {
    return;
  }

  /* むずかしい：お手本を隠す。赤点は表示する */
  guideImage.style.visibility =
    battleDifficulty === "hard"
      ? "hidden"
      : "visible";

  guideImage.onload = () => {

    requestAnimationFrame(
      updateStrokeStartDot
    );
  };

  /* 採点用のお手本画像は読み込んだまま */
  guideImage.src =
    data.guide;
}

function updateMonsterName() {

  const name =
    monsters[currentLetter].name;

  monsterName.innerHTML =
    `<span class="name-first">${name.charAt(0)}</span>${name.slice(1)}`;
}

function updateStrokeStartDot() {

  /* むずかしいモードでは赤点を非表示 */
  if (battleDifficulty === "hard") {
    strokeStartDot.style.display = "none";
    return;
  }

  const data =
    letterData[currentLetter];

  if (
    !data ||
    !data.strokeStarts ||
    data.strokeStarts.length === 0
  ) {

    strokeStartDot.style.display =
      "none";

    return;
  }

  if (
    strokes.length >=
    data.strokeStarts.length
  ) {

    strokeStartDot.style.display =
      "none";

    return;
  }

  const start =
    data.strokeStarts[
      strokes.length
    ];

  const boxRect =
    writeBox.getBoundingClientRect();

  const guideRect =
    guideImage.getBoundingClientRect();

  const xInsideGuide =
    start.x /
    1024 *
    guideRect.width;

  const yInsideGuide =
    start.y /
    1024 *
    guideRect.height;

  const displayX =
    (
      guideRect.left -
      boxRect.left
    ) +
    xInsideGuide;

  const displayY =
    (
      guideRect.top -
      boxRect.top
    ) +
    yInsideGuide;

  strokeStartDot.style.display =
    "block";

  strokeStartDot.style.left =
    `${displayX}px`;

  strokeStartDot.style.top =
    `${displayY}px`;
}

function getPointerPosition(
  event
) {

  const rect =
    canvas.getBoundingClientRect();

  return {

    x:
      event.clientX -
      rect.left,

    y:
      event.clientY -
      rect.top
  };
}

function clearDrawing(
  updateText = true
) {

  const rect =
    canvas.getBoundingClientRect();

  ctx.clearRect(
    0,
    0,
    rect.width,
    rect.height
  );

  points = [];

  strokes = [];

  currentStroke = [];

  if (updateText) {

    message.textContent =
      `「${currentLetter}」を かいてみよう！`;
  }

  updateStrokeStartDot();
}


/* ============================================================================
   02 ひらがな読み上げ
============================================================================ */

function speakCurrentLetter() {

  /* 読み上げ中の連打を防ぐ */
  if (letterSpeechPlaying) {
    return;
  }

  letterSpeechPlaying = true;

  const speech =
    new SpeechSynthesisUtterance(currentLetter);

  speech.lang = "ja-JP";
  speech.rate = 0.8;
  speech.pitch = 1.1;
  speech.volume = 1.0;

  /* 読み上げ終了後のBGM復帰 */
  function finishSpeech() {

    letterSpeechPlaying = false;

    if (
      titleBgmStarted &&
      titleAudioContext &&
      titleAudioContext.state === "suspended"
    ) {
      titleAudioContext.resume().catch(error => {
        console.warn("BGM復帰失敗:", error);
      });
    }
  }

  speech.onend = finishSpeech;
  speech.onerror = finishSpeech;

  /* 読み上げ開始 */
  window.speechSynthesis.speak(speech);
}

async function playRecordedA() {
  await hiraganaAReady;

  if (!hiraganaABuffer || !titleAudioContext) {
    console.warn("「あ」の録音音声が準備できていません");
    return;
  }

  try {
    await titleAudioContext.resume();

    const source = titleAudioContext.createBufferSource();
    const gain = titleAudioContext.createGain();

    source.buffer = hiraganaABuffer;
    gain.gain.value = 1.0;

    source.connect(gain);
    gain.connect(titleAudioContext.destination);

    source.onended = () => {
      source.disconnect();
      gain.disconnect();
    };

    source.start();
  } catch (error) {
    console.warn("「あ」の再生エラー:", error);
  }
}


/* ============================================================================
   03 モンスター画像・図鑑
============================================================================ */

function preloadMonsterImage(url) {

  if (!url || monsterImageCache.has(url)) {
    return;
  }

  const image = new Image();

  monsterImageCache.set(url, image);

  image.src = url;
}

function preloadQuestMonsterImages(questIndex) {

  const letters = questOrders[questIndex];

  if (!letters) return;

  const types = [
    "normal",
    "small",
    "large",
    "critical"
  ];

  for (const letter of letters) {

    const monster = monsters[letter];

    if (!monster) continue;

    for (const type of types) {

      preloadMonsterImage(
        monster.images[type]
      );
    }
  }
}

function loadMonsterCollection() {
  try {
    return JSON.parse(
      localStorage.getItem("hiraquest-monster-collection")
      || "{}"
    );
  } catch (error) {
    return {};
  }
}

function registerMonsterImage(letter, type) {

    /* 練習モードでは画像を獲得しない */
  if (isPracticeMode) return;

  const monster = monsters[letter];

  if (!monster || !monster.images[type]) {
    return;
  }

  const collection = loadMonsterCollection();

  if (!collection[letter]) {
    collection[letter] = {};
  }

  /* 既に登録済みなら何もしない */
  if (collection[letter][type]) {
    return;
  }

  collection[letter][type] = true;

  /* 保存 */
  try {
    localStorage.setItem(
      "hiraquest-monster-collection",
      JSON.stringify(collection)
    );
  } catch (error) {
    console.warn("図鑑の保存に失敗しました", error);
    return;
  }

  /* 今回初めて獲得した画像として記録 */
  collectionNewImages.push({
    letter: letter,
    type: type,
    name: monster.name,
    image: monster.images[type]
  });
}

/* ========================================
   未獲得画像：本来の画像をモザイク表示
   CORSが許可されない画像はぼかし表示に切替
   読み込み中も元画像を見せない
======================================== */
function setCollectionPreview(img, url, locked, isCritical = false) {
  const requestId = (img._mosaicRequestId || 0) + 1;
  img._mosaicRequestId = requestId;
  img.classList.remove("collection-preview-pixelated");
  img.style.visibility = "visible";
  if (img.parentElement) img.parentElement.classList.remove("collection-preview-loading");
  img.classList.toggle("collection-preview-locked", locked);
  img.classList.toggle("collection-preview-critical", locked && isCritical);

  if (!url) {
    img.removeAttribute("src");
    return;
  }

  /* 獲得済みは通常画像に戻す */
  if (!locked) {
    img.src = url;
    return;
  }

  /* 未獲得の元画像は表示用imgに絶対に設定しない。
     モザイク完成までは前の画像を隠して「？」を表示する。 */
  img.removeAttribute("src");
  img.style.visibility = "hidden";
  const parent = img.parentElement;
  if (parent) parent.classList.add("collection-preview-loading");

  const finish = (mosaicUrl) => {
    if (img._mosaicRequestId !== requestId) return;
    if (mosaicUrl) {
      img.src = mosaicUrl;
      img.classList.add("collection-preview-pixelated");
      img.style.visibility = "visible";
    }
    if (parent) parent.classList.remove("collection-preview-loading");
  };

  /* 低解像度に縮小→拡大して、実際のモザイク画像を生成 */
  const source = new Image();
  source.crossOrigin = "anonymous";
  source.onload = () => {
    if (img._mosaicRequestId !== requestId) return;
    try {
      const w = source.naturalWidth;
      const h = source.naturalHeight;
      if (!w || !h) return;
      const cells = isCritical ? 10 : 16;
      const tiny = document.createElement("canvas");
      tiny.width = cells;
      tiny.height = Math.max(1, Math.round(cells * h / w));
      const tctx = tiny.getContext("2d");
      tctx.drawImage(source, 0, 0, tiny.width, tiny.height);
      const output = document.createElement("canvas");
      output.width = Math.min(w, 480);
      output.height = Math.max(1, Math.round(output.width * h / w));
      const ctx = output.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tiny, 0, 0, output.width, output.height);
      const mosaicUrl = output.toDataURL("image/png");
      if (img._mosaicRequestId !== requestId) return;
      finish(mosaicUrl);
    } catch (err) {
      /* Canvasが利用できない場合も元画像は見せない */
      finish(null);
    }
  };
  source.onerror = () => {
    /* 読み込み失敗時も元画像は見せない */
    finish(null);
  };
  source.src = url;
}

function showMonsterImage(type) {
  const monster = monsters[currentLetter];
  if (!monster) return;

  if (!isPracticeMode) {
    setCollectionPreview(monsterImage, monster.images[type], false);
    return;
  }

  const collection = loadMonsterCollection();
  const owned = collection[currentLetter] || {};
  const locked = owned[type] !== true;
  setCollectionPreview(
    monsterImage,
    monster.images[type],
    locked,
    type === "critical"
  );
}

/* ========================================
   ひらモンのひみつ：解放状況の保存
======================================== */

const monsterSecretStorageKey =
  "hiraquest-monster-secrets";

/* 保存済みの解放状況を読み込む */
function loadMonsterSecrets() {

  try {
    return JSON.parse(
      localStorage.getItem(monsterSecretStorageKey)
      || "{}"
    );
  } catch (error) {
    return {};
  }
}

/* むずかしいモードの攻撃結果で解放 */
function unlockMonsterSecret(letter, damage) {

    /* 練習モードではひみつを解放しない */
  if (isPracticeMode) return;

  /* かんたんモードでは解放しない */
  if (battleDifficulty !== "hard") {
    return;
  }

  let newLevel = 0;

  if (damage >= 30) {
    newLevel = 2;
  } else if (damage >= 20) {
    newLevel = 1;
  }

  if (newLevel === 0) {
    return;
  }

  const secrets = loadMonsterSecrets();

  const oldLevel = secrets[letter] || 0;

  /* 既に同じ段階以上を解放していれば変更しない */
  if (oldLevel >= newLevel) {
    return;
  }

  secrets[letter] = newLevel;

  try {
    localStorage.setItem(
      monsterSecretStorageKey,
      JSON.stringify(secrets)
    );
  } catch (error) {
    console.warn(
      "ひみつの解放状況を保存できませんでした",
      error
    );
  }
}

async function showCollectionRewards() {

  const imageContainer =
    document.getElementById("collection-new-images");

  const emptyMessage =
    document.getElementById("collection-empty-message");

  const buttons =
    document.getElementById("collection-clear-buttons");

  if (!imageContainer || !emptyMessage || !buttons) {
    return;
  }

  /* 前回の表示をリセット */
  imageContainer.innerHTML = "";
  emptyMessage.hidden = true;
  buttons.hidden = true;

  /* 今回新しく獲得した画像 */
  const rewards = [...collectionNewImages];

  if (rewards.length === 0) {
    emptyMessage.hidden = false;
    buttons.hidden = false;
    return;
  }

  const typeNames = {
    normal: "つうじょう",
    small: "ひっと！",
    large: "だいだめーじ！",
    critical: "くりてぃかる!!"
  };

  /* 獲得画像をすべて同時に表示 */
  for (const reward of rewards) {

    const card = document.createElement("div");
    card.className = "collection-image-card";

    const image = document.createElement("img");
    image.src = reward.image;
    image.alt = reward.name;

    const name = document.createElement("div");
    name.className = "collection-image-card-name";
    name.textContent = reward.name;

    const type = document.createElement("div");
    type.className = "collection-image-card-type";
    type.textContent =
      typeNames[reward.type] || reward.type;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(type);

    imageContainer.appendChild(card);

  }

  /* 全画像を同時に表示した後にボタンを出す */
  buttons.hidden = false;
}


/* ============================================================================
   04 攻撃・効果音・演出
============================================================================ */

function playHitEffect() {

  monsterImage.classList.remove(
    "hit-flash"
  );

  /*
    同じ画像が続いても
    animationを再スタート
  */

  void monsterImage.offsetWidth;

  monsterImage.classList.add(
    "hit-flash"
  );
}

function playAttackSound(type) {
  if (!seEnabled) return;

  const sound =
    attackSounds[type];

  if (!sound) {
    return;
  }

  sound.currentTime = 0;

  sound.play().catch(() => {
    // Safariで再生できなかった場合は何もしない
  });
}

function playAttackEffect(type) {

  let effectURL = "";


  if (type === "small") {

    effectURL =
      "./assets/effects/small.png";

  } else if (type === "large") {

    effectURL =
      "./assets/effects/large.png";

  } else if (type === "critical") {

    effectURL =
      "./assets/effects/critical.png";

  } else {

    return;
  }


  hitEffect.src =
    effectURL;


  hitEffect.classList.remove(
    "show-small"
  );


  void hitEffect.offsetWidth;


  hitEffect.classList.add(
    "show-small"
  );
}

function playDefeatEffect(
  isCritical
) {

  monsterImage.classList.remove(
    "hit-flash",
    "defeat-normal",
    "defeat-critical"
  );

  void monsterImage.offsetWidth;

  if (isCritical) {

    monsterImage.classList.add(
      "defeat-critical"
    );

  } else {

    monsterImage.classList.add(
      "defeat-normal"
    );
  }
}

function getDamageResult(score) {

  if (score >= 72) {
    return {
      type: "critical",
      damage: 30,
      text: "くりてぃかる!!"
    };
  }

  if (score >= 55) {
    return {
      type: "large",
      damage: 20,
      text: "だいだめーじ！"
    };
  }

  return {
    type: "small",
    damage: 5,
    text: "ひっと！"
  };
}




/* ========================================
   ひらがなくえすと
   採点用お手本形状データ
======================================== */

/* ========================================
   「あ」正式PNG
   96×96 中心形状データ
======================================== */

const referenceA_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAA8AAAAAAAAAAAAQABDgAAAAAAAAAAAQACAfgAAAAAAAAAAQAEAAYAAAAAAAAAAQAIAAAAAAAAAAAAAIAQAAAAAAAAAAAAAEAgAAAAAAAAA//8ACBAAAAAAAAABAACABCAAAAAAAAAAAABAAkAAAAAAAAAAAAAgAYAAAAAAAAAAAAA+AQAAAAAAAAAAAABBAQAAAAAAAAAAAACAgQAAAAAAAAAAAAEAXwAAAAAAAAAAAAIAIIAAAAAAAAAAAAQAQEAAAAAAAAAAAAgAQCAAAAAAAAAAABAAQBAAAAAAAAAAAGAAgAgAAAAAAAAAAKAAgAeAAAAAAAAAAEAAgAB4AAAAAAAAAAABAAAGAAAAAAAAAAABAAABwAAAAAAAAAABAAAAMAAAAAAAAAABAAAACAAAAAAAAAACAAAACAAAAAAAAAACAAAABAAAAAAAAAACAAAABAAAAAAAAAAEAAAAAgAAAAAAAAAEAAAAAgAAAAAAAAAEAAAAAQAAAAAAAAAEAAAAAQAAAAAAAAAEAAAAAQAAAAAAAAAEAAAAAQAAAAAAAAAEAAAAAIAAAAAAAAAEAAAAAQAAAAAAAAAIAAAAAQAAAAAAAAAIAAAAAQAAAAAAAAAIAAAAAQAAAAAAAAAIAAAAAgAAAAAAAAAQAAAAAgAAAAAAAABwAAAAAgAAAAAAAAOIAAAABAAAAAAAA/wEAAAABAAAAAAABCACAAAACAAAAAAAAEABAAAAEAAAAAAAAIAAgAAAEAAAAAAAAIAAQAAAIAAAAAAAAIAAIAAAQAAAAAAAAIAAEAAAgAAAAAAAAIAAEAAAgAAAAAAAAIAAEAABAAAAAAAAAIAACAAGAAAAAAAAAIAABAAYAAAAAAAAAIAAAgDgAAAAAAAAAIAAAQ8AAAAAAAAAAIAAAPAAAAAAAAAAAQAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAgAAAAAAAAAAAAAgAgAAAAAAAAAAAAAcBAAAAAAAAAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";


/* ========================================
   Base64 → 96×96マスク
======================================== */

/* 関数 decodeReferenceMask：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ★ 前のJSで壊れていた部分を修復 */

const referenceAMask =
  decodeReferenceMask(
    referenceA_Base64
  );


/* ========================================
   「い」正式PNG
======================================== */

const referenceI_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAEAAAAAAAAgAAAAAACAAAAAAAAgAAAAAABAAAAAAAAgAAAAAAAgAAAAAAAgAAAAAAAQAAAAAAAgAAAAAAAQAAAAAAAQAAAAAAAIAAAAAAAQAAAAAAAIAAAAAAAQAAAAAAAEAAAAAAAQAAAAAAAEAAAAAAAQAAAAAAACAAAAAAAQAAAAAAABAAAAAAAQAAAAAAABAAAAAAAQAAAAAAAAgAAAAAAQAAAAAAAAgAAAAAAIAAAAAAAAQAAAAAAIAAAAAAAAQAAAAAAIAAAAAAAAQAAAAAAIAAAAAAAAIAAAAAAIAAIAAAAAIAAAAAAEAAQAAAAAIAAAAAAEAAgAAAAAEAAAAAAEAAgAAAAAEAAAAAAEAAgAAAAAAAAAAAACAAgAAAAAAAAAAAACABAAAAAAAAAAAAABABAAAAAAAAAAAAABACAAAAAAAAAAAAABACAAAAAAAAAAAAAAgCAAAAAAAAAAAAAAgCAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAIEAAAAAAAAAAAAAAEIAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceIMask =
  decodeReferenceMask(
    referenceI_Base64
  );


/* ========================================
   「う」正式PNG
======================================== */

const referenceU_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAHwcAAAAAAAAAAAAA4ACAAAAAAAAAAAAHAABAAAAAAAAAAAAYAAAgAAAAAAAAABBgAAAQAAAAAAAAAA+AAAAQAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAgAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAgAAAAAAAAAAAAAABAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAwAAAAAAAAAAAAAABAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAHAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceUMask =
  decodeReferenceMask(
    referenceU_Base64
  );


/* ========================================
   「え」正式PNG
======================================== */

const referenceE_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAHgAAAAAAAAAAAABD4YAAAAAAAAAAAAA8AEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAgAAAAAAAAAAABAAPAAAAAAAAAAAAAgBwAAAAAAAAAAAAAgCAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAgQAAAAAAAAAAAAAAggAAAAAAAAAAAAAARAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAQgAAAAAAAAAAAAAAgQAAAAAAAAAAAAAAgP/AAAAAAAAAAAAAgAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAD//wMAAAAAAAAAAAAAAPwAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAYgAAAAAAAAAAAAADgcAAAAAAAAAAAAAMACAAAAAAAAAAAAAQABAAAAAAAAAAAAAgAAgAAAAAAAAAAABAAAQAAAAAAAAAAACAAAIAAAAAAAAAAACAAAEAAAAAAAAAAAMAAACAAAAAAAAAAAQAAABgAAAAAAAAAAgAAAAYAHwAAAAAABAAAAAGAIOAAAAAP/AAAAABAQB+AAAAQBAAAAAA/gABwAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceEMask =
  decodeReferenceMask(
    referenceE_Base64
  );


/* ========================================
   「お」正式PNG
   正式1024×1024 PNGから
   中心線化して作り直した96×96参照マスク
======================================== */

const referenceO_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABB8AAAAAAAAAAAAABCAAAAAAAAAAAAAABEAAAAAAAAAAAAAABIAAAAAAAAAAAAAABwAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAABAAAAAAAAAACAAAAGgAAAAAAAAACAAAAIQAAAAAAAAACAA//wIAAAAAAAAACABAAAEAAAAAAAAACACAAACAAAAAAAAACAEAAABAAAAAAAAABAIAAAAgAAAAAAAAAgQAAAAYIAAAAAAAAfgAAAAHwAAAAAAAAggAAAAIAAAAAP///AgAAAAIAAAAAQAAgAgAAAAIAAAAAAABAAgAAAAQAAAAAAACAAgAAAAQAAAAAAAEAAgAAAH4AAAAAAAIAAgAAAKEAAAAAAAIAAgAAAECAAAAAAA4AAgAAAEBAAAAAAAIAAgAAAEAAAAAAAAIAAgAAAEAAAAAAAAIAAgAAAIAAAAAAAAIAAgAAAQAAAAAAAAIAAgAAAgAAAAAAAAIAAgAABAAAAAAAAAIAAgAACAAAAAAAAAEAAgAAEAAAAAAAAACAAgAAIAAAAAAAAABAAQAAQAAAAAAAAAAgAIAAgAAAAAAAAAAQAEABAAAAAAAAAAAIACACAAAAAAAAAAAEABAEAAAAAAAAAAACABAIAAAAAAAAAAABAA/4AAAAAAAAAAAAgBAIAAAAAAAAAAAAQCAEAAQAAAAAAAAAIEAD//gAAAAAAAAAH4ABAAAAAAAAAAAAIAABAAAAAAAAAAAAQAABAAAAAAAAAAAAgAABAAAAAAAAAAADAAAAAAAAAAAAAAAEAAAAAAAAAAAAAP/4AAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceOMask =
  decodeReferenceMask(
    referenceO_Base64
  );

/* ========================================
   「か」正式PNG
   正式1024×1024 PNGから
   中心線化して作成した96×96参照マスク
======================================== */

const referenceK_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQfgAAAAAAAAAAAAA/gYAAAAAAAAAAAAAgAEAAAAAAAAAAAAfAAEAAEAAAAAAAADiAAEAACAAAAAAAAcEAAEAABAAAAAAB/gEAAEAAAgAAAAAAAAEAAEAAAQAAAAAAAAEAAEAAAIAAAAAAAAEAAEAAAEAAAAAAAAIAAEAAAEAAAAAAAAIAAEAAACAAAAAAAAQAAEAAABAAAAAAAAQAAEAAABAAAAAAAAgAAEAAAAgAAAAAAAgAAIAAAAQAAAAAABAAAIAAAAQAAAAAABAAAIAAAAIAAAAAACAAAIAAAAIAAAAAACAAAIAAAAEAAAAAAEAAAQAAAAEAAAAAAEAAAQAAAACAAAAAAIAAAQAAAACAAAAAAIAAAQAAAAAAAAAAAQAAAgAAAAAAAAAAAQAAAgAAAAAAAAAAAgAAAgAAAAAAAAAABAAAAgAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAACAACAAAAAAAAAAAABAAEAAAAAAAAAAAAAgAEAAAAAAAAAAAAAQAEAAAAAAAAAAAAAIAIAAAAAAAAAAAAAEAIAAAAAAAAAAAAACAQAAAAAAAAAAAAABAQAAAAAAAAAAAAAAggAAAAAAAAAAAAAAbAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceKMask =
  decodeReferenceMask(
    referenceK_Base64
  );

/* ========================================
   「き」正式PNG
   正式1024×1024 PNGから
   中心線化して作成した96×96参照マスク
======================================== */

const referenceKI_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACAAAgAAAAAAAAAAACAB/AAAAAAAAAAAACAeAAAAAAAAAAAAABHgAAAAAAAAAAAAAD4AAAAAAAAAAAAAAcIAAAAAAAAAAAAAHgIAAAAAAAAAAAAA4AIAAAAAAAAAAAIPAAEAAAAAAAAAAAHwAAEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAgAYAAAAAAAAAAAAAgHgAAAAAAAAAAAAAR4AAAAAAAAAAAAAAeAAAAAAAAAAAAAAHiAAAAAAAAAAAAAD4CAAAAAAAAAAAD/8ACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceKIMask =
  decodeReferenceMask(
    referenceKI_Base64
  );

/* ========================================
   「く」参照マスク
======================================== */

const referenceKU_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAfgAAAAAAAAAAAAAA/gAAAAAAAAAAAAAB/wAAAAAAAAAAAAAD/4AAAAAAAAAAAAAH/8AAAAAAAAAAAAAP/+AAAAAAAAAAAAAf//AAAAAAAAAAAAA///gAAAAAAAAAAAB///4AAAAAAAAAAAB///8AAAAAAAAAAAB///8AAAAAAAAAAAB///+AAAAAAAAAAAD///+AAAAAAAAAAAH///8AAAAAAAAAAAP///4AAAAAAAAAAAP///wAAAAAAAAAAAf///wAAAAAAAAAAA////gAAAAAAAAAAB////AAAAAAAAAAAD///+AAAAAAAAAAAH///8AAAAAAAAAAAP///4AAAAAAAAAAAf///wAAAAAAAAAAA////gAAAAAAAAAAB////AAAAAAAAAAAD///+AAAAAAAAAAAH///8AAAAAAAAAAAP///4AAAAAAAAAAAf///wAAAAAAAAAAA////gAAAAAAAAAAB////AAAAAAAAAAAD///+AAAAAAAAAAAH///8AAAAAAAAAAAP///4AAAAAAAAAAAf///wAAAAAAAAAAA////gAAAAAAAAAAB////AAAAAAAAAAAD///+AAAAAAAAAAAD///8AAAAAAAAAAAD///8AAAAAAAAAAAD///+AAAAAAAAAAAB////AAAAAAAAAAAAf///gAAAAAAAAAAAP///wAAAAAAAAAAAH///4AAAAAAAAAAAD///8AAAAAAAAAAAB///+AAAAAAAAAAAA////AAAAAAAAAAAAf///gAAAAAAAAAAAf///wAAAAAAAAAAAP///4AAAAAAAAAAAH///8AAAAAAAAAAAD///+AAAAAAAAAAAB////AAAAAAAAAAAA////AAAAAAAAAAAAf///gAAAAAAAAAAAP///wAAAAAAAAAAAH///4AAAAAAAAAAAH///8AAAAAAAAAAAD///+AAAAAAAAAAAB///+AAAAAAAAAAAA////AAAAAAAAAAAAf///gAAAAAAAAAAAf///wAAAAAAAAAAAP///4AAAAAAAAAAAH///4AAAAAAAAAAAD///8AAAAAAAAAAAD///+AAAAAAAAAAAB///+AAAAAAAAAAAA////AAAAAAAAAAAA////AAAAAAAAAAAAf///gAAAAAAAAAAAf///gAAAAAAAAAAAP///AAAAAAAAAAAAP//+AAAAAAAAAAAAD//8AAAAAAAAAAAAB//4AAAAAAAAAAAAA//wAAAAAAAAAAAAAf/gAAAAAAAAAAAAAP/AAAAAAAAAAAAAAH+AAAAAAAAAAAAAAD8AAAAAAAAAAAAAAB4AAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceKUMask =
  decodeReferenceMask(referenceKU_Base64);

/* ========================================
   「こ」参照マスク
======================================== */

const referenceKO_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAP///8AAAAAAAAAAAf////4AAAAAAAAAAf/////AAAAAAAAAAf/////gAAAAAAAAAf/////gAAAAAAAAA//////gAAAAAAAAB//////gAAAAAAAAD//////gAAAAAAAAH//////gAAAAAAAB///////gAAAAAAAD///////+AAAAAAAD////////wAAAAAAB////////8AAAAAAA////////8AAAAAAAf///////+AAAAAAAP///////8AAAAAAAH///////4AAAAAAAD///////gAAAAAAAB//////+AAAAAAAAA//////4AAAAAAAAAf/////gAAAAAAAAAP/////gAAAAAAAAAAB////gAAAAAAAAAAA////gAAAAAAAAAAAf///gAAAAAAAAAAAP///AAAAAAAAAAAAH//8AAAAAAAAAAAAD//wAAAAAAAAAAAAB//AAAAAAAAAAAAAA/8AAAAAAAAAAAAAAf4AAAAAAAAAAAAAAPgAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAfwAAAAAAAAAAAAAA/4AAAAAAAAAAAAAB/8AAAAAAAAAAAAAD/+AAAAAAAAAAAAAH//AAAAAAAAAAAAAP//gAAAAAAAAAAAAf//wAAAAAAAAAAAA///4AAAAAAAAAAAB////AAAAAAAAAAAA////8AAAAAAAAAAA/////+AAPAAAAAAA/////////wAAAAAAf////////4AAAAAAf////////4AAAAAAP////////4AAAAAAP////////8AAAAAAH////////+AAAAAAD/////////AAAAAAA/////////gAAAAAAf////////wAAAAAAH////////+AAAAAAD/////////AAAAAAD/////////AAAAAAB/////////AAAAAAB////////4AAAAAAA///////8AAAAAAAAf//////4AAAAAAAAH//////4AAAAAAAAD//////4AAAAAAAAA//////4AAAAAAAAAP/////4AAAAAAAAAB/////4AAAAAAAAAAH////wAAAAAAAAAAAH///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceKOMask =
  decodeReferenceMask(referenceKO_Base64);




/* ========================================
   「け」参照マスク
======================================== */

const referenceKE_Base64 =
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAfgAAAAAAAAAAAAAA/gAAAAAAAAAAAAAB/wAAAAAAAAAAAAAD/4AAAAAAAAHAAAAH/8AAAAAAAAPgAAAP/+AAAAAAAAfwAAAf//AAAAAAAA/wAAA///gAAAAAAB/4AAB///wAAAAAAD/8AAB///8AAAAAAH/+AAB///+AAAAAAP//AAA///+AAAAAAf//gAA///+AAAAAA///wAA///+AAAAAB///8AA///+AAAAAA///+AA///vwAAAAA///+AA////4AAAAA///+AA////8AAAAA///+AA////8AAAAA///+A/////+AAAAA///B///////AAAAA///D///////gAAAA///H///////wAAAB///P///////4AAAB///f///////+AAAB////////////AAAB////////////gAAB////////////AAAB///////////4AAAB//////////8AAAAB//////////4AAAAB//////////4AAAAB//////////4AAAAB//////////4AAAAB//////////4AAAAB//////////4AAAAD//////////4AAAAD///v//////wAAAAD///n/////+AAAAAD///j/////+AAAAAD///h/////+AAAAAD//zA/8///+AAAAAD//3geA///+AAAAAD///wAA///+AAAAAD///4AA///+AAAAAD///8AA///+AAAAAD///+AA///+AAAAAD////AA///+AAAAAD////gA///+AAAAAD////wA///+AAAAAD////4A///+AAAAAD////4A///+AAAAAD////4A///+AAAAAD////4A///+AAAAAD////4B///+AAAAAD////4B///+AAAAAD////wB///8AAAAAD////wB///8AAAAAD////wD///8AAAAAD////gD///4AAAAAD////gH///4AAAAAB////gH///4AAAAAB////gH///wAAAAAB////AP///wAAAAAB////AP///gAAAAAB////Af///gAAAAAB///+Af///AAAAAAA///+A///+AAAAAAA///+B///+AAAAAAAf//8B///8AAAAAAAH//4D///4AAAAAAAD//wH///wAAAAAAAB//gP///gAAAAAAAA//Af///AAAAAAAAAf+Af//+AAAAAAAAAP8A///8AAAAAAAAAH4B///4AAAAAAAAAHwA///gAAAAAAAAADgAf//gAAAAAAAAAAAAP//AAAAAAAAAAAAAH/+AAAAAAAAAAAAAD/8AAAAAAAAAAAAAB/4AAAAAAAAAAAAAA/wAAAAAAAAAAAAAAfgAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

const referenceKEMask =
  decodeReferenceMask(referenceKE_Base64);



/* ========================================
   ひらがなくえすと
   採点・正規化形状判定
======================================== */

function createUserMaskOriginal() {

  const size =
    SCORE_GRID_SIZE;

  const offscreen =
    document.createElement(
      "canvas"
    );

  offscreen.width = size;

  offscreen.height = size;

  const offCtx =
    offscreen.getContext(
      "2d"
    );

  offCtx.clearRect(
    0,
    0,
    size,
    size
  );

  offCtx.strokeStyle =
    "#000";

  offCtx.lineCap =
    "round";

  offCtx.lineJoin =
    "round";

  const rect =
    canvas.getBoundingClientRect();

  /*
    実ゲームの10px線を
    96×96へ縮小
  */

  offCtx.lineWidth =
    Math.max(
      2,
      10 /
      rect.width *
      size
    );

  const scaleX =
    size /
    rect.width;

  const scaleY =
    size /
    rect.height;

  for (
    const stroke of strokes
  ) {

    if (
      stroke.length === 0
    ) {
      continue;
    }

    offCtx.beginPath();

    offCtx.moveTo(
      stroke[0].x *
      scaleX,

      stroke[0].y *
      scaleY
    );

    for (
      let i = 1;
      i < stroke.length;
      i++
    ) {

      offCtx.lineTo(

        stroke[i].x *
        scaleX,

        stroke[i].y *
        scaleY
      );
    }

    offCtx.stroke();
  }

  const imageData =
    offCtx.getImageData(
      0,
      0,
      size,
      size
    );

  const mask =
    new Uint8Array(
      size * size
    );

  for (
    let i = 0;
    i < mask.length;
    i++
  ) {

    const alpha =
      imageData.data[
        i * 4 + 3
      ];

    mask[i] =
      alpha > 70
        ? 1
        : 0;
  }

  return mask;
}

function createUserMaskHardKaRow() {
  const size = SCORE_GRID_SIZE;
  const offscreen = document.createElement("canvas");
  offscreen.width = size;
  offscreen.height = size;

  const offCtx = offscreen.getContext("2d");
  offCtx.clearRect(0, 0, size, size);
  offCtx.strokeStyle = "#000";
  offCtx.lineCap = "round";
  offCtx.lineJoin = "round";

  const rect = canvas.getBoundingClientRect();
  const scaleX = size / rect.width;
  const scaleY = size / rect.height;

  let transformX = x => x * scaleX;
  let transformY = y => y * scaleY;

  offCtx.lineWidth = Math.max(2, 10 * scaleX);

  // むずかしいモードの「か行」だけ正規化
  const hardKa =
    battleDifficulty === "hard" &&
    ["か", "き", "く", "け", "こ"].includes(currentLetter);

  if (hardKa) {
    const allPoints = strokes.flat().filter(
      p => Number.isFinite(p.x) && Number.isFinite(p.y)
    );

    const refs = {
      "か": referenceKMask,
      "き": referenceKIMask,
      "く": referenceKUMask,
      "け": referenceKEMask,
      "こ": referenceKOMask
    };

    const refBounds = getMaskBounds(refs[currentLetter]);

    if (allPoints.length >= 2 && refBounds) {
      const xs = allPoints.map(p => p.x);
      const ys = allPoints.map(p => p.y);

      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);

      const userW = maxX - minX;
      const userH = maxY - minY;

      const refW = refBounds.maxX - refBounds.minX;
      const refH = refBounds.maxY - refBounds.minY;

      if (userW > 1 && userH > 1) {
        // 縦横比を保ち、位置と全体サイズを揃える
        const factor = Math.min(
          refW / userW,
          refH / userH
        );

        const userCX = (minX + maxX) / 2;
        const userCY = (minY + maxY) / 2;
        const refCX =
          (refBounds.minX + refBounds.maxX) / 2;
        const refCY =
          (refBounds.minY + refBounds.maxY) / 2;

        transformX = x =>
          (x - userCX) * factor + refCX;
        transformY = y =>
          (y - userCY) * factor + refCY;

        offCtx.lineWidth =
  currentLetter === "こ"
    ? 2
    : Math.max(
        1.5,
        Math.min(5, 10 * factor)
      );
      }
    }
  }

  for (const stroke of strokes) {
    if (!stroke.length) continue;

    offCtx.beginPath();
    offCtx.moveTo(
      transformX(stroke[0].x),
      transformY(stroke[0].y)
    );

    for (let i = 1; i < stroke.length; i++) {
      offCtx.lineTo(
        transformX(stroke[i].x),
        transformY(stroke[i].y)
      );
    }

    offCtx.stroke();
  }

  const imageData = offCtx.getImageData(
    0, 0, size, size
  );

  const mask = new Uint8Array(size * size);

  for (let i = 0; i < mask.length; i++) {
    mask[i] =
      imageData.data[i * 4 + 3] > 70 ? 1 : 0;
  }

  return mask;
}

/* か行以外は従来の描画マスクをそのまま使用 */
function createUserMask() {
  const hardKaRow = battleDifficulty === "hard" &&
    ["か", "き", "く", "け", "こ"].includes(currentLetter);
  return hardKaRow ? createUserMaskHardKaRow() : createUserMaskOriginal();
}


function createDistanceMap(
  mask
) {

  const size =
    SCORE_GRID_SIZE;

  const total =
    size * size;

  const dist =
    new Float32Array(
      total
    );

  const INF = 9999;

  for (
    let i = 0;
    i < total;
    i++
  ) {

    dist[i] =
      mask[i]
        ? 0
        : INF;
  }

  const diagonal =
    Math.SQRT2;


  /* 左上 → 右下 */

  for (
    let y = 0;
    y < size;
    y++
  ) {

    for (
      let x = 0;
      x < size;
      x++
    ) {

      const i =
        y * size + x;

      let best =
        dist[i];

      if (x > 0) {

        best =
          Math.min(
            best,
            dist[i - 1] + 1
          );
      }

      if (y > 0) {

        best =
          Math.min(
            best,
            dist[i - size] + 1
          );
      }

      if (
        x > 0 &&
        y > 0
      ) {

        best =
          Math.min(
            best,
            dist[
              i - size - 1
            ] +
            diagonal
          );
      }

      if (
        x < size - 1 &&
        y > 0
      ) {

        best =
          Math.min(
            best,
            dist[
              i - size + 1
            ] +
            diagonal
          );
      }

      dist[i] = best;
    }
  }


  /* 右下 → 左上 */

  for (
    let y = size - 1;
    y >= 0;
    y--
  ) {

    for (
      let x = size - 1;
      x >= 0;
      x--
    ) {

      const i =
        y * size + x;

      let best =
        dist[i];

      if (
        x < size - 1
      ) {

        best =
          Math.min(
            best,
            dist[i + 1] + 1
          );
      }

      if (
        y < size - 1
      ) {

        best =
          Math.min(
            best,
            dist[i + size] + 1
          );
      }

      if (
        x < size - 1 &&
        y < size - 1
      ) {

        best =
          Math.min(
            best,
            dist[
              i + size + 1
            ] +
            diagonal
          );
      }

      if (
        x > 0 &&
        y < size - 1
      ) {

        best =
          Math.min(
            best,
            dist[
              i + size - 1
            ] +
            diagonal
          );
      }

      dist[i] = best;
    }
  }

  return dist;
}


function getMaskBounds(
  mask
) {

  const size =
    SCORE_GRID_SIZE;

  let minX = size;
  let minY = size;

  let maxX = -1;
  let maxY = -1;

  for (
    let y = 0;
    y < size;
    y++
  ) {

    for (
      let x = 0;
      x < size;
      x++
    ) {

      if (
        !mask[
          y * size + x
        ]
      ) {
        continue;
      }

      minX =
        Math.min(
          minX,
          x
        );

      minY =
        Math.min(
          minY,
          y
        );

      maxX =
        Math.max(
          maxX,
          x
        );

      maxY =
        Math.max(
          maxY,
          y
        );
    }
  }

  if (maxX < 0) {
    return null;
  }

  return {
    minX,
    minY,
    maxX,
    maxY
  };
}

function createCoarseGrid(
  mask
) {

  const sourceSize =
    SCORE_GRID_SIZE;

  const gridSize = 12;

  const grid =
    new Uint8Array(
      gridSize *
      gridSize
    );

  for (
    let gy = 0;
    gy < gridSize;
    gy++
  ) {

    for (
      let gx = 0;
      gx < gridSize;
      gx++
    ) {

      const x0 =
        Math.floor(
          gx *
          sourceSize /
          gridSize
        );

      const x1 =
        Math.ceil(
          (gx + 1) *
          sourceSize /
          gridSize
        );

      const y0 =
        Math.floor(
          gy *
          sourceSize /
          gridSize
        );

      const y1 =
        Math.ceil(
          (gy + 1) *
          sourceSize /
          gridSize
        );

      let found = false;

      for (
        let y = y0;
        y < y1 &&
        !found;
        y++
      ) {

        for (
          let x = x0;
          x < x1;
          x++
        ) {

          if (
            mask[
              y *
              sourceSize +
              x
            ]
          ) {

            found = true;

            break;
          }
        }
      }

      grid[
        gy *
        gridSize +
        gx
      ] =
        found
          ? 1
          : 0;
    }
  }

  return grid;
}

function getTotalStrokeLength() {

  let totalLength = 0;

  for (
    const stroke of strokes
  ) {

    for (
      let i = 1;
      i < stroke.length;
      i++
    ) {

      totalLength +=
        Math.hypot(

          stroke[i].x -
          stroke[i - 1].x,

          stroke[i].y -
          stroke[i - 1].y
        );
    }
  }

  return totalLength;
}



/* ========================================
   か行（むずかしい）検証済み形状判定
   か行テストPen 15ケース合格版から移植
======================================== */
function checkKaRowScribble() {
  if (strokes.length === 0) return false;

  const all = strokes.flat();

  if (all.length < 5) return false;

  const xs = all.map(p => p.x);
  const ys = all.map(p => p.y);

  const width = Math.max(
    1,
    Math.max(...xs) - Math.min(...xs)
  );

  const height = Math.max(
    1,
    Math.max(...ys) - Math.min(...ys)
  );

  const diagonal = Math.hypot(width, height);

  let totalLength = 0;

  for (const stroke of strokes) {
    if (stroke.length < 2) return false;

    let strokeLength = 0;

    for (let i = 1; i < stroke.length; i++) {
      strokeLength += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }

    totalLength += strokeLength;
  }

  /* 文字全体に対して線が異常に長い */
  if (totalLength > diagonal * 8) {
    return false;
  }

  return true;
}

function checkKaScribble() {
  if (!checkKaRowScribble()) return false;

  for (const stroke of strokes) {
    if (stroke.length < 2) return false;

    let pathLength = 0;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    let xTurns = 0;
    let yTurns = 0;
    let lastXDirection = 0;
    let lastYDirection = 0;

    for (let i = 0; i < stroke.length; i++) {
      const p = stroke[i];

      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);

      if (i === 0) continue;

      const dx = p.x - stroke[i - 1].x;
      const dy = p.y - stroke[i - 1].y;

      pathLength += Math.hypot(dx, dy);

      // 小さな手ぶれは数えない
      const xDirection =
        dx > 2 ? 1 : dx < -2 ? -1 : 0;

      const yDirection =
        dy > 2 ? 1 : dy < -2 ? -1 : 0;

      if (xDirection !== 0) {
        if (
          lastXDirection !== 0 &&
          xDirection !== lastXDirection
        ) xTurns++;

        lastXDirection = xDirection;
      }

      if (yDirection !== 0) {
        if (
          lastYDirection !== 0 &&
          yDirection !== lastYDirection
        ) yTurns++;

        lastYDirection = yDirection;
      }
    }

    const strokeW = Math.max(1, maxX - minX);
    const strokeH = Math.max(1, maxY - minY);
    const diagonal = Math.hypot(strokeW, strokeH);

    /* 各画の線が異常に長い */
    if (pathLength > diagonal * 3.5) {
      return false;
    }

    /* 何度も方向転換する落書き */
    if (xTurns >= 4 || yTurns >= 4) {
      return false;
    }
  }

  return true;
}

function checkKuScribble() {
  if (!checkKaRowScribble()) return false;
  if (strokes.length !== 1) return false;

  const stroke = strokes[0];
  if (stroke.length < 3) return false;

  const xs = stroke.map(p => p.x);
  const ys = stroke.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const w = Math.max(1, maxX - minX);
  const h = Math.max(1, maxY - minY);
  const diagonal = Math.hypot(w, h);

  let pathLength = 0;
  let backwardY = 0;

  for (let i = 1; i < stroke.length; i++) {
    const dx = stroke[i].x - stroke[i - 1].x;
    const dy = stroke[i].y - stroke[i - 1].y;

    pathLength += Math.hypot(dx, dy);

    if (dy < 0) backwardY += -dy;
  }

  /* 長すぎる線・上下の往復を除外 */
  if (pathLength > diagonal * 2.2) return false;
  if (backwardY > h * 0.25) return false;

  /* 左端に到達する点を折れ曲がり地点とする */
  let bendIndex = 0;
  for (let i = 1; i < stroke.length; i++) {
    if (stroke[i].x < stroke[bendIndex].x) {
      bendIndex = i;
    }
  }

  /* 折れ曲がりが始点・終点に近すぎない */
  if (
    bendIndex < stroke.length * 0.15 ||
    bendIndex > stroke.length * 0.85
  ) return false;

  const start = stroke[0];
  const bend = stroke[bendIndex];
  const end = stroke[stroke.length - 1];

  /* 上→折れ曲がり→下 の位置関係 */
  if (!(start.y < bend.y && bend.y < end.y)) {
    return false;
  }

  /* 左端への移動と右方向への戻り */
  if (start.x - bend.x < w * 0.30) return false;
  if (end.x - bend.x < w * 0.30) return false;

  /* 折れ曲がり前後の余計な横方向の往復 */
  let wrongBefore = 0;
  let wrongAfter = 0;

  for (let i = 1; i < stroke.length; i++) {
    const dx = stroke[i].x - stroke[i - 1].x;

    if (i <= bendIndex && dx > 0) {
      wrongBefore += dx;
    }

    if (i > bendIndex && dx < 0) {
      wrongAfter += -dx;
    }
  }

  if (wrongBefore > w * 0.20) return false;
  if (wrongAfter > w * 0.20) return false;

  return true;
}

function checkKeScribble() {
  if (!checkKaRowScribble()) return false;
  if (strokes.length !== 3) return false;

  const all = strokes.flat();
  const xs = all.map(p => p.x);
  const ys = all.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const w = Math.max(1, maxX - minX);
  const h = Math.max(1, maxY - minY);

  const first = strokes[0];
  const second = strokes[1];
  const third = strokes[2];

  /* 各画の長さ・逆走チェック */
  for (let s = 0; s < 3; s++) {
    const stroke = strokes[s];
    if (stroke.length < 3) return false;

    let length = 0;
    let backward = 0;

    const sx = stroke.map(p => p.x);
    const sy = stroke.map(p => p.y);

    const sw = Math.max(1, Math.max(...sx) - Math.min(...sx));
    const sh = Math.max(1, Math.max(...sy) - Math.min(...sy));

    for (let i = 1; i < stroke.length; i++) {
      const dx = stroke[i].x - stroke[i - 1].x;
      const dy = stroke[i].y - stroke[i - 1].y;

      length += Math.hypot(dx, dy);

      if (s === 1) {
        if (dx < 0) backward += -dx;
      } else {
        if (dy < 0) backward += -dy;
      }
    }

    if (length > Math.hypot(sw, sh) * 2.5) {
      return false;
    }

    if (s === 1) {
      if (backward > sw * 0.30) return false;
    } else {
      if (backward > sh * 0.30) return false;
    }
  }

  /* 1画目と3画目の左右関係 */
  const firstAvgX =
    first.reduce((sum, p) => sum + p.x, 0) / first.length;

  const thirdAvgX =
    third.reduce((sum, p) => sum + p.x, 0) / third.length;

  if (thirdAvgX - firstAvgX < w * 0.20) {
    return false;
  }

  /* 線分の交差判定 */
  function intersects(a, b, c, d) {
    const cross = (p, q, r) =>
      (q.x - p.x) * (r.y - p.y) -
      (q.y - p.y) * (r.x - p.x);

    const v1 = cross(a, b, c);
    const v2 = cross(a, b, d);
    const v3 = cross(c, d, a);
    const v4 = cross(c, d, b);

    return (
      v1 * v2 < 0 &&
      v3 * v4 < 0
    );
  }

  function strokesCross(a, b) {
    for (let i = 1; i < a.length; i++) {
      for (let j = 1; j < b.length; j++) {
        if (intersects(
          a[i - 1], a[i],
          b[j - 1], b[j]
        )) {
          return true;
        }
      }
    }
    return false;
  }

  /* 1画目と3画目は交差禁止 */
  if (strokesCross(first, third)) {
    return false;
  }

 
/* ========================================
   「け」の文字構造チェック
======================================== */

/* 2画目と3画目は交差が必要 */
if (!strokesCross(second, third)) {
  return false;
}

/* 2画目が右方向へ伸びているか */
const secondStart = second[0];
const secondEnd = second[second.length - 1];

if (secondEnd.x - secondStart.x < w * 0.12) {
  return false;
}

/* 2画目が文字の左側から始まるか */
if (secondStart.x > minX + w * 0.55) {
  return false;
}

/* 3画目が文字の右側から始まるか */
const thirdStart = third[0];

if (thirdStart.x < minX + w * 0.50) {
  return false;
}

/* 2画目の位置が極端に高すぎないか */
if (secondStart.y < minY + h * 0.15) {
  return false;
}


/* ========================================
   「け」専用
   2画目の開始位置チェック
======================================== */

const firstStartX = first[0].x;

/* 2画目が1画目より大きく左から始まればNG */
if (
  secondStart.x <
  firstStartX - w * 0.03
) {
  return false;
}


return true;

}

function checkKoLineShape() {
  window.koShapeReason = "OK";
  window.koLengthRatio = 0;

  if (strokes.length !== 2) {
    window.koShapeReason = "画数違い";
    return false;
  }

  const all = strokes.flat();

  if (all.length < 4) {
    window.koShapeReason = "点が少ない";
    return false;
  }

  const xs = all.map(p => p.x);
  const ys = all.map(p => p.y);

  const width = Math.max(
    1,
    Math.max(...xs) - Math.min(...xs)
  );

  for (const stroke of strokes) {
    if (stroke.length < 2) {
      window.koShapeReason = "点が少ない";
      return false;
    }

    const start = stroke[0];
    const end = stroke[stroke.length - 1];

    let pathLength = 0;
    let backwardLength = 0;

    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < stroke.length; i++) {
      const p = stroke[i];

      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);

      if (i === 0) continue;

      const dx = p.x - stroke[i - 1].x;
      const dy = p.y - stroke[i - 1].y;

      pathLength += Math.hypot(dx, dy);

      if (dx < 0) {
        backwardLength += -dx;
      }
    }

    const strokeWidth = maxX - minX;
    const strokeHeight = maxY - minY;

    const straightDistance = Math.hypot(
      end.x - start.x,
      end.y - start.y
    );

    const ratio =
      pathLength / Math.max(1, straightDistance);

    window.koLengthRatio = Math.max(
      window.koLengthRatio,
      ratio
    );

    if (strokeWidth < width * 0.25) {
      window.koShapeReason = "横方向不足";
      return false;
    }

    if (strokeHeight > strokeWidth * 1.2) {
      window.koShapeReason = "縦長すぎる";
      return false;
    }

    if (
      backwardLength >
      Math.max(1, strokeWidth) * 0.65
    ) {
      window.koShapeReason = "左右の往復";
      return false;
    }

    if (
      pathLength >
      Math.max(1, strokeWidth) * 3.5
    ) {
      window.koShapeReason = "線が長すぎる";
      return false;
    }
  }

  return true;
}

function calculateScoreWithReference(
  referenceMask
) {

  const userMask =
    createUserMask();

  let userPixelCount = 0;

  for (
    const value of userMask
  ) {

    userPixelCount += value;
  }


  /* ほぼ何も書いていない */

  if (
    userPixelCount < 20
  ) {

    return 0;
  }


  const refDistance =
    createDistanceMap(
      referenceMask
    );

  const userDistance =
    createDistanceMap(
      userMask
    );


  let userDistanceSum = 0;

  let userCount = 0;

  let refDistanceSum = 0;

  let refCount = 0;


  for (
    let i = 0;
    i < userMask.length;
    i++
  ) {

    /*
      書いた線が
      お手本中心線から
      どれだけ離れているか
    */

    if (userMask[i]) {

      userDistanceSum +=
        refDistance[i];

      userCount++;
    }


    /*
      お手本の必要な部分を
      どれだけ書けているか
    */

    if (
      referenceMask[i]
    ) {

      refDistanceSum +=
        userDistance[i];

      refCount++;
    }
  }


  const averageUserToRef =
    userDistanceSum /
    Math.max(
      1,
      userCount
    );


  const averageRefToUser =
    refDistanceSum /
    Math.max(
      1,
      refCount
    );


  /* ① precision */

  const precisionScore =
    Math.max(
      0,
      100 -
      averageUserToRef *
      11
    );


  /* ② coverage */

  const coverageScore =
    Math.max(
      0,
      100 -
      averageRefToUser *
      12
    );


  /* ③ 全体形状 */

  const userGrid =
    createCoarseGrid(
      userMask
    );

  const refGrid =
    createCoarseGrid(
      referenceMask
    );

  let intersection = 0;

  let userCells = 0;

  let refCells = 0;


  for (
    let i = 0;
    i < userGrid.length;
    i++
  ) {

    if (
      userGrid[i]
    ) {
      userCells++;
    }

    if (
      refGrid[i]
    ) {
      refCells++;
    }

    if (
      userGrid[i] &&
      refGrid[i]
    ) {
      intersection++;
    }
  }


  const gridPrecision =
    intersection /
    Math.max(
      1,
      userCells
    );


  const gridRecall =
    intersection /
    Math.max(
      1,
      refCells
    );


  const gridScore =
    (
      gridPrecision +
      gridRecall
    ) > 0

      ? (
          2 *
          gridPrecision *
          gridRecall /
          (
            gridPrecision +
            gridRecall
          )
        ) * 100

      : 0;


  /* ④ 位置・大きさ */

  const userBounds =
    getMaskBounds(
      userMask
    );

  const refBounds =
    getMaskBounds(
      referenceMask
    );

  let positionSizeScore = 0;


  if (
    userBounds &&
    refBounds
  ) {

    const userCenterX =
      (
        userBounds.minX +
        userBounds.maxX
      ) / 2;


    const userCenterY =
      (
        userBounds.minY +
        userBounds.maxY
      ) / 2;


    const refCenterX =
      (
        refBounds.minX +
        refBounds.maxX
      ) / 2;


    const refCenterY =
      (
        refBounds.minY +
        refBounds.maxY
      ) / 2;


    const centerDistance =
      Math.hypot(

        userCenterX -
        refCenterX,

        userCenterY -
        refCenterY

      ) /
      SCORE_GRID_SIZE;


    const userWidth =
      (
        userBounds.maxX -
        userBounds.minX +
        1
      ) /
      SCORE_GRID_SIZE;


    const userHeight =
      (
        userBounds.maxY -
        userBounds.minY +
        1
      ) /
      SCORE_GRID_SIZE;


    const refWidth =
      (
        refBounds.maxX -
        refBounds.minX +
        1
      ) /
      SCORE_GRID_SIZE;


    const refHeight =
      (
        refBounds.maxY -
        refBounds.minY +
        1
      ) /
      SCORE_GRID_SIZE;


    const sizeError =
      Math.abs(
        userWidth -
        refWidth
      ) +
      Math.abs(
        userHeight -
        refHeight
      );


    positionSizeScore =
      Math.max(
        0,

        100 -

        centerDistance *
        160 -

        sizeError *
        70
      );
  }


  /* ⑤ ぐちゃぐちゃ対策 */

  const rect =
    canvas.getBoundingClientRect();

  const totalLength =
    getTotalStrokeLength();

  const lengthRatio =
    totalLength /
    rect.width;


  let scribblePenalty = 0;


  /* 異常に長い */

  if (
    lengthRatio > 5
  ) {

    scribblePenalty +=
      Math.min(

        35,

        (
          lengthRatio -
          5
        ) * 10
      );
  }


  /* 極端に短い */

  if (
    lengthRatio < 1.5
  ) {

    scribblePenalty +=
      Math.min(

        25,

        (
          1.5 -
          lengthRatio
        ) * 15
      );
  }

/*
  「お」専用
  ぐちゃぐちゃ書き対策

  お手本を広く覆っているのに
  線の正確さが低い場合は、
  ぐちゃぐちゃ書きの可能性が高い。
*/

if (
  currentLetter === "お" &&
  coverageScore >= 72 &&
  precisionScore < 60
) {

　
  
  scribblePenalty += 22;
}
　　

  /* ========================================
     最終点
  ======================================== */

  let score =

    precisionScore *
    0.34 +

    coverageScore *
    0.34 +

    gridScore *
    0.22 +

    positionSizeScore *
    0.10 -

    scribblePenalty;

  
  if (currentLetter === "こ") {
  score =
    precisionScore * 0.45 +
    coverageScore * 0.45 +
    gridScore * 0.10;
}

  　  /* ========================================
     「か」専用
     幼児書き救済
  ======================================== */

  if (
    currentLetter === "か" &&
    scribblePenalty === 0 &&
    score < 72
  ) {

    score += 5;
  }

　　/* ========================================
   「く」専用
   全体スコア補正
======================================== */

if (currentLetter === "く") {
  score += 10;
}
  
  score =
    Math.max(
      0,
      Math.min(
        100,
        score
      )
    );


  /*
    調整用。
    Consoleを見られる環境では
    内訳確認可能。
  */

　　/* ========================================
   「け」専用
   丁寧書き救済
======================================== */

if (
  currentLetter === "け" &&
  score >= 65
) {
  score += 3;
}

  /* ========================================
   「こ」専用
   丁寧書き救済
======================================== */

if (
  currentLetter === "こ" &&
  score >= 68
) {
  score += 1;
}



　/* ========================================
   「い」専用
   採点補正
======================================== */

if (
  currentLetter === "い"
) {
  score += 16;
}

  /* ========================================
   「え」専用
   採点補正
======================================== */

if (
  currentLetter === "え"
) {
  score += 7;
}

  /* ========================================
   「お」専用
   採点補正
======================================== */

if (
  currentLetter === "お"
) {
  score += 11;
}
  
  return Math.round(score);
}

function calculateScore() {

  /* あ */
  if (currentLetter === "あ") {
    return calculateScoreWithReference(
      referenceAMask
    );
  }

  /* い */
  if (currentLetter === "い") {
    return calculateScoreWithReference(
      referenceIMask
    );
  }

  /* う */
  if (currentLetter === "う") {
    return calculateScoreWithReference(
      referenceUMask
    );
  }

  /* え */
  if (currentLetter === "え") {
    return calculateScoreWithReference(
      referenceEMask
    );
  }

  /* お */
  if (currentLetter === "お") {
    return calculateScoreWithReference(
      referenceOMask
    );
  }

  /* か */
  if (currentLetter === "か") {
    return calculateScoreWithReference(
      referenceKMask
    );
  }

  /* き */
  if (currentLetter === "き") {
    return calculateScoreWithReference(
      referenceKIMask
    );
  }

　/* く */
if (currentLetter === "く") {
  return calculateScoreWithReference(
    referenceKUMask
  );
}

  /* け */
if (currentLetter === "け") {
  return calculateScoreWithReference(
    referenceKEMask
  );
}

/* こ */
if (currentLetter === "こ") {
  return calculateScoreWithReference(
    referenceKOMask
  );
}
  
  return 0;
}

function checkStrokeOrder() {

  /* ========================================
     「あ」の書き順
  ======================================== */

  if (
    currentLetter === "あ"
  ) {

    /*
      画数違いでも攻撃可能。
      正しい3画だった場合のみ
      簡易書き順判定。
    */

    if (
      strokes.length !== 3
    ) {

      return false;
    }


    const first =
      strokes[0];

    const second =
      strokes[1];

    const third =
      strokes[2];


    if (
      first.length < 2 ||
      second.length < 2 ||
      third.length < 2
    ) {

      return false;
    }


    const firstOK =

      first[
        first.length - 1
      ].x >

      first[0].x;


    const secondOK =

      second[
        second.length - 1
      ].y >

      second[0].y;


    const width =
      canvas
        .getBoundingClientRect()
        .width;


    const thirdOK =

      third[0].x >
      width * 0.50;


    return (
      firstOK &&
      secondOK &&
      thirdOK
    );
  }


  
  /* ========================================
     「い」の書き順
  ======================================== */

  if (currentLetter === "い") {

    /* 「い」は2画 */
    if (strokes.length !== 2) {
      return false;
    }

    const first = strokes[0];
    const second = strokes[1];

    if (first.length < 2 || second.length < 2) {
      return false;
    }

    const firstStart = first[0];
    const firstEnd = first[first.length - 1];

    const secondStart = second[0];
    const secondEnd = second[second.length - 1];

    /* 1画目が2画目より左から始まる */
    const orderOK =
      secondStart.x > firstStart.x;

    /* 両方とも上から下に書かれている */
    const firstDirectionOK =
      firstEnd.y > firstStart.y;

    const secondDirectionOK =
      secondEnd.y > secondStart.y;

    return (
      orderOK &&
      firstDirectionOK &&
      secondDirectionOK
    );
  }



  /* ========================================
   「う」の書き順
======================================== */

if (
  currentLetter === "う"
) {

  // 「う」は2画
  if (
    strokes.length !== 2
  ) {

    return false;
  }


  const first =
    strokes[0];

  const second =
    strokes[1];


  if (
    first.length < 2 ||
    second.length < 2
  ) {

    return false;
  }


  /*
    1画目は上、
    2画目は下から始まる。
  */

  const firstStartY =
    first[0].y;

  const secondStartY =
    second[0].y;


  const height =
    canvas
      .getBoundingClientRect()
      .height;


  return (
    secondStartY -
    firstStartY >
    height * 0.12
  );
}

　/* ========================================
   「え」の書き順
======================================== */

if (
  currentLetter === "え"
) {

  // 「え」は2画
  if (
    strokes.length !== 2
  ) {

    return false;
  }


  const first =
    strokes[0];

  const second =
    strokes[1];


  if (
    first.length < 2 ||
    second.length < 2
  ) {

    return false;
  }


  /*
    1画目は上、
    2画目は下から始まる。
  */

  const firstStartY =
    first[0].y;

  const secondStartY =
    second[0].y;


  const height =
    canvas
      .getBoundingClientRect()
      .height;


  return (
  secondStartY -
  firstStartY >
  height * 0.08
);
}

/* ========================================
   「お」の書き順
   文字自身の位置・大きさを基準に判定
======================================== */

if (currentLetter === "お") {

  /* 「お」は3画 */
  if (strokes.length !== 3) {
    return false;
  }

  const first = strokes[0];
  const second = strokes[1];
  const third = strokes[2];

  if (
    first.length < 2 ||
    second.length < 2 ||
    third.length < 2
  ) {
    return false;
  }

  /* ========================================
     文字全体の位置・大きさ
  ======================================== */

  const allPoints = strokes.flat();

  const xs = allPoints.map(p => p.x);
  const ys = allPoints.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const letterWidth = Math.max(1, maxX - minX);
  const letterHeight = Math.max(1, maxY - minY);

  /* ========================================
     1画目：左から右への横線
  ======================================== */

  const firstStart = first[0];
  const firstEnd = first[first.length - 1];

  const firstDX = firstEnd.x - firstStart.x;
  const firstDY = firstEnd.y - firstStart.y;

  const firstOK =
    firstDX >= letterWidth * 0.12 &&
    Math.abs(firstDY) <= letterHeight * 0.25;

  /* ========================================
     2画目：上から下へ進む
  ======================================== */

  const secondStart = second[0];

  const secondMinY = Math.min(
    ...second.map(p => p.y)
  );

  const secondMaxY = Math.max(
    ...second.map(p => p.y)
  );

  const secondOK =
    secondStart.y <=
      firstStart.y + letterHeight * 0.18 &&
    secondMaxY - secondStart.y >=
      letterHeight * 0.30 &&
    secondStart.y <=
      secondMinY + letterHeight * 0.20;

  /* ========================================
     3画目：右上の点
  ======================================== */

  const thirdStart = third[0];
  const thirdEnd = third[third.length - 1];

  const thirdCenterX =
    (thirdStart.x + thirdEnd.x) / 2;

  const thirdCenterY =
    (thirdStart.y + thirdEnd.y) / 2;

  const thirdOK =
    thirdCenterX >=
      minX + letterWidth * 0.50 &&
    thirdCenterY <=
      minY + letterHeight * 0.60;

  /* ========================================
     最終判定
  ======================================== */

  return firstOK && secondOK && thirdOK;
}

/* ========================================
   「か」の書き順
   書いた文字自身の位置・大きさを基準に判定
======================================== */

if (currentLetter === "か") {

  if (strokes.length !== 3) {
    return false;
  }

  const first  = strokes[0];
  const second = strokes[1];
  const third  = strokes[2];

  if (
    first.length < 2 ||
    second.length < 2 ||
    third.length < 2
  ) {
    return false;
  }

  /* ----------------------------------------
     書いた「か」全体の外接範囲
  ---------------------------------------- */

  const allPoints = [
    ...first,
    ...second,
    ...third
  ];

  const minX = Math.min(...allPoints.map(p => p.x));
  const maxX = Math.max(...allPoints.map(p => p.x));
  const minY = Math.min(...allPoints.map(p => p.y));
  const maxY = Math.max(...allPoints.map(p => p.y));

  const letterWidth  = Math.max(1, maxX - minX);
  const letterHeight = Math.max(1, maxY - minY);

  /* ----------------------------------------
     1画目
     左寄りから始まり、右方向へ進む
  ---------------------------------------- */

  const firstStart = first[0];
  const firstEnd   = first[first.length - 1];

  const firstOK =
    firstStart.x <
      minX + letterWidth * 0.55 &&
    firstEnd.x >
      firstStart.x;

  /* ----------------------------------------
     2画目
     1画目より上側付近から始まり、
     下方向へしっかり進む
  ---------------------------------------- */

  const secondStart = second[0];
  const secondEnd   = second[second.length - 1];

  const secondOK =
    secondStart.y <
      firstStart.y + letterHeight * 0.18 &&
    secondEnd.y >
      secondStart.y + letterHeight * 0.20;

  /* ----------------------------------------
     3画目
     文字の右側から始まる
  ---------------------------------------- */

  const thirdStart = third[0];

  const thirdOK =
    thirdStart.x >
      minX + letterWidth * 0.48;

  return (
    firstOK &&
    secondOK &&
    thirdOK
  );
}

　/* ========================================
   「き」の書き順
   書いた文字自身の位置・大きさを基準に判定
======================================== */

if (currentLetter === "き") {

  if (strokes.length !== 4) {
    return false;
  }

  const first  = strokes[0];
  const second = strokes[1];
  const third  = strokes[2];
  const fourth = strokes[3];

  if (
    first.length < 2 ||
    second.length < 2 ||
    third.length < 2 ||
    fourth.length < 2
  ) {
    return false;
  }

  /* ----------------------------------------
     書いた「き」全体の外接範囲
  ---------------------------------------- */

  const allPoints = [
    ...first,
    ...second,
    ...third,
    ...fourth
  ];

  const minX = Math.min(...allPoints.map(p => p.x));
  const maxX = Math.max(...allPoints.map(p => p.x));
  const minY = Math.min(...allPoints.map(p => p.y));
  const maxY = Math.max(...allPoints.map(p => p.y));

  const letterWidth  = Math.max(1, maxX - minX);
  const letterHeight = Math.max(1, maxY - minY);

  const firstStart  = first[0];
  const firstEnd    = first[first.length - 1];

  const secondStart = second[0];
  const secondEnd   = second[second.length - 1];

  const thirdStart  = third[0];
  const thirdEnd    = third[third.length - 1];

  const fourthStart = fourth[0];

  /* ----------------------------------------
     1画目：上の横線
  ---------------------------------------- */

  const firstOK =
    firstStart.y <
      minY + letterHeight * 0.50 &&
    firstEnd.x >
      firstStart.x;

  /* ----------------------------------------
     2画目：1画目より下の横線
  ---------------------------------------- */

  const secondOK =
    secondStart.y >
      firstStart.y &&
    secondEnd.x >
      secondStart.x;

  /* ----------------------------------------
     3画目：上から下へ進む線
  ---------------------------------------- */

  const thirdOK =
    thirdStart.y <
      minY + letterHeight * 0.45 &&
    thirdEnd.y >
      thirdStart.y + letterHeight * 0.20;

  /* ----------------------------------------
     4画目：2画目より下側から始まる
  ---------------------------------------- */

  const fourthOK =
    fourthStart.y >
      secondStart.y;

  return (
    firstOK &&
    secondOK &&
    thirdOK &&
    fourthOK
  );
}

 
/* ========================================
   「く」の書き順
   文字の位置・大きさに依存しない判定
======================================== */
if (currentLetter === "く") {
  if (strokes.length !== 1) return false;

  const stroke = strokes[0];
  if (stroke.length < 3) return false;

  const xs = stroke.map(p => p.x);
  const ys = stroke.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const letterW = Math.max(1, maxX - minX);
  const letterH = Math.max(1, maxY - minY);

  const start = stroke[0];
  const end = stroke[stroke.length - 1];

  /* 上から書き始めている */
  const startOK =
    start.y < minY + letterH * 0.35;

  /* 左側に折れ曲がる */
  const bendOK =
    start.x > minX + letterW * 0.35 &&
    end.x > minX + letterW * 0.35;

  /* 下方向に書き終えている */
  const endOK =
    end.y > minY + letterH * 0.65 &&
    end.y - start.y > letterH * 0.40;

  return startOK && bendOK && endOK;
}


/* ========================================
   「け」の書き順
   文字自身の位置・大きさを基準に判定
======================================== */
if (currentLetter === "け") {
  if (strokes.length !== 3) return false;

  const first = strokes[0];
  const second = strokes[1];
  const third = strokes[2];

  if (
    first.length < 2 ||
    second.length < 2 ||
    third.length < 2
  ) return false;

  const all = strokes.flat();
  const xs = all.map(p => p.x);
  const ys = all.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const w = Math.max(1, maxX - minX);
  const h = Math.max(1, maxY - minY);

  const firstStart = first[0];
  const firstEnd = first[first.length - 1];

  const secondStart = second[0];
  const secondEnd = second[second.length - 1];

  const thirdStart = third[0];
  const thirdEnd = third[third.length - 1];

  /* 1画目：左側で上から下へ */
  const firstOK =
    firstStart.x < minX + w * 0.50 &&
    firstEnd.y > firstStart.y + h * 0.15;

  /* 2画目：横方向へ進む */
  const secondOK =
    secondStart.y < minY + h * 0.65 &&
    secondEnd.x > secondStart.x + w * 0.12;

  /* 3画目：右側で上から下へ */
  const thirdOK =
    thirdStart.x > minX + w * 0.45 &&
    thirdEnd.y > thirdStart.y + h * 0.20;

  return firstOK && secondOK && thirdOK;
}


/* ========================================
   「こ」の書き順
   文字の位置・大きさに依存しない判定
======================================== */

if (currentLetter === "こ") {
  if (strokes.length !== 2) return false;

  const first = strokes[0];
  const second = strokes[1];

  if (
    first.length < 2 ||
    second.length < 2
  ) return false;

  const all = [...first, ...second];

  const xs = all.map(p => p.x);
  const ys = all.map(p => p.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const letterW = Math.max(1, maxX - minX);
  const letterH = Math.max(1, maxY - minY);

  const firstStart = first[0];
  const firstEnd = first[first.length - 1];
  const secondStart = second[0];

  /* 1画目：左から右へ */
  const firstDirectionOK =
    firstEnd.x - firstStart.x > letterW * 0.15;

  /* 2画目：1画目より下から開始 */
  const secondPositionOK =
    secondStart.y - firstStart.y > letterH * 0.15;

  /* 2画目：1画目の終点より左から開始 */
  const secondLeftOK =
    secondStart.x < firstEnd.x;

  return (
    firstDirectionOK &&
    secondPositionOK &&
    secondLeftOK
  );
}
  
  /* ========================================
     その他の文字
     現時点では書き順判定なし
  ======================================== */

  return true;
}


/* ========================================
   ひらがなくえすと
   むずかしい専用採点
======================================== */

/* むずかしい「あ」専用：正規化形状診断 */
function calculateNormalizedScoreA() {
  const size = SCORE_GRID_SIZE;
  const userMask = createUserMask();
  const refMask = referenceAMask;

  const ub = getMaskBounds(userMask);
  const rb = getMaskBounds(refMask);

  if (!ub || !rb) return 0;

  const uw = ub.maxX - ub.minX + 1;
  const uh = ub.maxY - ub.minY + 1;
  const rw = rb.maxX - rb.minX + 1;
  const rh = rb.maxY - rb.minY + 1;

  if (uw < 3 || uh < 3) return 0;

  /* 縦横比を維持したまま拡大・縮小 */
  const scale = Math.min(rw / uw, rh / uh);

  const ucx = (ub.minX + ub.maxX) / 2;
  const ucy = (ub.minY + ub.maxY) / 2;
  const rcx = (rb.minX + rb.maxX) / 2;
  const rcy = (rb.minY + rb.maxY) / 2;

  const normalized = new Uint8Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const sx = Math.round((x - rcx) / scale + ucx);
      const sy = Math.round((y - rcy) / scale + ucy);

      if (
        sx >= 0 && sx < size &&
        sy >= 0 && sy < size &&
        userMask[sy * size + sx]
      ) {
        normalized[y * size + x] = 1;
      }
    }
  }

  const refDistance = createDistanceMap(refMask);
  const userDistance = createDistanceMap(normalized);

  let userSum = 0;
  let refSum = 0;
  let userCount = 0;
  let refCount = 0;

  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i]) {
      userSum += refDistance[i];
      userCount++;
    }
    if (refMask[i]) {
      refSum += userDistance[i];
      refCount++;
    }
  }

  if (!userCount || !refCount) return 0;

  const precision = Math.max(
    0, 100 - (userSum / userCount) * 11
  );

  const coverage = Math.max(
    0, 100 - (refSum / refCount) * 12
  );

  return Math.round(
    precision * 0.5 + coverage * 0.5
  );
}

/* むずかしい「あ」専用：3画の形状診断 */
function diagnoseHardAStrokes() {

  if (strokes.length !== 3) {
    return "3画診断：対象外";
  }

  const lengths = strokes.map(stroke => {
    let length = 0;

    for (let i = 1; i < stroke.length; i++) {
      length += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }

    return length;
  });

  const allPoints = strokes.flat();

  const xs = allPoints.map(p => p.x);
  const ys = allPoints.map(p => p.y);

  const width = Math.max(
    1,
    Math.max(...xs) - Math.min(...xs)
  );

  const height = Math.max(
    1,
    Math.max(...ys) - Math.min(...ys)
  );

  const first = strokes[0];
  const second = strokes[1];
  const third = strokes[2];

  const delta = stroke => ({
    dx: stroke[stroke.length - 1].x - stroke[0].x,
    dy: stroke[stroke.length - 1].y - stroke[0].y
  });

  const d1 = delta(first);
  const d2 = delta(second);

  /* 1画目：横方向への移動割合 */
  const firstHorizontal =
    Math.abs(d1.dx) /
    Math.max(1, lengths[0]);

  /* 2画目：縦方向への移動割合 */
  const secondVertical =
    Math.abs(d2.dy) /
    Math.max(1, lengths[1]);

  /* 3画目：文字全体の大きさに対する線の長さ */
  const thirdLengthRatio =
    lengths[2] / Math.max(width, height);

  /* 3画目：進行方向がどれだけ変化したか */
  let totalTurn = 0;
  let previousAngle = null;

  for (let i = 1; i < third.length; i++) {

    const dx = third[i].x - third[i - 1].x;
    const dy = third[i].y - third[i - 1].y;

    if (Math.hypot(dx, dy) < 2) continue;

    const angle = Math.atan2(dy, dx);

    if (previousAngle !== null) {
      let diff = angle - previousAngle;

      diff = Math.atan2(
        Math.sin(diff),
        Math.cos(diff)
      );

      totalTurn += Math.abs(diff);
    }

    previousAngle = angle;
  }

  const turnDegrees =
    totalTurn * 180 / Math.PI;

  return (
    "1画目・横方向率：" +
    Math.round(firstHorizontal * 100) + "%\n" +

    "2画目・縦方向率：" +
    Math.round(secondVertical * 100) + "%\n" +

    "3画目・長さ比：" +
    thirdLengthRatio.toFixed(2) + "\n" +

    "3画目・方向変化：" +
    Math.round(turnDegrees) + "度"
  );
}


/* ========================================
   むずかしい「い」専用
   2画の形状診断
======================================== */

function diagnoseHardIStrokes() {

  if (strokes.length !== 2) {
    return "2画診断：対象外";
  }

  const first = strokes[0];
  const second = strokes[1];

  if (first.length < 2 || second.length < 2) {
    return "2画診断：点数不足";
  }

  const lengthOf = stroke => {
    let length = 0;

    for (let i = 1; i < stroke.length; i++) {
      length += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }

    return length;
  };

  const length1 = lengthOf(first);
  const length2 = lengthOf(second);

  const firstStart = first[0];
  const firstEnd = first[first.length - 1];

  const secondStart = second[0];
  const secondEnd = second[second.length - 1];

  const width = canvas.getBoundingClientRect().width;
  const height = canvas.getBoundingClientRect().height;

  const firstDown =
    (firstEnd.y - firstStart.y) / Math.max(1, height);

  const secondDown =
    (secondEnd.y - secondStart.y) / Math.max(1, height);

  const startGap =
    (secondStart.x - firstStart.x) / Math.max(1, width);

  const lengthRatio =
    length1 / Math.max(1, length2);

  const bounds = getMaskBounds(createUserMask());

  const userWidth = bounds
    ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE
    : 0;

  const userHeight = bounds
    ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE
    : 0;

  return (
    "1画目・下方向移動：" +
    Math.round(firstDown * 100) + "%\n" +

    "2画目・下方向移動：" +
    Math.round(secondDown * 100) + "%\n" +

    "2画の開始位置差：" +
    Math.round(startGap * 100) + "%\n" +

    "1画目/2画目の長さ比：" +
    lengthRatio.toFixed(2) + "\n" +

    "文字の横幅：" +
    Math.round(userWidth * 100) + "%\n" +

    "文字の縦幅：" +
    Math.round(userHeight * 100) + "%"
  );
}

/* ========================================
   むずかしい「い」専用
   正規化形状診断
======================================== */
function calculateNormalizedScoreI() {

  const size = SCORE_GRID_SIZE;
  const userMask = createUserMask();
  const refMask = referenceIMask;

  if (!refMask) return 0;

  const ub = getMaskBounds(userMask);
  const rb = getMaskBounds(refMask);

  if (!ub || !rb) return 0;

  const uw = ub.maxX - ub.minX + 1;
  const uh = ub.maxY - ub.minY + 1;
  const rw = rb.maxX - rb.minX + 1;
  const rh = rb.maxY - rb.minY + 1;

  if (uw < 3 || uh < 3) return 0;

  /* 縦横比を維持して位置と大きさを補正 */
  const scale = Math.min(rw / uw, rh / uh);

  const ucx = (ub.minX + ub.maxX) / 2;
  const ucy = (ub.minY + ub.maxY) / 2;
  const rcx = (rb.minX + rb.maxX) / 2;
  const rcy = (rb.minY + rb.maxY) / 2;

  const normalized = new Uint8Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {

      const sx = Math.round((x - rcx) / scale + ucx);
      const sy = Math.round((y - rcy) / scale + ucy);

      if (
        sx >= 0 && sx < size &&
        sy >= 0 && sy < size &&
        userMask[sy * size + sx]
      ) {
        normalized[y * size + x] = 1;
      }
    }
  }

  const refDistance = createDistanceMap(refMask);
  const userDistance = createDistanceMap(normalized);

  let userSum = 0;
  let refSum = 0;
  let userCount = 0;
  let refCount = 0;

  for (let i = 0; i < normalized.length; i++) {

    if (normalized[i]) {
      userSum += refDistance[i];
      userCount++;
    }

    if (refMask[i]) {
      refSum += userDistance[i];
      refCount++;
    }
  }

  if (!userCount || !refCount) return 0;

  const precision = Math.max(
    0, 100 - (userSum / userCount) * 11
  );

  const coverage = Math.max(
    0, 100 - (refSum / refCount) * 12
  );

  return Math.max(0, Math.min(100, Math.round(
    precision * 0.5 + coverage * 0.5
  )));
}

/* ========================================
   むずかしい「う」専用
   正規化形状診断
======================================== */
function calculateNormalizedScoreU() {

  const size = SCORE_GRID_SIZE;
  const userMask = createUserMask();
  const refMask = referenceUMask;

  if (!refMask) return 0;

  const ub = getMaskBounds(userMask);
  const rb = getMaskBounds(refMask);

  if (!ub || !rb) return 0;

  const uw = ub.maxX - ub.minX + 1;
  const uh = ub.maxY - ub.minY + 1;
  const rw = rb.maxX - rb.minX + 1;
  const rh = rb.maxY - rb.minY + 1;

  if (uw < 3 || uh < 3) return 0;

  const scale = Math.min(rw / uw, rh / uh);

  const ucx = (ub.minX + ub.maxX) / 2;
  const ucy = (ub.minY + ub.maxY) / 2;
  const rcx = (rb.minX + rb.maxX) / 2;
  const rcy = (rb.minY + rb.maxY) / 2;

  const normalized = new Uint8Array(size * size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {

      const sx = Math.round((x - rcx) / scale + ucx);
      const sy = Math.round((y - rcy) / scale + ucy);

      if (
        sx >= 0 && sx < size &&
        sy >= 0 && sy < size &&
        userMask[sy * size + sx]
      ) {
        normalized[y * size + x] = 1;
      }
    }
  }

  const refDistance = createDistanceMap(refMask);
  const userDistance = createDistanceMap(normalized);

  let userSum = 0;
  let refSum = 0;
  let userCount = 0;
  let refCount = 0;

  for (let i = 0; i < normalized.length; i++) {

    if (normalized[i]) {
      userSum += refDistance[i];
      userCount++;
    }

    if (refMask[i]) {
      refSum += userDistance[i];
      refCount++;
    }
  }

  if (!userCount || !refCount) return 0;

  const precision = Math.max(
    0, 100 - (userSum / userCount) * 11
  );

  const coverage = Math.max(
    0, 100 - (refSum / refCount) * 12
  );

  return Math.max(0, Math.min(100, Math.round(
    precision * 0.5 + coverage * 0.5
  )));
}

/* ========================================
   むずかしい「う」専用
   2画の形状診断
======================================== */
function diagnoseHardUStrokes() {

  if (strokes.length !== 2) {
    return "2画診断：対象外";
  }

  const first = strokes[0];
  const second = strokes[1];

  if (first.length < 2 || second.length < 2) {
    return "2画診断：点数不足";
  }

  const lengthOf = stroke => {
    let length = 0;

    for (let i = 1; i < stroke.length; i++) {
      length += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }

    return length;
  };

  const length1 = lengthOf(first);
  const length2 = lengthOf(second);

  const firstStart = first[0];
  const firstEnd = first[first.length - 1];

  const secondStart = second[0];
  const secondEnd = second[second.length - 1];

  const width = Math.max(
    1, canvas.getBoundingClientRect().width
  );

  const height = Math.max(
    1, canvas.getBoundingClientRect().height
  );

  /* 2画目が1画目より下から始まるか */
  const startGapY =
    (secondStart.y - firstStart.y) / height;

  /* 2画の長さの比率 */
  const lengthRatio =
    length1 / Math.max(1, length2);

  /* 各画の開始・終了位置の差 */
  const firstMoveX =
    (firstEnd.x - firstStart.x) / width;

  const firstMoveY =
    (firstEnd.y - firstStart.y) / height;

  const secondMoveX =
    (secondEnd.x - secondStart.x) / width;

  const secondMoveY =
    (secondEnd.y - secondStart.y) / height;

  /* 文字全体のサイズ */
  const bounds = getMaskBounds(createUserMask());

  const letterWidth = bounds
    ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE
    : 0;

  const letterHeight = bounds
    ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE
    : 0;

  return (
    "1画目の長さ：" +
      Math.round(length1) + "\n" +

    "2画目の長さ：" +
      Math.round(length2) + "\n" +

    "1画目/2画目の長さ比：" +
      lengthRatio.toFixed(2) + "\n" +

    "2画目の開始位置・下方向差：" +
      Math.round(startGapY * 100) + "%\n" +

    "1画目の横移動：" +
      Math.round(firstMoveX * 100) + "%\n" +

    "1画目の縦移動：" +
      Math.round(firstMoveY * 100) + "%\n" +

    "2画目の横移動：" +
      Math.round(secondMoveX * 100) + "%\n" +

    "2画目の縦移動：" +
      Math.round(secondMoveY * 100) + "%\n" +

    "文字の横幅：" +
      Math.round(letterWidth * 100) + "%\n" +

    "文字の縦幅：" +
      Math.round(letterHeight * 100) + "%"
  );
}

/* ========================================
   むずかしい「え」専用
   位置・大きさを補正した正規化形状点
======================================== */
function calculateNormalizedScoreE(userMaskOverride = null) {

  const size = SCORE_GRID_SIZE;
  const userMask = userMaskOverride || createUserMask();
  const refMask = referenceEMask;

  if (!refMask) return 0;

  const ub = getMaskBounds(userMask);
  const rb = getMaskBounds(refMask);

  if (!ub || !rb) return 0;

  const uw = ub.maxX - ub.minX + 1;
  const uh = ub.maxY - ub.minY + 1;
  const rw = rb.maxX - rb.minX + 1;
  const rh = rb.maxY - rb.minY + 1;

  if (uw < 3 || uh < 3) return 0;

  const baseScale = Math.min(
    rw / uw,
    rh / uh
  );

  const ucx = (ub.minX + ub.maxX) / 2;
  const ucy = (ub.minY + ub.maxY) / 2;

  const rcx = (rb.minX + rb.maxX) / 2;
  const rcy = (rb.minY + rb.maxY) / 2;

  const refDistance = createDistanceMap(refMask);

  /*
   * 横方向・縦方向の倍率を別々に指定して採点
   */
  function scoreAtScale(scaleX, scaleY) {

    const normalized = new Uint8Array(size * size);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {

        const sx = (x - rcx) / scaleX + ucx;
        const sy = (y - rcy) / scaleY + ucy;

        /*
         * 縮小時の線の欠落を軽減
         */
        const radiusX = scaleX < 1
          ? Math.min(1, (1 / scaleX - 1) * 0.5)
          : 0;

        const radiusY = scaleY < 1
          ? Math.min(1, (1 / scaleY - 1) * 0.5)
          : 0;

        const minX = Math.round(sx - radiusX);
        const maxX = Math.round(sx + radiusX);

        const minY = Math.round(sy - radiusY);
        const maxY = Math.round(sy + radiusY);

        let found = false;

        for (let yy = minY; yy <= maxY && !found; yy++) {
          for (let xx = minX; xx <= maxX; xx++) {

            if (
              xx >= 0 &&
              xx < size &&
              yy >= 0 &&
              yy < size &&
              userMask[yy * size + xx]
            ) {
              found = true;
              break;
            }
          }
        }

        if (found) {
          normalized[y * size + x] = 1;
        }
      }
    }

    const userDistance = createDistanceMap(normalized);

    let userSum = 0;
    let refSum = 0;
    let userCount = 0;
    let refCount = 0;

    for (let i = 0; i < normalized.length; i++) {

      if (normalized[i]) {
        userSum += refDistance[i];
        userCount++;
      }

      if (refMask[i]) {
        refSum += userDistance[i];
        refCount++;
      }
    }

    if (!userCount || !refCount) return 0;

    const precision = Math.max(
      0,
      100 - (userSum / userCount) * 11
    );

    const coverage = Math.max(
      0,
      100 - (refSum / refCount) * 12
    );

    return Math.max(
      0,
      Math.min(
        100,
        Math.round(
          precision * 0.5 +
          coverage * 0.5
        )
      )
    );
  }

  /*
   * 従来方式：縦横同じ倍率
   */
  const originalScore = scoreAtScale(
    baseScale,
    baseScale
  );

  /*
   * 従来の±4％倍率調整
   */
  const smallerScore = scoreAtScale(
    baseScale * 0.96,
    baseScale * 0.96
  );

  const largerScore = scoreAtScale(
    baseScale * 1.04,
    baseScale * 1.04
  );

  /*
   * 新方式：横方向と縦方向を軽微に補正
   *
   * 文字の横幅・縦幅をそれぞれ
   * お手本に合わせる倍率を求める。
   */
  const idealScaleX = rw / uw;
  const idealScaleY = rh / uh;

  /*
   * 従来倍率から最大±8％までに制限
   */
  const minScale = baseScale * 0.92;
  const maxScale = baseScale * 1.08;

  const scaleX = Math.max(
    minScale,
    Math.min(maxScale, idealScaleX)
  );

  const scaleY = Math.max(
    minScale,
    Math.min(maxScale, idealScaleY)
  );

  const aspectScore = scoreAtScale(
    scaleX,
    scaleY
  );

  /*
   * すべての候補から最高点を取得
   */
  const bestScore = Math.max(
    originalScore,
    smallerScore,
    largerScore,
    aspectScore
  );

  /*
   * 補正による加点は最大6点
   */
  return Math.min(
    100,
    originalScore + Math.min(
      6,
      bestScore - originalScore
    )
  );
}

/* ========================================
   むずかしい「え」専用
   同一筆跡のサイズ別採点診断
   ※実際の採点には影響しない
======================================== */
function diagnoseHardESizeScores() {

  const size = SCORE_GRID_SIZE;
  const original = createUserMask();
  const bounds = getMaskBounds(original);

  if (!bounds) {
    return "サイズ別診断：文字なし";
  }

  const centerX = (bounds.minX + bounds.maxX) / 2;
  const centerY = (bounds.minY + bounds.maxY) / 2;

  const targetCenter = (size - 1) / 2;

  /*
   * 元の筆跡を中央へ移動し、
   * 80％・100％・120％に変換する。
   */
  function makeScaledMask(scale) {

    const result = new Uint8Array(size * size);

    const originalWidth =
      bounds.maxX - bounds.minX + 1;

    const originalHeight =
      bounds.maxY - bounds.minY + 1;

    /*
     * 拡大すると画面外にはみ出す場合、
     * 比較結果が不正確になるため採点しない。
     */
    if (
      originalWidth * scale >= size - 2 ||
      originalHeight * scale >= size - 2
    ) {
      return null;
    }

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {

        const sourceX = Math.round(
          (x - targetCenter) / scale + centerX
        );

        const sourceY = Math.round(
          (y - targetCenter) / scale + centerY
        );

        if (
          sourceX >= 0 &&
          sourceX < size &&
          sourceY >= 0 &&
          sourceY < size &&
          original[sourceY * size + sourceX]
        ) {
          result[y * size + x] = 1;
        }
      }
    }

    return result;
  }

  function getScore(scale) {

    const mask = makeScaledMask(scale);

    if (!mask) {
      return "範囲外";
    }

    return calculateNormalizedScoreE(mask) + "点";
  }

  return (
    "【同一筆跡・サイズ別診断】\n" +
    "80％：" + getScore(0.8) + "\n" +
    "100％：" + getScore(1.0) + "\n" +
    "120％：" + getScore(1.2)
  );
}

/* ========================================
   むずかしい「え」専用
   2画目の前半・後半診断
   ※採点には影響しない
======================================== */
function diagnoseHardESecondStroke() {

  if (strokes.length !== 2) {
    return "2画目診断：対象外";
  }

  const stroke = strokes[1];

  if (stroke.length < 3) {
    return "2画目診断：点数不足";
  }

  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);

  const lengths = [0];

  for (let i = 1; i < stroke.length; i++) {
    lengths.push(
      lengths[i - 1] +
      Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      )
    );
  }

  const total = lengths[lengths.length - 1];

  if (total <= 0) {
    return "2画目診断：長さ不足";
  }

  function pointAt(ratio) {

    const target = total * ratio;

    for (let i = 1; i < stroke.length; i++) {

      if (lengths[i] >= target) {

        const segment =
          lengths[i] - lengths[i - 1];

        const t = segment > 0
          ? (target - lengths[i - 1]) / segment
          : 0;

        return {
          x: stroke[i - 1].x +
            (stroke[i].x - stroke[i - 1].x) * t,
          y: stroke[i - 1].y +
            (stroke[i].y - stroke[i - 1].y) * t
        };
      }
    }

    return stroke[stroke.length - 1];
  }

  const p0 = pointAt(0);
  const p25 = pointAt(0.25);
  const p50 = pointAt(0.50);
  const p75 = pointAt(0.75);
  const p100 = pointAt(1);

  const percent = value =>
    Math.round(value * 100) + "%";

  function movement(a, b) {
    return (
      "横" + percent((b.x - a.x) / width) +
      "・縦" + percent((b.y - a.y) / height)
    );
  }

  return (
    "【2画目・形状詳細】\n" +
    "前半①：" + movement(p0, p25) + "\n" +
    "前半②：" + movement(p25, p50) + "\n" +
    "後半①：" + movement(p50, p75) + "\n" +
    "後半②：" + movement(p75, p100)
  );
}
/* ========================================
   むずかしい「え」専用
   折り返し形状診断
   ※採点には影響しない
======================================== */
function diagnoseHardETurn() {

  if (strokes.length !== 2) {
    return "折り返し診断：対象外";
  }

  const stroke = strokes[1];

  if (stroke.length < 5) {
    return "折り返し診断：点数不足";
  }

  const rect = canvas.getBoundingClientRect();

  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);

  const lengths = [0];

  for (let i = 1; i < stroke.length; i++) {
    lengths.push(
      lengths[i - 1] +
      Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      )
    );
  }

  const total = lengths[lengths.length - 1];

  if (total <= 0) {
    return "折り返し診断：長さ不足";
  }

  function pointAt(ratio) {

    const target = total * ratio;

    for (let i = 1; i < stroke.length; i++) {

      if (lengths[i] >= target) {

        const segment =
          lengths[i] - lengths[i - 1];

        const t = segment > 0
          ? (target - lengths[i - 1]) / segment
          : 0;

        return {
          x: stroke[i - 1].x +
            (stroke[i].x - stroke[i - 1].x) * t,

          y: stroke[i - 1].y +
            (stroke[i].y - stroke[i - 1].y) * t
        };
      }
    }

    return stroke[stroke.length - 1];
  }

  const p50 = pointAt(0.50);
  const p75 = pointAt(0.75);
  const p100 = pointAt(1.00);

  /*
   * 後半①：右上への折り返し
   * 後半②：右下への抜け
   */
  const turnUp =
    (p50.y - p75.y) / height;

  const finishDown =
    (p100.y - p75.y) / height;

  const finishRight =
    (p100.x - p75.x) / width;

  const turnOK = turnUp >= 0.05;

  const finishOK =
  finishDown >= 0.05 &&
  finishRight >= 0.10 &&
  finishRight <= 0.35;

  const percent = value =>
  Math.round(value * 100) + "%";

/* 救済候補の診断：採点には反映しない */
const normalizedE = calculateNormalizedScoreE();

const rescueCandidate =
  normalizedE >= 65 &&
  normalizedE < 70 &&
  strokes.length === 2 &&
  turnOK &&
  finishOK;

  return (
    "【え・折り返し診断】\n" +
    "折り返し上昇：" + percent(turnUp) + "\n" +
    "最後の下降：" + percent(finishDown) + "\n" +
    "最後の右移動：" + percent(finishRight) + "\n" +
    "折り返し：" + (turnOK ? "OK" : "NG") + "\n" +
    "最後の払い：" + (finishOK ? "OK" : "NG") + "\n" +
    "救済候補：" +
  (rescueCandidate ? "YES" : "NO")
  );
}
/* ========================================
   むずかしい「え」専用
   2画の形状診断（採点には影響しない）
======================================== */
function diagnoseHardEStrokes() {
  if (strokes.length !== 2) return "2画診断：対象外";

  const first = strokes[0];
  const second = strokes[1];
  if (first.length < 2 || second.length < 2) return "2画診断：点数不足";

  const lengthOf = stroke => {
    let length = 0;
    for (let i = 1; i < stroke.length; i++) {
      length += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }
    return length;
  };

  const length1 = lengthOf(first);
  const length2 = lengthOf(second);
  const firstStart = first[0];
  const firstEnd = first[first.length - 1];
  const secondStart = second[0];
  const secondEnd = second[second.length - 1];

  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const percent = value => Math.round(value * 100) + "%";

  const firstMoveX = (firstEnd.x - firstStart.x) / width;
  const firstMoveY = (firstEnd.y - firstStart.y) / height;
  const secondMoveX = (secondEnd.x - secondStart.x) / width;
  const secondMoveY = (secondEnd.y - secondStart.y) / height;
  const startGapY = (secondStart.y - firstStart.y) / height;
  const firstHorizontal =
    Math.abs(firstEnd.x - firstStart.x) / Math.max(1, length1);
  const lengthRatio = length1 / Math.max(1, length2);

  const bounds = getMaskBounds(createUserMask());
  const letterWidth = bounds
    ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE : 0;
  const letterHeight = bounds
    ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE : 0;

  return (
    "1画目の長さ：" + Math.round(length1) + "\\n" +
    "2画目の長さ：" + Math.round(length2) + "\\n" +
    "1画目/2画目の長さ比：" + lengthRatio.toFixed(2) + "\\n" +
    "2画目の開始位置・下方向差：" + percent(startGapY) + "\\n" +
    "1画目の横線らしさ：" + percent(firstHorizontal) + "\\n" +
    "1画目の横移動：" + percent(firstMoveX) + "\\n" +
    "1画目の縦移動：" + percent(firstMoveY) + "\\n" +
    "2画目の横移動：" + percent(secondMoveX) + "\\n" +
    "2画目の縦移動：" + percent(secondMoveY) + "\\n" +
    "文字の横幅：" + percent(letterWidth) + "\\n" +
    "文字の縦幅：" + percent(letterHeight)
  );
}

/* ========================================
   むずかしい「お」専用
   位置・大きさを補正した正規化形状点
======================================== */

function calculateNormalizedScoreO() {

  const size = SCORE_GRID_SIZE;
  const userMask = createUserMask();
  const refMask = referenceOMask;

  if (!refMask) return 0;

  const ub = getMaskBounds(userMask);
  const rb = getMaskBounds(refMask);

  if (!ub || !rb) return 0;

  const uw = ub.maxX - ub.minX + 1;
  const uh = ub.maxY - ub.minY + 1;

  const rw = rb.maxX - rb.minX + 1;
  const rh = rb.maxY - rb.minY + 1;

  if (uw < 3 || uh < 3) return 0;

  const baseScale = Math.min(
    rw / uw,
    rh / uh
  );

  const ucx = (ub.minX + ub.maxX) / 2;
  const ucy = (ub.minY + ub.maxY) / 2;

  const rcx = (rb.minX + rb.maxX) / 2;
  const rcy = (rb.minY + rb.maxY) / 2;

  const refDistance = createDistanceMap(refMask);

  function scoreAtScale(scaleX, scaleY) {

    const normalized = new Uint8Array(size * size);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {

        const sx = (x - rcx) / scaleX + ucx;
        const sy = (y - rcy) / scaleY + ucy;

        const radiusX = scaleX < 1
          ? Math.min(1, (1 / scaleX - 1) * 0.5)
          : 0;

        const radiusY = scaleY < 1
          ? Math.min(1, (1 / scaleY - 1) * 0.5)
          : 0;

        let found = false;

        for (
          let yy = Math.round(sy - radiusY);
          yy <= Math.round(sy + radiusY) && !found;
          yy++
        ) {
          for (
            let xx = Math.round(sx - radiusX);
            xx <= Math.round(sx + radiusX);
            xx++
          ) {
            if (
              xx >= 0 && xx < size &&
              yy >= 0 && yy < size &&
              userMask[yy * size + xx]
            ) {
              found = true;
              break;
            }
          }
        }

        if (found) {
          normalized[y * size + x] = 1;
        }
      }
    }

    const userDistance = createDistanceMap(normalized);

    let userSum = 0;
    let refSum = 0;
    let userCount = 0;
    let refCount = 0;

    for (let i = 0; i < normalized.length; i++) {

      if (normalized[i]) {
        userSum += refDistance[i];
        userCount++;
      }

      if (refMask[i]) {
        refSum += userDistance[i];
        refCount++;
      }
    }

    if (!userCount || !refCount) return 0;

    const precision = Math.max(
      0,
      100 - (userSum / userCount) * 11
    );

    const coverage = Math.max(
      0,
      100 - (refSum / refCount) * 12
    );

    return Math.max(
      0,
      Math.min(
        100,
        Math.round(
          precision * 0.5 +
          coverage * 0.5
        )
      )
    );
  }

  const originalScore = scoreAtScale(
    baseScale,
    baseScale
  );

  const smallerScore = scoreAtScale(
    baseScale * 0.96,
    baseScale * 0.96
  );

  const largerScore = scoreAtScale(
    baseScale * 1.04,
    baseScale * 1.04
  );

  const minScale = baseScale * 0.92;
  const maxScale = baseScale * 1.08;

  const scaleX = Math.max(
    minScale,
    Math.min(maxScale, rw / uw)
  );

  const scaleY = Math.max(
    minScale,
    Math.min(maxScale, rh / uh)
  );

  const aspectScore = scoreAtScale(
    scaleX,
    scaleY
  );

  const bestScore = Math.max(
    originalScore,
    smallerScore,
    largerScore,
    aspectScore
  );

  return Math.min(
    100,
    originalScore + Math.min(
      6,
      bestScore - originalScore
    )
  );
}


/* ========================================
   ひらがなくえすと
   ひらがな練習モード
======================================== */

/* ========================================
   ひらがな練習モード：共通設定
======================================== */

var isPracticeMode = false;
var practiceLetter = null;

const PRACTICE_MONSTER_IMAGES = {
  normal: "https://i.postimg.cc/HLjC8Qv5/renshuumonsuta-20261025235758.png",
  small: "https://i.postimg.cc/YSjwL1DY/renshuumonsuta-20261025235802.png",
  large: "https://i.postimg.cc/9fzjwGgY/renshuumonsuta-20261025235804.png",
  critical: "https://i.postimg.cc/JhtWHbYQ/renshuumonsuta-20261025235807.png"
};


/* ========================================
   ひらがなくえすと
   BGM・ファンファーレ
======================================== */


/* ============================================================================
   07 BGM・ファンファーレ
============================================================================ */

function playClearFanfare() {
  if (!seEnabled) return;

  clearFanfare.currentTime = 0;

  clearFanfare.play().catch(() => {
    // 再生できなかった場合は何もしない
  });
}

function restartTitleBgm() {

  if (!titleAudioContext || !titleBgmBuffer) {
    console.warn("タイトルBGMの準備ができていません");
    return;
  }

  /* 古い再生ノードを停止 */
  if (titleBgmSource) {
    try {
      titleBgmSource.stop();
    } catch (error) {
      console.warn("タイトルBGM停止:", error);
    }

    titleBgmSource.disconnect();
    titleBgmSource = null;
  }

  if (titleBgmGain) {
    titleBgmGain.disconnect();
    titleBgmGain = null;
  }

  /* 新しい再生ノードを作成 */
  const source =
    titleAudioContext.createBufferSource();

  const gain =
    titleAudioContext.createGain();

  source.buffer = titleBgmBuffer;
  source.loop = true;
  gain.gain.value = bgmEnabled ? 0.4 : 0;

  source.connect(gain);
  gain.connect(titleAudioContext.destination);

  titleBgmSource = source;
  titleBgmGain = gain;

  /* 音声の再開を要求 */
  const resumePromise = titleAudioContext.resume();

  /* 再生ノードを開始 */
  source.start();
  titleBgmStarted = true;

  resumePromise
    .then(() => {
      console.log(
        "タイトルBGM復帰:",
        titleAudioContext.state
      );
    })
    .catch(error => {
      console.warn("タイトルBGM復帰失敗:", error);
    });
}

async function startBattleBgm() {

  await battleBgmReady;

  if (
    battleBgmStarted ||
    !battleBgmBuffer ||
    !titleAudioContext
  ) {
    return;
  }

  /* 音声コンテキストを再開 */
  await titleAudioContext.resume();

  /* 再生ノードを作成 */
  const source =
    titleAudioContext.createBufferSource();

  const gain =
    titleAudioContext.createGain();

  source.buffer = battleBgmBuffer;
  source.loop = true;

  gain.gain.value = bgmEnabled ? 0.4 : 0;

  source.connect(gain);
  gain.connect(titleAudioContext.destination);

  source.start();

  battleBgmSource = source;
  battleBgmGain = gain;
  battleBgmStarted = true;
}

function stopBattleBgm() {

  if (battleBgmSource) {

    try {
      battleBgmSource.stop();
    } catch (error) {
      console.warn("戦闘BGM停止:", error);
    }

    battleBgmSource.disconnect();
    battleBgmSource = null;
  }

  if (battleBgmGain) {
    battleBgmGain.disconnect();
    battleBgmGain = null;
  }

  battleBgmStarted = false;
}

function switchToBattleBgm() {

  /* タイトルBGMを停止 */
  if (titleBgmSource) {

    try {
      titleBgmSource.stop();
    } catch (error) {
      console.warn("タイトルBGM停止:", error);
    }

    titleBgmSource.disconnect();
    titleBgmSource = null;
  }

  if (titleBgmGain) {
    titleBgmGain.disconnect();
    titleBgmGain = null;
  }

  titleBgmStarted = false;

  /* 戦闘BGMを開始 */
  startBattleBgm();
}


/* ========================================
   くえすとクリア ファンファーレ
======================================== */

const clearFanfare = new Audio(
  "https://hiraquest-iroha.github.io/hiragana-quest-audio/area-clear-fanfare.mp3"
);

clearFanfare.preload = "auto";
clearFanfare.load();

 
/* ========================================
   タイトルBGM（Web Audio API）
======================================== */

const TitleAudioContext =
  window.AudioContext || window.webkitAudioContext;

let titleAudioContext = null;
let titleBgmBuffer = null;
let titleBgmSource = null;
let titleBgmGain = null;
let titleBgmStarted = false;

/* 音声ファイルを準備 */
const titleBgmReady = fetch(
  "https://hiraquest-iroha.github.io/hiragana-quest-audio/title_loop_v5_cowbell_comedy_loop.wav"
)
  .then(response => {
    if (!response.ok) {
      throw new Error("BGM読み込み失敗");
    }
    return response.arrayBuffer();
  })
  .then(async data => {
    if (!TitleAudioContext) {
      throw new Error("Web Audio APIに非対応");
    }

    if (!titleAudioContext) {
      titleAudioContext = new TitleAudioContext();
    }

    titleBgmBuffer =
      await titleAudioContext.decodeAudioData(data);
  })
  .catch(error => {
    console.warn("タイトルBGM:", error);
  });


/* ========================================
   BGM復旧テスト：再生ノードを作り直す
======================================== */


/* ========================================
   タイトルBGM：音声停止からの復帰
======================================== */

/* 関数 restartTitleBgm：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ========================================
   ひらモンずかん専用BGM
======================================== */

let bookBgmBuffer = null;
let bookBgmSource = null;
let bookBgmGain = null;
let bookBgmRequested = false;

/* 音声ファイルの読み込み */
const bookBgmReady = fetch(
  "https://hiraquest-iroha.github.io/hiragana-quest-audio/pomp_grand_v5_harp.mp3"
)
  .then(response => {
    if (!response.ok) {
      throw new Error("図鑑BGM読み込み失敗");
    }
    return response.arrayBuffer();
  })
  .then(async data => {
    await titleBgmReady;

    if (!titleAudioContext) {
      throw new Error("AudioContextがありません");
    }

    bookBgmBuffer =
      await titleAudioContext.decodeAudioData(data);
  })
  .catch(error => {
    console.warn("図鑑BGM:", error);
  });

/* 図鑑BGMを停止 */
function stopBookBgm() {
  bookBgmRequested = false;

  if (bookBgmSource) {
    try {
      bookBgmSource.stop();
    } catch (error) {
      console.warn("図鑑BGM停止:", error);
    }

    bookBgmSource.disconnect();
    bookBgmSource = null;
  }

  if (bookBgmGain) {
    bookBgmGain.disconnect();
    bookBgmGain = null;
  }
}

/* 図鑑BGMを再生 */
async function startBookBgm() {
  bookBgmRequested = true;

  await bookBgmReady;

  if (
    !bookBgmRequested ||
    bookBgmSource ||
    !bookBgmBuffer ||
    !titleAudioContext
  ) {
    return;
  }

  await titleAudioContext.resume();

  if (!bookBgmRequested || bookBgmSource) {
    return;
  }

  const source =
    titleAudioContext.createBufferSource();

  const gain =
    titleAudioContext.createGain();

  source.buffer = bookBgmBuffer;
  source.loop = true;
  gain.gain.value = bgmEnabled ? 0.4 : 0;

  source.connect(gain);
  gain.connect(titleAudioContext.destination);

  bookBgmSource = source;
  bookBgmGain = gain;

  source.start();
}

/* タイトルBGMを停止して図鑑BGMへ */
function switchToBookBgm() {
  if (titleBgmSource) {
    try {
      titleBgmSource.stop();
    } catch (error) {
      console.warn("タイトルBGM停止:", error);
    }

    titleBgmSource.disconnect();
    titleBgmSource = null;
  }

  if (titleBgmGain) {
    titleBgmGain.disconnect();
    titleBgmGain = null;
  }

  titleBgmStarted = false;

  startBookBgm();
}


/* ========================================
   戦闘BGM v11：音声ファイル読み込み
======================================== */

let battleBgmBuffer = null;
let battleBgmSource = null;
let battleBgmGain = null;
let battleBgmStarted = false;

const battleBgmReady = fetch(
  "https://hiraquest-iroha.github.io/hiragana-quest-audio/monster_battle_v11_slightly_brighter.mp3"
)
  
  .then(response => {

    if (!response.ok) {
      throw new Error("戦闘BGM読み込み失敗");
    }

    return response.arrayBuffer();
  })
  .then(async data => {

    /* タイトルBGMと同じAudioContextを使用 */
    await titleBgmReady;

    if (!titleAudioContext) {
      if (!TitleAudioContext) {
        throw new Error("Web Audio APIに非対応");
      }

      titleAudioContext = new TitleAudioContext();
    }

    battleBgmBuffer =
      await titleAudioContext.decodeAudioData(data);

    console.log("戦闘BGM v11：読み込み完了");

  })
  .catch(error => {
    console.warn("戦闘BGM:", error);
  });


/* ========================================
   ひらがな録音音声：あ行・か行10文字の読み込み
======================================== */

/* 読み込んだ音声を保存 */
const hiraganaVoiceBuffers = {};

/* あ行・か行の録音音声 */
const hiraganaVoiceLetters = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ"
];

/* 10文字分を読み込む */
const hiraganaVoicesReady = Promise.all(
  hiraganaVoiceLetters.map(async letter => {

    try {

      const kaRowVoiceUrls = {
        "か": "https://raw.githubusercontent.com/hiraquest-iroha/-/d72e37c2a3fed88b80a1c4f248ad708ce67aa5f2/%E3%81%8B%20%EF%BC%88%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF%EF%BC%89.mp3",
        "き": "https://raw.githubusercontent.com/hiraquest-iroha/-/d72e37c2a3fed88b80a1c4f248ad708ce67aa5f2/%E3%81%8D%20%EF%BC%88%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF%EF%BC%89.mp3",
        "く": "https://raw.githubusercontent.com/hiraquest-iroha/-/d72e37c2a3fed88b80a1c4f248ad708ce67aa5f2/%E3%81%8F%20%EF%BC%88%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF%EF%BC%89.mp3",
        "け": "https://raw.githubusercontent.com/hiraquest-iroha/-/d72e37c2a3fed88b80a1c4f248ad708ce67aa5f2/%E3%81%91%20%EF%BC%88%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF%EF%BC%89.mp3",
        "こ": "https://raw.githubusercontent.com/hiraquest-iroha/-/d72e37c2a3fed88b80a1c4f248ad708ce67aa5f2/%E3%81%93%20%EF%BC%88%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF%EF%BC%89.mp3"
      };

      const url = kaRowVoiceUrls[letter] ||
        ("https://hiraquest-iroha.github.io/hiragana-quest-audio/" +
         encodeURIComponent(letter) + ".mp3");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `${letter}：HTTP ${response.status}`
        );
      }

      const data = await response.arrayBuffer();

      /* BGMと同じAudioContextを使用 */
      await titleBgmReady;

      if (!titleAudioContext) {
        throw new Error("AudioContextがありません");
      }

      hiraganaVoiceBuffers[letter] =
        await titleAudioContext.decodeAudioData(data);

      console.log(
        `録音音声「${letter}」：読み込み完了`
      );

    } catch (error) {

      console.warn(
        `録音音声「${letter}」：読み込み失敗`,
        error
      );

    }

  })
);

/* 既存の「あ」再生テストとの互換性 */
const hiraganaAReady = hiraganaVoicesReady;

Object.defineProperty(
  window,
  "hiraganaABuffer",
  {
    get() {
      return hiraganaVoiceBuffers["あ"] || null;
    },
    configurable: true
  }
);



/* ========================================
   ひらがなくえすと
   戦闘・クエスト進行
======================================== */

/* ============================================================================
   06 戦闘・クエスト進行
============================================================================ */

/* ========================================
   ちょいむず・むずい カットイン
   通常クエストの対象文字初回登場時のみ
   え・け：ちょいむず（0.7秒）
======================================== */
const difficultyCutinImages = {
  little: "./assets/effects/cutin-little.png",
  hard: "./assets/effects/cutin-hard.png"
};
const difficultyCutinLetters = {
  "え": "little",
  "け": "little"
};
let difficultyCutinActive = false;
let difficultyCutinTimer = null;

function stopDifficultyCutin() {
  clearTimeout(difficultyCutinTimer);
  difficultyCutinTimer = null;
  difficultyCutinActive = false;
  const layer = document.getElementById("difficulty-cutin");
  if (layer) {
    layer.classList.remove("difficulty-cutin-active");
    layer.hidden = true;
  }
}

function showDifficultyCutin() {
  stopDifficultyCutin();
  if (isPracticeMode) return;
  const type = difficultyCutinLetters[currentLetter];
  if (!type) return;
  const layer = document.getElementById("difficulty-cutin");
  const image = document.getElementById("difficulty-cutin-image");
  if (!layer || !image) return;

  image.src = difficultyCutinImages[type];
  difficultyCutinActive = true;
  layer.hidden = false;
  // 再表示時もアニメーションを先頭から開始する
  void layer.offsetWidth;
  layer.classList.add("difficulty-cutin-active");
  difficultyCutinTimer = setTimeout(stopDifficultyCutin, 700);
}

function goToNextLetter() {

  currentLetterIndex++;


  /*
    「お」まで終わった場合
  */

  if (
  currentLetterIndex >=
  letterOrder.length
) {

  battleEnded = true;

  attackButton.disabled =
    true;

  clearButton.disabled =
   true;

  message.textContent =
    "";


  /*
    モンスター表示を隠す
  */

  monsterImage.style.display =
    "none";

  monsterName.style.display =
    "none";

  damageMessage.style.display =
    "none";



/* ========================================
   クエストクリア時の画面切り替え
======================================== */

/* 以前のクリア表示を閉じる */
clearScreen.classList.add("hidden");

/* 画面を取得 */
const keyGetScreen =
  document.getElementById("key-get-screen");

const collectionClearScreen =
  document.getElementById("collection-clear-screen");

const battleScreen =
  document.querySelector(".game");

/* 初回クリア時はステージ共通で次の鍵を獲得する */
const newlyObtainedKey = getFirstClearKey(currentQuestIndex);
if (newlyObtainedKey && keyGetScreen) {
  localStorage.setItem(newlyObtainedKey, "obtained");
  pendingUnlockKey = newlyObtainedKey;
  if (battleScreen) battleScreen.style.display = "none";
  keyGetScreen.hidden = false;
} else if (collectionClearScreen) {
  pendingUnlockKey = null;
  if (battleScreen) battleScreen.style.display = "none";
  collectionClearScreen.hidden = false;
  showCollectionRewards();
}


/* ========================================
   クエストクリア：戦闘BGM停止
======================================== */

/* 戦闘BGMを停止 */
stopBattleBgm();

/* クリア音を再生 */
playClearFanfare();

return;

}



  /*
    次の文字へ変更
  */

  currentLetter =
    letterOrder[
      currentLetterIndex
    ];


  /*
    新しいモンスターのHP
    */
  monsterHP =
    monsters[
      currentLetter
    ].hp;


  battleEnded = false;

  attackButton.disabled =
  false;

  /*
  前のモンスターの
  撃破演出をリセット
*/

monsterImage.classList.remove(
  "hit-flash",
  "defeat-normal",
  "defeat-critical"
);

monsterImage.style.opacity =
  "";

monsterImage.style.transform =
  "";


  /*
    書いた線を消す
  */

  clearDrawing();


  /*
    新しい文字と
    モンスターを表示
  */

  updateGuide();

  updateMonsterName();

showMonsterImage(
  "normal"
);

updateStrokeStartDot();
showDifficultyCutin();


  /*
    表示をリセット
  */

  
/* ========================================
   次の文字の案内を表示
======================================== */

/* モンスター名の下に表示 */
damageMessage.textContent =
  `「${currentLetter}」を かいてみよう！`;

}

function resetBattle() {

  battleEnded = false;


  monsterHP =
    monsters[
      currentLetter
    ].hp;


  monsterImage.style.opacity =
    "1";


  monsterImage.classList.remove(
    "hit-flash",
    "defeat-normal",
    "defeat-critical"
  );


  showMonsterImage(
    "normal"
  );


  damageMessage.textContent =
    "";

  attackButton.disabled =
    false;


  clearButton.textContent =
    "もういちど ✏️";


  clearDrawing();


  message.textContent =
    `「${currentLetter}」を かいてみよう！`;
}

function initializeGame() {

  updateGuide();

  updateMonsterName();

  showMonsterImage(
    "normal"
  );

  resizeCanvas();

  updateStrokeStartDot();
}

function restoreKaStageUnlock() {

  const kaButton =
    document.getElementById("quest-stage-ka");

  const kaLock =
    document.getElementById("quest-lock-ka");

  if (!kaButton || !kaLock) return;

  const hasKaKey =
    localStorage.getItem("hiraquest-key-ka")
      === "obtained";

  if (hasKaKey) {

    /* 鍵を獲得済みなら解放状態にする */
    kaButton.disabled = false;

    kaLock.classList.remove("lock-unlocking");
    kaLock.hidden = true;

  } else {

    /* 未獲得なら施錠状態にする */
    kaButton.disabled = true;

    kaLock.classList.remove("lock-unlocking");
    kaLock.hidden = false;
  }
}



/* ========================================
   ひらがなくえすと
   ゲーム基本処理・初期設定
======================================== */


const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const writeBox = document.getElementById("write-box");
const guideImage = document.getElementById("guide-image");
const strokeStartDot = document.getElementById("stroke-start-dot");

const message = document.getElementById("message");
const clearButton = document.getElementById("clear");
const attackButton = document.getElementById("attack");

const monsterImage = document.getElementById("monster-image");
const hitEffect =
  document.getElementById(
    "hit-effect"
  );
const monsterName = document.getElementById("monster-name");
const speakLetterButton =
  document.getElementById(
    "speak-letter"
  );
const damageMessage = document.getElementById("damage-message");
const clearScreen =
  document.getElementById(
    "clear-screen"
  );

const sameQuestButton =
  document.getElementById(
    "same-quest"
  );

const nextQuestButton =
  document.getElementById(
    "next-quest"
  );


/* ========================================
   クエスト構成
======================================== */

const questOrders = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"]
];

/* ステージ設定：追加ステージはここに背景URLと鍵IDを追加 */
const questStageSettings = [
  {
    label: "あ行",
    background: "./assets/backgrounds/port.jpg",
    nextKey: "hiraquest-key-ka"
  },
  {
    label: "か行",
    background: "./assets/backgrounds/ice.jpg",
    nextKey: "hiraquest-key-sa"
  }
];

function applyQuestBattleBackground(questIndex) {
  const battle = document.querySelector(".game");
  const monsterArea = document.querySelector(".monster-area");
  const stage = questStageSettings[questIndex];

  if (!monsterArea || !stage) return;

  // ゲーム全体の背景を消す
  if (battle) {
    battle.style.backgroundImage = "none";
  }

  // モンスター表示エリアだけに背景を設定
  monsterArea.style.backgroundImage = `url("${stage.background}")`;
  monsterArea.style.backgroundSize = "contain";
  monsterArea.style.backgroundPosition = "center center";
  monsterArea.style.backgroundRepeat = "no-repeat";
}

function getFirstClearKey(questIndex) {
  const stage = questStageSettings[questIndex];
  if (!stage || !stage.nextKey) return null;
  return localStorage.getItem(stage.nextKey) === "obtained" ? null : stage.nextKey;
}

let pendingUnlockKey = null;

let currentQuestIndex = 0;

let letterOrder = questOrders[currentQuestIndex];

/* ========================================
   戦闘中の難易度
======================================== */

/* 戦闘開始時に確定する。初期値はかんたん */
let battleDifficulty = "easy";

function fixBattleDifficulty() {

  /* 設定画面で選択した難易度を確定 */
  battleDifficulty =
    selectedDifficulty === "hard"
      ? "hard"
      : "easy";

}

let currentLetterIndex = 0;

let currentLetter =
  letterOrder[
    currentLetterIndex
  ];

/* ========================================
   モンスターHP
======================================== */

let monsterHP =
  monsters[
    currentLetter
  ].hp;


/* ========================================
   描画データ
======================================== */

let isDrawing = false;

let points = [];

let strokes = [];

let currentStroke = [];

let battleEnded = false;


/* ========================================
   採点基準
======================================== */

window.addEventListener(
  "resize",
  resizeCanvas
);


/* ========================================
   ひらがな読み上げ
   BGM復帰・連続操作対策
======================================== */

let letterSpeechPlaying = false;

/* 関数 speakCurrentLetter：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */



/* ========================================
   読み上げボタン
======================================== */

speakLetterButton.addEventListener(
  "click",
  () => {

    speakCurrentLetter();
  }
);


/* ========================================
   モンスター画像：ステージ別先読み
======================================== */

/* 読み込んだ画像を保持する */
const monsterImageCache = new Map();

/* 画像1枚を先読み */
/* 関数 preloadMonsterImage：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* 選択したステージの画像だけ先読み */
/* 関数 preloadQuestMonsterImages：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ========================================
   モンスター画像・図鑑の獲得記録
======================================== */

/* 今回のクエストで初めて獲得した画像 */
let collectionNewImages = [];

/* 獲得済み画像を読み込む */
/* 関数 loadMonsterCollection：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* 画像を図鑑に登録 */
/* 関数 registerMonsterImage：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* モンスター画像を表示 */
/* 関数 showMonsterImage：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ========================================
   攻撃ヒット演出
======================================== */

/* 関数 playHitEffect：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* ========================================
   攻撃SE
======================================== */

const attackSounds = {
  small: new Audio(
    "https://hiraquest-iroha.github.io/hiragana-quest-audio/attack-small.mp3"
  ),

  large: new Audio(
    "https://hiraquest-iroha.github.io/hiragana-quest-audio/attack-large.mp3"
  ),

  critical: new Audio(
    "https://hiraquest-iroha.github.io/hiragana-quest-audio/attack-critical.mp3"
  )
};


/* ========================================
   攻撃SEを先読み
======================================== */

Object.values(
  attackSounds
).forEach(sound => {
  sound.preload = "auto";
  sound.load();
});


/* ========================================
   書き始め
======================================== */

canvas.addEventListener(
  "pointerdown",
  event => {

    if (battleEnded || difficultyCutinActive) {
      return;
    }

    isDrawing = true;

    canvas.setPointerCapture(
      event.pointerId
    );

    const point =
      getPointerPosition(
        event
      );

    currentStroke = [
      point
    ];

    points.push(
      point
    );

    ctx.beginPath();

    ctx.moveTo(
      point.x,
      point.y
    );
  }
);


/* ========================================
   描画中
======================================== */

canvas.addEventListener(
  "pointermove",
  event => {

    if (!isDrawing) {
      return;
    }

    const point =
      getPointerPosition(
        event
      );

    currentStroke.push(
      point
    );

    points.push(
      point
    );

    ctx.lineTo(
      point.x,
      point.y
    );

    ctx.stroke();
  }
);


/* ========================================
   1画終了
======================================== */

canvas.addEventListener(
  "pointerup",
  () => {

    if (!isDrawing) {
      return;
    }

    isDrawing = false;

    if (
      currentStroke.length > 0
    ) {

      strokes.push(
        currentStroke
      );
    }

    currentStroke = [];

    updateStrokeStartDot();
  }
);


canvas.addEventListener(
  "pointercancel",
  () => {

    isDrawing = false;

    currentStroke = [];
  }
);


/* ========================================
   もういちど
======================================== */

clearButton.addEventListener(
  "click",
  () => {

    if (battleEnded) {

      resetBattle();

      return;
    }

    clearDrawing();

    damageMessage.textContent =
      "";
  }
);


/* ========================================
   攻撃
======================================== */

attackButton.addEventListener(
  "click",
  () => {

    if (
      battleEnded || difficultyCutinActive
    ) {
      return;
    }

    
/* 何も書いていない場合は攻撃しない */
if (points.length < 5) {
  return;
}

/* 1回の筆跡で攻撃は1回だけ：採点前に即座に連打を防止 */
if (attackButton.disabled) return;
attackButton.disabled = true;

        const score =
      calculateScore();
    


   


    const strokeOrderOK = checkStrokeOrder();

    /* むずかしい「あ」専用：形状点を維持し、正しい書き順の丁寧書きを救済 */
    const isHardA = battleDifficulty === "hard" && currentLetter === "あ";
    const hardBonus =
  isHardA && strokeOrderOK
    ? score >= 65
      ? 10
      : score >= 60
        ? 5
        : 0
    : 0;
    /* むずかしい「あ」専用：サイズ・位置補正判定 */
let normalizedCritical = false;

if (isHardA && strokeOrderOK && strokes.length === 3) {

  const normalizedScore = calculateNormalizedScoreA();

  const lengths = strokes.map(stroke => {
    let length = 0;

    for (let i = 1; i < stroke.length; i++) {
      length += Math.hypot(
        stroke[i].x - stroke[i - 1].x,
        stroke[i].y - stroke[i - 1].y
      );
    }

    return length;
  });

  const allPoints = strokes.flat();

  const xs = allPoints.map(p => p.x);
  const ys = allPoints.map(p => p.y);

  const width = Math.max(
    1,
    Math.max(...xs) - Math.min(...xs)
  );

  const height = Math.max(
    1,
    Math.max(...ys) - Math.min(...ys)
  );

  const first = strokes[0];
  const second = strokes[1];

  const firstHorizontal =
    Math.abs(first[first.length - 1].x - first[0].x) /
    Math.max(1, lengths[0]);

  const secondVertical =
    Math.abs(second[second.length - 1].y - second[0].y) /
    Math.max(1, lengths[1]);

  const thirdLengthRatio =
    lengths[2] / Math.max(width, height);

  normalizedCritical =
    normalizedScore >= 55 &&
    firstHorizontal >= 0.70 &&
    secondVertical >= 0.70 &&
    thirdLengthRatio >= 1.5 &&
    thirdLengthRatio <= 5.0;
}

　　　/* 従来の採点と正規化判定を統合 */
let adjustedScore = isHardA
  ? !strokeOrderOK
    ? Math.min(71, score + hardBonus)
    : normalizedCritical
      ? Math.max(72, score + hardBonus)
      : Math.min(71, score + hardBonus)
  : score;

/* ========================================
   むずかしい「い」専用
   正規化形状・書き順・最終点調整
======================================== */

const isHardI =
  battleDifficulty === "hard" &&
  currentLetter === "い";

if (isHardI) {

  const normalizedI = calculateNormalizedScoreI();

  if (!strokeOrderOK || strokes.length !== 2) {

    /* 書き順・画数NG：クリティカル不可 */
    adjustedScore = Math.min(71, score);

  } else {

    const first = strokes[0];
    const second = strokes[1];

    const firstStart = first[0];
    const secondStart = second[0];

    const canvasWidth =
      Math.max(1, canvas.getBoundingClientRect().width);

    const startGap =
      (secondStart.x - firstStart.x) / canvasWidth;

    const bounds = getMaskBounds(createUserMask());

    const letterWidth = bounds
      ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE
      : 0;

    const letterHeight = bounds
      ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE
      : 0;

    /* 極端に小さい文字や画の配置崩れを除外 */
    const basicShapeOK =
      startGap >= 0.18 &&
      startGap <= 0.65 &&
      letterWidth >= 0.25 &&
      letterHeight >= 0.22;

    if (!basicShapeOK) {

      adjustedScore = Math.min(54, score);

    } else if (normalizedI >= 75) {

      /* 正規化形状が良好 */
      adjustedScore = Math.max(72, score);

    } else if (normalizedI >= 55) {

      /* 正規化形状がある程度良好 */
      adjustedScore = Math.max(55, Math.min(71, score));

    } else {

      /* 正規化形状が不十分 */
      adjustedScore = Math.min(54, score);

    }
  }
}

/* ========================================
   むずかしい「う」専用
   正規化形状・書き順・最終点調整
======================================== */

const isHardU =
  battleDifficulty === "hard" &&
  currentLetter === "う";

if (isHardU) {

  const normalizedU = calculateNormalizedScoreU();

  if (!strokeOrderOK || strokes.length !== 2) {

    /* 書き順・画数NG：クリティカル不可 */
    adjustedScore = Math.min(71, score);

  } else {

    const first = strokes[0];
    const second = strokes[1];

    const lengthOf = stroke => {
      let length = 0;

      for (let i = 1; i < stroke.length; i++) {
        length += Math.hypot(
          stroke[i].x - stroke[i - 1].x,
          stroke[i].y - stroke[i - 1].y
        );
      }

      return length;
    };

    const length1 = lengthOf(first);
    const length2 = lengthOf(second);

    const firstStart = first[0];
    const secondStart = second[0];

    const height = Math.max(
      1, canvas.getBoundingClientRect().height
    );

    const lengthRatio =
      length1 / Math.max(1, length2);

    const startGapY =
      (secondStart.y - firstStart.y) / height;

    const bounds = getMaskBounds(createUserMask());

    const letterWidth = bounds
      ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE
      : 0;

    const letterHeight = bounds
      ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE
      : 0;

    /* 「う」らしい2画構造と最低サイズ */
    const basicShapeOK =
      lengthRatio >= 0.10 &&
      lengthRatio <= 0.45 &&
      startGapY >= 0.10 &&
      startGapY <= 0.40 &&
      letterWidth >= 0.20 &&
      letterHeight >= 0.30;

    if (!basicShapeOK) {

      /* 形状条件NG */
      adjustedScore = Math.min(54, score);

    } else if (normalizedU >= 75) {

      /* 正規化形状が良好 */
      adjustedScore = Math.max(72, score);

    } else if (normalizedU >= 55) {

      /* 正規化形状がある程度良好 */
      adjustedScore = Math.max(
        55,
        Math.min(71, score)
      );

    } else {

      /* 正規化形状が不十分 */
      adjustedScore = Math.min(54, score);

    }
  }
}
    
    /* むずかしい「あ」：大ダメージ判定・救済 */
if (isHardA && !normalizedCritical) {

  let shapeOK = false;

  if (strokeOrderOK && strokes.length === 3) {

    const lengths = strokes.map(stroke => {
      let length = 0;

      for (let i = 1; i < stroke.length; i++) {
        length += Math.hypot(
          stroke[i].x - stroke[i - 1].x,
          stroke[i].y - stroke[i - 1].y
        );
      }
      return length;
    });

    const first = strokes[0];
    const second = strokes[1];

    const allPoints = strokes.flat();

    const xs = allPoints.map(p => p.x);
    const ys = allPoints.map(p => p.y);

    const width = Math.max(
      1,
      Math.max(...xs) - Math.min(...xs)
    );

    const height = Math.max(
      1,
      Math.max(...ys) - Math.min(...ys)
    );

    const horizontal =
      Math.abs(
        first[first.length - 1].x - first[0].x
      ) / Math.max(1, lengths[0]);

    const vertical =
      Math.abs(
        second[second.length - 1].y - second[0].y
      ) / Math.max(1, lengths[1]);

    const thirdRatio =
      lengths[2] / Math.max(width, height);

    /* クリティカルより緩い形状条件 */
    shapeOK =
      horizontal >= 0.55 &&
      vertical >= 0.55 &&
      thirdRatio >= 1.0 &&
      thirdRatio <= 6.0;
  }

  const normalizedScore = calculateNormalizedScoreA();

  if (shapeOK && normalizedScore >= 45) {

    /* 形がある程度正しければ最低20ダメージ */
    adjustedScore = Math.max(55, adjustedScore);

  } else {

    /* 「あ」らしい形でなければ小ダメージ */
    adjustedScore = Math.min(54, adjustedScore);

  }
}







                             
    
  

                             

/* ========================================
   むずかしい「え」専用
   正規化形状・書き順・最終点調整
======================================== */

if (
  battleDifficulty === "hard" &&
  currentLetter === "え"
) {
  const normalizedE = calculateNormalizedScoreE();

  /* ========================================
     1. 書き順・画数チェック
  ======================================== */

  if (!strokeOrderOK || strokes.length !== 2) {

    /* 書き順・画数NG：クリティカル禁止 */
    adjustedScore = Math.min(71, score);

  } else {

    /* ========================================
       2. 基本構造の計算
    ======================================== */

    const first = strokes[0];
    const second = strokes[1];

    const lengthOf = stroke => {
      let length = 0;

      for (let i = 1; i < stroke.length; i++) {
        length += Math.hypot(
          stroke[i].x - stroke[i - 1].x,
          stroke[i].y - stroke[i - 1].y
        );
      }

      return length;
    };

    const length1 = lengthOf(first);
    const length2 = lengthOf(second);

    const firstStart = first[0];
    const firstEnd = first[first.length - 1];
    const secondStart = second[0];

    const rect = canvas.getBoundingClientRect();

    const firstHorizontal =
      Math.abs(firstEnd.x - firstStart.x) /
      Math.max(1, length1);

    const lengthRatio =
      length1 / Math.max(1, length2);

    const startGapY =
      (secondStart.y - firstStart.y) /
      Math.max(1, rect.height);

    const bounds = getMaskBounds(createUserMask());

    const letterWidth = bounds
      ? (bounds.maxX - bounds.minX + 1) / SCORE_GRID_SIZE
      : 0;

    const letterHeight = bounds
      ? (bounds.maxY - bounds.minY + 1) / SCORE_GRID_SIZE
      : 0;

    /* ========================================
       3. 「え」らしい基本構造の判定
    ======================================== */

    const basicShapeOK =
      firstHorizontal >= 0.65 &&
      lengthRatio >= 0.04 &&
      lengthRatio <= 0.40 &&
      startGapY >= 0.08 &&
      startGapY <= 0.45 &&
      letterWidth >= 0.20 &&
      letterHeight >= 0.25;

    /* ========================================
       4. 65〜69点の丁寧書き救済
       ※試験導入
    ======================================== */

    let rescueE = false;

    if (
  basicShapeOK &&
  (
    (normalizedE >= 65 && normalizedE < 70) ||
    (score >= 55 && normalizedE >= 45)
  )
) {

      const canvasRect = canvas.getBoundingClientRect();

      const canvasWidth =
        Math.max(1, canvasRect.width);

      const canvasHeight =
        Math.max(1, canvasRect.height);

      /* 2画目の累積距離を計算 */

      const distances = [0];

      for (let i = 1; i < second.length; i++) {

        const dx =
          second[i].x - second[i - 1].x;

        const dy =
          second[i].y - second[i - 1].y;

        distances.push(
          distances[i - 1] + Math.hypot(dx, dy)
        );
      }

      const totalLength =
        distances[distances.length - 1];

      if (totalLength > 0) {

        /* 2画目の指定割合の位置を取得 */

        const pointAt = ratio => {

          const target = totalLength * ratio;

          for (let i = 1; i < distances.length; i++) {

            if (distances[i] >= target) {

              const segment =
                distances[i] - distances[i - 1];

              const t = segment > 0
                ? (target - distances[i - 1]) / segment
                : 0;

              return {
                x:
                  second[i - 1].x +
                  (second[i].x - second[i - 1].x) * t,

                y:
                  second[i - 1].y +
                  (second[i].y - second[i - 1].y) * t
              };
            }
          }

          return second[second.length - 1];
        };

        const p50 = pointAt(0.50);
        const p75 = pointAt(0.75);
        const p100 = pointAt(1.00);

        /* 折り返しと最後の払い */

        const turnUp =
          (p50.y - p75.y) / canvasHeight;

        const finishDown =
          (p100.y - p75.y) / canvasHeight;

        const finishRight =
          (p100.x - p75.x) / canvasWidth;

        const turnAndFinishOK =
  turnUp >= 0.05 &&
  finishDown >= 0.05 &&
  finishRight >= 0.10 &&
  finishRight <= 0.35;

rescueE = turnAndFinishOK;
      }
    }

/* 5. むずかしい「え」最終判定 */

/*
  幼児向け判定
  ・読める「え」はクリティカルを優先
  ・形が崩れた「え」は20ダメージ
  ・判読困難なものは5ダメージ
  ・書き順違いはクリティカル不可
*/

  /* ========================================
   ぐちゃ書き対策
   横方向・縦方向の反転を組み合わせる
======================================== */

const countReversalsE = (stroke, axis, minMove) => {

  let lastPosition = stroke[0][axis];
  let direction = 0;
  let reversals = 0;

  for (let i = 1; i < stroke.length; i++) {

    const currentPosition = stroke[i][axis];
    const movement = currentPosition - lastPosition;

    if (Math.abs(movement) < minMove) {
      continue;
    }

    const nextDirection = Math.sign(movement);

    if (
      direction !== 0 &&
      nextDirection !== direction
    ) {
      reversals++;
    }

    direction = nextDirection;
    lastPosition = currentPosition;
  }

  return reversals;
};

let zigzagReversalsE = 0;
let verticalReversalsE = 0;

if (second.length >= 3) {

  zigzagReversalsE = countReversalsE(
    second,
    "x",
    Math.max(3, rect.width * 0.035)
  );

  verticalReversalsE = countReversalsE(
    second,
    "y",
    Math.max(3, rect.height * 0.035)
  );
}

/*
  落書き判定

  ・横縦ともに激しい往復がある
  ・または反転が多く、形状点も低い

  通常の「え」に必要な折り返しは許容する
*/

const scribbleE =
  (
    zigzagReversalsE >= 6 &&
    verticalReversalsE >= 6
  ) ||
  (
    zigzagReversalsE >= 4 &&
    verticalReversalsE >= 4 &&
    score < 55 &&
    normalizedE < 55
  );

/* 既存の丁寧書き救済 */
const carefulCriticalE =
  basicShapeOK &&
  rescueE;

/* 形状点による救済 */
const shapeCriticalE =
  basicShapeOK &&
  score >= 40 &&
  normalizedE >= 40;

/* 文字らしさの最低条件 */
const readableE =
  basicShapeOK &&
  (
    normalizedE >= 40 ||
    score >= 50
  );

/* 最終判定 */
if (scribbleE) {

  /* 明らかなジグザグは5ダメージ */
  adjustedScore = Math.min(54, score);

} else if (!basicShapeOK) {

  adjustedScore = Math.min(54, score);

} else if (
  normalizedE >= 70 ||
  carefulCriticalE ||
  shapeCriticalE
) {

  adjustedScore = Math.max(72, score);

} else if (readableE) {

  adjustedScore = Math.max(
    55,
    Math.min(71, score)
  );

} else {

  adjustedScore = Math.min(54, score);

}
  }
}

/* ========================================
   むずかしい「え」専用：採点診断
   基本構造チェック付き
======================================== */

if (
  battleDifficulty === "hard" &&
  currentLetter === "え"
) {
  const normalizedE = calculateNormalizedScoreE();
  const turnDiagnosis = diagnoseHardETurn();

  const turnResult =
    turnDiagnosis.includes("折り返し：OK")
      ? "OK"
      : "NG";

  const finishResult =
    turnDiagnosis.includes("最後の払い：OK")
      ? "OK"
      : "NG";

  let basicResult = "判定不可";

  if (strokes.length === 2) {
    const first = strokes[0];
    const second = strokes[1];

    if (first.length >= 2 && second.length >= 2) {
      const lengthOf = stroke => {
        let length = 0;

        for (let i = 1; i < stroke.length; i++) {
          length += Math.hypot(
            stroke[i].x - stroke[i - 1].x,
            stroke[i].y - stroke[i - 1].y
          );
        }

        return length;
      };

      const length1 = lengthOf(first);
      const length2 = lengthOf(second);

      const firstStart = first[0];
      const firstEnd = first[first.length - 1];
      const secondStart = second[0];

      const rect = canvas.getBoundingClientRect();

      const firstHorizontal =
        Math.abs(firstEnd.x - firstStart.x) /
        Math.max(1, length1);

      const lengthRatio =
        length1 / Math.max(1, length2);

      const startGapY =
        (secondStart.y - firstStart.y) /
        Math.max(1, rect.height);

      const bounds = getMaskBounds(createUserMask());

      const letterWidth = bounds
        ? (bounds.maxX - bounds.minX + 1) /
          SCORE_GRID_SIZE
        : 0;

      const letterHeight = bounds
        ? (bounds.maxY - bounds.minY + 1) /
          SCORE_GRID_SIZE
        : 0;

      const basicShapeOK =
        firstHorizontal >= 0.65 &&
        lengthRatio >= 0.04 &&
        lengthRatio <= 0.40 &&
        startGapY >= 0.08 &&
        startGapY <= 0.45 &&
        letterWidth >= 0.20 &&
        letterHeight >= 0.25;

      basicResult = basicShapeOK ? "OK" : "NG";
    }
  }

  /* ========================================
   むずかしい「え」専用
   ジグザグ診断
======================================== */

function diagnoseHardEZigzag() {
  if (strokes.length !== 2) {
    return "ジグザグ診断：画数違い";
  }

  const second = strokes[1];

  if (second.length < 3) {
    return "ジグザグ診断：点不足";
  }

  const rect = canvas.getBoundingClientRect();
  const minMove = Math.max(3, rect.width * 0.035);

  // 小さな手ぶれを除外しながら、横方向の動きを集計
  let lastX = second[0].x;
  let direction = 0;
  let reversals = 0;

  for (let i = 1; i < second.length; i++) {
    const dx = second[i].x - lastX;

    if (Math.abs(dx) < minMove) {
      continue;
    }

    const nextDirection = Math.sign(dx);

    if (
      direction !== 0 &&
      nextDirection !== direction
    ) {
      reversals++;
    }

    direction = nextDirection;
    lastX = second[i].x;
  }

  return (
    "【え・ジグザグ診断】\n" +
    "横方向の反転：" + reversals + "回"
  );
}

/* ========================================
   むずかしい「え」専用
   縦方向の往復診断
======================================== */

function diagnoseHardEVerticalZigzag() {

  if (strokes.length !== 2) {
    return "縦ジグザグ：判定不可";
  }

  const second = strokes[1];

  if (second.length < 3) {
    return "縦ジグザグ：点不足";
  }

  const rect = canvas.getBoundingClientRect();

  const minMove = Math.max(
    3,
    rect.height * 0.035
  );

  let lastY = second[0].y;
  let direction = 0;
  let reversals = 0;

  for (let i = 1; i < second.length; i++) {

    const dy = second[i].y - lastY;

    if (Math.abs(dy) < minMove) {
      continue;
    }

    const nextDirection = Math.sign(dy);

    if (
      direction !== 0 &&
      nextDirection !== direction
    ) {
      reversals++;
    }

    direction = nextDirection;
    lastY = second[i].y;
  }

  return (
    "【え・縦ジグザグ診断】\n" +
    "縦方向の反転：" + reversals + "回"
  );
}

}
  


/* ========================================
   むずかしい「お」専用
   正規化形状・基本構造・最終点調整
======================================== */

if (
  battleDifficulty === "hard" &&
  currentLetter === "お"
) {

  const normalizedO = calculateNormalizedScoreO();

  /* ========================================
     1. 書き順・画数
  ======================================== */

  if (!strokeOrderOK || strokes.length !== 3) {

    /* 書き順NG：クリティカル禁止 */
    adjustedScore = Math.min(71, score);

  } else {

    const first = strokes[0];
    const second = strokes[1];
    const third = strokes[2];

    /* ========================================
       2. 線の長さ
    ======================================== */

    const lengthOfO = stroke => {

      let length = 0;

      for (let i = 1; i < stroke.length; i++) {
        length += Math.hypot(
          stroke[i].x - stroke[i - 1].x,
          stroke[i].y - stroke[i - 1].y
        );
      }

      return length;
    };

    const length1 = lengthOfO(first);
    const length2 = lengthOfO(second);
    const length3 = lengthOfO(third);

    /* ========================================
       3. 文字全体の大きさ
    ======================================== */

    const allPointsO = strokes.flat();

    const minX = Math.min(
      ...allPointsO.map(p => p.x)
    );

    const maxX = Math.max(
      ...allPointsO.map(p => p.x)
    );

    const minY = Math.min(
      ...allPointsO.map(p => p.y)
    );

    const maxY = Math.max(
      ...allPointsO.map(p => p.y)
    );

    const widthO = Math.max(1, maxX - minX);
    const heightO = Math.max(1, maxY - minY);

    /* ========================================
       4. 各画の特徴
    ======================================== */

    const firstStart = first[0];
    const firstEnd = first[first.length - 1];

    const firstHorizontalO =
      (firstEnd.x - firstStart.x) /
      Math.max(1, length1);

    const secondStart = second[0];

    const secondMaxY = Math.max(
      ...second.map(p => p.y)
    );

    const secondDownO =
      (secondMaxY - secondStart.y) /
      heightO;

    const thirdCenterX =
      (third[0].x + third[third.length - 1].x) / 2;

    const thirdCenterY =
      (third[0].y + third[third.length - 1].y) / 2;

    const thirdRightO =
      (thirdCenterX - minX) / widthO;

    const thirdTopO =
      (thirdCenterY - minY) / heightO;

    /* ========================================
       5. 基本構造
    ======================================== */

    const basicShapeO =
      firstHorizontalO >= 0.55 &&
      secondDownO >= 0.30 &&
      thirdRightO >= 0.50 &&
      thirdTopO <= 0.60 &&
      length1 >= widthO * 0.12 &&
      length2 >= heightO * 0.50 &&
      length3 <= Math.max(widthO, heightO) * 0.55;

    /* ========================================
       6. 2画目の筆跡を等間隔に補正
    ======================================== */

    const resampleO2 = (points, count = 24) => {

      if (points.length < 2) return points;

      const distances = [0];

      for (let i = 1; i < points.length; i++) {
        distances.push(
          distances[i - 1] +
          Math.hypot(
            points[i].x - points[i - 1].x,
            points[i].y - points[i - 1].y
          )
        );
      }

      const total = distances[distances.length - 1];

      if (total < 1) return points;

      const result = [];
      let index = 1;

      for (let k = 0; k < count; k++) {

        const target = total * k / (count - 1);

        while (
          index < distances.length - 1 &&
          distances[index] < target
        ) {
          index++;
        }

        const prev = index - 1;
        const span = distances[index] - distances[prev];

        const t = span > 0
          ? (target - distances[prev]) / span
          : 0;

        result.push({
          x: points[prev].x +
            (points[index].x - points[prev].x) * t,
          y: points[prev].y +
            (points[index].y - points[prev].y) * t
        });
      }

      return result;
    };

    const sampledO2 = resampleO2(second);

    /* ========================================
       7. 2画目の落書き対策
       急な折れ曲がり・曲がり角度合計
    ======================================== */

    let sharpTurnsO = 0;
    let totalTurningO = 0;

    for (let i = 1; i < sampledO2.length - 1; i++) {

      const a = sampledO2[i - 1];
      const b = sampledO2[i];
      const c = sampledO2[i + 1];

      const angle1 = Math.atan2(
        b.y - a.y,
        b.x - a.x
      );

      const angle2 = Math.atan2(
        c.y - b.y,
        c.x - b.x
      );

      const delta = Math.atan2(
        Math.sin(angle2 - angle1),
        Math.cos(angle2 - angle1)
      );

      const degrees = Math.abs(
        delta * 180 / Math.PI
      );

      totalTurningO += degrees;

      if (degrees >= 75) {
        sharpTurnsO++;
      }
    }

    /* ========================================
       8. 2画目の折り返し判定
    ======================================== */

    let maxUpwardRunO = 0;
    let currentUpwardRunO = 0;

    const upwardStartO =
      Math.floor(sampledO2.length * 0.35);

    for (
      let i = upwardStartO + 1;
      i < sampledO2.length;
      i++
    ) {

      const dy =
        sampledO2[i].y - sampledO2[i - 1].y;

      if (dy < 0) {

        currentUpwardRunO += -dy;

        maxUpwardRunO = Math.max(
          maxUpwardRunO,
          currentUpwardRunO
        );

      } else {

        currentUpwardRunO = 0;

      }
    }

    const maxUpwardRatioO =
      maxUpwardRunO / heightO;

    /* 2画目の長さが過剰でないか */
    const lengthRatioO =
      length2 / Math.max(widthO, heightO);

    /* ========================================
       9. 三角形落書き対策
    ======================================== */

    const lastPointO2 =
      second[second.length - 1];

    const endYForScoreO =
      (lastPointO2.y - minY) / heightO;

    const triangleLikeO =
      endYForScoreO < 0.20;

    /* ========================================
       10. 2画目の交点高さ判定
    ======================================== */

    /* 線分同士の交点を求める */
    const getIntersectionO = (a, b, c, d) => {

      const rx = b.x - a.x;
      const ry = b.y - a.y;
      const sx = d.x - c.x;
      const sy = d.y - c.y;

      const denominator = rx * sy - ry * sx;

      if (Math.abs(denominator) < 0.000001) {
        return null;
      }

      const qx = c.x - a.x;
      const qy = c.y - a.y;

      const t =
        (qx * sy - qy * sx) / denominator;

      const u =
        (qx * ry - qy * rx) / denominator;

      if (
        t < 0 || t > 1 ||
        u < 0 || u > 1
      ) {
        return null;
      }

      return {
        x: a.x + t * rx,
        y: a.y + t * ry
      };
    };

    /* 1画目と2画目の交点 */
    const cross12O = [];

    for (let i = 1; i < first.length; i++) {

      for (let j = 1; j < second.length; j++) {

        const p = getIntersectionO(
          first[i - 1],
          first[i],
          second[j - 1],
          second[j]
        );

        if (p) cross12O.push(p);
      }
    }

    /* ========================================
       11. 2画目の自己交差を時系列で取得
    ======================================== */

    const timedCrossO = [];

    for (let i = 1; i < second.length; i++) {

      for (let j = i + 2; j < second.length; j++) {

        const p = getIntersectionO(
          second[i - 1],
          second[i],
          second[j - 1],
          second[j]
        );

        if (p) {
          timedCrossO.push({
            x: p.x,
            y: p.y,
            early: i,
            late: j
          });
        }
      }
    }

    /* 近い交点を同じグループにまとめる */
    const crossGroupsO = [];

    const mergeDistanceO =
      Math.max(widthO, heightO) * 0.04;

    for (const p of timedCrossO) {

      let group = crossGroupsO.find(g =>
        Math.hypot(
          g.x - p.x,
          g.y - p.y
        ) <= mergeDistanceO
      );

      if (group) {

        group.count++;
        group.early = Math.min(
          group.early,
          p.early
        );
        group.late = Math.min(
          group.late,
          p.late
        );

      } else {

        crossGroupsO.push({
          x: p.x,
          y: p.y,
          count: 1,
          early: p.early,
          late: p.late
        });
      }
    }

    /* ========================================
       12. 後半の交点と横線の高さを比較
    ======================================== */

    const lateCrossGroupsO = crossGroupsO.filter(g =>
      g.late >= second.length * 0.60
    );

    let invalidCrossO = false;

    if (
      cross12O.length > 0 &&
      lateCrossGroupsO.length > 0
    ) {

      const horizontalCrossY =
        Math.min(...cross12O.map(p => p.y));

      const lateLoopCrossY =
        Math.min(...lateCrossGroupsO.map(g => g.y));

      /* 後半交点が横線と同じ高さか上ならNG */
      invalidCrossO =
        lateLoopCrossY <= horizontalCrossY;
    }

    /* ========================================
       13. 正規化形状点による救済
    ======================================== */

    if (invalidCrossO) {

      /* 交点の高さが不適切：小ダメージ */
      adjustedScore = Math.min(54, score);

    } else if (
      basicShapeO &&
      !triangleLikeO &&
      normalizedO >= 48 &&
      sharpTurnsO <= 8 &&
      totalTurningO <= 1200 &&
      lengthRatioO <= 5.0 &&
      maxUpwardRatioO <= 0.70
    ) {

      /* 読める「お」：クリティカル */
      adjustedScore = Math.max(72, score);

    } else if (
      basicShapeO &&
      !triangleLikeO &&
      sharpTurnsO <= 8 &&
      totalTurningO <= 1200 &&
      lengthRatioO <= 5.0 &&
      (normalizedO >= 40 || score >= 55)
    ) {

      /* 形が崩れた「お」：大ダメージ */
      adjustedScore = Math.max(
        55,
        Math.min(71, score)
      );

    } else {

      /* 判読困難：小ダメージ */
      adjustedScore = Math.min(54, score);
    }

  }
}

/* ========================================
   むずかしい「お」専用
   書き順NG時のクリティカル最終防止
======================================== */

if (
  battleDifficulty === "hard" &&
  currentLetter === "お" &&
  (!strokeOrderOK || strokes.length !== 3)
) {
  adjustedScore = Math.min(71, adjustedScore);
}















    

/* ========================================
   か行（むずかしい）検証済みダメージ判定
   形状または書き順NG：5 / 45点未満：20 / 45点以上：30
   あ〜お・かんたんの既存判定は変更しない
======================================== */
const isHardKaRow = battleDifficulty === "hard" &&
  ["か", "き", "く", "け", "こ"].includes(currentLetter);

const kaShapeOK = !isHardKaRow ? true :
  currentLetter === "こ" ? checkKoLineShape() :
  currentLetter === "か" ? checkKaScribble() :
  currentLetter === "く" ? checkKuScribble() :
  currentLetter === "け" ? checkKeScribble() :
  checkKaRowScribble();

const kaDamage = !strokeOrderOK || !kaShapeOK ? 5 : score >= 45 ? 30 : 20;
const result = isHardKaRow
  ? getDamageResult(kaDamage === 30 ? 72 : kaDamage === 20 ? 55 : 0)
  : getDamageResult(adjustedScore);
console.log("書き順:", strokeOrderOK);
　　　
    /* 通常バトルだけHPを減らす */
    if (!isPracticeMode) {
      monsterHP -= result.damage;
    }


    /*
      ダメージ画像へ変更。

      次の文字を書く時も
      通常画像には戻さない。
    */

    showMonsterImage(
  result.type
);

/* 攻撃で獲得したダメージ画像を登録 ！ */
registerMonsterImage(currentLetter, result.type);

/* むずかしいモードのひみつを解放 */
unlockMonsterSecret(currentLetter, result.damage);

playHitEffect();


/* ========================================
   攻撃エフェクト
======================================== */

playAttackEffect(
  result.type
);

/* ========================================
   攻撃SE
======================================== */

playAttackSound(
  result.type
);


/* モンスター名の下に攻撃結果を表示 */
damageMessage.textContent =
  result.text;

/* ========================================
   撃破
======================================== */

if (!isPracticeMode && monsterHP <= 0) {

  /* 初撃破時に通常画像を登録 */
  registerMonsterImage(currentLetter, "normal");

  battleEnded = true;

  attackButton.disabled = true;

  const delay =
    result.type === "critical"
      ? 2200
      : 1500;

  playDefeatEffect(
    result.type === "critical"
  );

  setTimeout(() => {
    goToNextLetter();
  }, delay);

  return;
}

/* ========================================
   撃破できなかった場合
======================================== */

/* ダメージ画像はそのまま維持 */
setTimeout(() => {

  /* 書いた文字だけ消す */
  clearDrawing(false);

  /* 次の筆跡を受け付ける（撃破中は解除しない） */
  if (!battleEnded) {
    attackButton.disabled = false;
  }

}, 900);

  }
);


/* ========================================
   おなじくえすと
======================================== */

sameQuestButton.addEventListener(
  "click",
  () => {

    /* 今回の新規獲得画像をリセット */
    collectionNewImages = [];

    clearScreen.classList.add(
      "hidden"
    );

    monsterImage.style.display =
  "";

monsterName.style.display =
  "";

damageMessage.style.display =
  "";

    currentLetterIndex = 0;

    currentLetter =
      letterOrder[
        currentLetterIndex
      ];

    monsterHP =
      monsters[
        currentLetter
      ].hp;

    battleEnded = false;

    attackButton.disabled =
      false;

    clearButton.disabled =
      false;

    monsterImage.classList.remove(
      "hit-flash",
      "defeat-normal",
      "defeat-critical"
    );

    monsterImage.style.opacity =
      "";

    monsterImage.style.transform =
      "";

    clearDrawing();

    updateGuide();

    updateMonsterName();

showMonsterImage(
  "normal"
);

updateStrokeStartDot();
    damageMessage.textContent =
      "";

    message.textContent =
      `「${currentLetter}」を かいてみよう！`;
  }
);


/* ========================================
   図鑑登録画面：もういちど
======================================== */

const collectionRetryButton =
  document.getElementById("collection-retry");

if (collectionRetryButton) {

  collectionRetryButton.addEventListener(
    "click",
    () => {

      /* 図鑑登録画面を閉じる */
      const collectionClearScreen =
        document.getElementById(
          "collection-clear-screen"
        );

      if (collectionClearScreen) {
        collectionClearScreen.hidden = true;
      }

      /* 戦闘画面を表示 */
      const battleScreen =
        document.querySelector(".game");

      if (battleScreen) {
        battleScreen.style.display = "block";
      }

      /* 既存の再挑戦処理を実行 */
      sameQuestButton.click();

      /* 書字キャンバスを画面サイズに合わせる */
      resizeCanvas();

      /* お手本と赤点を更新 */
      updateGuide();
      updateStrokeStartDot();

    }
  );
}


/* ========================================
   図鑑登録画面：ちずにもどる
======================================== */

const collectionBackMapButton =
  document.getElementById("collection-back-map");


if (collectionBackMapButton) {

  collectionBackMapButton.addEventListener(
    "click",
    () => {




      const collectionClearScreen =
        document.getElementById(
          "collection-clear-screen"
        );

      const questMapScreen =
        document.getElementById(
          "quest-map-screen"
        );

      const battleScreen =
        document.querySelector(".game");

      if (!questMapScreen) {
        console.warn(
          "クエスト選択マップが見つかりません"
        );
        return;
      }

      /* 図鑑登録画面を閉じる */
      if (collectionClearScreen) {
        collectionClearScreen.hidden = true;
      }

      /* 戦闘画面を隠す */
      if (battleScreen) {
        battleScreen.style.display = "none";
      }


/* ========================================
   地図表示・タイトルBGM再開
======================================== */

      
questMapScreen.hidden = false;

titleBgmReady.then(() => restartTitleBgm());

      // 初回あ行クリア時は、図鑑登録のあとで錠前を外す。
      if (pendingKaUnlockAnimation) {
        pendingKaUnlockAnimation = false;
        const kaButton = document.getElementById("quest-stage-ka");
        const kaLock = document.getElementById("quest-lock-ka");
        if (kaButton && kaLock) {
          kaButton.disabled = true;
          kaLock.hidden = false;
          kaLock.classList.remove("lock-unlocking");
          void kaLock.offsetWidth;
          kaLock.classList.add("lock-unlocking");
          kaLock.addEventListener("animationend", () => {
            kaLock.hidden = true;
            kaLock.classList.remove("lock-unlocking");
            kaButton.disabled = false;
          }, { once: true });
        }
        return;
      }

      /* か行の解錠状態を確認 */
      const kaButton =
        document.getElementById("quest-stage-ka");

      const kaLock =
        document.getElementById("quest-lock-ka");

      const hasKaKey =
        localStorage.getItem("hiraquest-key-ka")
          === "obtained";

      if (kaButton) {
        kaButton.disabled = !hasKaKey;
      }

      if (kaLock) {

        /* 解錠アニメーションは再生しない */
        kaLock.classList.remove("lock-unlocking");

        /* 解錠済みなら錠前を隠す */
        kaLock.hidden = hasKaKey;
      }

    }
  );
}


/* ========================================
   通常クリア画面：ちずにもどる
======================================== */

nextQuestButton.addEventListener("click", () => {

  const questMapScreen =
    document.getElementById("quest-map-screen");

  const battleScreen =
    document.querySelector(".game");

  if (!questMapScreen || !battleScreen) {
    console.warn("画面が見つかりません");
    return;
  }

  /* クリア画面を閉じる */
  clearScreen.classList.add("hidden");

  /* 戦闘画面を隠す */
  battleScreen.style.display = "none";

 
/* 地図を表示 */
questMapScreen.hidden = false;


/* タイトルBGMを再開 */
titleBgmReady.then(() => restartTitleBgm());


  /* か行の解放状態を復元 */
  restoreKaStageUnlock();

});


initializeGame();

/* ========================================
   タイトル画面の表示・切り替え
======================================== */

const titleScreen =
  document.getElementById("title-screen");

const battleScreen =
  document.querySelector(".game");

const titleStartButton =
  document.getElementById("title-start");

/* ========================================
   せってい画面：難易度選択と保存
======================================== */

const settingsScreen =
  document.getElementById("settings-screen");

const titleSettingsButton =
  document.getElementById("title-settings");

const settingsBackButton =
  document.getElementById("settings-back");

const difficultyStorageKey =
  "hiraquest-difficulty";

/* せってい：BGM / SE */
const bgmCheckbox = document.getElementById("settings-bgm");
const seCheckbox = document.getElementById("settings-se");
function refreshAudioSettings() {
  if (bgmCheckbox) bgmCheckbox.checked = bgmEnabled;
  if (seCheckbox) seCheckbox.checked = seEnabled;
  const bgmLabel = document.getElementById("settings-bgm-state");
  const seLabel = document.getElementById("settings-se-state");
  if (bgmLabel) bgmLabel.textContent = bgmEnabled ? "ON" : "OFF";
  if (seLabel) seLabel.textContent = seEnabled ? "ON" : "OFF";
}
if (bgmCheckbox) bgmCheckbox.addEventListener("change", () => {
  bgmEnabled = bgmCheckbox.checked;
  try { localStorage.setItem(audioPreferenceKeys.bgm, bgmEnabled ? "on" : "off"); }
  catch (error) { console.warn("BGM設定を保存できません", error); }
  applyBgmPreference();
  refreshAudioSettings();
});
if (seCheckbox) seCheckbox.addEventListener("change", () => {
  seEnabled = seCheckbox.checked;
  try { localStorage.setItem(audioPreferenceKeys.se, seEnabled ? "on" : "off"); }
  catch (error) { console.warn("SE設定を保存できません", error); }
  if (!seEnabled) {
    Object.values(attackSounds).forEach(sound => { sound.pause(); sound.currentTime = 0; });
    clearFanfare.pause(); clearFanfare.currentTime = 0;
  }
  refreshAudioSettings();
});
refreshAudioSettings();

/* せってい：図鑑・ひみつ・ステージ解放の記録だけを消去 */
const resetRecordButton = document.getElementById("settings-reset-record");
if (resetRecordButton) resetRecordButton.addEventListener("click", () => {
  const accepted = window.confirm(
    "かぎをあけたステージと、あつめたずかんがきえるよ。ほんとうにけす？"
  );
  if (!accepted) return;
  try {
    for (const key of [
      "hiraquest-monster-collection",
      "hiraquest-monster-secrets",
      "hiraquest-key-ka",
      "hiraquest-key-sa"
    ]) localStorage.removeItem(key);
  } catch (error) {
    console.warn("きろくの初期化に失敗しました", error);
    window.alert("きろくを けせませんでした。もういちど ためしてね。");
    return;
  }
  // メモリ内の図鑑表示・ステージ状態も起動時から作り直す
  window.location.reload();
});


/* 保存済みの難易度を読み込む */
let selectedDifficulty = "easy";

try {
  const savedDifficulty =
    localStorage.getItem(difficultyStorageKey);

  if (savedDifficulty === "easy" ||
      savedDifficulty === "hard") {
    selectedDifficulty = savedDifficulty;
  }
} catch (error) {
  console.warn("難易度を読み込めませんでした", error);
}

/* 選択状態を復元 */
const difficultyInputs =
  document.querySelectorAll(
    'input[name="game-difficulty"]'
  );

difficultyInputs.forEach(input => {

  input.checked =
    input.value === selectedDifficulty;

  /* 難易度を変更したとき */
  input.addEventListener("change", () => {

    if (!input.checked) return;

    selectedDifficulty = input.value;

    try {
      localStorage.setItem(
        difficultyStorageKey,
        selectedDifficulty
      );
    } catch (error) {
      console.warn("難易度を保存できませんでした", error);
    }

  });

});

/* タイトルから設定画面を開く */
if (titleSettingsButton && settingsScreen && titleScreen) {

  titleSettingsButton.addEventListener("click", () => {

    titleScreen.style.display = "none";
    settingsScreen.hidden = false;

  });

}

/* 設定画面からタイトルへ戻る */
if (settingsBackButton && settingsScreen && titleScreen) {

  settingsBackButton.addEventListener("click", () => {

    settingsScreen.hidden = true;
    titleScreen.style.display = "flex";

  });

}

/* 起動時はタイトル画面を表示 */

if (titleScreen && battleScreen && titleStartButton) {

  titleScreen.style.display = "flex";

  battleScreen.style.display = "none";

  
/* はじめるボタン */

titleStartButton.addEventListener("click", () => {

  const questMapScreen =
    document.getElementById("quest-map-screen");

  if (!questMapScreen) {
    console.warn("クエスト選択マップが見つかりません");
    return;
  }

  /* タイトル画面を閉じる */
  titleScreen.style.display = "none";

  /* 戦闘画面はまだ表示しない */
  battleScreen.style.display = "none";

  /* クエスト選択マップを表示 */
  questMapScreen.hidden = false;

  

/* ========================================
   タイトルから地図：BGM再開
======================================== */

titleBgmReady.then(() => {
  restartTitleBgm();
});


  });

}


/* ========================================
   ひらがな録音音声：あ行・か行10文字の読み上げ
======================================== */

const recordedVoiceButton =
  document.getElementById("speak-letter");

if (recordedVoiceButton) {

  recordedVoiceButton.addEventListener(
    "click",
    event => {

      const buffer =
        hiraganaVoiceBuffers[currentLetter];

      /* 録音音声がない文字は従来の読み上げ */
      if (!buffer) {
        return;
      }

      /* 合成音声を呼び出さない */
      event.stopImmediatePropagation();

      /* BGMと同じAudioContextで再生 */
      if (!titleAudioContext) {
        return;
      }

      const source =
        titleAudioContext.createBufferSource();

      const gain =
        titleAudioContext.createGain();

      source.buffer = buffer;
      gain.gain.value = 1.0;

      source.connect(gain);
      gain.connect(titleAudioContext.destination);

      source.onended = () => {
        source.disconnect();
        gain.disconnect();
      };

      titleAudioContext.resume()
        .then(() => {
          source.start();
        })
        .catch(error => {
          console.warn("録音音声再生エラー:", error);
        });

    },
    true
  );
}


/* ========================================
   戦闘BGM v11：再生・停止
======================================== */

/* 戦闘BGMを再生 */
/* 関数 startBattleBgm：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* 戦闘BGMを停止 */
/* 関数 stopBattleBgm：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ========================================
   BGM切り替え：タイトル → 戦闘
======================================== */

/* 関数 switchToBattleBgm：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */


/* ========================================
   クエストマップからタイトルへ戻る
======================================== */

const questMapBackButton =
  document.getElementById("quest-map-back");

const questMapScreen =
  document.getElementById("quest-map-screen");

if (questMapBackButton && questMapScreen && titleScreen) {

  questMapBackButton.addEventListener("click", () => {

    /* マップを閉じる */
    questMapScreen.hidden = true;

    /* タイトル画面を表示 */
    titleScreen.style.display = "flex";

  });

}


/* ========================================
   クエストマップ：あ行の戦闘開始
======================================== */

const questStageAButton =
  document.getElementById("quest-stage-a");

if (questStageAButton && questMapScreen && battleScreen) {

  questStageAButton.addEventListener("click", () => {

    /* 今回の戦闘で使用する難易度を確定 */
    fixBattleDifficulty();

    collectionNewImages = [];
      

/* あ行クエストを選択 */
currentQuestIndex = 0;
applyQuestBattleBackground(currentQuestIndex);

/* タイトルBGMから戦闘BGMへ切り替え */
switchToBattleBgm();


/* あ行のモンスター画像20枚を先読み */
preloadQuestMonsterImages(currentQuestIndex);


    letterOrder = questOrders[currentQuestIndex];

    currentLetterIndex = 0;
    currentLetter = letterOrder[0];

    /* モンスターと戦闘状態を初期化 */
    monsterHP = monsters[currentLetter].hp;

    battleEnded = false;

    attackButton.disabled = false;
    clearButton.disabled = false;

    /* クリア画面を閉じる */
    clearScreen.classList.add("hidden");

    /* 描画をリセット */
    clearDrawing();

    /* モンスター表示を初期化 */
    monsterImage.classList.remove(
      "hit-flash",
      "defeat-normal",
      "defeat-critical"
    );

    monsterImage.style.display = "";
    monsterImage.style.opacity = "";
    monsterImage.style.transform = "";

    monsterName.style.display = "";
    damageMessage.style.display = "";
    damageMessage.textContent = "";

    /* 戦闘画面を表示 */
    questMapScreen.hidden = true;
    battleScreen.style.display = "block";

    /* 書字キャンバスのサイズを更新 */
    resizeCanvas();

    updateGuide();
    updateMonsterName();
    showMonsterImage("normal");
    updateStrokeStartDot();
    showDifficultyCutin();

    
/* モンスター名の下に書字案内を表示 */
damageMessage.textContent =
  `「${currentLetter}」を かいてみよう！`;


  });

}


/* ========================================
   クエストマップ：か行の戦闘開始
======================================== */

const questStageKaButton =
  document.getElementById("quest-stage-ka");

if (questStageKaButton && questMapScreen && battleScreen) {

  questStageKaButton.addEventListener("click", () => {

    /* 未解放の場合は開始しない */
    if (
      localStorage.getItem("hiraquest-key-ka")
      !== "obtained"
    ) {
      return;
    }

　　　    /* 今回の戦闘で使用する難易度を確定 */
    fixBattleDifficulty();
    
    collectionNewImages = [];
    
    
/* か行クエストを選択 */
currentQuestIndex = 1;
applyQuestBattleBackground(currentQuestIndex);

/* タイトルBGMから戦闘BGMへ切り替え */
switchToBattleBgm();


/* か行のモンスター画像20枚を先読み */
preloadQuestMonsterImages(currentQuestIndex);


    letterOrder = questOrders[currentQuestIndex];

    currentLetterIndex = 0;
    currentLetter = letterOrder[0];

    /* モンスターと戦闘状態を初期化 */
    monsterHP = monsters[currentLetter].hp;

    battleEnded = false;

    attackButton.disabled = false;
    clearButton.disabled = false;

    /* クリア画面を閉じる */
    clearScreen.classList.add("hidden");

    /* 描画をリセット */
    clearDrawing();

    /* モンスター表示を初期化 */
    monsterImage.classList.remove(
      "hit-flash",
      "defeat-normal",
      "defeat-critical"
    );

    monsterImage.style.display = "";
    monsterImage.style.opacity = "";
    monsterImage.style.transform = "";

    monsterName.style.display = "";
    damageMessage.style.display = "";
    damageMessage.textContent = "";

    /* 戦闘画面を表示 */
    questMapScreen.hidden = true;
    battleScreen.style.display = "block";

    /* 書字キャンバスのサイズを更新 */
    resizeCanvas();

    updateGuide();
    updateMonsterName();
    showMonsterImage("normal");
    updateStrokeStartDot();
    showDifficultyCutin();

    
/* モンスター名の下に書字案内を表示 */
damageMessage.textContent =
  `「${currentLetter}」を かいてみよう！`;


  });

}

/* ========================================
   初回あ行クリア：鍵GET → 図鑑登録 → 地図
======================================== */
let pendingKaUnlockAnimation = false;

/* 鍵画面のボタンは地図ではなく図鑑登録へ進む */

const keyGetBackButton =
  document.getElementById("key-get-back");

if (keyGetBackButton) {
  keyGetBackButton.textContent = "つぎへ ▶";
  keyGetBackButton.style.setProperty("display", "inline-block", "important");
  keyGetBackButton.addEventListener("click", () => {
    const keyGetScreen = document.getElementById("key-get-screen");
    const collectionClearScreen = document.getElementById("collection-clear-screen");
    const battleScreen = document.querySelector(".game");

    if (keyGetScreen) keyGetScreen.hidden = true;
    if (battleScreen) battleScreen.style.display = "none";

    if (!collectionClearScreen) {
      console.warn("図鑑登録画面が見つかりません");
      return;
    }

    // 図鑑画面から地図に戻った時だけ、か行の解錠演出を実行する。
    pendingKaUnlockAnimation = pendingUnlockKey === "hiraquest-key-ka";
    pendingUnlockKey = null;
    collectionClearScreen.hidden = false;
    showCollectionRewards();
  });
}

/* ========================================
   起動時：か行の解放状態を復元
======================================== */

/* 関数 restoreKaStageUnlock：末尾の「機能別関数ライブラリ」へ移動（処理内容は変更なし） */

/* ページ起動時に復元 */
restoreKaStageUnlock();



/* ========================================
   ひらがなくえすと
   ひらモンずかん・練習バトル
======================================== */

/* ========================================
   ひらモンずかん：一覧・詳細画面
======================================== */

(function setupMonsterBook() {

  const titleButton =
    document.getElementById("title-collection");

  const title =
    document.getElementById("title-screen");

  const list =
    document.getElementById("monster-book-list-screen");

  const detail =
    document.getElementById("monster-detail-screen");

  const grid =
    document.getElementById("monster-book-letter-grid");

  const closeButton =
    document.getElementById("monster-book-close");

  const backButton =
    document.getElementById("monster-detail-back");

  const picture =
    document.querySelector(".monster-detail-picture");

  const image =
    document.getElementById("monster-detail-monster");

  const name =
    document.getElementById("monster-detail-name");

  const secretTitle =
    document.getElementById("monster-detail-secret-title");

  const description =
    document.getElementById("monster-detail-description");

  const imageButtons =
    document.querySelectorAll(
      ".monster-detail-buttons button"
    );

  if (
    !titleButton || !title || !list ||
    !detail || !grid || !closeButton ||
    !backButton || !picture || !image ||
    !name || !secretTitle || !description
  ) {
    console.warn("図鑑のHTMLが見つかりません");
    return;
  }

  let selectedLetter = null;

/* ========================================
   ずかん：練習バトル開始
======================================== */

const practiceButton =
  document.getElementById("monster-detail-practice");

if (practiceButton) {

  practiceButton.addEventListener("click", () => {

    if (!selectedLetter) return;

    const gameScreen =
      document.querySelector(".game");

    const mapScreen =
      document.getElementById("quest-map-screen");

    if (!gameScreen || !mapScreen) return;

    /* 練習ではカットインを表示しない */
    stopDifficultyCutin();

    /* 練習モードを有効にする */
    isPracticeMode = true;
    practiceLetter = selectedLetter;

    /* 現在の設定から難易度を確定 */
    fixBattleDifficulty();

    /* 練習する文字を設定 */
    currentLetter = selectedLetter;

    /* 対象文字の所属ステージを調べる */
    const questIndex = questOrders.findIndex(
      order => order.includes(selectedLetter)
    );

    if (questIndex < 0) {
      isPracticeMode = false;
      practiceLetter = null;
      return;
    }

    /* 練習用の背景を設定 */
    applyQuestBattleBackground(questIndex);

    /* 戦闘状態を初期化 */
    monsterHP = monsters[currentLetter].hp;

    battleEnded = false;

    attackButton.disabled = false;
    clearButton.disabled = false;

    /* 以前のクリア画面を閉じる */
    clearScreen.classList.add("hidden");

    /* 描画を初期化 */
    clearDrawing();

        /* 練習開始時に前のモンスター画像を消す */
    monsterImage.removeAttribute("src");

    /* モンスターの演出状態を初期化 */
    monsterImage.classList.remove(
      "hit-flash",
      "defeat-normal",
      "defeat-critical"
    );

    monsterImage.style.display = "";
    monsterImage.style.opacity = "";
    monsterImage.style.transform = "";

    monsterName.style.display = "";
    damageMessage.style.display = "";

    /* 図鑑を閉じる */
    detail.hidden = true;
    list.hidden = true;

    /* 戦闘画面を表示 */
    mapScreen.hidden = true;
    gameScreen.style.display = "block";

    /* キャンバスとお手本を更新 */
resizeCanvas();

updateGuide();
updateMonsterName();

/* 練習画面：未遭遇モンスターの名前を隠す */
{
  const practiceCollection = loadMonsterCollection();
  const practiceOwned =
    practiceCollection[currentLetter] || {};

  if (practiceOwned.normal !== true) {
    monsterName.textContent = "？？？";
  }
}

    /* 練習対象の通常画像を設定 */
    const collection = loadMonsterCollection();
    const owned = collection[currentLetter] || {};
    const monster = monsters[currentLetter];

    setCollectionPreview(
      monsterImage,
      monster.images.normal,
      owned.normal !== true,
      false
    );

    updateStrokeStartDot();

    damageMessage.textContent =
      `「${currentLetter}」を なんどでも かいてみよう！`;

  });

}
  
/* 図鑑一覧を開く */
titleButton.addEventListener("click", () => {
  title.style.display = "none";
  detail.hidden = true;
  list.hidden = false;
  renderLetterGrid();

  /* タイトルBGMから図鑑BGMへ切り替え */
  switchToBookBgm();
});

  
/* タイトルへ戻る */
closeButton.addEventListener("click", () => {
  list.hidden = true;
  title.style.display = "flex";

  /* 図鑑BGMを停止 */
  stopBookBgm();

  /* タイトルBGMを再開 */
  titleBgmReady.then(() => {
    restartTitleBgm();
  });
});


  /* 詳細から一覧へ戻る */
  backButton.addEventListener("click", () => {
    detail.hidden = true;
    list.hidden = false;
    renderLetterGrid();
  });

  /* ひらがな一覧 */
  function renderLetterGrid() {

    grid.replaceChildren();

    const collection = loadMonsterCollection();

    const letters = questOrders.flat();

    letters.forEach(letter => {

      const button = document.createElement("button");
      button.type = "button";
      button.className = "monster-book-letter";

const owned = collection[letter] || {};

const registered = owned.normal === true;

const completed =
  owned.normal === true &&
  owned.small === true &&
  owned.large === true &&
  owned.critical === true;

　　button.textContent = letter;
button.disabled = false;

      /* 4種類すべて獲得した場合のみ星を表示 */
button.classList.toggle("registered", completed);

if (registered) {
  button.setAttribute("aria-label", `${letter} 登録済み`);
} else {
  button.setAttribute("aria-label", `${letter} 未登録`);
}

      button.addEventListener("click", () => {
  openMonsterDetail(letter);
});

      grid.appendChild(button);
    });
  }

  /* モンスター詳細を開く */
  function openMonsterDetail(letter) {

    const monster = monsters[letter];
    if (!monster) return;

    selectedLetter = letter;

    /* ひらモンずかん：全モンスター共通背景 */
picture.style.backgroundImage =
  'url("./assets/backgrounds/book.png")';

    /* ========================================
   ずかん：未遭遇モンスター名を隠す
======================================== */

const collection = loadMonsterCollection();
const owned = collection[letter] || {};

const encountered = owned.normal === true;

const displayName = encountered
  ? monster.name
  : `${letter}…まだ　みていません`;

/* 頭文字を赤く表示 */
name.replaceChildren();

const firstLetter = document.createElement("span");
firstLetter.className = "book-name-first";
firstLetter.textContent = letter;

const remainingName = document.createElement("span");
remainingName.className = "book-name-rest";
remainingName.textContent = displayName.slice(1);

name.append(firstLetter, remainingName);

/* 未遭遇時はひみつ欄でも名前を隠す */
secretTitle.textContent = encountered
  ? `${monster.name} の ひみつ`
  : "？？？ の ひみつ";

    /* ひらモンのひみつを表示 */
const secrets = loadMonsterSecrets();
const secretLevel = secrets[letter] || 0;

const extra =
  document.getElementById("monster-detail-extra");


/* ========================================
   ひらモンのひみつ：文章データ
======================================== */

const monsterSecretsText = {
  "あ": {
    basic:
      "ぷりぷりおしりのあり。\n" +
      "おどろくと　おしりから　えんまくをだす。",
    extra:
      "えんまくは　おならではないので　くさくない。\n" +
      "らいむみんとの　かおりがする。"
  },

  "い": {
    basic:
      "くいしんぼうの　いもむし。\n" +
      "おなかがすくと　おこりっぽくなる。",
    extra:
      "すきなたべものはかれー。はちみつを　たっぷりかけて　たべるのがすき。"
  },

  "う": {
    basic:
      "むらの　れすとらんの　おーなーしぇふ。",
    extra:
      "りょうりをつくるまえには　ちゃんとてをあらって　いるから　ぜひおみせにきてね。"
  },

  "え": {
    basic:
      "おいしいたまごを　うっている　じぇんとるまん。",
    extra:
      "あまりのおいしさに　うみをこえて　たまごをかいにくる　ひとがいるほど。"
  },

  "お": {
    basic:
      "ぶあついくちびるは　じぶんの　ちゃーむぽいんとだと　おもっている。",
    extra:
      "なまえに　『ちゅっ』が　ついているが、　はじめての　『ちゅっ』は　ほんとうに　すきなひとが　できてからと　きめている。"
  },

  "か": {
    basic:
      "からだは　ていおんやけどするくらい　つめたいが　せいかくは　あつくるしい。",
    extra:
      "ちきゅうおんだんかを　ふせぐために　じぶんになにができるか　かんがえている。"
  },

  "き": {
    basic:
      "きらきらひかるものが　だいすきで　よるのうみで　あかりをつけていると　よってくる。",
    extra:
      "おはだの　すいぶんをたもつため　まいにち　はちじかん　ねむる。"
  },

  "く": {
    basic:
      "さかなにんげんたちが　あがめる　じゃしん。うみに　しずんだまちで　ねむりについている。",
    extra:
      "そのすがたを　みたものは　きょうふのあまり　こんらんする。1D10/1D100。"
  },

  "け": {
    basic:
      "けが　ふさふさした　おすほど　めすに　もてる。",
    extra:
      "もっとけがのびたら　あふろへあーに　しようと　おもっていたのに…。"
  },

  "こ": {
    basic:
      "たべると　かみのけが　きれいになると　いわれているが　いがくてきこんきょはない。",
    extra:
      "こんぶのちかくに　けぶかいが　よくいる。"
  }
};

/* ========================================
   解放状況に応じて文章を表示
======================================== */

const secretText = monsterSecretsText[letter];

description.textContent =
  secretText && secretLevel >= 1
    ? secretText.basic
    : "？？？";

if (extra) {
  extra.textContent =
    secretText && secretLevel >= 2
      ? secretText.extra
      : "？？？";
}

description.classList.toggle(
  "locked",
  secretLevel < 1 || !secretText
);

if (extra) {
  extra.classList.toggle(
    "locked",
    secretLevel < 2 || !secretText
  );
}

        list.hidden = true;
    detail.hidden = false;

    showMonsterImage("normal");
    updateMonsterDetailArrows();
  }

  
/* ========================================
   ずかん：左右の矢印でページ移動
======================================== */

const detailPrevButton =
  document.getElementById("monster-detail-prev");

const detailNextButton =
  document.getElementById("monster-detail-next");

/* ページの端では矢印を無効にする */
function updateMonsterDetailArrows() {

  const letters = questOrders.flat();
  const index = letters.indexOf(selectedLetter);

  if (detailPrevButton) {
    detailPrevButton.disabled = index <= 0;
  }

  if (detailNextButton) {
    detailNextButton.disabled =
      index < 0 || index >= letters.length - 1;
  }
}

/* 前のひらがな */
if (detailPrevButton) {
  detailPrevButton.addEventListener("click", () => {

    const letters = questOrders.flat();
    const index = letters.indexOf(selectedLetter);

    if (index > 0) {
      openMonsterDetail(letters[index - 1]);
    }
  });
}

/* 次のひらがな */
if (detailNextButton) {
  detailNextButton.addEventListener("click", () => {

    const letters = questOrders.flat();
    const index = letters.indexOf(selectedLetter);

    if (index >= 0 && index < letters.length - 1) {
      openMonsterDetail(letters[index + 1]);
    }
  });
}


  /* 未獲得も含め、4種類の画像を切り替え可能 */
  function showMonsterImage(type) {
    if (!selectedLetter) return;
    const monster = monsters[selectedLetter];
    const collection = loadMonsterCollection();
    const owned = collection[selectedLetter] || {};
    const locked = owned[type] !== true;

    imageButtons.forEach(button => {
      const buttonType = button.dataset.imageType;
      button.disabled = false;
      button.classList.toggle("selected", buttonType === type);
    });

    image.alt = locked ? "まだ てにいれていない がぞう" : monster.name;
    setCollectionPreview(image, monster.images[type], locked, type === "critical");
  }

  /* 4種類の画像切り替え */
  imageButtons.forEach(button => {

    button.addEventListener("click", () => {
      showMonsterImage(button.dataset.imageType);
    });

  });

})();

/* バトル中：ちずにもどる */
const battleBackMapButton = document.getElementById("battle-back-map");

if (battleBackMapButton) {
  battleBackMapButton.addEventListener("click", () => {

    /* ========================================
       練習モード：ずかんへ戻る
    ======================================== */

    if (isPracticeMode) {

      const gameScreen =
        document.querySelector(".game");

      const detailScreen =
        document.getElementById("monster-detail-screen");

      const listScreen =
        document.getElementById("monster-book-list-screen");

      /* 戦闘BGM停止 */
      stopBattleBgm();

      /* 練習モード終了 */
      isPracticeMode = false;
      practiceLetter = null;

      /* 描画を消す */
      clearDrawing();

      /* 戦闘画面を閉じる */
      if (gameScreen) {
        gameScreen.style.display = "none";
      }

      /* 図鑑詳細画面へ戻る */
      if (listScreen) {
        listScreen.hidden = true;
      }

      if (detailScreen) {
        detailScreen.hidden = false;
      }

      return;
    }
    
    const mapScreen = document.getElementById("quest-map-screen");
    const gameScreen = document.querySelector(".game");

    if (!mapScreen || !gameScreen) return;

    stopBattleBgm();
    gameScreen.style.display = "none";
    mapScreen.hidden = false;

    titleBgmReady.then(() => restartTitleBgm());
    restoreKaStageUnlock();
  });
}
