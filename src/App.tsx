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
  const [petType, setPetType] = useState<'cat' | 'dog' | undefined>();
  const [breedData, setBreedData] = useState<Breed[] | undefined>();

  return (
    <Background>
      <Header />
      <PetType
        setBreedData={setBreedData}
          setPetType={setPetType}
        />
      {petType && (
        <BreedSearch
          breedData={breedData}
          petType={petType}
        />
      )}
    </Background>
  );
}

export default App;
