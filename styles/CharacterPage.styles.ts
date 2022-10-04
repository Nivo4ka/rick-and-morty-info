import { css } from '@emotion/css';

export default css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #202329;
  color: white;

  h2 {
    padding: 15px 0;
    margin: 0;
    color: white;
  }

  .styled-card__name-point {
    color: #9e9e9e;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  .styled-characterpage__container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px 15px 15px;
    min-height: calc(100vh - 85px);
  }

  .styled-characterpage__image {
    max-width: 300px;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 15px;
  }

  .styled-characterpage__info-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
