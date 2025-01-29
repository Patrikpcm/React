import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return(
        <div>
            <h1>Meu primeiro Componente!</h1>
            {/*Algum comentário - Comentários em REACT não aparecem no código HTML do navegador.*/}

            <MyComponent/>
        </div>
    )
};

export default FirstComponent;