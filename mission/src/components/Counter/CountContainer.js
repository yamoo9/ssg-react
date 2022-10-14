import { string } from 'prop-types';
import styled from 'styled-components/macro';
import { A11yHidden } from 'components';

export default function CountContainer({
  id,
  headline,
  className,
  children,
  ...restProps
}) {
  return (
    <Container
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      aria-describedby={id}
      {...restProps}
    >
      <A11yHidden id={id}>{headline}</A11yHidden>
      {children}
    </Container>
  );
}

CountContainer.defaultProps = {
  headline:
    '카운트 증가 또는 감소 버튼을 눌러, 카운트 값을 변경할 수 있습니다.',
};

CountContainer.propTypes = {
  id: string.isRequired,
  headline: string,
  className: string,
};

/* ---------------------------------------------------------------------- */

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 5px;
  border-radius: 25px;
  padding: 0.6em 0.8em;
  font-family: 'Rubik', sans-serif;
  background: #efefef;
  color: #131313;
  box-shadow: 0 0 2px #888;
`;
