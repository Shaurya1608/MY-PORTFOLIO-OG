import Link from 'next/link';

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
            <Link href="/" className="link">
              <h2 style={{ fontSize: "28px", fontWeight: "800", margin: 0, letterSpacing: "1px", color: "#000" }}>SHAURYA</h2>
            </Link>
          </div>
          {/*  Logo End   */}

          {/*  Menu Start   */}
          <div className="header-three-social d-none d-lg-block">
            <ul className="d-flex tw-gap-205">
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://www.talentella.in/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Visit Talentella Website"
                >
                  <i className="ph-bold ph-globe" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="https://www.instagram.com/talentella.in/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Visit Instagram Profile"
                >
                  <i className="ph-bold ph-instagram-logo" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          {/*  Menu End   */}

          {/*  Header Right Start   */}
          <div className="header-right d-flex align-items-center tw-gap-6">


            {/*  Header Button Start   */}
            <div className="header-three-button d-none d-md-block">
              <a
                className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"
                href="/Shaurya_Resume_Final.pdf"
                download="Shaurya_Resume_Final.pdf"
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