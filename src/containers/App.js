import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchedCat: '',
            error: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ cats: users }))
        .catch(error => this.setState({ error }));
    }

    render() {
        const { cats, searchedCat, error } = this.state;
        const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchedCat.toLowerCase()));

        let content;
        if (error) {
            content = (<h2>Error: {error.toString()}</h2>)
        } else {
            content = !cats.length ? 
                    (<h1 className='navy'>Loading...</h1>) : 
                    (<Scroll>
                        <ErrorBoundry>
                            <CardList cats={filteredCats} />
                        </ErrorBoundry>
                    </Scroll>)
        }

        return (
            <div className='tc'>
                <h1 className='f1 navy'>Cat Friends</h1>
                <SearchBox changeSearch={this.onChangeSearch} />
                {content}
            </div>
        );
    }

    onChangeSearch = event => {
        this.setState({ searchedCat: event.target.value });
    }
}

export default App;
