import { createApp } from 'vue'
import PostPageWithStore from './PostPageWithStore'
import components from '@/components/UI'
import store from './components/store'

const app = createApp(PostPageWithStore)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store)
app.mount('#app')
