import { Breed } from '../types/Breed';
import Select from 'react-select';

interface Props {
    breedData?: Breed[]
}

const BreedDropdown = ({ breedData }: Props) => {
    const breedOptions = breedData?.map(breed => {
        return {
            value: breed.id,
            label: breed.name,
        };
    });

    return (
        <Select
            placeholder='Start typing to find'
            isClearable={true}
            isSearchable={true}
            options={breedOptions}
        />
    )
}

export default BreedDropdown;