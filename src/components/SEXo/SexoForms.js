function SexoForms(){

function voceFezSexo(e){

e.preventDefault()
console.log("Parabens você concluiu o sexo com sucesso")

}

    return(

    <div>
<form onSubmit={voceFezSexo} >


<div>
<label htmlFor="name" >Nome:</label>
<input type="name"
id="name"
name="name"
placeholder="Digite o nome do sexologo" />
</div>
<div>
<label htmlFor="password" >Nome:</label>
<input type="password"
id="password"
name="password"
placeholder="Digite a senha do sexo" />

</div>
<div>
<input type="submit" value="Cadastrosexo"  />

</div>

</form>
    </div>
    )
}


export default SexoForms