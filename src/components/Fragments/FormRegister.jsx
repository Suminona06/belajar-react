import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="email"
        type="email"
        placeholder="example@email.com"
        name="email"
      />
      <InputForm
        label="username"
        type="text"
        placeholder="enter your username here.."
        name="username"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="enter your password here.."
        name="password"
      />
      <InputForm
        label="re-password"
        type="password"
        placeholder="return your password here..."
        name="password"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
