# country-codes-list
Module with list of codes per country, which includes:

- Country code (ISO 3166-1 alpha-2): Obtained from [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- Country Name: Each name in english and in the local country language
- Currency Code (ISO 4217): Obtained from [Wikipedia](https://en.wikipedia.org/wiki/ISO_4217)
- Currency Name (ISO 4217): Obtained from [Wikipedia](https://en.wikipedia.org/wiki/ISO_4217)
- TIN Code (Taxpayer Identification Number, also known as VAT in some countries): Obtained from [Wikipedia](https://en.wikipedia.org/wiki/VAT_identification_number)
- TIN Name: Obtained from [Wikipedia](https://en.wikipedia.org/wiki/VAT_identification_number)
- Official language code (usually from ISO 639-1, or ISO 639-3 otherwise)): Obtained from [Open Street Map](https://wiki.openstreetmap.org/wiki/Nominatim/Country_Codes). Returns only the first official language code per country
- Official language name: Each name in english and in the local country language
- Country Calling Code: The phone calling code for the country. Obtained from [Wikipedia](https://en.wikipedia.org/wiki/List_of_country_calling_codes#Alphabetical_listing_by_country_or_region). 
- Region: The Regional Classifications are from the [International Telecommunications Union](http://www.itu.int/ITU-D/ict/definitions/regions/index.html). Seen [here](https://meta.wikimedia.org/wiki/List_of_countries_by_regional_classification)


# Installation
## Install the NPM module
```bash
    npm install --save country-codes-list
```

## Usage

### customList method:

Just import the module and call the customList method. The first parameter must be the key you want for your object, and the second parameter must be a string with placeholders written as you need. The placeholders are defined between brackets (`{placeholder}`). 

The possible values for the object key and the placeholders are: 
- countryNameEn
- countryNameLocal
- countryCode
- currencyCode
- currencyNameEn
- tinType
- tinName
- officialLanguageCode
- officialLanguageNameEn
- officialLanguageNameLocal
- countryCallingCode
- region
- globalSouth

#### Example

```js
const countryCodes = require('country-codes-list')

const myCountryCodesObject = countryCodes.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}')
```

This will return an object like this one: 

```js
{
    'AD': '[AD] Andorra: +376',
    'AE': '[AE] United Arab Emirates: +971',
    'AF': '[AF] Afghanistan: +93',
    'AG': '[AG] Antigua and Barbuda: +1',
    'AI': '[AI] Anguilla: +1',
    'AL': '[AL] Albania: +355',
    'AM': '[AM] Armenia: +374',
    'AO': '[AO] Angola: +244',
    'AQ': '[AQ] Antarctica: +',
    'AR': '[AR] Argentina: +54',
    'AS': '[AS] American Samoa: +1',
    'AT': '[AT] Austria: +43',
    'AU': '[AU] Australia: +61',
    'AW': '[AW] Aruba: +297',
    ...
}

```