import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuBtn } from "../../features/activeBtnSlice";
import SearchBarResults from "../../components/searchBarResults/searchBarResults.component";
import Footer from "../../components/footer/footer.component";

import { Icon, MenuLink, MenuLinks } from "./menu.styles";

const Menu = () => {
  const { activeInputSearch } = useSelector((store) => store.cart);
  const { menuBtns, activeMenuBtnPathname } = useSelector(
    (store) => store.activeBtn
  );
  const dispatch = useDispatch();

  return (
    <>
      {activeInputSearch ? (
        <SearchBarResults />
      ) : (
        <>
          <MenuLinks>
            {menuBtns.map((btn) => (
              <MenuLink
                key={btn.link}
                to={btn.link}
                onClick={() => dispatch(activeMenuBtn(btn.link))}
                active={activeMenuBtnPathname}
              >
                {btn.name}
                <Icon>
                  <ion-icon size="large" name={btn.icon}></ion-icon>
                </Icon>
              </MenuLink>
            ))}
          </MenuLinks>
          <Outlet />
        </>
      )}
      <Footer />
    </>
  );
};

export default Menu;
