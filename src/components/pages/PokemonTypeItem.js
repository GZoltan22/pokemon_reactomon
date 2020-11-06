

const typeStyle = {
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
}

const PokemonTypeItem = props => {
        return (
            <div style = {typeStyle} className="card">
                <p>{ props.pokemonType.name }</p>
            </div>
        )
}

export default PokemonTypeItem
