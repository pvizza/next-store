import { useMutation } from "@apollo/client"
import { DELETE_CART_MUTATION } from "../querys/deleteCartMutation";
import { USER_QUERY } from "../querys/userQuery";
import {FaRegTimesCircle} from '@react-icons/all-files/fa/FaRegTimesCircle'

interface Props {
  id:number
}


const DeleteCart = ({id}:Props) => {
  const [deleteCartProduct,{loading,data,error}] = useMutation(DELETE_CART_MUTATION, 
    {
      variables: {id},
      refetchQueries: [{query: USER_QUERY }],

    });

    const deleteItem = () => {
      deleteCartProduct()
    }

  if (error) return <p>{error.message}</p>
  return (
    <button disabled={loading}
    style={{marginTop:"10px"}}
     onClick={deleteItem}>
     <FaRegTimesCircle style={{fontSize:"2rem"}}/>
     </button>
  )
}

export default DeleteCart