/**
 * Application entry point.
 *
 * Mounts the React component tree onto the real DOM node with id="root",
 * defined in index.html. This file contains no layout or composition logic —
 * see HomePage.tsx for that.
 *
 * @remarks
 * The `!` after getElementById('root') is a TypeScript non-null assertion —
 * it tells the compiler "trust me, this element exists", since
 * getElementById's return type is technically `HTMLElement | null`.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
