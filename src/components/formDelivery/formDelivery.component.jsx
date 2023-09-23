import { useFormContext } from "react-hook-form";
import Input from "../../components/input/input.component";

import { HeadingH3 } from "../../styled";
import { FormContent, RowContent } from "./formDelivery.styles";
import { useSelector } from "react-redux";

const FromDelivery = () => {

  const methods = useFormContext();
  const { type } = useSelector((store) => store.form);

  return (
    <>
      <HeadingH3>Delivery</HeadingH3>
      <FormContent>
        <RowContent>
          <Input 
            label={`Street`} 
            name='street'
            placeholder={"Street"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ type !== 'pickup' ? true : false }
          />
          <Input 
            label={`Number`} 
            name='streetNumber'
            placeholder={"Number"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ type !== 'pickup' ? true : false }
          />
        </RowContent>
        <RowContent>
          <Input 
            label={`City`} 
            name='city'
            placeholder={"City"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ type !== 'pickup' ? true : false }
          />   
        </RowContent>
        <RowContent>
          <Input 
            label={`State`} 
            name='state'
            placeholder={"State"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ type !== 'pickup' ? true : false }
          />   
          <Input 
            label={`Zip`} 
            name='zip'
            placeholder={"Zip"} 
            message={'Please fill out this field.'} 
            {...methods}
            required={ type !== 'pickup' ? true : false }
          />   
        </RowContent>
      </FormContent>
    </>
  )
}

export default FromDelivery;


