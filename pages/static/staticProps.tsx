import { GetStaticProps,GetStaticPaths } from "next";

const Static = ({ url }) => {
  return <div>Static {url} </div>;
};

export const getStaticPaths:GetStaticPaths = async () => {
  //fetches all the paths we want to pre-render
  const paths = [/*id */];

  return {
    paths, //array of paths to pre-render
    fallback: false, // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
                     //if fallback is true, then it will return a new fetch of the page  
  };
}



export const getStaticProps:GetStaticProps= async () => {
  const info = await fetch("https://criptoya.com/api/satoshitango/btc/usd");
  const json = await info.json();
  console.log(json);

  return {
    props: {
      url: json.bid,
    },
    revalidate: 10,
  };
};

export default Static;
