import { GetStaticPaths } from 'next'


export const getStaticPaths:GetStaticPaths = async () => {
  const paths = [
    
  ];

  return {
    paths,
    fallback: false,
  };
}