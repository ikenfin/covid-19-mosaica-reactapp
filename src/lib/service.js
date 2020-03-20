/*
  Data fetcher
*/
class Covid19Service {
  constructor () {
    this.api = 'https://covid19.codeville.ru/api/v1'
  }
  async fetchData () {
    try {
      const response = await fetch(`${this.api}/last/full`)
      const json = await response.json()

      return [null, json]
    }
    catch (e) {
      return [e, null]
    }
  }
}

export default (new Covid19Service())