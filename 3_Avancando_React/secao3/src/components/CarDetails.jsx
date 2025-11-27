const CarDetails = ({brand, km, color, newCar}) =>{ {/*Em vez de chamar props (objeto) eu listo diretamente as propriedades pela ordem de chegada e nome */}
    return(
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor: {color}</li>
                {newCar ? <li>Novo</li> : <li>Usado</li>}
            </ul>
            
        </div>
    )
}

export default CarDetails