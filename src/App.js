import React from 'react';
import Buttons from './components/Buttons'
import './App.css'
import Headers from './components/Headers'
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

 export default App;
  