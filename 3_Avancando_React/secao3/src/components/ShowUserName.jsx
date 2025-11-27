import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h1>Props</h1>
        <p>O nome do usuário é: {props.name}</p>
    </div>
  )
}

export default ShowUserName