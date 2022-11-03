const rootPageId = "#root";
const coretechnologyPageId = "#coretechnologyPage";
const rndcenterPageId = "#rndcenterPage";
const patentPageId = "#patentPage";
const productsPageId = "#productsPage";
const newsPageId = "#newsPage";
const certificationPageId = "#certificationPage";
const overviewPageId = "#overviewPage";
const ceoMessagePageId = "#ceoMessagePage";
const csrPageId = "#csrPage";
const esgPageId = "#esgPage";
const accessPageId = "#accessPage";

// core-technology detail
const coretechnologyDetailPageId = "#coretechnologyDetailPage";

const pages = [
  rootPageId,
  coretechnologyPageId,
  rndcenterPageId,
  patentPageId,
  productsPageId,
  newsPageId,
  certificationPageId,
  overviewPageId,
  ceoMessagePageId,
  csrPageId,
  esgPageId,
  accessPageId,
  coretechnologyDetailPageId,
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
      this.initScroll();
      return;
    }

    switch (this.page) {
      case coretechnologyPageId:
        $(this.page).append(this.createCoreTechnologySection());
        break;
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
      case csrPageId:
        $(this.page).append(this.createCsrSection());
        break;
      case esgPageId:
        $(this.page).append(this.createEsgSection());
        break;
      case accessPageId:
        $(this.page).append(this.createAccessSection());
        break;
      case coretechnologyDetailPageId:
        $(this.page).append(this.createCoreTechnologyDetailSection());
      default:
        break;
    }

    this.initScroll();
  }

  initScroll() {
    $("html").animate({ scrollTop: 0 }, 0);
  }

  createCoreTechnologySection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > Technology > <b>Core Technology</b></div>
      <hr class="ppt-hr" />
      <article class="page-article">
        <h1 class="ppt-title">Core Technology</h1>
        <div class="core-tech-cards">
          <div class="core-tech-card" onclick="clickTechCoreCard1()">
            <div class="core-tech-top"></div>
            <div class="core-tech-mid"></div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">NTIS Project</p>
              <h4 class="core-tech-title">용존산소증폭기</h4>
              <p class="core-tech-description">
                상세 설명 : 솔라인은 ‘새로운 생각, 편리한 생활’이라는 설립 이념
                아래 ‘아이디어 설계 및 제조’, ‘기술 개발 컨설팅’, ‘신기술 연구
                개발’ 분야에 영위하고 있는 기업으로서, 2019년 창립 이래 끊임없는
                도전과 혁신...
              </p>
            </div>
          </div>
          <div class="core-tech-card">
            <div class="core-tech-top"></div>
            <div class="core-tech-mid"></div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">NTIS Project</p>
              <h4 class="core-tech-title">2948-1102, 배수펌프</h4>
              <p class="core-tech-description"></p>
            </div>
          </div>
          <div class="core-tech-card">
            <div class="core-tech-top"></div>
            <div class="core-tech-mid"></div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">subtitle</p>
              <h4 class="core-tech-title">핵심 기술 3</h4>
              <p class="core-tech-description"></p>
            </div>
          </div>
          <div class="core-tech-card">
            <div class="core-tech-top"></div>
            <div class="core-tech-mid"></div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">subtitle</p>
              <h4 class="core-tech-title">핵심 기술 4</h4>
              <p class="core-tech-description"></p>
            </div>
          </div>
        </div>
      </article>
    </section>
      `;
  }

  createRndSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > Technology > <b>R&D Center</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <h1 class="ppt-title">R&D Center</h1>
        <p class="ppt-text">
          성남시에 위치한 솔라인 연구소는 적정 기술을 개발하기 위한
          공생기술센터와 국가 연구 과제 수행을 위한 연구 전담 실험실로 운영되며,
          다년간의 연구를 거듭하여 축적된 아이디어 설계 및 제조 분야의 전 과정에
          걸친 다양한 연구 기술을 보유하고 있습니다.
        </p>
        <div class="rnd-body">
          <div class="rnd-body-top">
            <div class="rnd-image rnd-center-1">
              <div class="rnd-text">
                <p class="rnd-subtitle">2948-1102, 용존산소증폭기</p>
                <p class="rnd-title">A1103 연구소</p>
              </div>
            </div>
          </div>
          <div class="rnd-body-mid">
            <div class="rnd-image rnd-center-2">
              <div class="rnd-text">
                <p class="rnd-subtitle">BOD-12873, 배수펌프</p>
                <p class="rnd-title">국가 연구 과제 실험실</p>
              </div>
            </div>
          </div>
          <div class="rnd-body-bottom">
            <div class="rnd-bottom-text">
              <p class="rnd-bottom-title">IDEA DESIGN & MANUFACTURING</p>
              <p class="rnd-bottom-subtitle">
                국내 최고의 설계 경력 35년 이상의 베테랑
              </p>
              <p class="rnd-bottom-description">
                국내 유일의 아이디어 디자인 및 설계 분야에 있는 솔라인은
                임직원의 80%가 각 분야에서 35년 이상 근무한 베테랑들로 구성되어
                있습니다.
              </p>
            </div>
            <div class="rnd-image rnd-center-3"></div>
          </div>
        </div>
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
      <div id="productsNav" class="products-nav">
        <div class="products-nav-body">
          <p class="products-nav-title">침수 선박 배수 펌프</p>
          <p class="products-nav-title">경량 방수포 차수막</p>
          <p class="products-nav-title">녹조제거 바지선</p>
          <p class="products-nav-title">어망절단기</p>
          <p class="products-nav-title">익수자인양기</p>
          <p class="products-nav-title">전동차 트레일러(TBD)</p>
          <p class="products-nav-title">화재 진압용 드론(TBD)</p>
          <p class="products-nav-title">그물망 구조 드론(TBD)</p>
        </div>
      </div>
      <div class="ppt-path">Home > Products > <b>경량방수포차수막</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div class="products-left">
          <div class="products-left-top">
            <div id="productsImage" onclick="clickProductsImage()" class="products-image"></div>
          </div>
          <div class="products-left-bottom">
            <div class="products-thumbnails">
              <div class="products-thumb products-left-arrow"></div>
              <div class="products-thumb">
                <div id="productsThumb1" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb2" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb3" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb4" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb5" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb6" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb">
                <div id="productsThumb7" class="products-thumb-image"></div>
              </div>
              <div class="products-thumb products-right-arrow"></div>
            </div>
          </div>
        </div>
        <div class="products-right">
          <h1 class="products-title">경량 방수포 차수막</h1>
          <p class="products-text">
            재질 : 경량방수포 고주파 결합 제작<br />
            제품 보관 방법 : 두루마리 매트방식<br /><br />
            설치 방법 : 범람예상지역 사전 설치 방법, 물 주입과
            공기주입-에어펌프<br /><br />
            보관 크기 : 750*300<br />
            설치 크기 : 4200*600<br /><br />
            홍수시, 지하 주차장 또는
          </p>
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
      <div class="ppt-path">Home > About Us > <b>Overview</b></div>
      <hr class="ppt-hr" />
      <article class="page-article">
        <div class="overview-first-left">
          <div class="overview-first-image"></div>
        </div>
        <div class="overview-first-right">
          <div class="overview-first-right-top">
            <img class="overview-logo" src="./resources/logo-color.png" />
          </div>
          <div class="overview-first-right-mid">
            <h1 class="overview-first-title">New Ideas, Handy Life.</h1>
          </div>
          <div class="overview-first-right-bottom">
            <table class="table table-borderless">
              <tbody>
                <tr class="overview-table-item">
                  <th scope="row">Company Name</th>
                  <td>SOLARIN Co.</td>
                </tr>
                <tr class="overview-table-item">
                  <th scope="row">Date of establishment</th>
                  <td>August 13, 2019</td>
                </tr>
                <tr class="overview-table-item">
                  <th scope="row">Head Office</th>
                  <td>
                    14, Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si,
                    Gyeonggi-do, Republic of Korea
                  </td>
                </tr>
                <tr class="overview-table-item">
                  <th scope="row">Tel.</th>
                  <td>0507-1395-0771</td>
                </tr>
                <tr class="overview-table-item">
                  <th scope="row">Sectors</th>
                  <td>Idea Design & Manufacturing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
    <section class="body-content">
      <article class="page-article">
        <h1 class="ppt-title">Network Map</h1>
        <div class="overview-second-top">
          <!-- <div class="overview-map-namecard">
            <p>product name</p>
          </div>
          <div class="overview-map-namecard">
            <p>product name</p>
          </div>
          <div class="overview-map-namecard">
            <p>product name</p>
          </div>
          <div class="overview-map-namecard">
            <p>product name</p>
          </div>
          <div class="overview-map-namecard">
            <p>product name</p>
          </div>
          <div class="overview-map-namecard">
            <p>product name</p>
          </div> -->
        </div>
        <div class="overview-second-bottom"></div>
      </article>
    </section>
    `;
  }

  createCeoMessageSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > About Us > <b>CEO Message</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div class="ceo-message-left">
          <img src="./resources/ceo-image.png" />
        </div>
        <div class="ceo-message-right">
          <h1 class="ceo-message-title">Make convenient with new ideas.</h1>
          <p class="ceo-message-text">
            솔라인은 ‘새로운 생각, 편리한 생활’이라는 설립 이념 아래 ‘아이디어
            설계 및 제조’, ‘기술 개발 컨설팅’, ‘신기술 연구 개발’ 분야에
            영위하고 있는 기업으로서, 2019년 창립 이래 끊임없는 도전과 혁신으로
            지속적인 성장을 이루어 왔습니다.<br /><br />인간을 위한 기술로 고객
            만족을 실천하는 솔라인은 국제 특허 2건, 국내 특허 4건, 출원 4건의
            특허를 보유하고 있으며, 해양 경찰청 연구 센터의 의뢰를 받아 어망
            절단기, 갯벌구조장치, 함정용 자동 사다리, 인양 크레인, 어망 절단기
            등 다양한 구난-구조 장치를 개발해 왔습니다.<br /><br />국내 매출
            규모가 성장세를 이룸에 따라, 생산 설비 투자를 비롯한 기술 발전을
            위한 연구 개발, 인적 자원 양성 등 지속 가능한 개발을 통해 성장
            기반을 갖춰 나가고 있습니다. 또한 다양한 분야의 기업과 파트너쉽을
            구축하여 고객의 요구를 충족할 수 있는 품질과 서비스를 제공하고
            있습니다.<br /><br />고객에게 새로운 가치를 제공하는 일류 기업이
            되겠습니다. 감사합니다.
          </p>
          <span class="ceo-message-name">솔라인 대표 김재술</span>
          <img class="ceo-message-sign" src="./resources/ceo-sign.png" />
        </div>
      </article>
    </section>
      `;
  }

  createCsrSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">
        Home > Technology > Core Technology > <b>용존산소증폭기</b>
      </div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <h1 class="ppt-title">CSR이란?</h1>
        <p class="ppt-text">
          ‘CSR’이란 기업의 사회적 책임(Corporate Social Responsibility)이라는
          의미로, 기업과 사회의 공생관계를 올바르게 발전시키기 위해 기업이
          취하는 행동이라고 할 수 있습니다.<br />솔라인에서는 UN에서 정한 지속
          가능한 개발 목표(SDGs)를 기준으로 하여 적정기술을 연구하고 개발하여
          사회공헌에 앞장서고 있습니다.
        </p>
        <div class="csr-content">
          <nav>
            <div class="nav nav-tabs" id="csr-nav-tab" role="tablist">
              <button
                class="nav-link csr-nav-link active"
                id="csr-nav-tab-1"
                data-bs-toggle="tab"
                data-bs-target="#csr-tab-1"
                type="button"
                role="tab"
                aria-controls="csr-tab-1"
                aria-selected="true"
              >
                비전 및 목표
              </button>
              <button
                class="nav-link csr-nav-link"
                id="csr-nav-tab-2"
                data-bs-toggle="tab"
                data-bs-target="#csr-tab-2"
                type="button"
                role="tab"
                aria-controls="csr-tab-2"
                aria-selected="false"
              >
                적정기술
              </button>
              <button
                class="nav-link csr-nav-link"
                id="csr-nav-tab-3"
                data-bs-toggle="tab"
                data-bs-target="#csr-tab-3"
                type="button"
                role="tab"
                aria-controls="csr-tab-3"
                aria-selected="false"
              >
                공생기술센터
              </button>
              <button
                class="nav-link csr-nav-link"
                id="csr-nav-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#csr-tab-4"
                type="button"
                role="tab"
                aria-controls="csr-tab-4"
                aria-selected="false"
              >
                자립마을 프로젝트
              </button>
              <button
                class="nav-link csr-nav-link"
                id="csr-nav-tab-5"
                data-bs-toggle="tab"
                data-bs-target="#csr-tab-5"
                type="button"
                role="tab"
                aria-controls="csr-tab-5"
                aria-selected="false"
              >
                사회공헌현황
              </button>
            </div>
          </nav>
          <div class="tab-content" id="csr-tab">
            <div
              class="tab-pane fade show active"
              id="csr-tab-1"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-1"
              tabindex="0"
            >
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab1-1.png"
              />
            </div>
            <div
              class="tab-pane fade"
              id="csr-tab-2"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-2"
              tabindex="0"
            >
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab2-1.png"
              />
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab2-2.png"
              />
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab2-3.png"
              />
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab2-4.png"
              />
            </div>
            <div
              class="tab-pane fade"
              id="csr-tab-3"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-3"
              tabindex="0"
            >
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab3-1.png"
              />
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab3-2.png"
              />
            </div>
            <div
              class="tab-pane fade"
              id="csr-tab-4"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-4"
              tabindex="0"
            >
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab4-1.png"
              />
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab4-2.png"
              />
            </div>
            <div
              class="tab-pane fade"
              id="csr-tab-5"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-5"
              tabindex="0"
            >
              <img
                class="csr-tab-body"
                src="./resources/whole-image-tab5-1.png"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
      `;
  }

  createEsgSection() {
    return `
    <section id="${this.id}" class="body-content">
    <div class="ppt-path">Home > About Us > <b>ESG</b></div>
    <hr class="ppt-hr" />
    <article class="page-article">
      <h1 class="ppt-title">ESG 경영이란?</h1>
      <p class="esg-main-text">
        ‘ESG’란 기업의 비재무적 요소인 환경(Environment), 사회(Social),
        지배구조(Governance)를 뜻하는 것으로, ‘ESG 경영’이란 장기적인 관점에서
        친환경 및 사회적 책임경영과 투명경영을 통해 지속가능한 발전을 추구하는
        것이라고 할 수 있습니다.
      </p>
      <div class="esg-main-image">
        <img src="./resources/esg-main-image.png" />
      </div>
    </article>
  </section>
  <section class="body-content">
    <article class="page-article">
      <h1 class="ppt-title">솔라인의 ESG 주요 실천 과제</h1>
      <div class="row esg-task-cards">
        <div class="col-md-4 esg-card">
          <main class="esg-card-image">
            <div class="esg-card-title">
              <div class="esg-card-title-item"></div>
              <div class="esg-card-title-item">친환경 경영, Environment</div>
            </div>
          </main>
          <ul class="esg-card-list">
            <li>친환경 경영///</li>
            <li>친환경, 기후변화, 대응에너지 절약, 재활용</li>
            <li>녹색제품 구매 비율 확대</li>
            <li>탄소 온실가스 등 독성물질 절감</li>
            <li>에너지 사용량 감소 및 효율 개선</li>
            <li>행사 폐기물 감소 노력</li>
            <li>Earth Check(친환경관광인증) 취득</li>
          </ul>
        </div>
        <div class="col-md-4 esg-card">
          <main class="esg-card-image">
            <div class="esg-card-title">
              <div class="esg-card-title-item"></div>
              <div class="esg-card-title-item">사회적 책임 경영, Social</div>
            </div>
          </main>
          <ul class="esg-card-list">
            <li>친환경 경영///</li>
            <li>친환경, 기후변화, 대응에너지 절약, 재활용</li>
            <li>녹색제품 구매 비율 확대</li>
            <li>탄소 온실가스 등 독성물질 절감</li>
            <li>에너지 사용량 감소 및 효율 개선</li>
            <li>행사 폐기물 감소 노력</li>
            <li>Earth Check(친환경관광인증) 취득</li>
          </ul>
        </div>
        <div class="col-md-4 esg-card">
          <main class="esg-card-image">
            <div class="esg-card-title">
              <div class="esg-card-title-item"></div>
              <div class="esg-card-title-item">투명 경영, Governance</div>
            </div>
          </main>
          <ul class="esg-card-list">
            <li>친환경 경영///</li>
            <li>친환경, 기후변화, 대응에너지 절약, 재활용</li>
            <li>녹색제품 구매 비율 확대</li>
            <li>탄소 온실가스 등 독성물질 절감</li>
            <li>에너지 사용량 감소 및 효율 개선</li>
            <li>행사 폐기물 감소 노력</li>
            <li>Earth Check(친환경관광인증) 취득</li>
          </ul>
        </div>
      </div>
    </article>
  </section>
      `;
  }

  createAccessSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > About Us > <b>Access</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <h1 class="ppt-title">위치 안내</h1>
        <div class="access-map-container">
          <img class="map-image" src="./resources/access-map.png" />
          <div class="access-map-overlay">
            <div class="overlay-top">
              <img class="brand-logo-color" src="./resources/logo-color.png" />
            </div>
            <div class="overlay-bottom">
              <div class="overlay-bottom-top">
                <p class="overlay-text">
                  14, Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si,
                  Gyeonggi-do, Republic of Korea
                </p>
              </div>
              <div class="overlay-bottom-bottom">
                <p class="overlay-text">+82)0507-1395-0771</p>
              </div>
            </div>
            <button
              type="button"
              id="accessContactBtn"
              class="btn access-button"
            >
              Contact us
            </button>
          </div>
        </div>
      </article>
    </section>
    <section class="body-content">
      <article class="page-article">
        <img src="./resources/access-dummy-2.png" class="dummy-img" />
      </article>
    </section>
    <section class="body-content">
      <article class="page-article">
        <img src="./resources/access-dummy-3.png" class="dummy-img" />
      </article>
    </section>
      `;
  }

  // createAccessSection_history() {
  //   return `
  //   <section id="${this.id}" class="body-content">
  //   <div class="ppt-path">Home > About Us > <b>Access</b></div>
  //   <hr class="ppt-hr" />
  //   <article id="${this.id}-article" class="page-article">
  //     <h1 class="ppt-title">위치 안내</h1>
  //     <div class="access-map-container">
  //       <img class="map-image" src="./resources/access-map.png" />
  //       <div class="access-map-overlay">
  //         <div class="overlay-top">
  //           <img class="brand-logo-color" src="./resources/logo-color.png" />
  //         </div>
  //         <div class="overlay-bottom">
  //           <div class="overlay-bottom-top">
  //             <p class="overlay-text">
  //               14, Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si,
  //               Gyeonggi-do, Republic of Korea
  //             </p>
  //           </div>
  //           <div class="overlay-bottom-bottom">
  //             <p class="overlay-text">+82)0507-1395-0771</p>
  //           </div>
  //         </div>
  //         <button
  //           type="button"
  //           id="accessContactBtn"
  //           class="btn access-button"
  //         >
  //           Contact us
  //         </button>
  //       </div>
  //     </div>
  //   </article>
  // </section>
  // <section class="body-content">
  //   <article class="page-article">
  //     <h1 class="ppt-title">오시는 길</h1>
  //   </article>
  // </section>
  // <section class="body-content">
  //   <article class="page-article"></article>
  // </section>
  //     `;
  // }

  createCoreTechnologyDetailSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">
        Home > Technology > Core Technology > <b>용존산소증폭기</b>
      </div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <h1 class="core-detail-title">
          용존산소증폭기, Dissolved Oxygen Amplifier
        </h1>
        <p class="core-detail-text">
          솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서, 국무총리
          또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는
          직권으로 총리령 또는 부령을 발할 수 있다.<br /><br />
          국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여
          노력하여야 한다.<br />모든 국민은 신속한 재판을 받을 권리를 가진다.
          형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를
          가진다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를
          유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를
          통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.<br /><br />모든
          국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가
          없는 한 지체없이 공개재판을 받을 권리를 가진다. 국가는 균형있는
          국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와
          경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를
          위하여 경제에 관한 규제와 조정을 할 수 있다.
        </p>
        <div class="core-detail-feature">
          <div class="core-detail-feature-card">
            <img src="./resources/core-detail-icon-1.png" />
            <p>
              솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서,
              국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나
              대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.
            </p>
          </div>
          <div class="core-detail-feature-card">
            <img src="./resources/core-detail-icon-2.png" />
            <p>
              솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서,
              국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나
              대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.
            </p>
          </div>
          <div class="core-detail-feature-card">
            <img src="./resources/core-detail-icon-3.png" />
            <p>
              솔라인은 2019년 설립된 국내 유일의 아이디어 제작 업체로서,
              국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나
              대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.
            </p>
          </div>
        </div>
        <div class="core-detail-graph-wrapper">
          <p>용존 산조 증가폭 비교 그래프</p>
          <div class="core-detail-graph">
            <div class="core-detail-graph-image core-detail-graph-card-1"></div>
            <div class="core-detail-graph-image core-detail-graph-card-2"></div>
          </div>
        </div>
        <div class="rnd-body">
          <div class="rnd-body-top">
            <div class="core-detail-image core-detail-card-1"></div>
          </div>
          <div class="rnd-body-mid">
            <div class="core-detail-image core-detail-card-2"></div>
          </div>
        </div>
      </article>
    </section>
      `;
  }

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}
