<template>
    <div class="testimoniales-container">
      <h2>Cartas Testimoniales</h2>
      <div v-for="(testimonial, index) in testimoniales" :key="index" class="testimonial-card">
        <h4>Carta Testimonial</h4>
        <p><strong>Nombre:</strong> {{ testimonial.nombre }}</p>
        <p><strong>Apellido:</strong> {{ testimonial.apellido }}</p>
        <p><strong>Teléfono:</strong> {{ testimonial.telefono }}</p>
        <p><strong>Dirección:</strong> {{ testimonial.direccion }}</p>
        <p><strong>Email:</strong> {{ testimonial.correo }}</p>
        <p><strong>Mensaje:</strong> {{ testimonial.mensaje }}</p>
      </div>
    </div>
  </template>
  
  <script>
import { computed } from 'vue';
import { state } from '../state'; // Asegúrate de que la ruta sea correcta

export default {
  setup() {
    // Acceder a los testimoniales desde el estado global
    const testimoniales = computed(() => state.testimoniales);

    return {
      testimoniales
    };
  }
};</script>
  
  <style scoped>
 .testimoniales-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #222;
    color: white;
    border-radius: 8px;
  }
  
  .testimonial-card {
    padding: 20px;
    background-color: #333;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #00c8aa;
  }
  
  h4 {
    color: #00c8aa;
  }
  </style>
  
 