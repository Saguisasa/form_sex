function Pessoa({nome, idade, profissao, foto}) {
    return (
    <div>
        <img src={foto} alt={nome} />
        <p> nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
    </div>
    )
}

export default Pessoa