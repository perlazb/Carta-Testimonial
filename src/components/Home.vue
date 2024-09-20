<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Carta Testimonial</h3>
            <hr class="hr">
            <div>
              <label for="name">Nombre</label>
              <input type="text" id="name" v-model="name" />
              <span v-if="errorName" class="error-message">El nombre es obligatorio</span>
            </div>
            <div>
              <label for="lastname">Apellido</label>
              <input type="text" id="lastname" v-model="lastname" />
              <span v-if="errorLastname" class="error-message">El apellido es obligatorio</span>
            </div>
            <div>
              <label for="phone">Teléfono</label>
              <input type="text" id="phone" v-model="phone" />
              <span v-if="errorPhone" class="error-message">El teléfono debe tener 10 dígitos numéricos</span>
            </div>
            <div>
              <label for="address">Dirección</label>
              <input type="text" id="address" v-model="address" />
              <span v-if="errorAddress" class="error-message">La dirección es obligatoria</span>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" />
              <span v-if="errorEmail" class="error-message">El correo electrónico no es válido</span>
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea id="message" v-model="message" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
              <span v-if="errorMessage" class="error-message">El mensaje es obligatorio</span>
            </div>
            <button @click="register">Listo</button>
            <!-- Botón para redirigir al login -->
            <button class="login-btn" @click="goToLogin">Ir a Login</button>            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="datosRegistrados" class="testimonial-letter">
    <div class="testimonial-content">
      <h4>Carta Testimonial</h4>
      <hr class="hr">
      <p><strong>Nombre:</strong> {{ datosRegistrados.nombre }}</p>
      <p><strong>Apellido:</strong> {{ datosRegistrados.apellido }}</p>
      <p><strong>Teléfono:</strong> {{ datosRegistrados.telefono }}</p>
      <p><strong>Dirección:</strong> {{ datosRegistrados.direccion }}</p>
      <p><strong>Email:</strong> {{ datosRegistrados.correo }}</p>
      <p><strong>Mensaje:</strong> {{ datosRegistrados.mensaje }}</p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { state } from '../state'; // Asegúrate de que la ruta sea correcta

export default defineComponent({
  setup() {
    const name = ref('');
    const errorName = ref(false);
    const lastname = ref('');
    const errorLastname = ref(false);
    const phone = ref('');
    const errorPhone = ref(false);
    const address = ref('');
    const errorAddress = ref(false);
    const email = ref('');
    const errorEmail = ref(false);
    const message = ref('');
    const errorMessage = ref(false);
    const datosRegistrados = ref(null);
    const router = useRouter();

    const validateData = () => {
      let isValid = true;

      errorName.value = !name.value.trim();
      errorLastname.value = !lastname.value.trim();
      errorPhone.value = !/^\d{10}$/.test(phone.value);
      errorAddress.value = !address.value.trim();
      errorEmail.value = !isValidEmail(email.value);
      errorMessage.value = !message.value.trim();

      return !(
        errorName.value ||
        errorLastname.value ||
        errorPhone.value ||
        errorAddress.value ||
        errorEmail.value ||
        errorMessage.value
      );
    };

    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const register = () => {
      const isValid = validateData();

      if (isValid) {
        const newTestimonial = {
          nombre: name.value,
          apellido: lastname.value,
          telefono: phone.value,
          direccion: address.value,
          correo: email.value,
          mensaje: message.value,
        };

        // Agregar el nuevo testimonio al estado global
        state.testimoniales.push(newTestimonial);
        console.log('Datos registrados:', newTestimonial);

        // Redirigir a la página de testimoniales
        router.push('/carta');
      }
    };

    const goToLogin = () => {
      router.push('/login'); // Redirige a la página de login
    };

    return {
      name,
      errorName,
      lastname,
      errorLastname,
      phone,
      errorPhone,
      address,
      errorAddress,
      email,
      errorEmail,
      message,
      errorMessage,
      register,
      datosRegistrados,
      goToLogin,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
}

.card-body {
  padding: 40px;
  background-color: #222; 
  border-radius: 8px;
  border: 1px solid #444;
}

.login-btn {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #444; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #333;
}


h3 {
  color: #fff;
  text-align: center;
}

input, textarea {
  width: 100%;
  padding: 10px;
  background-color: #333; 
  color: #fff; 
  border: 1px solid #00c8aa;
  border-radius: 5px;
  outline: none;
}

input:focus, textarea:focus {
  border-color: #00c8aa; 
}

.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #00c8aa; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #000000b7; 
}

hr {
  border-top: 1px solid #444;
  margin-bottom: 20px;
}

.testimonial-letter {
  max-width: 400px;
  margin: 30px auto 0;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  border: 1px solid #00c8aa;
  color: #fff;
  text-align: left;
}

.testimonial-content {
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #00c8aa;
}

h4 {
  text-align: center;
  color: #00c8aa;
}

p {
  margin: 10px 0;
  color: #d1d1d1;
}
</style>
