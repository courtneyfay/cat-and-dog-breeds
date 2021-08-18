import { useState } from 'react';
import Header from './components/Header';
import PetType from './components/PetType';
import BreedSearch from './components/BreedSearch';
import styled from 'styled-components';
import { Breed } from './types/Breed';
import { StringTypeOfPet } from './types/TypeOfPet';

const Background = styled.div`
  background: #064574;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [petType, setPetType] = useState<StringTypeOfPet | undefined>();
  const [breedData, setBreedData] = useState<Breed[] | undefined>();

  return (
    <Background>
      <Header />
      <PetType
        setBreedData={setBreedData}
        setPetType={setPetType}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {petType && (
        <BreedSearch
          breedData={breedData}
          petType={petType}
          isLoading={isLoading}
          error={error}
        />
      )}
    </Background>
  );
}

export default App;
