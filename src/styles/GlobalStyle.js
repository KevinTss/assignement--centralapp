import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    background-color: #edf5e1;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
