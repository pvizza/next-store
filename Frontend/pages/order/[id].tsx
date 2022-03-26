import { useRouter } from "next/router"
import OrderComponent from "../../components/order/orderComponent"

const Order = () => {
  const router = useRouter()
  const { id } = router.query
 
  return (
    <div>
    <OrderComponent id={id}/>
       </div>
  )
}

export default Order