/* DOM elements */
const homeButtons = document.querySelectorAll('.home.button');
const bioButtons = document.querySelectorAll('.bio.button');
const portfolioButtons = document.querySelectorAll('.portfolio.button');
const contactButtons = document.querySelectorAll('.contact.button');
const homePage = document.querySelector('.home.page');
const homePageButtons = document.querySelectorAll('.home-nav li');
const headerTitle = document.querySelector('.header.title');
let pageArticles;
let pageTitle;
// const bioPage = document.querySelector('.bio.page');
// const bioPageTitle = document.querySelector('.bio.title');
// const portfolioPage = document.querySelector('.portfolio.page');
// const portfolioPageTitle = document.querySelector('.porfolio.title');
const portfolioLinks = document.querySelectorAll('h6');
const contactPage = document.querySelector('.contact.page');
const footer = document.querySelector('.footer');

const expandButtons = document.querySelectorAll('.article-footer-text');
const addEventListeners = (buttons, clickBehaviour) => {
  buttons.forEach(button => {
    button.addEventListener('click', () => clickBehaviour(event));
  });
};

const playBeep = (filePath) => {
  let beep = new Audio(filePath);
  beep.play();
};



const updatePage = (event) => {
  if (document.querySelector('.on') === null) {
    loadMainMenu();
  } else {
    playBeep('./index/assets/audio/lowbeep.mp3');
    let livePage = document.querySelector('.on');
    let newPage = document.querySelector(`.${event.currentTarget.classList[0]}.page`);
    setTimeout(() => {
      livePage.classList.remove('on');
      newPage.classList.add('on');
      console.log(newPage.classList[0]);
      pageFadeIn(newPage.classList[0]);
    }, 2000);
  }
};


/* Animations */

const mainMenuFadeIn = (event) => {
  setTimeout((() => homePageButtons.forEach((homePageButton, index) => {
    homePageButton.style.transitionDelay = `${index * 0.4}s`;
    homePageButton.style.opacity = '1';
    homePageButton.style.transform = 'scale(1)';
  })), 500);
  setTimeout(() => headerTitle.style.opacity = '1', 500);
}

const mainMenuFadeOut = (event) => {
  event.currentTarget.style.color = '#8ea8c3';
  event.currentTarget.style.borderBottom = '2px solid #ee6352';
  homePageButtons.forEach((homePageButton, index) => {
    if (homePageButton != event.currentTarget) {
      homePageButton.style.transitionDelay = `${index * 0.4}s`;
      homePageButton.style.opacity = '0';
      homePageButton.style.transform = 'scale(1.3)';
    } else {
      homePageButton.style.transitionDelay = '1.5s';
      homePageButton.style.opacity = '0';
      homePageButton.style.transform = 'scale(1.5)';
    }
    headerTitle.style.opacity = '0';
  });
};


const pageFadeIn = (newPage) => {
  pageArticles = document.querySelectorAll(`.${newPage} article`);
  pageTitle = document.querySelector(`.${newPage}.title`);
  console.log(pageArticles);
  setTimeout((() => pageArticles.forEach((article, index) => {
    article.style.transitionDelay = `${index * 0.4}s`;
    article.style.opacity = '1';
    article.style.transform = 'scale(1)';
  })), 500);
  setTimeout(() => pageTitle.style.opacity = '1', 500);
}

const pageFadeOut = (page, event) => {
  event.currentTarget.style.color = '#8ea8c3';
  event.currentTarget.style.borderBottom = '2px solid #ee6352';
  `.${page}pageButtons`.forEach((button, index) => {
    if (button != event.currentTarget) {
      button.style.transitionDelay = '1.5s';
      button.style.opacity = '0';
      button.style.transform = 'scale(1.5)';
    }
    `.${page}PageTitle`.style.opacity = '0';
  });
};

/* Navigation functions */

const loadMainMenu = (event) => {
  homePage.classList.add('on');
  mainMenuFadeIn(event);
  if (event) {
    updatePage(event);
  }
  setTimeout(() => {
    headerTitle.style.opacity = '1';
  }, 2000);
};

const expandArticle = (event) => {
  event.currentTarget.parentNode.parentNode.childNodes[3].classList.toggle('open');
  event.currentTarget.parentNode.parentNode.childNodes[5].classList.toggle('open');
  if (event.currentTarget.innerText == "＋") {
    event.currentTarget.innerText = "－";
    playBeep('./index/assets/audio/mediumbeep.mp3');
  } else {
    event.currentTarget.innerText = "＋";
    playBeep('./index/assets/audio/highbeep.mp3');

  };
}

addEventListeners(homePageButtons, mainMenuFadeOut);
addEventListeners(homeButtons, loadMainMenu);

// homeButtons.forEach(homeButton => {
//   homeButton.addEventListener('mousedown', (event) => loadMainMenu(event));
// });
// homePageButtons.forEach((homePageButton) => {
//   homePageButton.addEventListener('click', (event) => mainMenuFadeOut(event));
// });

addEventListeners(bioButtons, updatePage);
addEventListeners(portfolioButtons, updatePage);
addEventListeners(contactButtons, updatePage);

addEventListeners(expandButtons, expandArticle);

// const landingPage = document.querySelector('.landing.page');

// Enter button styles:

// event.currentTarget.classList.remove('fly-in');
// event.currentTarget.classList.add('fly-out');

//// Footer: 


////    footer.style.height = '8vh';
// footer.style.opacity = '1';

// console.log(bioPage, portfolioPage, portfolioLinks, contactPage, footer, event);

updatePage();