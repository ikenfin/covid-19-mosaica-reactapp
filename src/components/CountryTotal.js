import React from 'react'

import './CountryTotal.css'

export default function CountryTotal ({ country }) {

  return <div className="covid19-CountryTotal">
    <h3 class="covid19-CountryTotal__title">Всего зарегистрированных случаев: <span className="covid19-CountryTotal__count">{ country.casesTotal }</span></h3>
  </div>
}