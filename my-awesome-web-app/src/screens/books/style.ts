import css from 'styled-jsx/css';

export const container = css`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .books-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: left;
    width: 500px;
  }
  button {
    margin: 50px;
  }
`;
