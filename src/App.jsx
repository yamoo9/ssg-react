import { Button } from './components/Button';

const App = () => (
  <div className="App" lang="en">
    <h1>React App</h1>
    <Button type="button" label="헤드라인 보기" />
    <Button type="button" label="디스크립션 보기" />
    <Button type="button" label="리스트 보기" />
    <Button type="button" label="리스트 감추기" />
  </div>
);

export default App;
