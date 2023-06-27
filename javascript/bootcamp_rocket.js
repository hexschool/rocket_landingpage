// --- 成功案例 swiper ---
const swiper_case = new Swiper(".success_case_swiper", {
  // 格線排列
  grid: {
    rows: 2,
    // 排列方向
    fill: "row",
  },
  spaceBetween: 24,
  breakpoints: {
    // 幻燈片間距

    320: {
      // 畫面中要顯示幾張
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 教練卡片
const cardContainer = document.querySelector(".coach_card_container_inside");
const coachCard = [...cardContainer.children];
const coachDes = document.querySelector(".coach_description");
const coachWeijie = `<h4>前端教練 | 廖洧杰</h4>
      <ul>
          <li>
              2016-2022 過往經歷：<a href="https://www.hexschool.com/">六角學院校長</a>、<a href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626">高雄火箭隊</a>前端教練
          </li>
          <li>2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位</li>
          <li>2013-2019 授課人數：線上+線下授課學員超過 25,000 位</li>
          <li>2014-2019 線下授課：<a href="https://www.im.nuk.edu.tw/?page_id=95">高雄大學前端領域兼任講師</a></li>
          <li>2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統</li>
      </ul>`;
const coachYinmin = `<h4>前端教練 | 穎旻</h4>
          <ul>
              <li>六角學院前端工程師</li>
              <li>六角學院前端講師</li>
              <li>金龍國小教育訓練講師</li>
              <li>國泰產險教育訓練講師</li>
      </ul>`;
const coachJustin = `<h4>後端教練 | 賈斯汀</h4>
      <ul>
          <li>高雄市警察局縣市合併內外部整合</li>
          <li>嘉義縣警察局全球資訊網與內部知識網</li>
          <li>總統府全球資訊網系統維護及開發</li>
          <li>總統府 APP 新聞即時通系統開發</li>
          <li>金管會 EIP SSO 整合</li>
          <li>經濟部工業局電子書包加值應用計畫系統規劃、設計開發</li>
          <li>國立海生館活動與報名系統規劃開發</li>
          <li>國立海生館海洋教育網規劃開發</li>
          <li>台灣淨水器材百科商務平台規劃開發</li>
          <li>高雄市小學電子書包試行計畫</li>
          <li>屏東國立海生館活動與報名系統</li>
          <li>屏東國立海生館海洋教育網</li>
          <li>威錦水器材百科補助計畫</li>
          <li>supermediastore（美國購物網站）</li>
          <li>高雄捷運網站</li>
          <li>高雄世運志工服務系統</li>
          <li>高雄市 85 大樓招商網</li>
          <li>高雄市國稅局稅務宣導活動網站</li>
          <li>高雄市民政局業務資訊化委外作業</li>
          <li>高雄市國稅局全球資訊網</li>
          <li>高雄市府衛生局中英全球資訊網</li>
          <li>高雄市新聞處圖文影像管理系統</li>
          <li>高雄市政府文化局中英文網站</li>
          <li>屏東縣政府旅遊網</li>
          <li>屏東縣政府招商網</li>
          <li>行政院南區服務中心網站</li>
          <li>經濟部水利署南區水資源局 105 年度業務及全球資訊網站維護及功能擴充計畫</li>
      </ul>`;
const coachCasper = `<h4>UI 教練 | 卡斯伯</h4>
      <ul>
          <li>2016-2022 過往經歷：<a href="https://www.hexschool.com/">六角學院</a>共同創辦人</li>
          <li>2016-2022 近期授課經驗：<a href="https://www.hexschool.com/courses/vue-training.html">Vue 3 直播班講師</a>、<a href="https://www.youtube.com/watch?v=qRZLtIcPdls&list=RDCMUC-b2nGm0xLzic38Byti0VjA&start_radio=1">從 Figma 到 VSCode，設計做到網頁切版</a></li>
          <li>2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現</li>
          <li>六屆 IT 鐵人邦獲選紀錄</li>
          <li>Modern Web 研討會講者</li>
          <li>線上課程超過萬人註冊</li>
          <li>研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者</li>
          <li>2021 {Laravel x Vue} Conf 技術講者</li>
          <li>五屆 IT 鐵人賽優選</li>
          <li>技術 Blog - 卡斯伯前端</li>
      </ul>`;

function changeCoach() {
  cardContainer.addEventListener("click", (e) => {
    //找到點擊了誰
    const elementClass = e.target.classList;
    let coachName = "";
    if (elementClass.contains("coach_card")) {
      coachName = e.target.dataset.coach;
    }
    if (
      elementClass.contains("coach_img") ||
      elementClass.contains("coach_name")
    ) {
      coachName = e.target.parentNode.dataset.coach;
    }

    switch (coachName) {
      case "weijie":
        coachDes.innerHTML = coachWeijie;
        break;
      case "yinmin":
        coachDes.innerHTML = coachYinmin;
        break;
      case "justin":
        coachDes.innerHTML = coachJustin;
        break;
      case "casper":
        coachDes.innerHTML = coachCasper;
        break;
    }

    // 如果是指定教練，給 card .active，如果不是就移除 .active
    coachCard.forEach((item) => {
      const isActiveCoach = item.dataset.coach === coachName;
      item.classList.toggle("active", isActiveCoach);
    });
  });
}

changeCoach();

//swiper
const swiper_coach = new Swiper(".coach_swiper", {
  // 格線排列
  grid: {
    rows: 1,
    // 排列方向
    fill: "row",
  },
  breakpoints: {
    320: {
      spaceBetween: 28,
      width: 332,
      centeredSlides: true,
    },

    768: {
      spaceBetween: 24,
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

swiper_coach.on("slideChange", function () {
  const coachObj = [
    { activeIndex: 0, text: coachWeijie, dataName: "weijie" },
    { activeIndex: 1, text: coachYinmin, dataName: "yinmin" },
    { activeIndex: 2, text: coachJustin, dataName: "justin" },
    { activeIndex: 3, text: coachCasper, dataName: "casper" },
  ];

  const actIndex = swiper_coach.activeIndex;
  coachDes.innerHTML = coachObj[actIndex].text;

  coachCard.forEach((item) => {
    const isActiveCoach = item.dataset.coach === coachObj[actIndex].dataName;
    item.classList.toggle("active", isActiveCoach);
  });
});
