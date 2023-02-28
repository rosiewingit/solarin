const DETAIL_ID = {
  card1: "card1",
  card2: "card2",
  card3: "card3",
  card4: "card4",
};

const clickCoreTechnology = () => {
  showPage(coretechnologyPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(coretechnologyPageId, "coretechnology-page-1");
  content.init();
  content.setPath("Home > Technology > <b>Core Technology</b>");

  addPopstateEvent();

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
    "Home > Technology > Core Technology > <b>폐플라스틱 연소기</b>"
  );

  const option = {
    titleKr: "폐플라스틱 연소기",
    titleEng: "Waste Plastic Combustion Engine",
    image: "./resources/technology/detail/detail-card1-main.png",
    features: [
      "모듈 구조로 탈부착이 용이하며 운송 및 확장성에 최적화",
      "700°C의 고온 연소로 시간당 3 kg의 폐플라스틱 연소 가능",
      "PE, PP, ABS, PS, LDPE, HDPE의 폐플라스틱이 연소 가능",
    ],
    video: "./resources/technology/detail/detail-card1-video-portrait.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card1, option);
  detail.init();
};

const clickTechCoreCard2 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-detail-page-1"
  );
  content.init();
  content.setPath(
    "Home > Technology > Core Technology > <b>방수 모터 및 배터리 시스템</b>"
  );

  const option = {
    titleKr: "방수 모터 및 배터리 시스템",
    titleEng: "Waterproof Motor & Battery System",
    image: "./resources/technology/detail/detail-card2-main.png",
    features: [
      "전기 배터리의 전력을 이용하여 분당 5톤의 물을 배수 가능",
      "700°C의 고온 연소로 시간당 3 kg의 폐플라스틱 연소 가능",
      "PE, PP, ABS, PS, LDPE, HDPE의 폐플라스틱이 연소 가능",
    ],
    video: "./resources/technology/detail/detail-card2-video-landscape.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card2, option);
  detail.init();
};

const clickTechCoreCard3 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-detail-page-1"
  );
  content.init();
  content.setPath("Home > Technology > Core Technology > <b>산소용해장치</b>");

  const option = {
    titleKr: "산소용해장치",
    titleEng: "Dissolved Oxygen Device",
    image: "./resources/technology/detail/detail-card3-main.png",
    video: "./resources/technology/detail/detail-card1-video-portrait.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card3, option);
  detail.init();
};

const clickTechCoreCard4 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-detail-page-1"
  );
  content.init();
  content.setPath(
    "Home > Technology > Core Technology > <b>태양열 집열 시스템</b>"
  );

  const option = {
    titleKr: "태양열 집열 시스템",
    titleEng: "Solar Collector System",
    image: "./resources/technology/detail/detail-card2-main.png",
    features: [
      "기존 집열 장치 대비 50% 이하의 제작 비용으로 경제성이 높음",
      "지면에 부착되는 형태로 태풍에 안전하며, 대형화에 용이",
      "태양전지 대비 높은 에너지 효율과 폐플라스틱 열분해, 수소 생산 등 다양한 목적으로 사용",
    ],
    video: "./resources/technology/detail/detail-card2-video-landscape.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card3, option);
  detail.init();
};

const addPopstateEvent = () => {
  window.addEventListener("popstate", (event) => {
    if (event.state === coretechnologyPageId) {
      clickCoreTechnology();
    }
  });
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

class TechnologyDetail {
  constructor(id, option) {
    this.id = id;
    this.option = option;
  }

  init() {
    this.setTitle();
    this.setImage();
    this.setVideo();
    this.createFeatureList();
  }

  setTitle() {
    const titleKr = this.option.titleKr;
    const titleEng = this.option.titleEng;
    $("#detailHeaderTitleKr").text(titleKr);
    $("#detailHeaderTitleEng").text(titleEng);
  }

  setImage() {
    const image = this.option.image;
    $("#detailSpecImage").attr("src", image);
  }

  setVideo() {
    const video = this.option.video;
    if (!video) {
      return;
    }

    $("#detailVideo").attr("src", video);
    if (video.includes("portrait")) {
      $("#detailVideo").attr("class", "detail-video-portrait");
    } else if (video.includes("landscape")) {
      $("#detailVideo").attr("class", "detail-video-landscape");
    }
  }

  createFeatureList() {
    const features = this.option.features
      ? this.option.features
      : ["feature 1", "feature 2", "feature 3"];
    $("#detailSpecFeatures").empty();
    for (let item of features) {
      $("#detailSpecFeatures").append(`<li>${item}</li>`);
    }
  }
}

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
