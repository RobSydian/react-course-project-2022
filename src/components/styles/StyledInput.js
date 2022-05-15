import styled from "styled-components";

const StyledInput = styled.div`
  .input {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .input label {
    font-weight: bold;
    margin-right: 1rem;
  }

  .input input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

export default StyledInput;
