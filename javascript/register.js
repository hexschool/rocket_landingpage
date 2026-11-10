//火箭隊報名資訊和 QA 可以從這一頁改

// 場地收費（每月）
const price = 1200;
const priceText = price.toLocaleString("en-US");

// 梯次時間
const batch = "第 24 梯 產品組（2027/03/02 報到，先做半年）";

// 分享連結內容陣列
const expLinks = [
  {
    title: "從高雄火箭隊到第一份前端工作",
    link: "https://jazztyy.medium.com/%E5%BE%9E%E9%AB%98%E9%9B%84%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%88%B0%E7%AC%AC%E4%B8%80%E4%BB%BD%E5%B7%A5%E4%BD%9C-ac0cc9499c65",
  },
  {
    title: "我們都是神奇寶貝｜加入火箭隊心得分享",
    link: "https://vocus.cc/@xavier/5d292836fd89780001e222e2?fbclid=IwAR06YRcKrl0zKi41rfQcxhV_P187kL9Rd8uoSBQL_7UPCO5vJM86edw4WSU",
  },
  {
    title: "六角學院 — 火箭隊軟體工程師培訓營",
    link: "https://medium.com/@sun8chi/%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2-%E7%81%AB%E7%AE%AD%E9%9A%8A%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%9F%B9%E8%A8%93%E7%87%9F-8cf2c03549dc",
  },
  {
    title: "程式專題開發流程分享 — 以火箭隊為例",
    link: "https://medium.com/@gonsakon/%E7%A8%8B%E5%BC%8F%E5%B0%88%E9%A1%8C%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B%E5%88%86%E4%BA%AB-%E4%BB%A5%E7%81%AB%E7%AE%AD%E9%9A%8A%E7%82%BA%E4%BE%8B-fc2c2b647a2f",
  },
  {
    title: "我在火箭隊學到突破程式邏輯的四種方法",
    link: "https://medium.com/@gonsakon/%E6%88%91%E5%9C%A8%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%AD%B8%E5%88%B0%E7%AA%81%E7%A0%B4%E7%A8%8B%E5%BC%8F%E9%82%8F%E8%BC%AF%E7%9A%84%E5%9B%9B%E7%A8%AE%E6%96%B9%E6%B3%95-2ba6a8497809",
  },
  {
    title: "從自學到火箭隊 — 網頁心路歷程",
    link: "https://medium.com/@jedy05097952/%E5%BE%9E%E8%87%AA%E5%AD%B8%E5%88%B0%E7%81%AB%E7%AE%AD%E9%9A%8A-%E7%B6%B2%E9%A0%81%E5%AD%B8%E7%BF%92%E6%AD%B7%E7%A8%8B-e0e9b426ad11",
  },
  {
    title: "分享一個月內使用新技術完成作品 — 火箭隊培訓營",
    link: "https://medium.com/@alice0050722/%E5%88%86%E4%BA%AB%E4%B8%80%E5%80%8B%E6%9C%88%E5%85%A7%E4%BD%BF%E7%94%A8%E6%96%B0%E6%8A%80%E8%A1%93%E5%AE%8C%E6%88%90%E4%BD%9C%E5%93%81-%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-b028305f8d41",
  },
];

let expLinksHtml = "";
expLinks.forEach((link) => {
  const linkItem = `<li><a href="${link.link}" target="_blank" rel="noreferrer noopener">
  ${link.title}</a></li>`;
  expLinksHtml += linkItem;
});

//QA 內容陣列（anchor：要從頁面其他地方直接連到某一題時才加）
const faqAry = [
  {
    id: "fit",
    title: "我適合來嗎？",
    content: [
      {
        id: 1,
        question: "不會寫程式也可以嗎？",
        answer:
          "可以。程式交給 AI 寫，教練幫你顧資料庫、權限、部署這些 AI 常出包的地方。",
      },
      {
        id: 2,
        question: "還沒有想做的題目，可以報名嗎？",
        answer:
          "可以。報名表裡最重要的是寫下你為什麼想來；題目可以進營隊再來想，產品教練會陪你一起選。",
      },
      {
        id: 3,
        question: "我想幫家裡的公司做一個工具，可以嗎？",
        answer:
          "很適合，家裡的員工和客人就是你的第一批使用者。如果你現在就在家裡公司上班，報名前先跟家裡講好這半年。",
      },
      {
        id: 4,
        question: "我超過 35 歲，之前的工作也都跟資訊無關，有機會嗎？",
        answer:
          "沒問題，我們也帶過很多非資訊背景的學員。<b>洧杰</b>自己也是多媒體 3D 設計系出身。",
      },
      {
        id: 5,
        question: "目前已經有工作，有沒有晚上的梯次呢？",
        answer:
          "火箭隊只有白天。只能晚上或週末的人，可以看看六角學院線上的「後端＋AI 工程師培訓班」。",
      },
    ],
  },
  {
    id: "fee",
    title: "費用和生活",
    content: [
      {
        id: 1,
        question: "參加需要費用嗎？",
        answer: `培訓過程全部免費，只收場地費，每月 ${priceText} 元。AI 額度用你自己的帳號：前 3 個月每月 600 元，後 3 個月每月至少 3,000 元，錢直接付給 AI 公司。筆電也要自備。`,
      },
      {
        id: 2,
        question: "AI 額度要準備多少？要開什麼帳號？",
        answer:
          "前 3 個月每月 600 元，後 3 個月每月至少 3,000 元，報名前不用先買。產品組用 AI 寫程式，AI 就是你的工具，所以用的是你自己的 Claude 付費帳號（Claude 是 Anthropic 公司的 AI 服務，用法跟 ChatGPT 類似）。錢直接付給 AI 公司、不經過火箭隊。",
      },
      {
        id: 3,
        anchor: "q-fulltime",
        question: "可以兼職參加嗎？",
        answer: "只提供全職，沒有兼職。週一到週五 09:00～18:00 都在基地。",
      },
    ],
  },
  {
    id: "how",
    title: "產品組怎麼運作",
    content: [
      {
        id: 1,
        question: "半年之後呢？中途可以離開嗎？",
        answer:
          "先做半年，沒有結訓。這半年你週一到週五全天到基地做自己的產品，每月付場地費，教練陪你做。半年到了，可以繼續做，或帶著產品離開；做到一半想離開也可以，都由你自己決定。",
      },
      {
        id: 2,
        question: "做出來的產品是誰的？",
        answer: "是你的。火箭隊不抽成，你離開時產品跟著你走。",
      },
      {
        id: 3,
        question: "第一個半年要做到什麼？",
        answer: "產品上線，而且有真人用過。之後的目標你自己定。",
      },
      {
        id: 4,
        question: "教練怎麼帶？每週怎麼排？",
        answer: `技術教練顧<span class="bold_style">「做得出來、上線不出事」</span>；<b>洧杰</b>帶<span class="bold_style">「做的東西有沒有人要」</span>：選題、找第一批使用者、看數據。每週怎麼排，報到前會跟錄取的人說明。`,
      },
      {
        id: 5,
        question: "你們和其他的培訓單位有什麼差異呢？",
        answer:
          "一般課程照課綱走完就結束。在這裡你做的是自己的產品，遇到什麼問題就解決什麼問題。",
      },
    ],
  },
  {
    id: "apply",
    title: "報名和審核",
    content: [
      {
        id: 1,
        anchor: "q-info",
        question: "報名前可以先聽說明會嗎？",
        answer: `可以。2026/11/30（一）20:00～22:00 線上直播，不用到高雄。<a class="faq25_live" href="https://youtube.com/live/_VEXznF7KH8" target="_blank" rel="noreferrer noopener">到 YouTube 看直播 →</a>`,
      },
      {
        id: 2,
        question: "報名到什麼時候？報完會怎樣？",
        answer:
          "2026/11/30（一）開放報名，到 2027/01/04（一）23:59。1/7（四）寄面試通知信，收到後要照信上的期限回覆。",
      },
      {
        id: 3,
        question: "什麼時候面試？",
        answer:
          "2027/01/12（二）10:00～14:00，在高雄火箭隊基地（高雄市新興區民生一路56號2樓之2）。面試分時段，不用整段都在場，細節寫在面試通知信裡。",
      },
      {
        id: 4,
        question: "什麼時候通知錄取？",
        answer:
          "2027/01/15（五），用 Email 通知。",
      },
      {
        id: 5,
        question: "有可能會落選嗎？你們看什麼？",
        answer: `會，一梯只收 8 個人。我們看兩件事：<span class="mark_style">你為什麼想來、能不能半年全天到場</span>。還沒有題目也沒關係，可以進營隊再來想。學歷、工作背景和程式基礎都不看。`,
      },
    ],
  },
  {
    id: "job",
    title: "求職就業",
    content: [
      {
        id: 1,
        question: "我想進科技業，會幫忙媒合嗎？",
        answer:
          "會讓你跟廠商見到面：合作廠商會來成果發表看人，你可以直接拿產品跟他們聊。所以想去科技業，最好的準備就是做出一個真的有人在用的產品，搭配 AI 工具（AI agent）一起把它做出來。",
      },
      {
        id: 2,
        question: "那一定會上嗎？",
        answer:
          "不一定。我們能做的是陪你把產品做出來、讓真人用過，面試時你有東西可以拿出來講。",
      },
      {
        id: 3,
        question: "我想去中北部找工作也可以嗎？",
        answer:
          "可以。做出來的產品就是你的作品集，去哪裡面試都帶得走。",
      },
    ],
  },
  {
    id: "about",
    title: "關於火箭隊",
    content: [
      {
        id: 1,
        question: "你們是誰？",
        answer:
          "<b>洧杰</b>與<b>賈斯汀（Justin）</b>皆在軟體公司打滾多年，2012 年一同共事，因許多願景志同道合，2014 年出來共同創業，目前皆穩定於政府系統專案上養活團隊。",
      },
      {
        id: 2,
        question: "<b>洧杰</b>是六角學院的校長？",
        answer:
          "2016～2022 年是。六角學院是<b>洧杰</b>與<b>王志誠（卡斯伯）</b>在 2016 年共同創立的線上教育單位，目前則為六角學院與火箭隊的共同創辦人。2023～2026 年，兩人都擔任六角學院技術講師。",
      },
      {
        id: 3,
        question: "你們這樣做，是想要賺什麼？",
        answer: "沒賺錢，主要是培育後進為主要目的。",
      },
      {
        id: 4,
        question: "你們為什麼想創立這單位？",
        answer: `我們看到許多人想做出自己的東西，但卻不得其門而入。<b>洧杰</b>與<b>賈斯汀</b>也希望藉由我們豐富的實務經驗，來達到知識傳承。<br />
        <span class="mark_style">我們其實想了很久，有什麼東西是過了十年後，還是會存在的？最後想到的則是「人」。</span><br />
        我們希望與更多「人」締結關係，由火箭隊出去的學員都能擁有好的發展，讓火箭隊這裡變成開發能量的集聚地，自然就會有更多的商業機會，例如工商媒合、專案合作等等，但我們並不急於一時，主要都還是以培育後進為主。`,
      },
      {
        id: 5,
        question: "火箭隊有什麼核心思想？",
        answer: `在火箭隊的宗旨中，<span class="mark_style">熱愛分享</span>是非常重要的。<br />在這裡你永遠會遇到需要你幫忙的人，藉由分享，讓彼此都獲得新知，真正實現 1+1 = 無限，也才不會只有自己孤軍奮戰的感受。分享的同時也能檢視自己是否真正掌握該技術、疏理自己的脈絡，讓自己更加深入技術核心。`,
      },
    ],
  },
  {
    id: "other",
    title: "其他問題",
    content: [
      {
        id: 1,
        question: "你們不是直銷吧？",
        answer: "不是，不會推銷任何東西。",
      },
      {
        id: 2,
        question: "你們真的不是詐騙集團？",
        answer:
          "不是。火箭隊從 2019 年開始在高雄培訓，已經辦了 23 梯，粉專上有歷屆學員的分享。",
      },
      {
        id: 3,
        question: "下一梯什麼時候招生？",
        answer: "下一梯的招生時間會公布在粉專。",
      },
      {
        id: 4,
        question: "我想多瞭解火箭隊，有什麼可以參考？",
        answer: `<a href="https://www.facebook.com/profile.php?id=100039975056467" target="_blank" rel="noreferrer noopener">火箭隊培訓營粉專</a>有火箭隊學員們的日常小趣事。下面幾篇是以前程式培訓時期的學長姐寫的心得：<ul class="faq_link">${expLinksHtml}</ul>`,
      },
    ],
  },
];

//----------

// 最近梯次（舊版區塊，頁面上沒有就略過）
const batchTicker = document.querySelector(".new_batch_ticker");
if (batchTicker) {
  batchTicker.innerHTML = `<p class="new_batch_ticker_text">${batch}</p>`;
}

// FAQ：答案預設全部展開，點問題可以收起來
const faq = document.querySelector(".faq_container");

if (faq) {
  const navHtml = faqAry
    .map((section) => `<li><a href="#faq-${section.id}">${section.title}</a></li>`)
    .join("");

  let faqHtml = `
  <div class="faq25_head" id="faq-top">
    <p class="neko_kicker">FAQ</p>
    <h2 class="neko_h2">常見問題</h2>
    <p class="faq25_hint">答案都已展開，可先點分類跳過去。</p>
    <ul class="faq25_nav">${navHtml}</ul>
  </div>`;

  faqAry.forEach((section) => {
    let htmlContent = "";
    section.content.forEach((content) => {
      const anchor = content.anchor ? ` id="${content.anchor}"` : "";
      htmlContent += `
      <li class="question_item">
        <details${anchor} open>
          <summary class="question_item_Q">${content.question}</summary>
          <div class="question_item_A">${content.answer}</div>
        </details>
      </li>`;
    });

    faqHtml += `
    <section id="faq-${section.id}">
      <h3>${section.title}</h3>
      <a class="faq25_back" href="#faq-top">回分類 ↑</a>
      <ul class="question_container">
      ${htmlContent}
      </ul>
    </section>`;
  });

  faq.innerHTML = faqHtml;

  // 從頁面其他地方連到某一題（例如 #q-fulltime）時，直接把那題打開並捲過去
  const openQuestion = (id) => {
    const target = id ? document.getElementById(id) : null;
    if (!target || target.tagName !== "DETAILS") return false;
    target.open = true;
    target.scrollIntoView({ block: "center" });
    return true;
  };
  // 每次點都要打開（就算網址的 # 沒變、那題剛被收起來）
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#q-"]');
    if (!link) return;
    if (openQuestion(link.hash.slice(1))) {
      e.preventDefault();
      history.replaceState(null, "", link.hash);
    }
  });
  window.addEventListener("hashchange", () =>
    openQuestion(decodeURIComponent(location.hash.slice(1)))
  );
  openQuestion(decodeURIComponent(location.hash.slice(1)));

  // 電腦版左欄的分類捷徑：標出目前看到哪一類（畫面上方 40% 那條線落在哪一類）
  const navLinks = [...faq.querySelectorAll(".faq25_nav a")];
  const faqSections = [...faq.querySelectorAll("section[id^='faq-']")];
  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  const updateCurrent = () => {
    const line = window.innerHeight * 0.4;
    const faqBox = faq.getBoundingClientRect();
    let currentId = "";
    if (desktopQuery.matches && faqBox.top < line && faqBox.bottom > 0) {
      faqSections.forEach((s) => {
        if (s.getBoundingClientRect().top <= line) currentId = s.id;
      });
    }
    navLinks.forEach((a) => {
      const isCurrent = a.getAttribute("href") === `#${currentId}`;
      a.classList.toggle("is-current", isCurrent);
      if (isCurrent) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", updateCurrent, { passive: true });
  window.addEventListener("resize", updateCurrent);
  updateCurrent();
}
