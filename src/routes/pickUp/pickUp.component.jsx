import { useSelector } from "react-redux";
import { useGetLocationQuery } from "../../services/donuts";

import { HeadingH3, HeadingH4, LinkSmallGrey } from "../../styled";
import { Content, PickUpContainer } from "./pickUp.styles";

const PickUp = () => {
  const { pickUpId } = useSelector((store) => store.location);
  const { data: location, isSuccess } = useGetLocationQuery(pickUpId);

  return (
    <>
      {isSuccess && (
        <PickUpContainer>
          <HeadingH3>Pick Up</HeadingH3>
          <Content>
            <div>
              <ion-icon size="large" name="location"></ion-icon>
            </div>
            <HeadingH4>
              {location.data.data.streetNumber} {location.data.data.street} St,{" "}
              {location.data.data.city} {location.data.data.state}{" "}
              {location.data.data.zip}{" "}
            </HeadingH4>
          </Content>
          <LinkSmallGrey to="/locations">View all locations</LinkSmallGrey>
        </PickUpContainer>
      )}
    </>
  );
};

export default PickUp;
