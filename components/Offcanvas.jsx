export default function Offcanvas() {
  return (
    <>
      
    <div className="tw-offcanvas-2-area p-relative">
      <div className="tw-offcanvas-2-bg is-left left-box"></div>
      <div className="tw-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tw-offcanvas-2-wrapper">
        <div className="tw-offcanvas-2-left left-box">
          <div
            className="tw-offcanvas-2-left-wrap d-flex justify-content-between align-items-center"
          >
            <div className="twoffcanvas__logo">
              <a className="logo-1" href="index.html"
                ><h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0, letterSpacing: "1px", color: "#fff" }}>SHAURYA</h2></a>
            </div>
            <div className="tw-offcanvas-2-close d-md-none text-end">
              <button className="tw-offcanvas-2-close-btn tw-offcanvas-2-close-btn">
                <span className="text">
                  <span className="text-white">close</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)"
                        fill="currentcolor"
                      />
                      <rect
                        width="32.621"
                        height="1.00918"
                        transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)"
                        fill="currentcolor"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tw-main-menu-mobile menu-hover-active counter-row">
            <nav></nav>
          </div>
        </div>
        <div
          className="tw-offcanvas-2-right right-box d-none d-md-block p-relative"
        >
          <div className="tw-offcanvas-2-close text-end">
            <button className="tw-offcanvas-2-close-btn">
              <span className="text">
                <span>close</span>
              </span>
              <span className="d-inline-block">
                <span>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.80859 9.80762L28.1934 28.1924"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.80859 28.1924L28.1934 9.80761"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
          <div
            className="tw-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100"
          >
            <div className="twoffcanvas__contact-info">
              <div className="twoffcanvas__contact-title">
                <h5 className="text-white">Contact us</h5>
              </div>
              <ul>
                <li>
                  <span className="text-main-two-600 tw-text-xl"
                    ><i className="ph ph-map-pin-line"></i
                  ></span>
                  <a
                    className="text-white"
                    href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                    target="_blank"
                    >Manchester 21, Zurich, CH</a
                  >
                </li>
                <li>
                  <span className="text-main-two-600 tw-text-xl"
                    ><i className="ph ph-envelope"></i
                  ></span>
                  <a className="text-white" href="mailto:techubinfo@mail.com"
                    ><span className="__cf_email__">omioinfo@mail.com</span></a
                  >
                </li>
                <li>
                  <span className="text-main-two-600 tw-text-xl"
                    ><i className="ph ph-phone-call"></i
                  ></span>
                  <a className="text-white" href="tel:+48555223224"
                    >(+00) 678 345 98568</a
                  >
                </li>
              </ul>
            </div>
            <div
              className="footer-social"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <ul className="tw-gap-2">
                <li>
                  <a href="#">
                    <span
                      className="active-media d-flex align-items-center tw-gap-1"
                      >Facebook <i className="ph ph-arrow-bend-up-right"></i
                    ></span>
                    <span className="hover-media"
                      ><i className="ph ph-facebook-logo"></i
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="active-media d-flex align-items-center tw-gap-1"
                      >INSTAGRAM <i className="ph ph-arrow-bend-up-right"></i
                    ></span>
                    <span className="hover-media"
                      ><i className="ph ph-instagram-logo"></i
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="active-media d-flex align-items-center tw-gap-1"
                      >LINKEDIN <i className="ph ph-arrow-bend-up-right"></i
                    ></span>
                    <span className="hover-media"
                      ><i className="ph ph-linkedin-logo"></i
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}