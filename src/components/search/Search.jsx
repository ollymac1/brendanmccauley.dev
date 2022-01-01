import { InputStyles } from './Search.styles';

function Search({ placeholder, onChange, value }) {
	return (
		<InputStyles
			onChange={onChange}
			value={value}
			type='search'
			placeholder={placeholder}
		></InputStyles>
	);
}

export default Search;
