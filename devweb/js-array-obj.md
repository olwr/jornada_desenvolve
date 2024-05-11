# JavaScript: Arrays e Objetos

- [JavaScript: Arrays e Objetos](#javascript-arrays-e-objetos)
  - [Arrays](#arrays)
    - [Declarando e Acessando](#declarando-e-acessando)
    - [Métodos](#métodos)
    - [Iterações](#iterações)
    - [Spread Operator](#spread-operator)
  - [Objetos](#objetos)
    - [Acessando e Manipulando](#acessando-e-manipulando)
    - [This](#this)
    - [Objeto Literal e Referências](#objeto-literal-e-referências)
    - [Getters e Setters](#getters-e-setters)
    - [JSON](#json)
  - [Desestruturação de Listas e Objetos](#desestruturação-de-listas-e-objetos)

## Arrays

Lista ordenada, funciona como uma variável/referência que guarda mais de um valor. É uma estrutura de dados que serve para guardar e organizar elementos em um mesmo espaço de memória. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice - [0][1][2]...

No JavaScript, os arrays se comportam como uma lista de itens, sendo que esta lista começa a contar a partir do índice zero.

```js
const arrayName = [];
const arrayName = [item, item, item, ...];
```

```js
const colors = ["Blue", "Red", "Black", "Purple", "White", "Gray"];
```

Cada item é um elemento, cada elemento possui e é acessado por um índice, cada índice pode ter um item que possui mais de um elemento, ou seja, um array pode ter outro array como item.

Um array pode ter seus itens acessados, modificados, deletados e novos acrescentados à vontade. Mesmo não sendo boa prática, arrays no JS também aceitam itens com valores de tipos diferentes na mesma referência.

```js
const person = ['Oliwer', 22, true, null];
```

No JavaScript, arrays são considerados do tipo objeto, e podem conter objetos como seus itens.

### Declarando e Acessando

Cada item da lista é separado por vírgula e ocupa uma posição do array iniciando no índice zero. Essa forma é chamada de método literal de array.

Podemos acessar um elemento de um array usando o nome da variável seguido de colchetes e seu índice → `arrayName[0]`. É o array notion.

```js
const colors = ["Blue", "Red", "Black", "Purple", "White", "Gray"];

const firstItem = colors[0]; // Blue
const secondItem = colors[1]; // Red
const thirdItem = colors[2]; // Black
const lastItem = colors[colors.length - 1]; // Gray
```

Outra forma de acessar os elementos de um array é iterando dentro dele, ou seja, percorrendo todos os seus itens através de laços de repetição como: `while`, `for`, `for in`, `for of` e métodos como o `forEach()`.

**Length ↓**

Esta propriedade especifica o tamanho de um array, ou melhor, o número de elementos.

```js
const colors = ["Blue", "Red", "Black", "Purple", "White", "Gray"];
colors.length; // 6
```

**Matriz ↓**

Matriz, array de n (pode ter 2, 3, ...) dimensões ou lista de listas são algumas das formas que usam para descrever arrays que tem itens compostos por outro array.

```js
const arrayName = [[item, item, ...], [item, item, ...], [item, item, ...]]
```

```js
const listas = [[1, 2, 3], [4, 5, 6] , [7, 8, 9]]
listas[0]; // [1, 2, 3]
listas[1][2]; // 6
```

### Métodos

`indexOf()` → retorna o índice da primeira ocorrência do valor especificado. Recebe o item como parâmetro.

- Retorna sempre um número
- Retorna `-1` se o valor não for encontrado
- Começa pelo índice especificado e procura da esquerda para a direita
- Por padrão, a procura começa no primeiro elemento e e termina no último

```js
arrayName.indexOf(item, start); // item - required, start - optional

const colors = ["Blue", "Red", "Black", "Purple", "White", "Gray"];
let search = indexOf("Black", 4); // -1
let search = indexOf("Black"); // 2
```

`push()` → adiciona um item ao final do array. Recebe o(s) novo(s) item(s) como parâmetro.

- Adiciona n itens para o final do array
- Modifica o tamanho do array
- Retorna um número, o novo tamanho do array

```js
arrayName.push(item1, item2... itemN);
```

```js
colors.push('SteelBlue', 'Brown'); // 7
colors; // ["Blue", "Red", "Black", "Purple", "White", "Gray", "SteelBlue", "Brown"]
```

`unshift` → adiciona um item ao início do array. Recebe o(s) novo(s) item(s) como parâmetro.

- Adiciona n items ao início do array
- Modifica o tamanho do array
- Retorna um número, o novo tamanho do array

```js
arrayName.unshift(item1, item2... itemN);
```

```js
colors.unshift('Cyan', 'Violet'); // 9
colors; // ["Cyan", "Violet", "Blue", "Red", "Black", "Purple", "White", "Gray", "SteelBlue", "Brown"]
```

`pop` → remove o último item do array.

- Modifica o array original
- Retorna o elemento removido

```js
arrayName.pop();
```

```js
colors.pop(); // 'Brown'
colors; // ["Cyan", "Violet", "Blue", "Red", "Black", "Purple", "White", "Gray", "SteelBlue"]
```

`shift` → remove o primeiro item do array.

- Modifica o array original
- Retorna o elemento removido

```js
arrayName.shift();
```

```js
colors.shift(); // 'Cyan'
colors; // ["Violet", "Blue", "Red", "Black", "Purple", "White", "Gray", "SteelBlue"]
```

`slice` → remove items de uma posição a outra e retorna um novo array com os itens removidos. Recebe como parâmetros opcionais a posição inicial e final.

- Retorna os itens especificados como um novo array
- Seleciona de um começo especificado até (não incluso) um final especificado
- Se o final for especificado, ele só vai até o item do índice anterior ao final
- Não modifica o array original

```js
arrayName.slice(start, end); // start - required, end - optional
```

```js
colors.slice(1, 4); // ["Blue", "Red", "Black"]
```

`splice` → altera o array, podendo remover e adicionar itens.

- Altera o array
- Adiciona itens de acordo com a posição e itens repassados
- Remove itens a partir da posição inicial repassada e com o número do itens especificado

```js
arrayName.splice(start, n, newItem);

// start - defines the position where new elements should be added
// n - defines how many elements should be removed
// newItem - define the new elements to be added
```

```js
const ages = [21, 15, 33, 10, 59, 67];

ages.splice(0, 1, 22); // [22] | [22, 15, 33, 10, 59, 67]
ages.splice(0, 0); // [] | [22, 15, 33, 10, 59, 67]
ages.splice(0, 2); // [22, 15] | [33, 10, 59, 67]
ages.splice(2, 0, 45); // [] | [33, 10, 45, 59, 67]
```

`concat()` → concatena arrays, retornando um novo array.

- Não modifica os arrays originais
- Sempre retorna um novo array
- Pode receber n argumentos

```js
arrayName.concat(otherArray);
```

```js
const countToFive = [1, 2, 3, 4, 5];
const countToTen = [6, 7, 8, 9, 10];

const count = countToFive.concat(countToTen);
count // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Alguns outros métodos comuns são: `find()`, `findIndex()`, `lastIndex()`, `indexOf()`, `reduceRight()`, `includes()`, `reverse()` e `sort()`.

### Iterações

**For ↓**

O de uso mais comum e tradicional. Sua implementação é mais flexível, permitindo percorrer o array de formas diferentes (todo, metade, de trás para frente, etc) e incrementar ou decrementar a variável inicial a vontade.

```js
const arrayName = [value, value, value, ...];

for (let i = 0; i <= arrayName.length; i++) {
  // code here
}
```

**For Of ↓**

Mais conciso, mas também menos flexível; aqui a lógica que já existe no `for` tem seu processo mais automatizado, o que impede incrementos e condições manuais. 

Se a ideia for percorrer o array de forma mais direta (todo o array, começando sempre do primeiro elemento), ele é recomendado.

```js
const arrayName = [value, value, value, ...];

for (let value of arrayName) {
  // code here
}
```

Sua maior vantagem é que se pode selecionar diretamente o valor de cada elemento da lista.

**For Each ↓**

Método que percorre o array e invoca uma função (callback function) para cada elemento no array.

```js
const arrayName = [value, value, value, ...];

arrayName.forEach(functionName);

/* arrow function */
arrayName.forEach(() => {
  // code here
});

/* anonymous function */
arrayName.forEach(function () {
  // code here
});
```

É possível passar como parâmetro da função os elementos do array percorrido, sendo a seguinte ordem: `value`, `index`, `array`.

```js
const arrayName = [value, value, value, ...];

arrayName.forEach((value) => {
  console.log(value);
})
```

```js
const count = [1, 2, 3, 4, 5];

count.forEach((number) => {
  console.log(number); // 1 2 3 4 5
})
```

**Map ↓**

Semelhante ao `forEach`, esse método também percorre um array e invoca uma função, porém ele cria um novo array ao executar a função em cada elemento do array original. 

Não executa a função para elementos do array sem valor; não modifica o array original. Como o método anterior, é possível passar como parâmetro da função os elementos do array percorrido, sendo a seguinte ordem: `value`, `index`, `array`.

```js
const arrayName = [value, value, value, ...];

arrayName.map(functionName);

/* arrow function */
arrayName.map((value) => {
  // code here
});

/* anonymous function */
arrayName.map(function (value) {
  // code here
});
```

```js
const count = [1, 2, 3, 4, 5];

const newCount = count.map((value, index) => {
  return value = index; // [0, 1, 2, 3, 4]
});
```

```js
const names = ['oliwer', 'daniel', 'james', 'damien'];

const standardizedNames = names.map((name) => name.toUpperCase());
```

**Filter ↓**

Recebe como parâmetro uma função, percorre o array e retorna um novo array baseado em uma condicional. Os valores que retornam `true` são adicionados a este novo array.

Funciona de forma semelhante ao `map`, porém com o adicional de criar o novo array baseado em um teste condicional. Não modifica o array original; não executa funções para elementos vazios.

Também segue a mesma ordem de `forEach` e `map` para os parâmetros da função.

```js
const arrayName = [value, value, value, ...];

const newArray = arrayName.filter(functionName);

const newArray = arrayName.filter((value) => {
  // code here
});
```

```js
const ages = [21, 15, 33, 10, 59, 67];

const canDrink = ages.filter((_, index) => ages(index) >= 18);
```

**Reduce ↓**

Executa uma função ao percorrer cada elemento do array para reduzir em um valor único. Funciona da esquerda para direita (ao contrário do `reduceRight`, que faz o mesmo processo, só que da direita para esquerda).

Não modifica o array original. 

Recebe parâmetros da função na seguinte ordem: `acc`, `value`, `index`, `array`. O primeiro parâmetro é um valor inicial ou que foi repassado previamente, e este pode ter seu valor declarado no segundo parâmetro do método. 

```js
const arrayName = [value, value, value, ...];

const newArray = arrayName.reduce(functionName, 0);

const newArray = arrayName.reduce((acc, value) => {
  // code here
}, 0);
```

```js
const ages = [21, 15, 33, 10, 59, 67];

const sumAge = ages.reduce((acc, age) => acc + age, 0);

const averageAge = (sumAge / ages.length).toFixed(2);

console.log(averageAge); // 34.17
```

### Spread Operator

É um operador usado em tipos iteráveis (como arrays e strings) para expandir onde zero ou mais argumento e elementos são esperados. 

Possibilita copiar todo ou partes de um array em outro, o que é necessário já o JavaScript trata arrays atribuídos a outros como o mesmo array, ocupante do mesmo espaço em memória.

Fazendo a atribuição dessa forma, qualquer alteração feita em um array, também vai ocorrer no outro:

```js
const arrayName = [value, value, value, ...];
const otherArray = arrayName;
```

Isso ocorre porque essa atribuição é uma atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor. É o contrário do que acontece com os tipos primitivos, que usam a atribuição por valor, que é uma cópia do valor de outra variável, mas não de sua referência.

Com o `...` (spread) é como copiar o conteúdo e colar na outra referência. A modificação feite em uma, não acontecerá na outra:

```js
const arrayName = [value, value, value, ...];
const otherArray = [...arrayName];
```

Outra forma de usar este operador é para copiar valores de um tipo iterável para outro, como um `array` para `set`:

```js
const names = ['oliwer', 'daniel', 'james', 'damien', 'james', 'daniel'];
const updatedNames = [...new Set(names)]; 
// ['oliwer', 'daniel', 'james', 'damien']
```

Pode ser usado com objetos também:

```js
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
};

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
```

Pode ser usado não só para criar novos arrays e objetos, mas sua forma de copiar o conteúdo também é útil para quando se é necessário passar os valores como parâmetros de uma função ou método.

```js
const client = {
  // code here
  cellphone: ['53999999999', '53888888888'].
};

function callClient (comercialCellphone, residentialCellphone) {
  console.log(`calling ${comercialCellphone}`);
  console.log(`calling ${residentialCellphone}`);
}

callClient(...client.cellphone);
```

Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

## Objetos

Um estrutura que pode ser definida como uma coleção de dados. Para criar objetos no JavaScript é preciso utilizar as chaves {}, dentro delas são inseridos pares de propriedade e valor separados por vírgula.

Assim como em um livro físico, os pares se dão seguindo o exemplo `propriedade: valor` → `titulo: Senhor dos Anéis`. Esses pares são chamados de pares chave e valor.

É considerado uma coleção desordenada, já que a ordem dentro dela não importa, por ter seus valores acessados pela chave e não posição.

A maioria dos livros tem as mesmas propriedades, mas os valores das propriedades diferem de um livro para o outro. É possível inserir dados dos tipos: `string` , `number`, `array`, `object` e até mesmo declarar funções.

```js
const book = {
  title: 'Crush',
  author: 'Richard Siken',
  genre: 'Poetry',
  publisher: 'Yale University Press',
  price: 31.5,
};

book.title; // Crush
book['title']; // Crush
```

### Acessando e Manipulando

É possível acessar a propriedade de um objeto usando dot notation ou array notation. Ambos inicializam com o nome do objeto para o acesso, seguido de: ponto para o dot notion e colchetes para o array notion, seguido do item que se quer acessar - pode ser o nome da propriedade, item de um array, ou uma chamada para um método do objeto.

```js
book.author; // 'Richard Siken'
book["author"]; // 'Richard Siken'
book.author.substring(0, 7); // Richard
```

Dot notation é preferível sobre array notation por ser mais sucinto e fácil de ler, porém, há casos onde é necessário usar os colchetes. Por exemplo, se o nome de uma propriedade de um objeto esta em uma variável, não se pode usar o dot notation para acessa-lo, mas se pode acessar com o array notation.

Outro momento onde é necessário é quando se tem uma listas de objetos ou quando não se sabe exatamente quais campos serão acessados.

```js
const books = [
  {
    title: 'Crush',
    author: 'Richard Siken',
    genre: 'Poetry',
    publisher: 'Yale University Press',
    price: 31.5,
  },
  {
    title: '1222',
    author: 'Anne Holt',
    genre: 'Crime Suspense, Mystery, Thriller',
    publisher: 'Scribner',
    price: 29.9,
  },
  {
    title: 'White is for Witching',
    author: 'Helen Oyeyemi',
    genre: 'Gothic Horror',
    publisher: 'Picador',
    price: 50.97,
  },
];


books[2].genre; // Gothic Horror
books[0].title; // Crush
books[1].price; // 29.9
```

```js
const book = {
    title: 'Crush',
    author: 'Richard Siken',
    genre: 'Poetry',
    publisher: 'Yale University Press',
    price: 31.5,
};

const keys = ['title', 'author', 'genre', 'publisher', 'price', 'ratings'];

keys.forEach((key) => {
    return console.log(`The key ${key} has the value ${book[key]}`);
});

// The key title has the value Crush
// The key author has the value Richard Siken
// The key genre has the value Poetry
// The key publisher has the value Yale University Press
// The key price has the value 31.5
// The key ratings has the value undefined
```

Ao acessar uma propriedade que não existe, não retorna erro e não vai quebrar o código, mas o campo é devolvido com o valor undefined.

**Manipulação ↓**

```js
const book = {
    title: 'Crush',
    author: 'Richard Siken',
    genre: 'Poetry',
    publisher: 'Yale University Press',
    price: 31.5,
};

// add
book.ratings = 4.7;
book.stock = 53;
book.sale = 25.30;

// modify
book.author = 'Siken, Richard';

// remove
delete book.sale; 
```

Com uma lista de objetos é possível usar dos métodos de arrays para manipular os dados, como `filter`.

**For In ↓**

Percorre as propriedades de um objeto.

```js
const objectName = {
  key: value,
  key: value,
  key: value,
  ...
};

for (key in objectName) {
  // code here
}
```

```js
const objectName = {
  key: value,
  key: value,
  key: value,
  key: [
    {
      key: value,
      key: value,
      key: value,
      ...
    },
  ];
  ...
};

for (let key in objectName) {
  let varName = typeof objectName[key];
  if (varName !== 'object' && varName !== 'function')
    console.log(`the key ${key} has the value: ${objectName[key]}`);
}
```

### This

É uma palavra reservada que se refere a um objeto. Qual objeto é depende de como o `this` está sendo invocado (usado ou chamado).

- Em um método de objeto, se refere ao objeto
- Sozinho, se refere ao objeto global
- Em uma função, se refere ao objeto global
- Em uma função, em modo restrito, é `undefined`
- Em um evento, se refere ao elemento que receberá o evento
- Métodos como `call()`, `apply()` e `bind()` pode referir `this` para qualquer objeto

Em funções regulares, o `this` representa o objeto que chama a função, pode ser `window`, o documento, um botão, etc. Em uma arrow function o `this` sempre representa o objeto que define a função.

Representa quem chama:
```js
// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```

Representa o "dono":
```js
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```

o `window` representa uma janela que contém o elemento DOM da página acessada. No objeto `window` é definida todas variáveis globais e funções que são executadas em um navegador.

Quando utilizado no escopo global, o `this` tem valor do objeto `window`.

```js
var book = {
  title: 'White is for Witching',
  author: 'Helen Oyeyemi',
  genre: 'Gothic Horror',
  publisher: 'Picador',
  price: 50.97,
  fullName : function() {
    return this.titulo + " by " + this.autor;
}
```

Nesse exemplo, `this` se refere ao objeto book, ou seja `this.titulo` significa a propriedade `titulo` de `this`/`book`.

### Objeto Literal e Referências

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves{ }, que é atribuída a uma variável para que o valor possa ser acessado depois.

```js
const objectName = {
  key: value,
  key: value,
  key: value,
  ...
};
```

Funcionam bem como um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo em cópias. Este mesmo comportamento acontece com arrays.

```js
const objectName = {
  key: value,
  key: value,
  key: value,
  ...
};

const otherObject = objectName; 
```

Ao invés de fazer uma cópia, a nova variável se comporta como uma referência para o objeto original.

Há diferentes formas de contornam essa situação, como: copiar com o spread operator ou usar o método `Object.create()`, que cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.

```js
const otherObject = Object.create(objectName);
```

Por serem um tipo de referência, dois objetos distintos nunca são iguais, mesmo que tenham as mesmas propriedades. Apenas comparando o mesmo objeto de referência com ele mesmo produz verdadeiro.

```js
let fruit = { name: "apple" };
let fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
```

```js
let fruit = { name: "apple" };
let fruitbear = fruit; // assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true
```

### Getters e Setters

São métodos usados para obter — `get` — e definir — `set` — o valor de uma propriedade específica. Podem ser declarados em qualquer objeto de núcleo pré-definido ou objeto definido pelo usuário que suporte adição de novas propriedades.

A sintaxe para sua declaração é a sintaxe literal do objeto.

```js
const objectName = {
  key: value,
  get key() {
    // code here
  },
  set key(parameter) {
    // code here
  },
};
```

Getters e setters podem:

- Ser definidos usando objetos inicializadores
- Adicionados posteriormente para qualquer objeto a qualquer tempo usando um método getter ou setter adicionado

Ao definir getters e setters usando objetos inicializadores tudo o que é necessário é prefixar um método getter com `get` e um método setter com `set`. Claro, o método getter não deve esperar um parâmetro, enquanto o método setter espera exatamente um parâmetro (novo valor para definir).

```js
let o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
```

Getters e setters podem também ser adicionados em um objeto a qualquer hora depois da criação usando o método `Object.defineProperties`. 

```js
let objectName = {key: value};

Object.defineProperties(objectName, {
  key: {
    get: // getter code here
  },
  key: {
    set: // setter code here
  },
});
```

O primeiro parâmetro deste método é o objeto no qual se quer definir o getter ou setter. O segundo parâmetro é um objeto cujos nomes das propriedades são os nomes getter ou setter, e cujo valores das propriedades são objetos para definição de funções getter ou setter.

```js
let o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function () {
      return this.a + 1;
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.c = 10; // a = 5
console.log(o.b); // yields a + 1 or 6
```

### JSON

JavaScrip Object Notation, ou JSON, é um formato para armazenar e transportar dados. É muito usado para nos envios de dados de um servidor a uma página web.

É um formato de intercâmbio de dados leve, que é independente de linguagem. Sua sintaxe deriva do JavaScript, mas é um formato text only, ou seja, códigos para leitura e geração de seus dados podem ser escritos em qualquer linguagem.

Regras de sintaxe: 

- Dados em pares de nome/valor
- Sem variáveis
- Chaves das propriedades sempre com ""
- Dados separados por vírgulas
- Proibido trailing comma (vírgula no último item do bloco)

```json
"name":"value"
```

- Chaves para envolver objetos

```json
{
  "name":"value",
  "name":"value",
  "name":"value"
}
```
- Colchetes para envolver arrays


```json
"arrayName": [
  {
  "name":"value",
  "name":"value",
  "name":"value"
  }
]
```

- Funções e comentários não são permitidos
- Suporta, além de arrays e objetos, apenas tipos primitivos

Em sintaxe, é idêntico a criação de um objeto em JS. Por causa disso, um programa em JavaScript pode facilmente converter JSON em objetos JS nativos.

**DataType ↓**

Em JSON, os valores só são válidos se foram de um dos seguintes tipos de dados:

- String
- Number
- Object
  - Que contenha valores válidos
- Array
- Boolean
- Null

Os valores não podem ser:

- Function
- Date
- Undefined

**Métodos ↓**

| method        | description                                          |
| ------------- | ---------------------------------------------------- |
| `parse()`     | parses a JSON string and returns a JavaScript object |
| `stringify()` | convert a JavaScript object to a JSON string         |



## Desestruturação de Listas e Objetos

Desestruturação em JavaScript é o ato de extrair elementos de um array ou objeto. Mas não só isso, permite também manipular e alterar os elementos extraídos dependendo do tipo de operação executada.

**Arrays ↓**

Sua declaração é semelhante a declaração de um array em si, tendo agora as variáveis declaradas em formato de lista.

```js
const [var, var, var, ...] = arrayName;
```

```js
const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, third] = count;
console.log(first, second, third); // 1 2 3
/* ... */
const teams = [['anne', 'helios', 'altair'], ['mark', 'pablo', 'luz'], ['finn', 'dex', 'trevor']];
const [teamEagle, teamWolf, teamShark] = teams;
teamEagle; // ['anne', 'helios', 'altair']
```

Com a desestruturação é possível alterar os valores das variáveis declaradas, trocando estes valores entre si:

```js
const arrayName = [value, value, value, ...];

let [var1, var2, ...] = arrayName;
[var1, var2] = [var2, var1] 
```

```js
const groceries = ['chicken', 'beef', 'rice', 'cereal', 'grapes', 'bread'];

let [lunch, dinner] = groceries; // 'chicken' 'beef'
[lunch, dinner] = [dinner, lunch] // 'beef' 'chicken'
```

Esse método permite somente trocar os valores entre as variáveis, não altera o array original.

No entanto, a desestruturação também pode ser usada para manipular um array, com uma lógica parecida com a troca de variáveis, mas aqui se usa do array e das posições de cada item.

```js
const arrayName = [value, value, value, ...];
[arrayName[0], arrayName[1]] = [arrayName[1], arrayName[0]];
```

```js
const groceries = ['chicken', 'beef', 'rice', 'cereal', 'grapes', 'bread'];
[groceries[2], groceries[4]] = [groceries[4], groceries[2]];
console.log(groceries) // ['chicken', 'beef', 'grapes', 'cereal', 'rice', 'bread']
```

**Objetos ↓**

Segue uma sintaxe semelhante a declaração anterior, porém com as chaves que são associados aos objetos, e ao contrário da desestruturação de array (que permite nomear as variáveis livremente), a desestruturação de objetos só permite que se use o nome já usado nas propriedades do objeto.

```js
const objectName = {
  propertyName: value,
  propertyName: value,
  propertyName: value,
  ...
}

const {propertyName, propertyName, propertyName, ...} = objectName;
```

```js
const languages = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = languages;
console.log(frontend, backend); // "React", "Node"
```

Porém, é possível manipular e atribuir o nome de uma variável para cada propriedade, de uma forma similar a declaração de um objeto, aqui a propriedade vai receber o nome da variável como se fosse seu par de valor.

```js
const objectName = {
  propertyName: value,
  propertyName: value,
  propertyName: value,
  ...
}

const {propertyName: var, propertyName: var, propertyName: var, ...} = objectName;
```

```js
const languages = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend: courseOne, backend: courseTwo } = languages;
console.log(courseOne, courseTwo); // "React", "Node"
```