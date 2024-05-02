# JavaScript: DOM e Páginas Dinâmicas

- [JavaScript: DOM e Páginas Dinâmicas](#javascript-dom-e-páginas-dinâmicas)
  - [DOM](#dom)
    - [Eventos e Método `addEventListener`](#eventos-e-método-addeventlistener)
    - [Métodos de Atributos](#métodos-de-atributos)
    - [Propriedades](#propriedades)
      - [innerHTML, innerText e textContent](#innerhtml-innertext-e-textcontent)
      - [classList](#classlist)

## DOM

Document Object Model (DOM), é uma forma padronizada de representar e interagir com objetos em documentos HTML e XML. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento. 

Ele modifica dinamicamente essas estruturas, sem precisar atualiza-las, pode:

- Adicionar | modificar | remover
  - tags
  - textos
  - imagens
  - qualquer outro elemento
- Alterar estilos CSS
- Criar novos eventos
- Modificar | receber | mandar valores

![alt text](imgs/back/pic_htmltree.gif)

O termo “documento” é frequentemente utilizado em referências à página, documento e página são sinônimos.

Há vários métodos que retornam os elementos do documento no JavaScript, tornando possível codar as alterações e interações da página. Dentre eles:

```js
// selects an element by their id
document.getElementById(#id)
// selects an element by their class name
document.getElementByClassName('.class')
// selects an element by their tag name
document.getElementByTagName('name') 
// selects a list of elements with the given tag name belonging to the given namespace
document.getElementByTagNameNS('ns', 'name') 
// selects a NodeList collection of elements with a given name attribute
document.getElementByName('name')
// selects the first element by their id, class or name
document.querySelector('selector')
// selects all the elements by their id, class or name
document.querySelectorAll('name[attr=val]')
// selects the topmost element at the specified coordinates (relative to the viewport)
document.elementFromPoint(x, y)
// selects all the elements at the specified coordinates (relative to the viewport)
document.elementsFromPoint(x, y)
```

Os métodos que podem retornar mais um elemento, retornam valores como `HTMLCollection` ou `NodeList`, que funcionam de forma similar a um array.

**Seletores Query ↓**

Os métodos `querySelector` e `querySelectorAll` retornam, respectivamente, o primeiro elemento e uma lista de todos os elementos do seletor especificado. Diferente de outros métodos, aqui é necessário pontuar qual seletor será usado para achar o elemento no documento.

Da mesma forma que o CSS, os seletores seguem da seguinte maneira:

- Nome da Tag
  - Sem marcação, é o nome da tag HTML no documento
  - `body` | `button` | `form`
- Nome da Classe
  - Marcada com o ponto, é o nome dado a classe do elemento
  - `.main-container` | `.blue-btn` | `.login-form`
- Nome do ID
  - Marcada com a hashtag, é o nome do id do elemento
  - `#header-menu` | `#submit-btn` | `#form-input`

**Elemento por Tag ↓**

O método `getElementByTagName` retorna uma lista de todos os elementos com o nome da tag passada. Já o método `getElementByTagNameNS` retorna uma lista com todos os elementos daquele namespace e tag.

**Elemento por Classe**

O método `getElementClassName` retorna uma lista de todos os elementos com o nome da tag passada.

```js
document.getElementsByClassName("test");
document.getElementsByClassName("red test");
document.getElementById("main").getElementsByClassName("test");
document.getElementsByClassName("test")[0];
```

**Elemento por ID**

O método `getElementId` retorna um objeto representando o elemento que combina com o id passado. Um id deve sempre ser único dentro de um documento, se há 2 ou mais elementos em um documento com o mesmo id, o método retornará somente o primeiro.

```js
getElementById(id);
```

**Elemento por Atributo Nome ↓**

O método `getElementClassName` retorna uma coleção `NodeList` de todos os elementos com o mesmo atributo nome repassado.

```js
getElementsByName(name);
```

**Elementos por Posição ↓**

Os métodos `elementFromPoint` e `elementsFromPoint` retornam, respectivamente, o primeiro elemento mais acima da coordenada especificada e uma lista de todos os elementos na coordenada especificada.

Elementos com `pointer-events` serão ignorados. Se o elemento a coordenada especificada estiver fora dos limites do documento ou a coordenada é negativa, o retorno será `null`.

```js
elementFromPoint(x, y);
elementsFromPoint(x, y);
```

`Document.caretPositionFromPoint` é útil para descobrir a posição especifica dentro do documento.

### Eventos e Método `addEventListener`

Eventos são como sinais que o navegador envia quando algo acontece; é a comunicação entre documento e script quando há alguma interação ou mudança no documento.

O método `addEventListener` (da interface `EventTarget`) seta uma função que será chamada quando o evento especificado ocorrer. Alvos comuns são `Element`, seus filhos, `Document` e `Window`, mas pode ser qualquer um que tem suporte para eventos.

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

```js
element.addEventListener(event, callback);
```

Alguns eventos:

```
> input → quando um elemento input tem seu valor modificado
> click → quando ocorre um click com o mouse
> dblclick → quando ocorre dois clicks com o mouse
> mousemove → quando mexe o mouse
> mousedown → quando aperta o botão do mouse
> mouseup → quando solta o botão do mouse (útil com os dois acima para gerenciar drag'n'drop)
> keypress → quando pressiar e soltar uma tecla
> keydown → quando pressiar uma tecla
> keyup → quando soltar uma tecla
> blur → quando um elemento perde foco
> focus → quando um elemento ganha foco
> change → quando um input, select ou textarea tem seu valor alterado
> load → quando a página é carregada
> unload → quando a página é fechada
> submit → disparado antes de submeter o formulário (útil para realizar validações)
```

### Métodos de Atributos

Um elemento HTML é geralmente constituído de tag, atributo, valor e conteúdo. Atributos são propriedades dadas há um elemento em sua tag de abertura/única, como `src` e `disabled`, e costumam ter um valor que os acompanha.

Dentre os métodos de manipulação de DOM, estes 4 são muito úteis e comuns: `getAttribute`, `setAttribute`, `hasAttribute` e `removeAttribute`.

**getAttribute ↓**

Obtêm o valor de um atributo específico do elemento selecionado.

```js
const element = document.querySelector(selector);
const elementAttrValue = element.getAttribute('attr-name');
console.log(elementAttrValue); // attribute value
```

**setAttribute ↓**

Define ou modifica o valor de um atributo específico do elemento selecionado. Ele aceita dois argumentos: o nome do atributo e o valor deste atributo, respectivamente. Se o atributo já existir, o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.

```js
const element = document.querySelector(selector);
element.setAttribute('attr-name', 'attr-value');
```

**hasAttribute ↓**

Verifica se o elemento selecionado tem o atributo específico. Ele recebe um argumento, que é o nome do atributo a ser verificado. É um método booleano.

```js
const element = document.querySelector(selector);
const elementHasAttr = element.hasAttribute('attr-name');
console.log(elementHasAttr); // true or false
```

**removeAttribute ↓**

Remove um atributo específico do elemento selecionado. Ele recebe um argumento, que é o nome do atributo a ser removido.

```js
const element = document.querySelector(selector);
element.removeAttribute('attr-name');
```

### Propriedades

Há muitas propriedades importantes para acessar e manipular elementos no DOM, dentre elas:

- `parentNode`
  - Acessa o nó pai de um elemento
- `childNode`
  - Acessa todos os nós filhos de um elemento
- `nextElementSibling`
  - Acessa o próximo irmão (nó adjacente) de um elemento
- `previousElementSibling`
  - Acessa o irmão anterior (nó adjacente) de um elemento

Existem também propriedades que lidam com algo específico do elemento, como conteúdo textual ou classes.

#### innerHTML, innerText e textContent

Novamente, um elemento possui tag, atributo, valor e conteúdo. Para adicionar, manipular e retornar o conteúdo de um elemento temos 3 métodos principais, `innerHTML`, `innerText` e `textContent`, cada um com seu caso de uso específico.

**InnerHTML ↓**

Altera e retorna todo HTML do elemento especificado, ou seja, pode ser usado para manipular e incluir HTML no documento por meio do JS, por exemplo criar um botão ou alterar um texto, como também pode retornar todo o HTML "cru" daquele elemento.

Simplificando: recupera e define o conteúdo em formato HTML.

```js
const element = documento.querySelector(selector);
element.innerHTML = '<button>Click me</button>';
```

Ele pode ser usado para inserção de tags, textos e imagens em uma página web, gerando um risco de segurança. Parecido com um cross-site scripting, mas inofensivo, pois o HTML5 especifica que uma tag `<script>` inserida via `innerHTML` em uma página web não deve ser executada. 

Entretanto, existem formas de executar JavaScript sem usar `<script>`, fazendo com que ainda exista um risco de segurança ao utilizar o `innerHTML`. Sendo assim, recomenda-se não utilizar ele para user input.

**InnerText ↓**

Retorna e insere apenas texto puro, sem formatação HTML, ou seja, representa o conteúdo textual "renderizado" de um nó e seus descendentes. Usada como getter, retorna de maneira aproximada o texto que o usuário obteria caso tivesse selecionado o conteúdo e copiado para a área de transferência.

Simplificando: recupera e define o conteúdo da tag como texto simples.

```js
const element = documento.querySelector(selector);
element.innerText = 'Click me';
```

**textContent ↓**

Funciona de forma similar ao anterior, porém retorna todo o conteúdo textual do elemento, incluindo o que não está visível ao usuário, como estilizações CSS, scripts, espaços e quebras de linha.

```js
const element = documento.querySelector(selector);
console.log(element.textContent);
```

#### classList

É uma propriedade do JavaScript que representa uma lista de classes CSS. Ele fornece métodos que facilitam a adição, remoção e verificação de classes, tornando a manipulação de classes CSS mais eficiente e menos suscetível a erros de programação.

**add ↓**

Este método adiciona uma classe a um elemento. Ele aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente.

```js
const element = document.getElementById('selector');
element.classList.add('myClass');
```

**remove ↓**

Este método remove uma classe a um elemento. Ele aceita o nome da classe como argumento e remove a classe ao elemento, se ela estiver presente.

```js
const element = document.getElementById('selector');
element.classList.remove('myClass');
```

**toggle ↓**

Este método permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona.

```js
const element = document.getElementById('selector');
element.classList.toggle('myClass');
```

**contains ↓**

Este método verifica se uma classe específica está associada a um elemento.

```js
const element = document.getElementById('selector');
if (element.classList.contains('myClass')) {
  // code here
};
```