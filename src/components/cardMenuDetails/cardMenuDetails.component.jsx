import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { closeDetailModal } from "../../features/modalCardDetails/modalDetailsSlice";
import Counter from "../counter/counter.component";
import { scrollToTop } from "../../features/scrollToTop/scrollToTop";

import { BtnBlackSmall, BtnBrownDarkSmall, BtnBrownSmall, BtnInactiveSmall, HeadingH1Brown, HeadingH3, HeadingH4, LinkSmallGrey, TextMedium, TextSmall } from "../../styled";
import { ButtonsContainer, CardDetailsContainer, Content, Description, IconClose, Image, LogoContainer, PriceContent, RowConent, TextContent } from "./cardMenuDetails.styles"

import Logo from "../../img/logo.png";

const CardMenuDetails = ({ product }) => {

  const dispatch = useDispatch();
  const [ showMoreOpen, setShowMoreOpen ] = useState(false);

  return (
    <>
      <CardDetailsContainer>
        <Content>
          <Image src={require(`../../img/products/${ product.image }`)} alt="Donut image" />
          <Description>
            <TextContent>
              <LogoContainer src={ Logo } alt="Don'nuts logo" />
              <HeadingH1Brown>{ product.name }</HeadingH1Brown>
              <TextMedium>{ product.description }</TextMedium>
              <LinkSmallGrey onClick={() => setShowMoreOpen(!showMoreOpen)}>See More</LinkSmallGrey>
              { showMoreOpen === true && 
                <>
                  <div>
                    <HeadingH4>Allergens</HeadingH4>
                    <RowConent>
                      { product.allergens.map(item =><TextMedium key={ item }>{ item }</TextMedium> )}
                    </RowConent>
                  </div>
                  <div>
                    <HeadingH4>Nutrition</HeadingH4>
                    <TextMedium>{ product.nutrition } kcal per donut</TextMedium>
                    <TextMedium>Adults need around 2000 kcal per day</TextMedium>
                  </div>
                </>
              }
            </TextContent>
            <PriceContent>
              <Counter product={ product }/>
              { product.priceTotal ? ( 
                <HeadingH3>
                $ { Number.parseFloat(product.priceTotal).toFixed(2) } 
                </HeadingH3>
              ) : (
                <RowConent>
                  <HeadingH3>$ { product.price.toFixed(2) }</HeadingH3>
                  <TextSmall>/per 1</TextSmall>
                </RowConent>
              )}
            </PriceContent>
            <ButtonsContainer>
              { product.inCart === true ? (
                <BtnBrownSmall to='/shoppingCart/cart' onClick={() => scrollToTop()}>
                  <ion-icon size='large' name="cart-outline"></ion-icon>
                </BtnBrownSmall>
              ) : (
                product.amount > 0 ? (
                  <BtnBrownDarkSmall onClick={() => dispatch(addItem(`${product._id}`))}>Add to cart</BtnBrownDarkSmall>
                ) :       
                  <BtnInactiveSmall>Add to cart</BtnInactiveSmall>
              )}  
              <BtnBlackSmall onClick={() => dispatch(closeDetailModal())}>Menu</BtnBlackSmall>
              <IconClose onClick={() => dispatch(closeDetailModal())} >
                <ion-icon size='large' name="close-outline"></ion-icon>
              </IconClose>
            </ButtonsContainer>
          </Description>
        </Content>
      </CardDetailsContainer>
    </>
  )
}

export default CardMenuDetails;