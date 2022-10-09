const rootPageId = "#root";
const rndcenterPageId = "#rndcenterPage";
const patentPageId = "#patentPage";
const certificationPageId = "#certificationPage";
const productsPageId = "#productsPage";

const pages = [
  rootPageId,
  rndcenterPageId,
  patentPageId,
  certificationPageId,
  productsPageId,
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
      case certificationPageId:
        $(this.page).append(this.createCertificationSection());
      default:
        break;
    }
  }

  createRndSection() {
    return `
      <section id="${this.id}" class="body-content">
        <div class="ppt-path"></div>
        <hr class="ppt-hr" />
        <article id="${this.id}-article" class="page-article"></article>
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

  setPath(path) {
    $(`#${this.id}`).find(".ppt-path").html(path);
  }
}
