const rootPageId = "#root";
const rndcenterPageId = "#rndcenterPage";
const patentPageId = "#patentPage";
const productsPageId = "#productsPage";
const newsPageId = "#newsPage";
const certificationPageId = "#certificationPage";
const overviewPageId = "#overviewPage";
const ceoMessagePageId = "#ceoMessagePage";
const esgPageId = "#esgPage";
const accessPageId = "#accessPage";

const pages = [
  rootPageId,
  rndcenterPageId,
  patentPageId,
  productsPageId,
  newsPageId,
  certificationPageId,
  overviewPageId,
  ceoMessagePageId,
  esgPageId,
  accessPageId,
];

const showPage = (pageId) => {
  pages.forEach((page) => {
    if (page === pageId) {
      $(`${page}`).removeClass("hidden");
    } else {
      $(`${page}`).addClass("hidden");
    }
  });
};

class PPTContent {
  constructor(page, id) {
    this.page = page;
    this.id = id;
  }

  init() {
    if ($(`#${this.id}`).length > 0) {
      return;
    }

    switch (this.page) {
      case rndcenterPageId:
        $(this.page).append(this.createRndSection());
        break;
      case patentPageId:
        $(this.page).append(this.createPatentSection());
        break;
      case productsPageId:
        $(this.page).append(this.createProductsSection());
        break;
      case newsPageId:
        $(this.page).append(this.createNewsSection());
        break;
      case certificationPageId:
        $(this.page).append(this.createCertificationSection());
        break;
      case overviewPageId:
        $(this.page).append(this.createOverviewSection());
        break;
      case ceoMessagePageId:
        $(this.page).append(this.createCeoMessageSection());
        break;
      case esgPageId:
        $(this.page).append(this.createEsgSection());
        break;
      case accessPageId:
        $(this.page).append(this.createAccessSection());
      default:
        break;
    }
  }

  createRndSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
          <h1 class="ppt-title">Head Office</h1>
        </article>
      </section>
      `;
  }

  createPatentSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path"></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div class="patent-item">
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
        </div>
      </article>
    </section>`;
  }

  createProductsSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
          <div class="products-left">
            <img
              class="products-item-img"
              src="./resources/products-item-1.png"
            />
            <img
              class="products-item-img temp-products-image"
              src="./resources/temp-image-navigation.png"
            />
          </div>
          <div class="products-right">
            <h1 class="products-item-title">침수 선박 배수 펌프</h1>
            <div class="products-item-description">
              솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서,<br />
              국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의
              위임<br />
              또는 직권으로 총리령 또는 부령을 발할 수 있다.<br /><br />
              국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여<br />
              노력하여야 한다.<br />
              모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한
              이유가<br />
              없는 한 지체없이 공개재판을 받을 권리를 가진다. 국가는 균형있는
              국민경제의<br />
              성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의
              남용<br />
              을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에
              관한<br />
              규제와 조정을 할 수 있다.<br /><br />
              모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한
              이유가<br />
              없는 한 지체없이 공개재판을 받을 권리를 가진다. 국가는 균형있는
              국민경제의<br />
              성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의
              남용<br />
              을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에
              관한<br />
              규제와 조정을 할 수 있다.
            </div>
          </div>
          <div class="products-nav">
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
          </div>
        </article>
      </section>
      `;
  }

  createNewsSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > PR Center > <b>News</b></div>
      <hr class="ppt-hr" />
      <div class="news-container">
        <div class="news-headline">
          <div class="news-headline-left">
            <img src="./resources/news-main-pic.png" />
          </div>
          <div class="news-headline-right">
            <h1 class="news-headline-title">
              유원대, 한국발명진흥회, ㈜넥스웜, 솔라인과 업무협약
            </h1>
            <p class="news-headline-date">2022.05.12 14:49</p>
            <p class="news-headline-text">
              [중부매일 윤여군 기자] 유원대학교(총장 채훈관)가 11일
              한국발명진흥회(회장 권오현), ㈜넥스웜(대표이사 주진혁),
              솔라인(대표 김재술) 등 벤처기업과 산학협력 업무협약을 체결했다.<br /><br />
              아산캠퍼스 심우관 대회의실에서 진행된 협약식에는 채훈관 총장을
              비롯해 김원진, 배재우, 김병주, 황재효 등 반도체디스플레이학과
              교수들과 강민철 지식거래재산소 특허거래전문관, ㈜넥스웜의 주진혁
              대표, 솔라인의 김재술 대표가 참석했다.<br /><br />협약에 따라 각
              기관은 대학이 보유한 기술의 국내외 기술이전 및 거래활성화, 유원대
              반도체디스플레이학과 졸업생의 취업, 교육·연구·기술 정보교류,
              디스플레이 교육과정 개발 등에 공동 협력하기로 했다....
            </p>
          </div>
        </div>
        <hr class="ppt-hr" />
        <div class="news-body-container">
          <div class="news-body-header"></div>
          <div class="news-body-cards"></div>
        </div>
      </div>
    </section>
      `;
  }

  createCertificationSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path"></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div class="patent-item">
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
          <div class="row patent-item-row">
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
            <div class="col-md-2"><img class="patent-img" src="./resources/patent1.png" /></div>
          </div>
        </div>
      </article>
    </section>`;
  }

  createOverviewSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
        </article>
      </section>
      `;
  }

  createCeoMessageSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
        </article>
      </section>
      `;
  }

  createEsgSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
          <h1 class="ppt-title">ESG 경영이란?</h1>
        </article>
      </section>
      `;
  }

  createAccessSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
          <h1 class="ppt-title">위치 안내</h1>
        </article>
      </section>
      `;
  }

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}
