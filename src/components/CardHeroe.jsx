import React from 'react'
import { Link } from "react-router-dom";

const CardHeroe = ({ hero }) => {
  return (

    <div className="col-12 col-sm-6 col-lg-3 my-2 p-1">
      <img src={`https://dh-heroes-app.herokuapp.com/assets/${hero.slug}.jpg`} alt={`${hero.superhero} image`} width={250} height={400} />
      <div className="card-body p-2">
        <h4> {hero.name} {hero.superhero} </h4>
        <Link className="btn btn-outline-success w-100" to={`/hero-detail/${hero.slug}`}> Details</Link>

      </div>
    </div>

  )
}

export default CardHeroe