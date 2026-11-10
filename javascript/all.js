const rocketPage = document.querySelector(".rocket_page");
const coworkPage = document.querySelector(".cowork_page");

if (rocketPage) {
  // 教練卡片
  const cardContainer = document.querySelector(".coach_card_container_inside");
  const coachCard = [...cardContainer.children];
  const coachDes = document.querySelector(".coach_description");
  const coachWeijie = `<h4>產品教練 | 廖洧杰</h4>
      <ul>
          <li><a href="https://www.hexschool.com/" target="_blank" rel="noreferrer noopener">六角學院</a>共同創辦人（2016 年與卡斯伯共同創立）</li>
          <li>2023-2026 經歷：六角學院技術講師</li>
          <li>
              2016-2022 過往經歷：<a href="https://www.hexschool.com/" target="_blank" rel="noreferrer noopener">六角學院校長</a>、<a href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626" target="_blank" rel="noreferrer noopener">高雄火箭隊</a>前端教練
          </li>
          <li>2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位</li>
          <li>2013-2019 授課人數：線上+線下授課學員超過 25,000 位</li>
          <li>2014-2019 線下授課：<a href="https://www.im.nuk.edu.tw/?page_id=95" target="_blank" rel="noreferrer noopener">高雄大學前端領域兼任講師</a></li>
          <li>2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統</li>
      </ul>`;
  const coachDennis = `<h4>技術教練 | 阿劍</h4>
          <ul>
              <li>資深前端工程師</li>
              <li>六角學院｜Node.js 企業專題教練長</li>
              <li>YS 青年職涯發展中心｜活動講師</li>
              <li>勞動部｜GitHub Actions CI/CD 自動化與 AI 協作實務班講師</li>
      </ul>`;
  const coachJustin = `<h4>技術教練 | 賈斯汀</h4>
      <ul>
          <li>總統府全球資訊網系統維護及開發、總統府 APP 新聞即時通系統開發</li>
          <li>金管會 EIP SSO 整合</li>
          <li>高雄市警察局縣市合併內外部整合、嘉義縣警察局全球資訊網與內部知識網</li>
          <li>經濟部工業局電子書包加值應用計畫系統規劃、設計開發</li>
          <li>國立海生館活動與報名系統、海洋教育網規劃開發</li>
          <li>高雄捷運網站、高雄世運志工服務系統</li>
          <li>另有高雄市國稅局、衛生局、文化局、屏東縣政府、行政院南區服務中心等 20 多個政府與企業網站專案</li>
      </ul>`;
  const coachCasper = `<h4>技術教練 | 卡斯伯</h4>
      <ul>
          <li><a href="https://www.hexschool.com/" target="_blank" rel="noreferrer noopener">六角學院</a>共同創辦人（2016 年與洧杰共同創立）</li>
          <li>2023-2026 經歷：六角學院技術講師</li>
          <li>2016-2022 授課經驗：<a href="https://www.hexschool.com/courses/vue-training.html" target="_blank" rel="noreferrer">Vue 3 直播班講師</a>、<a href="https://www.youtube.com/watch?v=qRZLtIcPdls&list=RDCMUC-b2nGm0xLzic38Byti0VjA&start_radio=1" target="_blank" rel="noreferrer noopener">從 Figma 到 VSCode，設計做到網頁切版</a></li>
          <li>2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現</li>
          <li>六屆 IT 鐵人邦獲選紀錄</li>
          <li>線上課程超過萬人註冊</li>
          <li>2017 Modern Web 研討會技術講者</li>
          <li>2021 {Laravel x Vue} Conf 技術講者</li>
          <li>五屆 IT 鐵人賽優選</li>
          <li><a href="https://www.casper.tw/" target="_blank">技術 Blog - 卡斯伯前端</a></li>
      </ul>`;

  const coachText = {
    weijie: coachWeijie,
    dennis: coachDennis,
    justin: coachJustin,
    casper: coachCasper,
  };

  // 換成指定教練的介紹，選中的卡片加 .active
  const selectCoach = (coachName) => {
    if (!coachText[coachName]) return;
    coachDes.innerHTML = coachText[coachName];
    coachCard.forEach((item) => {
      const isActiveCoach = item.dataset.coach === coachName;
      item.classList.toggle("active", isActiveCoach);
      item.setAttribute("aria-pressed", isActiveCoach ? "true" : "false");
    });
  };

  // 卡片可以用鍵盤選（Tab 移過去，按 Enter 或空白鍵）
  coachCard.forEach((item) => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `看${item.textContent.trim()}的介紹`);
  });
  coachDes.setAttribute("aria-live", "polite");
  selectCoach("weijie");

  cardContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".coach_card");
    if (card) selectCoach(card.dataset.coach);
  });

  cardContainer.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".coach_card");
    if (!card) return;
    e.preventDefault();
    selectCoach(card.dataset.coach);
  });

  //swiper
  const swiper_coach = new Swiper(".coach_swiper", {
    // 格線排列
    grid: {
      rows: 1,
      // 排列方向
      fill: "row",
    },
    pagination: {
      el: ".coach_dots",
      clickable: true,
    },
    // 卡片是按鈕，讀出來是「看某某的介紹」，不要被 swiper 換成「1 / 4」
    a11y: {
      slideRole: "button",
      slideLabelMessage: "",
    },
    breakpoints: {
      // 手機：一次一張多一點，露出下一張的邊，看得出可以滑
      320: {
        spaceBetween: 16,
        slidesPerView: 1.25,
      },

      768: {
        spaceBetween: 24,
        slidesPerView: 1,
        width: 251,
        centeredSlides: true,
      },

      1229: {
        spaceBetween: 24,
        width: 1076,
        slidesPerView: 4,
      },
    },
  });

  // 手機、平板左右滑時，介紹跟著換
  swiper_coach.on("slideChange", function () {
    const card = coachCard[swiper_coach.activeIndex];
    if (card) selectCoach(card.dataset.coach);
  });
}

if (coworkPage) {
  const swiper_carousel = new Swiper(".carousel", {
    spaceBetween: 24,
    centeredSlidesBounds: true,
    loop: true,
    mousewheel: true,
    autoplay: {
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },

      768: {
        slidesPerView: 2.5,
      },
    },
  });
}

// 首屏軌道動畫：首屏捲出畫面就暫停，捲回來再繼續
const heroOrbit = document.querySelector(".hero25_orbit");
if (heroOrbit && "IntersectionObserver" in window) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      heroOrbit.classList.toggle("is-paused", !entry.isIntersecting);
    });
  }).observe(heroOrbit);
}
