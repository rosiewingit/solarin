const rootPageId = "#root";
const coretechnologyPageId = "#coretechnologyPage";
const rndcenterPageId = "#rndcenterPage";
const prototypePageId = "#prototypePage";
const patentPageId = "#patentPage";
const developmentPageId = "#developmentPage";
const newsPageId = "#newsPage";
const certificationPageId = "#certificationPage";
const overviewPageId = "#overviewPage";
const ceoMessagePageId = "#ceoMessagePage";
const historyPageId = "#historyPage";
const csrPageId = "#csrPage";
const esgPageId = "#esgPage";
const accessPageId = "#accessPage";

// core-technology detail
const coretechnologyDetailPageId = "#coretechnologyDetailPage";

const pages = [
  rootPageId,
  coretechnologyPageId,
  rndcenterPageId,
  prototypePageId,
  patentPageId,
  developmentPageId,
  newsPageId,
  certificationPageId,
  overviewPageId,
  ceoMessagePageId,
  historyPageId,
  csrPageId,
  esgPageId,
  accessPageId,
  coretechnologyDetailPageId,
];

const showPage = (pageId) => {
  history.pushState(pageId, pageId);
  if (pageId === rootPageId) {
    $(".inner-body").addClass("hidden");
  } else {
    $(".inner-body").removeClass("hidden");
  }
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
      case prototypePageId:
        $(this.page).append(this.createPrototypeSection());
        break;
      case patentPageId:
        $(this.page).append(this.createPatentSection());
        break;
      case developmentPageId:
        $(this.page).append(this.createDevelopmentSection());
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
      case historyPageId:
        $(this.page).append(this.createHistorySection());
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
          <div
            id="techCoreCard1"
            class="core-tech-card"
            onclick="clickTechCoreCard1()"
          >
            <div class="core-tech-top"></div>
            <div class="core-tech-mid">
              <img
                loading="lazy"
                class="core-tech-learn-more-btn hidden"
                src="./resources/Learn-more-button.svg"
              />
            </div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">Waste Plastic Combustion Engine</p>
              <h4 class="core-tech-title">폐플라스틱 연소기</h4>
              <p class="core-tech-description hidden">
              폐플라스틱 감량화 장치는 폐플라스틱을 연소하여 대체 연료로 만드는 장치입니다. 폐플라스틱을 새로운 에너지원으로 만드는 솔라인의 주요 미래 연구과제입니다.
              </p>
            </div>
          </div>
          <div
            id="techCoreCard2"
            class="core-tech-card"
            onclick="clickTechCoreCard2()"
          >
            <div class="core-tech-top"></div>
            <div class="core-tech-mid">
              <img
                loading="lazy"
                class="core-tech-learn-more-btn hidden"
                src="./resources/Learn-more-button.svg"
              />
            </div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">Waterproof Motor & Battery System</p>
              <h4 class="core-tech-title">방수 모터 및 배터리 시스템</h4>
              <p class="core-tech-description hidden">
              고출력 모터 드라이브 시스템은 솔라인에서 자체 개발한 모터 시스템으로서, 국가 연구 과제로 수행 중인 배수 펌프와 더불어 다양한 제품의 주 동력원으로 사용되고 있습니다.
              </p>
            </div>
          </div>
          <div
            id="techCoreCard3"
            class="core-tech-card"
            onclick="clickTechCoreCard3()"
          >
            <div class="core-tech-top"></div>
            <div class="core-tech-mid">
              <img
                loading="lazy"
                class="core-tech-learn-more-btn hidden"
                src="./resources/Learn-more-button.svg"
              />
            </div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">Dissolved Oxygen Device</p>
              <h4 class="core-tech-title">산소용해장치</h4>
              <p class="core-tech-description hidden">
              용존 산소 증폭기는 물속의 산소 농도를 증폭시켜 수온 상승 시 녹조를 예방하고, 수중 생태계를 보존하는 장치입니다. 
              </p>
            </div>
          </div>

          <div
            id="techCoreCard4"
            class="core-tech-card"
            onclick="clickTechCoreCard4()"
          >
            <div class="core-tech-top"></div>
            <div class="core-tech-mid">
              <img
                loading="lazy"
                class="core-tech-learn-more-btn hidden"
                src="./resources/Learn-more-button.svg"
              />
            </div>
            <div class="core-tech-bottom">
              <p class="core-tech-subtitle">Solar System</p>
              <h4 class="core-tech-title">태양광 시스템</h4>
              <p class="core-tech-description hidden">
              태양광 경광등은 12V의 LED를 사용하여, 야간 시야 확보가 어려운 곳에서 안내 표시등 역할을 합니다. 설치 후 별도의 전원 관리가 필요 없으며, 반영구적으로 사용 가능합니다.
              </p>
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
                <p class="rnd-subtitle">연구개발 전담부서</p>
                <p class="rnd-title">A-1103 연구소</p>
              </div>
            </div>
          </div>
          <div class="rnd-body-mid">
            <div class="rnd-image rnd-center-2">
              <div class="rnd-text">
                <p class="rnd-subtitle">침수선박 배수펌프 실험실</p>
                <p class="rnd-title">A-B202 실험실</p>
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

  createPrototypeSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > Products > <b>Prototype</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <div id="prototypeBody" class="development-body"></div>
      </article>
    </section>
    `;
  }

  createPatentSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path"></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div id="patentsItem" class="patent-item"></div>
      </article>
    </section>`;
  }

  createDevelopmentSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div id="productsNav" class="products-nav">
      <div class="products-nav-body">
          <div id="productsNavHandle" class="products-nav-tag" name="closed"></div>
          <p id="productsNavItem-1" class="products-nav-title">압축 공기식 어망 절단기</p>
          <p id="productsNavItem-2" class="products-nav-title">전동식 어망 절단기</p>
          <p id="productsNavItem-3" class="products-nav-title">태양광 경광등</p>
          <p id="productsNavItem-4" class="products-nav-title">자동사다리</p>
          <p id="productsNavItem-5" class="products-nav-title">페달형 손 소독기</p>
          <p id="productsNavItem-6" class="products-nav-title">해경 배수 펌프</p>
          <p id="productsNavItem-7" class="products-nav-title">익수자 인양 장치</p>
          <p id="productsNavItem-8" class="products-nav-title">포터블식 소화 장치</p>
        </div>
      </div>
      <div class="ppt-path">Home > Products > <b>Development</b></div>
      <hr class="ppt-hr" />
    </section>
      `;
  }

  createNewsSection() {
    return `
    <section id="${this.id}" class="body-content">
        <div class="ppt-path">Home > PR Center > <b>News</b></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article">
          <div id="newsHeadline" class="news-headline">
            <div id="newsHeadlineImage" class="news-headline-image"></div>
            <div class="news-headline-body">
              <p id="newsHeadlineTitle" class="news-headline-title">
                유원대, 한국발명진흥회, ㈜넥스웜, 솔라인과 업무협약
              </p>
              <p id="newsHeadlineDate" class="news-headline-date">2022.05.12 14:49</p>
              <p id="newsHeadlineDescription" class="news-headline-contents">
                [중부매일 윤여군 기자] 유원대학교(총장 채훈관)가 11일
                한국발명진흥회(회장 권오현), ㈜넥스웜(대표이사 주진혁),
                솔라인(대표 김재술) 등 벤처기업과 산학협력 업무협약을
                체결했다.<br /><br />
                아산캠퍼스 심우관 대회의실에서 진행된 협약식에는 채훈관 총장을
                비롯해 김원진, 배재우, 김병주, 황재효 등 반도체디스플레이학과
                교수들과 강민철 지식거래재산소 특허거래전문관, ㈜넥스웜의 주진혁
                대표, 솔라인의 김재술 대표가 참석했다. <br /><br />협약에 따라
                각 기관은 대학이 보유한 기술의 국내외 기술이전 및 거래활성화,
                유원대 반도체디스플레이학과 졸업생의 취업, 교육·연구·기술
                정보교류, 디스플레이 교육과정 개발 등에 공동 협력하기로
                했다...<br /><br />
              </p>
            </div>
          </div>
          <hr class="ppt-hr" />
          <div class="news-container">
            <div class="news-search">
              <div class="news-search-left">
                <input class="news-search-left-input" value="제목" readonly></input>
              </div>
              <div class="news-search-right">
                <input class="news-search-right-input"  placeholder="검색어를 입력하세요"></input>
                <div class="news-search-right-button"></div>
              </div>
            </div>
            <div id="newsBody" class="news-body"></div>
          </div>
        </article>
      </section>
      `;
  }

  createCertificationSection() {
    return `<section id="${this.id}" class="body-content">
      <div class="ppt-path"></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article">
        <div id="certificationsItem" class="patent-item"></div>
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
            <img loading="lazy" class="overview-logo" src="./resources/logo-color.png" />
          </div>
          <div class="overview-first-right-mid">
            <h1 class="overview-first-title">'Technology for Human'</h1>
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
          <img loading="lazy" src="./resources/ceo-image.png" />
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
          <img loading="lazy" class="ceo-message-sign" src="./resources/ceo-sign.png" />
        </div>
      </article>
    </section>
      `;
  }

  createHistorySection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > About Us > <b>History</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article" class="page-article"></article>
    </section>
      `;
  }

  createCsrSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">Home > About Us > <b>CSR</b></div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <h1 class="ppt-title">CSR이란?</h1>
        <p class="ppt-text">
          ‘CSR’이란 기업의 사회적 책임(Corporate Social Responsibility)이라는
          의미로, 기업과 사회의 공생관계를 올바르게 발전시키기 위해 기업이
          취하는 행동이라고 할 수 있습니다.
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
                농촌마을 자매결연
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
                공생기술센터
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
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                지역 사회간 국제 교류 시스템
              </h1>
              <p class="ppt-text">
                솔라인에서는 지역 사회의 다문화 가정을 중심으로 하여 국가 간
                농촌 마을의 교류를 추진하는 ‘농촌 마을 자매결연' 프로젝트를 운영
                중입니다.<br />자매결연을 체결한 마을은 적정 기술과 언어를
                교류하며 각 마을의 특산품 등 다양한 재화를 교환하며 공생을
                실천해 나갑니다.
              </p>
              <img loading="lazy" class="csr-tab-image" src="./resources/aboutus/csr-tab1-map.png" />
              <hr class="ppt-hr" />
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                더 넓은 세상으로, 자매 결연 홍보영상
              </h1>
              <p class="ppt-text">
                솔라인에서는 지역 사회의 다문화 가정을 중심으로 하여 국가 간
                농촌 마을의 교류를 추진하는 ‘농촌 마을 자매결연' 프로젝트를 운영
                중입니다.<br />자매결연을 체결한 마을은 적정 기술과 언어를
                교류하며 각 마을의 특산품 등 다양한 재화를 교환하며 공생을
                실천해 나갑니다.
              </p>
              <iframe
                class="csr-video"
                src="https://www.youtube.com/embed/DWh-L15R-8o?controls=2&showinfo=0&modestbranding=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <hr class="ppt-hr" />
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                자매 결연 체험단 : 경남 통영 금평마을 - 몽골 붐브그르
              </h1>
              <p class="ppt-text">
                솔라인에서는 지역 사회의 다문화 가정을 중심으로 하여 국가 간
                농촌 마을의 교류를 추진하는 ‘농촌 마을 자매결연' 프로젝트를 운영
                중입니다.<br />자매결연을 체결한 마을은 적정 기술과 언어를
                교류하며 각 마을의 특산품 등 다양한 재화를 교환하며 공생을
                실천해 나갑니다.
              </p>
              <div class="csr-tab1-cards">
                <div class="csr-tab1-card"></div>
                <div class="csr-tab1-card"></div>
                <div class="csr-tab1-card"></div>
                <div class="csr-tab1-card"></div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="csr-tab-2"
              role="tabpanel"
              aria-labelledby="csr-nav-tab-2"
              tabindex="0"
            >
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                적정 기술을 개발하는 공생기술센터
              </h1>
              <p class="ppt-text">
                솔라인에서는 지난 2009년부터 지역 사회 및 농촌 마을 지원을 위한
                적정 기술을 연구하기 위한 공생기술센터를 운영중입니다.
              </p>
              <div class="csr-tab-image-container">
                <div class="csr-tab-image csr-tab2-image1">
                  <div class="bigimage-left-arrow csr-arrow-image hidden"></div>
                  <div class="bigimage-right-arrow csr-arrow-image hidden"></div>
                </div>
              </div>
              <hr class="ppt-hr" />
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                인간을 위한 기술, 적정 기술이란?
              </h1>
              <p class="ppt-text">
                적정기술이란 지역 사회의 인프라를 고려하여 만들어진 기술로
                경제적이고 단순하며, 방향성에 목적을 둔 인간 중심적인 기술을
                의미합니다.
              </p>
              <div class="csr-tab-image-container-nomargin">
                <img loading="lazy" class="big-image" src="./resources/aboutus/csr-tab2-diagram.png" />
              </div>
              <hr class="ppt-hr" />
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                적정 기술로 만들어진 제품들
              </h1>
              <p class="ppt-text">
                적정기술이란 지역 사회의 인프라를 고려하여 만들어진 기술로
                경제적이고 단순하며, 방향성에 목적을 둔 인간 중심적인 기술을
                의미합니다.
              </p>
              <div class="csr-tab2-cards">
                <div class="csr-tab2-card"></div>
                <div class="csr-tab2-card"></div>
                <div class="csr-tab2-card"></div>
                <div class="csr-tab2-card"></div>
                <div class="csr-tab2-card"></div>
                <div class="csr-tab2-card"></div>
              </div>
              <hr class="ppt-hr" />
              <h1 class="csr-title">
                <div class="title-bar-top-line"></div>
                현장에서의 공생기술센터
              </h1>
              <p class="ppt-text">
                공생기술센터에서는 연구 뿐만 아니라 일상 생활 속 과학을 중심으로
                다양한 체험 학습을 진행하며, 적정 기술과 관련된 강연을 합니다.
              </p>
              <div class="csr-tab-image-container">
                <div class="csr-tab-image csr-tab2-image2">
                  <div class="bigimage-left-arrow csr-arrow-image hidden"></div>
                  <div class="bigimage-right-arrow csr-arrow-image hidden"></div>
                </div>
              </div>
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
        <img loading="lazy" src="./resources/esg-main-image.png" />
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
          <div id="mainMap" class="map-image"></div>
        </div>
      </article>
    </section>
    `;
  }

  // 오시는길 임시 삭제
  // <section class="body-content">
  //     <article class="page-article">
  //       <h1 class="ppt-title">오시는 길</h1>
  //       <nav>
  //         <div class="nav nav-tabs" id="access-nav-tab" role="tablist">
  //           <button
  //             class="nav-link access-nav-link active"
  //             id="access-nav-tab-1"
  //             data-bs-toggle="tab"
  //             data-bs-target="#access-tab-1"
  //             type="button"
  //             role="tab"
  //             aria-controls="access-tab-1"
  //             aria-selected="true"
  //           >
  //             대중교통
  //           </button>
  //           <button
  //             class="nav-link access-nav-link"
  //             id="access-nav-tab-2"
  //             data-bs-toggle="tab"
  //             data-bs-target="#access-tab-2"
  //             type="button"
  //             role="tab"
  //             aria-controls="access-tab-2"
  //             aria-selected="false"
  //           >
  //             자차이동
  //           </button>
  //         </div>
  //       </nav>
  //       <div class="tab-content" id="access-tab">
  //         <div
  //           class="tab-pane fade show active"
  //           id="access-tab-1"
  //           role="tabpanel"
  //           aria-labelledby="access-nav-tab-1"
  //           tabindex="0"
  //         >
  //         </div>
  //         <div
  //           class="tab-pane fade"
  //           id="access-tab-2"
  //           role="tabpanel"
  //           aria-labelledby="access-nav-tab-2"
  //           tabindex="0"
  //         >
  //       </div>
  //     </article>
  //   </section>

  createCoreTechnologyDetailSection() {
    return `
    <section id="${this.id}" class="body-content">
      <div class="ppt-path">
        Home > Technology > Core Technology > <b>폐플라스틱 연소기</b>
      </div>
      <hr class="ppt-hr" />
      <article id="${this.id}-article">
        <h1 id="coreDetailTitle" class="core-detail-title">
        폐플라스틱 연소기, Waste Plastic Combustion Engine
        </h1>
        <img id="coreDetailImage" class="core-detail" loading="lazy" src="./resources/technology/core-technology-detail1.png"/>
      </article>
    </section>
      `;
  }

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}
