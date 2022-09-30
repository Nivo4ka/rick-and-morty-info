import { css } from "@emotion/css";

export default css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .styled-characterpage__container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .styled-characterpage__image {
    width: auto;
    height: auto;
  }

  .styled-characterpage__info-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;