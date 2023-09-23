import { useFormContext } from "react-hook-form";
import Input from "../input/input.component"

import { HeadingH3 } from "../../styled"
import { FormContent, RowContent } from "./formContact.styles"

const FormContact = () => {

  const methods = useFormContext();

  return (
    <>
      <HeadingH3>Contact</HeadingH3>
      <FormContent>
        <RowContent>    
          <Input 
            type={'text'} 
            name='name'
            label={`Name`} 
            placeholder={"Name"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ true }
          />   
          <Input 
            type={'text'} 
            name='lastName'
            label={`Last Name`} 
            placeholder={"Last Name"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ true }
          />   
        </RowContent>
        <RowContent>
          <Input 
            type={'tel'} 
            name='phoneNumber'
            label={`Phone Number`} 
            placeholder={"+00 000 000 000"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ true }
          />   
          <Input 
            type={'email'} 
            name='email'
            label={`Email`} 
            placeholder={"name@example.com"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ true }
          />   
        </RowContent>
      </FormContent>
    </>
  )
}

export default FormContact;