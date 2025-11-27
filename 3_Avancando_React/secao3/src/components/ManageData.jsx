/*Rerenderizar um componenete. Nesse exemplo a variável someData */
import {useState} from 'react'

const ManageData = () =>{
    var someData = 10;
    console.log(someData);
   

    const [number, setNumber] = useState(15); /*Declaração do useState*/
    console.log(number);
    return(
        <div>
            <p>ManageData</p>
            <p>Valor: {someData}</p>
            <button onClick={() =>{someData = 15}}>Mudar variável</button>

            {/*Atualizando o valor dinâmicamente utilizando o useState */}
            <p>Valor dinâmico: {number}</p>
            <button onClick={() => setNumber(number + 25)}> Mudar o state</button>
        </div>
    );
};

export default ManageData;