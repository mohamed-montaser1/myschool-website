interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <>
      <h1 className="w-fit text-4xl title relative mx-auto">{text}</h1>
    </>
  );
};

export { Title };
