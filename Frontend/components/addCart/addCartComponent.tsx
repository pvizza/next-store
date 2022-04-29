import { useMutation } from "@apollo/client"
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus"
import { ADD_CART_MUTATION } from "../querys/addCartMutation"
import { USER_QUERY } from "../querys/userQuery"
import { AddCartButton } from "./style"

interface Props {
  id: number
}

const AddCartComponent = ({id}:Props) => {
  //TODO: 1. notification when add to cart
  
  const [addCart,{data,loading,error}] = useMutation(ADD_CART_MUTATION, {
    variables: {id},
    refetchQueries: [{query: USER_QUERY }]
  })
  const addToCart = () => addCart()
  
  return (
    <AddCartButton disabled={loading} onClick={addToCart}>
      <FaCartPlus style={{color:"#fff",paddingTop:"4px",fontSize:"1.8rem"}}/>
    </AddCartButton>
  )
}

export default AddCartComponent