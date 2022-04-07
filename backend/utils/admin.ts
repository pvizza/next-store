export const admin = (context:any) => {
  if(process.env.NODE_ENV !== 'production'){
    return !!context.session?.data
  }

  if(context.session.itemId ===  process.env.ADMIN){
  return !!context.session?.data
}
return false
}