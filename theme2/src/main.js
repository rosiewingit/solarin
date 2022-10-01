let html = null;
let body = null;
let root = null;
let mainPageNum = 1;

const host = "https://rosiewingit.github.io/solarin/theme2/resources/";
const mainBgImages = [
  `${host}main1-bg.jpg`,
  `${host}main2-bg.png`,
  `${host}main3-bg.png`,
  `${host}main4-bg.png`,
];
const productsBgUrl = `${host}products-bg.jpg`;
const sustainabilityBgUrl = `${host}sustainability-bg.jpg`;

window.onload = () => {
  console.log("ONLOAD");

  html = $("html");
  body = $("body");
  root = $("#root");
  loadMainPage();
  addHeaderAnimation();
  setScrollAnimation();
};

const addHeaderAnimation = () => {
  $("#navMain").hover(
    () => {
      $("#navDropdown").css("opacity", "1");
      $("#navDropdown").css("transition", "0.4s all");
      $("#navDropdown").css("visibility", "visible");
    },
    () => {
      $("#navDropdown").css("opacity", "0");
      $("#navDropdown").css("transition", "0.2s all");
      $("#navDropdown").css("visibility", "hidden");
    }
  );
};

const initScroll = () => {
  html.animate({ scrollTop: 0 }, 0);
};

const setScrollAnimation = () => {
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );

  initScroll();

  $(window).on("wheel", (e) => {
    if (html.is(":animated")) return;

    const errorRange = 10;
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > errorRange) {
      if (mainPageNum === 4) return;
      mainPageNum++;
    } else if (deltaY < -errorRange) {
      if (mainPageNum === 1) return;
      mainPageNum--;
    }

    const posTop = (mainPageNum - 1) * $(window).height();
    html.animate({ scrollTop: posTop });
  });
};

const loadMainPage = () => {
  const main1Text = {
    title: "Make convenient with new ideas.",
    subtitle1: "새로운 생각으로 일상을 더 편리하게.",
    subtitle2: "아이디어를 현실로 만드는 기업 솔라인.",
  };
  root.append(createMainPage("mainPage1", main1Text));

  const main2Text = {
    title: "Technology for humans.",
    subtitle1: "자연 친화적인 태양광부터 구난 방재 장치까지,",
    subtitle2: "솔라인은 인간을 위한 기술을 만듭니다.",
  };
  root.append(createMainPage("mainPage2", main2Text));

  const main3Text = {
    title: "Ideas come true.",
    subtitle1: "당신의 아이디어를 현실로 만들어 드립니다.",
    subtitle2: "",
  };
  root.append(createMainPage("mainPage3", main3Text));

  const main4Text = {
    title: "New Challenge for the future.",
    subtitle1: "미래를 위한 새로운 도전.",
    subtitle2: "",
  };
  root.append(createMainPage("mainPage4", main4Text));

  mainBgImages.forEach((value, index) => {
    $(`#mainPage${index + 1}`).css(
      "background-image",
      `url(${mainBgImages[index]})`
    );
  });
};

const createMainPage = (id, text) => {
  return `
  <div class="main-container" id="${id}">
  <div class="index-text">
    <div class="index-title">${text.title}</div>
    <div class="index-subtitle">${text.subtitle1}</div>
    <div class="index-subtitle">${text.subtitle2}</div>
  </div>
  </div>
`;
};

const createAboutUsPage = () => {};

const loadProductsPage = () => {
  body.css("background-image", `url('')`);
  root.html(createProductsPage());
  changeHeaderOpacity(1);
  initScroll();
};

const createProductsPage = () => {
  return `
  <div class="products-page">
      <div class="ppt-page">
        <div class="ppt-body">
          <div class="ppt-navigator">
            <ul class="navbar-vertical">
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">침수 선박 배수 펌프</a>
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">화재 진압용 드론</a>
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">인명 구조용 드론</a>
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight"
                  >옥상 일체형 태양광 패널</a
                >
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">1인용 전동 트레일러</a>
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">어망 절단기</a>
              </li>
              <li class="nav-child nav-ppt-child nav-item">
                <a class="nav-link nav-ppt-highlight">자동 사다리</a>
              </li>
            </ul>
          </div>
          <h1 class="ppt-title">Product Pages_Name</h1>
          <hr class="ppt-hr">
          <div class="ppt-path">Home > Products > Pump</div>
        </hr>
          <div class="ppt-contents">
            <div class="ppt-image"></div>
            <div class="ppt-description">
              솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서,<br />
              국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통<br />령령의
              위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.<br /><br />
              국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여<br />
              노력하여야 한다.<br />
              모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상<br />
              당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 국<br />
              가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를<br />
              유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의<br />
              조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을<br />
              할 수 있다.
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

const loadSustainabilityPage = () => {
  body.css("background-image", `url(${sustainabilityBgUrl})`);
  root.html(createSustainabilityPage());
};

const createSustainabilityPage = () => {
  return `
  <div class="index-text">
    <div class="index-title">Sustainability</div>
    <div class="index-subtitle">미래 성장을 위한 새로운 동력.</div>
  </div>
  <div class="arrow-button-container">
    <span class="arrow-button-text">learn more</span>
    <span class="arrow-button">
      <a href="#"></a>
    </span>
  </div>`;
};

const clickNav1Page = () => {
  console.log("Nav1");
};

const clickNav2Page = () => {
  console.log("Nav2");
};

const clickProductsPage = () => {
  console.log("Products Page");
  loadProductsPage();
};

const clickNav4Page = () => {
  console.log("Nav4");
  loadSustainabilityPage();
};

const clickNav5Page = () => {
  console.log("Nav5");
};

const changeHeaderOpacity = (opacity) => {
  $("header").css("background-color", `rgba(0,0,0,${opacity})`);
  $("#navDropdown").css("background-color", `rgba(0,0,0,${opacity})`);
};
