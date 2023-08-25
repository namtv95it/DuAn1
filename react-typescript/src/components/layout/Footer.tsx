import React from 'react'

export default function Footer() {
  return (
    <>
        <section className="footer-section bg-section-2 section-padding">
            <div className="container">
            <div className="row row-cols-1 row-cols-lg-4 g-4">
                <div className="col">
                <div className="footer-widget-6">
                    <img src="assets/images/logo.webp" className="logo-img mb-3" alt=""/>
                    <h5 className="mb-3 fw-bold">About Us</h5>
                    <p className="mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <a className="link-dark" href="javascript:;">Read More</a>
                </div>
                </div>
                <div className="col">
                <div className="footer-widget-7">
                    <h5 className="mb-3 fw-bold">Explore</h5>
                    <ul className="widget-link list-unstyled">
                    <li><a href="javascript:;">Fashion</a></li>
                    <li><a href="javascript:;">Women</a></li>
                    <li><a href="javascript:;">Furniture</a></li>
                    <li><a href="javascript:;">Shoes</a></li>
                    <li><a href="javascript:;">Topwear</a></li>
                    <li><a href="javascript:;">Brands</a></li>
                    <li><a href="javascript:;">Kids</a></li>
                    </ul>
                </div>
                </div>
                <div className="col">
                <div className="footer-widget-8">
                    <h5 className="mb-3 fw-bold">Company</h5>
                    <ul className="widget-link list-unstyled">
                    <li><a href="javascript:;">About Us</a></li>
                    <li><a href="javascript:;">Contact Us</a></li>
                    <li><a href="javascript:;">FAQ</a></li>
                    <li><a href="javascript:;">Privacy</a></li>
                    <li><a href="javascript:;">Terms</a></li>
                    <li><a href="javascript:;">Complaints</a></li>
                    </ul>
                </div>
                </div>
                <div className="col">
                <div className="footer-widget-9">
                    <h5 className="mb-3 fw-bold">Follow Us</h5>
                    <div className="social-link d-flex align-items-center gap-2">
                    <a href="javascript:;"><i className="bi bi-facebook"></i></a>
                    <a href="javascript:;"><i className="bi bi-twitter"></i></a>
                    <a href="javascript:;"><i className="bi bi-linkedin"></i></a>
                    <a href="javascript:;"><i className="bi bi-youtube"></i></a>
                    <a href="javascript:;"><i className="bi bi-instagram"></i></a>
                    </div>
                    <div className="mb-3 mt-3">
                    <h5 className="mb-0 fw-bold">Support</h5>
                    <p className="mb-0 text-muted">support@example.com</p>
                    </div>
                    <div className="">
                    <h5 className="mb-0 fw-bold">Toll Free</h5>
                    <p className="mb-0 text-muted">1800- 8xx 2xx</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="my-5"></div>
            <div className="row">
                <div className="col-12">
                <div className="text-center">
                    <h5 className="fw-bold mb-3">Download Mobile App</h5>
                </div>
                <div className="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                    <div>
                    <a href="javascript:;">
                        <img src="assets/images/play-store.webp" width="160" alt=""/>
                    </a>
                    </div>
                    <div>
                    <a href="javascript:;">
                        <img src="assets/images/apple-store.webp" width="160" alt=""/>
                    </a>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </section>

        <footer className="footer-strip text-center py-3 bg-section-2 border-top positon-absolute bottom-0">
            <p className="mb-0 text-muted">© 2022. www.example.com | All rights reserved.</p>
        </footer>
    </>
  )
}
