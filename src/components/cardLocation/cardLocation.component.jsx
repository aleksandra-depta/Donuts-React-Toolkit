import { useDispatch, useSelector } from 'react-redux';
import { addPickUpId } from '../../features/location/locationSlice';
import { deliveryType } from '../../features/form/formSlice';

import { BtnBlackSmall, HeadingH4, TextMedium } from '../../styled'
import { CardContainer, Content, IconPin } from "./cardLocation.styles";

const CardLocation = ({ location }) => {
  
  const { pickUpId } = useSelector((store) => store.location);
  const dispatch = useDispatch();

  return ( 
    <CardContainer active={ pickUpId } id={ location._id }>
      <IconPin>
        <ion-icon size='large' name="location"></ion-icon>
      </IconPin>
      <Content>
        <HeadingH4>{ location.streetNumber } { location.street } St, </HeadingH4>
        <HeadingH4>{ location.city }, { location.state} { location.zip }</HeadingH4>
        <TextMedium>{ location.openingHours }</TextMedium>
        <TextMedium>{ location.phoneNumber }</TextMedium>
        <BtnBlackSmall to='/shoppingCart/address/pickUp' onClick={() => {
          dispatch(addPickUpId(location._id));
          dispatch(deliveryType('pick up'));
        }}>
          Select
        </BtnBlackSmall>
      </Content>
    </CardContainer>
   )
}

export default CardLocation;