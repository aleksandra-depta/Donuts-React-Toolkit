import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navLinks } from "../../services/dataSideNavBts";
import { closeSideNav } from "../../features/modalSideNav/modalSideNavSlice";
import { activeMenuBtn } from "../../features/activeBtn/activeBtnSlice";
import { scrollToTop } from "../../features/scrollToTop/scrollToTop";

import { BtnBrown } from "../../styled";
import { Container, Content, EmptyDiv, IconClose, LogoContainer, NavContainer } from "./sideNav.styles";

import Logo from "../../img/logo.png";

const SideNav = () => {

  const { menuBtns } = useSelector((store) => store.activeBtn);
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <Container>
        <Content>
          <IconClose onClick={() => dispatch(closeSideNav())} >
            <ion-icon size='large' name="close-outline"></ion-icon>
          </IconClose>
          <Link to="/">
            <LogoContainer src={ Logo } alt="Don'nuts logo" onClick={() => dispatch(closeSideNav())}/>
          </Link>
          { navLinks.map((link) => (
            <BtnBrown 
              key={ link.link }
              to={ link.link } 
              onClick={() => {
                dispatch(closeSideNav());
                scrollToTop();
                dispatch(activeMenuBtn(menuBtns.map(btn => btn.link)))
              }}>
                { link.name }
            </BtnBrown>
          ))}
        </Content>
        <EmptyDiv onClick={() => dispatch(closeSideNav())}></EmptyDiv>
      </Container>
    </NavContainer>
  )
}

export default SideNav;
