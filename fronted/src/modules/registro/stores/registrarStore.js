import { defineStore } from "pinia"
import {ref} from 'vue'
export const useRegistrarStore = defineStore('registrar', ()=>{
  const nombre = ref('');
  const email = ref('');
  ///crear funciones de flecha permite guaradar el estado de las variables anterior
 const guardarRegistro =(nombreFormulario, emailFormulario)=>{
    ///guardar nuevos valores
    nombre.value = nombreFormulario;
    email.value = emailFormulario;
    console.log(nombre.value);
    console.log(email.value);

 } 
 return {nombre, email, guardarRegistro}

});