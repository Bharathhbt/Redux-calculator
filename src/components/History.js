import React from 'react';
import '../styles/History.css';
import { Button } from '@material-ui/core';
import {clearHistory} from '../actions/Action';
import { connect } from 'react-redux';


class History extends React.Component {
  render() {
    const historyClassName = this.props.isShowHistory ? "history" : "history hidden";
    return (
      <div className={historyClassName}>
        <div className="history-list" >
          {
            this.props.history.map((item, index) => {
              return (
                <div key={index} className="history-item">  
              <div className="history-item-result"  >{item.formula}{item.result}</div>
              <hr/>
                </div>
              )
            })
          }
        </div>
        <div className="bottom-btns">
          <Button id="clear-history" onClick={this.props.clearHistory}>Clear</Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    history: state.history,
    isShowHistory: state.isShowHistory
});

const mapDispatchToProps = dispatch => ({
    clearHistory: () => dispatch(clearHistory())

});

export default connect(
    mapStateToProps,mapDispatchToProps,
)(History);