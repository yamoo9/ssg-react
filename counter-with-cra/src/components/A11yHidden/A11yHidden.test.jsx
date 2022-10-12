import { render, screen } from '@testing-library/react';
import { A11yHidden } from './A11yHidden';

describe('A11yHidden 컴포넌트', () => {

  test('컴포넌트의 기본 렌더링 되는 요소는 span 이다.', () => {
    let value = '화면에 표시되지 않지만, 스크린 리더는 읽을 수 있는 콘텐츠';
    render(<A11yHidden>{value}</A11yHidden>);

    const target = screen.getByTestId('a11y-hidden');
    expect(target.nodeName.toLowerCase()).toBe('span');
  });

  test('컴포넌트의 기본 클래스 이름은 "A11yHidden" 이다.', () => {
    render(<A11yHidden>기본 클래스 이름은 A11yHidden</A11yHidden>);
    const target = screen.getByTestId('a11y-hidden');
    expect(target).toHaveClass('A11yHidden');
  });

  test('컴포넌트에 사용자가 추가한 사용자 정의 클래스 이름 설정이 가능하다.', () => {
    render(<A11yHidden className="user-defined-className">클래스 확장 테스트</A11yHidden>);
    const target = screen.getByTestId('a11y-hidden');
    expect(target).toHaveClass('A11yHidden', 'user-defined-className');
  });
  
  test('컴포넌트는 사용자의 필요에 따라 렌더링 될 요소의 이름을 변경할 수 있다.', () => {
    let tagName = 'h2';
    render(<A11yHidden as={tagName} className="user-defined-className">span이 아닌 {tagName} 요소로 렌더링 되어야 함</A11yHidden>);
    const target = screen.getByTestId('a11y-hidden');
    expect(target.localName).toBe(tagName);
  });

});
