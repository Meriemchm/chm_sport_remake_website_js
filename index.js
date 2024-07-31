window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const tmenuToggle = document.querySelector(".menuToggle");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  tmenuToggle.classList.toggle("active");
}

////////////////////////////////////////////////////////////////////////////////////

const navItemContainers = document.querySelectorAll(".card-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

navItemContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  let scrollInterval;

  const startScrolling = (direction) => {
    scrollInterval = setInterval(() => {
      item.scrollLeft += direction * containerWidth * 0.5;
    }, 30);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  nxtBtn[i].addEventListener("mousedown", () => startScrolling(1));
  preBtn[i].addEventListener("mousedown", () => startScrolling(-1));

  nxtBtn[i].addEventListener("mouseup", stopScrolling);
  preBtn[i].addEventListener("mouseup", stopScrolling);

  nxtBtn[i].addEventListener("mouseleave", stopScrolling);
  preBtn[i].addEventListener("mouseleave", stopScrolling);
});

///////////////////////////////////////////////

const NavItems = [
  {
    name: "Accueil",
    href: "#banniere",
  },
  {
    name: "A propos",
    href: "#slider-page",
  },
  {
    name: "Contact",
    href: "mailto:fs@gmail.com",
  },
];

let NavbarHtml = "";

NavItems.forEach((navItem) => {
  NavbarHtml += `
      <li><a href=${navItem.href} onclick="toggleMenu();">${navItem.name}</a></li>
      `;
});

document.querySelector(".navbar").innerHTML = NavbarHtml;

///////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const CardItems = [
    {
      id: 1,
      src: "./images/natation.jpg",
      name: "Natation",
      href: "sport.html?id=1",
    },
    {
      id: 2,
      src: "./images/foot.jpg",
      name: "Football",
      href: "sport.html?id=2",
    },
    { id: 3, src: "./images/judo.jpg", name: "Judo", href: "sport.html?id=3" },
    {
      id: 4,
      src: "./images/escrime.jpg",
      name: "Escrime",
      href: "sport.html?id=4",
    },
  ];

  let cardHtml = "";

  CardItems.forEach((cardItem) => {
    cardHtml += `
        <div class="card" data-id="${cardItem.id}">
          <img src="${cardItem.src}" alt="${cardItem.name}">
          <div class="content">
            <div class="title">${cardItem.name}</div>
            <div class="btn2">
              <button>En savoir plus</button>
            </div>
          </div>
        </div>
      `;
  });

  const cardContainer = document.querySelector(".card-container");
  if (cardContainer) {
    cardContainer.innerHTML = cardHtml;

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const id = card.getAttribute("data-id");
        const href = `sport.html?id=${id}`;
        window.location.href = href;
      });
    });
  } else {
    console.error("L'élément .card-container est introuvable.");
  }
});

///////////////////////////////////////////////

const ContenuItems = [
  {
    src: "./images/equipe1.jpg",
  },
  {
    src: "./images/equipe2.jpg",
  },
  {
    src: "./images/equipe3.jpg",
  },
  {
    src: "./images/equipe4.jpg",
  },
  {
    src: "./images/equipe5.jpg",
  },
];

let contenuHtml = "";

ContenuItems.forEach((contenuItem) => {
  contenuHtml += `
         <div class="box">
                <img src=${contenuItem.src} alt="">
		</div>
          `;
});

document.querySelector(".page-media .contenu").innerHTML = contenuHtml;

//////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const colonneItems = [
      {
        title: "Relations clients",
        items: [
          {
            name: "Relations Investisseurs",
          },
          {
            name: "Modes de lecture",
          },
          {
            name: "Mentions légales",
          },
        ],
      },
  
      {
        title: "FAQ",
        items: [
          {
            name: "Recrutement",
          },
          {
            name: "Conditions d'utilisation",
          },
          {
            name: "Nous contacter",
          },
        ],
      },
      {
        title: "Compte",
        items: [
          {
            name: "S'enregistrer",
          },
          {
            name: "Se connecter",
          },
          {
            name: "Nous contacter",
          },
        ],
      },
    ];
  
    const socialsItems = [
      {
        src: "./images/facebook.png",
      },
      {
        src: "./images/twitter.png",
      },
      {
        src: "./images/linkedin.png",
      },
      {
        src: "./images/reddit.png",
      },
    ];
  
    let colonneHtml = "";
    let socialsHtml = "";
  
    const itemColonne = colonneItems[0].items
      .map((item) => `<p>${item.name}</p>`)
      .join("");
  
    colonneItems.forEach((colonneItem) => {
      colonneHtml += `
        <div class="colonne">
          <h3>${colonneItem.title}</h3>
          ${colonneItem.items.map((item) => `<p>${item.name}</p>`).join("")}
        </div>
      `;
    });
  
    socialsItems.forEach((socialItem) => {
      socialsHtml += `
        <li><a href="#"><i><img src="${socialItem.src}" alt="1"></i></a></li>
      `;
    });
  
    const colonneContainer = document.querySelector(".colonnes");
    const socialContainer = document.querySelector(".socials");
  
    if (colonneContainer) {
      colonneContainer.innerHTML = colonneHtml;
    } else {
      console.error("L'élément .colonnes est introuvable.");
    }
  
    if (socialContainer) {
      socialContainer.innerHTML = socialsHtml;
    } else {
      console.error("L'élément .socials est introuvable.");
    }
  });
  