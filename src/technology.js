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

  $.getJSON("./data/certifications.json", (data) => {
    const hostUrl = data.hostUrl;
    const patents = data.patents;

    const patentItems = new Certification("patents", hostUrl, patents);
    patentItems.init();
  });
};

const clickTechCoreCard = () => {
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

class Certification {
  constructor(type, hostUrl, items) {
    this.type = type;
    this.hostUrl = hostUrl;
    this.items = items;
  }

  init() {
    const cards = this.items;
    const row = 6;
    const length = this.items.length;
    const counts = length / row;

    if ($(`#${this.type}Item`).children().length > 0) {
      return;
    }

    for (let i = 0; i < counts; i++) {
      const tmpCards = cards.slice(row * i, row * (i + 1));
      $(`#${this.type}Item`).append(this.createCards(tmpCards));
    }
  }

  getImages(items) {
    let result = "";
    for (let item of items) {
      const imageUrl = `${this.hostUrl}/${this.type}/${item.image}`;
      result += `
      <div class="col-md-2" onclick=openImageViewer("url('${imageUrl}')")>
        <img loading="lazy" class="patent-img" alt="${item.title}" src="${imageUrl}"/>
      </div>
      `;
    }
    return result;
  }

  createCards(images) {
    return `<div class="row patent-item-row">
    ${this.getImages(images)}
    </div>
    `;
  }
}
