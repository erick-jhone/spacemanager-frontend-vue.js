import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Importe as rotas



// Importe Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configure Axios globalmente (opcional)
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/'; // Ajuste para sua URL

const app = createApp(App);
app.use(router); // Registre o router na instância do Vue
app.mount('#app');

