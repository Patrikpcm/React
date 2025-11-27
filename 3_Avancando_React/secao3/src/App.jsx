import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';

function App() {
  const [count, setCount] = useState(0)


  const cars =[
                {id:1, brand:"Ferrari", color: "Amarela", newCar: true, km: 0},
                {id:1, brand:"Toyota", color: "Cinza", newCar: false, km: 200000},
                {id:1, brand:"mitsubishi", color: "Preta", newCar: false, km: 190000},
                {id:1, brand:"BYD", color: "Branca", newCar: true, km: 0},
              ];
  return (
    <>
      <h1>Seção 3 - Avançando em React</h1>
      
      {/*Imagem em public - importa normalmente*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>

      {/*Imagem em assets - são incluídas a partir de import*/}
      <div>
        <img src={City} alt="Cidade" />  
      </div>

      <ManageData/>
      <ListRender/>
      {/*Exemplo de renderização condicional*/}
      <ConditionalRender/> 

      {/*Exemplo de prop - passar dados de pai para filho*/}
      <ShowUserName name="Gogola"/> 
      
      {/*Exemplo de Destructuring em Props */}
      <CarDetails brand="Ford" km={0} color="Blue"/> 

      {/*Exemplo de reaproveitamento de componentes*/}
      <CarDetails brand="Mitsubishi" km={185000} color="black" newCar={false}/>
      <CarDetails brand="Toyota" km={10} color="gray" newCar={true}/>

      <hr />

      {/*Loop em array de objetos - utilizando todos os conceitos anteriores*/}
      {cars.map( (car) =>(
      <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}

      {/*Utilizando fragments */}
      <Fragments/>
    </>
  )
}

export default App
