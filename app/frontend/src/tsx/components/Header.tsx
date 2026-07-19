/**
 * The Header will be the navigation part of the Nox Sword website.
 *
 * This part will be positioned on the left side of the screen.
 * Will display the section names, and clicking one will scroll the
 * user to that section.
 *
 * @remarks
 * This section will be fixed throughout the whole user experience.
 *
 * @example
 * <Layout>
 *   <Header />
 * </Layout>
 */
function Header() {
  return (
    <header className="nox-header">
      <nav aria-label="Journey progress" className="nox-header-nav">
        <ul className="nox-header-ul">
          <li className="nox-header-li">
            <a href="#hero-section" className="nox-header-link">
              Genesis
            </a>
          </li>

          <li className="nox-header-li">
            <a href="#history-section" className="nox-header-link">
              The Chronicle
            </a>
          </li>

          <li className="nox-header-li">
            <a href="#functionality-section" className="nox-header-link">
              The Rite
            </a>
          </li>

          <li className="nox-header-li">
            <a href="#retrieval-section" className="nox-header-link">
              The Vigil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header