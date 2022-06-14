import styled from "styled-components";

const StyledAvailableMeals = styled.div`
  .meals {
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: meals-appear 1s ease-out forwards;
  }

  .meals ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mealsLoading {
    text-align: center;
    color: white;
  }

  .mealsError {
    text-align: center;
    color: red;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default StyledAvailableMeals;
