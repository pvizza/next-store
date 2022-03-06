import { useMutation } from '@apollo/client';
import {SIGN_OUT_MUTATION} from '../querys/signOutMutatation';
import {USER_QUERY} from '../querys/userQuery'


const SignOut = () => {

  const [logout, {data}] = useMutation(SIGN_OUT_MUTATION,{
    refetchQueries: [{query: USER_QUERY}],
  })

  return <button type='button' onClick={logout}>Cerrar Sesion</button>


 
};

export default SignOut;
