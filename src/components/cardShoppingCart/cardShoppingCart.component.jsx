import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import Counter from "../counter/counter.component";

import { HeadingH3, HeadingH4, TextSmall } from "../../styled"
import { CardShoppingCartContainer, Content, IconBin, PriceConent, ProductImage, RowContent } from "./cardShoppingCart.styles";

const CardShoppingCart = () => {

  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const cartItems = products.filter((item) => item.inCart === true);

  return (
    <>
      { cartItems.map( product => (
        <CardShoppingCartContainer key={ product._id }>
          <IconBin onClick={() => dispatch(removeItem( product._id ))}>
            <ion-icon size='large' name="trash-outline"></ion-icon>
          </IconBin>
          <ProductImage src={require(`../../img/products/${ product.image }`)} />
          <Content>
            <HeadingH3>{ product.name }</HeadingH3>
            <PriceConent>
              <RowContent>
                <HeadingH4>${ product.price.toFixed(2) }</HeadingH4>
                <TextSmall>/per 1</TextSmall>
              </RowContent>
              <Counter product={ product }/>
              <HeadingH3>${ product.priceTotal.toFixed(2) }</HeadingH3>
            </PriceConent>
          </Content>
        </CardShoppingCartContainer>
      ))}
    </>
  )
}

export default CardShoppingCart;