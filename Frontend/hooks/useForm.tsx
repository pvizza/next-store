import {useEffect, useState} from 'react'
type Prod = {
  name: string,
  price: number,
  description: string,
  image: File
}

type Init = object

const useForm = (init:Init) => {
  const [values, setValues] = useState<Prod>({} as Prod)

  // TODO: useEffect [VALUE] for update products
 useEffect(()=> {
  setValues(init)
 },[])

  const handleChange = (e) => {
    let {value,type,name,files} = e.target
    

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = files;
    }


    setValues({
      ...values,
      [name]: value,
    })
    
  } 
  const clearForm = () => {
    setValues(init)
  }
 
  return {
    handleChange,
    values,
    clearForm
  }
}

export default useForm
