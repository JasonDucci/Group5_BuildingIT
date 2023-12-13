import React from 'react';

function home() {
  return (
    <div>
      <header className="header">
          {/* Header Top Area Start */}
          <div className="header-top-area bg-dark">
            <div className="container-full px-50">
              <div className="row">
                <div className="col py-2 py-lg-0 d-flex flex-column align-items-center flex-md-row justify-content-center justify-content-md-between">
                  <div className="header-top-area-left-side d-flex">
                    {/* social Share Area */}
                    <div className="social-share d-flex gap-2 header-top-area-left-side-item">
                      <a className="social-share-link facebook" href="#" aria-label="facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="social-share-link twitter" href="#" aria-label="twitter">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a className="social-share-link instagram" href="#" aria-label="instagram">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a className="social-share-link youtube" href="#" aria-label="youtube">
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a className="social-share-link pinterest" href="#" aria-label="pinterest">
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </div>{/* social Share Area */}
                    <div className="contact-number header-top-area-left-side-item">
                      <a href="tel:+1234567890">
                        <i className="icon-rt-call-outline" />
                        <span>+1234567890</span>
                      </a>
                    </div>
                  </div>
                  <div className="header-top-area-right-side d-flex">
                    <div className="header-top-area-right-side-item">
                      <a href="#login-form-popup-actiove" data-bs-toggle="modal">
                        <i className="icon-rt-user" />
                        Sign in
                      </a>
                    </div>
                    {/* <ul class="header-top-area-right-side-item top-bar-item-menu">
                                <li>
                                    <a href="#">Languages <i class="fa-solid fa-chevron-down"></i></a>

                                    <ul class="top-bar-item-menu-dropdow">
                                        <li><a href="#" class="active">English</a></li>
                                        <li><a href="#">Germany</a></li>
                                        <li><a href="#">France</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="header-top-area-right-side-item top-bar-item-menu">
                                <li>
                                    <a href="#">Currencies <i class="fa-solid fa-chevron-down"></i></a>
                                    <ul class="top-bar-item-menu-dropdow">
                                        <li><a href="#" class="active">USD</a></li>
                                        <li><a href="#">Euro</a></li>
                                        <li><a href="#">GBP</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header Top Area End */}
          {/* Header Bottom Area Start */}
          <div className="hader-bottom-area sticky-header">
            <div className="container-full px-50">
              <div className="row align-items-center">
                <div className="col-4 col-lg-5">
                  {/* Main Menu Area Start */}
                  <nav className="nav-main-menu d-none d-lg-block">
                    <ul className="main-menu">
                      <li className="main-menu-item active">
                        <a href="index.html" className="main-menu-link">Home</a>
                        {/* <ul class="submenu">
                                        <li class="submenu-item"><a href="index.html" class="submenu-link">Home One</a></li>
                                        <li class="submenu-item"><a href="index-2.html" class="submenu-link">Home Two</a></li>
                                        <li class="submenu-item"><a href="index-3.html" class="submenu-link">Home Three </a></li>
                                    </ul> */}
                      </li>
                      <li className="main-menu-item has-children active">
                        <a href="index.html" className="main-menu-link">Collection</a>
                        <ul className="submenu">
                          <li className="submenu-item"><a href="European.html" className="submenu-link">European</a></li>
                          <li className="submenu-item"><a href="Asian.html" className="submenu-link">Asian</a></li>
                          <li className="submenu-item"><a href="AncientAmerica.html" className="submenu-link">AncientAmerica </a></li>
                          <li className="submenu-item"><a href="Ancient.html" className="submenu-link">Ancient</a></li>
                          <li className="submenu-item"><a href="African.html" className="submenu-link">African</a></li>
                          <li className="submenu-item"><a href="American.html" className="submenu-link">American </a></li>
                        </ul> 
                      </li>
                      <li className="main-menu-item active">
                        <a href="index.html" className="main-menu-link">Calendar</a>
                      </li>
                      <li className="main-menu-item active">
                        <a href="blog.html" className="main-menu-link">Blogs</a>
                      </li>
                      <li className="main-menu-item has-children active">
                        <a href="index.html" className="main-menu-link">OtherPage</a>
                        <ul className="submenu">
                          <li className="submenu-item"><a href="European.html" className="submenu-link">About us</a></li>
                          <li className="submenu-item"><a href="Asian.html" className="submenu-link">Contact us</a></li>
                          <li className="submenu-item"><a href="AncientAmerica.html" className="submenu-link">Store locator</a></li>
                        </ul> 
                      </li>
                      {/* <li class="main-menu-item has-children--mega">
                                    <a href="#" class="main-menu-link">Shop</a>
                                    <div class="megamenu megamenu--mega">
                                        <ul class="megamenu--mega-inner">
                                            <li class="megamenu-item">
                                                <h6 class="megamenu-title">LAYOUT</h6>
                                                <ul>
                                                    <li><a href="shop.html" class="megamenu-link">No Sidebar Grid</a></li>
                                                    <li><a href="shop-left-sidebar.html" class="megamenu-link">Left Sidebar Shop Grid</a></li>
                                                    <li><a href="shop-right-sidebar.html" class="megamenu-link">Right Sidebar Shop Grid </a></li>
                                                    <li><a href="shop-list-sidebar.html" class="megamenu-link">Right Sidebar Shop List </a></li>
                                                </ul>
                                            </li>
                                            <li class="megamenu-item">
                                                <h6 class="megamenu-title">FEATURES</h6>
                                                <ul>
                                                    <li><a href="shop-description-on-top.html" class="megamenu-link">Show description <span class="menu-label">On Top</span></a></li>
                                                    <li><a href="shop-description-on-bottom.html" class="megamenu-link">Show description <span class="menu-label">On Bottom</span></a></li>
                                                    <li><a href="shop-show-subcategories.html" class="megamenu-link">Show subcategories </a></li>
                                                    <li><a href="shop-no-sidebar-offcanvas.html" class="megamenu-link">No Sidebar Off – Canvas</a></li>
                                                </ul>
                                            </li>
                                            <li class="megamenu-item">
                                                <h6 class="megamenu-title">Shoping Pages</h6>
                                                <ul>
                                                    <li><a href="my-account.html" class="megamenu-link">My account</a></li>
                                                    <li><a href="checkout.html" class="megamenu-link">Checkout</a></li>
                                                    <li><a href="cart.html" class="megamenu-link">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html" class="megamenu-link">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li class="megamenu-item">
                                                <a href="shop.html">
                                                    <img src="assets/images/banners/menu-banner.png" alt="">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="main-menu-item has-children">
                                    <a href="#" class="main-menu-link">Product</a>
                                    <ul class="megamenu megamenu--mega-lavel-2">
                                        <li class="megamenu-item">
                                            <h6 class="megamenu-title">PRODUCT GALLERY</h6>
                                            <ul>
                                                <li><a href="product-details.html" class="megamenu-link">Simple Style</a></li>
                                                <li><a href="product-top-gallay-details.html" class="megamenu-link">Image Top</a></li>
                                                <li><a href="product-details-grid-1-column.html" class="megamenu-link">Grid - 1 column</a></li>
                                                <li><a href="product-details-grid-2-column.html" class="megamenu-link">Grid - 2 column</a></li>
                                                <li><a href="product-details-variation.html" class="megamenu-link">Gallery For Variation</a></li>
                                            </ul>
                                        </li>
                                        <li class="megamenu-item">
                                            <h6 class="megamenu-title">FEATURES</h6>
                                            <ul>
                                                <li><a href="product-details-variation-vertical-thumbs.html" class="megamenu-link">Vertical Thumbnails</a></li>
                                                <li><a href="product-details-variable.html" class="megamenu-link">Variable Product</a></li>
                                                <li><a href="product-details-countdown.html" class="megamenu-link">Countdown Product</a></li>
                                                <li><a href="product-details-tab-accordion.html" class="megamenu-link">Tab Accordion</a></li>
                                                <li><a href="product-details-tab-accordion-vertical.html" class="megamenu-link">Tab Accordion Vertical</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                      {/*<li class="main-menu-item has-children">
                                    <a href="#" class="main-menu-link">Page</a>
                                    <ul class="megamenu megamenu--mega-lavel-2">
                                        <li class="megamenu-item">
                                            <h6 class="megamenu-title">ACCOUNT PAGE</h6>
                                            <ul>
                                                <li><a href="my-account.html" class="megamenu-link">My account</a></li>
                                                <li><a href="checkout.html" class="megamenu-link">Checkout</a></li>
                                                <li><a href="cart.html" class="megamenu-link">Shopping Cart</a></li>
                                                <li><a href="wishlist.html" class="megamenu-link">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li class="megamenu-item">
                                            <h6 class="megamenu-title">OTHER PAGE</h6>
                                            <ul>
                                                <li><a href="about-us.html" class="megamenu-link">About Us</a></li>
                                                <li><a href="contact-us.html" class="megamenu-link">Contact Us</a></li>
                                                <li><a href="store-locator.html" class="megamenu-link">Store Locator</a></li>
                                                <li><a href="404-page.html" class="megamenu-link">404 Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                      {/* <li class="main-menu-item has-children">
                                    <a href="blog.html" class="main-menu-link">Blogs</a>
                                    <ul class="submenu">
                                        <li><a href="blog.html" class="submenu-link">Blog Grid</a></li>
                                        <li><a href="blog-mask.html" class="submenu-link">Blog Mask</a></li>
                                        <li><a href="blog-list.html" class="submenu-link">Blog List</a></li>
                                        <li><a href="blog-left-sidebar.html" class="submenu-link">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html" class="submenu-link">Blog Right Sidebar</a></li>
                                        <li><a href="blog-no-sidebar.html" class="submenu-link">No Sidebar</a></li>
                                        <li><a href="blog-details.html" class="submenu-link">Blog Post Details</a></li>
                                        <li><a href="blog-details-two.html" class="submenu-link">Blog Post Details Two</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                    </ul></nav>{/* Main Menu Area End */}
                  {/* Mobile Menu Toggole Button Start */}
                  <button className="header-action-item d-lg-none mobile-menu-action" aria-label="Mobile Menu Action Button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile-menu">
                    <i className="fa-solid fa-bars" />
                  </button> {/* Mobile Menu Toggole Button End */}
                  {/* Search Button Start */}
                  <button className="header-action-item d-md-none" title="Search" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button> {/* Search Button End */}
                </div>
                <div className="col-4 col-lg-2">
                  {/* Logo Start */}
                  <div className="logo text-center">
                    <a href="index.html">
                      <img src="assets/images/logo/avatar3.png" height={40} width={120} alt="logo" />
                    </a>
                  </div>{/* Logo Start */}
                </div>
                <div className="col-4 col-lg-5">
                  {/* Heaer Action Area Start */}
                  <div className="header-action d-flex justify-content-end">
                    <button className="header-action-item d-none d-md-block" title="Search" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <a href="wishlist.html" className="header-action-item" title="Wishlist">
                      <i className="fa-regular fa-heart" />
                      <span className="header-action-item-count">(3)</span>
                    </a>
                    <button className="header-action-item" title="Cart Bag" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart">
                      <i className="fa-solid fa-bag-shopping" />
                      <span className="header-action-item-count">(3)</span>
                    </button>
                  </div> {/* Heaer Action Area End */}
                </div>
              </div>
            </div>
          </div>
          {/* Header Bottom Area End */}
        </header>
        <main>
          {/* Hero Slider Section Start */}
          <section className="hero-area">
            {/* Swiper Slider Main Start */}
            <div className="swiper hero-slider-active">
              {/* Swiper Wrapper Start */}
              <div className="swiper-wrapper">
                {/* Swiper Slide Item Start */}
                <div className="swiper-slide">
                  <div className="hero-slider hero-slider-one bg-gray">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-sm-6 order-2 order-sm-1">
                          <div className="hero-slider-content-inner">
                            <h4 className="hero-slider-sub-title">New Collections</h4>
                            <h1 className="hero-slider-title">Explore our <br /> famous masterpieces in the museum's permanent exhibition</h1>
                            <a href="shop.html" className="btn btn-lg btn-dark mt-2 mt-md-5">Explore</a>
                          </div>
                        </div>
                        <div className="col-sm-6 order-1 order-sm-2">
                          <div className="hero-slider-inner-images">
                            <div className="hero-slider-inner-image-one">
                              <img src="assets/images/sliders/home-full-width-2.png" className="img-fluid" width={480} height={480} alt="Image" />
                            </div>
                            <div className="hero-slider-inner-image-two">
                              <img src="assets/images/homepage_img/vango3.webp" className="img-fluid" width={370} height={480} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* Swiper Slide Item End */}
                {/* Swiper Slide Item Start */}
                <div className="swiper-slide">
                  <div className="hero-slider hero-slider-one bg-gray">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-sm-6 order-2 order-sm-1">
                          <div className="hero-slider-content-inner">
                            <h4 className="hero-slider-sub-title">Now on view</h4>
                            <h1 className="hero-slider-title">Along the Seine<br />Explore how the river Seine near Paris, had a significant impact on artists Van Gogh</h1>
                            <a href="shop.html" className="btn btn-lg btn-dark mt-2 mt-md-5">Discover more</a>
                          </div>
                        </div>
                        <div className="col-sm-6 order-1 order-sm-2">
                          <div className="hero-slider-inner-images">
                            <div className="hero-slider-inner-image-one">
                              <img src="assets/images/sliders/home-full-width-2.png" className="img-fluid" width={480} height={480} alt="Image" />
                            </div>
                            <div className="hero-slider-inner-image-two">
                              <img src="assets/images/homepage_img/vango.jpeg" className="img-fluid" width={370} height={480} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* Swiper Slide Item End */}
              </div> {/* Swiper Wrapper End */}
              {/* swiper Navigation */}
              <div className="hero-swiper-button-next swiper-navigation-next"><i className="fa-solid fa-chevron-right" /></div>
              <div className="hero-swiper-button-prev swiper-navigation-prev"><i className="fa-solid fa-chevron-left" /></div>
              {/* swiper pagination */}
              <div className="hero-swiper-pagination swiper-pagination-button text-center position-absolute mb-3" />
            </div>
            {/* Swiper Slider Main End */}
          </section>
          {/* Hero Slider Section End */}
          {/* Banner Section Start */}
          <section className="banner-area-box">
            <div className="container">
              <div className="row banner-inner-box gy-6">
                <div className="col-lg-6 col-md-6">
                  <div className="banner-images-one">
                    <a href="blog-details.html" className="thumbnail">
                      <img src="assets/images/homepage_img/thomas.webp" width={680} height={326} className="img-fluid" alt="Banner images" loading="lazy" />
                    </a>
                    <div className="banner-title">
                      <h3><a href="shop.html">The Kimbell Acquires Celebrated Landscape Painting</a></h3>
                      <h5> by Thomas Gainsborough</h5>
                      <div className="button-box mt-5">
                        <a href="shop.html" className="text-btn-normal">Discover Now <i className="fa-solid fa-arrow-right-long" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="banner-images-one">
                    <a href="blog-details.html" className="thumbnail">
                      <img src="assets/images/homepage_img/mark_calendar.webp" width={680} height={326} className="img-fluid" alt="Banner images" loading="lazy" />
                    </a>
                    <div className="banner-title">
                      <h3><a href="shop.html">Mark Your Calendar for</a></h3>
                      <h5>the Kimbell's 2023-24 Exhibitions</h5>         
                      <div className="button-box mt-5">
                        <a href="shop.html" className="text-btn-normal">Discover Now <i className="fa-solid fa-arrow-right-long" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Section End */}
          {/* Product Section Start */}
          <section className="product-section section-space-ptb">
            <div className="container">
              {/* Section Title Area Start */}
              <div className="section-title-area text-center">
                <h2 className="section-title">Collections</h2>
                <p className="section-desciption">Explore our famous masterpieces in the museum's permanent exhibition </p>
              </div>{/* Section Title Area End */}
              {/* Swiper Slider Main Start */}
              <div className="swiper product-row-2-slider-active position-relative">
                {/* Swiper Wrapper Start */}
                <div className="swiper-wrapper">
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection1.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Henry Moore, Figure in a Shelter</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1983</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection2.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                          {/* <span class="product-card-label">Sale</span> */}
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Joan Miró, Woman Addressing the Public: Project for a Monument</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1980-81</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection3.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Isamu Noguchi, Constellation</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1980-83</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection4.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Barbara Hepworth, Oval Form (Trezion)</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          {/* <span class="product-card-old-price"><del>$80.00</del></span> */}
                          <span className="product-card-regular-price">Cast in 1961-63</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection5.jpg" alt="Product Image primary 5" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Henri Matisse, L'Asie (Asia)</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1946</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection6.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Louis Kahn, Temple of Apollo, Corinth, at Midday</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1951</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection7.jpg" alt="Product Image primary 7" width={340} height={320} loading="lazy" />
                          {/* <span class="product-card-label">Sale</span> */}
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Piet Mondrian, Abstraction</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1939-42</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection8.jpg" alt="Product Image primary 1" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Louis Kahn, Temple of Apollo, Corinth, at Sunrise</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1951</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection9.jpg" alt="Product Image primary 9" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Fernand Léger, Walking Flower</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1952</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                    {/* Product Card Start */}
                    <div className="product-card">
                      <div className="product-card-thumb-area">
                        <a href="product-details.html" className="product-card-thumb">
                          <img className="product-card-thumb-primary" src="assets/images/homepage_img/Collection10.jpg" alt="Product Image primary 10" width={340} height={320} loading="lazy" />
                        </a>
                        <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
                      </div>
                      <ul className="product-card-action-links">
                        <li className="product-card-action-item">
                          <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                            <i className="fa-regular fa-heart" />
                          </a>
                        </li>
                      </ul>
                      <div className="product-card-content">
                        <h4 className="product-card-title">
                          <a href="product-details.html">Louis Kahn, Temple of Apollo, Corinth, at Midday</a>
                        </h4>
                        <div className="product-card-price">
                          <span className="visually-hidden">Price</span>
                          <span className="product-card-regular-price">Cast in 1951</span>
                        </div>
                        <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
                      </div>
                    </div> {/* Product Card End */}
                  </div> {/* Swiper Slide Item End */}
                </div>
                {/* swiper Navigation */}
                <div className="product-row-2-swiper-button-next swiper-navigation-next z-1"><i className="fa-solid fa-chevron-right" /></div>
                <div className="product-row-2-swiper-button-prev swiper-navigation-prev z-1"><i className="fa-solid fa-chevron-left" /></div>
              </div>
              {/* Swiper Slider Main End */}
            </div>
          </section>
          {/* Product Section End */}
          {/* Category Section Start */}
          <section className="category-section section-space-pb">
            <div className="container">
              <div className="swiper shop-subcategories-slider-active">
                <div className="swiper-wrapper">
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event1.webp" alt="Image" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Event</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Pictures and Pages</span>
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event2.jpg" alt="Image" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Tour</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Public Tours</span>
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event3.jpg" alt="Image" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Tour</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Public Tours</span><br />
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event4.jpg" alt="Polo Shirt" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Music</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Happy Tour</span>
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event5.jpg" alt="Image" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Event</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Teen hangout</span>
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <div className="shop-category-item">
                      <a href="#" className="shop-category-thumb">
                        <img src="assets/images/homepage_img/event6.jpg" alt="t shirt" width={202} height={202} loading="lazy" />
                      </a>
                      <div className="shop-category-summary">
                        <h6 className="shop-category-name">Workshop</h6>
                        <p className="shop-category-products-count">
                          <span className="cat-count-label">Kids Drop-In Studio</span>
                        </p>
                      </div>
                    </div>
                  </div>{/* Swiper Slide Item End */}
                </div>
                {/* swiper pagination */}
                <div className="shop-subcategory-swiper-pagination mt-4 text-center" />
              </div>
            </div>
          </section>
          {/* Category Section End */}
          {/* Patner Brand Section Start */}
          <section className="patner-brand-section section-space-ptb border-top-1">
            <div className="container">
              <h2 className="visually-hidden">Patner Brand Section</h2>
              {/* Swiper Slider Main Start */}
              <div className="swiper patner-brand-slider-active">
                {/* Swiper Wrapper Start */}
                <div className="swiper-wrapper">
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand1.png" width={250} height={56} alt="Brand 01" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand2.png" width={250} height={56} alt="Brand 02" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand3.png" width={250} height={56} alt="Brand 03" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand4.png" width={250} height={56} alt="Brand 04" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand5.png" width={250} height={56} alt="Brand 05" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                  {/* Swiper Slide Item Start */}
                  <div className="swiper-slide">
                    <a href="#" className="single-patner-brand">
                      <img src="assets/images/homepage_img/brand6.png" width={250} height={56} alt="Brand 07" loading="lazy" />
                    </a>
                  </div> {/* Swiper Slide Item End */}
                </div>
                {/* Swiper Wrapper End */}
              </div>
              {/* Swiper Slider Main End */}
            </div>
          </section>
          {/* Patner Brand Section End */}
          {/* Instagram Section Start */}
          <section className="instagram-section position-relative">
            <div className="instagram-inner-button text-center">
              <a href="#" className="instagram-title d-inline-flex gap-2 align-items-center">
                <svg className="svg-inline--fa fa-instagram fs-6" aria-hidden="true" data-fa-processed aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram with #Emree
              </a>
            </div>
            <div className="overflow-hidden container-fulid">
              <h3 className="visually-hidden">Instagram Profile</h3>
              <div className="instagram-items-wrap">
                <div className="instagram-items-grid">
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social1.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social2.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social3.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social4.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social5.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social1.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social2.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social3.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/social4.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                  <a href="#" className="instagram-item">
                    <img src="assets/images/homepage_img/Collection5.jpg" alt="Instagram Image" width={370} height={370} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Instagram Section End */}
        </main>
        {/* Product Modal Start */}
        <div className="modal fade" id="login-form-popup-actiove" aria-hidden="true" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered sign-in-modal">
            <div className="modal-content">
              <button type="button" className="btn-close position-absolute end-0 p-2" data-bs-dismiss="modal" aria-label="Close" />
              {/* Logo Start */}
              <div className="logo text-center pt-2">
                <a href="index.html">
                  <img src="assets/images/logo/logo.svg" height={30} width={120} alt="logo" />
                </a>
              </div>{/* Logo Start */}
              <div className="sign-in-modal-body px-3 pb-5">
                <div className="modal-box-wrapper">
                  <ul className="nav sign-in-tablist" role="tablist">
                    <li className="sign-in-tab--item nav-item" role="presentation">
                      <a className="sign-in-tab--link active" data-bs-toggle="tab" href="#tab_list_06" role="tab" aria-selected="true">Login</a>
                    </li>
                    <li className="sign-in-tab--item nav-item" role="presentation">
                      <a className="sign-in-tab--link" data-bs-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false" tabIndex={-1}>Our Register</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                      <form action="#" className="account-form-box max-w-400 mx-auto">
                        <div className="single-input-gruop">
                          <label className="single-input-label" htmlFor="login-username">Username or email address*</label>
                          <input className="single-input-fild" type="text" id="login-username" />
                        </div>
                        <div className="single-input-gruop">
                          <label className="single-input-label" htmlFor="login-password">Password*</label>
                          <input className="single-input-fild" type="password" id="login-password" />
                        </div>
                        <div className="checkbox-wrap mt-3 mb-4 d-flex align-items-center justify-content-between fs-16">
                          <label className="label-for-checkbox d-flex gap-1 align-items-center">
                            <input className="input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <span>Remember me</span>
                          </label>
                          <a href="#">Lost your password?</a>
                        </div>
                        <div className="button-box">
                          <a href="#" className="btn btn-full btn-md btn-primary">Log in</a>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                      <form action="#" className="account-form-box  max-w-400 mx-auto">
                        <div className="single-input-gruop">
                          <label className="single-input-label" htmlFor="register-name">Username*</label>
                          <input className="single-input-fild" type="text" id="register-name" />
                        </div>
                        <div className="single-input-gruop">
                          <label className="single-input-label" htmlFor="register-email">Email address*</label>
                          <input className="single-input-fild" type="email" id="register-email" />
                        </div>
                        <div className="single-input-gruop">
                          <label className="single-input-label" htmlFor="register-password">Password*</label>
                          <input className="single-input-fild" type="password" id="register-password" />
                        </div>
                        <p className="mt-3 text-center">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="privacy-policy-link">privacy policy</a>.</p>
                        <div className="button-box mt-4">
                          <button type="submit" className="btn btn-full btn-primary btn-md">Register</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Product Modal End */}
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas-cart">
          <div className="offcanvas-cart-wrap">
            <div className="offcanvas-cart-header">
              <div className="offcanvas-cart-title">
                YOUR CART
              </div>
              <button type="button" className="btn-close text-end" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div className="cart-product">
                {/* Cart Product Item Start */}
                <div className="cart-product-item">
                  <a href="product-details.html" className="cart-product-thum">
                    <img src="assets/images/products/product-1.jpg" alt="Product Cart One" />
                  </a>
                  <div className="cart-product-content">
                    <h6 className="cart-product-content-title">
                      <a href="product-details.html">Augue nisi non neque</a>
                    </h6>
                    <div className="cart-product-content-bottom">
                      <span className="cart-product-content-quantity">1 × </span>
                      <span className="cart-product-content-amount">
                        <bdi>
                          <span className="visually-hidden">Price:</span>
                          <span className="price-currency-symbol">$</span>75.00
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <button className="cart-product-close">×</button>
                </div> {/* Cart Product Item End */}
                {/* Cart Product Item Start */}
                <div className="cart-product-item">
                  <a href="product-details.html" className="cart-product-thum">
                    <img src="assets/images/products/product-2.jpg" alt="Product Cart One" />
                  </a>
                  <div className="cart-product-content">
                    <h6 className="cart-product-content-title">
                      <a href="product-details.html">Sit voluptatem rhoncus</a>
                    </h6>
                    <div className="cart-product-content-bottom">
                      <span className="cart-product-content-quantity">1 × </span>
                      <span className="cart-product-content-amount">
                        <bdi>
                          <span className="visually-hidden">Price:</span>
                          <span className="price-currency-symbol">$</span>79.00
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <button className="cart-product-close">×</button>
                </div> {/* Cart Product Item End */}
                {/* Cart Product Item Start */}
                <div className="cart-product-item">
                  <a href="product-details.html" className="cart-product-thum">
                    <img src="assets/images/products/product-3.jpg" alt="Product Cart One" />
                  </a>
                  <div className="cart-product-content">
                    <h6 className="cart-product-content-title">
                      <a href="product-details.html">LAUDANTIUM ENIM FRINGI</a>
                    </h6>
                    <div className="cart-product-content-bottom">
                      <span className="cart-product-content-quantity">1 × </span>
                      <span className="cart-product-content-amount">
                        <bdi>
                          <span className="visually-hidden">Price:</span>
                          <span className="price-currency-symbol">$</span>79.00
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <button className="cart-product-close">×</button>
                </div> {/* Cart Product Item End */}
              </div>
              <div className="offcanvas-cart-footer">
                <div className="mini-cart-total">
                  <strong className="mini-cart-subtotal">Subtotal</strong>
                  <span className="mini-cart-amount">
                    <bdi>
                      <span className="currency-symbol">$</span>279.00
                    </bdi>
                  </span>
                </div>
                <div className="cart-button-action-wrap gap-2 d-flex flex-column">
                  <a href="cart.html" className="btn-outline-dark btn btn-full btn-lg">View Cart</a>
                  <a href="checkout.html" className="btn-outline-dark btn btn-full btn-lg">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-top offcanvas-search-area" tabIndex={-1} id="offcanvas-search">
          <div className="offcanvas-search-wrap">
            <div className="offcanvas-search-header">
              <div className="offcanvas-search-title">
                <span className="visually-hidden">Search</span>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-search-body">
              <div className="offcanvas-search-box">
                <form action="#" className="offcanvas-search-form">
                  <input type="text" placeholder="Search..." className="offcanvas-search-input" />
                  <button type="submit" className="offcanvas-search-submit"> <i className="fa-solid fa-magnifying-glass" /></button>
                </form>
                <div className="offcanvas-search-content">
                  <div className="offcanvas-search-keywords-list">
                    <p className="offcanvas-search-key-title">Popular searches :</p>
                    <ul className="offcanvas-search-popular d-flex gap-1">
                      <li><a href="#" className="btn btn-xs btn-gray btn-rounde-2">men</a></li>
                      <li><a href="#" className="btn btn-xs btn-gray btn-rounde-2">clothing</a></li>
                      <li><a href="#" className="btn btn-xs btn-gray btn-rounde-2">women</a></li>
                      <li><a href="#" className="btn btn-xs btn-gray btn-rounde-2">kids</a></li>
                      <li><a href="#" className="btn btn-xs btn-gray btn-rounde-2">new</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvas-mobile-menu">
          <div className="offcanvas-header">
            <h6>Menu</h6>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <nav className="navbar-mobile-menu">
              <ul className="mobile-menu">
                <li className="mobile-menu-item">
                  <a href="#" className="mobile-menu-link">
                    Demos
                    <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                  </a>
                  <ul className="mega-menu mobile-menu--mega">
                    <li><a href="index.html" className="sub-menu-link">Home One</a></li>
                    <li><a href="index-2.html" className="sub-menu-link">Home Two</a></li>
                    <li><a href="index-3.html" className="sub-menu-link">Home Three</a></li>
                  </ul>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="mobile-menu-link">Shop <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span></a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#" className="sub-menu-link">
                        LAYOUT
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="shop.html" className="megamenu-link">No Sidebar Grid</a></li>
                        <li><a href="shop-left-sidebar.html" className="megamenu-link">Left Sidebar Shop Grid</a></li>
                        <li><a href="shop-right-sidebar.html" className="megamenu-link">Right Sidebar Shop Grid </a></li>
                        <li><a href="shop-list-sidebar.html" className="megamenu-link">Right Sidebar Shop List </a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="sub-menu-link">
                        FEATURES
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="shop-description-on-top.html" className="megamenu-link">Show description <span className="menu-label">On Top</span></a></li>
                        <li><a href="shop-description-on-bottom.html" className="megamenu-link">Show description <span className="menu-label">On Bottom</span></a></li>
                        <li><a href="shop-show-subcategories.html" className="megamenu-link">Show subcategories </a></li>
                        <li><a href="shop-no-sidebar-offcanvas.html" className="megamenu-link">No Sidebar Off – Canvas</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="mobile-menu-link">Product <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span></a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#" className="sub-menu-link">
                        PRODUCT GALLERY
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="product-details.html" className="megamenu-link">Simple Style</a></li>
                        <li><a href="product-top-gallay-details.html" className="megamenu-link">Image Top</a></li>
                        <li><a href="product-details-grid-1-column.html" className="megamenu-link">Grid - 1 column</a></li>
                        <li><a href="product-details-grid-2-column.html" className="megamenu-link">Grid - 2 column</a></li>
                        <li><a href="product-details-variation.html" className="megamenu-link">Gallery For Variation</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="sub-menu-link">
                        FEATURES
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="product-details-variation-vertical-thumbs.html" className="megamenu-link">Vertical Thumbnails</a></li>
                        <li><a href="product-details-variable.html" className="megamenu-link">Variable Product</a></li>
                        <li><a href="product-details-countdown.html" className="megamenu-link">Countdown Product</a></li>
                        <li><a href="product-details-tab-accordion.html" className="megamenu-link">Tab Accordion</a></li>
                        <li><a href="product-details-tab-accordion-vertical.html" className="megamenu-link">Tab Accordion Vertical</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="mobile-menu-link">Page <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span></a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#" className="sub-menu-link">
                        ACCOUNT PAGE
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="my-account.html" className="megamenu-link">My account</a></li>
                        <li><a href="checkout.html" className="megamenu-link">Checkout</a></li>
                        <li><a href="cart.html" className="megamenu-link">Shopping Cart</a></li>
                        <li><a href="wishlist.html" className="megamenu-link">Wishlist</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="sub-menu-link">
                        OTHER PAGE
                        <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                      </a>
                      <ul className="sub-menu">
                        <li><a href="about-us.html" className="megamenu-link">About Us</a></li>
                        <li><a href="contact-us.html" className="megamenu-link">Contact Us</a></li>
                        <li><a href="store-locator.html" className="megamenu-link">Store Locator</a></li>
                        <li><a href="404-page.html" className="megamenu-link">404 Page</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mobile-menu-item">
                  <a href="#" className="mobile-menu-link">
                    Blogs
                    <span className="menu-expand"><i className="fa-solid fa-chevron-down" /></span>
                  </a>
                  <ul className="mega-menu mobile-menu--mega">
                    <li><a href="blog.html" className="sub-menu-link">Blog Grid</a></li>
                    <li><a href="blog-mask.html" className="sub-menu-link">Blog Mask</a></li>
                    <li><a href="blog-list.html" className="sub-menu-link">Blog List</a></li>
                    <li><a href="blog-left-sidebar.html" className="sub-menu-link">Blog Left Sidebar</a></li>
                    <li><a href="blog-right-sidebar.html" className="sub-menu-link">Blog Right Sidebar</a></li>
                    <li><a href="blog-no-sidebar.html" className="sub-menu-link">No Sidebar</a></li>
                    <li><a href="blog-details.html" className="sub-menu-link">Blog Post Details</a></li>
                    <li><a href="blog-details-two.html" className="sub-menu-link">Blog Post Details Two</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Product Modal Start */}
        <div className="modal fade" id="product-modal-active" aria-hidden="true" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered product-quick-view-modal">
            <div className="modal-content">
              <button type="button" className="btn-close position-absolute end-0 p-2" data-bs-dismiss="modal" aria-label="Close" />
              <div className="product-item-details px-3 py-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="swiper product-details-lg-active">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img className="w-full" src="assets/images/large-products/large-product-01.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img className="w-full" src="assets/images/large-products/large-product-02.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img className="w-full" src="assets/images/large-products/large-product-03.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img className="w-full" src="assets/images/large-products/large-product-04.jpg" alt="image" />
                        </div>
                      </div>
                      <div className="product-details-button-next product-details-navigation-next"><i className="fa-solid fa-chevron-right" /></div>
                      <div className="product-details-button-prev product-details-navigation-prev"><i className="fa-solid fa-chevron-left" /></div>
                    </div>
                    <div className="swiper product-details-sm-thum-active mt-2">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="assets/images/large-products/large-product-01.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="assets/images/large-products/large-product-02.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="assets/images/large-products/large-product-03.jpg" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="assets/images/large-products/large-product-04.jpg" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-item-details-box">
                      <h4 className="product-item-details-title">Rendering sofa isolated</h4>
                      <div className="product-item-details-rating d-flex align-items-center gap-2 text-black">
                        <div className="product-item-details-rating-list d-flex">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <a href="#" className="fs-16">(1 customer review)</a>
                      </div>
                      <div className="product-card-price mt-2">
                        <span className="product-card-old-price"><del>$60.00</del></span>
                        <span className="product-card-regular-price">$50.00</span>
                      </div>
                      <p className="product-item-details-description mt-2 fs-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                      <div className="product-item-stock in-stock mb-3">
                        <span className="stock-label visually-hidden">Availability:</span>
                        <span className="product-item-stock-in">994 In Stock</span>
                      </div>
                      <div className="product-item-action-box d-flex gap-2 align-items-center">
                        <form action="#" className="product-item-quantity">
                          <button className="product-item-quantity-decrement product-item-quantity-button" type="button">-</button>
                          <input type="text" className="product-item-quantity-input" defaultValue={1} />
                          <button className="product-item-quantity-increment product-item-quantity-button" type="button">+</button>
                        </form>
                        <button className="btn btn-primary btn-lg">Add to cart</button>
                      </div>
                      <a href="wishlist.html" className="product-item-wishlist-action mt-3">
                        <i className="fa-regular fa-heart" /><span>Add to wishlist</span>
                      </a>
                      <div className="social-share-wrap d-flex gap-1 mt-3">
                        <p className="fs-16">SHARE: </p>
                        <div className="social-share social-share-in-color d-flex gap-2">
                          <a className="social-share-link facebook" href="#" aria-label="facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="social-share-link twitter" href="#" aria-label="twitter">
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                          <a className="social-share-link instagram" href="#" aria-label="instagram">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Product Modal End */}
        {/* Footer Area Start */}
        <footer className="footer-area bg-gray">
          <div className="footer-top-area section-space-pt">
            <div className="container-xxl">
              <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-8">
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3">
                    <div className="col">
                      {/* Footer Widget Start */}
                      <div className="footer-widget">
                        <h5 className="footer-widget--title" title="Company">Company</h5>
                        <ul className="widget--menu">
                          <li className="widget--menu-item"><a href="wishlist.html" className="widget--menu-link">Wishlist</a></li>
                          <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                          <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                          <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">Privacy Policy</a></li>
                          <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                        </ul>
                      </div> {/* Footer Widget End */}
                    </div>
                    <div className="col">
                      {/* Footer Widget Start */}
                      <div className="footer-widget">
                        <h5 className="footer-widget--title" title="Information">Information</h5>
                        <ul className="widget--menu">
                          <li className="widget--menu-item"><a href="checkout.html" className="widget--menu-link">Privacy Policy</a></li>
                          <li className="widget--menu-item"><a href="checkout.html" className="widget--menu-link">Checkout</a></li>
                          <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                          <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                          <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                        </ul>
                      </div> {/* Footer Widget End */}
                    </div>
                    <div className="col">
                      {/* Footer Widget Start */}
                      <div className="footer-widget">
                        <h5 className="footer-widget--title" title="Help">Help</h5>
                        <ul className="widget--menu">
                          <li className="widget--menu-item"><a href="wishlist.html" className="widget--menu-link">Wishlist</a></li>
                          <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                          <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                          <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">Privacy Policy</a></li>
                          <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                        </ul>
                      </div> {/* Footer Widget End */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-4">
                  {/* Footer Widget Start */}
                  <div className="footer-widget">
                    <h5 className="footer-widget--title" title="Sign Up Now & Get 10% Off">Sign Up Now &amp; Get 10% Off</h5>
                    <div className="widget-newsletter">
                      <p className="fs-16 mb-3">Be the first to hear about special offers, new arrivals &amp; more.</p>
                      <form action="#" className="widget-newsletter-from mb-4">
                        <input type="text" className="widget-newsletter-input" placeholder="Enter your email address" />
                        <button className="btn btn-dark btn-lg widget-newsletter-button" type="submit">Subscribe</button>
                      </form>
                      <p className="mb-0">Send me news and offers from the DevMove. I can unsubscribe at any time.</p>
                      <p>I have read the DevMove <a href="#" className="text-black fw-medium text-decoration-underline">Privacy Policy</a>. Offer details, financial incentives and exclusions available here.</p>
                    </div>
                  </div>{/* Footer Widget End */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom bg-dark py-3">
            <div className="container">
              <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                <p className="text-white mb-md-0">Copyright © <a href="#">Emree</a>. All Rights Reserved.</p>
                <div className="payment">
                  <img src="assets/images/others/payment.png" width={286} height={23} alt="payment image" />
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Area End */}
    </div>
  )
}

export default home
