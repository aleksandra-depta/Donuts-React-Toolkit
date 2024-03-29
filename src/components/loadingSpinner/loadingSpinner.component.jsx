import { Container, Image } from "./loadingSpinner.styles";
import Donut from "../../img/donut.png";

const Loading = () => {
  return (
    <Container>
      <Image src={Donut} alt="Donut Image" loading="lazy" />
    </Container>
  );
};

export default Loading;
