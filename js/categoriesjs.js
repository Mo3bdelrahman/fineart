
/* OUR DATA */
/* --------------------------------------OUR DATA variables ------------------*/
/*categories */
let allcatName = ['ACCESORIES','OFFICE','BEDROOM','DININGROOM','COMMODE','PRAVANS','NAJAF','LIVINGROOM','ABARA','BAHUI','CHAIRS','CONSOL','DESK','KOFIZA','MIRRORS','MOPLE','SECRTARY','SEMNEYA','SHOSE CUPBOARD','SOFA','STAND','TABLE','TV STAND','VITRINE'];
let aliasName = ['acces','office','bed','dining','comm','pravan','najaf','living','abara','bahui','chairs','consol','desk','kofiza','mirror','mople','secrtary','semneya','shose','sofa','stand','table','tv','vitrine'];
let allnum = [22,17,45,34,42,8,17,12,5,73,15,13,9,4,18,13,4,2,3,18,25,111,2,61];

/* --------------------------------------functios ------------------*/
/*categories creator *---if main t=1 else t=0---* */

function catCreatorFunc(cId,t){  
   if(t == true){
    for (let i = 0; i < 8; i++) {
        
        let singleiteam =`
        <div class="single-cat col text-center">
        <div>
            <a href="categories.html"><img src="images/home/cat${i+1}.jpg" class="cat-img" alt="Mohie FineArt's Product Image"></a>
        </div>
        <div class="cat-content text-center p-3">
        <h3 class="cat-name goldencolor"><a href="categories.html">${allcatName[i]}</a></h3>
        </div>
        </div>
        `;
        let x = document.getElementById(cId); x.insertAdjacentHTML("beforeend", singleiteam);};}
    else{
            for (let i = 0; i < allcatName.length; i++) {
                let singleiteam =`
                <div class="single-cat col text-center">
                
                <div class="cat-content text-center p-3">
                <h3 class="cat-name goldencolor"><a href="#" id="homecat${i}" onclick="document.getElementById(s_Id).innerHTML='',singleCreatorFunc(h_Id ,s_Id,${i})">${allcatName[i]}</a></h3>
                </div>
                </div>
                `;
                let x = document.getElementById(cId);
                x.insertAdjacentHTML("beforeend", singleiteam);
                
            }
    
        } };





  