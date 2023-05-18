import styled from "styled-components";

export const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41; /* Darker green */
  }

  &:disabled {
    background-color: #cccccc; /* Grey */
    cursor: not-allowed;
  }
`;
