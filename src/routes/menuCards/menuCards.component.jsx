import CardMenu from "../../components/cardMenu/cardMenu.component";

import { Content } from "./menuCards.styles"

const MenuCards = ({ categories }) => {
  
  return (
    <Content>
      { categories.map((product) => (
        <CardMenu key={ product._id } product={ product } />  
      ))}
    </Content>
  )
}

export default MenuCards;

