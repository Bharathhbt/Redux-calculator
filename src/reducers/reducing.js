const reducerss = (state={result:' ',history:[],formula:[],isShowHistory: false}, action) =>
{
    switch(action.type){
        case 'ONALLCLEAR':
            
            return{
                ...state,
                result:' ',
                history:[],
                formula:[],
                
                
            }
            
        case 'ONCLEAR':
            return{
                ...state,
                result:' ',
                
            }
        case 'ONBACKSPACE':
            return{
                ...state,
                result:state.result.slice(0,state.result.length - 1)
                
                
            }
        case 'BUTTONCLICKED':
            return{
                ...state,
                result: state.result + action.res,
                formula: state.formula.concat(action.res)
                
            }
        case 'ONEQUAL':
            const newformula=state.result.concat(action.res);
            const newres=eval(state.result);
            const newItem = {
                formula:newformula,
                result:newres,
            }

            return{
                ...state,
                result:newres,
                history:state.history.concat(newItem,newres)
                
                
            }
        case 'ONHISTORY':
            return{
                ...state,
                isShowHistory: !state.isShowHistory
            }
        case 'ONCLEARHISTORY':
            return{
                ...state,
                result:' ',
                history:[],
                formula:[]
            }

            
         default: return{
             ...state
         }   
             
    }
}

export default reducerss;