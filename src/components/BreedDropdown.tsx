import { Breed } from '../types/Breed';
import Select from 'react-select';

interface Props {
    breedData?: Breed[]
    isLoading: boolean
}

const BreedDropdown = ({ breedData, isLoading }: Props) => {
    const breedOptions = breedData?.map(breed => {
        return {
            value: breed.id,
            label: breed.name,
        };
    });

    return (
        <Select
            isLoading={isLoading}
            placeholder='Start typing to find'
            isClearable={true}
            isSearchable={true}
            options={breedOptions}
        />
    )
}

export default BreedDropdown;