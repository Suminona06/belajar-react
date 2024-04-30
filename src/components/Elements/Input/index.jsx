import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
  const { label, type, htmlFor, name, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
