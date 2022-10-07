import { css, injectGlobal } from '@emotion/css';

export default injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
  }
`;

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

  .styled-home-div__main-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #202329;
  }

  .styled-nome-div__link {
    padding: 0 0 15px;
  }
`;

const styledMainComp = css`
  height: 100%;
`;

const styledContainer = css`
  /* background: #202329; */
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 100%;
  color: white;
  justify-content: center;

  .ant-space-item {
    width: 100%;
    display: contents;
  }

  .styled-container__div {
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

  .styled-container__rating {
    color: #ff7700;
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
  styledMainComp,
};
