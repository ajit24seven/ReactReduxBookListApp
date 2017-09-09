import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{

    render(){
        if(!this.props.book){
            return <div>sdf</div>
        }
        return(
            <div>
                <h6>Book Name: {this.props.book.title}</h6>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)