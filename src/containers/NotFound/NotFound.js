import React from 'react';
import NotFoundGif from '../../assets/notFound.gif';

const NotFound =()=>(
    <div className="not-found">
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <picture>
            <img src={ NotFoundGif } alt="Not Found"/>
        </picture>
    </div>
);

export default NotFound;