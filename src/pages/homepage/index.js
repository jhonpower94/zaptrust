import React from "react";
import "./assets/css/bootstrap.scoped.css";
import "./assets/css/fontawesome.scoped.css";
import "./assets/css/jquery-ui.scoped.css";
import "./assets/css/arafat-font.scoped.css";
import "./assets/css/style.scoped.css";
import "./assets/css/plugin/nice-select.scoped.css";
import "./assets/css/plugin/slick.scoped.css";
import "./assets/css/plugin/animate.scoped.css";

function HomeIndex() {
  return (
    <>
      {/* start preloader */}
     
      {/* end preloader */}
      {/* Scroll To Top Start*/}
      
      {/* Scroll To Top End */}
      {/* header-section start */}
      <header className="header-section">
        <div className="overlay">
          <div className="container">
            <div className="row d-flex header-area">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index">
                  <img
                    src="assets/images/logo.png"
                    className="logo"
                    alt="logo"
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-content"
                >
                  <i className="fas fa-bars" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbar-content"
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="index"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="loan">
                        Home Loans
                      </a>
                    </li>
                  </ul>
                  <div className="right-area header-action d-flex align-items-center">
                    <a href="login" className="cmn-btn">
                      Online Portal
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* header-section end */}
      {/* banner-section start */}
      <section className="banner-section">
        <div className="overlay">
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area section-text justify-content-center">
                      <h4 className="sub-title">Simple. Transparent. Secure</h4>
                      <h1 className="title">Banking Solutions</h1>
                      <p className="xlr">
                        Products and services designed to help you reach your
                        financial goals.
                      </p>
                    </div>
                    <div className="bottom-area">
                      <a href="register" className="cmn-btn">
                        Open an Account
                      </a>
                      <a href="loan" className="cmn-btn second">
                        Apply for a loan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-3">
                <h4>Partners</h4>
              </div>
              <div className="col-md-9 col-9">
                <div className="partner-box partner-carousel">
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-1.png" alt="image" />
                    </div>
                  </div>
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-2.png" alt="image" />
                    </div>
                  </div>
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-3.png" alt="image" />
                    </div>
                  </div>
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-4.png" alt="image" />
                    </div>
                  </div>
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-5.png" alt="image" />
                    </div>
                  </div>
                  <div className="single">
                    <div className="item">
                      <img src="assets/images/partner-2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* Features In start */}
      <section className="features-section">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <img src="assets/images/icon/notification.png" alt="icon" />
                  </span>
                  <h5 className="sub-title">Smart Banking</h5>
                  <h2 className="title">Real time Alerts</h2>
                  <p>
                    Stay informed on the latest happenings on your account.
                    Recieve alerts on deposits, credits, loan approvals and etc.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/check.png" alt="icon" />
                      </span>
                      <span>Lightning fast transactions.</span>
                    </li>
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/check.png" alt="icon" />
                      </span>
                      <span>
                        No maintenance fees. No minimum balance. No overdrafts.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="img-area">
                  <img src="assets/images/feature-item-1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      {/* Features In start */}
      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 text-start cus-ord">
                <div className="img-area">
                  <img src="assets/images/feature-item-2.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <img src="assets/images/icon/sheled.png" alt="icon" />
                  </span>
                  <h5 className="sub-title">Safe Deposits</h5>
                  <h2 className="title">The Safest Deposit bank</h2>
                  <p>
                    Federal Union Credit helps over 2 million customers achieve
                    their financial goals by helping them save and invest with
                    ease. All deposits are insured by the FDIC. For more
                    information about FDIC insurance coverage of transaction
                    accounts, visit fdic.gov
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/check.png" alt="icon" />
                      </span>
                      <span>Insured Deposits.</span>
                    </li>
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/check.png" alt="icon" />
                      </span>
                      <span>International Transactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      {/* Solutions Business In start */}
      <section className="solutions-business">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header text-center">
                  <h5 className="sub-title">
                    Open your account from anywhere in the world
                  </h5>
                  <h2 className="title">Solutions for Every Business Need.</h2>
                  <p>
                    Power up your business with a full-stack online bank account
                    that fits your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              <div className="col-lg-4 col-md-6">
                <div className="single-box text-center">
                  <div className="thumb d-flex justify-content-center align-items-center">
                    <img src="assets/images/icon/checking.png" alt="checking" />
                  </div>
                  <div className="content">
                    <h5>Checking Account</h5>
                    <p>
                      Choose from our checking options that allow you to earn
                      interest, avoid fees, and easily manage your account.
                    </p>
                    <a href="register" className="btn-arrow">
                      Open Account
                      <img
                        src="assets/images/icon/arrow-right.png"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-box text-center">
                  <div className="thumb d-flex justify-content-center align-items-center">
                    <img src="assets/images/icon/savings.png" alt="checking" />
                  </div>
                  <div className="content">
                    <h5>Savings Accounts</h5>
                    <p>
                      Save for your goals and watch your money grow with a CD, a
                      money market account, a savings account.Your future starts
                      now.
                    </p>
                    <a href="register" className="btn-arrow">
                      Start Saving
                      <img
                        src="assets/images/icon/arrow-right.png"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-box text-center">
                  <div className="thumb d-flex justify-content-center align-items-center">
                    <img src="assets/images/icon/business.png" alt="checking" />
                  </div>
                  <div className="content">
                    <h5>Business Account</h5>
                    <p>
                      Take charge of your business banking with a business bank
                      account. Services including virtual cards, team management
                      and more.
                    </p>
                    <a href="register" className="btn-arrow">
                      Open Account
                      <img
                        src="assets/images/icon/arrow-right.png"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Business In end */}
      {/* Call to action In start */}
      <section className="call-action">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="main-content">
                  <div className="section-header text-center">
                    <h2 className="title">
                      <span>Ready to make the leap?</span>Let us help you.
                    </h2>
                  </div>
                  <div className="bottom-area text-center">
                    <a href="register" className="cmn-btn">
                      Open Account
                    </a>
                    <a href="contact" className="cmn-btn second">
                      Get in touch with our team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to action In end */}
      {/* Financial Planning In start */}
      <section className="financial-planning">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-6 col-lg-5">
                <div className="section-text">
                  <h5 className="sub-title">Financial Planning</h5>
                  <h2 className="title">
                    Let's plan your finances the right way
                  </h2>
                  <p>
                    Lending that doesn't weigh you down.We know how hard is it
                    to start something new, that’s why we have the perfect plan
                    for you.
                  </p>
                </div>
                <a href="register" className="cmn-btn">
                  Apply for a loan
                </a>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="row cus-mar">
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img
                          src="assets/images/icon/loan-1.png"
                          alt="icon"
                          className="active"
                        />
                        <img
                          src="assets/images/icon/loan-11.png"
                          alt="icon"
                          className="alt"
                        />
                      </div>
                      <a href="loan">
                        <h5>Home Loans</h5>
                      </a>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Lowest interest rates</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Fast Loan Processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img
                          src="assets/images/icon/loan-2.png"
                          alt="icon"
                          className="active"
                        />
                        <img
                          src="assets/images/icon/loan-22.png"
                          alt="icon"
                          className="alt"
                        />
                      </div>
                      <a href="loan">
                        <h5>Car Loans</h5>
                      </a>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Competitive rates</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Quick Easy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img
                          src="assets/images/icon/loan-3.png"
                          alt="icon"
                          className="active"
                        />
                        <img
                          src="assets/images/icon/loan-33.png"
                          alt="icon"
                          className="alt"
                        />
                      </div>
                      <a href="loan">
                        <h5>Education Loans</h5>
                      </a>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Pay back conveniently</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Fast Loan Processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img
                          src="assets/images/icon/loan-4.png"
                          alt="icon"
                          className="active"
                        />
                        <img
                          src="assets/images/icon/loan-44.png"
                          alt="icon"
                          className="alt"
                        />
                      </div>
                      <a href="loan">
                        <h5>Business Loans</h5>
                      </a>
                      <ul className="list">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Easy Approvals</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/icon/check.png"
                              alt="icon"
                            />
                          </span>
                          <span>Full Assistance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Financial Planning In end */}
      {/* Personalized In start */}
      <section className="personalized">
        <div className="overlay">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
                <div className="img-area">
                  <img src="assets/images/personalized.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 pt-120 pb-120">
                <div className="section-text">
                  <h3 className="title">Need a Personalized Solution?</h3>
                  <p>
                    Get in touch with us, and we will help you to create the
                    right one for your business or personal needs.
                  </p>
                </div>
                <a href="register" className="cmn-btn">
                  Apply for a loan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Personalized In end */}
      {/* FAQs In start */}
      <section className="faqs-section">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="section-header text-center">
                  <h5 className="sub-title">
                    If you have question,we have an answer
                  </h5>
                  <h2 className="title">Frequently asked questions</h2>
                  <p>
                    Get answers to all questions you have and boost your
                    knowledge, so you can save, invest and spend smarter.
                  </p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8">
                <div className="faq-box wow fadeInUp">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          I lost my credit card, what do I do?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            If your card is missing, let us know immediately.
                            We’ll block your card right away send over a new one
                            on the same day.To report a lost or stolen card,
                            email us at help@federalUC.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What is investment banking?
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Investment banking pertains to certain activities of
                            a financial services company or a corporate division
                            that consist in advisory-based financial
                            transactions on behalf of individuals, corporations,
                            and governments.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can I print my account statement?
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes. Some pages have a Print button, creating an
                            easy to read printer-friendly version. Pages without
                            a print button can be printed as well, but the
                            formatting on the page may be less clear.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How do I reset my pin?
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Go to user account &gt;settings and reset it from
                            there.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingsix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          What is required to use Digital Banking?
                        </button>
                      </h5>
                      <div
                        id="collapsesix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingsix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Only your account number and your digital password
                            are required to start banking digitally.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingsaven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesaven"
                          aria-expanded="false"
                          aria-controls="collapsesaven"
                        >
                          Are my funds FDIC insured?
                        </button>
                      </h5>
                      <div
                        id="collapsesaven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingsaven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Yes, they are. For more information about FDIC
                            insurance coverage of transaction accounts, visit
                            fdic.gov
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs In end */}
      {/* Get Start In start */}
      <section className="get-start wow fadeInUp">
        <div className="overlay">
          <div className="container">
            <div className="col-12">
              <div className="get-content">
                <div className="section-text">
                  <h3 className="title">Ready to get started?</h3>
                  <p>It only takes a few minutes to open an account with us.</p>
                </div>
                <a href="register" className="cmn-btn">
                  Open an Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Start In end */}
      {/* Footer Area Start */}
      <div className="footer-section">
        <div className="container pt-120">
          <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
              <div className="footer-box">
                <a href="index" className="logo">
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
                <p>
                  A modern, technology-first bank built for you and your growing
                  business.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="footer-box">
                <h5>Company</h5>
                <ul className="footer-link">
                  <li>
                    <a href="about">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="footer-box">
                <h5>Useful Links</h5>
                <ul className="footer-link">
                  <li>
                    <a href="about">Products</a>
                  </li>
                  <li>
                    <a href="loan">Business Loan</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="footer-box">
                <h5>Support</h5>
                <ul className="footer-link">
                  <li>
                    <a href="mailto:support@FederalUC.com">
                      <span>support@FederalUC.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <div className="left">
                  <p>
                    Copyright © <a href="index">Federal UC</a>
                  </p>
                </div>
                <div className="right">
                  <a href="#" className="cus-bor">
                    Privacy{" "}
                  </a>
                  <a href="#">Terms &amp; Condition </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-area">
          <img
            src="assets/images/footer-Illu-left.png"
            className="left"
            alt="Images"
          />
          <img
            src="assets/images/footer-Illu-right.png"
            className="right"
            alt="Images"
          />
        </div>
      </div>
      {/* Footer Area End */}
      {/*==================================================================*/}
    </>
  );
}

export default HomeIndex;
