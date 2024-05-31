const Text = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="font-sans font-semibold text-4xl text-white text-center antialiased mt-10 py-5">
        {" "}
        {text}{" "}
      </h1>
    </div>
  );
};

export default Text;
