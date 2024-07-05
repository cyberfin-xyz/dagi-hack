import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  opacity: 0.5;
`;

export const StyledInput = styled.input`
  all: unset;
  display: flex;
  padding: 18px 16px 18px 50px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(242, 242, 242, 0.10);
  background: rgba(255, 255, 255, 0.03);

  width: 100%;
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

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  
  //&:hover {
  //}
`;