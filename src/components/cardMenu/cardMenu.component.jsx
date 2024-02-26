import { useDispatch, useSelector } from "react-redux";
import { openDetailModal } from "../../features/modalCardDetails/modalDetailsSlice";
import CardMenuDetails from "../cardMenuDetails/cardMenuDetails.component";

import {
  BtnBlackSmall,
  BtnBrownSmall,
  HeadingH3,
  HeadingH3Brown,
  TextSmall,
} from "../../styled";
import {
  CardComponent,
  Image,
  CardDescription,
  CardBottom,
  LogoContainer,
} from "./cardMenu.styles";

import Logo from "../../img/logo.png";

const CardMenu = ({ product }) => {
  const { isOpen, openCard } = useSelector((store) => store.modalDetails);
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const selectedProduct = products.find((item) => item._id === openCard);

  return (
    <CardComponent>
      <Image
        src={require(`../../img/products/${product.image}`)}
        loading="lazy"
      />
      <CardDescription>
        <div>
          <LogoContainer src={Logo} alt="Don'nuts logo" loading="lazy" />
          <HeadingH3Brown>{product.name}</HeadingH3Brown>
        </div>
        <TextSmall>{product.description}</TextSmall>
        <CardBottom>
          <HeadingH3>${product.price.toFixed(2)}</HeadingH3>
          {product.inCart === true ? (
            <BtnBrownSmall
              onClick={() => dispatch(openDetailModal(product._id))}
            >
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </BtnBrownSmall>
          ) : (
            <BtnBlackSmall
              onClick={() => dispatch(openDetailModal(product._id))}
            >
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </BtnBlackSmall>
          )}
        </CardBottom>
      </CardDescription>
      {isOpen && <CardMenuDetails product={selectedProduct} />}
    </CardComponent>
  );
};
export default CardMenu;
