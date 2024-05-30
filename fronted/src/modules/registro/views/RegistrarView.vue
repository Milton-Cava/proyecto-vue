<template>
 <div>
    <h1>FORMULARIO DE REGISTRO</h1>
    <Form :validation-schema="schema" @submit="onSubmit">

      <div class="form">
         <label for="nombre">Nombre</label>
         <Field type="text" name="nombre" id="nombre" placeholder="nombre"/>
         <ErrorMessage name="nombre" class="color"></ErrorMessage>
      </div>

       <div class="form">
         <label for="correo">Email</label>
         <Field type="email" name="email" id="correo" placeholder="Email" />
         <ErrorMessage name="email" class="color" ></ErrorMessage>
       </div>

      <div class="form">
         <button type="submit"> Registrar</button>
      </div>
      
    </Form>
    
 </div>
</template>

<script setup>
import {Form,  Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit =()=>{
   console.log('se ha enviado el formulario')
}

</script>

<style scoped>
.form{
   margin: 10px;
}
.color{
   color:red;
}
</style>