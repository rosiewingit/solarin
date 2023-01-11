const host = "https://rosiewingit.github.io/solarin/resources/";
const dataHost = "https://rosiewingit.github.io/solarin/data/";
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
    subtitle: "솔라인은 인간을 위한 기술을 만듭니다.",
  },
  {
    id: "main-page-3",
    title: "Idea Design & Manufacturing",
    subtitle: "당신의 아이디어를 현실로 만들어 드립니다.",
  },
  {
    id: "main-page-4",
    title: "New Challenge for Future.",
    subtitle: "미래를 위한 새로운 도전.",
  },
];

$(document).ready(() => {
  if (navigator.userAgent.indexOf("Trident") > 0) {
    alert(
      `해당 페이지는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. 확인 버튼을 누르면 Edge브라우저로 자동으로 이동됩니다.`
    );
    window.location = "microsoft-edge:" + url;
  } else if (/MSIE \d |Trident.*rv:/.test(navigator.userAgent)) {
    alert(
      `해당 페이지는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. 확인 버튼을 누르면 Edge브라우저로 자동으로 이동됩니다.`
    );
    window.location = "microsoft-edge:http:" + url;
  }
});

window.onload = () => {
  showPage(rootPageId);

  mainPageItems.forEach((page) => {
    const content = new MainContent(page.id);
    content.init();
    content.setBackground();
    content.setTextContents(page.title, page.subtitle);
  });

  addHeaderHover();
  const slideShow = new SlideShow();
  slideShow.start();

  $("#footerTermCheckbox").change(() => {
    if ($("#footerTermCheckbox").is(":checked")) {
      $("#mainSubmitBtn").removeAttr("disabled");
    } else {
      $("#mainSubmitBtn").attr("disabled", "disabled");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      slideShow.stop();
    } else {
      slideShow.start();
    }

    if (
      $(window).height() >
      $(document).height() - $(window).scrollTop() - $("footer").height() / 2
    ) {
      $("#centerButton").css("visibility", "hidden");
      // if ($("#productsNav")) {
      //   $("#productsNav").css("visibility", "hidden");
      // }
    } else {
      $("#centerButton").css("visibility", "visible");
      // if ($("#productsNav")) {
      //   $("#productsNav").css("visibility", "visible");
      // }
    }
  });
};

$(document).ready(() => {});

const initScreen = () => {
  $("body").height(screen.height);
  $("body").width(screen.width);
};

const clickCenterButton = () => {
  window.open("http://www.voicechip.co.kr/self-relience/diy.htm", "_blank");
};

const goToContact = () => {
  if (isMobile) {
    location.href = "tel:0507-1395-0771";
  } else {
    location.href = "mailto:voicechip@naver.com";
  }
};

const sendMail = () => {
  const name = $("#queryName").val();
  const mail = $("#queryMail").val();
  const body = $("#queryBody").val();

  emailjs.init("UiaklHPms2XNWpNdG");

  //emailjs.com
  const templateParams = {
    to_name: "Solarin",
    from_name: name,
    message: body,
    reply_to: mail,
  };

  emailjs.send("default_service", "template_5f1wztn", templateParams).then(
    function (response) {
      if (response.status === 200) {
        alert("Success to send a mail.");
        resetRequest();
      }
    },
    function (error) {
      alert("Failed to send a mail. Please contact 'voicechip@naver.com'");
      resetRequest();
    }
  );
};

const resetRequest = () => {
  $("#queryName").val("");
  $("#queryMail").val("");
  $("#queryBody").val("");
  $("#footerTermCheckbox").prop("checked", false);
  $("#mainSubmitBtn").attr("disabled", "disabled");
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

  $("#navMenu2").hover(
    () => {
      $("#navMenuDrop2").css("opacity", "1");
      $("#navMenuDrop2").css("transition", "0.4s all");
      $("#navMenuDrop2").css("visibility", "visible");
    },
    () => {
      $("#navMenuDrop2").css("opacity", "0");
      $("#navMenuDrop2").css("transition", "0.2s all");
      $("#navMenuDrop2").css("visibility", "hidden");
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

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const closeImageViewer = () => {
  $("body").removeClass("scroll-block");
  $("#imageViewer").addClass("hidden");
};

const openImageViewer = (imageUrl) => {
  $("body").addClass("scroll-block");
  $("#imageViewer").removeClass("hidden");
  $("#imageViewer").css("top", window.pageYOffset);
  $("#bigImage").css("background-image", imageUrl);
};

class MainContent {
  constructor(id) {
    this.id = id;
    this.imageUrl = `${host}${id}.png`;
  }

  init() {
    $("#root").append(this.createSection());
  }

  createSection() {
    // <section id="${this.id}" class="main-body-content fade-in">
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

class SlideShow {
  pages = [];
  index = 0;
  max = 4;
  slider = null;
  duration = 5000;

  constructor() {
    this.pages = $(".main-body-content");
    this.max = this.pages.length;
  }

  start() {
    if (this.slider) {
      this.stop();
    }
    this.slider = setInterval(() => {
      this.index++;
      if (this.index > this.max - 1) {
        this.index = 0;
      }

      for (let i = 0; i < this.max; i++) {
        if (i === this.index) {
          this.pages[i].style.display = "block";
          this.pages[i].classList.add("fade-in");
        } else {
          this.pages[i].style.display = "none";
          this.pages[i].classList.add("fade-out");
        }
      }
    }, this.duration);
  }

  stop() {
    if (this.slider == null) {
      return;
    }
    clearInterval(this.slider);
  }
}
