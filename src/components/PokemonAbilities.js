

const PokemonAbilities = props => {
        return (props.abilities.map(ability => (
        <li>{ability.ability.name}</li>
        ))
        )
}

export default PokemonAbilities
