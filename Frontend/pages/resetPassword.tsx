import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ResetPasswordComponent from '../components/resetPassword/resetPasswordComponent';

const ResetPassword:NextPage = () => {
  const router = useRouter();

  if (!router.query.token) {
    return <>
  <p>Necesitas un token para renovar tu clave</p>
  <Link href='signIn'><a>Obtener token</a></Link>
</>;
  }

  return <ResetPasswordComponent token={router.query.token}/>;
};
export default ResetPassword;
