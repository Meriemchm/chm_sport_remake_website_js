document.addEventListener("DOMContentLoaded", function () {
  function getParameterFromUrl(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
  }

  const id = getParameterFromUrl("id");
  const numericId = id ? parseInt(id, 10) : null;

  const CardItems = [
    {
      id: 1,
      name: "Natation",
      backgroundImage: "",
      title: "Natation 2022",
      picone: "./images/natation3.jpg",
      pictwo: "./images/natation.jpg",

      cards: [
        {
          name: "Maillot de bain",
        },
        {
          name: "Bonnet",
        },
        {
          name: "Lunettes de piscine",
        },
      ],
    },
    {
      id: 2,
      name: "Football",
      backgroundImage: "",

      title: "Football 2022",
      picone: "./images/football1.jpg",
      pictwo: "./images/football2.jpg",
      cards: [
        {
          name: "Ensemble de foot",
        },
        {
          name: "basket adaptee.",
        },
        {
          name: "Accesoire de protection.",
        },
      ],
    },
    {
      id: 3,
      name: "Judo",
      backgroundImage: "",
      title: "Judo 2022",
      picone: "./images/judo3.jpg",
      pictwo: "./images/judo1.jpg",
      cards: [
        {
          name: "Ensemble Judo.",
        },
        {
          name: "Protection Judo",
        },
      ],
    },
    {
      id: 4,
      name: "Escrime",
      backgroundImage: "",
      title: "Escrime 2022",
      picone: "./images/escrime1.jpg",
      pictwo: "./images/escrime2.jpg",
      cards: [
        {
          name: "Ensemble d'Escrime.",
        },
        {
          name: "l'épée.",
        },
      ],
    },
  ];

  const cardItem = CardItems.find((item) => item.id === numericId);
  console.log(cardItem);

  let bannierHtml = "";
  let cardhtml = "";

  const itemsList = cardItem.cards
    .map((item) => `<li>${item.name}</li>`)
    .join("");

  bannierHtml += `
          <h2>${cardItem.name}</h2>
			<p>Amusez vous en pratiquant votre sport favoris.</p>
        `;

  cardhtml += `        <div class="card">
                <div class="left">
           
			<div class="left-container">
                    <h2>${cardItem.title}</h2>
					<div class="line"></div>
            <p>Ici vous trouverez votre emploie du temps </p>
		<a onclick="toggleMenu();" class="btn-card" href="/wp-content/uploads.pdf" target="_blank" >horaire et coûts</a>	
                </div>

				<div class="left-container">
                    <h2>Reglement</h2>
					<div class="line"></div>
            <p>Voyez lire le Reglement et respecter les consignes </p>
		<a onclick="toggleMenu();" class="btn-card-two" href="reglement.txt" download="Reglement-ClubSportive" target="_blank" >Reglement</a>	
                </div>
				
			</div>

                <div  class="right">
                    <img src=${cardItem.picone} alt="">
                </div>
            </div>

            <div class="card">
                <div class="left">
        <div class="left-container">
                    <h2  class="titre-texte "> <span>TENUE</span>/ÉQUIPEMENT OBLIGATOIRE EN ${cardItem.name}</h2>
                    <p> À commander auprès de l’intervenant au premier cours : </p>
					<ul>
						${itemsList}	
					</ul>
				</div>
				<div class="left-container">		
		<h2>POSSIBILITÉ DE PASSAGE DE GRADES</h2> 
        <p>Information auprès de l’intervenant (affiliation nécessaire auprès de l’organisme qui régit le passage de grade).</p>
	    </div>
                </div>
                <div  class="right">
                    <img src=${cardItem.pictwo} alt="">
                </div>
            </div>`;

  const cardContainer = document.querySelector(".banniere .contenu");
  const cardSport = document.querySelector(".main .content");
  if (cardContainer) {
    cardContainer.innerHTML = bannierHtml;
    cardSport.innerHTML = cardhtml;
  } else {
    console.error("L'élément .card-container est introuvable.");
  }
});

////////////////////////////////////////////////
