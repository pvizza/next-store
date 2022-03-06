import { useMutation } from "@apollo/client"
import { DELETE_CART_MUTATION } from "../querys/deleteCartMutation";
import { USER_QUERY } from "../querys/userQuery";

interface Props {
  id:number
}


const DeleteCart = ({id}:Props) => {
  const [deleteCartProduct,{loading,data,error}] = useMutation(DELETE_CART_MUTATION, 
    {
      variables: {id},
      refetchQueries: [{query: USER_QUERY }],

    });

  console.log(data)
  if (error) return <p>{error.message}</p>
  return (
    <button disabled={loading} onClick={deleteCartProduct}>&times;</button>
  )
}

export default DeleteCart