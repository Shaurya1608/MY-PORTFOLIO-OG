export default function Header() {
  return (
    <>
      
    <header
      className="header header-two header-three tw-transition-all tw-z-99 position-relative"
    >
      <div className="container tw-container-1800-px">
        <nav
          className="d-flex align-items-center justify-content-between position-relative"
        >
          {/*  Logo Start  */}
          <div className="header-three-logo tw-rounded-md">
            <a href="index.html" className="link">
              <h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0, letterSpacing: "1px", color: "#000" }}>SHAURYA</h2>
            </a>
          </div>
          {/*  Logo End   */}

          {/*  Menu Start   */}
          <div className="header-three-social d-none d-lg-block">
            <ul className="d-flex tw-gap-205">
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-facebook-logo"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-x-logo"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-instagram-logo"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-dribbble-logo"></i>
                </a>
              </li>
            </ul>
          </div>
          {/*  Menu End   */}

          {/*  Header Right Start   */}
          <div className="header-right d-flex align-items-center tw-gap-6">
            <div className="header-three-menu d-flex align-items-center">
              <button
                type="button"
                className="tw-hover-btn bg-white text-heading tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center tw-text-2xl rounded-circle hover-bg-main-two-600 hover-text-white tw-transition-3"
              >
                <i className="ph ph-dots-nine"></i>
              </button>
            </div>
            {/*  Menu Button Start   */}
            <div className="d-flex align-items-center tw-gap-6">
              <button
                className="tw-offcanvas-2-open-btn header-three-toggle tw-w-15 tw-h-15 lh-1 d-inline-flex justify-content-center align-items-center tw-text-2xl rounded-circle text-heading border border-neutral-100 hover-bg-main-two-600 hover-border-main-two-600 hover-text-white bg-transparent tw-transition-3"
              >
                <span>
                  <img
                    className="tw-transition-3"
                    src="assets/images/icons/header-three-toggle.svg"
                    alt="toggle"
                  />
                </span>
              </button>
            </div>
            {/*  Menu Button End   */}

            {/*  Header Button Start   */}
            <div className="header-three-button d-none d-md-block">
              <a
                className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"
                href="contact.html"
              >
                download cv
                <span className="tw-hover-btn-circle-dot bg-main-two-600"></span>
              </a>
            </div>
            {/*  Header Button End   */}
          </div>

          {/*  Header Right End   */}
        </nav>
      </div>
    </header>
    
    </>
  );
}