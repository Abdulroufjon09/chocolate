/**
 * Smooth scroll: sahifadagi .app-scroll konteyner ichida ishlaydi,
 * sticky nav balandiligini hisobga oladi.
 */
export function scrollToSection(id: string): void {
  const root = document.querySelector<HTMLElement>('.app-scroll')

  if (id === 'home') {
    if (root) {
      root.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  if (root) {
    const navOffset = 72
    const top =
      el.getBoundingClientRect().top -
      root.getBoundingClientRect().top +
      root.scrollTop -
      navOffset
    root.scrollTo({ top, behavior: 'smooth' })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
