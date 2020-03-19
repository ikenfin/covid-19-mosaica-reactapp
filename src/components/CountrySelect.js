import React from 'react'
import { noop } from '../lib'

/*
  Country select view
*/
export default function CountrySelect ({ value = '', countries = [], onChange = noop }) {
  return <select value={ value } onChange={ onChange }>
    { countries.map(country => (
      <option key={ country.country } value={ country.country }>
        { country.label }
      </option>
    ))}
  </select>
}