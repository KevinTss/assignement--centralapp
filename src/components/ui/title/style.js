import styled from "styled-components";

import Title from "./Title";

export default styled(({ ...props }) => <Title {...props} />)`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  color: #1d254f;
`;
