import styled, {keyframes} from 'styled-components'
import ContentLoader from "react-content-loader";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledTextSkeleton = styled(ContentLoader)`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;