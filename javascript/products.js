const filterer = document.querySelector("#filter");
const product = document.querySelectorAll(".product-container");

const modal = document.querySelector(".modal");
const close = document.getElementsByClassName("close")[0];
const description = 
[
/*==================== BEDFRAME ====================*/
    "Farrah is a stainless steel bedframe being both brawns and beauty for its simple while elegant design that will surely last fir generations to come. It measures 180x200 cm.",
    "Armando is a wooden bedframe made from local Narra made in a traditional style that feels classical and simple. It measures 180x200 cm (70 7/8x78 3/4)",
    "Basilio is a wooden bedframe mixed with fabric cushioning. This modern take on a classical style doesn't just look good but also feels good. It measures 180x200 cm.",
    "Cedric is a wooden bedframe that defines classical styling that will surely give a sense of the past not just by you but for generations to come. It measures 180x200 cm.",
    "Hidalgo is an upholstered bedframe that looks and feels luxurious. Its soft padding is perfect for both relaxation and comfort. It measures 180x200 cm.",
    "Ciara is an upholstered bedframe perfect for everyone's sleeping needs with design finishes that looks modern and timeless. It measures 180x200 cm.",
/*==================== CHAIRS ====================*/
    "Amber is an upholstered chair that makes you feel majestic thanks to its royal theme but also suitable for modern houses and other establishments. It measures 58x79x56 cm.",
    "Farrel is a bamboo armchair with cushions perfect for a modern and yet adventurous look at either a home or business setting. It measures 49x68x50 cm.",
    "Ignacio is an upholstered wingchair suitable for formal settings like offices and also at home because of the quality and comfort it provides. It measures 60x82x56 cm.",
    "Antonio is a steel chair with soft cushioning for extra comfort. Its versatile styling makes it suitable for any setting but wouldn't feel out of place. It measures 55x82x56 cm.",
    "Umika is an upholstered arm chair made for a layback and casual day at home after a long day at work or even just to feel relaxed. It measures 68x100x83 cm.",
    "simon is an upholstered chair that ensures maximum comfort thanks to its high quality padding so every sit will feel like a vacation. It measures 75x93x98 cm.",
    "Lucas is a timeless chair that is both durable and lightweight. A versatile piece that you won't mistake buying. It measures 49x77x50 cm.",
/*==================== SOFA ====================*/
    "Maximo is a leather sofa and a great choice for many because it's comfortable, durable and waterproof so cleaning it wouldn't be a hassle thus more time being comfortable. It measures 204x89 cm.",
    "Crisostomo is a classic sofa with wider cushions to enhance space and comfort. A timeless and classic look and feel that will last for years to come. It measures 220x95 cm.",
    "Tala is a classic sofa embued with our new take on cushioning to enhance comfort without decreasing its durability and overall quality. A perfect choice for anyone. it measures 180x88 cm.",
    "Pedro is a leather sofa that looks timeless but the quality is made from the latest of innovations so that you can enjoy a vintage feeling while being comfortable. It measures 177x88 cm.",
    "Miguel is a leather sofa with a traditional styling mixed with a timeless color for leather that will surely make your room seem rustic and modern. It measures 225x105 cm.",
    "Fernando is a classic sofa with a twist of suede to have the matching look and feel of luxury in your home that will surely be a unique piece in your livingroom. It measures 210x98 cm.",
    "Therese is a classic sofa with a non-removable cover but can easily be cleaned because of its non-stainable covers making it a perfect choice for families and alike. It measures 137x80 cm.",
/*==================== STORAGE ====================*/
    "Sonia is a wooden shelf that can bring both functionality and design to your room because of its aesthetical shape and design while also containing the things you value. It measures 60x148x35 cm.",
    "Luisita is a wooden drawer made from local Narra that gives a rustic feeling to your desired setting. Its durability will make it a piece that lasts for generations. It measures 140x72x40 cm.",
    "Louis is a wooden nightstand with its signiture knobs. It is a perfect piece for modern homes that seamlessly blends different colors while also having its own unique touch. It measures 54x70x38 cm.",
    "Paloma is a neat little wooden nightstand that you can also put anywhere in your house because of its versatile and simple styling thats perfect for people that prefer minimal designs. It measures 45x55x38 cm.",
    "Nathaniel is a wooden cabinet made from local Maple and it's a vertsatile piece that will provides functionality and beauty to your desired location. It measures 119x63x40 cm.",
    "Matthew is a wooden drawer that looks simple but elegant while providing a large amount of storage that you can use to make your place neater and organized. It measures 124x70x30 cm.",
    "Jasmin is a bamboo shelf that suits outdoor and indoor settings because of its simple design and durability. A perfect piece that might be eye catching to visitors. It measures 60x70x35 cm.",
    "Candida is a wooden cabinet more suitable at your kitchen or dining area. It provides the functionality of storage while also being a design piece of your desired area. It measures 89x127x30 cm.",
    "Enrique is a wooden shelf with a minimal design and an interesting knob. Its simple design makes it a perfect choice for a room that feels comfortable and cozy. It measures 40x55x35 cm.",
    "Felicia is a wooden shelf that is made from a Lenga tree making it durable while also being customizable. Its storage is perfect for pantries and alike. It measures 160x170x30 cm.",
/*==================== TABLE ====================*/
    "Basilio is a square wooden table perfect for two seaters to enjoy a light meal or beverage while chatting. It's small size will make it a great addition beside big tables. It measures 39x93x9 cm.",
    "Camille is a rouded wooden table with three legs. This is preferrable for smaller families or even a few people living in an apartment. It's the perfect balance of size for small to medium rooms. It measures 85x75 cm.",
    "Hernando is a wooden top and steeled leg long table that is more preferred at larger families and also suitable for fine dining establishments because of its professional look and simplicity. It measures 67x68x230 cm.",
    "Aurelio is a wooden top and steeled leg table that is more than your ordinary table for its unique design and amazing quality that anyone will enjoy. It measures 78x74x140 cm.",
    "Manuela is a wooden table with a classical styling but what makes it special than other brands of furniture is the materials used and skilled craftmanship from yours truly. It measures 74x70x160 cm.",
    "Avelino is a steel round table with a brass leg. It's sizing is perfect for fewer people and its styling gives off a vintage vibe to the area. It measures 90x71 cm.",
    "Isabel is a small round table with a steel leg. This offers more on a design standpoint than functionality but nonetheless a great piece to have by on your dining area where you relax yourself. It measures 38x75 cm."
  ];
  
/*============ Filter Information ============*/

filterer.addEventListener("change", choice => {
  if (choice.target.value === "new"){
      for (let i = 0; i < product.length; i++) {
        product[i].style.display = "none";
      }
      product[7].style.display = "flex";
      product[13].style.display = "flex";
      product[24].style.display = "flex";
      product[26].style.display = "flex";
      product[36].style.display = "flex";

  } else if (choice.target.value === "bed"){
      for (let i = 0; i < 6; i++) {
        product[i].style.display = "flex";
      }
      for (let i = 6; i < product.length; i++) {
        product[i].style.display = "none";
      }
  } else if (choice.target.value === "chair") {
      for (let i = 0; i < 6; i++) {
        product[i].style.display = "none";
      }
      for (let i = 6; i < 13; i++) {
        product[i].style.display = "flex";
      }
      for (let i = 13; i < product.length; i++) {
        product[i].style.display = "none";
      }
  } else if (choice.target.value === "sofa") {
      for (let i = 0; i < 13; i++) {
        product[i].style.display = "none";
      }
      for (let i = 13; i < 20; i++) {
        product[i].style.display = "flex";
      }
      for (let i = 20; i < product.length; i++) {
        product[i].style.display = "none";
      }
  } else if (choice.target.value === "storage") {
      for (let i = 0; i < 20; i++) {
        product[i].style.display = "none";
      }
      for (let i = 20; i < 30; i++) {
        product[i].style.display = "flex";
      }
      for (let i = 30; i < product.length; i++) {
        product[i].style.display = "none";
      }
  } else if (choice.target.value === "table") {
      for (let i = 0; i < 30; i++) {
        product[i].style.display = "none";
      }
      for (let i = 30; i < product.length; i++) {
        product[i].style.display = "flex";
      }
  } else {
    for (let i = 0; i < product.length; i++) {
        product[i].style.display = "flex";
      }
  }
})

/*============ Product Information ============*/

product.forEach((eachProduct, index) => {
    eachProduct.addEventListener("click", e => {
      let picture = e.currentTarget.querySelector('img').src;
      let title = e.currentTarget.querySelector('h1').textContent;
      let price = e.currentTarget.querySelector('h4').textContent;

      modal.querySelector("img").src = picture;
      modal.querySelector("h1").innerText = title;
      modal.querySelector("h3").innerText = price;
      modal.querySelector("p").innerText = description[index];
      
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

