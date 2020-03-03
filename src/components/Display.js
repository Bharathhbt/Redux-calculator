import React, { Component } from 'react';
import './Buttons.css';
import { connect } from 'react-redux'

class Display extends Component{
    render(){
        return(
            <div className="display">
                <textarea type="text" id="input" name="input" value={this.props.result} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    result: state.result,
})

export default connect(
    mapStateToProps
)(Display);