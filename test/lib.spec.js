const test = require('ava')
const brAddressFormatter = require('./../lib/index')

test('given empty address object address string should null', expect => {
  const formattedAddress = brAddressFormatter({})
  expect.is(formattedAddress, null)
})

test('given address object with postalCode address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({ postalCode: '15085480' })
  expect.is(formattedAddress, '15085-480')
})

test('given address object with zipCode address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({ zipCode: '15085480' })
  expect.is(formattedAddress, '15085-480')
})

test('given address object with postalCode and street address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros, 15085-480')
})

test('given address object with postalCode, street and city address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros',
    city: 'São Paulo'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros, São Paulo, 15085-480')
})

test('given address object with postalCode, street, city and state address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros, São Paulo - São Paulo, 15085-480')
})

test('given address object with postalCode, street, city, state and neighborhood address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo',
    neighborhood: 'Pinheiros'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros - Pinheiros, São Paulo - São Paulo, 15085-480')
})

test('given address object with postalCode, street, city, state, neighborhood and number address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo',
    neighborhood: 'Pinheiros',
    number: '383'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros, 383 - Pinheiros, São Paulo - São Paulo, 15085-480')
})

test('given address object with postalCode, street, city, state, neighborhood, number and complement address string should as expected', expect => {
  const formattedAddress = brAddressFormatter({
    postalCode: '15085480',
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Pinheiros',
    complement: 'Ed.Alamac AP 133',
    number: '383'
  })
  expect.is(formattedAddress, 'Rua dos Pinheiros, 383 - Ed.Alamac AP 133 - Pinheiros, São Paulo - SP, 15085-480')
})
