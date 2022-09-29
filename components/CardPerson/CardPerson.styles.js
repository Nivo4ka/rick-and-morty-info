import { css } from '@emotion/css';

export default css`
  border-radius: 0.5rem;
  background: #3c3e44;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  .ant-card-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .styled-card__image {
    object-fit: cover;
    width: 220px;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .styled-card__info-section {
    padding: 13px;
    width: 100%;
  }

  h2 {
    color: white;
    font-size: 27px;
  }

  p {
    color: white;
    font-size: 18px;
  }

  .styled-card__name-point {
    color: #9e9e9e;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }
`;