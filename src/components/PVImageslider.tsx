const PVImageslider = () => {
  return (
    <>
      <div className="w-1/2 flex gap-3">
        <div className="w-[100px] h-auto max-h-[400px] overflow-y-auto">
          {Array.from({ length: 8 }).map((_, index: number) => (
            <div
              key={index}
              className="w-[70px] mb-3 bg-zinc-800 rounded-md h-[70px]"
            ></div>
          ))}
        </div>
        <div className="flex-1 h-[400px] bg-zinc-800 rounded-md"></div>
      </div>
    </>
  );
};

export default PVImageslider;
