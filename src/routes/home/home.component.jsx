import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import Slider from "../../components/slider/slider.component";
import FindUs from "../../components/findUs/findUs.component";
import Footer from "../../components/footer/footer.component";

import {
  HeadingsContainer,
  LogoContainer,
  NavBackground,
  Subtitle,
} from "./home.styles";
import Logo from "../../img/logo.png";
import DonutSmall from "../../img/donutSmall.png";

const Home = () => {
  const { activeInputSearch } = useSelector((store) => store.cart);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionFindUs = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px" }
    );
    observer.observe(sectionFindUs.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div>
      {activeInputSearch ? (
        <SearchBarResults />
      ) : (
        <>
          <HeadingsContainer>
            <NavBackground
              src={DonutSmall}
              alt="Donut Background Image"
              loading="lazy"
            />
            <LogoContainer src={Logo} alt="Don'nuts logo" loading="lazy" />
            <Subtitle>Tasty donuts every single day!</Subtitle>
          </HeadingsContainer>
          <Slider />
          <div ref={sectionFindUs}>
            <FindUs isIntersecting={isIntersecting} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
