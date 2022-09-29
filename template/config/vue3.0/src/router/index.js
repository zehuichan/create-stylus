import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = []

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// config router
export function setupRouter(app) {
  app.use(router)
}
