import React from 'react';
import logo from '../../assets/images/logo-bookmark.svg';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md pt-5 pb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>

          <div className="navMenu ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#">
                  FEATURES
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  PRICING
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>

            <button>LOGIN</button>
          </div>
        </div>
      </nav>
    </>
  );
};
