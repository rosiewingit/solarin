let html = null;
let root = null;
let currentPage = 1;
let maxPage = 4;

const host = "https://rosiewingit.github.io/solarin/theme3/resources/";
const mainPageItems = [
  {
    id: "main-page-1",
    title: "Make convenient with new ideas.",
    subtitle:
      "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
  },
  {
    id: "main-page-2",
    title: "Technology for Human.",
    subtitle:
      "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
  },
  {
    id: "main-page-3",
    title: "Idea Design & Manufacturing",
    subtitle:
      "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
  },
  {
    id: "main-page-4",
    title: "New Challenge for Future.",
    subtitle:
      "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
  },
];

window.onload = () => {
  console.log("ONLOAD");

  html = $("html");
  root = $("#root");
  mainPageItems.forEach((page) => {
    const content = new mainContent(page.id);
    content.init();
    content.setBackground();
    content.setTextContents(page.title, page.subtitle);
  });

  initScroll();
  startSlideShow();
};

const initScroll = () => {
  html.animate({ scrollTop: 0 }, 0);
};

const startSlideShow = () => {
  if (html.is(":animated")) return;

  setInterval(() => {
    if (currentPage === maxPage) {
      currentPage = 1;
    } else if (currentPage < maxPage) {
      currentPage++;
    }

    const posTop = (currentPage - 1) * $(window).height();
    html.animate({ scrollTop: posTop });
  }, 3000);
};

class mainContent {
  constructor(id) {
    this.id = id;
    this.imageUrl = `${host}${id}.png`;
  }

  init() {
    root.append(this.createSection());
  }

  createSection() {
    return `
    <section id="${this.id}" class="main-body-content">
      <article id="${this.id}-article" class="main-body-item">
        <h1 class="main-body-item-title">Make convenient with new ideas.</h1>
        <p class="main-body-item-subtitle">새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인</p>
      </article>
    </section>
    `;
  }

  setBackground() {
    $(`#${this.id}`).css("background-image", `url(${this.imageUrl})`);
  }

  setTextContents(title, subtitle) {
    const article = $(`#${this.id}-article`);
    article.find("h1").text(title);
    article.find("p").text(subtitle);
  }
}
