interface Props {
  children: string;
}

const buttonComponent = ({ children }:Props) => {
  return (
    <div>{children}</div>
  );
};

export default buttonComponent;
