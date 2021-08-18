import { useState } from 'react';
import Header from './components/Header';
import PetType from './components/PetType';
import BreedSearch from './components/BreedSearch';
import styled from 'styled-components';
import { Breed } from './types/Breed';

const Background = styled.div`
  background: #064574;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  const [breedData, setBreedData] = useState<Breed[] | undefined>();

  return (
    <Background>
      <Header />
      <PetType setBreedData={setBreedData} />
      {breedData && (
        <BreedSearch breedData={breedData} />
      )}
    </Background>
  );
}

export default App;
