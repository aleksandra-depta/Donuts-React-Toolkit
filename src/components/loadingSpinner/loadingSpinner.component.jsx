import { ColorRing } from "react-loader-spinner";
import { Container } from "./loadingSpinner.styles";

const Loading = () => {
  return (
    <Container>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ca935f", "#9d7753", "#b88b62", "#9e6d3f", "#b37e4c"]}
      />
    </Container>
  );
};

export default Loading;
