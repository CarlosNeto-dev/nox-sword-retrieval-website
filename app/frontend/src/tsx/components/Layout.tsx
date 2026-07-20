import Header from './Header'
import Footer from './Footer'

/**
 * The Layout is responsible for organizing the header, main, and footer sections.
 *
 * @remarks
 * Although the user never interacts with this file directly, it directly
 * shapes what they see — this is where the page's visual structure is defined.
 */
function Layout({
  children
}: {
  /** Section content rendered inside the <main> tag, between Header and Footer */
  children: React.ReactNode;
}) {
  return (
    <div className='nox-wrapper'>
      <Header />
      <main className='nox-main'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout