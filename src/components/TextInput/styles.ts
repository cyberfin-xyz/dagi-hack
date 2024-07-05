import styled from 'styled-components';

export const StyledInput = styled.input`
  all: unset;
  display: flex;
  padding: 18px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(242, 242, 242, 0.10);
  background: rgba(255, 255, 255, 0.03);

  width: calc(100% - 40px);

  cursor: text;
  text-align: left;
  
  color: #F2F2F2;
  font-family: "WorkSans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.14px;
  
  &::placeholder {
    opacity: 0.5;
  }
  
  //&:hover {
  //}
`;
