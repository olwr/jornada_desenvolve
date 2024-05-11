# JavaScript

- [JavaScript](#javascript)
  - [O Que é JavaScript?](#o-que-é-javascript)
  - [Variáveis](#variáveis)
    - [Datatype](#datatype)
      - [NaN](#nan)
      - [Template String](#template-string)
    - [Hoisting](#hoisting)
  - [Operadores](#operadores)
  - [Funções](#funções)
    - [Callback](#callback)
      - [Callback Hell](#callback-hell)
  - [Condicionais](#condicionais)
  - [Loops](#loops)
    - [Break e Continue](#break-e-continue)
  - [Tratamento de Erros](#tratamento-de-erros)
  - [Melhores Práticas](#melhores-práticas)

## O Que é JavaScript?

É uma linguagem de scripting, comumente definida por permitir ao programador o controle de uma ou mais aplicações de terceiros. No caso do JavaScript, é possível controlar comportamentos dos navegadores e suas páginas através de códigos enviados ao HTML.

Outra característica comum nas linguagens de scripting é que normalmente são linguagens interpretadas, ou seja, não dependem de compilação para serem executadas. O JS é interpretado e executado conforme é lido pelo navegador, linha a linha, assim como o HTML.

Também possui uma boa tolerância a erros, uma vez que conversões automáticas são realizadas durante as operações. Porém, nem sempre essas conversões resultam em algo esperado, o que pode ser fonte de bugs.

O script é enviado com o HTML para o navegador, sendo ele envolvido pela tag `<script>` como código direto no HTML ou caminho de um arquivo JS externo.

Pode ser declarado tanto no início, quanto ao final do HTML, mas é de melhor prática declara-lo no final (antes do fechamento do `body`) para auxiliar no melhor processamento da página, o que também impacta a performance.

```html
<body>
  <!-- ... -->
  <script type="text/javascript" src="script.js"></script>
</body>
</html>
```

Um dos principais pontos sobre o JavaScript é que se trata de uma linguagem de programação multiparadigma, o que significa que a linguagem não está restrita a uma única forma de fazer as coisas. É possível utilizar diferentes paradigmas de programação, como orientado a objetos, funcional ou procedural.

**Sintaxe ↓**

Como a maioria das linguagens, sua base de código são variáveis, objetos, keywords, operados, condicionais, expressões, classes, funções e métodos.

O JavaScript trabalha com 2 tipos de valores:

- Literals
  - Valores fixos
    - 10.50 | 1001 → números
    - "text" | 'text' → strings
- Variables
  - Valores variáveis
    - `var` | `let` | `const` → armazenam valores 

Keywords são palavras-chave/reservadas, ou seja, são usadas para identificar ações dentro do JavaScript, como a criação de uma variável ou o retorno de uma função.

Como o nome diz, são reservadas, ou seja, não podem e não devem ser usadas como nomes de variáveis, objetos, métodos, funções, etc.

É recomendado também evitar usar nomes de objetos built-in, propriedades, métodos, palavras reservadas de outras linguagens e aplicações, e event handlers como nomes dentro do seu código.

É uma linguagem case sensitive, ou seja, variáveis de mesmo nome, mas com diferença de maiúscula e minúscula em sua grafia, são tratadas como variáveis distintas.

```js
var lastName, lastname;

lastName = 'Ventura';
lastname = 'Lopez';

console.log(lastName, lastname);
```

O mesmo vale para as palavras-chave/reservadas da linguagem. JavaScript não interpreta `LET` e `Let` (ou outras variações) como a keyword `let`.

Enquanto ao seus identificadores/nomes (usados para nomear variáveis, keywords, funções, etc), seguem as mesmas regras que a maioria das linguagens de programação:

Um nome deve começar com:

- Uma letra
  - A - Z | a - z
- Sinal de dólar
  - $
- Underscore
  - _

Quaisquer caracteres subsequentes podem ser letras, dígitos, underscores ou sinas de dólar. Números não podem ser o primeiro caractere de um nome.

É de uso comum no JavaScript o prática de nomeação camelCase.

```
camelCase → firstSecond
```

Usa o charset Unicode, que possui quase todos os caracteres, pontuações e símbolos. 

Por fim, o uso de ponto e vírgula no final de uma declaração não é obrigatório, mas fortemente recomendado. A omissão funciona no JS devido ao mecanismo chamado automatic semicolon insertion (asi).

Comentários no código:

```js
// this is a single line comment

/* 
this is
a multi-line
comment
*/
```

**Back-end vs. Front-end ↓**

O JavaScript desde sua criação em meados dos anos 1990, serviu ao propósito de dar interação a páginas web. Porém, com o desenvolvimento do Node.js em 2009, a partir da engine V8 do Chrome, foi possível adaptar o JavaScript para, entre outras funcionalidades, aplicações back-end.

Front-end refere-se a tudo onde há tela envolvida, ou seja, a interface onde o usuário interage com a aplicação. O JavaScript voltado para front-end se preocupa com a responsividade da interface, com as interações e tudo o que acontece no navegador.

Exemplos são: botões clicáveis, preferências de estilização da página e formulários.

Já o back-end é tudo aquilo que acontece em uma aplicação ou site para além da interface gráfica. O JavaScript de back-end tem como atribuição o que acontece com as informações que saem da tela, como isso é armazenado no banco de dados, etc.

Ao final, tanto para front como para back, é a mesma linguagem, porém, as ferramentas que o JavaScript utiliza no front-end e no back-end são diferentes.

Por exemplo, o código JS interpretado pelo navegador em conjunto com o HTML e CSS (front), e o código JS interpretado pelo Node.js e exibido no terminal (back).

![alt text](imgs/back/Front-vs-back-end.png)

## Variáveis

São containers que armazenam valores. Dependendo de como for declarada (qual keyword foi usada), pode ser declarada com ou sem atribuição de valor é também pode ter seu valor alterado quando redeclarada ou por operações e atribuições com sintaxe compacta.

```js
variableKeyword variableName = value or type
```

- Automaticamente
  - Seu uso não é recomendado
  - O JS cria como `var` de forma implícita

```js
x = 5;
y = 6;
z = x + y;
```

É considerado melhor prática sempre declarar variáveis, ou seja, usar uma das keywords, não confiar na forma automática.

```js
x = 13; // not recommended
let y = 51; // recommended
```

- `var`
  - usada em todos os códigos js desde 1995
  - Escopo global
  - Seu uso é recomendado somente para browsers antigos
  - Hosting e inicialização undefined
  - Pode ser redeclarada

```js
var age = 20; // undefined
age = 21;
age // 21
```

```js
var age = 13;
age += 9;
age // 22
```

Além de poder ser içada, é automaticamente inicializada com o valor undefined. Por ter um escopo global, pode causar complicações no código. Assim, as outras keywords são preferidas sobre `var`.

- `let`
  - adicionado em 2015
  - Escopo de bloco
  - Usar nas situações onde não se pode usar `const`
  - Sem hosting
  - Não pode ser redeclarada no mesmo escopo, mas pode ser alterada

```js
let color = 'blue';
color = 'stealblue';
```

Variável com escopo de bloco. Não pode ser acessada fora do seu escopo, a tentativa causa o erro `Uncaught ReferenceError: letName is not defined`. Ainda existe a possibilidade dela ser undefined.

```js
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```

- `const`
  - adicionado em 2015
  - Escopo de bloco
  - Sempre usar quando o valor não deve ser alterado
  - Sem hosting e undefined
  - Não pode ser redeclarada nem alterada

```js
const name = 'oliver';
```

Não pode ser inicializada sem valor, além disso, só é possível atribuir o valor na sua inicialização, pois não permite que seja alterado ou reatribuído.

Tentar alterar seu valor causa o erro `Uncaught TypeError: Assignment to constant variable`. Mas, como tem escopo de bloco, o mesmo nome pode ser usado para variáveis em diferentes blocos.

```js
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
```

O seu nome pode ser um pouco enganoso, não é necessariamente para definir um valor constante, mas sim para definir uma referência constate para um valor. Ou seja, não se pode reatribuir um valor, array ou objeto constante, mas se pode mudar os elementos do array constante e as propriedades do objeto constante.

```js
// creating
const cars = ['Saab', 'BMW', 'Impala'];

// changing an element
cars[0] = 'Toyota';

// adding a new element
cars.push('Audi');
```

```js
// creating
const car = {type:"Fiat", model:"500", color:"white"};

// changing a property:
car.color = "red";

// adding a new property:
car.owner = "Johnson";
```

**Diferenças Principais Entre var, let e const ↓**

|         | scope | redeclare | reassign | hoisted | binds this |
| ------- | ----- | --------- | -------- | ------- | ---------- |
| `var`   | no    | yes       | yes      | yes     | yes        |
| `let`   | yes   | no        | yes      | no      | no         |
| `const` | yes   | no        | no       | no      | no         |

### Datatype

O JavaScript tem 8 tipos de dados e suas variáveis podem receber qualquer tipo de dados:

- String
  - textos e caracteres
  - `'this is a string'` | `"C"` | `''`
- Number
  - números inteiros, decimais, hexadecimais, octais ...
  - são sempre um tipo: double (64-bit floating point)
  - `21` | `27.05` | `123e5` | `123e-5` | `0xA` | `0o10`
- Bigint
  - Um datatype recente, usado para armazenar valores inteiros muito extensos para serem representados por um número normal do JS
  - `BigInt("123456789012345678901234567890")`
- Boolean
  - `true` | `false` 
- Undefined
  - variáveis sem valor recebem o valor `undefined`, que também é seu datatype
- Null
  - valor nulo
  - `null`
- Symbol
  - representa um identificador único e imutável
  - são frequentemente utilizados para criar propriedades de objeto que são únicas e não interferem com outras propriedades existentes
  - `Symbol()`
- Object
  - pode conter: um objeto, array ou data
  - `{color: 'steelblue', hex: '#4682B4', likes: 1973}`
  - `[ 'steelblue', 'cyan']` | `[176, 196, 222]` | `['name', 23]`
  - `new Date("2024-03-10")`

O datatype das variáveis pode ser verificado por `typeof`, exceto do tipo Null, que retorna `object`, como ele é necessário usar o comparador `===`.

#### NaN

Na maior parte dos casos, NaN é o valor retornado como resultado de uma operação aritmética mal formada, ou seja, uma expressão entre sting e número que não pode ser convertida de forma implícita:

```js
console.log(5 * 'a');
```

Existem 5 tipos de operações que podem retornar NaN:

- Tentativas de converter para números valores que não podem ser convertidos, como `parseInt(‘texto’)` ou `Number(undefined)`
  - Os valores booleanos `true` e `false` podem ser convertidos para 1 e 0 usando `Number()`, porém retornarão NaN caso a tentativa de conversão seja feita com `parseInt()`
- Operações matemáticas que não resultam em números reais
  - `Math.sqrt(-1)`
- Operações onde um dos valores é `NaN` ou pode ser convertido para `NaN`
  - `5 * 'a'` | `5 + NaN`
- Formatos indeterminados como `Infinity / Infinity`, `Infinity - Infinity`
  - O valor `Infinity` existe no JS como uma representação do infinito
  - É maior que qualquer outro número
- Outros casos onde um valor não pode ser representado como um número

**Comparação ↓**

Ao contrário de outros valores, `NaN` não pode ser comparado com os operadores de comparação comuns. Para saber se algo é `NaN` ou não, se usa: `Number.isNaN()` ou `isNaN()`.

```js
const name = 'oliwer';
let age = '22';
```

```js
// with Number.isNaN
Number.isNaN(number) // false
Number.isNaN(name) // false
Number.isNaN(NaN) // false

// with isNaN
isNaN(23) // false
isNaN(name) // true
isNaN(NaN) // true
```

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true
```

A diferença é que `Number.isNaN()` retorna `true` apenas se o valor for efetivamente `NaN`, enquanto `isNaN()` irá retornar `true` inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número.

#### Template String

Uma string criada com crase no lugar das aspas. Permite o uso de aspas simples e duplas ao mesmo tempo, múltiplas strings e interpolação com variáveis e expressões em strings.

```js
let text = `He's often called "Danny"`;

let text =
`The quick
brown fox
jumps over
the lazy dog`;
```

```js
let firstName = "Oliwer";
let middleName = "Daniel";

let text = `Welcome ${firstName}, ${lastName}!`;
/* ... */
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

Possibilita também usar HTML dentro do JS.

```js
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```

### Hoisting

Uma função pode ser chamada antes mesmo de ter sido declarada.

Hoisting permite a execução de funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas. A razão pela qual o código funciona é que os mecanismos JavaScript movem a função para o início do escopo.

```js
console.log(sum(2, 5)); // 7
function sum(a, b) {
  return a + b;
}

/*=
function sum(a,b){
    return a + b
}
console.log(sum(2,5))
*/
```

A utilização de hoisting em `var` não é indicada, pois a variável criada é elevada para o escopo, mas sem o seu valor, assim retornando o valor `undefined`. O comportamento é parecido também ao usar var dentro de uma `function`.

```js
console.log(alura) // undefined
var alura = ‘cursos’;
```

Hoisting também não é indicado utilizando `let`, pois acontece outro tipo de comportamento não desejado. É reconhecido que o let existe, porém, não se consegue acessar sua declaração. Esse comportamento de Hoisting com `let` é o mesmo ao utilizar `const`.

````js
console.log(alura)
let alura = ‘cursos’;
// script.js:1 Uncaught ReferenceError: Cannot access 'alura' before initialization```
````

## Operadores

O JavaScript tem os seguintes operadores:

- Aritméticos
  
| operator | description    | examples |
| -------- | -------------- | -------- |
| +        | addition       | `x + y`  |
| -        | subtraction    | `x - y`  |
| *        | multiplication | `x * y`  |
| **       | exponentiation | `x ** y` |
| /        | division       | `x / y`  |
| %        | modulus        | `x % y`  |
| ++       | increment      | `i++`    |
| --       | decrement      | `i--`    |
  
- De atribuição

| operator | examples    | same as        |
| -------- | ----------- | -------------- |
| =        | `x = y`     | `x = y`        |
| +=       | `x += y`    | `x = x + y`    |
| -=       | `x -= y`    | `x = x - y`    |
| *=       | `x *= y`    | `x = x * y`    |
| /=       | `x /= y`    | `x = x / y`    |
| %=       | `x %= y`    | `x = x % y`    |
| **=      | `x **= y`   | `x = x ** y`   |
| <<=      | `x <<= y`   | `x = << y`     |
| >>=      | `x >>= y`   | `x = >> y`     |
| >>>=     | `x >>>= y`  | `x = x >>> y`  |
| &=       | `x &= y`    | `x = x & y`    |
| ^=       | `x ^= y`    | `x = x ^ y`    |
| \|=      | `x \|= y`   | `x = x \| y`   |
| &&=      | `x &&= y`   | `x = x && y`   |
| \|\|=    | `x \|\|= y` | `x = x \|\| y` |
| ??       | `x ??= y`   | `x = x ?? y`   |

- De comparação

| operator | description                | examples  |
| -------- | -------------------------- | --------- |
| ==       | equal to                   | `x == y`  |
| ===      | equal in value and type    | `x === y` |
| !=       | not equal to               | `x != y`  |
| !==      | not equal in value or type | `x !== y` |
| >        | greater than               | `x > y`   |
| <        | less than                  | `x < y`   |
| >=       | greater than or equal to   | `x >= y`  |
| <=       | less than or equal to      | `x <= y`  |
| ?        | ternary operator           |           |

- Ternário

É um operador que atribui um valor a uma variável baseado em uma condição.

```
variableName = (condition) ? value1:value2
```

```js
let voteable = (age < 18) ? "Too young":"Old enough";
```

- De string

Os operadores de comparações podem ser usados em strings, lembrando que strings são comparadas alfabeticamente.

Já os operadores `+` e `+=` funcionam como concatenadores.

```js
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
```

```js
let text1 = "What a very ";
text1 += "nice day";
```

Adicionar um número e uma string retorna uma concatenação que será uma nova string, a não ser que a string possa ter seu tipo alterado para um número.

- Lógicos

| operator | description | examples              |
| -------- | ----------- | --------------------- |
| &&       | logical and | `(x < 10 && y > 1)`   |
| \|\|     | logical or  | (x == 5 \|\| y == 5)` |
| !        | logical not | `!(x == y)`           |

- Coalescência nula

O operador `??` retorna o primeiro argumento se não é nullish (`null` ou `undefined`). Se for nullish, retorna o segundo argumento.

```js
let name = null;
let text = "missing";
let result = name ?? text;
```

- Optional chaining

O operador `?.` retorna `undefined` se o objeto for `undefined` ou `null` (ao invés de gerar um erro).

```js
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;
```

- Bitwise

| operator | description          | examples  | result | decimal |
| -------- | -------------------- | --------- | ------ | ------- |
| &        | AND                  | `5 & 1`   | 0001   | 1       |
| \|       | OR                   | `5 \| 1`  | 0101   | 5       |
| ~        | NOT                  | `~ 5`     | 1010   | 10      |
| ^        | XOR                  | `5 ^ 1`   | 0100   | 4       |
| <<       | left shift           | `5 << 1`  | 1010   | 10      |
| >>       | right shift          | `5 >> 1`  | 0010   | 2       |
| >>>      | unsigned right shift | `5 >>> 1` | 0010   | 2       |

- Outros

| operator    | description                                                         |
| ----------- | ------------------------------------------------------------------- |
| `typeof`    | returns the type of a variable                                      |
| `instaceof` | returns `true` if an object is an instance of an object type        |
| `in`        | returns `true` if the specified property is in the specified object |

## Funções

Um conjunto de códigos que pode ser chamado para executar uma ação ou retornar um valor. No JavaScript existem 3 tipos de funções:

- Declarada | Nomeada (Declaração de Função)

```js
// can be called multiple times
function example([parameter]) {
  // code here
}

// calling
example()
```

- Anônima

```js
// is only executed at that single moment
element.addEventListener('click', function() {
	// code here
})
```

- Arrow

```js
// anonymous function, is only executed at that single moment
element.addEventListener('click', () => {
	// code here
})
```

A diferença da função anônima para a declarada é que a declara pode ser chamada mais vezes por ter um nome. Uma função anônima só pode ser executada uma única vez, quando um gatilho for disparado.

Funções anônimas não devem ser usadas como métodos, não possuem seu próprio binding, não podem ser usadas como construtores, não podem usar `yield` dentro do seu corpo (exceto quando permitido dentro de funções aninhadas dentro delas), o que significa que não podem ser usadas como geradoras (generators).

Todas as funções podem ou não receber parâmetros. É possível passar qualquer quantidade de parâmetros a uma função, separados por vírgula. 

```js
function myFunction(x, y, z) {/* ...*/}
```

Os parâmetros devem ser passados para a função no momento de execução, na ordem em que estão declarados, e o valores podem ser definidos na declaração da função para agirem como padrão caso um parâmetro não seja passado em sua invocação.

```js
function myFunction(x = 3, y = 2) {
  return x + y;
}

myFunction(4, 6); // 10
myFunction(); // 5
```

Para garantir que uma função retorne um valor é necessário usar a keyword `return`, seguido do valor desejado. Se o valor não for informado, retornará `undefined`.

A linha do retorno deve sempre ser a última linha do bloco. Nem todas as funções retornam valores; dependendo do caso, uma função pode executar diversas instruções sem a necessidade de retornar nenhum valor no final.

É possível também atribuir o retorno de uma função a uma variável: 

```js
const result = example([value]);
```


### Callback

Um callback é uma função passada em outra como um argumento para ser executado posteriormente. Um exemplo muito comum de callback são dos eventos `addEventListener`:

```js
const button = document.querySelector('button')
button.addEventListener('click', function (e) {
  // Adds clicked class to button
  this.classList.add('clicked')
})
```

```js
const button = document.querySelector('button')

// Function that adds 'clicked' class to the element
function clicked(e) {
  this.classList.add('clicked')
}

// Adds click function as a callback to the event listener
button.addEventListener('click', clicked)
```

Neste caso `clicked` é o callback, enquanto o `addEventListener` é a função que aceita o callback.

Outro exemplo:

```js
const numbers = [3, 4, 10, 20]
const lesserThanFive = numbers.filter(num => num < 5)
/* --- */
const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5

// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)
```

Callbacks são utilizados de 2 maneiras diferentes: em funções síncronas e assíncronas.

**Síncrono ↓**

Se o código é executado de cima a baixo, da esquerda a direita, de forma sequencial e esperando até que uma parte finalize antes de começar a próxima, então é um código síncrono.

```js
const addOne = n => n + 1
addOne(1) // 2
addOne(2) // 3
addOne(3) // 4
addOne(4) // 5
```

Callbacks são usadas em funções síncronas quando se deseja que parte do código seja facilmente substituído por outra.

```js
const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const getMoreThanTen = num => num > 10

// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)

// Passing getMoreThanTen function into filter
const moreThanTen = numbers.filter(getMoreThanTen)
```

**Assíncrono ↓**

Assíncrono significa que, se o JS precisa esperar que algo seja concluído, irá executar o resto das tarefas enquanto espera.

```js
// Calls the callback after 1 second
setTimeout(callback, 1000)
```

```js
const tenSecondsLater = _ = > console.log('10 seconds passed!')

setTimeout(tenSecondsLater, 10000)
console.log('Start!')

// What happens:
// > Start! (almost immediately)
// > 10 seconds passed! (after ten seconds)
```

Para entender melhor a funcionalidade das funções assíncronas, primeiro é preciso entender o loop de eventos.

Imagine que o JS possuí 3 seções para separar suas tarefas: to-do, lista de espera, e notas.

- To-Do List
  - O que é síncrono se encontra aqui, sendo executado de forma sequencial
- Waiting List
  - O que é assíncrono se encontra aqui, fica a espera até que possa ser executado
- Mental Note
  - Callbacks estão aqui, esperando serem chamados para a execução síncrona ou assíncrona

Um exemplo mais conectado com o cotidiano seria:

```js
const orderPizza (flavor, callback) {
  callPizzaShop(`I want a ${flavor} pizza`)

  // Note: these three lines is pseudo code, not actual JavaScript
  whenPizzaComesBack {
    callback()
  }
}

const layTheTable = _ => console.log('laying the table')

orderPizza('Hawaiian', layTheTable)
mopFloor()
ironClothes()
```

![alt text](imgs/back/todo2.44a89f39_Z4zWC3.avif)

![alt text](imgs/back/waiting.1889ca02_Z1kEed6.avif)

![alt text](imgs/back/mental-note.9ee195bd_YsdHy.avif)

![alt text](imgs/back/lay-table.51c8a232_Z2sQAJI.avif)

Agora, saindo da analogia e usando as keywords fica:

- To-Do List
  - Call stack
- Waiting List
  - Web APIs
- Mental Note
  - Event queue

![alt text](imgs/back/event-loop.67cf9855_2kBIQo.avif)

Retomando: com callbacks em funções assíncronas, o JavaScript recebe instruções com antecedência sem precisar parar toda a operação. Isso é muito comum com event listeners (como `addEventListener`) e quando se lê ou escreve em arquivos (como `fs.readFile`).

#### Callback Hell

Em JavaScript às vezes se tem que lidar com uma função callback que está a espera de outra, e está outra também está a espera de mais uma, e assim por diante, este padrão foi apelidado de callback hell.

```js
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});
```

É algo mais comum com Node, raramente acontece no frontend.

```js
// Look at three layers of callback in this code!
app.get('/', function (req, res) {
  Users.findOne({ _id: req.body.id }, function (err, user) {
    if (user) {
      user.update(
        {
          /* params to update */
        },
        function (err, document) {
          res.json({ user: document })
        }
      )
    } else {
      user.create(req.body, function (err, document) {
        res.json({ user: document })
      })
    }
  })
})
```

Temos 4 formas de se lidar com callback hell: escrever comentários, dividir funções aninhadas em funções menores, usar promessas e usar `async/await`.

## Condicionais 

Expressões condicionais são usadas para executar diferentes ações com base em diferentes condições. No JavaScript há 4 declarações condicionais:

- `if` 
  - É usado para especificar o bloco de código que será executado caso uma condição seja verdadeira
- `else`
  - É usado para especificar o bloco de código que será executado caso a mesma condição seja falsa
- `else if`
  - É usado para especificar o bloco de código que será executado caso a primeira condição seja falsa, mas essa mesma seja verdadeira
- `switch`
  - É usado para especificar vários blocos alternativos de código que serão executados dependendo da condição de cada um

**If, Else if e Else ↓**

```js
if (condition) {
  // code executed when the if condition is true
} else if (condition) {
  // code executed when the if condition is false, but the else if is true
} else {
  // code executed when all the conditions are false
}
```

- Uma declaração `if` pode ser usada sozinha, sem `else` ou `else if`
- Uma declaração `else` sempre acompanha um `if`, não pode ser usado sozinho ou acompanhar um `else if` sem `if`
- Uma declaração `else if` sempre acompanha um `if`, não pode ser usado sozinho e pode ser usado junto de um `else`, mas sempre ao lado do `if`

**Switch Case ↓**

```js
switch (expression) {
  case x:
    // code
    break; // breaks out of the switch block
  case y:
    // code
    break;
  default: // can be use as the first case, but only with a break
  // code
  // the last case doesn't need a break, because the switch execution will be stopped anyway 
}
```

- A expressão `switch` é avaliada uma vez
- O valor da expressão é comparado com os valores de cada caso
- Se há um match, o bloco de código associado ao caso será executado
  - Casos `switch` usam comparações estritas (===), ou seja, comparações de valor e datatype. O valor deve ser do mesmo tipo para que haja match.
- Se não há match, o bloco de código do caso padrão será executado
- Se o `break` for omitido, o próximo caso será executado mesmo que não dê match
- Se múltiplos casos derem match, só o primero será executado
- Se o caso padrão for omitido, o programa continuará para a próxima declaração após o `switch`


## Loops

Podem executar um bloco de código por um número n de vezes. São muito úteis quando se quer executar um bloco de código de novo e de novo, com valores diferentes cada vez.

O JavaScript suporta 5 tipos diferentes de loop:

- `for` percorre por um bloco de código um número x de vezes
- `for/in` percorre pelas propriedades de um objeto
- `for/of` percorre pelos valores de um objeto iterável
- `while` percorre por um bloco de código enquanto uma condição for verdadeira
- `do/while` também percorre por um bloco de código enquanto uma condição for verdadeira

**For ↓**

```js
for (variable; conditional; increment/decrement operation) {
  // code
}
```

A primeira expressão é executada somente uma vez e geralmente inicializa variáveis usadas dentro do loop, como uma variável de controle. É opcional caso a variável tenha sido declarada antes do loop.

A segunda expressão define a condição para a execução do bloco de código. Geralmente é usada para avaliar a condição da variável inicial. É opcional, porém, é necessário adicionar um `break` dentro do loop para que não seja infinito.

Se retornar `true`, o loop começará de novo. Se retornar `false`, o loop terminará.

Por fim, a última expressão é executada toda vez após a execução do bloco de código. Normalmente incrementa o valor da variável inicial. É opcional, pode ser omitido, como por exemplo, caso os valores sejam incrementados dentro do loop.

**For In ↓**

```js
for (key in object) {
  // code
}
```

Percorre as propriedades de um objeto ou array.

Não é recomendado usar o `for in` em um array se a order do índice é importante. A ordem é dependente da implementação, os valores acessados podem não ser na ordem esperada. 

É melhor usar um `for` loop, `for of` loop ou um `Array.forEach()` quando a ordem é importante.

**For Of ↓**

A declaração `for of` percorre pelos valores de um objeto iterável, ou seja, percorre sobre uma estrutura de dados iterável como: Arrays, Strings, Maps, NodeLists, e outras:

```js
for (variable of iterable) {
  // code
}
```

**While ↓**

A declaração `while` percorre por um bloco de código enquanto uma condição for verdadeira:

```js
while (condition) {
  // code
}
```

**Do While ↓**

Variação do loop `while`. Irá executar o bloco de código uma vez, antes de se checar se a condição é verdadeira, então irá repetir enquanto a condição retornar `true`.

```js
do {
  // code
} while (condition);
```

### Break e Continue

A declaração `break` "pula para fora" do loop, seguindo para a próxima declaração após o loop:

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  } // jumps out of the loop when i === 3
  text += "The number is " + i + "<br>";
}
```

A declaração `continue` "pula sobre" uma iteração do loop, seguindo para a próxima iteração no loop:

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } // jumps to the next iteration when i === 3
  texto += "O número é " + i + "<br>";
}
```

## Tratamento de Erros

Erros são inevitáveis em qualquer código, é sempre melhor tratá-los do que ignorá-los.

**Try | Catch ↓**

Essas declarações são o básico para os tratamentos de erros. A declaração `try` permite definir um bloco de código testará erros enquanto for executado, já `catch` permite definir um bloco que será executado caso o erro ocorra.

```js
try {
  // block of code to try
}
catch(err) {
  // block of code to handle errors
}
```

```js
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```

**Throw ↓**

Quando um erro ocorre, o JavaScript normalmente para e gera uma mensagem de erro. Na verdade, ele cria uma um `Error Object` com 2 propriedades: `name` e `message`.

A declaração `throw` permite criar um erro customizado. Tecnicamente, seria jogar uma exceção/erro. Pode ser usado sozinho ou com `try` e `catch`.

```js
throw value;
```

```js
throw 'Too big';
throw 500;
```

```js
{
  // ...
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
```

**Finally ↓**

A declaração `finally` permite executar um código, depois de `try` e `catch`, independente do resultado.

```js
try {
  // block of code to try
}
catch(err) {
  // block of code to handle errors
}
finally {
  // block of code to be executed regardless of the try / catch result
}
```

```js
{
// ...
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```

**O Objeto Error ↓**

| name             | description                            |
| ---------------- | -------------------------------------- |
| `RangeError`     | a number "out of range" has occurred   |
| `ReferenceError` | an illegal reference has occurred      |
| `SyntaxError`    | a syntax error has occurred            |
| `TypeError`      | a type error has occurred              |
| `URIError`       | an error in `encodeURI()` has occurred |

## Melhores Práticas

- Evitar variáveis globais
  - usar `let` ou `const`

- Inicializar as variáveis no momento que são declaradas

```js
let names = [];
```

- Evitar usar `new` na declaração de objetos
  - usar `""` no lugar de `new String()`
  - usar `0` no lugar de `new Number()`
  - usar `false` no lugar de `new Boolean()`
  - usar `{}` no lugar de `new Object()`
  - usar `[]` no lugar de `new Array()`
  - usar `/()/` no lugar de `new RegExp()`
  - usar `function (){}` no lugar de `new Function()`

```js
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object
```

- Sempre declarar variáveis locais
- Declarações sempre ao topo do script ou função

```js
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
```

- Declarar objetos e arrays com `const`
- Tomar cuidado com conversões de tipo automáticas
- Usar o comparador `===`
- Usar parâmetros com valores default

```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
```

- Fechar switches com default

```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}
```

- Evitar números, strings e booleans como objetos

```js
let x = "John";             
let y = new String("John");
(x === y) // is false because x is a string and y is an object.

let x = new String("John");             
let y = new String("John");
(x == y) // is false because you cannot compare objects.
```

- Evitar o uso de `eval()`