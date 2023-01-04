/*components */
let mainfooter =`
<footer class="footer py-5 text-center text-md-start">
<div class="footercontainer">
<div class="row text-center align-items-center align-content-center">

 <div class="col-12 mb-2">
   <a href="#"><img src="images/footer-logo.png" width="205px" alt="Mohiefineartco_logo"> </a>
 </div>
 <div ><span class="vline"></span> </div>
 
 <div class="col-12 contactfooter mt-5 ">
   <p >CONTACT US</p>
   <a href="tel:+021148150038" target="_blank"><i class="fa-solid fa-phone iconsfooter"></i></a>
   
   <a href="https://www.facebook.com/Mohiefineartco/" target="_blank"><i class="fa-brands fa-facebook-messenger iconsfooter"></i></a>

   <a href="https://api.whatsapp.com/send?phone=201148150038&app=facebook&entry_point=page_cta&fbclid=IwAR1GIciB2UyjKGVYBGMQW95s43O6vau1QqNss7EfWUzRm_MmmDavjmOAwV0"
           target="_blank"><i class="fa-brands fa-whatsapp iconsfooter" style="width: 25px; ;height: 25px;"></i></a>
 </div>
 <div class="col-12 socialfooter mt-4 ">
   <p >SOCIAL</p>
   <span ><a href="https://www.facebook.com/Mohiefineartco/" target="_blank"><i class="fa-brands fa-facebook-f iconsfooter "></i></a>
   </span>
   <span ><a href="https://www.instagram.com/mohiefineartco/" target="_blank"><i class="fa-brands fa-instagram iconsfooter"></i></a>
   </span>
   <span ><a href="https://www.youtube.com/@MOHIEFINEARTCO" target="_blank"><i class="fa-brands fa-youtube iconsfooter"></i></a>
   </span>
   <span ><a href="https://www.pinterest.com/mohiefineartcompany/" target="_blank"><i class="fa-brands fa-pinterest-p iconsfooter" ></i></a>
   </span>
   <span ><a href="https://www.linkedin.com/company/mohie-fine-art-co/" target="_blank"><i class="fa-brands fa-linkedin iconsfooter"></i></a>
   </span>
  
 </div>
 <div class="col-12 copyrightfooter mt-5">
   <div class="copyright_text">
             MOHIE FINEART <br>
             <a href="https://goo.gl/maps/S3t7nyqm3tgtmXah8" target="_blank">KILO 22, NORTH COAST ROAD, <br>
                ALEXANDRIA, EGYPT<br></a>
              <a href="mailto:FINEART@MOHIEFINEARTCO.COM"> FINEART@MOHIEFINEARTCO.COM</a> <br>
              <a href="tel:+021148150038" target="_blank"> Tel. +02 114-815-0038 </a>
              
   </div>
       
 </div>
 <div class="col-12 logofooter mt-5">
   <div class="row justify-content-evenly">
     <p class="col-lg-4" >COPYRIGHT &copy; 2022 MOHIE FINEART. ALL RIGHTS RESERVED.</p>
     <a  class="col-lg-4" href="#"><img src="images/footerend2.png" alt="Mohiefineartco_mastercard"> </a>

   </div>
   
 </div>
  


</div>
</div>

</footer>
`;
function footerCreatorFunc(Id){let x = document.getElementById(Id); x.insertAdjacentHTML("afterend", mainfooter);};
