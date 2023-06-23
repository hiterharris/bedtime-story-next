import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Desktop',
})`
  ${(props) => {
    const { background } = props;
    return css`
      background-color: #121030;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;

      .App {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .mooin-icon {
        width: 10vw;
        height: 10%vh
      }
    `
  }};
`;