import { css } from '@emotion/css';

const styledContainer = css`
  background: #202329;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: calc(100vh - 85px);
  color: white;

  .styled-contact-me__link-area {
    width: 100%;
    svg{
      color: #ff7700;
      width: 25px;
      height: 25px;
    }
  }

  .styled-contact-me__form {
    color: white;
    width: 100%;
    max-width: 600px;
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    justify-content: center;


    label {
      color: white;
    }
  }

  .styled-container__div {
    width: 100%;
    display: contents;
  }

  .styled-container__rating {
    color: #ff7700;
  }
`;

export { styledContainer };
