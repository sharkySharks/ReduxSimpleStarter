import React, { Component } from 'react';

// only class-based components have state, functional components do not
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // inside the constructor function is the only place where state
        // will be explicitly set, with =. don't do it anywhere else like this
        this.state = { term: '' };
    }

    // whenever state changes, the render function will be called
    render() {
        // onChange is a specific React-defined event handler
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} // the state is telling the input what its value is
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
