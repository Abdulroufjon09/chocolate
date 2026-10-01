import { createApp } from 'vue'
import type { Directive } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

/**
 * v-reveal — element viewport'ga kirganda smooth fade-up animatsiya boshlaydi.
 * Kechikish uchun: v-reveal="150" (ms)
 */
const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    const delay = binding.value ?? 0
    if (delay > 0) el.style.setProperty('--reveal-delay', `${delay}ms`)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()

            // Kirish animatsiyasi tugagach reveal klassini olib tashlaymiz,
            // shunda elementning o'z hover transition' (.card, .btn va h.k.)
            // to'liq ishlaydi — effekt yana silliq bo'ladi.
            const delay = binding.value ?? 0
            window.setTimeout(() => {
              el.classList.remove('reveal', 'is-visible')
              el.style.removeProperty('--reveal-delay')
            }, 1200 + delay + 150)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    ;(el as HTMLElement & { _revealObserver?: IntersectionObserver })._revealObserver = observer
  },
  unmounted(el) {
    const target = el as HTMLElement & { _revealObserver?: IntersectionObserver }
    target._revealObserver?.disconnect()
  },
}

app.directive('reveal', reveal)
app.use(router)
app.mount('#app')
