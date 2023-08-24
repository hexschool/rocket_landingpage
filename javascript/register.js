//火箭隊報名資訊和 QA 可以從這一頁改

//梯次時間
const batch =
  "第十五梯 (2023/12/04~2024/06/30) 、第十六梯 (2024/03/01~2024/09/30)";

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
  {
    title: "報名資訊",
    content: [
      {
        id: 1,
        question: "預計招生的最近梯次和培訓時間？",
        answer: `${batch} <br />(每週一至週五 09:00 AM ~ 18:00 PM 全程參與)`,
      },
      {
        id: 2,
        question: "最新梯次的報名時間？",
        answer: "2023/08/23 ~ 2023/09/27 23:59:59 截止。",
      },
      {
        id: 3,
        question: "什麼時候會進行面試？",
        answer: "2023 年 10 月中旬。",
      },
      {
        id: 4,
        question: "什麼時候會有錄取通知？",
        answer: "2023 年 10 月中旬，將以 Email 進行通知。",
      },
    ],
  },
  {
    title: "培訓費用",
    content: [
      {
        id: 1,
        question: "請問參加培訓需要費用嗎？",
        answer:
          "不會有任何費用，僅需要場地費 ( $1,200 / Month )，其餘完全免費。",
      },
      {
        id: 2,
        question: "你們不是直銷吧？",
        answer: "不是，不會推銷任何東西。",
      },
      {
        id: 3,
        question: "你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？",
        answer: `其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如
        <a
          href="https://school.appworks.tw/"
          target="_blank"
          rel="noreferrer noopener"
          >AppWorks School</a
        >、<a
          href="https://www.programmer101.org/"
          target="_blank"
          rel="noreferrer noopener"
          >CMoney</a
        >，以及在台南的<a
          href="https://www.facebook.com/GoodideasStudio/"
          target="_blank"
          rel="noreferrer noopener"
          >好想工作室</a
        >。一樣也是提供<span class="bold_style">免費培訓</span
        >。而在高雄，我們是第一個舉辦此培訓營的單位。`,
      },
    ],
  },
  {
    title: "培訓流程",
    content: [
      {
        id: 1,
        question: "培訓的時間是多久呢？",
        answer:
          "培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或 UI 設計師。",
      },
      {
        id: 2,
        question: "那如果七個月結訓後，可以續留嗎？",
        answer:
          "當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。",
      },
      {
        id: 3,
        question: "你們和其他的培訓單位有什麼差異呢？",
        answer: `我們的培訓流程，主要是將學員培育成<span class="bold_style"
        >「擁有自我解決問題的工程師」</span
      >，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須<span
        class="bold_style"
        >了解該如何找出問題癥結點並解決問題</span
      >。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。`,
      },
      {
        id: 4,
        question: "這麼說來，你們沒有一個完整課綱？",
        answer: `是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您<span
        class="bold_style"
        >「目標」</span
      >，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。舉例來說，您對
      web layout
      沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。`,
      },
      {
        id: 5,
        question: "所以有很多的時間都是在自我研究技術？",
        answer:
          "是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。",
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
        question:
          "你們希望招募到哪些人格特質的人呢？一定要相關學歷有工作背景才會錄取？",
        answer: `不是的，其最重要的錄取因素會在於「<span class="mark_style"
        >你在程式方向的自我探索</span
      >」到了哪個階段？<br />火箭隊主要是幫助想要投入程式工作的人才進行加速動作，所以我們會從您的履歷中觀察，<span class="bold_style"
      >在加入火箭隊前您是否已經有各種嘗試，以確保您真的對工程師領域有興趣。</span>`,
      },
    ],
  },
  {
    title: "我適合當工程師嗎？",
    content: [
      {
        id: 1,
        question: "我以前從來沒寫過程式，不知道自己適不適合？",
        answer:
          "火箭隊所能提供的，就是「提供給你所有能給的資源，持續將您推到前方」，在這過程中您也能加速了解自己是否適合這條路。在正式加入我們之前，我們鼓勵你先自行探索程式的世界，體驗其魅力，並聆聽內心的回響。",
      },
      {
        id: 2,
        question: "所以，培訓營並非百分百可以轉職成功？",
        answer:
          "如果有哪個培訓營能號稱 100% 轉職成功，那一定是詐騙集團。培訓營的用意在於加速您在軟體程式投入，以方便快速了解自己是否適合。",
      },
      {
        id: 3,
        question: "我年紀超過 35 歲，之前工作都是非資訊，這樣也有機會嗎？",
        answer: "沒問題，我們也曾協助許多非資訊背景的學員轉職成功。",
      },
      {
        id: 4,
        question: "我是非資工資管背景，這樣也可以嗎？",
        answer:
          "其實絕大多數的工程師都是非資訊背景，像是 <u>洧杰</u> 是多媒體 3D 設計系，<u>Justin</u> 則是電腦通訊系。",
      },
      {
        id: 5,
        question: "我擔心過了七個月後，還是沒辦法成長，感覺會浪費時間。",
        answer:
          "有些事情是您必須投入後，踏出下一步，才會了解自己是否適合，火箭隊的存在就是協助您迅速深入了解這個產業，讓您能更全面地掌握與判斷。",
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
          "會的，火箭隊教練都是在南部業界超過十年以上的工作經歷，主要也是希望透過此服務來協助在地媒合。",
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
          "<u>洧杰</u> 與 <u>Justin</u> 皆在軟體公司打滾多年，七年前一同共事，因許多願景志同道合，五年前出來共同創業，目前皆穩定於政府系統專案上養活團隊。",
      },
      {
        id: 2,
        question: "<u>洧杰</u> 是六角學院的校長？",
        answer:
          "是的，六角學院為 <u>洧杰</u> 與 <u>王志誠</u> 於三年前共同創立的線上教育單位，目前則為六角學院與火箭隊的共同創辦人。",
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
          "一個梯次預計錄取 4 個人，會等到培訓學員學習到一個階段，再招收新的梯次。",
      },
      {
        id: 2,
        question: "目前已經有工作，有沒有晚上的梯次呢？",
        answer:
          "目前因為空間與資源都有限，只能開白天的梯次。未來希望有更多認同我們的人或公司加入，再來開晚上的梯次。",
      },
      {
        id: 3,
        question: "未來會不會有 PHP、Node.js 呢？",
        answer:
          "目前沒有，未來希望有擁有相關技術的人或公司願意認同我們，加入我們一起培育相關技術人才。",
      },
      {
        id: 4,
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
