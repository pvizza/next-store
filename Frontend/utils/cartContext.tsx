import {createContext, useState, ReactNode} from "react"

interface Context {
  toogleCart: () => void;
  cart: boolean;
  CartProvider: ReactNode;
}


export const CartContext = createContext({} as Context) 
export const CreateProvider = CartContext.Provider

interface Props {
  children: React.ReactNode
}

export const CartProvider = ({children}:Props) => {
  const [cart, setCart] = useState(false)
  
  const toogleCart = () => setCart(!cart)

  const closeCart = () => setCart(!cart)

  return (
    <CreateProvider value={{cart, toogleCart,CartProvider}}>
      {children}
    </CreateProvider> 
  )

}

