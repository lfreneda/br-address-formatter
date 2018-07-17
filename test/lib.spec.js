const test = require('ava')
const brAddressFormatter = require('./../lib/index')

test('given empty address object address string should null', t => {
  let formattedAddress = brAddressFormatter({})
  t.is(formattedAddress, null)
})

test('given address object with postalCode address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ postalCode: '15085480'})
  t.is(formattedAddress, '15085-480')
})

test('given address object with postalCode and street address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ 
    postalCode: '15085480', 
    street: 'Rua dos Pinheiros' 
  })
  t.is(formattedAddress, 'Rua dos Pinheiros, 15085-480')
})

test('given address object with postalCode, street and city address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ 
    postalCode: '15085480', 
    street: 'Rua dos Pinheiros',
    city: 'São Paulo'
  })
  t.is(formattedAddress, 'Rua dos Pinheiros, São Paulo, 15085-480')
})

test('given address object with postalCode, street, city and state address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ 
    postalCode: '15085480', 
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo'
  })
  t.is(formattedAddress, 'Rua dos Pinheiros, São Paulo - São Paulo, 15085-480')
})

test('given address object with postalCode, street, city, state and neighborhood address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ 
    postalCode: '15085480', 
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo',
    neighborhood: 'Pinheiros'
  })
  t.is(formattedAddress, 'Rua dos Pinheiros - Pinheiros, São Paulo - São Paulo, 15085-480')
})

test('given address object with postalCode, street, city, state, neighborhood and number address string should as expected', t => {
  let formattedAddress = brAddressFormatter({ 
    postalCode: '15085480', 
    street: 'Rua dos Pinheiros',
    city: 'São Paulo',
    state: 'São Paulo',
    neighborhood: 'Pinheiros',
    number: '383'
  })
  t.is(formattedAddress, 'Rua dos Pinheiros, 383 - Pinheiros, São Paulo - São Paulo, 15085-480')
})