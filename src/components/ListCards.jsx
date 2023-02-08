import React, { useEffect, useContext } from 'react';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";
import { colorHEX } from '../helpers';
import CardUser from './CardUser';
import api from '../helpers/api';

const ListCards = () => {
    const { state, dispatch } = useContext(CardFilterContext);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: actions.getCards });
            try {
                const { data } = await api.get("/character")
                dispatch({ 
                    type: actions.getCardsSuccess,
                    payload: data.results
                });
                dispatch({ 
                    type: actions.filterCards,
                    payload: data.results
                });
            } catch (error) {
                dispatch({ 
                    type: actions.getCardsError,
                    payload: error
                });
            }
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (state.searchBar === "") {
            return dispatch({ 
                type: actions.filterCards, 
                payload: state.cards 
            });
        }
        const busqueda = state.cards.filter((item) => {
            const payload = state.searchBar.toLowerCase();
            const name = item.name.toLowerCase();
            if (name.includes(payload)) {
                return item;
            }
            return null;
        });
        dispatch({ type: actions.filterCards, payload: busqueda });
    }, [dispatch, state.searchBar, state.cards]);

    return ( 
        <div>
            <div>
                {state.cardsFilter ? 
                    state.cardsFilter.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <CardUser 
                                    id={item.id}
                                    name={item.name}
                                    gender={item.gender}
                                    origin={item.origin.name}
                                    type={item.type}
                                    image={item.image}
                                    color={colorHEX()}
                                    status={item.status}/>
                            </div>
                        )
                    }) 
                    : null 
                }
            </div>
        </div>
    );
}
 
export default ListCards;