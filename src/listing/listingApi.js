import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filter/cuisineFilter';
import CostFilter from '../filter/costFilter';

const url = "https://edumatojulyapi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    constructor(props) {
        super()

        this.state = {
            restaurantList: ''
        }
    }


    setDataAsPerFilter = (sortedData) => {
        this.setState({ restaurantList: sortedData })
    }


    render() {
        return (
            <div className="row">
               
                <div id="mainListing">
                    <div id="filter">
                        <center><h2>Filter</h2></center>
                        <CuisineFilter restPerCusinie={(data) => { this.setDataAsPerFilter(data) }} />
                        <hr />
                        <CostFilter restPerCost={(data) => { this.setDataAsPerFilter(data) }} />
                        <hr />
                    </div>
                    <ListingDisplay listData={this.state.restaurantList} />
                </div>

            </div>
        )
    }

    // callapi 
    componentDidMount() {
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId)
        axios.get(`${url}${mealId}`)
            .then((res) => { this.setState({ restaurantList: res.data }) })
    }

}

export default Listing