//火箭隊報名資訊和 QA 可以從這一頁改

// 場地收費
const price = 1200;

// 梯次時間
const batch =
  "第 25 梯 產品組 (2027/02/15 報到，半年一簽)";

// 報名時間
const timeline = {
  title: "報名資訊",
  content: [
    {
      id: 1,
      question: "預計招生的最近梯次和培訓時間？",
      answer: `${batch} <br/> (每週一至週五 09:00 AM ~ 18:00 PM 全程參與)`,
    },
    {
      id: 2,
      question: "預期招募的組別？",
      answer: "只有一組：產品組。不再分 JS 組、C# 組。",
    },
    {
      id: 3,
      question: "最新梯次的報名時間？",
      answer: "即日起 ~ 2026/12/18 (五) 23:59 截止（截止隔日寄面試通知信，需在期限內回覆）。",
    },
    {
      id: 4,
      question: "什麼時候會進行面試？",
      answer:
        "2026/12/22 (二) 10:00~14:00。面試地點為高雄火箭隊培訓營基地（捷運信義國小附近）。",
    },
    {
      id: 5,
      question: "什麼時候會有錄取通知？",
      answer: "2026/12/25 (五)，將以 Email 進行通知。離報到還有 7 週，在職的人來得及辦離職。",
    },
  ],
};

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

//QA 內容陣列，一組最多五個（只有五個 icon）
const faqAry = [
  timeline,
  {
    title: "培訓費用",
    content: [
      {
        id: 1,
        question: "請問參加培訓需要費用嗎？",
        answer: `課程免費。你要付兩樣：場地費 ( $${price} / Month )，加上自己的 Claude 訂閱（前 3 個月約 600，之後約 3,000）。`,
      },
      {
        id: 2,
        question: "為什麼要自己訂 Claude？",
        answer:
          "產品組用 AI 寫程式，Claude 就是你的工具。帳號和額度都是你的，離開火箭隊後也能繼續用。",
      },
      {
        id: 3,
        question: "你們不是直銷吧？",
        answer: "不是，不會推銷任何東西。",
      },
      {
        id: 4,
        question: "你們真的不是詐騙集團？",
        answer:
          "不是。火箭隊從 2019 年開始在高雄培訓，已經辦了 24 梯，粉專上有歷屆學員的分享。",
      },
    ],
  },
  {
    title: "產品組怎麼運作",
    content: [
      {
        id: 1,
        question: "會待多久呢？",
        answer:
          "半年簽一次約。到期你自己決定：續約繼續做，或帶著產品離開。",
      },
      {
        id: 2,
        question: "沒有結訓嗎？",
        answer:
          "沒有。第一個半年的目標是產品上線、有真人用過；之後的目標你自己定。",
      },
      {
        id: 3,
        question: "不會寫程式也可以嗎？",
        answer:
          "可以。程式交給 AI 寫，教練幫你顧資料庫、權限、部署這些 AI 常出包的地方。",
      },
      {
        id: 4,
        question: "教練怎麼帶？",
        answer: `技術教練顧<span class="bold_style">「做得出來、上線不出事」</span>；<u>洧杰</u> 帶<span class="bold_style">「做的東西有沒有人要」</span>：選題、找第一批使用者、看數據。`,
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
    title: "審核流程",
    content: [
      {
        id: 1,
        question: "有看到你們招募是審核制，所以有可能會落選？",
        answer: "是的。",
      },
      {
        id: 2,
        question: "你們看什麼？一定要相關學歷有工作背景才會錄取？",
        answer: `不用。我們看三件事：<span class="mark_style">你想做什麼、為什麼想做、能不能半年全天到場</span>。學歷和程式基礎不看。`,
      },
    ],
  },
  {
    title: "我適合來嗎？",
    content: [
      {
        id: 1,
        question: "我想幫家裡的公司做一個工具，可以嗎？",
        answer:
          "很適合，家裡的員工和客人就是你的第一批使用者。如果你現在就在家裡公司上班，報名前先跟家裡講好這半年。",
      },
      {
        id: 2,
        question: "我想轉職當工程師，還能來嗎？",
        answer:
          "可以。做出來的產品就是你的作品集，合作廠商會來成果發表看人。",
      },
      {
        id: 3,
        question: "我年紀超過 35 歲，之前工作都是非資訊，這樣也有機會嗎？",
        answer: "沒問題，我們也帶過很多非資訊背景的學員。",
      },
      {
        id: 4,
        question: "我是非資工資管背景，這樣也可以嗎？",
        answer:
          "其實絕大多數的工程師都是非資訊背景，像是 <u>洧杰</u> 是多媒體 3D 設計系，<u>Justin</u> 則是電腦通訊系。",
      },
      {
        id: 5,
        question: "來了一定會成功嗎？",
        answer:
          "說保證你的產品會成功的營隊，一定是騙人的。我們能做的是陪你把產品做出來、放到真人面前。",
      },
    ],
  },
  {
    title: "求職就業",
    content: [
      {
        id: 1,
        question: "會幫忙協助媒合嗎？",
        answer:
          "會視每位同學的學習狀態進行評估。火箭隊教練都是在南部業界超過十年以上的工作經歷，我們主要也是希望透過此服務來協助在地媒合。",
      },
      {
        id: 2,
        question: "那一定會上嗎？",
        answer:
          "不一定，凡事都講求緣分，但只要您成長得足夠養分，我們也會盡力協助媒合。",
      },
      {
        id: 3,
        question: "我想去中北部找工作也可以嗎？",
        answer:
          "當然沒問題，火箭隊是在幫助學員搭造火箭，只要您有了此能力，想飛去哪都是沒問題，教練們也樂觀其成。",
      },
    ],
  },
  {
    title: "關於火箭隊",
    content: [
      {
        id: 1,
        question: "你們是誰？",
        answer:
          "<u>洧杰</u> 與 <u>Justin</u> 皆在軟體公司打滾多年，2012 年一同共事，因許多願景志同道合，2014 年出來共同創業，目前皆穩定於政府系統專案上養活團隊。",
      },
      {
        id: 2,
        question: "<u>洧杰</u> 是六角學院的校長？",
        answer:
          "是的，六角學院為 <u>洧杰</u> 與 <u>王志誠</u> 於 2016 年共同創立的線上教育單位，目前則為六角學院與火箭隊的共同創辦人。",
      },
      {
        id: 3,
        question: "你們這樣做，是想要賺什麼？",
        answer: "沒賺錢，主要是培育後進為主要目的。",
      },
      {
        id: 4,
        question: "你們為什麼想創立這單位？",
        answer: `我們看到許多人想進入這行，但卻不得其門而入。<u>洧杰</u> 與 <u>Justin</u> 也希望藉由我們豐富的實務經驗，來達到知識傳承。<br />
        <span class="mark_style">我們其實想了很久，有什麼東西是過了十年後，還是會存在的？最後想到的則是「人」。</span><br />
        我們希望與更多「人」締結關係，由火箭隊出去的學員都能擁有好的發展，讓火箭隊這裡變成開發能量的集聚地，自然就會有更多的商業機會，例如工商媒合、專案合作等等，但我們並不急於一時，主要都還是以培育後進為主。`,
      },
      {
        id: 5,
        question: "火箭隊有什麼核心思想？",
        answer: `在火箭隊的宗旨中，<span class="mark_style">熱愛分享</span>是非常重要的。<br />在這裡您永遠會遇到需要您技術的人，藉由分享，讓彼此都獲得新知，真正實現 1+1 = 無限，也才不會只有自己孤軍奮戰的感受。分享的同時也能檢視自己是否真正掌握該技術、疏理自己的脈絡，讓自己更加深入技術核心。`,
      },
    ],
  },
  {
    title: "其他問題",
    content: [
      {
        id: 1,
        question: "一個梯次預計會錄取多少人，預計多久會再招收新的一梯次呢？",
        answer:
          "一個梯次預計錄取 8 個人。下一梯的招生時間會公布在粉專。",
      },
      {
        id: 2,
        question: "目前已經有工作，有沒有晚上的梯次呢？",
        answer:
          "火箭隊只有白天。只能晚上或週末的人，可以看看六角學院線上的「後端＋AI 工程師培訓班」。",
      },
      {
        id: 3,
        question: "我想多瞭解火箭隊，有什麼可以參考？",
        answer: `<a href="https://www.facebook.com/profile.php?id=100039975056467" target="_blank" rel="noreferrer noopener">火箭隊培訓營粉專</a>有火箭隊學員們的日常小趣事，還有老師和學長姐們的心得分享：<ul class="faq_link">${expLinksHtml}</ul>`,
      },
    ],
  },
];

//----------

// 最近梯次
const batchTicker = document.querySelector(".new_batch_ticker");
const batchTickerContent = `
<p class="new_batch_ticker_text">${batch}</p>
<p class="new_batch_ticker_text">${batch}</p>`;
batchTicker.innerHTML = batchTickerContent;

// FAQ
const faq = document.querySelector(".faq_container");
let title;
let htmlContent;

let faqHtml = "";
faqAry.forEach((section) => {
  let faqContent = section.content;
  let htmlContent = "";
  faqContent.forEach((content) => {
    const listItem = `
    <li class="question_item">
      <img src="./image/training/ic-no${content.id}.svg" alt="ic-no${content.id}" />
      <div>
        <p class="question_item_Q">${content.question}</p>
        <p class="question_item_A">${content.answer}</p>
      </div>
    </li>`;
    htmlContent += listItem;
  });

  const htmlContainer = `
  <section>
    <h3>${section.title}</h3>
    <ul class="question_container">
    ${htmlContent}
    </ul>
  </section>`;

  faqHtml += htmlContainer;
});

faq.innerHTML = faqHtml;
