import React from 'react';
import QuoteForm from './../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }
    
    return (
        <div>
            <h1>New quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
};

export default NewQuote;