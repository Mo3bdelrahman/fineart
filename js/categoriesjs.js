/* OUR DATA */
/* --------------------------------------OUR DATA variables ------------------*/
/*categories */
let allcatName = [
  "ACCESSORIES",
  "OFFICE",
  "BEDROOM",
  "DININGROOM",
  "COMMODE",
  "PARAVANS",
  "NAJAF",
  "LIVINGROOM",
  "ABARA",
  "BAHU",
  "CHAIRS",
  "CONSOLE",
  "DESK",
  "KOFIZA",
  "MIRRORS",
  "MOPLE",
  "SECRETARY",
  "SEMNEYA",
  "SHOES CUPBOARD",
  "SOFA",
  "STAND",
  "TABLE",
  "TV STAND",
  "VITRINE",
];
let aliasName = [
  "acces",
  "offi",
  "bedroom",
  "diningroom",
  "commod",
  "pravans",
  "najaf",
  "livingroom",
  "abara",
  "bahu",
  "chair",
  "consol",
  "desks",
  "kofiz",
  "mirr",
  "mopl",
  "secrt",
  "semneya",
  "shosecu",
  "sofaa",
  "stan",
  "tabl",
  "tvs",
  "vitr",
];
let allnum = [
  21, 17, 62, 33, 42, 12, 17, 72, 7, 79, 39, 13, 17, 6, 19, 18, 8, 2, 7, 41, 38,
  170, 9, 80,
];

/* --------------------------------------functios ------------------*/
/*categories creator *---if main t=1 else t=0---* */

function catCreatorFunc(cId, t) {
  if (t == true) {
    for (let i = 0; i < 8; i++) {
      let singleiteam = `
        <div class="single-cat col text-center">
        <div>
            <a href="categories.html"><img src="images/home/cat${
              i + 1
            }.jpg" class="cat-img" alt="Mohie FineArt's Product Image"></a>
        </div>
        <div class="cat-content text-center p-3">
        <h3 class="cat-name goldencolor"><a href="categories.html">${
          allcatName[i]
        }</a></h3>
        </div>
        </div>
        `;
      let x = document.getElementById(cId);
      x.insertAdjacentHTML("beforeend", singleiteam);
    }
  } else {
    for (let i = 0; i < allcatName.length; i++) {
      let singleiteam = `
                <div class="single-cat col text-center">
                
                <div class="cat-content text-center p-3">
                <h3 class="cat-name goldencolor"><a href="#" id="homecat${i}" onclick="document.getElementById(s_Id).innerHTML='',singleCreatorFunc(h_Id ,s_Id,${i})">${allcatName[i]}</a></h3>
                </div>
                </div>
                `;
      let x = document.getElementById(cId);
      x.insertAdjacentHTML("beforeend", singleiteam);
    }
  }
}
