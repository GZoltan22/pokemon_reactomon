import styled from "styled-components";

const Li = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const PokemonAbilities = (props) => {
  return props.abilities.map((ability) => (
    <Li className="card">
      <p>{ability.ability.name}</p>
    </Li>
  ));
};

export default PokemonAbilities;
