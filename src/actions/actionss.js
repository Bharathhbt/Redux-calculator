
export const onAllClear = (aclr) =>{
    return {
     type: 'ONALLCLEAR',
     res: aclr   
    }
}

export const onBackSpace = (bck) =>{
    return {
     type: 'ONBACKSPACE',
     res: bck   
    }
}
export const onClear = (clr) =>{
    return {
     type: 'ONCLEAR',
     res: clr   
    }
}
export const onEqual = (eql) =>{
    return {
     type: 'ONEQUAL',
     res: eql   
    }
}
export const buttonClicked = (val) =>{
    return {
     type: 'BUTTONCLICKED',
     res: val   
    }
    
}
export const onHistory = () =>{
    return {
        type:'ONHISTORY',
        res: ''
    }
}
export const onClearHistory =() =>{
    return {
        type:'ONCLEARHISTORY',
        res: ''
    }
}