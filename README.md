# br-address-formatter

Uma biblioteca estupidamente simples para formatar endereços estilo google lindão, manja?

### Pra que?

Para transformar endereços em objeto (geralmente persistidos em algum lugar) e tranformar em uma string formatada lindona estilo Google, sabe?

### Instalação

```shell
npm install br-address-formatter
```

### Uso

```javascript
const brAddressFormatter = require('br-address-formatter')

brAddressFormatter({
  postalCode: '15085480'
}) // '15085-480'

brAddressFormatter({
  postalCode: '15085480',
  street: 'Rua dos Pinheiros'
}) // 'Rua dos Pinheiros, 15085-480'

brAddressFormatter({
  postalCode: '15085480',
  street: 'Rua dos Pinheiros',
  city: 'São Paulo'
}) // 'Rua dos Pinheiros, São Paulo, 15085-480'

brAddressFormatter({
  postalCode: '15085480',
  street: 'Rua dos Pinheiros',
  city: 'São Paulo',
  state: 'São Paulo'
}) // 'Rua dos Pinheiros, São Paulo - São Paulo, 15085-480'

brAddressFormatter({
  postalCode: '15085480',
  street: 'Rua dos Pinheiros',
  city: 'São Paulo',address
  state: 'São Paulo',
  neighborhood: 'Pinheiros'
}) // 'Rua dos Pinheiros - Pinheiros, São Paulo - São Paulo, 15085-480'

brAddressFormatter({
  postalCode: '15085480',
  street: 'Rua dos Pinheiros',
  city: 'São Paulo',
  state: 'São Paulo',
  neighborhood: 'Pinheiros',
  number: '383'
}) // 'Rua dos Pinheiros, 383 - Pinheiros, São Paulo - São Paulo, 15085-480'

```

### API

<table>
  <tr>
    <th>Keyword</th>
    <th>Alias</th>
  </tr>
  <tr>
    <td>street</td>
    <td>-</td>
  </tr>
  <tr>
    <td>number</td>
    <td>-</td>
  </tr>
  <tr>
    <td>complement</td>
    <td>-</td>
  </tr>
  <tr>
    <td>neighborhood</td>
    <td>-</td>
  </tr>
  <tr>
    <td>city</td>
    <td>-</td>
  </tr>
  <tr>
    <td>state</td>
    <td>-</td>
  </tr>
  <tr>
    <td>postalCode</td>
    <td>zipCode</td>
  </tr>
</table>