import React from 'react'

const Weather = ({temp}) => {

    if(temp < 15){
        return (<h5>It's Cold Outside</h5>)
    }
    else if(temp <= 25){
        return (<h5>It's the best climate right now !!</h5>)
    }
    else{
        return(<h5>It's Hot outside!!</h5>)
    }
}

export default Weather