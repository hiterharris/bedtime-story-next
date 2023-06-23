import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Desktop',
})`
  ${() => {
    return css`
    .main,
    .main input {
      font-size: 16px;
      line-height: 24px;
      color: #353740;
      font-family: "ColfaxAI", Helvetica, sans-serif;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .main form {
      display: flex;
      flex-direction: column;
      width: 320px;
      // margin-top: 320px;
    
    }
    .main input[type="text"] {
      padding: 12px 16px;
      border: 1px solid #10a37f;
      border-radius: 4px;
      margin-bottom: 24px;
      outline-color: #10a37f;
    }
    .main ::placeholder {
      color: #8e8ea0;
      opacity: 1;
    }
    .main input[type="submit"] {
      padding: 12px 0;
      color: #fff;
      background-color: #10a37f;
      border: none;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      height: 48px;
      width: 200px;
      margin: auto;
    }
    .main .result {
      font-weight: bold;
      margin: 260px 240px 0 240px;
      line-height: 32px;
      color: white;
    }
    `
  }};
`;