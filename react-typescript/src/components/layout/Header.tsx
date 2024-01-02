import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="top-header">
        <nav className="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
          <a className="navbar-brand d-none d-xl-inline" href="index.html">
            <img src="assets/images/logo.webp" className="logo-img" alt="" />
          </a>
          <a
            className="mobile-menu-btn d-inline d-xl-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <i className="bi bi-list"></i>
          </a>
          <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <div className="offcanvas-logo">
                <img
                  src="assets/images/logo.webp"
                  className="logo-img"
                  alt=""
                />
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body primary-menu">
              <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li className="nav-item">
                  <NavLink to='/' className='nav-link'>
                    Home
                  </NavLink>
                  {/* <a className="nav-link" href="index.html">
                    Home
                  </a> */}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="tv-shows.html"
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </a>
                  <div className="dropdown-menu dropdown-large-menu">
                    <div className="row">
                      <div className="col-12 col-xl-4">
                        <h6 className="large-menu-title">Fashion</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a>Casual T-Shirts</a>
                          </li>
                          <li>
                            <a>Formal Shirts</a>
                          </li>
                          <li>
                            <a>Jackets</a>
                          </li>
                          <li>
                            <a>Jeans</a>
                          </li>
                          <li>
                            <a>Dresses</a>
                          </li>
                          <li>
                            <a>Sneakers</a>
                          </li>
                          <li>
                            <a>Belts</a>
                          </li>
                          <li>
                            <a>Sports Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-xl-4">
                        <h6 className="large-menu-title">Electronics</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a>Mobiles</a>
                          </li>
                          <li>
                            <a>Laptops</a>
                          </li>
                          <li>
                            <a>Macbook</a>
                          </li>
                          <li>
                            <a>Televisions</a>
                          </li>
                          <li>
                            <a>Lighting</a>
                          </li>
                          <li>
                            <a>Smart Watch</a>
                          </li>
                          <li>
                            <a>Galaxy Phones</a>
                          </li>
                          <li>
                            <a>PC Monitors</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="pramotion-banner1">
                          <img
                            src="assets/images/menu-img.webp"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="cart.html">
                        Shop Cart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="wishlist.html">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="product-details.html">
                        Product Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="payment-method.html">
                        Payment Method
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="billing-details.html">
                        Billing Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="address.html">
                        Addresses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="shop-grid.html">
                        Shop Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="shop-grid-type-4.html">
                        Shop Grid 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="shop-grid-type-5.html">
                        Shop Grid 5
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="search.html">
                        Search
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-dashboard.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="account-orders.html">
                        My Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="account-profile.html">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-edit-profile.html"
                      >
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-saved-address.html"
                      >
                        Addresses
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-login.html"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-register.html"
                      >
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="authentication-reset-password.html"
                      >
                        Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="blog-post.html">
                        Blog Post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-read.html">
                        Blog Read
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <ul className="navbar-nav secondary-menu flex-row">
            <li className="nav-item">
              <a className="nav-link dark-mode-icon" href="javascript:;">
                <div className="mode-icon">
                  <i className="bi bi-moon"></i>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="search.html"><i className="bi bi-search"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="wishlist.html"><i className="bi bi-suit-heart"></i></a>
            </li>
            <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <a className="nav-link position-relative" href="javascript:;">
                <div className="cart-badge">8</div>
                <i className="bi bi-basket2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="account-dashboard.html"><i className="bi bi-person-circle"></i></a>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  );
}
