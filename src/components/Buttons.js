import React from 'react';
import './Buttons.css';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import {onAllClear,onBackSpace,onClear,onEqual,buttonClicked,onHistory} from '../actions/actionss';
import History from './History'

class Buttons extends React.Component {
    

  render() {
    
    return (
    <div className="Forms">
        <form className="display">       
             <textarea type="text" id="input" name="input" value={this.props.result} />
        </form>
        <div className="toolbar">
          <div className="toolbar-item" id="view-history" onClick={this.props.onHistory}>{this.props.isShowHistory ? "Keypad" : "History"}</div>
          
        </div>
        {
            this.props.isShowHistory
            ? <History/>
        
         :  <div className="Buttons">
                
                <Button  variant="contained" disableRipple   onClick={() => this.props.onAllClear("clear-all")} > AC </Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.onClear(" ")} >C</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.onBackSpace("backspace")}>BCK</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("%")} >%</Button>
            
                
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("7")} >7</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("8")} >8</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("9")} >9</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("*")} >*</Button>
           
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("4")} >4</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("5")} >5</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("6")} >6</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("-")} >-</Button>
           
                
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("1")} >1</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("2")} >2</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("3")} >3</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("+")} >+</Button>
            
                
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("0")} >0</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked(".")} >.</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.onEqual("=")} >=</Button>
                <Button  variant="contained" disableRipple   onClick={() => this.props.buttonClicked("/")} >/</Button>
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
    onAllClear: (aclr) => dispatch(onAllClear(aclr)),
    onBackSpace: (bck) => dispatch(onBackSpace(bck)),
    onClear: (clr) => dispatch(onClear(clr)),
    onEqual: (eql) => dispatch(onEqual(eql)),
    buttonClicked: (val) => dispatch(buttonClicked(val)),
    onHistory: () => dispatch(onHistory())
});

export default connect(
    mapStateToProps,mapDispatchToProps,
)(Buttons);
