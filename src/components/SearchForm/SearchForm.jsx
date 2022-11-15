import { useState } from "react";
import { SearchBar, Form, InputSearch, ButtonSearch } from './SearchForm.styled'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons";


export const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handelSearchChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const handelSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('🦄 Boolshit!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <SearchBar>
            <Form
                onSubmit={handelSubmit} >
                <InputSearch
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search..."
                    name="search"
                    value={query}
                    onChange={handelSearchChange}
                />
                <ButtonSearch type="submit">
                    <IconContext.Provider value={{ size: '24px' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </ButtonSearch>
            </Form>
        </SearchBar>
    ); 
};