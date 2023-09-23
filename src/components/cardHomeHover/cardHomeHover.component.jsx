import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice"
import Counter from "../counter/counter.component";
import { scrollToTop } from "../../features/scrollToTop/scrollToTop";

import { BtnBrownSmall, BtnInactiveSmall, HeadingH3, HeadingH4, TextMedium, TextSmall } from "../../styled";
import { CardContainer, Image, Button, PriceContent } from "./cardHomeHover.styles";

const CardHomeHover = ({ product }) => {

  const dispatch = useDispatch();
  
  return (
    <CardContainer>
      <Image src={ require(`../../img/products/${ product.image }`) } alt="Donut image" />
      <HeadingH3>{ product.name }</HeadingH3>
      <TextMedium>{ product.subtitle }</TextMedium>
      <HeadingH4>
        { product.priceTotal ? ( 
          <span>
          $ { Number.parseFloat(product.priceTotal).toFixed(2) } 
          </span>
        ) : (
          <PriceContent>
          <span>$ { product.price.toFixed(2) }</span>
            <TextSmall>/per 1</TextSmall>
          </PriceContent>
        )}
      </HeadingH4>
      <Counter product={ product }/>
      { product.inCart === true ? (
        <BtnBrownSmall to='/shoppingCart/cart' onClick={() => scrollToTop()}>
          <ion-icon size='large' name="cart-outline"></ion-icon>
        </BtnBrownSmall>
      ) : (
        product.amount > 0 ? (
          <Button onClick={() => dispatch(addItem(product._id))}>Add to cart</Button>
        ) :       
          <BtnInactiveSmall>Add to cart</BtnInactiveSmall>
      )}  
    </CardContainer>           
  )
}

export default CardHomeHover;

