/* eslint no-eval: 0 */
const Reducer = (state={result:' ',history:[],formula:[],isShowHistory: false}, action) =>
{
    switch(action.type){
        case 'ALL_CLEAR':
            
            return{
                ...state,
                result:' ',
                history:[],
                formula:[],
                
                
            }
            
        case 'CLEAR':
            return{
                ...state,
                result:' ',
                
            }
        case 'BACK':
            return{
                ...state,
                result:state.result.slice(0,state.result.length - 1)
                
                
            }
        case 'BUTTON_CLICKED':
            return{
                ...state,
                result: state.result + action.res,
                formula: state.formula.concat(action.res)
                
            }
        case 'ON_EQUAL':
            const newformula=state.result.concat(action.res);
            console.log(state);
            const newres= eval(state.result);
            const newItem = {
                formula:newformula,
                result:newres,
            }

            return{
                ...state,
                result:newres,
                history:state.history.concat(newItem,newres)
                
                
            }
        case 'ON_HISTORY':
            return{
                ...state,
                isShowHistory: !state.isShowHistory
            }
        case 'CLEAR_HISTORY':
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

export default Reducer;