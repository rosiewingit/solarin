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

    this.initScroll();
  }

  initScroll() {
    $("html").animate({ scrollTop: 0 }, 0);
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
      <div class="ppt-path">Home > About Us > <b>Overview</b></div>
      <hr class="ppt-hr" />
      <article class="page-article">
        <div class="overview-first-left">
          <div class="overview-first-image"></div>
        </div>
        <div class="overview-first-right">
          <div class="overview-first-right-top">
            <img
              class="brand-logo-color overview-logo"
              src="./resources/logo-color.png"
            />
          </div>
          <div class="overview-first-right-mid">
            <h1 class="overview-first-title">"Company Slogan"</h1>
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
    <section class="body-content">
      <article class="page-article">
        <h1 class="ppt-title">
          Core Technology Task : 핵심 기술 or 국가 연구 과제
        </h1>
        <div class="overview-task-cards"></div>
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

  createEsgSection() {
    return `
    <section class="body-content">
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
