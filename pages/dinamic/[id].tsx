import Link from "next/link";

const Dinamic = ({ id }: any) => {
  return (
    <div>
      <p>asdasd {id}</p>

      <Link href="/cart">CART</Link>
    </div>
  );
};

export const getServerSideProps = ({ params }) => {
  console.log(params);
  return {
    props: {
      id: params.id,
    },
  };
};

export default Dinamic;
