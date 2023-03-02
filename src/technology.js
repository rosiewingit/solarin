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
    "core-tech-detail-page-1"
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
    size: [
      { key: "재질", value: "SUS 304(외부 파이프) / SUS 316(내부 연소실)" },
      {
        key: "배관 연결 직경",
        value: "∅120",
      },
      {
        key: "연료 투입구 직경",
        value: "∅105",
      },
      {
        key: "시간당 연소량",
        value: "3 kg",
      },
      { key: "총 높이", value: "310 mm" },
    ],
    videoText: {
      title: "연소 엔진",
      subtitle: "연소기의 핵심 부품인 엔진을 소개합니다",
      description: `폐플라스틱 연소 엔진은 폐플라스틱 연소기의 핵심 부품으로서,<br />
      700°C 고온에서 시간당 3kg의 폐플라스틱을 연소합니다.`,
    },
    video: "./resources/technology/detail/detail-card1-video-portrait.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card1, option);
  detail.append(detail.createHeader());
  detail.append(detail.createSpec());
  detail.append(detail.createVideo());
  detail.append(detail.createTest());
  detail.update();
};

const clickTechCoreCard2 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-tech-detail-page-1"
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
      "IP68 등급의 방수 설계로 해양 및 수중 환경에서 사용 가능",
      "자체 기술로 개발한 어망절단기의 주 동력원",
      "컴팩트한 사이즈로 이동이 용이하여 홍수 시 배수 펌프의 역할 수행 가능",
    ],
    videoText: {
      title: "고출력 모터 드라이브 시스템",
      subtitle: "방수 모터의 배터리 시스템을 소개합니다",
      description: `배터리 시스템을 사용한 방수 모터는 500W의 출력을 최대 30분 동안 유지할 수 있습니다.<br />
      고출력 모터 드라이브 시스템은 전동식 어망 절단기, 익수자인양장치, 구난사다리 등 다양한 해양 구조 제품에 적용되어 사용 중입니다.`,
    },
    video: "./resources/technology/detail/detail-card2-video-landscape.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card2, option);
  detail.append(detail.createHeader());
  detail.append(detail.createSpec());
  detail.append(detail.createVideo());
  detail.append(detail.createTest());
  detail.append(detail.createRelated());
  detail.update();
};

const clickTechCoreCard3 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-tech-detail-page-1"
  );
  content.init();
  content.setPath("Home > Technology > Core Technology > <b>산소용해장치</b>");

  const option = {
    titleKr: "산소용해장치",
    titleEng: "Dissolved Oxygen Device",
    features: ["수중 산소 농도를 조절하는 장치", "feature 2", "feature 3"],
    image: "./resources/technology/detail/detail-card3-main.png",
    video: "./resources/technology/detail/detail-card1-video-portrait.mp4",
  };

  const detail = new TechnologyDetail(DETAIL_ID.card3, option);
  detail.append(detail.createHeader());
  detail.append(detail.createSpec());

  detail.update();
};

const clickTechCoreCard4 = () => {
  showPage(coretechnologyDetailPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(
    coretechnologyDetailPageId,
    "core-tech-detail-page-1"
  );
  content.init();
  content.setPath(
    "Home > Technology > Core Technology > <b>태양열 집열 시스템</b>"
  );

  const option = {
    titleKr: "태양열 집열 시스템",
    titleEng: "Solar Collector System",
    image: "./resources/technology/detail/detail-card4-main.png",
    features: [
      "기존 집열 장치 대비 50% 이하의 제작 비용으로 경제성이 높음",
      "지면에 부착되는 형태로 태풍, 풍랑주의보 등 자연 재해에도 강한 내구성",
      "반사경 크기와 무게 제한이 없어 대형화에 용이함",
      "태양전지 대비 높은 에너지 효율과 폐플라스틱 열분해, 수소 생산 등 다양한 목적으로 사용",
      "반사경 자동 제작 시스템과 집열부 이동형 시스템을 적용하여 집열 효율 극대화",
    ],
    video: "./resources/technology/detail/detail-card2-video-landscape.mp4",
    graphs: {
      graph1: "./resources/technology/detail/detail-card4-graph1.png",
      graph2: "./resources/technology/detail/detail-card4-graph2.png",
    },
  };

  const detail = new TechnologyDetail(DETAIL_ID.card4, option);
  detail.append(detail.createHeader());
  detail.append(detail.createSpec());
  detail.append(
    detail.createImage(
      {
        title: "지면 부착형 집열 시스템",
        subtitle:
          "기존 집열 시스템의 단점을 완벽하게 개선한 지면 부착형 집열 시스템을 소개합니다.",
        description: `반사경을 지지하는 프레임과 구동 장치를 제거하여 지면에 부착하는 형태로서, 기존 집열 시스템 대비 저렴한 비용으로 설치가 가능합니다.<br /> 
        지면에 부착되어 있기 때문에 태풍이나 강풍 등 자연 재해에 매우 안전하며, 대형화에 용이하여 가격대비 에너지 집열량 효율이 매우 높습니다.`,
      },
      "./resources/technology/detail/detail-card4-image1.png"
    )
  );
  detail.append(
    detail.createImage(
      {
        title: "집열부 이동형 시스템",
        subtitle:
          "기존 시스템과 동일한 에너지 효율을 얻을 수 있는 집열부 이동형 시스템",
        description: `기존 집열 장치의 프레임과 구동부를 대신할 이동형 집열부 시스템 적용하여 기존 집열부 시스템과 동일한 에너지 효율을 얻을 수 있습니다.<br />
        집열기는 프로그래밍 된 데이터에 따라 이동하며 시간, 절기에 따라 다른 태양의 위치를 반영합니다.`,
      },
      "./resources/technology/detail/detail-card4-image2.png"
    )
  );
  detail.append(
    detail.createImage(
      {
        title: "반사경 자동 제작 시스템",
        subtitle: "장소에 따라 최적의 값을 계산하여 반사경을 제작",
        description: `반사경 직경과 촛점 거리, 파라미터를 입력하면 자동으로 반사경을 제작하는 시스템을 도입하여 설치 장소에 최적화된 반사경을 제작합니다.`,
      },
      "./resources/technology/detail/detail-card4-image3.png"
    )
  );
  detail.append(detail.createTest());
  detail.update();
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
    this.parent = $(`#core-tech-detail-page-1-article`);
    this.parent.empty();
  }

  update() {
    this.setTitle();
    this.setImage();
    this.setVideo();
    this.setTest();
    this.createFeatureList();
    this.createSizeTable();
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

  setTest() {
    if (!this.option.graphs) {
      return;
    }
    const graph1 = this.option.graphs.graph1;
    const graph2 = this.option.graphs.graph2;
    $("#detailTestGraph1").attr("src", graph1);
    $("#detailTestGraph2").attr("src", graph2);
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

    const videoText = this.option.videoText;
    if (!videoText) {
      return;
    }

    $("#detailVideoHeaderTitle").text(videoText.title);
    $("#detailVideoHeaderSubtitle").text(videoText.subtitle);
    $("#detailVideoHeaderDescription").html(videoText.description);
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

  createSizeTable() {
    const size = this.option.size;
    if (!size) {
      $("#detailSpecSize").empty();
      return;
    }

    $("#detailSpecSizeTable").empty();
    let result = "";
    for (let item of size) {
      result += `
      <tr>
        <th>${item.key}</th>
        <td>${item.value}</td>
      </tr>
      `;
    }
    $("#detailSpecSizeTable").append(result);
  }

  append(childEl) {
    this.parent.append(childEl);
  }

  createHeader() {
    return `
    <div class="detail-header">
      <div class="detail-header-text">
        <h2 id="detailHeaderTitleKr" class="detail-header-titleKr">폐플라스틱 연소기</h2>
        <p id="detailHeaderTitleEng" class="detail-header-titleEng">
          Waste Plastic Combution Device
        </p>
      </div>
    </div>
    `;
  }

  createSpec() {
    return `
    <div class="datail-spec">
      <div class="detail-spec-left">
        <img
          id="detailSpecImage"
          src="./resources/technology/detail/detail-card1-main.png"
          class="detail-spec-image"
          loading="lazy"
        />
      </div>
      <div class="detail-spec-right">
        <div class="detail-spec-feature">
          <p class="detail-spec-subtitle">특징</p>
          <hr class="detail-hr" />
          <ul id="detailSpecFeatures" class="detail-spec-feature-text">
          </ul>
        </div>
        <div id="detailSpecSize" class="detail-spec-size">
          <p class="detail-spec-subtitle">제원</p>
          <hr class="detail-hr" />
          <table id="detailSpecSizeTable" class="detail-spec-size-text">
            <tr>
              <th>재질</th>
              <td>SUS 304(외부 파이프) / SUS 316(내부 연소실)</td>
            </tr>
            <tr>
              <th>배관 연결 직경</th>
              <td>∅120</td>
            </tr>
            <tr>
              <th>연료 투입구 직경</th>
              <td>∅105</td>
            </tr>
            <tr>
              <th>시간당 연소량</th>
              <td>3 kg</td>
            </tr>
            <tr>
              <th>총 높이</th>
              <td>310 mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    `;
  }

  createVideo() {
    return `
    <div class="detail-video">
      <div class="detail-video-header">
        <div class="detail-video-header-text">
          <h2 id="detailVideoHeaderTitle" class="detail-video-header-title">연소 엔진</h2>
          <p id="detailVideoHeaderSubtitle" class="detail-video-header-subtitle">
            연소기의 핵심 부품인 엔진을 소개합니다.
          </p>
          <p id="detailVideoHeaderDescription" class="detail-video-header-description">
            폐플라스틱 연소 엔진은 폐플라스틱 연소기의 핵심 부품으로서,<br />
            700°C 고온에서 시간당 3kg의 폐플라스틱을 연소합니다.
          </p>
        </div>
      </div>
      <div class="detail-video-main">
        <video
          id="detailVideo"
          class="detail-video-portrait"
          src="./resources/technology/detail/detail-card1-video-portrait.mp4"
          controls
          muted
        ></video>
      </div>
    </div>
    `;
  }

  createImage(text, image) {
    return `
    <div class="detail-image">
      <div class="detail-image-header">
        <div class="detail-image-header-text">
          <h2 class="detail-image-header-title">${text.title}</h2>
          <p class="detail-image-header-subtitle">
            ${text.subtitle}
          </p>
          <p class="detail-video-header-description">
            ${text.description}
          </p>
        </div>
      </div>
      <div class="detail-image-main">
        <div class="detail-image-wrapper">
          <img
            class="detail-video-landscape"
            src=${image} 
          />
        </div>
      </div>
    </div>
    `;
  }

  createTest() {
    return `
    <div class="detail-test">
      <p class="detail-spec-subtitle">성능 테스트</p>
      <hr class="detail-hr" />
      <div class="detail-test-graphs">
        <img id="detailTestGraph1"
          src="./resources/technology/detail/detail-card1-test-graph1.png"
        />
        <img id="detailTestGraph2"
          src="./resources/technology/detail/detail-card1-test-graph2.png"
        />
      </div>
    </div>
    `;
  }

  createRelated() {
    return `
    <div class="detail-related">
      <p class="detail-spec-subtitle">관련 제품</p>
      <hr class="detail-hr" />
      <div class="detail-related-images">
        <img
          src="./resources/technology/detail/detail-card1-related-image1.png"
        />
        <img
          src="./resources/technology/detail/detail-card1-related-image2.png"
        />
        <img
          src="./resources/technology/detail/detail-card1-related-image3.png"
        />
        <img
          src="./resources/technology/detail/detail-card1-related-image4.png"
        />
        <img
          src="./resources/technology/detail/detail-card1-related-image5.png"
        />
      </div>
    </div>
    `;
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
