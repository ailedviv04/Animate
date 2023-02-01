import React, { Fragment } from 'react';
import {
    Wrapper,
    Container
} from '../styles/styled.js';
import SearchBar from '../components/SearchBar.jsx';
import ListCards from '../components/ListCards.jsx';

const Home = () => {
    return ( 
        <Fragment>
            <Wrapper>
                <Container>
                    <SearchBar filterType={"Se puede buscar por nombre"}/>
                </Container>
            </Wrapper>
            <ListCards />
        </Fragment>
    );
}
 
export default Home;