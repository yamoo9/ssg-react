import styled from 'styled-components/macro';

export default function CountDisplay(props) {
  return <Output {...props} />;
}

const Output = styled.output`
  user-select: none;
  min-width: 2em;
  text-align: center;
  letter-spacing: -0.005em;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
`;
