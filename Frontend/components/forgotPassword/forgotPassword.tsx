import { useMutation } from '@apollo/client';
import useForm from '../../hooks/useForm';
import Form from '../form/style';
import { RESET_PASSWORD_MUTATION } from '../querys/signUpMutation';

interface Props {
  callback:() => void
}

const ForgotPasswordComponent = ({ callback }:Props) => {
  console.log(callback);
  const { handleChange, values, clearForm } = useForm({
    email: ''
  });
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD_MUTATION, {
    variables: values
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await resetPassword().catch(err => console.log(err));
    console.log(data);
    console.log(res);
    clearForm();
  };

  const isReset = data?.sendUserPasswordResetLink;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Ingrese el mail con el que se encuentra registrado</h2>
      <fieldset className='ariabusy' aria-busy={loading}></fieldset>
      <label htmlFor='email'>E-mail</label>
      <input required onChange={handleChange} type="email" placeholder="E-mail" name='email' />
      <button type='submit'> Enviar</button>
      {isReset && <><p>Se ha enviado un link a su correo para restablecer su contraseña</p>
      <button onClick={() => callback()}>Ir al login</button></>
      }
      </Form>
    </div>
  );
};

export default ForgotPasswordComponent;
