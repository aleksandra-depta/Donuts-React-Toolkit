import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddOrderMutation,
  useGetLocationQuery,
} from "../../services/donuts";
import { emptyForm } from "../../features/paymentSlice";
import { clearCart } from "../../features/cartSlice";
import { scrollToTop } from "../../features/scrollToTop";

import { HeadingH3, HeadingH4, TextMedium } from "../../styled";
import {
  List,
  ProductsList,
  Totalscontainer,
  Summary,
  Button,
} from "./cardTotals.styles";
import { stepAccessDefault } from "../../features/activeBtnSlice";

const CardTotals = () => {
  const { formsComplited } = useSelector((store) => store.payment);
  const {
    street,
    streetNumber,
    city,
    state,
    zip,
    name,
    lastName,
    phoneNumber,
    email,
    type,
  } = useSelector((store) => store.form);

  const { cart, products, totalPrice } = useSelector((store) => store.cart);
  const [addOrder] = useAddOrderMutation();
  const { pickUpId } = useSelector((store) => store.location);
  const { data: location } = useGetLocationQuery(pickUpId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const order = {
    type: type || "delivery",
    order: cart.map((item) => ({
      product: item.name,
      amount: item.amount,
      price: item.price,
    })),
    totalPrice,
    delivery: {
      street: street || location?.data.data.streetNumber,
      streetNumber: streetNumber || location?.data.data.streetNumber,
      city: city || location?.data.data.city,
      state: state || location?.data.data.state,
      zip: zip || location?.data.data.zip,
    },
    customer: {
      name,
      lastName,
      phoneNumber,
      email,
    },
  };

  const handleAddOrder = async () => {
    try {
      await addOrder(order).unwrap();
      navigate("/confirmation");
      scrollToTop();
      dispatch(clearCart());
      dispatch(emptyForm());
      dispatch(stepAccessDefault());
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  const cartItems = products.filter((item) => item.inCart === true);

  return (
    <Totalscontainer>
      <ProductsList>
        {cartItems?.map((product) => (
          <List key={product._id}>
            <HeadingH4>{product.name}</HeadingH4>
            <TextMedium>
              <span>{product.amount}</span> x{" "}
              <span>{product.price.toFixed(2)}</span>
            </TextMedium>
          </List>
        ))}
      </ProductsList>
      <Summary>
        <List>
          <TextMedium>Subtotal</TextMedium>
        </List>
        <List>
          <TextMedium>Tip (15%)</TextMedium>
          <TextMedium>$0.00</TextMedium>
        </List>
        <List>
          <TextMedium>Taxes</TextMedium>
          <TextMedium>$0.00</TextMedium>
        </List>
        <List>
          <HeadingH3>Total</HeadingH3>
          <HeadingH3>${totalPrice.toFixed(2)}</HeadingH3>
        </List>
      </Summary>
      {formsComplited && <Button onClick={handleAddOrder}>Pay now</Button>}
    </Totalscontainer>
  );
};

export default CardTotals;
