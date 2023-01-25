const clickCertification = () => {
  showPage(certificationPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(certificationPageId, "certification-page-1");
  content.init();
  content.setPath("Home > PR Center > <b>Certification</b>");

  $.getJSON("./data/certifications.json", (data) => {
    const hostUrl = data.hostUrl;
    const certifications = data.certifications;

    const certificationItems = new Certification(
      "certifications",
      hostUrl,
      certifications
    );
    certificationItems.init();
  });
};

const clickNews = () => {
  showPage(newsPageId);
  setHeaderOpacity(1);
  setNavDropdownOpacity(0.7);

  const content = new PPTContent(newsPageId, "news-page-1");
  content.init();
  content.setPath("Home > PR Center > <b>News</b>");

  $.getJSON(
    "https://rosiewingit.github.io/solarin-news/data/newsResult.json",
    (data) => {
      const items = data.items;
      const news = new NewsCard(items);
      news.init();
    }
  );
};

class NewsCard {
  constructor(items) {
    this.items = items;
  }

  init() {
    const cards = this.items;

    if ($(`#newsBody`).children().length > 0) {
      return;
    }

    this.updateHeadline(cards[0]);
    for (let card of cards) {
      console.log(card);
      $(`#newsBody`).append(this.createCard(card));
    }
  }

  // <div class="news-card">
  //   <div class="news-card-image"></div>
  //   <div class="news-card-summary">
  //     <p class="news-card-date">November 28, 2015</p>
  //     <p class="news-card-title">
  //       솔라인, 2020 대한민국 중소·중견기업 혁신대상 수상
  //     </p>
  //     <button
  //       type="button"
  //       class="btn main-footer-button news-button"
  //     >
  //       <span class="button-text"> Learn more </span>
  //       <div>
  //         <img
  //           loading="lazy"
  //           class="button-logo"
  //           src="./resources/button-arrow.svg"
  //         />
  //       </div>
  //     </button>
  //   </div>
  // </div>

  updateHeadline(data) {
    $("#newsHeadlineImage").css(
      "background-image",
      'url("../resources/news-main-pic.png")'
    );
    $("#newsHeadlineTitle").html(data.title);
    $("#newsHeadlineDate").text(data.pubDate);
    $("#newsHeadlineDescription").html(data.description);
  }

  createCard(card) {
    return `<div class="news-card">
    <div class="news-card-image"></div>
    <div class="news-card-summary">
      <p class="news-card-date">${card.pubDate}</p>
      <p class="news-card-title">${card.title}</p>
      <button
        type="button"
        class="btn main-footer-button news-button"
        onclick="window.open('${card.link}')"
      >
        <span class="button-text"> Learn more </span>
        <div>
          <img
            loading="lazy"
            class="button-logo"
            src="./resources/button-arrow.svg"
          />
        </div>
      </button>
    </div>
  </div>
    `;
  }
}
