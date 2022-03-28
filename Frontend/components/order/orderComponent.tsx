import React from 'react'

interface Props {
  id: string | string[] | undefined,
  url:  string | string[] | undefined
}

const OrderComponent = ({id,url}:Props) => {
  return (
    <div>OrderComponent {id}</div>
  )
}

export default OrderComponent