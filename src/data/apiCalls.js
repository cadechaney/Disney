

const fetchCharacters = () => {
  return fetch('https://api.disneyapi.dev/character?page=7&pageSize=50')
  .then(res => res.json())
}

export default fetchCharacters