import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid green;
  border-radius: 10px;
  margin: 20px 10px;
`;

export const StyleWorking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  padding: 8px 8px 8px 18px;
  border: 1px solid red;
  border-radius: 10px;
  width: 220px;
  height: 120px;
`;

export const Msg = styled.p`
  margin: 20px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 15px;
  margin: 18px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  padding: 6px;
  margin-left: ${(props) => props.$primary && "auto"};

  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

export const StyleTodoForm = styled.div`
  form {
    display: flex;
    margin: 20px 5px 0;
    gap: 10px;
    align-items: center;
  }

  input {
    width: 300px;
    display: flex;
    font-size: 14px;
    padding: 5px;
    border: 1px solid red;
    border-radius: 8px;
  }
`;
