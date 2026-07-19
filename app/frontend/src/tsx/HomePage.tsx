import '../scss/style.scss'
import Layout from './components/Layout'
import FunctionalitySection from './components/sections/FunctionalitySection'
import HistorySection from './components/sections/HistorySection'
import HeroSection from './components/sections/HeroSection'
import RetrievalSection from './components/sections/RetrievalSection'

/**
 * The HomePage composes every section of the Nox Sword site inside the Layout.
 *
 * It acts as the bridge between the Layout (structure) and the individual
 * sections (content) — deciding the order in which sections appear
 * between the Header and Footer.
 *
 * @remarks
 * This is currently the site's only page. If more pages are added in the
 * future (e.g. a credits or privacy page), each one should follow this
 * same naming pattern inside a dedicated `pages/` folder.
 *
 * @example
 * <StrictMode>
 *   <HomePage />
 * </StrictMode>
 */
function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <HistorySection />
      <FunctionalitySection />
      <RetrievalSection />
    </Layout>
  )
}

export default HomePage