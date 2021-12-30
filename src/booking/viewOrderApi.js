import React,{Component} from 'react';
import ViewDisplay from './viewOrderDisplay';
import axios from 'axios';

const url = "https://edumatojulyapi.herokuapp.com/viewOrder";

class ViewOrder extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render(){
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login first to see booking</h1>
                </div>
            )
        }
        return(
            <div className="container">
              
                <ViewDisplay orderData={this.state.orders}/>
            </div>
        )
    }

    // get orders 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;