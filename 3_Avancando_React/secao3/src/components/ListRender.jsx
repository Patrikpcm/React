import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "José", "Maria"]);

    const [users, setUsers] = useState([
        {id:1, name: "Matheus", age:31},
        {id:2, name: "Patrik", age:28},
        {id:3, name: "Luiz", age:50},
    ]);

    //Utilizando Previus State para deletar um valor aleatório na lista
    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random() * 4 );
    
        setUsers((prevUsers)=>{
            console.log(prevUsers);
            return prevUsers.filter((user)=> randomNumber !== user.id);
        });
    };

    return (
        <div>
            <h1>ListRender</h1>
            <ul>
                {list.map((item, i) => ( //iterar listas sem a propriedade Key gera um warning no console (mas funciona).
                    <li key={i}>{item}</li> //é necessário uma chave única
                ))}
            </ul>
            <ul>
                {users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random</button>
        </div>
  )
}

export default ListRender