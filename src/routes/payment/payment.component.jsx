import { useSelector } from "react-redux";
import { useGetLocationQuery } from "../../services/donuts";

import { HeadingH3, HeadingH4, TextMedium } from "../../styled";
import { Content, PaymentContainer, RowContent, Row } from "./payment.styles";

const Payment = () => {
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
  } = useSelector((store) => store.form);
  const { pickUpId } = useSelector((store) => store.location);
  const { data: location } = useGetLocationQuery(pickUpId);
  const { type } = useSelector((store) => store.form);

  return (
    <PaymentContainer>
      <HeadingH3>SUMMARY</HeadingH3>
      <Content>
        <HeadingH4>Contact</HeadingH4>
        <RowContent>
          <Row>
            <TextMedium>Name: </TextMedium>
            <HeadingH4>
              {name} {lastName}
            </HeadingH4>
          </Row>
          <Row>
            <TextMedium>Phone Number: </TextMedium>
            <HeadingH4>{phoneNumber}</HeadingH4>
          </Row>
          <Row>
            <TextMedium>Email: </TextMedium>
            <HeadingH4>{email}</HeadingH4>
          </Row>
        </RowContent>
      </Content>
      <Content>
        <HeadingH4>{type === "pick up" ? "Pick up" : "Delivery"}</HeadingH4>
        <RowContent>
          <Row>
            <TextMedium>
              {type === "pick up" ? "Pick up address: " : "Delivery address"}
            </TextMedium>
          </Row>
          <Row>
            {type === "pick up" ? (
              <HeadingH4>
                {location.data.data.streetNumber} {location.data.data.street}{" "}
                St, {location.data.data.city}, {location.data.data.state}{" "}
                {location.data.data.zip}
              </HeadingH4>
            ) : (
              <HeadingH4>
                {streetNumber} {street} St, {city}, {state} {zip}
              </HeadingH4>
            )}
          </Row>
        </RowContent>
      </Content>
      <Content>
        <HeadingH4>Payment</HeadingH4>
        <TextMedium>... </TextMedium>
      </Content>
    </PaymentContainer>
  );
};

export default Payment;
