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
      images: ["1-1.png", "2-1.png", "3-1.png"],
    },
    {
      id: "developmentCard2",
      name: "펌프",
      images: ["2-1.png", "3-1.png", "1-1.png"],
    },
    {
      id: "developmentCard3",
      name: "자동사다리",
      images: ["3-1.png", "1-1.png", "2-1.png"],
    },
  ];

  for (const item of developments) {
    const development = new Development(item.id, item.name, item.images);
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
  constructor(id, name, images) {
    this.id = id;
    this.name = name;
    this.images = images;
  }

  init() {
    this.addDevelopmentCard();
  }

  addDevelopmentCard() {
    $(`#developmentBody`).append(this.createDevelopmentCard());
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
          class="carousel slide development-carousel"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="./resources/technology/development/${this.images[0]}"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="./resources/technology/development/${this.images[1]}"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="./resources/technology/development/${this.images[2]}"
                class="d-block w-100"
              />
            </div>
          </div>
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
}
