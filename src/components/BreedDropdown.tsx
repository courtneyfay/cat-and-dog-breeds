import { Breed } from '../types/Breed';
import Select from 'react-select';

interface Props {
    breedData?: Breed[]
    isLoading: boolean
    error?: string
}

const BreedDropdown = ({
        breedData,
        isLoading,
        error,
    }: Props) => {
    const breedOptions = breedData?.map(breed => {
        return {
            value: breed.id,
            label: breed.name,
        };
    });

    if (error) {
        return <div>There was an error: { error }</div>
    }

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