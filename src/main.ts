// Vendor
import { createApp } from 'vue';

// Components
import App from './App.vue';

// Plugins
import { formBundle } from './plugins/form/plugin';

import './main.css';

createApp(App).use(formBundle).mount('#app');
