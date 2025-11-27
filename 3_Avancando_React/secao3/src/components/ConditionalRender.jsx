import {useState} from 'react'

const ConditionalRender = () => {
  
    const[x] = useState(false);
    const[name] = useState("João");

    return (
    <div>
        <h1>Exibição condicional</h1>
        {!x && <p>Esse trecho é exibido se x for true!</p>}
        {/*If ternário*/}
        <h1>If ternário</h1>
        {name == 'João' ? <div>Sim! O nome é João</div> : <div>Não! O nome não é João.</div>}
    </div>
  )
};

export default ConditionalRender