window.onload = () => {
  console.log("ONLOAD");

  showPage(rootPageId);

  const mainContent = new MainContent();
  mainContent.init();
  mainContent.startSlide();

  // mainPageItems.forEach((page) => {
  //   const content = new mainContent(page.id);
  //   content.init();
  //   content.setBackground();
  //   content.setTextContents(page.title, page.subtitle);
  // });

  addHeaderHover();

  // initScroll();
  // startSlideShow();
};

const initScroll = () => {
  $("html").animate({ scrollTop: 0 }, 0);
};

const startSlideShow = () => {
  if ($("html").is(":animated")) return;

  setInterval(() => {
    if (currentPage === maxPage) {
      currentPage = 1;
    } else if (currentPage < maxPage) {
      currentPage++;
    }

    const posTop = (currentPage - 1) * $(window).height();
    $("html").animate({ scrollTop: posTop });
  }, 3000);
};

const setHeaderOpacity = (opacity) => {
  $("header").css("background-color", `rgba(0,0,0,${opacity})`);
};

const setNavDropdownOpacity = (opacity) => {
  $(".nav-dropdown-menu").css("background-color", `rgba(0,0,0,${opacity})`);
};

const addHeaderHover = () => {
  $("#navMenu1").hover(
    () => {
      $("#navMenuDrop1").css("opacity", "1");
      $("#navMenuDrop1").css("transition", "0.4s all");
      $("#navMenuDrop1").css("visibility", "visible");
    },
    () => {
      $("#navMenuDrop1").css("opacity", "0");
      $("#navMenuDrop1").css("transition", "0.2s all");
      $("#navMenuDrop1").css("visibility", "hidden");
    }
  );

  $("#navMenu3").hover(
    () => {
      $("#navMenuDrop3").css("opacity", "1");
      $("#navMenuDrop3").css("transition", "0.4s all");
      $("#navMenuDrop3").css("visibility", "visible");
    },
    () => {
      $("#navMenuDrop3").css("opacity", "0");
      $("#navMenuDrop3").css("transition", "0.2s all");
      $("#navMenuDrop3").css("visibility", "hidden");
    }
  );

  $("#navMenu4").hover(
    () => {
      $("#navMenuDrop4").css("opacity", "1");
      $("#navMenuDrop4").css("transition", "0.4s all");
      $("#navMenuDrop4").css("visibility", "visible");
    },
    () => {
      $("#navMenuDrop4").css("opacity", "0");
      $("#navMenuDrop4").css("transition", "0.2s all");
      $("#navMenuDrop4").css("visibility", "hidden");
    }
  );
};

// $(window).on("wheel", (e) => {
//   if ($("html").is(":animated")) return;

//   const errorRange = 10;
//   const deltaY = e.originalEvent.deltaY;
//   if (deltaY > errorRange) {
//     if (mainPageNum === 4) return;
//     mainPageNum++;
//   } else if (deltaY < -errorRange) {
//     if (mainPageNum === 1) return;
//     mainPageNum--;
//   }

//   const posTop = (mainPageNum - 1) * $(window).height();
//   $("html").animate({ scrollTop: posTop });
// });

class MainContent {
  id = "mainSection";
  items = [
    {
      id: "main-page-1",
      imageUrl: "",
      title: "Make convenient with new ideas.",
      subtitle:
        "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
    },
    {
      id: "main-page-2",
      imageUrl: "",
      title: "Technology for Human.",
      subtitle:
        "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
    },
    {
      id: "main-page-3",
      imageUrl: "",
      title: "Idea Design & Manufacturing",
      subtitle:
        "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
    },
    {
      id: "main-page-4",
      imageUrl: "",
      title: "New Challenge for Future.",
      subtitle:
        "새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인.",
    },
  ];
  host = "https://rosiewingit.github.io/solarin/latest/resources/";
  index = 0;
  maxPage = 4;
  duration = 5000;
  slider = null;

  constructor() {}

  init() {
    $("#root").append(this.createSection());
    this.initImageUrl();
    this.maxPage = this.items.length - 1;
  }

  initImageUrl() {
    this.items.forEach((item) => {
      item.imageUrl = `${this.host}${item.id}.png`;
    });
  }

  createSection() {
    return `
    <section id=${this.id} class="main-body-content">
      <article id="mainArticle" class="main-body-item">
        <h1 class="main-body-item-title">Make convenient with new ideas.</h1>
        <p class="main-body-item-subtitle">새로운 생각으로 일상을 더 편리하게, 아이디어를 현실로 만드는 기업 솔라인</p>
      </article>
    </section>
    `;
  }

  setBackground(imageUrl) {
    $(`#${this.id}`).css("background-image", `url(${imageUrl})`);
  }

  setTextContents(title, subtitle) {
    const article = $(`#${this.id}-article`);
    article.find("h1").text(title);
    article.find("p").text(subtitle);
  }

  startSlide() {
    this.slider = setInterval(() => {
      if (this.index === this.maxPage) {
        this.index = 1;
      } else if (this.index < this.maxPage) {
        this.index++;
      }
      this.setBackground(this.items[this.index].imageUrl);
    }, this.duration);
  }

  endSlide() {
    if (this.slider) {
      clearInterval(this.slider);
    }
  }
}

class mainContent {
  constructor(id) {
    this.id = id;
    this.imageUrl = `${host}${id}.png`;
  }

  init() {
    $("#root").append(this.createSection());
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
