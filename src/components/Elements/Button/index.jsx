const Button = (props) => {
  //Destructuring Untuk Memberikan Nilai Default pada properties
  const { children = "harap isi", classname = "bg-black" } = props;
  //Kembalikan component html button
  return (
    <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
