class TrendProduct extends Product {
  constructor(_name, _imgURL, _title, _className) {
    super(_name, _imgURL);
    this.title = _title;
    this.className = _className;
  }
}

let trendProducts = [
  new TrendProduct("LED HANGER LIGHT", "./Pictures/trendPro.png", "Trending 2023", "first"),
  new TrendProduct("HEADPHONE", "./Pictures/trendPro1.png", "Collection 2023", "second"),
]

let products = [
  new Product("Game Controller", "./Pictures/vr.jpg", "$375.00", "$390.00", "4%"),
  new Product("Bluetooth", "./Pictures/bluetooth.jpg", "$90.00", "",""),
  new Product("Gadgets Collection", "./Pictures/gadgets.jpg", "$35.00", "$35.00","0%"),
  new Product("Keyboard", "./Pictures/keyboard.jpg", "$240.00", "$300.00", "4%"),
  new Product("Speaker", "./Pictures/speaker.jpg", "$80.00", "", ""),
  new Product("Headphone", "./Pictures/headphone.jpg", "$35.00", "", ""),
  new Product("Ultra Lense", "./Pictures/ultraLense.jpg", "$630.00", "", ""),
  new Product("Hobbyist Watch", "./Pictures/watch.jpg", "$160.00", "", ""),
  new Product("Graphics Cards", "./Pictures/card.jpg", "$180.00", "", ""),
];



// SECTION - TRENDING PRODUCTS
let trendPro = document.querySelector(".trend_products .grid");
trendProducts.forEach((item) => {
  let trendBox = document.createElement("div");
  trendBox.className = `trend_product line_box col-lg-6 col-xs-12 flex ${item.className}`;
  trendBox.innerHTML = `
      <div class="trend_product_content ${item.className} flex">
      <div class='trend_product_info '>
      <h3>${item.name}</h3>
      <p>${item.title}</p>
      <div class="line"></div>
  </div>
  <div class='trend_product_img flex center'>
       <img src='${item.imgURL}'/>
  </div>
      </div>
    `;
  trendPro.appendChild(trendBox);
})

//TODO - line box hover
function lineBoxHover(box, line) {
  jQuery(`${box}`).on("mouseover", () => {
    jQuery(`${line}`).animate({
      width: "250px",
    });
  });

  jQuery(`${box}`).on("mouseout", () => {
    jQuery(`${line}`).animate({
      width: "35px",
    });
  });
}

lineBoxHover(".hero_product_title", ".hero_product_title .line");
lineBoxHover(".trend_product_info:first", ".trend_product_info:first .line");
lineBoxHover(".trend_product_info:last", ".trend_product_info:last .line");


// SECTION - PRODUCTS
// NOTE - products print
jQuery(document).ready(function () {
  jQuery.each(products, (i, product) => {

    //NOTE - products main print
    if (i == 0) {
      jQuery(".products_left .grid").append(`
          <div class="product_box  pro_main col-lg-12 col-xs-12 flex">
            <div class="product">
            <span class="product_discount">${product.discount}</span>
            <div class="product_content">
              <img src="${product.imgURL}" alt="proImg" class="product_img">
              <p class="product_name">${product.name}</p>
              <p class="product_price">
              <span class="old_price">${product.oldPrice}</span>${product.price}
              </p>
            </div>
            <button class="product_button" title="btn">BUY FROM AMAZON</button>
            </div>
          </div>
      `)
    }

    //NOTE - products left print
    if (0 < i && i < 3) {
      jQuery(".products_left .grid").append(`
        <div class="product_box pro_left col-lg-6 col-xs-12 flex">
          <div class="product">
          <span class="product_discount">${product.discount}</span>
          <div class="product_content">
            <img src="${product.imgURL}" alt="proImg" class="product_img">
            <p class="product_name">${product.name}</p>
            <p class="product_price">
            <span class="old_price">${product.oldPrice}</span>${product.price}
            </p>
          </div>
          <button class="product_button" title="btn">ADD TO CART</button>
          </div>
        </div>
      `)
    }

    //NOTE - products right print
    if (2 < i) {
      jQuery(".products_right .grid").append(`
            <div class="product_box pro_right col-lg-6 col-xs-12 flex">
              <div class="product">
              <span class="product_discount">${product.discount}</span>
              <div class="product_content">
                <img src="${product.imgURL}" alt="proImg" class="product_img">
              <p class="product_name">${product.name}</p>
                <p class="product_price">
                <span class="old_price">${product.oldPrice}</span>${product.price}
                </p>
              </div>
              <button class="product_button" title="btn">ADD TO CART</button>
              </div>
            </div>
          `)
    }

    //NOTE - empty discount box hidden
    if(product.discount == ""){
    let one = $(".product_discount");
    one[i].style.visibility = "hidden";
    }
  })


  //TODO - button show when product hover

    $(".product").mouseover(function(){
      $(this).removeClass('down');
      $(this).addClass('up');
    });

    $(".product").mouseout(function(){
      $(this).removeClass("up");
      $(this).addClass("down");   
    });


  
})//NOTE - jQuery end





