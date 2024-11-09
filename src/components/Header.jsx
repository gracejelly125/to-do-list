import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const Header = () => {
  return (
    <>
      <Title>
        <p>My Todo List</p>
        <p>React</p>
      </Title>
    </>
  );
};

export default Header;
