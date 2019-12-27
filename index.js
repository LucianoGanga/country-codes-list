const groupBy = require('./utils/groupBy')
const supplant = require('./utils/supplant')
const countriesData = require('./countriesData')

module.exports = {  
  /**
   * Returns some module utils
   */
  utils: {
    groupBy: groupBy
  },

  /**
   * Returns the list with all the countries data
   */
  all: function () {
    return countriesData
  },
  /**
   * Filters the list of countries and returns those matching with the filter criteria
   * @param {String} countryProperty - The property to use in the filter. Must be any of the country properties (countryCode, currencyCode, etc)
   * @param {String} value - The value to use in the filter
   */
  filter: function (countryProperty, value) {
    return countriesData.filter(countryData => countryData[countryProperty] === value)
  },
  /**
   * Find a country by a property and return the first match
   * @param {String} countryProperty - The property to use in the search. Must be any of the country properties (countryCode, currencyCode, etc)
   * @param {String} value - The value to use in the filter
   */
  findOne: function (countryProperty, value) {
    return countriesData.find(countryData => countryData[countryProperty] === value)
  },
  /**
   * Returns a collection with fields mapped as requested
   * @param {*} fields - Map of fields and placeholders 
   */
  customArray: function (fields = { name: '{countryNameEn} ({countryCode})', value: '{countryCode}'}, { sortBy, sortDataBy, filter } = {}) {
    const finalCollection = []

    let data = countriesData
    if (typeof filter === 'function') {
      data = data.filter(filter)
    }

    if (sortDataBy) {
      // ignore upper and lowercase
      const collator = new Intl.Collator([], { sensitivity:'accent' })
      data.sort((a, b) => collator.compare(a[sortDataBy], b[sortDataBy]))
    }

    data.forEach(countryData => {
      let collectionObject = {}
      for (const field in fields) {
        collectionObject[field] = supplant(fields[field], countryData)
      }
      finalCollection.push(collectionObject)
    })

    if (sortBy && fields[sortBy]) {
      // ignore upper and lowercase
      const collator = new Intl.Collator([], {sensitivity:'accent'})
      finalCollection.sort((a, b) => collator.compare(a[sortBy], b[sortBy]))
    }

    return finalCollection
  },
  /**
   * Returns a custom object with the passed key as object key and a value made up with
   * values set in the placeholders of the label variable
   * @param {*} key - Key used to construct the object to return
   * @param {*} label - Placeholder like string, with all the fields that you want to use
   */
  customList: function (key = 'countryCode', label = '{countryNameEn} ({countryCode})', { filter } = {}) {
    const finalObject = {}
    let data = countriesData
    if (typeof filter === 'function') {
      data = data.filter(filter)
    }
    data.forEach(countryData => {
      const value = supplant(label, countryData)
      finalObject[countryData[key]] = value
    })

    return finalObject
  }
}
