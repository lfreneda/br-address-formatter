const formatPostalCode = function (postalCode) {
  postalCode = postalCode || ''
  postalCode = postalCode.replace(/[^0-9.]/g, '')
  return postalCode.slice(0, 5) + '-' + postalCode.slice(5)
}

module.exports = function (address) {
  if (!address) { return null }

  let formattedAddress = ''

  if (address.street) {
    formattedAddress += `${address.street}`
  }
  if (address.number) {
    if (formattedAddress.length > 0) { formattedAddress += ', ' }
    formattedAddress += address.number
  }
  if (address.complement) {
    if (formattedAddress.length > 0) { formattedAddress += ' - ' }
    formattedAddress += address.complement
  }

  if (address.neighborhood) {
    if (formattedAddress.length > 0) { formattedAddress += ' - ' }
    formattedAddress += address.neighborhood
  }

  if (address.city) {
    if (formattedAddress.length > 0) { formattedAddress += ', ' }
    formattedAddress += address.city
  }

  if (address.state) {
    if (formattedAddress.length > 0) { formattedAddress += ' - ' }
    formattedAddress += address.state
  }

  if (address.postalCode) {
    if (formattedAddress.length > 0) { formattedAddress += ', ' }
    formattedAddress += formatPostalCode(address.postalCode)
  }

  formattedAddress = formattedAddress.trim()

  if (formattedAddress === '') {
    return null
  }
  return formattedAddress
}
