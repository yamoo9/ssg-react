import { Button, IconButton } from 'components';

const App = () => (
  <div className="App" lang="en">
    <h1>React 컴포넌트 설계</h1>
    <Button
      onClick={() => console.log('저장')}
      onMouseEnter={() => console.log('호버 인')}
      onMouseLeave={() => console.log('호버 아웃')}
    >
      저장
    </Button>
    <IconButton onClick={() => console.log('취소')}>취소</IconButton>
  </div>
);

export default App;
