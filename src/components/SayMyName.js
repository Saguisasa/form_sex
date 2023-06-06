
// Resumindo, as "prosps" no Node.js são como promessas entre módulos,
//permitindo que eles continuem a execução do código
//enquanto aguardam o cumprimento de uma operação assíncrona. 
//É uma forma de lidar com dependências e garantir a correta execução do código em um ambiente assíncrono.

function SayMyName(props) {
    return(
    
    <div>
        <p>teste da props {props.nome}, de boas?</p>

    </div>
)
}

export default SayMyName