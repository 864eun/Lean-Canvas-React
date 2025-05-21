import { Outlet } from 'react-router-dom';
import Header from './components/TailwindCss/Header';
import Main from './components/TailwindCss/Main';
function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
