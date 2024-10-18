import React from 'react'
import Son from './son'


const Father = (props) => {
  return (
    <div>
        <h2>
            Esto lo envio el abuelo:
            {props.text}
        </h2>
        <Son />
    </div>
  )
}

export default Father