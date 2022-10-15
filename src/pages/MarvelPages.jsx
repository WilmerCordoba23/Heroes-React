import React, { useEffect, useState } from 'react'
import CardHeroe from '../components/CardHeroe';

const MarvelPages = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {

    const url = "https://dh-heroes-app.herokuapp.com/api/publisher/marvel";

    fetch(url)
      .then(response => response.json())
      .then(({ data }) => {
        setHeroes(data)
      })

  }, [])


  return (
    <section>
      <div className='container mt-5'>
        <h1>MarvelPages</h1>
        <div className='row'>
          {
            heroes.map(heroe =>
              (<CardHeroe key={heroe.slug} hero={heroe} />)
            )
          }
        </div>
      </div>

    </section>
  )
}

export default MarvelPages