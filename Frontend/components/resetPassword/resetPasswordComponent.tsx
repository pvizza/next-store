import { useMutation } from "@apollo/client"
import router from "next/router"
import { useState } from "react"
import useForm from "../../hooks/useForm"
import Form from "../form/style"
import { NEW_PASSWORD_MUTATION } from "../querys/signUpMutation"

interface Props {
  token:string | string[]
}

const ResetPasswordComponent = ({token}:Props) => {
  const [confirmPass, setConfirmPass] = useState('')

  const {values, handleChange, clearForm} = useForm({
    password:'',
    email:'pablobusd@gmail.com',
    token
  })

  //TODO: ADD DINAMIC EMAIL

  const [newPassword, {data,loading, error}] = useMutation(NEW_PASSWORD_MUTATION,{
    variables: values,
  })
  
const successNewPass = data?.redeemUserPasswordResetToken

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values)
    if(values.password === confirmPass){
      if(values.password.length >= 8 && confirmPass.length >= 8){

    const res = await newPassword().catch(err => console.log(err))
    console.log(res)
    clearForm();
    
      } else console.log('La contraseña debe tener al menos 8 caracteres')
    
    }else console.log('Las contraseñas no coinciden')
  }

  //TODO: ADD ERROR MESSAGGES

  const handleConfirm = (e) => {
    setConfirmPass(e.target.value)
  }
  if (error) return <p>{error.message}</p>
  return <div>
    <Form onSubmit={handleSubmit}>
    <fieldset className='ariabusy' aria-busy={loading}></fieldset>
      <label>Ingrese su nueva contraseña</label>
      <input required onChange={handleChange} type="password" placeholder="Ingrese su nueva clave" name='password' />
      <label>Confirme su nueva contraseña</label>
      <input required onChange={handleConfirm} type="password" placeholder="Confirme su nueva clave" name='confirmPassword' />
      <button disabled={loading} type='submit'> Enviar</button>
      {(successNewPass === null) && <>
      <p>Se ha restablecido su contraseña</p>
      <button onClick={() => router.push('/signIn')}>Ir al login</button>
      </>
      }
    </Form>
  </div>
}

export default ResetPasswordComponent