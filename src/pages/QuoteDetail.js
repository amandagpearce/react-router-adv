import React, { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from './../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch(); // returns the path you set (.path) + actual url (.url)
    const {sendRequest, data:loadedQuote, status, error} = useHttp(getSingleQuote, true);
    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (!loadedQuote.text) { // if a quote does not match the url param
        return <p>No quote found</p>;
    }

    return (
        <div>
            <h1>Quote detail</h1>
            
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            
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