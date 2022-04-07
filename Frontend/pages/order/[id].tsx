import { useRouter } from "next/router"
import OrderComponent from "../../components/order/orderComponent"

const Order = () => {
  const router = useRouter()
  const { id,url } = router.query
  console.log(router.query)
 
  return (
    <div>
    <OrderComponent id={id} url={url}/>
    </div>
  )
}

export default Order