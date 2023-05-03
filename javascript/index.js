const slides = document.querySelectorAll(".slide");
const prev_Button = document.querySelector(".left-button");
const next_Button = document.querySelector(".right-button");


let counter = 0;

if (counter === 0) {
    slides[1].style.filter = "blur(1.5rem)";
    prev_Button.style.display = "none";
}

const count_Checker = () => {
    if (counter === 1) {
    slides[0].style.filter = "blur(1.5rem)"
    slides[1].style.filter = "none"
    slides[2].style.filter = "blur(1.5rem)"
    prev_Button.style.display = "inline-block";
    } else if (counter === 2) {
    slides[1].style.filter = "blur(1.5rem)"
    slides[2].style.filter = "none"
    slides[3].style.filter = "blur(1.5rem)"
    } else if (counter === 3) {
    slides[2].style.filter = "blur(1.5rem)"
    slides[3].style.filter = "none"
    slides[4].style.filter = "blur(1.5rem)"
    next_Button.style.display = "inline-block";
    } else if (counter === 4) {
    slides[3].style.filter = "blur(1.5rem)"
    slides[4].style.filter = "none"
    next_Button.style.display = "none";
    
    } else {
        slides[1].style.filter = "blur(1.5rem)"
        prev_Button.style.display = "none";
        slides[0].style.filter = "none"
    }
}


next_Button.addEventListener("click", function () {
  counter++;
  carousel();
  count_Checker()
});

prev_Button.addEventListener("click", function () {
  counter--;
  carousel();
  count_Checker()
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    const translate = -(counter) * 100;
    slide.style.transform = `translateX(${translate}%)`;
  });
}

/* MODAL FUNCTION */

const modal = document.querySelector(".modal");
const close = document.getElementsByClassName("close")[0];
const description = 
[
/*==================== NEW ITEMS ====================*/
"Farrel is a bamboo armchair with cushions perfect for a modern and yet adventurous look at either a home or business setting. It measures 49x68x50 cm.",
"Maximo is a leather sofa and a great choice for many because it's comfortable, durable and waterproof so cleaning it wouldn't be a hassle thus more time being comfortable. It measures 204x89 cm.",
"Nathaniel is a wooden cabinet made from local Maple and it's a vertsatile piece that will provides functionality and beauty to your desired location. It measures 119x63x40 cm.",
"Jasmin is a bamboo shelf that suits outdoor and indoor settings because of its simple design and durability. A perfect piece that might be eye catching to visitors. It measures 60x70x35 cm.",
"Isabel is a small round table with a steel leg. This offers more on a design standpoint than functionality but nonetheless a great piece to have by on your dining area where you relax yourself. It measures 38x75 cm."
  ];

  slides.forEach((eachProduct, index) => {
    eachProduct.addEventListener("click", e => {
      let picture = e.currentTarget.querySelector('img').src;
      let title = e.currentTarget.querySelector('h1').innerText;

      if (title === "Farrel | Arm Chair") {
        modal.querySelector("img").src = picture;
        modal.querySelector("h1").innerText = "Farrel";
        modal.querySelector("h3").innerText = "P2,300";
        modal.querySelector("p").innerText = description[index];
      }

      if (title === "Maximo | Leather Sofa") {
        modal.querySelector("img").src = picture;
        modal.querySelector("h1").innerText = "Maximo";
        modal.querySelector("h3").innerText = "P18,300";
        modal.querySelector("p").innerText = description[index];
      }

      if (title === "Nathaniel | Cabinet") {
        modal.querySelector("img").src = picture;
        modal.querySelector("h1").innerText = "Nathaniel";
        modal.querySelector("h3").innerText = "P6,200";
        modal.querySelector("p").innerText = description[index];
      }

      if (title === "Jasmin | Shelf") {
        modal.querySelector("img").src = picture;
        modal.querySelector("h1").innerText = "Jasmin";
        modal.querySelector("h3").innerText = "P1,700";
        modal.querySelector("p").innerText = description[index];
      }

      if (title === "Isabel | Table") {
        modal.querySelector("img").src = picture;
        modal.querySelector("h1").innerText = "Isabel";
        modal.querySelector("h3").innerText = "P3,500";
        modal.querySelector("p").innerText = description[index];
      }
      

      
      
      modal.style.display ="block";
    })
});

close.addEventListener("click", () => {
  modal.style.display = "none";
})

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})