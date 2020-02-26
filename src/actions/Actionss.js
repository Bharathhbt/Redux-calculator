
export const allClear = (aclr) =>{
    return {
     type: 'ALL_CLEAR',
     res: aclr   
    }
}

export const back = (bck) =>{
    return {
     type: 'BACK',
     res: bck   
    }
}
export const clear = (clr) =>{
    return {
     type: 'CLEAR',
     res: clr   
    }
}
export const onEqual = (eql) =>{
    return {
     type: 'ON_EQUAL',
     res: eql   
    }
}
export const buttonClicked = (val) =>{
    return {
     type: 'BUTTON_CLICKED',
     res: val   
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