import styled, { css } from 'styled-components';

export default styled.div.attrs({
  className: 'Loader',
})`
  ${(props) => {
    const { theme = {} } = props;
    return css`
    .loading {
        display: flex;
        justify-content: space-between;
        width: 180px;
        padding: 30px 0;
        margin: 0 auto;
        max-width: 100%;
    
        span {
            height: 20px;
            width: 20px;
            animation: pulse 1.5s ease-in-out 0s infinite;
            background-color: #fff;
            border-radius: 50%;
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        20% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    
    body {
      height: 100vh;
      background-color: #778899;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `
  }};
`;