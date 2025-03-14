/* eslint-disable react/jsx-key */
import { Link } from 'react-router';

/* 
1. fetch all of the pokemon
2. iterate through the pokemon list
3. for each pokemon object: { id: 1, name: 'pikachu', ... }
4. render <Link to=`/pokemons/${pokemon.id}`>{pokemon.name}</Link>
*/

const pokemons = [
  { id: 1, hp: 5, name: 'pikachu', img: '....' },
  { id: 2, hp: 10, name: 'bulbasaur', img: '....' },
  { id: 3, hp: 20, name: 'charizard', img: '....' },
  { id: 4, hp: 30, name: 'squirtle', img: '....' },
]

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {
          pokemons.map((pokemon) => {
            // return <li><a href={`/products/${pokemon.id}`}>{pokemon.name}</a></li> this is how you would do it with anchor tags
            // here we are using Link from react-router-dom
            return <li><Link to={`/products/${pokemon.id}`}>{pokemon.name}</Link></li>
          })
        }
      </ul>
    </>
  )
}

export default Products;