import Item from "./Iten"



function List() {
return(


<>
    <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="fiat" ano_lancamento={1964}/>
            <Item marca="renaut" ano_lancamento={1984}/>
            <Item />
        </ul>
</>

)
}
export default List