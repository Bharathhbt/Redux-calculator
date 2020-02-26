

const getButtons = ({allClear,clear,back,onEqual,buttonClicked}) => ([
    { title: 'AC', functionToCall: allClear},
    { title: 'C', functionToCall: clear},
    { title: 'BCK', functionToCall: back},
    ...['%', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '/'].map((title) => ({
        title,
        functionToCall: buttonClicked
    })

    ),
   
    { title: '=', functionToCall: onEqual},
    
    
  ])
  export default getButtons;

 