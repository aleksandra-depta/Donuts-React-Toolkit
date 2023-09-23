import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { compliteCity, compliteEmail, compliteLastName, compliteName, complitePhoneNumber, compliteState, compliteStreet, compliteStreetNumber, compliteZip, deliveryType } from "../../features/form/formSlice";
import { activeAddressBtn, activeCartNavBtn, stepAccess } from "../../features/activeBtn/activeBtnSlice";
import { successForm } from "../../features/payment/paymentSlice";
import { scrollToTop } from "../../features/scrollToTop/scrollToTop"
import FormContact from "../../components/formContact/formContact.component";

import { NavBtns, Button, FormButton, AddressBtn } from "./addressForm.styles";
import { removePickUpId } from "../../features/location/locationSlice";

const AddressForm = () => {

  const { cartNavBtns } = useSelector((store) => store.activeBtn);
  const { pickUpId } = useSelector((store) => store.location);
  const { activeAddressBtnPathname } = useSelector((store) => store.activeBtn);
  const dispatch = useDispatch();
  const methods = useForm();
  const navigate = useNavigate(); 
  
  const onSubmit = (data) => {
    dispatch(compliteStreet(data.street))
    dispatch(compliteStreetNumber(data.streetNumber))
    dispatch(compliteCity(data.city))
    dispatch(compliteState(data.state))
    dispatch(compliteZip(data.zip))
    dispatch(compliteName(data.name))
    dispatch(compliteLastName(data.lastName))
    dispatch(complitePhoneNumber(data.phoneNumber))
    dispatch(compliteEmail(data.email))

    navigate("/shoppingCart/payment"); 
    dispatch(activeCartNavBtn(cartNavBtns.map(el => el.link)));
    dispatch(successForm());
    dispatch(stepAccess('/shoppingCart/payment'))
  };

  return (
    <div>
      <NavBtns>
        <Button 
          to='/shoppingCart/address/delivery'
          onClick={() => {
            dispatch(activeAddressBtn('/shoppingCart/address/delivery'));
            dispatch(removePickUpId());
            dispatch(deliveryType('delivery'));
          }}
          active={ activeAddressBtnPathname }
        >
          delivery
        </Button>
        { pickUpId === '' ?
          <Button to='/locations' onClick={() => scrollToTop()}>
            pick up
          </Button>
        :
          <Button 
            to='/shoppingCart/address/pickUp'
            onClick={() => dispatch(activeAddressBtn('/shoppingCart/address/pickUp'))}
            active={ activeAddressBtnPathname }
          >
            pick up
          </Button>
        }
      </NavBtns>
      <FormProvider {...methods}>
        <form onSubmit={ methods.handleSubmit(onSubmit) }>
          <Outlet/>
          <FormContact/>
          <AddressBtn>
            <FormButton type='submit'>
              continue
            </FormButton>
          </AddressBtn>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddressForm;



