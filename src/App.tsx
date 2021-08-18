import Header from './components/Header';
import PetType from './components/PetType';
import BreedSearch from './components/BreedSearch';
import styled from 'styled-components';

const Background = styled.div`
  background: #064574;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Background>
      <Header />
      <PetType />
      <BreedSearch />
    </Background>
  );
}

export default App;
