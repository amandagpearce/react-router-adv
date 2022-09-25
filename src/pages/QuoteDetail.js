import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from './../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: '1', author: 'Blabla1', text: 'Bleble 1'},
    {id: '2', author: 'Blabla2', text: 'Bleble 2'},
    {id: '3', author: 'Blabla3', text: 'Bleble 3'},
    {id: '4', author: 'Blabla4', text: 'Bleble 4'},
];

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch(); // returns the path you set (.path) + actual url (.url)

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) { // if a quote does not match the url param
        return <p>No quote found</p>;
    }

    return (
        <div>
            <h1>Quote detail</h1>
            
            <HighlightedQuote text={quote.text} author={quote.author} />
            
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}> {/* nested dynamic route */}
                {/* path could also be "path='/quotes/:quoteId/comments" */}
                <Comments />
            </Route> 
        </div>
    );
};

export default QuoteDetail;