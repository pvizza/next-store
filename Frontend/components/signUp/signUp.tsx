import { useMutation } from '@apollo/client';
import {SIGNUP_MUTATION} from '../querys/signUpMutation';
import useForm from '../../hooks/useForm';
import Form from '../form/style';

const SignUp = () => {
  const {handleChange, values, clearForm} = useForm({
    name:'',
    email:'',
    password:'',
  })
  const [signup, { loading, error}] = useMutation(SIGNUP_MUTATION,{
    variables: values,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =  await signup().catch(err => console.log(err))
    console.log(res)
    clearForm();
  }

  return <div>
    <Form onSubmit={handleSubmit}> 
      <fieldset className='ariabusy' aria-busy={loading}></fieldset>
       <label htmlFor='text'>Nombre y Apellido</label>
        <input required onChange={handleChange} type="text" placeholder="Ingrese su nombre y apellido" name='name' value={values.name || ''}/>
        <label  htmlFor='email'>Email</label>
        <input  required onChange={handleChange} type="email" placeholder="Ingrese su email" name='email' value={values.email || ''}/>
        <label  htmlFor='password'>Password</label>
        <input required onChange={handleChange} type='password' placeholder="Ingrese su contrasena" name='password' value={values.password || ''}/>
        <button type='submit'> Crear usuario</button>
     </Form>
  </div>;
};

export default SignUp;
