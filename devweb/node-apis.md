# Node.js: API Rest com Express e MongoDB

- [Node.js: API Rest com Express e MongoDB](#nodejs-api-rest-com-express-e-mongodb)
  - [Criando Um Servidor Local](#criando-um-servidor-local)
  - [Melhorando Rotas](#melhorando-rotas)
  - [CRUD e Middleware](#crud-e-middleware)
  - [Persistência de Dados](#persistência-de-dados)
  - [Controles](#controles)
  - [Relacionamentos](#relacionamentos)
      - [Opção com Referência](#opção-com-referência)
  - [Queries com Parâmetros](#queries-com-parâmetros)
  - [MVC](#mvc)
  - [Tratamento de Erros](#tratamento-de-erros)

## Criando Um Servidor Local

**Inicializando Node ↓**

```sh
npm init -y
```

**Estrutura Base ↓**

O `http` é importado do Node para a criação de um simples servidor local, sendo passados port, rota, suas requisições e respostas; o servidor então "escuta" o evento no port e retorna o código especificado, neste caso, um `console.log` de teste.

```js
import http from 'http';

const PORT = 3000;
const router = {
    '/': 'base router test'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(router[req.url]);
});

server.listen(PORT, () => {
    console.log('ping pong');
});
```

**Nodemon ↓**

É uma ferramenta que automaticamente reinicializa a aplicação node quando é detectado mudanças em um arquivo dentro do diretório. Neste caso, o `nodemon` facilita o desenvolvimento do servidor, pois ele o reinicializa a cada mudança, ou seja, não é necessário ficar abrindo e fechando o servidor de forma manual.

```sh
npm install nodemon
nodemon server.js
```

## Melhorando Rotas

**Express ↓**

É usado para gerenciar as rotas (que antes foram criadas manualmente com um objeto JavaScript). Ele funciona como um framework de roteamento leve e flexível com recursos básicos mínimos destinados a serem aprimorados por meio de módulos middleware Express.

Suas funcionalidades são destinas para aplicações node web e mobile; ele facilita a criação de APIs robustas com sua infinidade de métodos utilitários HTTP e middleware à disposição.

É importante relembrar que é preciso derrubar o servidor toda vez que for fazer uma instalação.

```sh
npm install express
```

```js
import express from 'express';

const app = express();

const books = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

app.get('/', (req, res) => {
    res.status(200).send('express test');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

export default app;
```

```js
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log('ping pong');
});
```

```sh
nodemon server.js
```

## CRUD e Middleware

Neste caso, o middleware permite acessar as requisições e as respostas no momento e que são feitas, e também para fazer algumas ações sobre elas, como modificar um objeto ou passar informações extras.

**Create ↓**

```js
// code here
app.use(express.json());

// more code here
app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('book registered successfully');
});
```

**Read and Update ↓**

- `PUT`

Substitui totalmente o recurso atual pelos novos dados que estão sendo recebidos na requisição. Caso não exista o recurso anterior, ele será criado. Apesar disso, não é o método indicado para a criação de novos recursos, para isso existe o método `POST`.

Pode ser usado em situações em que há acesso ao recurso completo (por exemplo, todos os campos do documento a ser atualizado) ou a necessidade de substituir totalmente o recurso. É necessário enviar sempre o recurso completo (com todos os campos).

Além disso, o `PUT` é considerado um método idempotente e sem efeitos colaterais, ao contrário de PATCH, e por isso um método “seguro”. 

- `PATCH`

Atualiza parcialmente um recurso já existente. Ao contrário do `PUT` que precisa receber um recurso completo para fazer a substituição completa, `PATCH` pode receber apenas os dados a serem modificados para atualizar apenas estes campos.

Pode ser usado para atualizações parciais e pode receber apenas o campo que será atualizado, o que pode significar menor volume de tráfego de dados.

```js
// code hete
app.get('/books/:id', (req, res) => {
    const i = searchBook(req.params.id);
    res.status(200).json(books[i]);
});

app.put('/books/:id', (req, res) => {
    const i = searchBook(req.params.id);
    books[i].título =req.body.título;
    res.status(200).send('book altered successfully');
});
```

**Delete ↓**

```js
app.delete('books/:id', (req, res) => {
    const i = searchBook(req.params.id);
    books.slice(i, 1);
    res.status(200).send('book deleted successfully');
});
```

## Persistência de Dados

A persistência dos dados tem o objetivo de garantir que as informações serão armazenadas em um meio em que possam ser recuperadas de forma consistente. Ou seja, são registros permanentes e que não são perdidos quando há o encerramento da sessão.

Até agora se foi trabalhado com um objeto JavaScript para servir como stand-in para os dados da API enquanto o server é criado e as conexões e interações são testados. Mas esse objeto é estático, ou seja, os dados não persistente, sua duração corresponde ao tempo que o servidor está rodando.

Para adicionar dados que persistem, onde a gravação das informações não é volátil, em suas inserções, modificações e remoções, é preciso criar uma conexão e armazena-los em um banco de dados.

**Conectando ↓**

```sh
npm install mongodb
npm install mongoose
```

Usando o MongoDB para criar se pode gerar uma string de conexão que será usada para conectar o servidor ao banco de dados.

```js
import mongoose, {mongo} from "mongoose";

async function connectDB() {
    mongoose.connect('mongodb+srv://admin:<password>@cluster0.pmncupu.mongodb.net/livraria');

    return mongoose.connection;
};

export default connectDB;
```

Na string de conexão é necessário substituir `<password>` pela senha de acesso ao banco de dados, para objeto de estudo (onde o código não vai ser compartilhado ao armazenado de forma pública) não há problema deixar exposto dessa maneira, mas se for compartilhado ao subido a internet de alguma maneira, não é legal deixar a vista.

Para resolver essa questão, é possível usar variáveis de ambiente. Elas são utilizadas para separar informações variáveis sensíveis, como senhas e strings de conexão. Esses dados não podem ser compartilhados nem acessados livremente através de um repositório no GitHub.

```sh
npm install dotenv
```

Em um arquivo `.env` se estabelece as variáveis de ambiente, ou seja, as variáveis que representam todas as informações sensíveis que não se pode compartilhar. Neste caso, a string de conexão. Depois que a string de conexão for adiciona a este arquivo, é importante lembrar de adicionar `.env` na lista de arquivos que o git irá ignorar com o arquivo `.gitignore`.

```env
DB_CONNECTION_STRING=mongodb+srv://admin:yourpassword@cluster0.pmncupu.mongodb.net/Library
```

```gitignore
node_modules
.env
```

Após isso é preciso iniciar o `.env` no ponto mais externo da aplicação, ou seja, o primeiro a ser acessado. Neste caso, é o `server.js`. 

```js
import 'dotenv/config';
```

E, por fim, substituir a string pela variável de ambiente criado no arquivo `.env` que ficará armazenada de forma local.

```js
async function connectDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};
```

Agora é só importar e testar a conexão.

```js
import connectDB from './config/dbConnect.js';

const connection = await connectDB();

connection.on('error', (err) => {
    console.error('Connection error', err);
});

connection.once('open', () => {
    console.log('Database connected successfully');
});
```

**Models e Schemas ↓**

Neste contexto, o esquema é um objeto de configuração que define a estrutura e as propriedades de um documento; aqui ele aparece como uma função do `mongoose`. Já o modelo é um objeto que representa uma coleção na base de dados, ou seja, uma interface que permite à API interagir com os documentos de uma coleção.

Dessa forma, o `Schema` define o esqueleto do documento e o `model` fornece para a API todos os métodos para executar com o CRUD.

```js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number, required: true },
    pages: { type: Number },

}, { versionKey: false });

const book = mongoose.model('books', bookSchema);

export default book;
```

**Direcionando Rotas ao MongoDB ↓**

Agora que existe um banco de dados e ele foi conectado ao servidor, os dados estáticos e os métodos/funções criados em volta deles podem ser removidos ou alterados. As rotas devem ser direcionadas ao banco de dados do MongoDB.

```js
app.get('/books', async (_, res) => {
    const arrayBooks = await book.find({});
    res.status(200).json(arrayBooks);
});
```

## Controles

Dentro de um controller é centralizada toda a lógica que está relacionada às ações que pode ser feitos em um modelo, ou seja, o que as rotas vão chamar para executar as operações e o manuseio das requisições e respostas correspondentes.

Ele serve como uma interface entre as requisições e o que acontece em cada uma. AO começar a trabalhar com os controles, é possível começar a melhorar as rotas e separá-las em seu próprio diretório e arquivo.

```js
import book from "../models/Book.js";

class BookController {

    static async requestBooks(_, res) {
        try {
            const arrayBooks = await book.find({});
            res.status(200).json(arrayBooks);
        } catch (err) {
            res.status(500).json({ message: `${err.message} - request failed` });
        };
    };

    static async requestBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (err) {
            res.status(500).json({ message: `${err.message} - book request failed` });
        };
    };


    static async updateBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'book updated successfully'});
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to update book` });
        };
    };

    static async postBooks(req, res) {
        try {
            const newBook = await book.create(req.body)
            res.status(201).json({ message: 'book registered successfully', book: newBook });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to register book` });
        };
    };

    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: 'book deleted successfully'});
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to delete book` });
        };
    };
};

export default BookController;
```

**Refatorando Rotas ↓**

```js
import express from 'express';
import books from './booksRoutes.js';

const routes = (app) => {
    app.route('/').get((_, res) => res.status(200).send('toc toc'));

    app.use(express.json(), books);
};

export default routes;
```

```js
import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get('/books', BookController.requestBooks);
routes.get('/books/:id', BookController.requestBookById);
routes.put('/books/:id', BookController.updateBookById);
routes.post('/books', BookController.postBooks);
routes.delete('/books/:id', BookController.deleteBookById);

export default routes;
```

```js
import routes from './routes/index.js';

/* some code here */
const app = express();
routes(app);

/* more code here */
```

## Relacionamentos

Agora que que toda a lógica de livros está criada, podemos pensar em expandir o banco com mais coleções e relacionamentos entre elas. As formas mais comuns de relacionar dados na modelagem de bancos são: embedding (incorporar) e referencing (referenciar), sendo que o MongoDB segue o princípio  “dados que são acessados juntos devem ser armazenados juntos”.

Essa incorporação entre dados relacionados em um documento é usada para simplificar queries aos dados e melhorar performance em geral das ferramentes de consultas. Assim, agora basta criar um novo modelo, controle e rotas da entidade desejada e incorporar a nova informação ao modelo relevante.

Neste caso, a criação do autor.

```js
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    popularity: { type: String, enum: ['meh', 'good', 'great'] }
}, { versionKey: false });

const author = mongoose.model('authors', authorSchema);

export { author, authorSchema };
```

```js
import authors from './authorRoutes.js'

/* some code here */
    app.use(express.json(), books, authors);
};
```

```js
/* some code here */
const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number, required: true },
    pages: { type: Number },
    author: authorSchema
}, { versionKey: false });
/* more code here */
```

```js
import { author} from './authorRoutes.js'

/* some code here */
    static async updateBookById(req, res) {
        const updates = req.body;

        try {
            const id = req.params.id;
            const foundedAuthor = await author.findById(updates.author);
            let updatedBook = '';

            if (foundedAuthor === null) {
                updatedBook = updates;
            } else {
                updatedBook = {...updates, author: {...foundedAuthor._doc}}
            }

            await book.findByIdAndUpdate(id, updatedBook);
            res.status(200).json({message: 'book updated successfully'});
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to update book` });
        };
    };

    static async postBooks(req, res) {
        const newBook = req.body;

        try {
            const foundedAuthor = await author.findById(newBook.author);
            const completeBook = {...newBook, author: {...foundedAuthor._doc }};
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: 'book registered successfully', book: createdBook });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to register book` });
        };
    };

/* more code here */
```

Ao contrário dos bancos de dados relacionais, o MongoDB não possui recursos nativos para atualizações em cascata.Isso significa que, ao criar um documento que tem relacionamento com outro pré-cadastrado, na verdade, os dados deste documento naquele momento estão sendo copiados para este que está sendo criado. Portanto, se o mesmo for atualizado posteriormente, o outro receberá essa atualização.

Há algumas maneiras de lidar com isso:

Sempre que for atualizar o documento "copiado", também atualizar todos os documentos associados a ele. No entanto, isso pode ser ineficiente se tiver muitos documentos associados a um único copiado.

Outra abordagem seria armazenar apenas o ID do documento no novo associado, em vez de copiar todos os dados do documento. Dessa forma, sempre que precisar dos dados do documento para um associado, é possível buscar o documento pelo ID. Isso garantiria que os dados do documento sempre estarão mais atualizados. No entanto, isso também pode ser ineficiente se frequentemente precisar dos dados do documento ao trabalhar com associados.

No fim das contas, a melhor abordagem depende das necessidades específicas de cada caso.

#### Opção com Referência

Ao invés do `autorSchema`, é adicionado a propriedade autor tendo como valor um ID do tipo `ObjectId` do MongoDB, fazendo referência à coleção autores.

```js
const bookSchema = new mongoose.Schema({
 id: { type: mongoose.Schema.Types.ObjectId },
 title: { type: String, required: true },
 publisher: { type: String },
 price: { type: Number },
 pages: { type: Number },
 author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
}, { versionKey: false });
```

Quando o `references` é usado, o autor não faz mais parte do objeto livro. Assim, cada livro deve ser “populado” com as referências do autor. Os métodos `book.find({}).populate("author").exec()`; vão utilizar o ID informado no campo autor do livro para buscar a referência desse ID e “popular” a propriedade.

```js
 static async requestBooks (req, res) {
   try {
     const arrayBooks = await book.find({}).populate("author").exec();
     res.status(200).json(arrayBooks);
   } catch (erro) {
     res.status(500).json({ message: `${erro.message} - request failed` });
   }
 };
```

Já o método de cadastrar livro fica como estava anteriormente, pois agora o schema Book apenas recebeu a propriedade autor com o tipo de dado ID.

## Queries com Parâmetros

Neste projeto já foi trabalhado a busca com o parâmetro id, sendo referenciado por `:id`, mas agora que a complexidade do banco está crescendo, podemos também começar a aumentar a complexidade das buscas, trabalhando com parâmetros passados em uma rota, os chamados parâmetros de query.

Estes parâmetros são um par de chave/valor `key=value`, sendo que a interrogação (?) inicia essa sequência de parâmetros, e podem ser separados, tendo uma pesquisa mais complexa com múltiplos parâmetros, pelo "E" comercial (&). Como exemplo: `/search?query=express`, `/search?query=express&type=course`.

```js
    static async requestBookByPublisher(req, res) {
        const publisher = req.query.publisher;

        try {
            const booksByPublisher = await book.find({publisher: publisher});
            res.status(200).json(booksByPublisher);
        } catch (err) {
            res.status(500).json({ message: `${err.message} - book request failed` });
        }
    };
```

O JavaScript tem um padrão no qual se a chave e o valor forem o mesmo dado, é possível passar apenas um deles, ou seja, escrever apenas `.find({editora})`.

Dessa forma, uma informação variável pode ser passada como parâmetro da consulta, sendo essa informação enviada junto com a rota e o Express conseguirá capturá-la. Mas é importante pontuar que o Express trabalha com precedência de rota, ou seja, as rotas são chamadas em sequência. Isso significa que é necessário adicionar essas rotas em uma ordem de complexidade, da maior para a menor.

```js
/* some code here*/
routes.get('/books', BookController.requestBooks);
routes.get('/books/search', BookController.requestBookByPublisher);
routes.get('/books/:id', BookController.requestBookById);
routes.put('/books/:id', BookController.updateBookById);
routes.post('/books', BookController.postBooks);
routes.delete('/books/:id', BookController.deleteBookById);
/* more code here*/
```

## MVC

Quando desenvolvemos uma aplicação, seja uma API REST ou outros tipos de API, é normal que o código seja organizado em “camadas”, ou seja, em conjuntos de código separados de acordo com sua função. As possibilidades de organização do código em camadas dentro de uma aplicação são inúmeras e fazem parte de grandes áreas de estudo dentro da programação, como a arquitetura de software.

O modelo usado nesse projeto foi um dos modelos clássicos de arquitetura para APIs REST, o MVC (Model-View-Controller).

Os models são responsáveis pela representação dos dados e da lógica de negócio da aplicação, ou seja, é responsabilidade do model gerenciar o relacionamento entre a API e a camada de dados, incluindo validação, armazenamento e manipulação dos dados, interação com a base de dados e suas regras.

Já os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que na API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.

![alt text](imgs/server/mvc.webp)

![alt text](imgs/server/mvc2.webp)

## Tratamento de Erros

Antes de começar a tratar os possíveis erros de uma API, é importante ressaltar que se deve evitar de enviar para o cliente detalhes técnicos internos da API, principalmente informações do banco de dados que possam ser sensíveis.

Mesmo que o front-end possa tratar a requisição e mostrar uma mensagem de erro mais apropriada ao usuário final, ainda assim se está expondo informações da API nas respostas. Nada garante que o front-end vai de fato tratar todas as mensagens. E, mesmo que trate, ainda assim seria possível uma pessoa mal intencionada fazer requisições diretamente para a API e tentar obter e explorar informações sensíveis a partir das mensagens de erros.

Considerando o erro:

```log
Cast to ObjectId failed for value \"6485e5aaad1084605f44a4f5H\" (type string) at path \"_id\" for model \"Author\"
```

Esse erro é interno do mongoose, e contém informações como o nome do modelo e o nome do campo. Até mesmo o formato do erro pode denunciar que o banco utilizado é o MongoDB. Essas informações podem ser úteis para um atacante entender a estrutura do banco de dados ou explorar suas vulnerabilidades.

Essas mensagens de erros do Banco de Dados servem apenas para as pessoas desenvolvedoras da API, justamente para se saber o que aconteceu e para que se possa tratar melhor esses erros em tempo de desenvolvimento.

Assim, superada a motivação de proteger detalhes internos do sistema, ainda existem casos onde é interessante fornecer mensagens de erro mais adequadas para o cliente. Por exemplo, se tiver havido um erro de requisição por parte do cliente, não se deve retornar um erro genérico de servidor com código de status `500`. Se o usuário passar um ID inválido, então o erro deve informar apropriadamente que foi fornecida uma informação inválida e o código de status deve ser `400`.

Ou seja, ao mesmo tempo que não devemos expor detalhes internos da API, devemos retornar informações semânticas que sejam úteis ao usuário final.

**Erros de Busca por Id ↓**

Os principais erros tratados nesta consulta são: id não localizado, dados incorretos e erro interno de servidor.

```js
  static async requestAuthorById(req, res) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);

      if (authorFound !== null) {
        res.status(200).json(authorFound);
      } else {
        res.status(404).send({ message: 'author id not located' });
      }

    } catch (err) {
      if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: 'one or more provided data is incorrect' });
      } else {
        res.status(500).send({ message: 'internal server error' });
      }

    };
  };
```