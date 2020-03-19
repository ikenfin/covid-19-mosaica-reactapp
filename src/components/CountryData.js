import React from 'react'
import './CountryData.css'

/*
  Country info view
*/
export default function CountryData ({ data }) {
  return <div className="covid19-countryData">
    <div className="covid19-countryData__infoblock covid19-countryData__active">
      <h3>{ data.activeCases } <span className="covid19-countryData__infoblock_dynamic">{ data.casesNew > 0 ? `(+${ data.casesNew })` : '' }</span></h3>
      <span>Заражений</span>
    </div>
    <div className="covid19-countryData__infoblock covid19-countryData__deaths">
      <h3>{ data.deathsTotal } <span className="covid19-countryData__infoblock_dynamic">{ data.deathsNew > 0 ? `(+${ data.deathsNew })` : '' }</span></h3>
      <span>Смертей</span>
    </div>
    <div className="covid19-countryData__infoblock covid19-countryData__recovered">
      <h3>{ data.recoveredTotal }</h3>
      <span>Выздоровлений</span>
    </div>
  </div>
}