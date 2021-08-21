import { createRef, useState } from 'react';
import Header from './components/Header';
import PetType from './components/PetType';
import BreedSearch from './components/BreedSearch';
import ScrollButton from './components/ScrollButton';
import styled from 'styled-components';
import { Breed } from './types/Breed';
import { StringTypeOfPet } from './types/TypeOfPet';

const Background = styled.div`
  background: #064574;
  width: 100vw;
  min-height: 200vh;
  overflow: hidden;
`;

const SecondPage = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 100vh;
`;

function App() {
  const secondPageRef = createRef<HTMLDivElement>();
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
      <ScrollButton
        petType={petType}
        secondPageRef={secondPageRef}
      />
      <SecondPage ref={secondPageRef}>
        {petType && (
          <BreedSearch
            breedData={breedData}
            petType={petType}
            isLoading={isLoading}
            error={error}
          />
        )}
      </SecondPage>
    </Background>
  );
}

export default App;
