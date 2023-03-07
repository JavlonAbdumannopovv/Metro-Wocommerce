class Post {
  constructor(imgURL, title, description) {
    this.imgURL = imgURL;
    this.title = title;
    this.description = description;
  };
};

let posts = [
  new Post("./Pictures/blog1.jpg", "Fashion, Modern", "The City of London Wants To Have"),
  new Post("./Pictures/blog.jpg", "Fashion, Modern", "The City of London Wants To Have"),
  new Post("./Pictures/blog2.jpg", "Finger Ring, Jewellery", "The City of London Wants To Have Brexit Cake Available"),
];

//NOTE - posts print
$("#posts").append(`
  <div class="posts_title">
    <h2>Inspirational Posts</h2>
  </div>
  <div class="posts_content">
    <div class="grid">

    </div>
  </div>
`);

//NOTE - post print
$.each(posts, (i, post) => {
  $(".posts_content .grid").append(`
    <div class="post_box col-lg-4 col-xs-12 flex center">
      <div class="post">
        <img src="${post.imgURL}"/>
        <p>${post.title}</p>
        <h4>${post.description}</h4>
      </div>
    </div>
  `);
});

//NOTE - pictures
$("#posts").append(`
    <div class="inst_pictures">
    <div>
      <img src="./Pictures/133741770_1318800921811678_4721521856182177142_nlow.jpg"/>
      <img src="./Pictures/133850832_308705830501835_7838048382889998569_nlow.jpg"/>
      <img src="./Pictures/133921053_714590119196386_1658219483417317801_nlow.jpg"/>
      <img src="./Pictures/133951534_159310758888661_2604966363783982993_nlow.jpg"/>
    </div>
    <div>
      <img src="./Pictures/133516554_391509835474338_5315586887147902187_nlow.jpg"/>
      <img src="./Pictures/133707997_732658234328560_5386510884630991970_nlow.jpg"/>
      <img src="./Pictures/133709733_149308713394133_3184643633541822646_nlow.jpg"/>
      <img src="./Pictures/133712627_313849136542795_8040827235657705832_nlow.jpg"/>
    </div>

  </div>
`)