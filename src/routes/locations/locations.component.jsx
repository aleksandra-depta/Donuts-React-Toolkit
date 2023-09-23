import { useSelector } from "react-redux";
import { useGetLocationsQuery } from "../../services/donuts";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import CardLocation from "../../components/cardLocation/cardLocation.component";
import Map from "../../components/map/map.component";
import Footer from "../../components/footer/footer.component"

import { 
  LocationContainer, 
  Button,
  ButtonsContainer,
  CardsContainer
} from "./locations.styles";
import { BtnBrownLight } from "../../styled";

const Locations = () => {

  const { activeInputSearch } = useSelector((store) => store.cart);
  const { data: locations, isLoading, isSuccess, isError, error} = useGetLocationsQuery();

  return (
    <>
      { activeInputSearch ?
        <SearchBarResults/>
      : 
        <>
          { isSuccess &&
            <LocationContainer>
              <div>
                <ButtonsContainer>
                  <BtnBrownLight>Pick Up</BtnBrownLight>
                  <Button to='/shoppingCart/address/delivery'>Delivery</Button>
                </ButtonsContainer>
                <CardsContainer>
                  { locations.data.data.map(location => (
                    <CardLocation key={ location._id } location={ location } />
                  ))}
                </CardsContainer>
              </div>
              <Map locations={ locations } />
            </LocationContainer>
          }
        </>
      }
      <Footer/>
    </>
  )
}

export default Locations;