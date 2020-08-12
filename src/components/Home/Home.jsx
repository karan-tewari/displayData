import React, { Component } from 'react';
import Logo from '../Logo/Logo';
// import Search from '../Search/Search';
import Card from '../Card/Card';

import Axios from 'axios';

class Home extends Component {

    state = {
        searchText : "",
        data : [],
        loaded:false,
        searchValue : ''
    }

    componentDidMount(){
        Axios.get("")
        .then(response => {
            this.setState({
                data : response.data,
                loaded: true
            })
        })
    }

    searchTextHandler = (e) => {
        this.setState({
            searchValue : e.target.value
        })
    }


    render(){
        let myCard = null;
        if(this.state.loaded){
            myCard = this.state.data.items.map(x=> {
                return <Card formattedUrl={x.formattedUrl} key={x.cacheId}/>
            })
        }
        else{
            myCard= null;
        }
        return(
            <div className="row">
                <div className="col-lg-4">
                    <Logo />
                </div>
                <div className="col-lg-8">
                <div className="SearchBoxContainer">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={(e) => this.searchTextHandler(e)}
                        value={this.state.searchValue}>
                    </input>
                </div>
                </div>
                <div className="col-lg-12">
                    {myCard}
                </div>
          </div>
    )}
}

export default Home;