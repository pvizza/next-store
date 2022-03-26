import React from 'react'

interface Props {
  id: string | string[] | undefined
}

const OrderComponent = ({id}:Props) => {
  return (
    <div>OrderComponent {id}</div>
  )
}

export default OrderComponent