import styled from "styled-components";

import Text from "./Text";
import { getFontSize } from "./utils";

export default styled(({ size, isWhite, ...props }) => <Text {...props} />)`
  font-size: ${({ size }) => getFontSize(size || "m")};
  font-family: "Roboto", sans-serif;
  color: ${({ isWhite }) => (isWhite ? "white" : "#1d254f")};
`;
