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
  city: 'São Paulo',
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