/*
  Empty function filler
  used in props as default value
*/
export function noop () {}

/*
  Add zero before digit
*/
export function zfill (num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

/*
  convert timestamp to d.m.Y H:i:s
*/
export function formatUpdateDate (timestamp) {
  const date = new Date(timestamp)
  return `${zfill(date.getDate())}.${zfill(date.getMonth())}.${zfill(date.getFullYear())}, ${zfill(date.getHours())}:${zfill(date.getMinutes())}:${zfill(date.getSeconds())}`
}

/*
  Find country object by country name
*/
export function findCountry (countries, country) {
  if (countries && country) {
    return countries.find(countryObj => (
      countryObj.country === country
    ))
  }
  return null
}