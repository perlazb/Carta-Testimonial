<template>
    <div class="login-container">
      <h3>Iniciar Sesión</h3>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button @click="login">Ingresar</button>
      <span v-if="error" class="error-message">{{ error }}</span>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref('');
      const router = useRouter();
  
      const login = () => {
        // Redirige a la página de cartas sin validación
        router.push('/carta');
      };
  
      return {
        email,
        password,
        error,
        login
      };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #222;
    color: white;
  }
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  