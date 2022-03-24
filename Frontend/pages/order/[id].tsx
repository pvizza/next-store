import { useRouter } from "next/router"

const Order = () => {
  const router = useRouter()
  const { id } = router.query
 
  return (
    <div>Order {id}</div>
  )
}

export default Order