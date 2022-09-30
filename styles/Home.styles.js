import { css } from '@emotion/css';

const styledTitle = css`
  font-size: 35px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin: 15px 0;
`;

const styledHomeDiv = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const styledContainer = css`
  background: #202329;
  width: 100%;
  max-width: 1280px;
  padding: 10px;
  display: flex;
  align-items: center;

  .ant-space-item {
    width: 100%;
    display: contents;
  }

  .styled-container__pagination {
    border-radius: 0.5rem;
    background: #3c3e44;
    width: 100%;
    max-width: 600px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    .ant-pagination-simple-pager {
      color: white;

      input {
        background-color: #202329;
      } 
    }
    
    .anticon {
      color: white;
    }
  }
`;

const styledCard = css`
background: wheat;
  max-width: 600px;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export {
  styledTitle,
  styledHomeDiv,
  styledContainer,
  styledCard,
};