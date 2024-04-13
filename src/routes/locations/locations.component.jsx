import { useSelector } from "react-redux";
import { useGetLocationsQuery } from "../../services/donuts";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import CardLocation from "../../components/cardLocation/cardLocation.component";
import Map from "../../components/map/map.component";
import Footer from "../../components/footer/footer.component";

import {
  LocationContainer,
  Button,
  ButtonsContainer,
  CardsContainer,
} from "./locations.styles";
import { BtnBrownLight } from "../../styled";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner.component";

const Locations = () => {
  const { activeInputSearch } = useSelector((store) => store.cart);
  const { data: locations, isSuccess, isLoading } = useGetLocationsQuery();
  const { pickUpId } = useSelector((store) => store.location);

  let locationsAndSelected = [];

  if (isSuccess) {
    const selected = locations.data.data.find(
      (location) => location._id === pickUpId
    );
    const rest = locations.data.data.filter(
      (location) => location._id !== pickUpId
    );
    if (pickUpId === "") {
      locationsAndSelected = locations.data.data;
    } else {
      locationsAndSelected = [selected, ...rest];
    }
  }

  return (
    <>
      {activeInputSearch ? (
        <SearchBarResults />
      ) : (
        <>
          {isLoading && <LoadingSpinner />}
          {isSuccess && (
            <LocationContainer>
              <div>
                <ButtonsContainer>
                  <BtnBrownLight>Pick Up</BtnBrownLight>
                  <Button to="/shoppingCart/address/delivery">Delivery</Button>
                </ButtonsContainer>
                <CardsContainer>
                  {locationsAndSelected?.map((location) => (
                    <CardLocation key={location._id} location={location} />
                  ))}
                </CardsContainer>
              </div>
              <Map locations={locations} />
            </LocationContainer>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default Locations;
