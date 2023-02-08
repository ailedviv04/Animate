import React, { useEffect, useContext } from 'react';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";

const SearchBar = ({ filterType }) => {
    const { state, dispatch } = useContext(CardFilterContext);

    const handleChange = (e) => {
        dispatch({
            type: actions.searchCards,
            payload: e.target.value
        });
    };

    const submitData = (e) => {
        e.preventDefault();
    }

    return ( 
        <form onSubmit={submitData}>
            <input name="searchBar" placeholder="Buscar..." value={state.searchBar} onChange={handleChange} />
            <button type="button">Buscar</button>
            <p>{filterType}</p>
        </form>
    );
}
 
export default SearchBar;