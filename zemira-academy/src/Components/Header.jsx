import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <img src={logo} alt="" style={{ height: "40px", width: "40px" }} />
          <span className="fs-4" style={{ color: "teal" }}>
            ZEMIRA ACAMEMY
          </span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-black"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{width:'300px', padding:'15px 20px'}}>
              <li>
                <a className="display-6dropdown-item" href="#">
                  Product Design
                </a>
              </li>
              <li>
                <a className="display-6dropdown-item" href="#">
                  Graphics Design
                </a>
              </li>
              <li>
                <a className=" display-6dropdown-item" href="#">
                  Front-End Development
                </a>
              </li>
              <li>
                <a className=" display-6dropdown-item" href="#">
                  Back-End Development
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-black">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-black">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-black">
              Contacts
            </a>
          </li>

          <Link to={ '/signup' } type="button" className="arrow text-light" style={{ color: "teal", padding:'7px 13px', borderRadius: '5px' }}>Join Us <i className="bi bi-arrow-right"></i></Link>
        
        </ul>
      </header>
    </div>
  );
}

export default Header;
