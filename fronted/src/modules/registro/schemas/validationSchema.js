import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required(' '+' '+'Este campo es obligatorio.!'),
    email: yup.string().email().required('Este campo es obligatorio.!')
});