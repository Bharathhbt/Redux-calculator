import React from 'react';
import Buttons from './components/Buttons'

import './App.css'
import { connect } from 'react-redux';
import Headers from './components/headers'
class App extends React.Component{

    render(){
        return(
            <div>

            <Headers/>
            <div className="calculator" >
                {   
                     <Buttons/>
                }
                
            </div>
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
  export default connect(
    mapStateToProps
  )(App);
  