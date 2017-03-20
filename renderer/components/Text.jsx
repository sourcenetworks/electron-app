import styled from 'styled-components';

function getColor(props) {
  if (props.muted) {
    return props.theme.darkGray;
  }

  return props.theme.textColor;
}

function getSize(props) {
  if (props.small) {
    return 14;
  }

  return 18;
}

export default styled.span`
  color: ${props => getColor(props)};
  font-size: ${props => getSize(props)}px;
`;
