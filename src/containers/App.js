import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';

import { connect } from 'react-redux';
import { setSearchField, getCats } from '../actions';

const mapStateToProps = state => {
    return {
        searchFieldText: state.searchCats.searchFieldText,
        loading: state.getCats.loading,
        cats: state.getCats.cats,
        error: state.getCats.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeSearch: (event) => dispatch(setSearchField(event.target.value)),
        onGetCats: () => dispatch(getCats())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onGetCats();
    }

    render() {
        const { searchFieldText, onChangeSearch, loading, cats, error } = this.props;
        const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchFieldText.toLowerCase()));

        let content;
        if (error) {
            content = (<h2>Error: {error.toString()}</h2>)
        } else {
            content = loading ? 
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
                <SearchBox changeSearch={onChangeSearch} />
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
