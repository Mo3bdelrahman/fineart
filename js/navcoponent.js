
let mainnav =` 
<nav id="hinav" class="navbar navbar-expand-lg sticky-top ">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="images/navlogo.png">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse " id="navbarScroll">
          <ul class="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll fw-bold fs-5" style="--bs-scroll-height: 500px;">
            <li class="nav-item">
              <a class="nav-link active px-4" aria-current="page" href="index.html#hinav">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4"  href="categories.html">CATEGORIES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4"  href="about.html">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-4"  href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

function navCreatorFunc(Id){let x = document.getElementById(Id); x.insertAdjacentHTML("afterend", mainnav);};