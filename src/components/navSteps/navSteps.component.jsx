import { useDispatch, useSelector } from "react-redux";

import { InActiveNumber, NavStepsConatainer, Number } from "./navSteps.styles";
import { activeCartNavBtn } from "../../features/activeBtnSlice";

const NavSteps = () => {
  const { cartNavBtns, activeCartBtnPathname } = useSelector(
    (store) => store.activeBtn
  );
  const { pickUpId } = useSelector((store) => store.location);
  const dispatch = useDispatch();

  return (
    <NavStepsConatainer>
      {cartNavBtns.map((el) =>
        el.active ? (
          el.link !== "/shoppingCart/address" ? (
            <Number
              key={el.link}
              to={el.link}
              onClick={() => dispatch(activeCartNavBtn(el.link))}
              active={activeCartBtnPathname}
              link={el.link}
            >
              {el.name}
            </Number>
          ) : el.link === "/shoppingCart/address" && pickUpId !== "" ? (
            <Number
              key={el.link}
              to="/shoppingCart/address/pickUp"
              onClick={() =>
                dispatch(activeCartNavBtn("/shoppingCart/address"))
              }
              active={activeCartBtnPathname}
              link="/shoppingCart/address/pickUp"
            >
              {el.name}
            </Number>
          ) : (
            <Number
              key={el.link}
              to="/shoppingCart/address/delivery"
              onClick={() =>
                dispatch(activeCartNavBtn("/shoppingCart/address"))
              }
              active={activeCartBtnPathname}
              link="/shoppingCart/address/delivery"
            >
              {el.name}
            </Number>
          )
        ) : (
          <InActiveNumber key={el.link}>{el.name}</InActiveNumber>
        )
      )}
    </NavStepsConatainer>
  );
};

export default NavSteps;
