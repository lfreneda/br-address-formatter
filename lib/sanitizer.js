class Sanitizer {
  constructor () {
    this.keywords = {
      street: ['streetName'],
      number: [],
      complement: [],
      neighborhood: [],
      city: [],
      state: [],
      postalCode: ['zipCode']
    }
  }

  sanitize (address) {
    const sanitizedAddress = {}

    for (const [keyword, value] of Object.entries(address)) {
      if (this.keywordExist(keyword)) {
        sanitizedAddress[keyword] = value
        continue
      }

      const alias = this.aliasFor(keyword)
      if (alias) {
        sanitizedAddress[alias] = value
        continue
      }
    }

    return sanitizedAddress
  }

  keywordExist (keyword) {
    return !!this.keywords[keyword]
  }

  aliasFor (keywordToCompare) {
    for (const [keyword, alias] of Object.entries(this.keywords)) {
      for (const aliasKeyword of alias) {
        if (keywordToCompare === aliasKeyword) {
          return keyword
        }
      }
    }

    return null
  }
}

module.exports = new Sanitizer()
