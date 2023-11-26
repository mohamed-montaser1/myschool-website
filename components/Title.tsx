interface Props {
  text: string;
  style?: object;
}

const Title: React.FC<Props> = ({ text, style }) => {
  return (
    <>
      <h1 className="w-fit title relative mx-auto" style={style}>
        {text}
      </h1>
    </>
  );
};

export { Title };
