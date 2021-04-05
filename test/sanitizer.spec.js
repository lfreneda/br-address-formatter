const test = require('ava')
const sanitizer = require('../lib/sanitizer')

test('given empty address should be sanitized', expect => {
  const address = sanitizer.sanitize({})

  expect.deepEqual(address, {})
})

test('given address with wrong keywords should be sanitized', expect => {
  const address = sanitizer.sanitize({
    rua: 'Rua teste',
    numero: 'Numero teste',
    complemento: 'Complemento teste',
    bairro: 'Bairro teste',
    cidade: 'Cidade teste',
    estado: 'Estado teste',
    cep: 'CEP teste'
  })

  expect.deepEqual(address, {})
})

test('given address with correct keywords should be sanitized', expect => {
  const address = sanitizer.sanitize({
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    postalCode: 'CEP teste'
  })

  expect.deepEqual(address, {
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    postalCode: 'CEP teste'
  })
})

test('given address with correct and incorrect keywords should be sanitized', expect => {
  const address = sanitizer.sanitize({
    rua: 'Rua teste',
    numero: 'Numero teste',
    complemento: 'Complemento teste',
    bairro: 'Bairro teste',
    cidade: 'Cidade teste',
    estado: 'Estado teste',
    cep: 'CEP teste',
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    postalCode: 'CEP teste'
  })

  expect.deepEqual(address, {
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    postalCode: 'CEP teste'
  })
})

test('given address with correct and alias keywords should be sanitized', expect => {
  const address = sanitizer.sanitize({
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    zipCode: 'CEP teste'
  })

  expect.deepEqual(address, {
    street: 'Rua teste',
    number: 'Numero teste',
    complement: 'Complemento teste',
    neighborhood: 'Bairro teste',
    city: 'Cidade teste',
    state: 'Estado teste',
    postalCode: 'CEP teste'
  })
})
