import React from 'react'
import './WorldData.css'

/*
  World info view
*/
export default function WorldData ({ data }) {
  return <React.Fragment>
    { (data.active && data.closed) ? (<div className="covid19-WorldData">
      <h3 className="covid19-WorldData__title">COVID-19 в мире</h3>
      <div className="covid19-WorldData__row">
        <div className="covid19-WorldData__col">
          <h3>Зарегистрировано: { data.active.cases }</h3>
          <p>Болеют: <strong>{ data.active.mild }</strong></p>
          <p>Серьёзные и критические случаи: <strong>{ data.active.serious }</strong></p>
        </div>
        <div className="covid19-WorldData__col">
          <h3>Закрыто: <strong>{ data.closed.cases }</strong></h3>
          <p>Смертей: <strong>{ data.closed.deaths }</strong></p>
          <p>Вылечилось: <strong>{ data.closed.recovered }</strong></p>
        </div>
      </div>
    </div>) : '' }
  </React.Fragment>
}