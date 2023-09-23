import { useSelector } from "react-redux";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import Slider from "../../components/slider/slider.component";
import FindUs from "../../components/findUs/findUs.component";
import Footer from "../../components/footer/footer.component"

import { HeadingsContainer, LogoContainer, Subtitle } from "./home.styles";

import Logo from "../../img/logo.png";

const Home = () => {

  const { activeInputSearch } = useSelector((store) => store.cart);

  return (
    <div>
      { activeInputSearch ?
        <SearchBarResults/>
      :
        <>
          <HeadingsContainer>
            <LogoContainer src={ Logo } alt="Don'nuts logo" />
            <Subtitle>Tasty donuts every single day!</Subtitle>
          </HeadingsContainer>
          <Slider/>
          <FindUs/>
        </>
      }
      <Footer/>
    </div>
  );
};

export default Home;

