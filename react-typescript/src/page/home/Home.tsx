import React from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'



const Home = () => {
    const count = useSelector((state: any) => state.counter.value);
    const handleLogin = () => {
        let httpPrefix = 'http://localhost:3000';
        let domain = window.location.origin;
        // console.log(domain);
        window.location.href = httpPrefix + "/login?redirect_uri=" + domain || ""
        console.log(httpPrefix + "/login?redirect_uri=" + domain || "");

    }
    return (
        <>
            <section className="product-tab-section section-padding bg-light">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-bold">Latest Products</h3>
                        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
                    </div>
                    <div className="row">
                        <div className="col-auto mx-auto">
                            <div className="product-tab-menu table-responsive">
                                <ul className="nav nav-pills flex-nowrap" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#new-arrival" type="button">New
                                            Arrival</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#best-sellar" type="button">Best
                                            Sellar</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#trending-product"
                                            type="button">Trending</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#special-offer" type="button">Special
                                            Offer</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="tab-content tabular-product">
                        <div className="tab-pane fade show active" id="new-arrival">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/01.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name2</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49999</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="ribban">New Season</div>
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/02.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/03.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/04.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/05.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/06.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/07.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/08.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/09.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/new-arrival/10.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="best-sellar">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/best-sellar/01.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/best-sellar/02.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$4999999999</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/best-sellar/03.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="ribban bg-primary">New Fashion</div>
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/best-sellar/04.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/best-sellar/05.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="trending-product">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/trending-product/01.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/trending-product/02.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="ribban bg-warning text-dark">New Season</div>
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a>
                                                <img src="assets/images/trending-product/03.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/trending-product/04.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/trending-product/05.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="special-offer">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/special-offer/01.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/special-offer/02.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="ribban">50% Discount</div>
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/special-offer/03.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/special-offer/04.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="position-relative overflow-hidden">
                                            <div
                                                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                <a href="javascript:;"><i className="bi bi-heart"></i></a>
                                                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            </div>
                                            <a href="product-details.html">
                                                <img src="assets/images/special-offer/05.webp" className="card-img-top" alt="..." />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className="product-info text-center">
                                                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                                                <div className="ratings mb-1 h6">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                                <p className="mb-0 h6 fw-bold product-price">$49</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-thumb-slider section-padding">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-bold">What We Offer!</h3>
                        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 g-4">
                        <div className="col d-flex">
                            <div className="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                                <div className="card-body text-center">
                                    <div className="h1 fw-bold my-2 text-primary">
                                        {/* <i className="fa fa-truck fa-flip-horizontal"></i> */}
                                        <i className="bi bi-truck"></i>
                                    </div>
                                    <h5 className="fw-bold">Free Delivery</h5>
                                    <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                                <div className="card-body text-center">
                                    <div className="h1 fw-bold my-2 text-danger">
                                        <i className="bi bi-credit-card"></i>
                                    </div>
                                    <h5 className="fw-bold">Secure Payment</h5>
                                    <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                                <div className="card-body text-center">
                                    <div className="h1 fw-bold my-2 text-success">
                                        <i className="bi bi-minecart-loaded"></i>
                                    </div>
                                    <h5 className="fw-bold">Free Returns</h5>
                                    <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                                <div className="card-body text-center">
                                    <div className="h1 fw-bold my-2 text-warning">
                                        <i className="bi bi-headset"></i>
                                    </div>
                                    <h5 className="fw-bold">24/7 Support</h5>
                                    <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-section-2">
                <div className="container">
                    <div className="card border-0 rounded-0 p-3 depth">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 text-center">
                                <img src="assets/images/extra-images/promo-large.webp" className="img-fluid rounded-0" alt="..." />
                            </div>
                            <div className="col-lg-6">
                                <div className="card-body">
                                    <h3 className="fw-bold">New Features of Trending Products</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-transparent px-0">Contrary to popular belief, Lorem Ipsum is not simply
                                            random text.</li>
                                        <li className="list-group-item bg-transparent px-0">All the Lorem Ipsum generators on the Internet tend.
                                        </li>
                                        <li className="list-group-item bg-transparent px-0">There are many variations of passages of Lorem Ipsum
                                            available.</li>
                                        <li className="list-group-item bg-transparent px-0">There are many variations of passages
                                            available.</li>
                                    </ul>
                                    <div className="buttons mt-4 d-flex flex-column flex-lg-row gap-3">
                                        <a className="btn btn-lg btn-dark btn-ecomm px-5 py-3">Buy Now</a>
                                        <a className="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-bold">Shop By Brands</h3>
                        <p className="mb-0 text-capitalize">Select your favorite brands and purchase</p>
                    </div>
                    <div className="brands">
                        <div className="row row-cols-2 row-cols-lg-5 g-4">
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/01.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/02.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/03.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/04.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/05.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/06.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/07.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/08.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/09.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 border rounded brand-box">
                                    <div className="d-flex align-items-center">
                                        <a>
                                            <img src="assets/images/brands/10.webp" className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cartegory-slider section-padding bg-section-2">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-bold">Top Categories</h3>
                        <p className="mb-0 text-capitalize">Select your favorite categories and purchase</p>
                    </div>
                    <div className="cartegory-box">

                        {/* Top category */}

                    </div>
                </div>
            </section>
            <section className="product-thumb-slider subscribe-banner p-5">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="text-center">
                            <h3 className="mb-0 fw-bold text-white">Get Latest Update by <br /> Subscribe Our Newslater</h3>
                            <div className="mt-3">
                                <input type="text" className="form-control form-control-lg rounded px-5 py-3"
                                    placeholder="Enter your email" />
                            </div>
                            <div className="mt-3 d-grid">
                                <button type="button" className="btn btn-lg btn-outline-light bubscribe-button px-5 py-3">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 fw-bold">Latest Blog</h3>
                        <p className="mb-0 text-capitalize">Check our latest news</p>
                    </div>
                    <div className="blog-cards">
                        <div className="row row-cols-1 row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src="assets/images/blog/01.webp" className="card-img-top rounded-0" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="posted-by">
                                                <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                                            </div>
                                            <div className="posted-date">
                                                <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                                        <p className="mb-0">Some quick example text to build on the card title and make.</p>
                                        <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="assets/images/blog/02.webp" className="card-img-top rounded-0" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="posted-by">
                                                <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                                            </div>
                                            <div className="posted-date">
                                                <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                                        <p className="mb-0">Some quick example text to build on the card title and make.</p>
                                        <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="assets/images/blog/03.webp" className="card-img-top rounded-0" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="posted-by">
                                                <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                                            </div>
                                            <div className="posted-date">
                                                <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                                        <p className="mb-0">Some quick example text to build on the card title and make.</p>
                                        <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;