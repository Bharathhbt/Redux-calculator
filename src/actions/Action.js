
export const allClear = (allClears) =>{
    return {
     type: 'ALL_CLEAR',
     res: allClears   
    }
}

export const back = (backSpace) =>{
    return {
     type: 'BACK',
     res: backSpace   
    }
}
export const clear = (clears) =>{
    return {
     type: 'CLEAR',
     res: clears  
    }
}
export const onEqual = (equal) =>{
    return {
     type: 'ON_EQUAL',
     res: equal   
    }
}
export const buttonClicked = (value) =>{
    return {
     type: 'BUTTON_CLICKED',
     res: value   
    }
    
}
export const onHistory = () =>{
    return {
        type:'ON_HISTORY',
        res: ''
    }
}
export const clearHistory =() =>{
    return {
        type:'CLEAR_HISTORY',
        res: ''
    }
}