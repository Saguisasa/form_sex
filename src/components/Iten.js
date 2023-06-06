import PropTypes from 'prop-types'
function Item({ marca, ano_lancamento}) {
return ( 
<> 
    <li>
        {marca} - {ano_lancamento}
    </li>
</>
)
}

Item.popTypes = {
    marca: PropTypes.string,
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,

}

export default Item 