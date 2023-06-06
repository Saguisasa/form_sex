import { useState } from 'react'
function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault() 
       console.log(`usuario ${name} foi cadastrado com a senha: ${passoword}`)
    }

    const [ name, setName ] = useState()
    const [ passoword, setPassword ] = useState()

    return(
    <div>
        <h1> Meu Cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="digite seu nome"
                onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div>
                <label htmlFor="name">Senha:</label>
                <input 
                type="password" 
                id="passowrd" 
                name="passoword"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <div>
                <input type="submit" value="cadastrar" />
            </div>
        </form>
    </div>
    )
 }
 
 export default Form