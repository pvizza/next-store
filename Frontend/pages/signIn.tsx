import Form from '../components/form/style';
import useForm from '../hooks/useForm';
import { USER_AUTH_MUTATION } from '../components/querys/userAuth';
import { USER_QUERY } from '../components/querys/userQuery';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ResetPassword from '../components/forgotPassword/forgotPassword';

const SignIn = () => {
  const [reset, setReset] = useState(false);

  const router = useRouter();
  const { handleChange, values, clearForm } = useForm({
    email: '',
    password: ''
  });

  const [signIn, { data, loading, error }] = useMutation(USER_AUTH_MUTATION, {
    variables: values,
    refetchQueries: [{ query: USER_QUERY }]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn();
      console.log(res);

      if (res.data) {
        router.push('/');
        // TODO: LOGIN SUCCESS MESSAGE
      }
    } catch (error) {
    // TODO: LOGIN FAILURE MESSAGE
      error;
    }

    clearForm();
  };

  const callback = () => {
    setReset(false);
  };

  if (loading) return <p>Loading...</p>;
  // if (error?.message == '[passwordAuth:failure] Authentication failed') return <p>el usuario o contrasena son incorrectos</p>

  return (
    <div>
      {!reset &&
      <Form method='POST' onSubmit={handleSubmit}>
      <fieldset className='ariabusy' aria-busy={loading}></fieldset>
      <label htmlFor='text'>E-mail</label>
      <input required onChange={handleChange} type="text" placeholder="E-mail" name='email' />
      <label htmlFor='text'>Password</label>
      <input required onChange={handleChange} type="password" placeholder="Password" name='password' />
      <div >
      <button type='submit'> Iniciar Sesion</button>
      <button style={{ marginLeft: '10px' }} type='button' onClick={() => setReset(true) }> ¿Olvido su clave?</button>
      </div>
     </Form>

      }
      {reset && <ResetPassword callback={callback}/>}

    </div>
  );
};

export default SignIn;
