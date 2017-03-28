import styled from 'styled-components';

export default styled.button`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: center;
  color: ${props => props.theme.textColorInverse};
  padding: 12px;
  background-color: ${props => props.theme.blue};
  border-radius: 3px;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.darkBlue};
  };
`;
