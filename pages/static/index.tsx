const Static = ({ url }) => {
  return <div>Static {url} </div>;
};

export const getStaticProps = async () => {
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
