// Register icon sprite
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from './store'
import { router, setupRouter } from './router'
import { setupGuard } from './router/guard'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)
  setupGuard(router)
  app.mount('#app')
}

void bootstrap()
