import React, { Component } from 'react';
import '../styles/Buttons.css';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import { allClear, back, clear, onEqual, buttonClicked, onHistory } from '../actions/Actionss';
import History from './History';
import getButtons from './Config';
class Buttons extends Component {
  constructor(props) {
    super(props);
    
    this.buttons = getButtons(props);

  }

 



  render() {
    const { isShowHistory, result, onHistory} = this.props;
    return (
      <div className="Forms">
        <form className="display">
          <textarea type="text" id="input" name="input" value={result} readOnly  />
        </form>
        <div className="toolbar">
          <div className="toolbar-item" id="view-history" onClick={onHistory}>{isShowHistory ? "Keypad" : "History"}</div>

        </div>
        {
          this.props.isShowHistory
            ? <History />

            : <div className="Buttons">

            {
               this.buttons.map(({title, functionToCall}) =>{
                 
                 return(
                 <Button variant="contained" key={title} disableRipple onClick={() => functionToCall(title)}>{title}</Button>
                 )
               } )
            }
            </div>

        }



      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  result: state.result,
  history: state.history,
  formula: state.formula,
  isShowHistory: state.isShowHistory


})

const mapDispatchToProps = dispatch => ({
  allClear: (aclr) => dispatch(allClear(aclr)),
  back: (bck) => dispatch(back(bck)),
  clear: (clr) => dispatch(clear(clr)),
  onEqual: (eql) => dispatch(onEqual(eql)),
  buttonClicked: (val) => dispatch(buttonClicked(val)),
  onHistory: () => dispatch(onHistory())
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Buttons);
