const Events = () =>{
    const handleMyEvent = (e) => {
        console.log("Evento ativado!");
        console.log(e);
    };

    const renderSomenthing=(x)=>{
        if(x){
            return (<h1>Renderizando isso!</h1>);
        }
        else{
            return (<h1>Também posso renderizar isso!</h1>);
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou2!")}>Clique aqui 2!</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso não deveria existir! =(");
                    }
                }}>
                    Clique aqui 3!
                </button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    );
};

export default Events;