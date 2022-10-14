// import { useFetch } from 'hooks';
import { ErrorBoundary, TiltCardContainer } from 'components';
import Container from 'components/Container';
import { ThemeProvider } from 'contexts/theme';

export default function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <ThemeProvider>
          <TiltCardContainer />
          <Container />
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}
