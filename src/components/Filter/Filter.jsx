import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <Label>
        <Input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
        />
      </Label>
    </>
  );
};
