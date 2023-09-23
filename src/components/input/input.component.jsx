import { useFormContext } from "react-hook-form";
import { InputForm, LabelForm, Message } from "./input.styles";

const Input = ({ label, placeholder, type, name, message, required }) => {

  const { register } = useFormContext();
  
  return (
    <LabelForm>
      { label }
      <InputForm 
        type={ type } 
        name={ name }
        placeholder={ placeholder }
        {...register( `${ name }`  )}
        required={ required } 
      ></InputForm>
    </LabelForm>
  )
}

export default Input;

