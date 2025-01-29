import MyComponent from "./MyComponent";

const TemplateExpressions = () =>{
    const name = "Trikpa";
    const data = {
        age : 35,
        job: "programer",
    }

    return(
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como: {data.job}</p>
            <p>Sua idade: {data.age}</p>
            <MyComponent/>
        </div>
    )
};

export default TemplateExpressions;