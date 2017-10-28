import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFTd2-fZcBE2RM1QLC3yU15weIJAn4m68';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Take this component's generated HTML and put it in the DOM
// Make an instance of the class by wrapping it the class in tags </>
ReactDOM.render(<App/>, document.querySelector('.container'));
