import Header from '../header/header'


const main = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default main
