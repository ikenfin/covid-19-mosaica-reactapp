import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import CountryData from './CountryData';

const validData = {
  activeCases: 10,
  casesNew: 1,
  deathsTotal: 5,
  deathsNew: 0,
  recoveredTotal: 14
}

test('check if CountryData correctly renders with validData', () => {
  const { container } = render(<CountryData data={ validData } />);

  const active = container.querySelector('.covid19-countryData__active > h3')
  const activeInc = container.querySelector('.covid19-countryData__active > h3 > span')
  expect(getNodeText(active)).toBe(`${validData.activeCases} `)
  expect(getNodeText(activeInc)).toBe(`(+${validData.casesNew})`)

  const deaths = container.querySelector('.covid19-countryData__deaths > h3')
  const deathsInc = container.querySelector('.covid19-countryData__deaths > h3 > span')
  expect(getNodeText(deaths)).toBe(`${validData.deathsTotal} `)
  expect(getNodeText(deathsInc)).toBe('')

  const recoveredTotal = container.querySelector('.covid19-countryData__recovered > h3')
  expect(getNodeText(recoveredTotal)).toBe(`${validData.recoveredTotal}`)
});
