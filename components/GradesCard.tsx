type Props = {
  grade: string;
};

function GradesCard({ grade }: Props) {
  return (
    <div className="h-[150px] w-[100%] p-2 bg-[var(--logo-color)] min-h-fit rounded-lg flex justify-center items-center text-white text-2xl hover:scale-105 transition-all ease-in-out cursor-pointer px-10 max-[995px]:text-lg">
      {grade}
    </div>
  );
}

export { GradesCard };
