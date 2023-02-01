import React, { Fragment, useEffect, useContext } from 'react';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";

const SearchBar = ({ filterType }) => {
    const { state, dispatch } = useContext(CardFilterContext);

    useEffect(() => {
        dispatch({
            type: actions.searchCards,
            payload: ""
        });
    }, [dispatch]);

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
        <Fragment>
            <input name="searchBar" placeholder="Buscar..." value={state.searchBar} onChange={handleChange} />
            <button type="button">Buscar</button>
            <p>{filterType}</p>
        </Fragment>
    );
}
 
export default SearchBar;