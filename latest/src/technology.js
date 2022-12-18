const clickCoreTechnology = () => {
  showPage(coretechnologyPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(coretechnologyPageId, "coretechnology-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Core Technology</b>");

  const cards = $(".core-tech-card");
  for (let card of cards) {
    addCoreTechCardHover($(card));
  }
};

const clickDevelopment = () => {
  showPage(developmentPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(developmentPageId, "development-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Development</b>");

  const developments = [
    {
      id: "developmentCard1",
      name: "어망절단기",
      images: ["1-1-landscape.png", "1-2-landscape.png", "3-1-landscape.png"],
    },
    {
      id: "developmentCard2",
      name: "자동사다리",
      images: ["2-6-portrait.png", "1-1-landscape.png"],
    },
    {
      id: "developmentCard3",
      name: "해경배수펌프",
      images: ["3-1-landscape.png", "1-1-landscape.png", "1-2-landscape.png"],
    },
  ];

  for (const item of developments) {
    const development = new Development(item);
    development.init();
  }
};

const clickRndCenter = () => {
  showPage(rndcenterPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(rndcenterPageId, "rnd-page-1");
  content.init();
  content.setPath("Home > Technology > <b>R&D Center</b>");
};

const clickPatent = () => {
  showPage(patentPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(patentPageId, "patent-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Patent</b>");
};

const clickTechCoreCard1 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-detail-page-1"
  );
  content.init();
  content.setPath(
    "Home > Technology > Core Technology > <b>용존산소증폭기</b>"
  );
};

const addCoreTechCardHover = (element) => {
  element.hover(
    () => {
      element.css("cursor", "pointer");
      element.css("background-blend-mode", "overlay");
      element.css("background-color", "rgba(0, 166, 52, 0.7)");
      element.find(".core-tech-learn-more-btn").removeClass("hidden");
      element.find(".core-tech-subtitle").addClass("hidden");
      element.find(".core-tech-description").removeClass("hidden");
      element
        .find(".core-tech-bottom")
        .animate({ "padding-top": "10%" }, 500, "swing");
    },
    () => {
      element.css("cursor", "none");
      element.css("background-blend-mode", "none");
      element.css("background-color", "rgba(0, 166, 52, 0)");
      element.find(".core-tech-learn-more-btn").addClass("hidden");
      element.find(".core-tech-subtitle").removeClass("hidden");
      element.find(".core-tech-description").addClass("hidden");
      element
        .find(".core-tech-bottom")
        .animate({ "padding-top": "40%" }, 500, "swing");
    }
  );
};

class Development {
  constructor(item) {
    this.id = item.id;
    this.name = item.name;
    this.images = item.images;
  }

  init() {
    this.addDevelopmentCard();
  }

  addDevelopmentCard() {
    $(`#developmentBody`).append(this.createDevelopmentCard());

    for (const image of this.images) {
      $(`#image-${this.id}`).append(this.createCardImage(image));
    }
    $(`#image-${this.id} div:first-child`).addClass("active");
  }

  createDevelopmentCard() {
    return `
    <div class="development-card">
        <h1 class="development-title">
          <div class="title-bar-top-line"></div>
          ${this.name}
        </h1>
        <div
          id="${this.id}"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div id="image-${this.id}" class="carousel-inner"></div>
          <button
            class="carousel-control-prev prev-carousel"
            type="button"
            data-bs-target="#${this.id}"
            data-bs-slide="prev"
          ></button>
          <button
            class="carousel-control-next next-carousel"
            type="button"
            data-bs-target="#${this.id}"
            data-bs-slide="next"
          ></button>
        </div>
      </div>
    `;
  }

  createCardImage(filename) {
    const TYPE = {
      portrait: "portrait",
      landscape: "landscape",
    };
    if (filename.includes(TYPE.portrait)) {
      return `
      <div class="carousel-item">
        <div>
          <div class="carousel-main-image blur">
            <img
              src="./resources/technology/development/${filename}"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-main-image development-main-image">
            <img
            src="./resources/technology/development/${filename}"
            class="d-block h-100 carousel-position"
          />
          </div>
        </div>
      </div>
      `;
    } else {
      return `
      <div class="carousel-item">
        <div>
          <div class="carousel-main-image development-main-image">
            <img
            src="./resources/technology/development/${filename}"
            class="d-block w-100 carousel-position"
          />
          </div>
        </div>
      </div>
      `;
    }
  }
}
