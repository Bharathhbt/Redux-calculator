import React,{Component} from 'react';
import './History.css';
import { Button } from '@material-ui/core';
import {onClearHistory} from '../actions/actionss';
import { connect } from 'react-redux';


class History extends React.Component {
  constructor(props) {
    super(props);
    this.historyList = React.createRef();
  }

  

  render() {
    const historyClassName = this.props.isShowHistory ? "history" : "history hidden";

    return (
      <div className={historyClassName}>
          
        <div className="history-list" ref={this.historyList}>
          {
            this.props.history.map((item, index) => {
              return (
                <div key={index} className="history-item">
                  
              <div className="history-item-result" value={item.result} >{item.formula}{item.result}</div>
              <hr/>
                </div>
              )
            })
          }
        </div>
        <div className="bottom-btns">
          <Button id="clear-history" onClick={this.props.onClearHistory}>Clear</Button>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    result: state.result,
    history: state.history,
    fromula: state.fromula,
    isShowHistory: state.isShowHistory
});

const mapDispatchToProps = dispatch => ({
    onClearHistory: () => dispatch(onClearHistory())

});

export default connect(
    mapStateToProps,mapDispatchToProps,
)(History);