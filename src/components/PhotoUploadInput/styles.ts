import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const StyledInputContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 62px;
  background: #212121;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 62px;
`;