function groupBy (key, array, transformValue) { 
    return array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      let val = obj
      if (typeof transformValue === 'function') {
          val = transformValue(val)
      }
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(val);
      return objectsByKeyValue;
    }, {})
  };

const countryCodes = require('./index')
const tinTypes = countryCodes.customArray(
    { value: '{tinType}', name: '{countryNameEn}' },
    {
      filter: (countryData) => countryData.tinType !== '',
    },
  )

const finalTinTypes = {}


  console.log('tinTypes', JSON.stringify(countryCodes.utils.groupBy('value', tinTypes, tinType => tinType.name), null, 2))