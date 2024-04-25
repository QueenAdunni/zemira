import React from "react";
import logo from "../assets/images/logo.png";

function name() {
  return (
    <div className="container-fluid text-light bg-success pt-5 pb-2">
      <div className="row px-5">

        <div className="col">
          <img src={ logo } alt="" />
        </div>

        <div className="col">
          <h5>Our mission</h5>
          <p>Our goal is to build driven, passionate and outstanding developers with industry-ready programming proficiency and soft-skills.</p>
        </div>

        <div className="col">
          <h5>Quick Links</h5>
          <ul className="nav flex-column">
            <li><a href=""className="nav-link text-light">Blog</a></li>
            <li><a href=""className="nav-link text-light">Blog</a></li>
            <li><a href=""className="nav-link text-light">Blog</a></li>
            <li><a href=""className="nav-link text-light">Blog</a></li>
          </ul>
        </div>

        <div className="col">
          <h5>Courses</h5>
          <ul className="nav flex-column">
            <li><a href=""className="nav-link text-light">UI/UX</a></li>
            <li><a href=""className="nav-link text-light">UI/UX</a></li>
            <li><a href=""className="nav-link text-light">UI/UX</a></li>
            <li><a href=""className="nav-link text-light">UI/UX</a></li>
            <li><a href=""className="nav-link text-light">UI/UX</a></li>
          </ul>
        </div>
        
        <div className="col">
          <i class="bi bi-facebook me-4"></i>
          <i class="bi bi-twitter me-4"></i>
          <i class="bi bi-instagram me-4"></i>
          <i class="bi bi-linkedin me-4"></i>
        </div>
      </div>

      <hr style={{border:'3px solid white'}}/>

      <p className="text-center">Copyright © ZEMIRA ACADEMY 2023 | All Right Reserves.</p>
    </div>
    
   

    //       <div class="d-flex flex-column flex-sm-row justify-content-center text-light py-4 my-4 border-top">
    //         
    //         <ul class="list-unstyled d-flex">
    //           <li class="ms-3">
    //             <a class="link-body-emphasis" href="#">
    //               <svg class="bi" width="24" height="24">
    //                 <use xlink:href="#twitter"></use>
    //               </svg>
    //             </a>
    //           </li>
    //           <li class="ms-3">
    //             <a class="link-body-emphasis" href="#">
    //               <svg class="bi" width="24" height="24">
    //                 <use xlink:href="#instagram"></use>
    //               </svg>
    //             </a>
    //           </li>
    //           <li class="ms-3">
    //             <a class="link-body-emphasis" href="#">
    //               <svg class="bi" width="24" height="24">
    //                 <use xlink:href="#facebook"></use>
    //               </svg>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </footer>
    //   </div>
    // </div>
  );
}

export default name;
