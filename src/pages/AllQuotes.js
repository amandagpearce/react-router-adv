import React from 'react';
import QuoteList from './../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: '1', author: 'Blabla1', text: 'Bleble 1'},
    {id: '2', author: 'Blabla2', text: 'Bleble 2'},
    {id: '3', author: 'Blabla3', text: 'Bleble 3'},
    {id: '4', author: 'Blabla4', text: 'Bleble 4'},
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;