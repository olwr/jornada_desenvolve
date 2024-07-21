# SQL Com MySQL

- [SQL Com MySQL](#sql-com-mysql)
  - [Contextualizando SQL](#contextualizando-sql)
  - [Contextualizando MySQL](#contextualizando-mysql)
  - [Contextualizando Banco de Dados](#contextualizando-banco-de-dados)
  - [Conceitos de Banco de Dados](#conceitos-de-banco-de-dados)
    - [Abstração de Dados](#abstração-de-dados)
    - [Projeto de Banco de Dados](#projeto-de-banco-de-dados)
    - [Tipos de Bancos de Dados](#tipos-de-bancos-de-dados)
  - [Linguagem SQL](#linguagem-sql)
      - [Diferentes Tipos de Joins](#diferentes-tipos-de-joins)
    - [Organização SQL](#organização-sql)
    - [Operadores](#operadores)
      - [Relacionais](#relacionais)
      - [Lógicos](#lógicos)
      - [Wildcards](#wildcards)
      - [Aritméticos](#aritméticos)
      - [De Atribuição Composta](#de-atribuição-composta)
    - [Apelidos Para Campos Selecionados](#apelidos-para-campos-selecionados)
    - [Concatenação e Distinção](#concatenação-e-distinção)
    - [Ordenando Os Resultados](#ordenando-os-resultados)
    - [Expressão CASE](#expressão-case)
    - [Stored Procedures](#stored-procedures)
    - [Algumas Boas Práticas](#algumas-boas-práticas)
        - [Cheat Sheet](#cheat-sheet)
  - [Database](#database)
    - [Create, Drop e Backup (DB)](#create-drop-e-backup-db)
    - [Create, Drop e Alter (Table)](#create-drop-e-alter-table)
    - [Constrains](#constrains)
      - [Auto Increment](#auto-increment)
    - [Inserindo Dados na Tabela](#inserindo-dados-na-tabela)
    - [Alterando e Excluindo Dados](#alterando-e-excluindo-dados)
    - [Commit e Rollback](#commit-e-rollback)
    - [Tipos de Dados](#tipos-de-dados)
    - [Views](#views)
    - [Injections](#injections)
    - [Funções Mais Comuns do MySQL](#funções-mais-comuns-do-mysql)
    - [Definindo Padrões para Campos](#definindo-padrões-para-campos)
    - [Triggers](#triggers)
  - [Procedures no MySQL](#procedures-no-mysql)
    - [Alteração e Exclusão](#alteração-e-exclusão)
    - [Declarando Variáveis](#declarando-variáveis)
    - [Manipulando Dados com Parâmetros](#manipulando-dados-com-parâmetros)
      - [Atribuição de Valor com Select](#atribuição-de-valor-com-select)
    - [Controle de Fluxo](#controle-de-fluxo)
    - [Cursor](#cursor)
    - [Funções](#funções)
  - [DBA (Database Administrator)](#dba-database-administrator)
    - [Criando e Configurando Conexões](#criando-e-configurando-conexões)
      - [Criando um Usuário](#criando-um-usuário)
    - [Tuning de Hardware](#tuning-de-hardware)
    - [Mecanismos de Armazenamento](#mecanismos-de-armazenamento)
    - [Backups](#backups)
    - [Plano de Execução](#plano-de-execução)
      - [Conceituando Índices](#conceituando-índices)
      - [Algoritmos Hash e BTree](#algoritmos-hash-e-btree)



## Contextualizando SQL

SQL é uma linguagem de programação usada por quase todos os bancos de dados relacionais para consultar, manipular e definir dados e fornecer controle de acesso. O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, com a Oracle como principal contribuinte, o que levou à implementação do padrão SQL ANSI. 

Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação estão começando a aparecer.

Criada com o intuito de padronizar a maneira como os registros são consultados nos bancos de dados relacionais. Atualmente vai além das consultas: cria, altera, estrutura e manipula banco  de dados, além da maneira como banco de dados interage com segurança, entre outras funcionalidades.

**Suas vantagens:**

- Aprendizado ↓

Ao ter o conhecimento da linguagem, é simples se adaptar entre diferentes bancos, como exemplo: 

O profissional com conhecimento sobre o SQL da Oracle conseguirá manipular facilmente o MySQL ou SQL Server da Microsoft. Por mais que existam diferenças - principalmente na parte de funções - a adaptação do profissional não é uma questão complicada.

- Portabilidade ↓

É mais simples migrar sistemas. Lembrando que quanto mais for utilizado o SQL Standard definido pelo ANSI, mais fácil será essa portabilidade no futuro. Então, é útil evitar as funções específicas do banco de dados e permitir que o programa realize essa tarefa.

- Longevidade ↓

É a garantia de que os relatórios ou processos utilizando o SQL irão funcionar por um longo período, já que estarão sempre adaptados ao padrão ANSI. Ou seja, ao efetuar um upgrade de banco de dados o sistema não ficará fora de serviço.

- Comunicação ↓

O fato da maioria utilizar SQL permite a facilidade de comunicação entre os sistemas. Como, por exemplo, processos de ETL, (extract, transform and load), ou de integração entre sistemas que ficam mais simples de serem desenvolvidos, já que ambos utilizam o SQL padrão.

- Liberdade de Escolha ↓

Por existir um padrão de linguagem, se a empresa for optar pelo uso de um banco de dados relacional não ficará presa à linguagem de comunicação, por exemplo, já que são bem semelhantes. Ao tomar essa decisão, a corporação irá utilizar outros critérios de escolha, como performance, hardware, custo, entre outros.

**Suas desvantagens:**

- Privação de Criatividade ↓

O SQL possui limitações que podem não atender às novas demandas no mercado na linguagem SQL, principalmente com o surgimento das redes sociais e dos enormes volumes de dados, o chamado big data. Ou seja, há uma carência nas coletas de dados que estão trafegando na internet.

Para tal, estão surgindo outros bancos que usam padrões diferentes dos bancos de dados relacionais, o chamado NoSQL. Estes atendem de forma mais eficiente as demandas de tabelas de big data, como no caso das redes sociais.

- Falta de Estruturação ↓

A linguagem não possui comandos condicionais como as demais linguagens de programação.

Para conseguir suprir essa carência da estruturação, os bancos de dados relacionais da Oracle, SQL e MySQL criaram suas linguagens próprias internas que realizam esse conjunto de estruturação usando a linguagem SQL, mas que acaba se afastando um pouco do padrão ANSI.

**O padrão ANSI possui 3 grupos de comandos:**

- DDLs (Data Definition Language) ↓

São a parte da linguagem SQL que permite a manipulação das estruturas do banco de dados. Como, por exemplo, criar um banco, tabelas, índices, apagar as tabelas e alterar a política de crescimento de índice. Ou seja, os comandos que envolvem a estrutura do banco de dados relacionais são os comandos do tipo DDL.

- DML (Data Manipulation Language) ↓

Visa gerenciar os dados: incluindo, alterando e excluindo informações nas estruturas do banco, como as tabelas. Além disso, realizam as consultas, buscam as informações das estruturas e exibem para o usuário.

- DCL (Data Control Language ) ↓

Permite administrar o banco de dados como, por exemplo, o controle de acesso, o gerenciamento do usuário, gerenciar o que cada usuário(a) pode ou não visualizar, gerenciar o banco ao nível de estrutura (como a política de crescimento, como e onde será armazenado no disco), administrar os processos, saber quantos processos estão sendo executados, controle de log e assim por diante.

## Contextualizando MySQL

Criado no projeto MySQL, é um banco de dados relacional e compatível com a linguagem SQL. Apresentado como open-source, foi comprado pela Oracle e hoje é distribuído em duas formas: open-source, sob os termos da licença GNU (GNU's Not Unix!), e sob a licença padrão comercial do MySQL.

Quando o MySQL foi vendido, a comunidade open source criou outro banco de dados, o MariaDB, que se tornou o sucessor em código aberto do MySQL.

- Servidor ↓

É robusto até certo ponto, já que deriva de características de multiacesso, integridade de dados, efetua o relacionamento entre tabelas, trabalha a concorrência quando vários usuários tentam acessar o mesmo dado na mesma tabela, realiza o controle de transações, entre outros processos.

- Portabilidade ↓

Pode ser transacionado entre diversos sistemas. Isso significa que é possível desenvolver o banco de dados MySQL em Windows e posteriormente utilizar no Linux ou Unix, sendo assim, interplataforma.

Além disso, o banco MySQL provém várias APIs que permitem acessar os dados do MySQL usando .Net, Java, Python, PHP, JavaScript e JQuery, por exemplo. Isto é, as linguagens de programação que são mais usadas no mercado possuem APIs nativas para acesso ao MySQL.

- Multithread ↓

É usado uma programação de threads utilizando diretamente o Kernel do sistema operacional, permitindo aumentar a velocidade de transações, além de facilitar a integração da ferramenta com hardwares, possibilitando a escalabilidade da performance.

Isto quer dizer que, caso tenha um MySQL usando um servidor com determinado número de CPUs, é possível acrescentar mais CPUs que o banco de dados se adapta usando o máximo do hardware disponível.

- Armazenamento ↓

Atua com diversas formas de armazenamento que se adaptam às características das suas necessidades. Por exemplo, algumas formas priorizam a velocidade, enquanto outras o alto volume de armazenamento, tudo dependendo do objetivo pelo qual é utilizado.

- Velocidade e Desempenho ↓

É considerado um dos bancos mais rápidos do mercado, sobretudo quando são utilizadas funcionalidades ligadas à internet. Como exemplo, sites de e-commerce e de aplicações de internet, já que as nuvens da Amazon, do Google e da Microsoft (Azure) disponibilizam instâncias de MySQL com uma alta escalabilidade.


- Segurança ↓

Possui internamente diversos mecanismos de segurança, o que o torna bastante seguro para o mercado. Além disso, permite a segregação dos dados por usuários de acesso, isto é, a pessoa possui acesso somente ao que lhe for permitido.

- Capacidade ↓

Também permite o armazenamento de uma quantidade enorme de dados, tornando a sua capacidade alta, a depender das formas de armazenamento. Se for escolhida uma forma que prioriza o volume de dados, há um limite hoje de até 65 mil terabytes de dados armazenados.

Claro, recuperar e manipular esse volume de informação pode ser um pouco difícil e depender de muito hardware. A maioria das aplicações corporativas não precisam desse tamanho todo de armazenamento para trabalharem.

- Aplicabilidade ↓

O MySQL não se aplica somente a utilidades de internet - apesar de ser preferido por desenvolvedores web -, mas também aplicações de desktop ou corporativas, essas chamadas de On Premises, nas quais o banco de dados é instalado no próprio servidor da empresa. 

Esses bancos possuem o que chamamos ODBCs (Open Database Connectivity, comum em bancos baseados em Windows) ou JDBCs (Java Database Connectivity, comum em bancos baseados em Java), que permitem realizar acessos rápidos ao banco de dados MySQL em aplicações desktop.

- Logs ↓

No MySQL há um forte gerenciamento de log, que registra tudo o que é feito no banco. Isso é um ponto interessante quando é necessário realizar uma recuperação de dados ou se for preciso fazer o que é chamado réplica de servidores, técnica bastante usada quando se tem um servidor chamado master e outro slave, existindo uma sincronização de dados entre eles.

## Contextualizando Banco de Dados

Um banco de dados é um armazenamento de informações, **um repositório que armazena dados que podem ser consultados**, ou seja, é possível em um ambiente ou diretório específico e visualizar um ou mais arquivos  que representam o banco de dados. 

Isso faz com que a entidade maior seja o próprio banco de dados.

Dentro dele há diversas entidades, estruturas que organizam como os dados são armazenados. Uma das principais entidades é a **tabela**, podendo conter várias no mesmo banco de dados.

Uma tabela é constituída de 2 componentes: **campos** (colunas) e **registros** (linhas); diferente de, por exemplo, uma tabela no excel, no momento de criação da mesma é preciso já estabelecer as **definições** do que ela abrangerá.

Algumas dessas definições são a quantidade e categoria de cada campo. Como exemplo de categoria se pode ser: textual, numérico, lógico ou binário.

Os valores de um mesmo campo não podem ser de grupos diferentes, ou seja, se o campo foi estabelecido como numérico, só pode armazenar números. Caso fuja da categoria, incluindo por exemplo um texto, o banco de dados retorna erro.

Os registros possuem número infinito, isto é, quantidade ilimitada por padrão - a depender do espaço em disco disponível para o banco de dados expandir. 

Inclusive, ao gerar um banco de dados se pode determinar políticas de crescimento ou o limite máximo que ele pode ampliar.

Ainda referente a tabela, outro conceito importante é a **chave primária (primary key)**. No momento de criar uma tabela, não obrigatoriamente, se pode estabelecer uma chave primária, isso significa que os valores de um campo específico não podem se repetir em um registro.

Já se for uma chave primária composta, o que não pode repetir é a combinação entre os campos. Portando, **chave primária são os valores de campos ou combinação entre campos — chave primária composta — que não podem se repetir nos registros da tabela.**

Além disso, como é possível em um banco de dados se ter várias tabelas, cada uma possuindo um fragmento da informação armazenada, também é possível estabelecer uma relação entre elas através da **chave estrangeira (foreign key)**.

Isso faz com o que a informação tenha integridade, visto que essa isso impede que existam buracos entre tabelas relacionadas.

Outro ponto importante é que as tabelas podem ter **índices** -  estes permitindo encontrar informações dentro das mesmas de maneira mais rápida.

Quando há uma chave estrangeira, automaticamente o banco de dados cria índices nos campos que se inter-relacionam.

Simplificando, no banco de dados há diversas tabelas, composta por campos (colunas) e registros (linhas), essas tabelas possuem chaves estrangeiras, primárias e podem conter índices.

**Esquema (Schemas)** é o conjunto de tabelas que representam o mesmo assunto. As tabelas de esquemas diferentes podem se relacionar, essa transformação é apenas uma forma de agrupar as tabelas por tema, sendo mais utilizado no sentido de organização.

O banco de dados possui também a chamada **View (visão)**, um agrupamento de tabelas. Ao fazer uma consulta ela pode retornar informações de uma ou mais tabelas. Após conseguir unir duas ou mais tabelas e gerar um resultado para essa consulta, se pode transformar-lá em uma view.

Isso significa que a view possui um comportamento similar a tabela, mas que por trás dela já há uma consulta estabelecida com as regras de negócio para agrupar as informações solicitadas.

Internamente, o banco de dados possui **procedures**, e dentro deste se pode ter funções. Eles são cálculos montados com campos que podem ser usadas dentro de um comando de consulta.

Os sistemas costumam possuir um catálogo próprio de funções, mas também é possível criá-las.

Por último, existem os **triggers**. Este é um aviso programado caso algo ocorra no banco de dados ou tabela. Por exemplo, um aviso caso alguém realize alguma alteração ou delete informações nas tabelas.

Este aviso poder ser uma função, um procedure ou um único comando SQL, que será executado quando a condição da trigger for satisfeita.

Enfim, o banco de dados possui todos esses componentes: tabelas, views, procedures e funções.

## Conceitos de Banco de Dados

Segundo Korth, um banco de dados: 

> é uma coleção de dados inter-relacionados, representando informações sobre um domínio específico. 

Ou seja, é um repositório que armazena de forma agrupada informações relacionadas, facilitando consulta, criação e manipulação dos dados.

Já um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário.

Por fim, o conceito de um sistema de banco de dados é que ele é como o conjunto de quatro componentes básicos: dados, hardware, software e usuários. Date conceituou que: 

> um sistema de bancos de dados pode ser considerado como uma sala de arquivos eletrônica

Os objetivos de um sistema de banco de dados são o de isolar o usuário dos detalhes internos do banco de dados (promover a abstração de dados) e promover a independência dos dados em relação às aplicações, ou seja, tornar independente da aplicação, a estratégia de acesso e a forma de armazenamento.

![Alt text](imgs/acesso-web-banco-de-dados-2.webp)

### Abstração de Dados

O sistema de banco de dados deve garantir uma visão totalmente abstrata do banco de dados para o usuário, ou seja, para o usuário do banco de dados pouco importa qual unidade de armazenamento está sendo usada para guardar seus dados, contanto que os mesmos estejam disponíveis no momento necessário.

Há diferentes interpretações de como se divide esta abstração, uma delas é:

![Alt text](imgs/abstra%C3%A7%C3%A3o_de_dados.jpg)

Ela se dá em 3 níveis:

- Nível de visão do usuário ↓
  - As partes do banco de dados que o usuário tem acesso de acordo com a necessidade individual de cada usuário ou grupo de usuários;

- Nível conceitual ↓
  - Define quais os dados que estão armazenados e qual o relacionamento entre eles;

- Nível físico ↓
  - É o nível mais baixo de abstração, em que define efetivamente de que maneira os dados estão armazenados.

Outro modo de ver esta mesma interpretação é como uma hierarquia de modelos de dados que se divide em três níveis de acordo com a capacidade de abstração do modelo: Conceitual, Lógico e Físico.

Segundo Silberschatz, sua classificação segue:

- Nível físico ↓ 
  - Nível de abstração mais baixo, descreve como os dados são armazenados.

- Nível lógico ↓ 
  - O próximo nível de abstração, descreve quais dados estão armazenados no banco de dados e quais relações existem entre eles.

- Nível de visão ↓ 
  - A abstração mais alta, descreve apenas parte do banco de dados.

![Alt text](imgs/niveis-de-vis%C3%A3o-de-dados.jpg)

- Esquemas ↓
  - Esquema físico
    - Descreve o projeto de banco de dados no nível físico.

  - Esquema lógico
    - Descreve o projeto de banco de dados no nível lógico.

- Modelo de dados ↓
  - Modelo relacional
  - Modelo entidade-relacionamento
  - Modelo de dados baseado em objetos.
  - Modelo de dados semiestruturado.

- Arquitetura ↓
  - Duas camadas
    - Cliente (usuário e aplicação) + Servidor (sistema de banco de dados)

  - Três camadas
    - Cliente (usuário e cliente de aplicação) + Servidor (servidor de aplicação + sistema de banco de dados)

Existe uma outra hierarquia, a da Arquitetura 3 esquemas, onde também se tem três níveis: Externo, Conceitual e Físico.

Segundo Navathe as hierarquias seguem como:

- Modelo de dados: uma coleção de conceitos que podem ser utilizados para descrever a estrutura do banco de dados.
  - Conceitual ou de alto nível 
    - oferecem conceitos próximos de como os usuários percebem os dados. (e.g.: modelo ER)
  
  - Representativos ou de implementação
    - Oferecem conceitos que podem ser facilmente entendidos pelos usuários finais, mas que não estão muito longe do modo como os dados são organizados e armazenadas. 
    - Modelos de dados representativos ocultam muitos detalhes do armazenamento de dados em disco, mas podem ser implementados diretamente em um sistema de computador. (e.g.: modelo de dados relacional, rede ou hierárquico)
  
  - Físicos ou de baixo nível 
    - Oferecem conceitos que descrevem os detalhes de como os dados são armazenados no computador, em geral, em discos magnéticos.

- Arquitetura três esquemas
  - Níveis
    - Níveis: externo, conceitual, interno

    - Esquemas: Visão externa, esquema conceitual, esquema interno

    - Mapeamentos: externo/conceitual e conceitual/interno

    - Independência de dados: lógica (mudança no esquema conceitual) e física (mudança no esquema interno).

### Projeto de Banco de Dados

Todo bom sistema de banco de dados deve apresentar um projeto, este visa a organização das informações e utilização de técnicas para que o futuro sistema obtenha boa performance e também facilite infinitamente as manutenções que venham a acontecer.

O projeto se divide em 2 fases, sendo elas uma referência para um sistema de banco de dados ainda não implementado, ou seja, que ainda não existe, um novo projeto. Para os casos em que o banco de dados já existe, mas é um sistema legado, por exemplo, ou um sistema muito antigo sem documentação, o processo de projeto de banco de dados se dará através da utilização de uma técnica chamada de Engenharia Reversa.,

É interessante começar um projeto primeiro analisando seus requisitos: entendendo regras, coletando informações do que é necessário para cada processo - por pesquisas, entrevistas e reuniões - e, por fim, desenhar o modelo sendo o mais fiel a realidade.

- **Modelagem Conceitual ↓**

É a descrição do Banco de Dados independente ao Sistema de Gerenciamento de Dados, ou seja, define quais os dados que aparecerão no BD, mas sem se importar com a implementação que se dará ao BD. Desta forma, há uma abstração em nível de SGBD.

Uma das técnicas mais utilizadas dentre os profissionais da área é a abordagem entidade-relacionamento (ER), onde o modelo é representado graficamente através do diagrama entidade-relacionamento (DER).

- Construção do diagrama ER
- Estabelecimento das cardinalidades das entidades

![Alt text](imgs/modelagem-sistema-vendas.png)

- Atributos das entidades

Com isto estabelecido, é necessário então atribuir as características de cada entidade, seus atributos.

![Alt text](imgs/modelagem-sistema-vendas-atributos.png)

- Transformar o digrama em BD

Por fim, cada entidade dentro deste diagrama se transformará em uma ou mais tabelas dentro do banco de dados, e cada relação da modelagem será um relacionamento entre as tabelas do banco de dados.

Se transformando assim em um esquema de tabelas.

![Alt text](imgs/esquema-de-tabelas.png)

Com este esquema é possível finalmente começar a construção do banco de dados. Existem ferramentas, chamadas de CASE (Computer-Aided Software Engineering), que facilitam essa construção.

A ferramente desenha o esquema de relações graficamente e gera os códigos de criação. Exemplos de ferramentas: Star UML, Astah, ERWin.

![Alt text](imgs/diagrama_entidade-relacionamento.jpg)

O modelo acima, entre outras coisas, traz informações sobre Alunos e Turmas. Para cada Aluno, será armazenado seu número de matrícula, seu nome e endereço, enquanto para cada turma, teremos a informação de seu código, a sala utilizada e o período.

- **Projeto Lógico ↓**

Descreve o BD no nível do SGBD, ou seja, depende do tipo particular de SGBD que será usado. Não pode ser confundido com o Software que será usado. O tipo de SGBD que o modelo lógico trata é se o mesmo é relacional, orientado a objetos, hierárquico, etc.

### Tipos de Bancos de Dados

Há vários tipos de bancos de dados, sendo que o melhor banco de dados para uma organização específica depende de como a organização pretende usar os dados.

![Alt text](imgs/banco_de_dados_tipos-1024x714.png)

- **BD Relacionais ↓**

Se tornaram dominantes na década de 1980. 

Os itens são organizados como um conjunto de tabelas com colunas e linhas. A tecnologia de banco de dados relacional fornece a maneira mais eficiente e flexível de acessar informações estruturadas.

![Alt text](imgs/UML-Relational-database-example-1-1536x864.jpeg)

- **BD Orientado a Objetos ↓**

As informações são representadas na forma de objetos, como na programação orientada a objetos.

![Alt text](imgs/diagramaOO.png)

- **BD Distribuídos ↓**

Consiste em dois ou mais arquivos localizados em sites diferentes. O banco de dados pode ser armazenado em vários computadores, localizados no mesmo local físico ou espalhados por diferentes redes.

![Alt text](imgs/BancoDeDadosDistribuido1.jpg)

- **Data Warehouse ↓**

Um repositório central de dados é um tipo de banco de dados projetado especificamente para consultas e análises rápidas.

![Alt text](imgs/data_warehouse1.jpg)

- **BD NoSQL ↓**

Um NoSQL, ou banco de dados não relacional, permite que dados não estruturados e semiestruturados sejam armazenados e manipulados (em contraste com um banco de dados relacional, que define como todos os dados inseridos no banco de dados devem ser compostos). 

![Alt text](imgs/SQL_NoSQL.webp)

Os bancos de dados NoSQL se tornaram populares à medida que os aplicativos web se tornaram mais comuns e mais complexos.

![Alt text](imgs/NoSQL_types.webp)

- **BD Gráficos ↓**

Armazena dados em termos de entidades e os relacionamentos entre entidades.

![Alt text](imgs/bd_graphs.webp)

- **BD OLTP ↓**

É um banco de dados rápido e analítico projetado para um grande número de transações realizadas por vários usuários.

![Alt text](imgs/dwgen.webp)

Esses são apenas alguns dos vários tipos de bancos de dados em uso atualmente. Há também outros bancos de dados menos comuns que são adaptados para funções científicas, financeiras ou outras muito específicas. 

Além dos diferentes tipos de banco de dados, as mudanças nas abordagens de desenvolvimento de tecnologia e os avanços dramáticos, como a nuvem e a automação, estão impulsionando os bancos de dados em direções totalmente novas. Alguns dos mais recentes bancos de dados incluem:

- **BD em Nuvem ↓**

É uma coleção de dados, estruturados ou não estruturados, que residem em uma plataforma de computação em nuvem privada, pública ou híbrida. Existem dois tipos de modelos de banco de dados em nuvem: tradicional e banco de dados como serviço (DBaaS). 

Com o DBaaS, as tarefas administrativas e a manutenção são executadas por um provedor de serviços.

- **BD Multimodelo ↓**

Combinam diferentes tipos de modelos de banco de dados em um back-end único e integrado. Isso significa que eles podem acomodar vários tipos de dados.

- **BD Autônomos ↓**

Os bancos de dados independentes mais novos e inovadores (também conhecidos como bancos de dados autônomos) são baseados em nuvem e usam machine learning para automatizar o ajuste de banco de dados, segurança, backups, atualizações e outras tarefas de gerenciamento de rotina tradicionalmente executadas por administradores de banco de dados.

- **BD de Documentos/JSON ↓**

Projetado para armazenamento, recuperação e gerenciamento de informações orientadas a documentos, os bancos de dados de documentos são uma maneira moderna de armazenar dados no formato JSON, em vez de linhas e colunas.

## Linguagem SQL

A maioria das ações dentro de uma base de dados são executadas por declarações SQL. Sua forma mais básica consistem em: comando/palavra_chave + o nome da tabela.

```sql
COMMAND * COMMAND table_name

KEYWORD * KEYWORD object_name
```

```sql
SELECT * FROM city
```

Comentários seguem a seguinte sintaxe:

```sql
-- this is a comment
```

As keywords não são case-sensitive, ou seja, `SELECT == select`. O ponto e vírgula é padrão para finalizar declarações e separa-las em bases que permitem a execução de mais de uma declaração por vez em uma chamada para o server.

```sql
SELECT * FROM costumers;

SELECT * FROM managers;
```

| Keyword         | Description                                                                 | Example                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ADD             | Add new records to a table.                                                 | `INSERT INTO Employees (FirstName, LastName) VALUES ('John', 'Doe');`                                                                       |
| ALTER TABLE     | Modify an existing table structure.                                         | `ALTER TABLE Customers ADD Email VARCHAR(255);`                                                                                             |
| AND             | Combine multiple conditions using logical AND.                              | `SELECT * FROM Orders WHERE Country = 'USA' AND Region = 'West';`                                                                           |
| AS              | Alias for column or table names in queries.                                 | `SELECT City AS Location FROM Customers;`                                                                                                   |
| AVG             | Calculate the average of numeric values.                                    | `SELECT AVG(Salary) FROM Employees;`                                                                                                        |
| BETWEEN         | Select values within a specified range.                                     | `SELECT * FROM Orders WHERE OrderDate BETWEEN '2023-01-01' AND '2023-12-31';`                                                               |
| COUNT           | Calculate the number of rows in a result set.                               | `SELECT COUNT(*) FROM Orders;`                                                                                                              |
| CONSTRAINTS     | Define rules and relationships for data integrity.                          | `CREATE TABLE Orders (OrderID INT PRIMARY KEY, CustomerID INT, OrderDate DATE, FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));` |
| CREATE DATABASE | Create a new database.                                                      | `CREATE DATABASE MyDatabase;`                                                                                                               |
| CREATE TABLE    | Define a new database table.                                                | ```sql CREATE TABLE Employees (EmployeeID INT, LastName VARCHAR(255), FirstName VARCHAR(255));```                                           |
| DELETE          | Remove rows from a table.                                                   | `DELETE FROM Customers WHERE CustomerID = 5;`                                                                                               |
| DISTINCT        | Return unique values from a column.                                         | `SELECT DISTINCT Category FROM Products;`                                                                                                   |
| DROP TABLE      | Delete a table and all its data.                                            | `DROP TABLE Orders;`                                                                                                                        |
| FROM            | Specify the table or tables to query.                                       | `SELECT * FROM Orders;`                                                                                                                     |
| FULL OUTER JOIN | Return all rows when there is a match in either table.                      | `SELECT * FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`                                               |
| GROUP BY        | Group rows based on common column values.                                   | `SELECT Region, COUNT(*) FROM Orders GROUP BY Region;`                                                                                      |
| HAVING          | Filter groups based on a condition.                                         | `SELECT Region, COUNT(*) FROM Orders GROUP BY Region HAVING COUNT(*) > 10;`                                                                 |
| IN              | Filter rows based on a list of values.                                      | `SELECT * FROM Products WHERE Category IN ('Electronics', 'Appliances');`                                                                   |
| INDEX           | Improve query performance by creating an index.                             | `CREATE INDEX idx_LastName ON Employees(LastName);`                                                                                         |
| INNER JOIN      | Return only matching rows from both tables.                                 | `SELECT * FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`                                                    |
| INSERT INTO     | Add new records to a table.                                                 | `INSERT INTO Employees (FirstName, LastName) VALUES ('John', 'Doe');`                                                                       |
| IS NULL         | Filter rows with NULL values.                                               | `SELECT * FROM Employees WHERE SupervisorID IS NULL;`                                                                                       |
| JOIN            | Combine rows from multiple tables.                                          | `SELECT * FROM Customers JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`                                                          |
| LEFT JOIN       | Return all rows from the left table and matching rows from the right table. | `SELECT * FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`                                                     |
| LIKE            | Filter rows based on a pattern.                                             | `SELECT * FROM Customers WHERE ContactName LIKE 'John%';`                                                                                   |
| MAX             | Find the maximum value in a column.                                         | `SELECT MAX(Price) FROM Products;`                                                                                                          |
| MIN             | Find the minimum value in a column.                                         | `SELECT MIN(Price) FROM Products;`                                                                                                          |
| NOT             | Negate a condition.                                                         | `SELECT * FROM Products WHERE NOT Discontinued;`                                                                                            |
| NOT NULL        | Filter rows without NULL values.                                            | `SELECT * FROM Customers WHERE Email IS NOT NULL;`                                                                                          |
| ORDER BY        | Sort the result set by one or more columns.                                 | `SELECT * FROM Employees ORDER BY LastName;`                                                                                                |
| OR              | Combine multiple conditions using logical OR.                               | `SELECT * FROM Orders WHERE Country = 'USA' OR Country = 'Canada';`                                                                         |
| SELECT          | Retrieve data from a database.                                              | `SELECT * FROM Customers;`                                                                                                                  |
| UNION           | Combine the result sets of two or more SELECT statements.                   | `SELECT City FROM Customers WHERE Country = 'USA' UNION SELECT City FROM Customers WHERE Country = 'Canada';`                               |
| UPDATE          | Modify existing records in a table.                                         | `UPDATE Products SET Price = 20 WHERE ProductID = 1;`                                                                                       |
| USE             | Select a specific database to work with.                                    | `USE MyDatabase;`                                                                                                                           |
| VIEW            | Create a virtual table based on a query.                                    | `CREATE VIEW HighValueCustomers AS SELECT * FROM Customers WHERE TotalPurchases > 1000;`                                                    |
| WHERE           | Filter rows based on a specified condition.                                 | `SELECT * FROM Products WHERE Price > 50;`                                                                                                  |


#### Diferentes Tipos de Joins

- `INNER JOIN`: 
  - Retorna registros que tenham valores compatíveis em ambas as tabelas

![Alt text](imgs/img_inner_join.png)

```sql
SELECT ProductID, ProductName, CategoryName
FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;
```

- `LEFT (OUTER) JOIN`: 
  - Retorna todos os registros da tabela a esquerda, e os registros compatíveis da tabela a direita

![Alt text](imgs/img_left_join.png)

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

- `RIGHT (OUTER) JOIN`: 
  - Retorna todos os registros da tabela a direita, e os registros compatíveis da tabela a esquerda

![Alt text](imgs/img_right_join.png)

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```

- `FULL (OUTER) JOIN`: 
  - Retorna todos os registros quando há um compatível, seja em qualquer uma das tabelas

![Alt text](imgs/img_full_outer_join.png)

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```

- `SELF JOIN`:
  - É um join regular, mas a tabela se junta a si mesma

```sql
SELECT column_name(s)
FROM table1 T1, table1 T2 -- T1 and T2 are aliases for the same table
WHERE condition;
```

```sql
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;
```

### Organização SQL

![Alt text](imgs/sql-commands.jpg)

A linguagem é organizada em subconjuntos, cada um com propósitos próprios bem definidos:

- **DQL Linguagem de Consulta de Dados**
  - Define o comando utilizado para consultar os dados armazenados no banco
    - `SELECT`

```sql
SELECT name, price FROM product -- selects name and price columns from the product table
```

> algumas colocam o `SELECT` como integrante do grupo DML, já que a sua função nesse grupo seria de recuperação de dados

- **DDL Linguagem de Definição de Dados**
  - Define os comandos utilizados para a criação de tabelas, views, índices, assim como as atualizações dessas estruturas e suas remoções
    - `CREATE`
    - `ALTER`
    - `DROP`

```sql
CREATE TABLE product -- creates a table named product
```

- **DML Linguagem de Manipulação de Dados**
  - Define os comandos utilizados para a manipulação de dados no banco
    - `INSERT`
    - `UPDATE`
    - `DELETE`

```sql
INSERT INTO product (name, price) VALUES ('computer','3500')
-- insert values in the product table
```

- **DCL Linguagem de Controle de Dados**
  - Define os comandos utilizados para controlar o acesso aos dados do banco, adicionando e removendo permissões de acesso
    - `GRANT`
    - `REVOKE`

```sql
GRANT CREATE TABLE to user -- grants the permission of creating a table on the database to a user
```

- **DTL Linguagem de Transação de Dados**
  - Define os comandos utilizados para gerenciar as transações executadas no banco de dados, como iniciar uma transação, confirmar e desfazer
    - `BEGIN`
    - `COMMIT`
    - `ROLLBACK`

```sql
BEGIN TRAN -- starts a transaction
```

### Operadores

Os operadores principais são: relacionais (de comparação), lógicos (condicionais) e aritméticos.

#### Relacionais

São sinais com função comparativa entre valores, estruturas e controles.

| Operator | Description              | Example                      |
| -------- | ------------------------ | ---------------------------- |
| =        | Equal to                 | `WHERE Age = 30`             |
| <> or != | Not equal to             | `WHERE Status <> 'Inactive'` |
| <        | Less than                | `WHERE Price < 100`          |
| !<       | Not less than            | `WHERE Price !< 100`         |
| <=       | Less than or equal to    | `WHERE Quantity <= 10`       |
| >        | Greater than             | `WHERE Salary > 50000`       |
| !>       | Not greater than         | `WHERE Salary !> 50000`      |
| >=       | Greater than or equal to | `WHERE Rating >= 4.5`        |

Não é possível usar operadores relacionais para verificar registros com valores nulos, para estes casos é necessário usar os operadores lógicos específicos.

#### Lógicos

Operadores com função de validar condições ou testar sua legitimidade. Retorna valores que podem ser `TRUE`, `FALSE` ou `UNKNOWN`.

| Operator    | Description                    | Example                                           |
| ----------- | ------------------------------ | ------------------------------------------------- |
| BETWEEN     | Between a range of values      | `WHERE Age BETWEEN 20 AND 40`                     |
| LIKE        | Search for a specified pattern | `WHERE Name LIKE 'John%'`                         |
| IN          | Match any value in a list      | `WHERE Category IN ('Electronics', 'Appliances')` |
| IS NULL     | Check for NULL values          | `WHERE Notes IS NULL`                             |
| IS NOT NULL | Check for non-NULL values      | `WHERE Email IS NOT NULL`                         |
| AND         | Logical AND                    | `WHERE Age >= 18 AND Gender = 'Male'`             |
| OR          | Logical OR                     | `WHERE Country = 'USA' OR Country = 'Canada'`     |
| NOT         | Negates a condition            | `WHERE NOT Status = 'Inactive'`                   |

#### Wildcards

Caracteres wildcards são usados para substituir um ou mais caracteres em uma string. Eles são usados junto ao operador lógico `LIKE`.

| Wildcard    | Description                                                                        | Example                                                     |
| ----------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| %           | Matches any sequence of characters (including zero characters).                    | `SELECT * FROM Customers WHERE ContactName LIKE 'S%';`      |
| _           | Matches any single character (underscore is a placeholder for a single character). | `SELECT * FROM Products WHERE ProductName LIKE '_pple';`    |
| [charlist]  | Matches any single character in the specified list.*                               | `SELECT * FROM Employees WHERE FirstName LIKE '[JM]ohn';`   |
| [^charlist] | Matches any single character not in the specified list.*                           | `SELECT * FROM Products WHERE ProductCode LIKE '[^A-C]%';`  |
| -           | Represents any single character within the specified range.*                       | `SELECT * FROM Customers WHERE CustomerName LIKE '[a-f]%';` |

* Not supported in PostgreSQL and MySQL databases.

#### Aritméticos

Para operações matemáticas ou dados numéricos.

Regras de procedência: multiplicação(*) e divisão(/) tem prioridade sobre adição(+) e subtração(-). Operadores de mesma prioridade são executados da esquerda para a direita.

Parênteses podem ser usados para forçar a prioridade dos cálculos e tornar o entendimento das fórmulas mais claro.

| Operator | Description         | Example                                                   |
| -------- | ------------------- | --------------------------------------------------------- |
| +        | Addition            | `SELECT Price + Tax AS Total FROM Products;`              |
| -        | Subtraction         | `SELECT Salary - Deductions AS NetSalary FROM Employees;` |
| *        | Multiplication      | `SELECT Quantity * Price AS TotalPrice FROM Orders;`      |
| /        | Division            | `SELECT Revenue / UnitsSold AS PricePerUnit FROM Sales;`  |
| %        | Modulus (Remainder) | `SELECT 17 % 5 AS Remainder;`                             |

#### De Atribuição Composta

Operadores que fazem uma operação na variável e, então, atribuem o resultado em cima do valor antigo. (T-SQL)

| Operator | Description            | Example                                                            |
| -------- | ---------------------- | ------------------------------------------------------------------ |
| +=       | Add and assign         | `UPDATE Inventory SET Quantity += 10 WHERE ProductID = 5;`         |
| -=       | Subtract and assign    | `UPDATE Account SET Balance -= 500 WHERE AccountNumber = '12345';` |
| *=       | Multiply and assign    | `UPDATE Orders SET Total *= 1.1 WHERE OrderDate >= '2023-01-01';`  |
| /=       | Divide and assign      | `UPDATE Sales SET Revenue /= 2 WHERE Month = 'January';`           |
| %=       | Modulus and assign     | `UPDATE Employees SET VacationDays %= 3 WHERE EmployeeID = 101;`   |
| &=       | Bitwise AND and assign | `UPDATE Permissions SET Flags &= 8 WHERE RoleID = 3;`              |
| \|=      | Bitwise OR and assign  | `UPDATE UserPermissions SET Permissions \|= 16 WHERE UserID = 10;` |
| ^=       | Bitwise XOR and assign | `UPDATE Settings SET Options ^= 64 WHERE Category = 'Security';`   |
| <<=      | Left shift and assign  | `UPDATE Counters SET Value <<= 1 WHERE CounterName = 'PageViews';` |
| >>=      | Right shift and assign | `UPDATE Inventory SET Quantity >>= 2 WHERE ProductID = 7;`         |

### Apelidos Para Campos Selecionados

Tem como objetivo facilitar o entendimento das informações exibidas nos resultados das pesquisas.

Existem 4 formas de atribuir apelidos aos campos selecionados:

```sql
SELECT field_name AS alias FROM table_name;
```

O uso de `AS` é opcional, e tem como objetivo melhorar o entendimento das seleções efetuadas.

```sql
SELECT field_name alias FROM table_name;
```

A utilização de aspas duplas(" ") é necessária quando o alias a ser atribuído contem espaços em branco. 

```sql
SELECT field_name AS "alias" FROM table_name;
```

```sql
SELECT field_name "alias" FROM table_name;
```

### Concatenação e Distinção

O comando de concatenar consiste em unificar as informações de 2 campos distintos da tabela, exibindo-os como apenas em só campo. Também podem ser utilizadas strings que não sejam informações existentes nas tabelas.

```sql
SELECT full_name || first_name, surname FROM Customer;
```

```sql
SELECT "issued in:" || "dtissue:" || " due date in:" || dt_due FROM services
```

Já o comando `distinct` consistem em exibir as informações da tabela utilizada de maneira distinta, ou seja, cada informação do campo será exibida apenas uma vez, não importando quantas outras vezes essa informação esteja presente em outros registros da tabela.

```sql
SELECT DISTINCT client_code FROM Accounts
```

### Ordenando Os Resultados

Os resultados da listagem de registros podem ser ordenados de acordo com um campo selecionado, seja por ordem crescente, `order by`, ou decrescente, `order by desc`.

```sql
SELECT * FROM students
ORDER BY enrollment;
```

```sql
SELECT * FROM students
ORDER BY students DESC;
```

É possível também ordenar as informações por mais de um campo, tanto em ordem crescente quanto decrescente.

```sql
SELECT * FROM students
ORDER BY enrollment, class, age;
```

```sql
SELECT * FROM students
ORDER BY enrollment, class, age DESC;
```

### Expressão CASE

Quase como uma declaração `if-then-else`, a expressão `CASE` retorna um valor quando a primeira condição for satisfeita, ou seja, quando uma condição for verdadeira, a execução será parada e irá retornar o resultado especificado.

Se nenhuma condição for verdadeira, o valor dentro da cláusula `ELSE` vai ser retornado.

Se não há `ELSE` e nenhuma condição for satisfeita, o retorno será `NULL`.

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```

```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

```sql
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
```

### Stored Procedures

São códigos SQL preparados que podem ser salvos para serem reusados diversas vezes.

```sql
-- creation
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;

-- execution
EXEC procedure_name;
```

```sql
-- creation
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

-- execution
EXEC SelectAllCustomers;
```

É possível também passar parâmetros para um stored procedure, para que dessa maneira ele possa agir de acordo com os valores dos parâmetros repassados.

```sql
-- creation
CREATE PROCEDURE SelectAllCustomers @City VARCHAR(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

-- execution
EXEC SelectAllCustomers @City = 'London';
```

```sql
-- creation
CREATE PROCEDURE SelectAllCustomers @City VARCHAR(30), @PostalCode VARCHAR(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;

-- execution
EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';
```

### Algumas Boas Práticas

- Uppercase e Lowercase

Por não ser case-sensitive, é possível usar tantos suas keywords/reserved words e nomeação em ambos formatos. Não há um grande consenso em qual formato é o melhor para cada um, depende muito do programador e da empresa.

```sql
-- *** PREFER *** 
select * from table_name;
-- or
SELECT * FROM TABLE_NAME;
-- or
SELECT * FROM table_name;
```

O que é unanime entre todos: usar sempre a mesma regra em todo banco, ou seja, não misturar formatos ou ficar mudando a forma de se escrever de uma linha para outra.

```sql
-- *** AVOID ***
SELECT * from table_NAME;
-- or (same database)
SELECT * FROM table_name;
select * from another_table;
```

- Snake-case

É considerado boa prática evitar espaços em nomes de objetos, tabelas, funções, etc. A alternativa é usar underscore como a separação das palavras.

Isso melhora a leitura e não há o risco de que o nome seja alterado quando armazenado - o que pode acontecer como camelCase em alguns casos.

```sql
CREATE TABLE nome_da_tabela;
-- *** OVER ***
CREATE TABLE nome da tabela;
-- or
CREATE TABLE nomeDaTabela;
```

Além de espaços, também é aconselhável evitar o uso de aspas e colchetes em nomes. Muito para prevenir erros, melhorar leitura e facilitar a manutenção do código.

```sql
-- *** AVOID ***
CREATE TABLE "name";
-- or
CREATE TABLE [name];
```

- Nomeação

Evitar o uso de palavras reservadas e repetições de nomes entre tabela e campo. O código pode não parecer errado, mas há um chance considerável de causar erros em execução ou após armazenamento e confusão de qual objeto está sendo chamado.

```sql
-- *** AVOID ***
SELECT * FROM user;
-- or
CREATE TABLE customer (
  id INT,
  customer VARCHAR(100)
);
```

- Indentação e Linhas

Para melhor a leitura do código é recomendado escrever um comando por linha da declaração, escrever múltiplas condições em linhas separadas e indentar subcomandos e múltiplas condições.

```sql
-- *** PREFER ***
SELECT
id,
first_name,
last_name
FROM employee e
INNER JOIN department d ON e.dept_id = d.id
INNER JOIN location l
  ON d.loc_id = l.id
  AND d.loc_type = l.loc_type;
```

```sql
-- *** PREFER ***
SELECT
id,
first_name,
last_name
FROM employee
WHERE start_date > (
  SELECT AVG(start_date)
  FROM employee
  WHERE active_status = 2
);
```

##### Cheat Sheet

![Alt text](imgs/SQL-Basic-Cheat-Sheet-1.png)

![Alt text](imgs/SQL-Commands-Cheat-Sheet.png)

## Database

O banco da dados é um ambiente, um repositório, onde serão criadas todas as tabelas e entidades. A responsabilidade da criação e administração deste ambiente varia dependendo do tamanho da empresa ou se há uma demanda geral ou necessidade pontual.

Pode ser responsabilidade de um profissional DBA ou do próprio analista que está projetando o esquema.

### Create, Drop e Backup (DB)

As declarações `CREATE`, `DROP` e `BACKUP`, respectivamente, criam um novo banco de dados, deletam um banco de dados existente e fazem o backup de um banco de dados existente.

```sql
CREATE DATABASE database_name;
```

```sql
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
  [create_specification] ...

create_specification:
   [DEFAULT] CHARACTER SET [=] charset_name
 | [DEFAULT] COLLATE [=] collation_name
 | DEFAULT ENCRYPTION [=] {'Y'|  'N'}
```

```sql
DROP DATABASE database_name;
```

```sql
DROP {DATABASE | SCHEMA} [IF EXISTS] db_name
```

```sql
BACKUP DATABASE database_name
TO DISK = 'filepath';
```

A declaração `WITH DIFFERENTIAL` garante que, ao invés de um backup do banco de dados completo, seja feito um backup só das mudanças desde do último backup completo.

```sql
BACKUP DATABASE database_name
TO DISK = 'filepath'
WITH DIFFERENTIAL;
```

### Create, Drop e Alter (Table)

As declarações `CREATE`, `DROP` e `ALTER`, respectivamente, criam uma nova tabela, deletam uma tabela existente e alteram as colunas — criando, deletando e modificando — de uma tabela existente.

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
  (create_definition, ...)
  [table_options]
  [partition_options]

CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
  [(create_definition, ...)]
  [table_options]
  [partition_options]
  [IGNORE | REPLACE]
  [AS] query_expressions

CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
  { LIKE old_tbl_name | (LIKE old_tbl_name) }
```

Também é possível criar uma cópia de uma tabela existente com `CREATE TABLE`.

A nova tabela terá as mesmas definições de colunas. Todas as colunas ou colunas especificas podem ser selecionadas.

Criando uma tabela desta forma, ela vai ser preenchida com os valores existentes da tabela de que é cópia.

```sql
CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;
```

```sql
DROP TABLE table_name;
```

A declaração `TRUNCATE` pode ser usada para deletar todos os dados dentro de uma tabela, mas sem deletar a tabela em si.

```sql
TRUNCATE TABLE table_name;
```

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

```sql
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;
```

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```

`ALTER` também é usado para adicionar ou deletar restrições (constraints) de uma tabela existente.

### Constrains

São usadas para especificar regras para os dados de uma tabela. Podem ser especificados quando a tabela é criada, ou alterando uma tabela existente.

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```

| Constraint     | Descrição                                                                             |
| -------------- | ------------------------------------------------------------------------------------- |
| `NOT NULL`     | Define que a coluna não pode ter valores nulos                                        |
| `UNIQUE`       | Garante que todos os valores dessa coluna sejam diferentes/únicos                     |
| `PRIMARY KEY`  | Combinação de `NOT NULL` e `UNIQUE`. Identifica de forma única da linha em uma tabela |
| `FOREIGN KEY`  | Previne ações que destruiriam links entre tabelas                                     |
| `CHECK`        | Garante que todos os valores da coluna satisfaçam uma condição específica             |
| `DEFAULT`      | Define um valor padrão para a coluna se um valor não for especificado                 |
| `CREATE INDEX` | Usado para criar e devolver dados do banco de dados de forma rápida                   |

```sql
-- CREATE --
CREATE TABLE Orders (
  OrderID int NOT NULL,
  OrderNumber int NOT NULL,
  PersonID int,
  PRIMARY KEY (OrderID),
  FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

```sql
-- CREATE --
CREATE TABLE Orders (
  OrderID int NOT NULL,
  OrderNumber int NOT NULL,
  PersonID int,
  PRIMARY KEY (OrderID),
  CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
  REFERENCES Persons(PersonID)
);
-- ALTER --
ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
```

```sql
-- CREATE --
CREATE TABLE Persons (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Age int,
  CHECK (Age>=18)
);

-- ALTER --
ALTER TABLE Persons
ADD CHECK (Age>=18);
```

```sql
-- CREATE --
CREATE TABLE Persons (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Age int,
  City varchar(255),
  CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);

-- ALTER --
ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');

-- DROP --
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;
```

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);

CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);
```

```sql
ALTER TABLE table_name
DROP INDEX index_name;
```

#### Auto Increment

Essa keyword define que o campo executará um auto-incremento, ou seja, toda nova linha inserida receberá um valor automaticamente. Por padrão este valor é 1, e também incrementa 1 para cada novo valor inserido.

```sql
CREATE TABLE Persons (
  Personid INT NOT NULL AUTO_INCREMENT,
  LastName VARCHAR(255) NOT NULL,
  FirstName VARCHAR(255),
  Age INT,
  PRIMARY KEY (Personid)
);
```

Para alterar a sequência, começando com outro valor:

```sql
ALTER TABLE Persons AUTO_INCREMENT=100;
```

Esse comando só funciona com o tipo int e só pode haver um campo com auto incremento por tabela, além disso ele deve sempre fazer parte da chave primária da tabela.

### Inserindo Dados na Tabela

Não é necessário especificar o campo no comando `INSERT` a não ser que se queira forçar um novo valor a este campo.

```sql
INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
  [INTO] tbl_name
  [PARTITION (partition_name [, partition_name] ...)]
  [(col_name [, col_name ...])]
  {VALUES | VALUE} (value_list) [, (value_list)] ...
  [ON DUPLICATE KEY UPDATE assignments_list]

INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
  [INTO] tbl_name
  [PARTITION (partition_name [, partition_name] ...)]
  SET assignment_list
  [ON DUPLICATE KEY UPDATE assignments_list]

INSERT [LOW_PRIORITY | HIGH_PRIORITY] [IGNORE]
  [INTO] tbl_name
  [PARTITION (partition_name [, partition_name] ...)]
  [(col_name [, col_name ...])]
  SELECT ...
  [ON DUPLICATE KEY UPDATE assignments_list]
```

Pode-se inserir dados na tabela um a um, em grupos ou até "importando" de outra tabela. Para inserir de outra tabela é necessário que tenha uma compatibilidade entre suas colunas, caso os nomes difiram, é necessário o uso de alias.

```sql
INSERT INTO (
  code,
  name,
  price
) SELECT
  code_product AS code,
  name,
  price_list as price
FROM stock.products;
```

### Alterando e Excluindo Dados

Para caso seja necessário alterar um ou mais dados existentes dentro de uma tabela temos o comando `UPDATE`. Este comando modifica um dado já existente, é preciso informar noma da tabela, campos que serão modificados, novos valores e condição de filtro.

```sql
UPDATE [LOW_PRIORITY] [IGNORE] table_reference
  SET assignment_list
  [WHERE where_condition]
  [ORDER BY ...]
  [LIMIT row_count]

value: 
  {expr | DEFAULT}

assignment:
  col_name = value

assignment_list:
  assignment [, assignment] ...
```

```sql
UPDATE 
    tbl_name
SET 
    col_name = value
WHERE 
    condition = cond_value;
```

É possível também atualizar dados trazendo de outra tabela com o uso da lógica de `FROM` e `JOINS`.

```sql
UPDATE
    tbl_name A
INNER JOIN
    tbl_name.col_name B
        ON A.col_name = SUBSTRING(B.col_name,pos,char_quant)
SET
    A.col_name = B.col_name;
```

```sql
UPDATE
  tbl_name
SET
  col_name = value
WHERE
  col_name IN (SELECT col_name FROM tbl_name) [subselect]
```

A remoção de dados segue uma sintaxe semelhante ao de update, mas agora com o comando `DELETE`.

```sql
DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM tbl_name [[AS] tbl_alias]
  [PARTITION (partition_name [, partition_name] ...)]
  [WHERE where_condition]
  [ORDER BY ...]
  [LIMIT row_count]
```

```sql
DELETE FROM 
  tbl_name 
WHERE
    condition = value
```

```sql
DELETE FROM
  tbl_name
WHERE
  col_name IN (SELECT col_name FROM tbl_name) [subselect]
```

```sql
DELETE FROM
    tbl_name A
INNER JOIN
    tbl_name B
        ON A.col_name = B.col_name
WHERE
    B.col_name = value;
```

### Commit e Rollback

**COMMIT ↓**

Confirma todas as operações, todos os inserts, updates e deletes serão confirmados e gravados na base.

**ROLLBACK ↓**

Despreza as operações e os dados voltarão ao status inicial.

**TRANSACTION ↓**

No MySQL é necessário usar a unidade lógica `TRANSACTION` para fazer o uso dos comandos `COMMIT` e `ROLLBACK`, essa unidade visa preservar a integridade e consistência dos dados.

```sql
START TRANSACTION
-- commands here [INSERT | UPDATE | DELETE]

[COMMIT | ROLLBACK]
```

### Tipos de Dados

Os tipos de dados variam de acordo com o banco de dados utilizado, mas a grande maioria se divide em grupos de tipos numéricos, de texto/string, data e hora, entre outros.

Como exemplo, estes são os principais tipos de dados usados no MySQL:

- **Numérico**

  - `FLOAT(p)`
    - Precisão simples (4 bytes)
    - Valor _p_ determina se data type resultante deve ser `float` ou `double`. Se _p_ for de 0 a 24, será `float`, e se for de 25 a 53, será `double`
  
  - `DOUBLE(size, d)`
    - Precisão dupla (8 bytes)
    - `size` especifica número total de dígitos e `d` especifica número de dígitos após o ponto decimal

  - `DECIMAL(size, d)` ou `DEC(size, d)`
    - `size` especifica número total de dígitos e `d` especifica número de dígitos após o ponto decimal
    - Até 65 dígitos em `size`, padrão sendo 10
    - Até 30 dígitos em `d`, padrão sendo 0

  - `TINYINT(size)`
    - Signed: de -128 a 127
    - Unsigned: de 0 a 255
    - `size` especifica o largura máximo do display (que é 255)

  - `SMALLINT(size)`
    - Signed: de -32768 a 32767
    - Unsigned: de 0 a 65535
    - `size` especifica o largura máximo do display (que é 255)
  
  - `INT(size)` ou `INTEGER(size)`
    - Signed: de -2147483648 a 2147483647
    - Unsigned: de 0 a 4294967295
    - `size` especifica o largura máximo do display (que é 255)

  - `BIT(size)`
    - O número de bits por valor é especificado em `size`
    - Até 64 dígitos em `size`, padrão sendo 1

Atributos que podem ser usados nos campos de tipo numérico ↓

`SIGNED` ou `UNSIGNED` - Permite ou não o uso de sinal. O uso da propriedade unsigned faz com que o conjunto de valores válidos aumente.

`ZEROFILL` - Preenche com zeros os espaços. Exemplo: `INT(4)`, sendo armazenado `5`, ficará gravado como `0005`.

Erros de `OUT OF RANGE` ocorrem quando os valores estouram os limites de cada tipo.

- **STRING**

  - `CHAR(size)`
    - Cadeia de caracteres com valor fixo
    - `size` define o comprimento da coluna de 0 a 255 em caracteres, padrão sendo 1
    - `CHAR(4)`: "aa" - "  aa"

  - `VARCHAR(size)`
    - Cadeia de caracteres com valor variável
    - `size` define o comprimento máximo da coluna de 0 a 65535 em caracteres
    - `VARCHAR(4)`: "aa" - "aa"

  - `BINARY(size)`
    - Cadeia de caracteres com valor fixo, expressos em binário
    - `size` define o comprimento máximo da coluna de 0 a 255 em bytes, padrão sendo 1

  - `VARBINARY(size)`
    - Cadeia de caracteres com valor variável, expressos em binário
    - `size` define o comprimento máximo da coluna de 0 a 65535 em bytes

  - `BLOB(size)`
    - Binário longo
    - Possui 4 variações que se diferenciam por tamanho possível de armazenamento de bytes
    - São eles: `TINYBLOB`, `BLOB`, `MEDIUMBLOB` e `LONGBLOB`

  - `TEXT(size)`
    - Texto longo
    - Possui 4 variações que se diferenciam por tamanho possível de armazenamento de caracteres
    - São eles: `TINYTEXT`, `TEXT`, `MEDIUMTEXT` e `LONGTEXT`

  - `ENUM(val1, val2, val3...)`
    - Permite armazenar uma lista de valores pré-definidos
    - Pode armazenar até 65535 valores em uma lista
    - A ordem da lista é definida de acordo com sua inserção
    - Se um valor for inserido, mas não está definido na lista, um valor em branco será inserido na tabela
    - São eles: `TINYBLOB`, `BLOB`, `MEDIUMBLOB` e `LONGBLOB`

Atributos que podem ser usados nos campos de tipo string ↓

`SET` e `COLLATE` - Qual o tipo de conjunto de caracteres que serão suportados.

- **Date e Hora**

  - `DATE`
    - yyyy-mm-dd
    - de 1000-01-01 a 9999-12-31
  - `DATETIME(fsp)`
    - yyyy-mm-dd hh:mm:ss
    - de 1000-01-01 00:00:00 a 9999-12-31 23:59:59
    - Propriedades `DEFAULT` e `ON UPDATE` definem inicialização e updates automáticos de acordo com a data e horário atual, respectivamente
  - `TIME(fsp)`
    - hh:mm:ss
    - de -838:59:59 a 839:59:59
  - `TIMESTAMP(fsp)`
    - hh:mm:ss
    - de 1970:01:01 00:00:01 UTC a 2029-01-19 UTC
  - `YEAR`
    - de 1901 a 2155, e 0000

### Views

É uma tabela baseada no conjunto de resultados de uma declaração SQL. Os campos da view são campos de uma ou mais tabelas existentes dentro do banco de dados.

Em uma view é possível adicionar declarações e funções para apresentar dados como se viessem todos de uma tabela única.

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

A view sempre apresenta dados atualizados. O banco de dados recria a view toda vez que o usuário a consulta.

```sql
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';
```

```sql
SELECT * FROM [Brazil Customers];
```

> É padrão usar as letras "VW" no início dos nomes das views, essa prática facilita a identificação das visões na hora de programar.

### Injections

SQL injection é  uma técnica de code injection que pode destruir um banco de dados, sendo uma das técnicas de web hacking mais comuns. Consiste em inserir códigos maliciosos em uma declaração SQL via web page input.

Geralmente ocorre quando se pede ao usuário um input, como nome, mas o usuário insere uma declaração SQL que vai rodar sem seu conhecimento dentro da base de dados.

```
txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```

O código acima é frágil e está a merce de ataques. Seu objetivo original é selecionar um usuário de acordo com o seu id, mas se não há nada que previna que o usuário insira um input "errado", um code injection pode ser facilmente usado.

**1=1 sempre é True ↓**

Se o usuário inserir algo como "105 OR 1=1" irá gerar está declaração:

```sql
SELECT * FROM Users WHERE UserId = 105 OR 1=1;
```

Essa declaração é válida e listará todos os usuários, isso porquê `OR 1=1` sempre retorna `TRUE`.

**""="" sempre é True ↓**

```
uName = getRequestString("username");
uPass = getRequestString("userpassword");

sql = 'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"'
```

O código acima é um exemplo de um login básico. Se não há nada que impeça o input malicioso, é possível conseguir o acesso de todos os nomes de usuários e senhas simplesmente inserindo `" OR ""=""` nos campos de login e senha:

```
User Name: " or ""=""

Password: " or ""=""
```

Isso irá gerar está declaração:

```sql
SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""
```

Essa declaração é válida e listará todos os usuários, isso porquê `OR ""=""` sempre retorna `TRUE`.

**Batched SQL Statements ↓**

Muitos bancos de dados aceitam lotes de declarações SQL, estes são grupos de 2 ou mais declarações SQL, separadas por ponto e vírgula.

```sql
txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```

Neste caso é só o usuário adicionar ";" seguido de uma declaração maliciosa para causar danos ao banco de dados. Algo como:

```
User id: 105; DROP TABLE Suppliers
```

Isso irá gerar está declaração, que vai deletar a tabela `Suppliers` (caso ela exista com este nome):

```sql
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;
```

Para evitar que estas técnicas possam ser usadas para prejudicar o banco de dados, é preciso usar parâmetros para proteger o input dos ataques.

Os parâmetros são valores que podem ser adicionados as consultas SQL no tempo de execução, de forma controlada.

Eles são representados pelo marcador `@`. É feita a verificação de cada parâmetro para garantir que seja usado de forma correta para sua coluna e seja tratado literalmente, não como parte do SQL que deve ser executado.

### Funções Mais Comuns do MySQL

**String**

| Function         | Description                                  |
| ---------------- | -------------------------------------------- |
| `CONCAT()`       | Concatenate two or more strings              |
| `LENGTH()`       | Return the length of a string                |
| `LOWER()`        | Convert a string to lowercase                |
| `UPPER()`        | Convert a string to uppercase                |
| `SUBSTRING()`    | Return a substring                           |
| `REPLACE()`      | Replace occurrences of a specified string    |
| `TRIM()`         | Remove leading and trailing spaces           |
| `LEFT()`         | Return the leftmost characters of a string   |
| `RIGHT()`        | Return the rightmost characters of a string  |
| `REVERSE()`      | Reverse the characters in a string           |
| `LOCATE()`       | Find the position of a substring in a string |
| `CONCAT_WS()`    | Concatenate with separator                   |
| `INSERT()`       | Insert a substring at a specified position   |
| `ASCII()`        | Return the ASCII value of a character        |
| `CHAR()`         | Return the character for each ASCII value    |
| `CHAR_LENGTH()`  | Return the number of characters in a string  |
| `BIT_LENGTH()`   | Return the length of a string in bits        |
| `OCTET_LENGTH()` | Return the length of a string in bytes       |
| `HEX()`          | Return a hexadecimal value of a string       |

**String (avançado)**

| Function            | Description                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `REGEXP`            | Performs a pattern match using regular expressions                                                                                           |
| `REGEXP_REPLACE()`  | Performs a search-and-replace using regular expressions                                                                                      |
| `SUBSTRING_INDEX()` | Returns a substring from a string before a specified number of occurrences of a delimiter                                                    |
| `FIND_IN_SET()`     | Returns the position of a string within a list of strings                                                                                    |
| `CONV()`            | Converts numbers between different number bases                                                                                              |
| `EXPORT_SET()`      | Returns a string such that for every bit set in the value bits argument, you get an on string and for every unset bit, you get an off string |


**Numéricas**

| Function             | Description                                      |
| -------------------- | ------------------------------------------------ |
| `ABS()`              | Return the absolute value                        |
| `CEIL()`/`CEILING()` | Round up to the nearest integer                  |
| `FLOOR()`            | Round down to the nearest integer                |
| `ROUND()`            | Round to a specified number of decimal places    |
| `SIGN()`             | Return the sign of a number                      |
| `MOD()`              | Return the remainder of a division               |
| `POWER()`            | Raise a number to a specified power              |
| `SQRT()`             | Return the square root                           |
| `RAND()`             | Return a random number                           |
| `TRUNCATE()`         | Truncate to a specified number of decimal places |

**Data e Horário**

| Function          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `NOW()`           | Return the current date and time                  |
| `CURDATE()`       | Return the current date                           |
| `CURTIME()`       | Return the current time                           |
| `DATE()`          | Extract the date part                             |
| `TIME()`          | Extract the time part                             |
| `YEAR()`          | Extract the year                                  |
| `MONTH()`         | Extract the month                                 |
| `DAY()`           | Extract the day                                   |
| `HOUR()`          | Extract the hour                                  |
| `MINUTE()`        | Extract the minute                                |
| `SECOND()`        | Extract the second                                |
| `TIMESTAMP()`     | Return a Unix timestamp                           |
| `DATEDIFF()`      | Return the difference between two dates           |
| `DATE_ADD()`      | Add a specified time value to a date              |
| `DATE_SUB()`      | Subtract a specified time value from a date       |
| `TIMESTAMPDIFF()` | Return the time difference between two timestamps |

**Agregação**

| Function         | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `GROUP_CONCAT()` | Concatenates values within a group into a single string |
| `BIT_AND()`      | Performs a bitwise AND operation on a set of values     |
| `BIT_OR()`       | Performs a bitwise OR operation on a set of values      |
| `BIT_XOR()`      | Performs a bitwise XOR operation on a set of values     |
| `STDDEV()`       | Returns the population standard deviation               |
| `STDDEV_POP()`   | Returns the population standard deviation               |
| `STDDEV_SAMP()`  | Returns the sample standard deviation                   |
| `VAR_POP()`      | Returns the population variance                         |
| `VAR_SAMP()`     | Returns the sample variance                             |
| `VARIANCE()`     | Returns the population variance                         |

**Controle de Flow**

| Function     | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `CASE`       | Enables if-then-else type logic within SQL queries          |
| `IF()`       | Returns a value based on a condition                        |
| `IFNULL()`   | Returns a specified value if the expression is NULL         |
| `NULLIF()`   | Returns NULL if the two arguments are equal                 |
| `COALESCE()` | Returns the first non-null value from a list of expressions |

### Definindo Padrões para Campos

Em alguns casos é interessante definir dados padrões para campos na tabela, como exemplo um padrão de timestamp ligado ao horário e data do computador ou um valor nulo para algum campo.

Definir um valor padrão é muito simples, basta usar o comando `DEFAULT` seguido do valor ou função que será definido como padrão.

```sql
CREATE TABLE tbl_name (
    col_name BIT(1) NULL,
    col_name VARCHAR(50) DEFAULT 'value',
    col_name TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
);
```

Caso valores não sejam definidos em um insert, o valor padrão será inserido no lugar. Se for definido, será inserido no lugar do padrão desde que seja o mesmo tipo de dado.

### Triggers

Um gatilho é um procedimento armazenado que executa automaticamente quando um evento ocorre no servidor do banco de dados. Por exemplo: ao incluir dados em uma tabela, atualiza um log com data e hora.

Ou seja, a regra de execução do trigger pode ser um ou mais comando SQL.

```sql
CREATE
  [DEFINER = user]
  TRIGGER trigger_name
  trigger_time trigger_event
  ON tbl_name FOR EACH ROW
  [trigger_order]
  trigger_body

trigger_time: { BEFORE | AFTER}
trigger_event: { INSERT | UPDATE | DELETE}
trigger_order: { FOLLOWS | PRECEDES } other_trigger_name
```

```sql
DELIMITER //

CREATE TRIGGER
  trigger_name
{ BEFORE | AFTER } {INSERT | UPDATE | DELETE}
  ON tbl_name
FOR EACH ROW BEGIN
  {INSERT | UPDATE | DELETE} FROM
    tbl_name;

  -- more commands here ...

END // 
```

## Procedures no MySQL

Para compensar o fato do SQL não ser uma linguagem estruturada, foram criados os stored procedures, estes que são estruturados de forma interna seguem regras especificas em cada sistema, ou seja, a estrutura em um SGBD não é a mesma em outro.

A estrutura, sintaxe e regras de stored procedures no MySQL não são as mesmas que no SQL Server ou outros sistemas.

Nas procedures é possível usar comandos de repetição e decisão.

```sql
CREATE
  [DEFINER = user]
  PROCEDURE sp_name ([proc_parameter[,...]])
  [characteristic ...] routine_body

CREATE
  [DEFINER = user]
  FUNCTION sp_name ([func_parameter[,...]])
  [characteristic ...] routine_body

proc_parameter:
  [ IN | OUT | INOUT ] param_name type

func_parameter:
  param_name type

type:
  -- any valid MySQL data type

characteristic:
  COMMENT 'string'
  | LANGUAGE SQL
  | [NOT] DETERMINISTIC
  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA}
  | SQL SECURITY { DEFINER | INVOKER }

routine_body:
 -- valid SQL routine statement
```

```sql
CREATE PROCEDURE
  procedure_name(parameters)
BEGIN

  DECLARE declaration_statement;
  ...
  executable_statement;
  ...
END;
```

**Nomeação ↓**

- Apenas letras, números, $ e underscore (_)
- Tamanho máximo de 64 caracteres
- Deve ser nome único
- É case sensitive

### Alteração e Exclusão

Assim como outras operações no SQL, é possível tanto alterar, quanto remover stored procedures. 

O processo de alteração é semelhante a criação, na verdade, não há um comando especifico de alteração, a stored procedure existente é "dropada" e criada novamente, porém com as alterações desejadas.

```sql
DROP PROCEDURE IF EXISTS sp_name;

DELIMITER //

CREATE [DEFINER = user] PROCEDURE sp_name()
BEGIN
  -- commands
END //
```

O método de exclusão é ainda mais simples, e já foi demonstrado no exemplo anterior, basta usar o comando `DROP` para remover uma stored procedure.

```sql
USE db_name

DROP PROCEDURE IF EXISTS sp_name;
```

### Declarando Variáveis

```sql
DECLARE var_name datatype DEFAULT value
```

**Regras para declaração ↓**

- Datatype é obrigatório
- Default é opcional. Caso não for declarado, o valor padrão será `NULL`
- Nome deve conter apenas letras, números, $ e underscore (_)
- Deve ser único dentro da stored procedure
- É case sensitive
- Tamanho máximo do nome é de 255 caracteres
- A linha de declaração deve terminar em ponte e vírgula (**;**)
- Dentro de um `DECLARE` podem ser declaradas múltiplas variáveis, mas somente se forem de mesmo datatype
- Dentro de umm stored procedure podem ter múltiplas declarações de diferentes tipos

**Datatype possíveis ↓**

- `VARCHAR(n)`
- `INTEGER`
- `DECIMAL(p, s)`
- `DATE`
- `TIMESTAMP`

```sql
CREATE PROCEDURE
  sp_name ()
BEGIN

  DECLARE var_name datatype [DEFAULT] value

  -- more declares

END
```

```sql 
CREATE PROCEDURE
  sp_name ()
BEGIN

  -- same type and default for all vars  
  DECLARE var_name, [var_name, ...] datatype [DEFAULT] value

END
```

### Manipulando Dados com Parâmetros

É possível usar as procedures para manipulação de dados (criação, alteração e remoção). O método, tecnicamente, mais simples, mas não muito dinâmico ou efetivo é usar os mesmos comandos dentro da procedure alterando seus valores dentro dela toda vez que for usar para uma nova manipulação.

A maneira mais dinâmica e eficaz é a manipulação com comandos prontos dentro da procedure que recebem seus valores através de parâmetros.

```sql
CREATE PROCEDURE
  procedure_name(parameters)
BEGIN

  INSERT INTO tbl_name (col_name,...) 
  VALUES ( parameter_name,...);

END;
```

É possível também tratar de possíveis erros com o comando `EXIT HANDLER FOR`.

```sql
CREATE PROCEDURE
  procedure_name(parameters)
BEGIN

  DECLARE EXIT HANDLER FOR code_number
  BEGIN
    -- commands
  END;

  ...
  -- sql valid statements
  ...
END;
```

#### Atribuição de Valor com Select

```sql
DROP PROCEDURE IF EXISTS sp_name;

DELIMITER //
USE sucos_vendas //
CREATE PROCEDURE
	quantidade_notas (parameter datatype)
BEGIN

	DECLARE var_name datatype;
    
  SELECT * INTO 
    var_name
	FROM 
		notas_fiscais
  WHERE
		data_venda = parameter;
	
  SELECT var_name;
END //
```

### Controle de Fluxo

O SQL, por ser uma linguagem sequencial, não possui muito dos fluxos que são necessários dentro das linguagens de programação, por este motivo, cada banco resolveu da sua maneira como implementar fluxos de controle através das stored procedures.

**Fluxo IF Simples ↓**

```sql
IF condition THEN
  if_statements;
ELSE
  else_statements;
END IF
```

**Fluxo ELSEIF Simples ↓**

```sql
IF condition THEN
  if_statements;
ELSEIF condition
  elseif_statements;
ELSEIF condition
  elseif_statements;
(...)
ELSE
  else_statements;
END IF
```

**CASE ↓**

```sql
CASE selector
WHEN selector_value_1 THEN then_statement_1;
WHEN selector_value_2 THEN then_statement_2;
WHEN ...
[ELSE else_statements]
END CASE;
```

Caso uma declaração else não seja passada, o controle fica aberto a possibilidade do erro 1339, "Case not found", que ocorre quando não há uma opção viável para rodar o fluxo.

Há duas formas de lidar com ele: tratando o erro ou adicionando a cláusula else no CASE.

O CASE é diferente do IF em base que o primero já tem previamente definida a opção, e vai diretamente para mesma quando é executado, enquanto o outro analisa cada condição até achar há que se encaixa. 

Isso representa uma pequena diferença em tempo de processamento entre as duas opções, ou seja, o CASE é mais eficiente que o IF.

**WHILE ↓**

```sql
WHILE condition
DO statements;
END WHILE;
```

### Cursor

É uma estrutura implementada no MySQL que permite uma interatividade linha alinha através de uma determinada ordem, funcionando de forma parecida como uma estrutura de array ou vetor.

Suas fases são: 

- Declaração
  - Onde é definido qual consulta estará sendo carregada ao cursor
- Abertura
  - Abre o mesmo para percorrê-lo linha por linha
- Execução de linha a linha até o seu final
- Fecha o cursor
- Limpa ele da memória

```sql
DECLARE @var_name datatype;
DECLARE cursor_name CURSOR FOR
SELECT col_name [, col_name...] FROM tab_name;

OPEN cursor_name;
FETCH cursor_name INTO @var_name;
FETCH cursor_name INTO @var_name;
FETCH cursor_name INTO @var_name;
...
CLOSE cursor_name;
```

**Cursor com While ↓**

```sql
DECLARE i INT DEFAULT 0;
DECLARE @var_name datatype;
DECLARE cursor_name CURSOR FOR
SELECT col_name [, col_name...] FROM tab_name;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET i = 1;

OPEN cursor_name;
WHILE i = 0 
DO
FETCH cursor_name INTO @var_name;
...
END WHILE;
CLOSE cursor_name;
```

### Funções

**Sub-rotina != Função ↓**

A sub-rotina executa uma série de comandos, geralmente repetitivos e que seriam executados de forma constante. Já a função pode também nascer da necessidade de executar os mesmos comandos diversas vezes, mas se difere pois retorna um valor.

A stored procedure é como se fosse uma sub-rotina.

As funções podem ser usadas em outras funções, em stored procedures ou até mesmo em queries. Normalmente o ambiente MySQL não permite a criação de funções por padrão, é necessário estipular o seguinte parâmetro para habilitar sua criação:

```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

A estrutura de uma função é muito semelhante a uma stored procedure, se diferenciam principalmente pelos comandos `RETURNS | RETURN` que declaram o tipo de dado que a função vai retornar e a declaração de retorno, respectivamente.

```sql
CREATE FUNCTION func_name (parameters)
RETURNS datatype;

BEGIN

DECLARE declaration_statement;
...
executable_statement;
...
RETURN statement;
...
END;
```

Não é possível exibir o resultado de uma função com o comando `CALL`, este é específico para chamar stored procedures, para exibir o resultado de funções é necessário uma query com `SELECT`.

```sql
SELECT func_name;
```

## DBA (Database Administrator)

É o profissional responsável por administrar o banco de dados, sendo algumas delas:

- Avaliar e instalar o ambiente MySQL
- Configurar o acesso a base de dados
- Manter o banco de dados com performance
- Manter os dados através de processos de backup
- Auxiliar a área de desenvolvimento na manutenção de dados
- Monitorar a instalação do MySQL
- Configuração do ambiente
- Administrar os usuários de acesso

### Criando e Configurando Conexões

Ao instalar o MySQL, há foi configurado um conexão cliente-servidor aos servidores locais. Mesmo operando em uma única máquina, é configurado e instalado o servidor e o cliente e a comunicação deles está sendo feita também via TCP/IP.

![Alt text](imgs/Connect.png)

O próprio Workbench permite a criação e configuração de conexões por meio de uma interface visual, o que pode ser mais amigável do que fazer o mesmo em linha de comando.

![Alt text](imgs/workbench-connections.png)

![Alt text](imgs/workbench-connections-config.png)

![Alt text](imgs/workbench-new-connection.png)

Uma forma de replicar as conexões de uma máquina para outra é copiar e transferir o arquivo de conexões `connections.xml` para as outras máquinas no diretório `User → AppData → Roaming → MySQL → Workbench`.

Um servidor MySQL também pode ter sua execução parada ou inicializada via Services do sistema ou via linha de comando. Parar sua execução temporariamente pode necessário para alguma manutenção e configuração do ambiente, quanto se trabalhar no ambiente sem que os usuários daquele servidor também estejam com acesso.

#### Criando um Usuário

```sql
-- dba user
CREATE USER 'user_name'@'server' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'server' WITH GRANT OPTION;
```

```sql
-- normal user
CREATE USER 'user_name'@'server' IDENTIFIED BY 'user_password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE ON *.* TO 'user_name'@'server';
```

```sql
-- read-only user
CREATE USER 'user_name'@'server' IDENTIFIED BY 'user_password';
GRANT SELECT, EXECUTE ON *.* TO 'user_name'@'server';
```

É importante pensar nos privilégios que vão ser acessíveis para cada usuário, se faz sentido com sua função. Um ponto importante é que o privilégio de `EXECUTE` permite usar (mas não criar/modificar/deletar) stored procedures, se algum comando dentro da sp estiver fora do privilégio deste usuário, o  MySQL ainda executará normalmente.

```sql
-- user for backups
CREATE USER 'user_name'@'server' IDENTIFIED BY 'user_password';
GRANT SELECT, RELOAD, LOCK TABLES, REPLICATION CLIENT ON *.* TO 'user_name'@'server';
```

```sql
-- dba user that can access from any sever
CREATE USER 'user_name'@'%' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'%' WITH GRANT OPTION;
```

![alt text](imgs/workbench-user-c.png)

```sql
-- normal user access on a specific database
CREATE USER 'user_name'@'%' IDENTIFIED BY 'user_password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE ON db_name.* TO 'user_name'@'%';
```

```sql
-- normal user access on a specific database table
CREATE USER 'user_name'@'%' IDENTIFIED BY 'user_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON db_name.tbl_name TO 'user_name'@'%';
```

![alt text](imgs/workbench-user-schema.png)

Para revogar privilégios:

```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user_name'@'server';
```

Informações sobre usuários:

```sql
SELECT * FROM mysql.user;

SHOW GRANTS FOR 'user_name'@'server';
```

### Tuning de Hardware

Existem 4 maneiras de configurar o ambiente MySQL para fazer tuning.

- Esquema
- Índices
- MySQLD Tuning (através das variáveis internas)
- Tuning de sistema operacional (hardware)

Para oo tuning de hardware há sempre a preferência para um sistema operacional de 64 bits, outro ponto é avaliar a relação entre RAM e a base de dados, o quanto está sendo utilizado. O recomendado é disponibilizar, no máximo, 50% da RAM para os processos do banco de dados.

O tipo de leitor de disco - HD e SSD - também afeta na performance e processamento. Se é viável um sistema puramente processado em SSD, é a alternativa mais eficiente, mas entre as opções comuns e menos caras - SCSI, SATA e SAS - é recomendo os discos SAS por serem mais performáticos. 

Por fim, há o modo que a controladora de disco RAID é utilizada. Os discos RAID são geralmente usados para a segurança dos dados. Entre seus diversos tipos, os mais usados são: 

- RAID 0
  - Vai dividir os dados em dois discos rígidos diferentes. Há 2 discos rígidos físicos, mas logicamente só um drive é visível, sendo o OS que divide o dado entro os discos.
- RAID 1
  - Normalmente é uma cópia, um espelho. Há 2 discos rígidos, sendo um só visível, inclusive em capacidade. Internamento, toda alteração, inclusão e exclusão é feita ao mesmo tempo nos dois.
- RAID 5
  - Divisão dos dados em mais discos.

![Alt text](imgs/raid-0-1-5.png)

- RAID 10
  - Espelhamento dos discos, usando mais discos.

![Alt text](imgs/RAID_10.png)

RAID 1 e 10 gastam mais espaço por conta da redundância, mas são mais seguros, já que se algo acontecer com um drive ou não estiver disponível por algum motivo, o outro tema cópia exata dos mesmos dados.

**Variáveis de Ambiente ↓**

São variáveis que são declaradas na inicialização do ambiente. Elas não só definem limites dentro dos bancos de dados, como também alguns parâmetros como a porta de comunicação, em que diretório a base de dados será criada e assim por diante, existem mais de 250 variáveis de ambiente.

A cada versão nova do MySQL há possíveis mudanças nestas variáveis, tanto em depreciação de uma específica, para a implementação de uma nova. É importante verificar a documentação para saber se a variável usada no ambiente ainda está apta após a atualização.

O comando `SHOW STATUS` mostra a situação atual das variáveis de ambiente.

```sql
SHOW GLOBAL STATUS `var_name`
```

Existem 2 tipos:

- Global
  - Vale para todo o ambiente MySQL
- Session
  - Vale somente para a conexão

São armazenadas em um arquivo externo de inicializações de variáveis chamado `my.ini - Windows | my.cnf - Linux`. Dentro deste arquivo há 2 diretivas: 

- `mysqld`
  - Para as globais
- `client`
  - Para as sessions

### Mecanismos de Armazenamento

Estes mecanismos são um dos recursos mais exclusivos do bando de dados. Ele gerencia a forma que o dado é gravado dentro das tabelas e o MySQL disponibiliza cerca de 20 tipos diferentes de mecanismos de armazenamento.

Permite que haja uma separação entre a armazenagem e o código principal do banco de dados.

Um banco de dados pode conter mais de um tipo de mecanismo ao mesmo tempo. Como são aplicados a nível de tabela, pode ser confundido com um tipo de tabela.

![alt text](imgs/storage-engine.png)

Os mais usados são o MyISAM, InnoDB e MEMORY.

```sql
CREATE TABLE tbl_name (col_name datatype, col_name datatype [...])
ENGINE = engine_name;
```

```sql
ALTER TABLE tbl_name
ENGINE = engine_name;
```

**MyISAM ↓**

Mecanismo padrão do MySQL, inclusive, as tabelas internas do MySQL são armazenadas usando MyISAM.

→ Não é transacional e não implementa mecanismos de bloqueio (bloqueio a nível de tabela);
→ Rápido para leitura;
→ Baixa escalabilidade, problemático para muitas gravações;
→ Nenhuma chave estrangeira suporta índices FULLTEXT para correspondência de texto;
→ Nenhum cache dados ou cache de índice - pode ser especificado pelo nome;
→ Implementa os índices HASH e BTREE;
→ Dados compactados.

Há algumas variáveis de ambientes diretamente ligadas a ele:

- `key_buffer_size`
  - Determina o tamanho de cache para armazenamento dos índices
- `concurrent_insert`
  - Determina o comportamento das inserções concorrentes dentro de uma tabela. Existe uma variável que controla o intervalo dos dados, que é uma espera que MySQL faz entre a inserção de um dado e de outro dado.
  - Se `concurrent_insert` for igual a:
    - 0 -  desativa as inserções simultâneas, ou seja, uma inserção sempre vai esperar a tabela ser liberada para funcionar
    - 1 - é possível fazer inserções simultâneas, sem intervalo de dados
    - 2 - permite a inserção simultâneas com um intervalo de dados ativado.
- `delay_key_write`
  - Cria um atraso entre a atualização dos índices e o momento que a tabela é fechada. 
  - O MySQL vai esperar todas as inserções serem efetuadas, para depois fazer uma atualização dos índices.
- `max_write_lock_count`
  - Determina quantas gravações em uma tabela vão ter precedências às leituras, ou seja, quando tiver gravações e leituras ao mesmo tempo, qual vai ser a prioridade da inclusão de dados na tabela, em relação às leituras.
- `preload_buffer_size`
  - Determina o tamanho do buffer que vai ser usado no pré carregamento do índice de caches de chaves da tabela.

Existem também 3 utilitários usados para manipular as tabelas do tipo MyISAM.

- myisamchk
  - usado para analisar, otimizar e reparar tabelas
- myisampack
  - criar tabelas compactadas para leitura
- myisam_ftdump
  - exibe informações completas sobre campos de tipo texto


**InnoDB ↓**

→ Transacional completo;
→ Suporte a chaves estrangeiras;
→ Bloqueio a nível de linha;
→ Indexação usando índices BTREE
→ Cache de buffer configurável de ambos os índices e dados;
→ Backup on-line sem bloqueio

O InnoDB armazena as informações através de um arquivo que vai crescendo e depois quando ele acaba, ele vai criando um outro arquivo com sufixo 1, 2, 3 e assim por diante.

Variáveis de ambientes relacionadas ao InnoDB:

- `Innodb_data_file_path`
  - Determina o caminho dentro do sistema operacional, onde as informações serão armazenadas e o tamanho desses arquivos máximos. 
- `Innodb_data_home_dir`
  - É feito para dizer qual é o caminho comum de diretório de todos os arquivos InnoDB.
- `Innodb_file_per_table`
  - Pode especificar cada tabela de armazenamento InnoDB, os arquivos que armazenam as informações, eles tem uma extensão “.ibd”.
  - Consegue separar o armazenamento dos dados, com os índices.
- `innodb_buffer_pool_size`
  - Determina o tamanho de buffer que o mecanismo de armazenamento InnoDB, vai estar usando para armazenar dados e índices em cache.
- `innodb_flush_log_at_trx_commit`
  - Configura a frequência com que o buffer de log é liberado para o disco. Na medida em que o banco de dados cresce, o buffer acompanha, até que, em certos momentos, seja descarregado no disco rígido.
- `innodb_log_file_size`
  - Determina o trabalho em bytes que cada um dos arquivos de log (InnoDB) vão ter.

**Memory ↓**

Como o nome sugere, é um mecanismo que cria tabelas apenas na memória RAM.

→ Nenhum suporte de chave estrangeira;
→ Muito rápido para ler e escrever devido a ser inteiramente na memória;
→ Bloqueio a nível de tabela

Sua maior desvantagem é que nada fica armazenado em disco, ou seja, tudo precisa ser reinicializado junto ao servidor.


### Backups

Cópia do banco de dados feito periodicamente com objetivo de recuperação para segurança de dados e restauração pós falhas.

Antes de fazer o backup é importante preparar o ambiente para garantir que não haja atualizações ou modificações ocorrendo enquanto o backup está sendo executado.

Para isso existem 2 comandos:

```sql
-- para "congelar" o banco de dados
LOCK INSTANCE FOR BACKUP;

-- para liberar o banco de dados
UNLOCK INSTANCE;
```

Há 2 tipos de backup:

**Backup lógico ↓**

Exporta todas as estruturas, tabelas, dados e rotinas que estão armazenadas em um banco de dados para um script SQL. Este pode ser executado para recriar o estado do banco que foi exportado.

Como vantagem ele pode ser manipulado externamente antes da recuperação, já como desvantagem se apresenta a possível lentidão por ter que executar comando a comando.

- `mysqldump`
  - Usado para a criação de backups lógicos

```bash
mysqldump [options]
```

→ Usuário, senha. servidor
→ `--all-databases` é a opção para um backup completo
→ `> <Nome de saída>` redireciona a saída do backup
→ `--routines` para incluir stored procedures e `--events` para incluir eventos

```shell
# for the whole database
mysqldump -uroot -p --databases database_name > C:\backup_dir_path\backup_name.sql
```

```shell
# for a specific table
mysqldump -uroot -p --databases database_name --tables tbl_name > C:\backup_dir_path\backup_name.sql
```

```shell
# to ignore a specific table
mysqldump -uroot -p --databases database_name --ignore-table database_name.tbl_name > C:\backup_dir_path\backup_name.sql
```

```shell
# only data no structure
mysqldump -uroot -p --databases database_name --no-create-db --no-create-info --complete-insert > C:\backup_dir_path\backup_name.sql
```

Para recuperação do ambiente:

→ Usuário e senha, servidor
→ < `<Nome da entrada>` redireciona a entrada dos dados do backup

```shell
mysql --uroot -p < C:\backup_dir_path\backup_name.sql
```

**Backup físico/bruto ↓**

É uma cópia que contém todos os arquivos de sistema, que o banco de dados usa para armazenar as suas entidades, ele representa o backup dos arquivos binários do disco, os arquivos que representam o banco de dados, que estão armazenados no HD do servidor.

O arquivo de configuração my.ini deve ser copiado para o backup e substituído quando o mesmo for recuperado.

Como vantagem possui uma recuperação e execução mais rápida, já que funciona a base de copiar e colar os arquivos que compõem o banco. Mesmo sem a possibilidade de compactar, costuma ter um tamanho menor do que o lógico.

### Plano de Execução

É como um pré planejamento do que o MySQL irá executar para resolver uma consulta. O objetivo principal de um plano de execução é impactar positivamente a performance das consultas.

O comando `EXPLAIN` é usado para estruturar um plano de ação de acordo com a consulta desejada.

```shell
# default format
EXPLAIN SELECT col_name FROM tbl_name
```

```shell
# table format
EXPLAIN SELECT col_name FROM tbl_name \G
```

```shell
# json format
EXPLAIN FORMAT=JSON SELECT col_name FROM tbl_name \G
```

O custo é expresso em uma unidade desconhecida. Na verdade, não é expresso em unidade alguma. Este valor é apenas usado como comparação com outros planos de execução, sendo que quanto menor o valor, mais rápido vai ser a consulta.

O tempo também pode ser observado com o comando `mysqlslap`, que simula acessos concorrentes em determinada consulta. Com ele é possível simular o tempo mínimo, máximo e médio gasto de determinado número de acessos em uma consulta específica.

```shell
mysqlslap -uroot -p --concurrency=conc_number --iterations=it_number --create-schema=db_name --query=" query to simulate" 
```

#### Conceituando Índices

Serve para facilitar a consulta de informações, é uma estrutura que auxilia a tabela a achar dados. Quando o MySQL cria uma índice, seja este uma ou mais colunas, ele cria também uma cópia desta coluna, em outra estrutura, mas de forma ordenada.

No caso do MyISAM, essas estruturas contêm o índice e a sua referência na tabela, que é a posição do registro.

Apesar de o índice facilitar o processo de busca, existe um certo custo. Toda vez que um novo registro for incluído na tabela, todos os seus índices precisam ser atualizados.

Ou seja, a performance dos comandos `INSERT`, `UPDATE` e `DELETE` vai ser afetada.

A vantagem e diferença dos índices em uma tabela InnoDB é que, quanto o índice for uma chave primária, a ordem é organizada a partir do índice nesta mesma tabela. Estrutura a parte só são criadas para índices que não são chave primária.

Dessa forma, as estruturas a parte também contêm o índice a sua referência, porém ela é o próprio índice de chave primária da tabela que já está ordenado na mesma.

Sua principal vantagem é nas buscas feitas pelo índice de chave primária, já que não precisa procurar em outra estrutura, somente na tabela. Já para outras consultas, é um custo semelhante ao do MyISAM, pois ambos procuram na estrutura a parte para então localizar o registro na tabela pela referência.

#### Algoritmos Hash e BTree

Retomando:

**MyISAM ↓**

→ Cria uma estrutura a parte para todos os índices (PK e não PK);
→ Na estrutura, a coluna do índice é ordena e tem como referência a posição da linha da tabela original;
→ Implementa Hash e B-Tree

**InnoDB ↓**

→ A tabela original já é ordenada pela PK;
→ Os índices não PK possuem estruturas a parte onde a coluna do índice é ordenada e tem como referência o valor da PK;
→ Implementa somente B-Tree

Hash e B-Tree são algoritmos de busca em listas ordenadas.

**B-TREE ↓**

O conceito de uma árvore binária é simples: começando por um valor raiz x a árvore se dividem em nós e folhas. Os valores apresentados a esquerda são sempre os menores valores, já os da direita são sempre os maiores.

![alt text](imgs/ArvoreBinaria-1556x1200.png)

A B-Tree é chamada de "Balance Tree" porque o índice sempre tenta balancear os lados da árvore. Normalmente sua raiz é a mediana das opções buscadas, o que garante que, não importando os lados da busca, o custo será o mesmo.

Essa separação é feita com um determinado intervalo, o que garante o seu balanceamento.

Os mesmos dados da esquerda também estão na direita. O algoritmo de BTREE é matematicamente eficiente. Como exemplo, 4 milhões de nós em no máximo 32 níveis, garantindo apenas no máximo 32 consultas para a busca do valor desejado.

![alt text](imgs/B_Tree_Structure.png)

![alt text](imgs/output256.png)

**HASH ↓**

É um algoritmo matemático que permite que um valor de tipo texto/string, independente do seu tamanho, seja reduzido a outra string de tamanho fixo.

![alt text](imgs/hU4Tc-3777638518.png)