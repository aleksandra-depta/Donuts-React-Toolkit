import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../features/modalHoverSlice";
import CardHomeHover from "../cardHomeHover/cardHomeHover.component";

import { HeadingH3, TextMedium } from "../../styled";
import {
  Card,
  IconShoppingCart,
  IconShoppingCartActive,
  ImageCard,
  TextContent,
} from "./cardHome.styles";

const CardHome = ({ product }) => {
  const { hovered } = useSelector((store) => store.modalHover);
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const selectedProduct = products.find((item) => item._id === hovered);

  return (
    <>
      {selectedProduct && product._id === selectedProduct._id ? (
        <CardHomeHover product={selectedProduct} />
      ) : (
        <Card
          onMouseOver={() => dispatch(openModal(product._id))}
          onMouseOut={() => dispatch(closeModal())}
        >
          <ImageCard
            src={require(`../../img/products/${product.image}`)}
            alt="Donut image"
            loading="lazy"
          />
          <TextContent>
            <HeadingH3>{product.name}</HeadingH3>
            <TextMedium>{product.title}</TextMedium>
          </TextContent>
          {product.inCart === true ? (
            <IconShoppingCartActive to="/shoppingCart/cart">
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </IconShoppingCartActive>
          ) : (
            <IconShoppingCart to="/shoppingCart/cart">
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </IconShoppingCart>
          )}
        </Card>
      )}
    </>
  );
};

export default CardHome;
