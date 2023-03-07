class Product {
  constructor(_name, _imgURL, _price, _oldPrice, _discount) {
    this.name = _name;
    this.imgURL = _imgURL;
    this.price = _price;
    this.oldPrice = _oldPrice;
    this.discount = _discount;
  }

  getDiscount() {
    return this.oldPrice / this.price;
  }
};

class HeroProduct extends Product {
  constructor(_name, _imgURL, _title, _description) {
    super(_name, _imgURL);
    this.title = _title;
    this.description = _description;
  }
}

let heroProducts = [
  new HeroProduct(
    "Bluetooth Speaker",
    "./Pictures/hero.png",
    "Soundbox",
    "New Modern Stylist Fashionable Men`s Wearholder bag maxcan weather holder"
  ),
  new HeroProduct(
    "Luxury Watch",
    "./Pictures/hero1.png",
    "Watch",
    "New Modern Stylist Fashionable Men`s Wearholder bag maxcan weather holder"
  ),
  new HeroProduct(
    "Graphics Card",
    "./Pictures/hero2.png",
    "Graphics card",
    "New Modern Stylist Fashionable Men`s Wearholder bag maxcan weather holder"
  ),
]


// NOTE - hero content print
let hero = document.getElementById("hero");
let heroContent = document.querySelector(".hero_content");

heroProducts.forEach((product) => {
  // hero product title
  let proTitle = document.createElement('div');
  proTitle.className = 'hero_product_title line_box col-lg-5 col-xs-7';
  proTitle.innerHTML = `
    <span class='hero_title'>${product.title}</span>
    <h2 class='hero_name'>${product.name}</h2>
    <p class='hero_description'>${product.description}</p>
    <div class='hero_explore'>
          <span>EXPLORE NOW</span>
          <div class='line'></div>
    </div>
  `;

  // hero product img
  let proImg = document.createElement('div');
  proImg.className = "hero_product_img col-lg-6 col-xs-5 flex start";
  proImg.innerHTML = `
  <img class="hero_img" src="${product.imgURL}"/>
  `;

  // hero product
  let heroProduct = document.createElement('div');
  heroProduct.className = "hero_product flex";
  heroProduct.appendChild(proTitle);
  heroProduct.appendChild(proImg);

  // hero content 
  heroContent.appendChild(heroProduct);

});


// NOTE - hero circle print
let heroCircle = document.createElement("div");
heroCircle.className = 'hero_circle flex';
heroCircle.innerHTML = `
  <span class='checked'></span>
  <span></span>
  <span></span>
`;
hero.appendChild(heroCircle);


// TODO - HERO CONTENT CHANGE
let circle = document.querySelectorAll('.hero_circle span');
let proTitle = document.querySelectorAll('.hero_product_title *');
let proImg = document.querySelectorAll('.hero_img');

function heroContentChange(width) {
  for (let i = 0; i < circle.length; i++) {
    circle[i].onclick = () => {
      heroContent.style.right = `${(i) * width}px`;
      heroContent.style.opacity = "0";

      circle.forEach((item) => {
        item.className = "no-checked";
      });
      circle[i].className = "checked";

      proTitle.forEach((item, i) => {
        item.style.animationName = "title";
      });
      proImg.forEach((img) => {
        img.style.animationName = "title";
      });

      setTimeout(() => {
        heroContent.style.opacity = "1";
        // animation add
        proTitle.forEach((item, i) => {
          item.style.animationName = "titleUp";
        });
        proImg.forEach((img) => {
          img.style.animationName = "imgShow";
        });

      }, 1000);

      count = i;
    }
  }
}
heroContentChange(1440);


// TODO - HERO CONTENT CHANGE INTERVAL
let count = 1;

function autoChangeHero(width) {
  // NOTE - content change
  heroContent.style.right = `${(count) * width}px`;
  heroContent.style.opacity = "0";
  circle.forEach((item) => {
    item.className = "no-checked";
  });
  circle[count].className = "checked";

  // NOTE - animation remove
  proTitle.forEach((item) => {
    item.style.animationName = "title";
  });
  proImg.forEach((img) => {
    img.style.animationName = "title";
  });
  setTimeout(() => {
    heroContent.style.opacity = "1";
    heroContent.style.opacity = "1";

    // NOTE animation add
    proTitle.forEach((item) => {
      item.style.animationName = "titleUp";
    });
    proImg.forEach((img) => {
      img.style.animationName = "imgShow";
    });
  }, 1000);

  // NOTE - count change
  count++;
  if (count == 3) {
    count = 0;
  }
}
setInterval(autoChangeHero(1440), 15000);


//NOTE - responsive xs
if (window.innerWidth < 700) {
  heroContentChange(700);
  setInterval(autoChangeHero(700), 15000);
}