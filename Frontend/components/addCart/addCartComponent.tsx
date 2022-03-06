import { useMutation } from "@apollo/client"
import { ADD_CART_MUTATION } from "../querys/addCartMutation"
import { USER_QUERY } from "../querys/userQuery"

interface Props {
  id: number
}

const AddCartComponent = ({id}:Props) => {
  //TODO: 1. notification when add to cart
  
  const [addCart,{data,loading,error}] = useMutation(ADD_CART_MUTATION, {
    variables: {id},
    refetchQueries: [{query: USER_QUERY }]
  })
  console.log(data)
  return (
    <button disabled={loading} onClick={addCart}>Agregar al carrito🛒</button>
  )
}

export default AddCartComponent