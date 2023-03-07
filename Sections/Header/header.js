// *************** HEADER *********************
let header = {
  //! header logo
  logo: {
    imgUrl: "./Pictures/logo-dark.png",
  },
  //! header navbar array 
  navbar: [
    /* Home */
    {
      name: "Home",
      homeDown: [
        "Home 1",
        "Home 2",
        "Home 3",
        "Home 4",
        "Home 5",
        "Home 6 (Medical)",
        "Home 7 (Furniture)",
        "Home 8 (Footwear)",
        "Home 9 (Sunglass)",
        "Home 10 (Jewellery)",
        "Home 11 (Winter)",
      ],
    },
    /* Shop */
    {
      name: "Shop",
      shopFeatures: [
        "Shop Features",
        "Grid View",
        "List View",
        "Sidebar Right",
        "Sidebar Left",
        "Full width",
        "Load More",
        "Infinity Scroll",
      ],
      shopStyles: [
        "Shop Styles",
        "Style 1",
        "Style 2",
        "Style 3",
        "Style 4",
        "Style 5",
        "Style 6",
        "Style 7",
      ],
      productFeatures: [
        "Product Features",
        "Single Product 1",
        "Single Product 2",
        "Single Product 3",
        "Variable Product",
        "Grouped Product",
        "Left Thumbnail",
        "Right Thumbnail",
      ],
    },
    /* Pages */
    {
      name: "Pages",
      about: ["About Us", "FAQ", "Error 404", "Search result",],
      account: ["My Account", "Wishlist", "Cart", "Checkout"],
    },
    /* Elements */
    {
      name: "Elements",
      elementsItem: [
        "Accordion",
        "Post",
        "Product Slider",
        "Product List",
        "Product Isotope",
        "Product Fullscreen",
        "Section Title",
        "Logo Slider",
        "Video",
        "Google Map"
      ],
    },
    /* Blog */
    {
      name: "Blog",
      blogItem: [
        "Blog - Layout 1",
        "Blog - Layout 2",
        "Blog - Layout 1",
        "Single Post",
        "Blog - Full Width",
        "Blog - Left Sidebar",
        "Post - Full Width",
        "Post - Left Sidebar",
      ],
    },
    /* Contact */
    {
      name: "Contact",
    },
  ],
  //! header icons array
  icons: [
    { name: "search" },
    { name: "person-outline" },
    { name: "archive-outline" },
    { name: "menu-outline" },
  ],


  menuIcon: {
    name: "add-outline",
  },

  shopCategory: [
    "Shop Features",
    "Shop Styles",
    "Product Features",
  ],

  pagesCategory: [
    "About",
    "Account",
  ]
};



// ********************** HEADER DOWN ****************
// category
let headerCategory = [
  {
    icon: "list-outline",
    iconClose: "close-outline",
    name: "Categories",
    categoryItem: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/863/863684.png",
        name: "Men",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
        name: "Women",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2777/2777142.png",
        name: "Electronics",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2022/2022182.png",
        name: "Jewellery",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2043/2043907.png",
        name: "Shoes",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/3830/3830329.png",
        name: "Kid's Wear",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/3043/3043888.png",
        name: "Sports",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/3262/3262527.png",
        name: "Toys",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/548/548427.png",
        name: "Gift Corners",
      },
    ],
  },
  {
    name: "All Categories",
  },
  {
    name: "search",
  }
];


// header section printed function
function headerPrint() {
  //! header logo print
  let img = document.createElement("img"); img.src = header.logo.imgUrl;
  let header_logo = document.querySelector(".header_logo");
  header_logo.appendChild(img);

  //! header navbar print
  let ul = document.querySelector(".header_list");
  let nav = document.querySelector(".header_navbar");
  header.navbar.forEach((navItem) => {
    let li = document.createElement("li"); li.className = "header_list_item animUp";
    li.style = animationName = "example";
    li.style = animationDuration = "1s";
    li.style = animationIterationCount = "infinite";
    li.innerHTML = `
      ${navItem.name} <ion-icon name="chevron-down-outline"></ion-icon>
    `;
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  //! header icon print
  let headerIcons = document.querySelector(".header_icons");
  header.icons.forEach((icon) => {
    let div = document.createElement("div"); div.className = "icon";
    div.innerHTML = `
    <ion-icon name="${icon.name}" class="navIcon ${icon.name}i"></ion-icon>
    `;
    headerIcons.appendChild(div);
  });
  let pText = document.createTextNode("$0.00");
  let p = document.createElement("p"); p.appendChild(pText);
  headerIcons.appendChild(p);

  //! header category print
  let category = document.createElement("div"); category.className = "category bg-dark flex";
  category.innerHTML = `
  <ion-icon name="${headerCategory[0].icon}"></ion-icon> <h2>${headerCategory[0].name}</h2>
  `;
  document.querySelector(".header_category").appendChild(category);

  //! header search print
  let search = document.createElement("div"); search.className = "search flex";
  search.innerHTML = `
    <input type="text" placeholder='Search Products Here'>
    <h3>${headerCategory[1].name}</h3>
    <ion-icon name="chevron-down-outline"></ion-icon>
    <button class="bg-dark" ><ion-icon name="${headerCategory[2].name}"></ion-icon></button>
  `
  document.querySelector(".header_search").appendChild(search);


  //! navbar down print
  const navbarDown = document.getElementById("navbar_down");
  //! home print
  let home = document.createElement("div"); home.className = "home nav_down none";
  let homeList = document.createElement("ul");
  let homeList1 = document.createElement("ul");
  header.navbar[0].homeDown.forEach((item, index) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    if (index < 6) {
      homeList.appendChild(li);
    }
    if (index > 5) {
      homeList1.appendChild(li);
    }
    home.appendChild(homeList); home.appendChild(homeList1);
  });
  navbarDown.appendChild(home);

  //! shop print
  let shop = document.createElement("div"); shop.className = "shop nav_down none";
  let shopList = document.createElement("ul");
  let shopList1 = document.createElement("ul");
  let shopList2 = document.createElement("ul");

  header.navbar[1].shopFeatures.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    shopList.appendChild(li);
    shop.appendChild(shopList);
  });
  header.navbar[1].shopStyles.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    shopList1.appendChild(li);
    shop.appendChild(shopList1);
  });
  header.navbar[1].productFeatures.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    shopList2.appendChild(li);
    shop.appendChild(shopList2);
  });
  navbarDown.appendChild(shop);

  //! pages print
  let pages = document.createElement("div"); pages.className = "pages nav_down none";
  let pagesList = document.createElement("ul");
  let pagesList1 = document.createElement("ul");

  header.navbar[2].about.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    pagesList.appendChild(li);
    pages.appendChild(pagesList);
  });
  header.navbar[2].account.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    pagesList1.appendChild(li);
    pages.appendChild(pagesList1);
  });
  navbarDown.appendChild(pages);

  //! element print
  let element = document.createElement("div"); element.className = "element nav_down none";
  let elementList = document.createElement("ul");

  header.navbar[3].elementsItem.forEach((item) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    elementList.appendChild(li);
    element.appendChild(elementList);
  });
  navbarDown.appendChild(element);

  //! blog print
  let blog = document.createElement("div"); blog.className = "blog nav_down none";
  let blogList = document.createElement("ul");
  let blogList1 = document.createElement("ul");

  header.navbar[4].blogItem.forEach((item, index) => {
    let liText = document.createTextNode(item);
    let li = document.createElement("li"); li.appendChild(liText);
    if (index < 5) {
      blogList.appendChild(li);
    }
    if (index >= 4) {
      blogList1.appendChild(li);
    }
    blog.appendChild(blogList); blog.appendChild(blogList1);
  });
  navbarDown.appendChild(blog);

  let div = document.createElement("div"); div.className = "div nav_down none";



  //! span print
  let navbarDownDiv = document.querySelectorAll("#navbar_down .nav_down");
  for (let i = 0; i < 5; i++) {
    let span = document.createElement("span");
    navbarDownDiv[i].appendChild(span);
  }
}
headerPrint();

// navbar item hover event function
function navbarDownHover() {
  let headerListItem = document.querySelectorAll(".header_list_item");
  let navDown = document.querySelectorAll(".nav_down");
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      navDown[i].classList.add("none");
    }
    headerListItem[i].addEventListener("mouseover", () => {
      navDown[i].classList.remove("none");
      headerListItem[i].classList.add("animUp");
    });
    headerListItem[i].addEventListener("mouseout", () => {
      navDown[i].classList.add("none");
      headerListItem[i].classList.remove("animUp");
    });

    navDown[i].addEventListener("mouseover", () => {
      navDown[i].classList.remove("none");
      headerListItem[i].classList.add("animUp");
    });
    navDown[i].addEventListener("mouseout", () => {
      navDown[i].classList.add("none");
      headerListItem[i].classList.remove("animUp");
    });
  };
}
navbarDownHover();

// category down print
let categoryDown = document.querySelector("#category_down");
function categoryDownPrint() {
  let ul = document.createElement("ul"); ul.className = "category_list"
  headerCategory[0].categoryItem.forEach(item => {
    let li = document.createElement("li"); li.className = "category_list_item";
    li.innerHTML = `
    <img src="${item.icon}"/>
    ${item.name}
    `;
    ul.appendChild(li);
  });
  categoryDown.appendChild(ul);
};
categoryDownPrint();


// header category section is hover
function categoryHover() {
  let category = document.querySelector(".category");
  category.addEventListener("click", () => {
    headerCategory[0].icon = "close";
    categoryDown.classList.toggle("show");
  });

};

categoryHover();

/* ************************ mobile version  ********* */

/*         header menu print */
// header menu category
const headerMenu = document.querySelector("#header_menu > div");
function headerMenuCategory() {
  header.navbar.forEach((item) => {
    let ul = document.createElement("ul");
    ul.className = `menu_category ${item.name}`;
    let p = document.createElement("p");
    p.innerHTML = `
    ${item.name} <ion-icon class="menu_icon" name="add-outline"></ion-icon>
  `
    ul.appendChild(p);
    headerMenu.appendChild(ul);
  });
}
headerMenuCategory();


//! header menu category head
let menuCategory = document.querySelectorAll(".menu_category");

function categoryHead(_categoryHeader, _parent, headClass) {
  let div = document.createElement("div");div.className = "category_list";

  _categoryHeader.forEach((el) => {
    let ul = document.createElement("ul");
    ul.className = headClass;
    let p = document.createElement("p");
    p.innerHTML = `${el} <ion-icon class="menu_icon" name="add-outline"></ion-icon>`;
    ul.appendChild(p);
    div.appendChild(ul);
  });
  _parent.appendChild(div);

}

// shop category head
categoryHead(header.shopCategory, menuCategory[1], "shop_head");
// pages category head
categoryHead(header.pagesCategory, menuCategory[2], "pages_head");

let shopHead = document.querySelectorAll(".shop_head");
let pagesHead = document.querySelectorAll(".pages_head");

//! header menu item print
function headerMenuItem(_category, _parent) {
  let ul = document.createElement("ul");
  ul.className = "menu_list"
  _category.forEach((el) => {
    let mli = document.createElement("li");
    mli.innerHTML = `${el}`;
    ul.appendChild(mli);
  });
  _parent.appendChild(ul);
}

// home
headerMenuItem(header.navbar[0].homeDown, menuCategory[0]);

// shop
headerMenuItem(header.navbar[1].shopFeatures, shopHead[0]);
headerMenuItem(header.navbar[1].shopStyles, shopHead[1]);
headerMenuItem(header.navbar[1].productFeatures, shopHead[2]);

//pages 
headerMenuItem(header.navbar[2].about, pagesHead[0]);
headerMenuItem(header.navbar[2].account, pagesHead[1]);


// elements
headerMenuItem(header.navbar[3].elementsItem, menuCategory[3]);

// blog
headerMenuItem(header.navbar[4].blogItem, menuCategory[4]);


//! menu icon onclick
let menuList = document.querySelectorAll(".menu_list");
let categoryList = document.querySelectorAll(".category_list");
let menuIcon = document.querySelectorAll(".menu_icon");
function iconClick(index, element) {
  menuIcon[index].onclick = () => {
    if (menuIcon[index].name == "remove-outline") {
      menuIcon[index].name = "add-outline";
      element.style.display = "none";
    } else {
      menuIcon[index].name = "remove-outline";
      element.style.display = "block";
    }
  };
};

iconClick(0, menuList[0]);
iconClick(1, categoryList[0]);
iconClick(2, menuList[1]);
iconClick(3, menuList[2]);
iconClick(4, menuList[3]);
iconClick(5, categoryList[1]);
iconClick(6, menuList[4]);
iconClick(7, menuList[5]);
iconClick(8, menuList[6]);
iconClick(9, menuList[7]);

//! bars onclick
let bars = document.querySelectorAll(".navIcon");
bars[3].onclick = ()=> {
  if(bars[3].name == "menu-outline"){
    bars[3].name = "close-outline";
    headerMenu.classList.add("show");
  }else if(bars[3].name == "close-outline"){
    bars[3].name = "menu-outline";
    headerMenu.classList.remove("show");
  }
}


