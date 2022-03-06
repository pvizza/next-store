import {StyleCartCount} from './styleCartCount'

interface Props {
  count: number
}
const CartCount = ({count}:Props) => {
  console.log(count)
  if (count === undefined || count === 0) return null
  return (
    <StyleCartCount>{count}</StyleCartCount>
  )
}

export default CartCount