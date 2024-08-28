# Conteinerização com Docker

- [Conteinerização com Docker](#conteinerização-com-docker)
  - [Contextualizando o Docker](#contextualizando-o-docker)
    - [Fluxo de Criação de Containers](#fluxo-de-criação-de-containers)
    - [Mapeando Portas](#mapeando-portas)
  - [Criando e Compreendendo Imagens](#criando-e-compreendendo-imagens)
  - [Persistindo Dados](#persistindo-dados)
  - [Comunicação Através de Redes](#comunicação-através-de-redes)
  - [Coordenando Containers](#coordenando-containers)

## Contextualizando o Docker

> https://www.redhat.com/pt-br/topics/containers/what-is-docker

> https://www.hostinger.com.br/tutoriais/o-que-e-docker

> https://horadecodar.com.br/docker/ 

(vm vs. containers)

(namespaces)

(Cgroups)

### Fluxo de Criação de Containers

> Procura a imagem localmente → Baixa a imagem caso não encontre localmente → Valida o hash da imagem → Executa o container

**Commands ↓**

```bash
docker run [options] image [command] [arg...]

docker run -it image [command] [arg...]
```

(`image:version`)

```bash
docker pull [options] container_id [ | container_name]
```

```bash
docker --help
```

```bash
docker ps [options]
```

```bash
docker container ls [options]
```

```bash
docker stop [options] container_id [ | container_name]
```

```bash
docker start [options] container_id [ | container_name]
```

```bash
docker exec [options] container_id command

docker exec -it container_id command
```

```bash
docker pause [options] container_id [ | container_name]
```

```bash
docker unpause [options] container_id [ | container_name]
```

```bash
docker rm container_id

docker rm container_id --force
```

Remove todos os containers da máquina:

```bash
docker container rm $(docker container ls -aq)
```

Remove todas as imagens da máquina:

```bash
docker rmi $(docker image ls -aq)
```

### Mapeando Portas

```bash
docker port [options]
```

```bash
docker run -P container_id [ | container_name]

docker run -p host_port:container_port container_id [ | container_name]
```

## Criando e Compreendendo Imagens

(entendo imagens)

Uma imagem é um conjunto de camadas empilhadas para formar determinada regra de execução de um container. Ou seja, uma imagem nada mais é que um conjunto de camadas, que ao serem unidas formam imagens. E essas camadas são independentes, cada uma tem o seu respectivo ID (identificador).

Quando o comando `docker run` é executado pela primeira vez, ou simplesmente um `docker pull`, é feito o download das imagens, dessas camadas.

Mas é possível que, por exemplo, já se tenha algumas dessas camadas no host. Por isso, no momento em que um `pull` ou um `run` é feito, somente os downloads das camadas necessárias serão realizados.

O Docker é inteligente o suficiente para reutilizar essas camadas para compor novas imagens, conseguindo assim uma performance muito boa, já que não é preciso ter informação duplicada ou triplicada, porque é possível reutilizar as camadas em outras imagens.

No fim das contas, quando se tem a imagem, ela é read-only, isso significa que não se consegue modificar as camadas dessa imagem depois que ela foi criada. Se ela é bloqueada para escrita, como é que o container consegue escrever informação dentro dela? Porque um container nada mais é do que uma imagem com uma camada adicional de read-write (leitura e escrita).

Quando criamos um container, criamos uma camada temporária em cima da imagem, onde conseguimos escrever informações. E, no momento em que esse container é deletado, essa camada extra também é deletada; essa camada é temporária, bem fina e leve para que o container tenha um ambiente de execução muito leve e fácil de ser executado.

Além de serem simplesmente processos dentro do sistema, se pode dizer que, quando um container entra em execução, a mesma imagem está sempre sendo reaproveitada.

Como a imagem é apenas de leitura, é possível ter vários containers baseados na mesma imagem. A diferença é que cada um desses containers terá apenas uma camada diferente de read-write, e como essa camada é extremamente leve, a fim de manter essa performance, há uma reutilização da imagem para múltiplos containers.

No fim das contas, o que acontece é que quando é definido um container ou outro container baseado na mesma imagem, o tamanho desse container será apenas o tamanho da camada de escrita que está sendo gerando para ele, porque a imagem será reutilizada para cada um deles.

O container é leve e otimizado, porque consegue reaproveitar as camadas das imagens prévias que já temos. E, quando criamos novos containers, ele simplesmente reutiliza as mesmas imagens e, consequentemente, as camadas.

```bash
docker images [options] 
```

```bash
docker inspect container_id [ | container_name]
```

```bash
docker history container_id [ | container_name]
```

(criando imagens)

```docker
FROM image
WORKDIR folder
EXPOSE port
COPY . folder
RUN command
ENTRYPOINT command
```

```docker
FROM node
WORKDIR /app-node
EXPOSE 3000
COPY . .
RUN npm install
ENTRYPOINT npm start
```

Para o uso mais parametrizado com o recurso de variáveis de ambiente, é possível ter um argumento com a instrução `ARG`. Esse argumento será usado para definir essa variável de ambiente dentro do container; o `ARG` só é usado em tempo de build da imagem e o `ENV` vai ser usado dentro do container, posteriormente.

```docker
FROM image
WORKDIR folder
ARG arg
ENV env_var
EXPOSE port
COPY . folder
RUN command
ENTRYPOINT command
```

```docker
FROM node
WORKDIR /app-node
ARG PORT_BUILD=3000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
ENTRYPOINT npm start
```

```bash
docker build [options]

docker build -t image_tag
```

(deploy no docker hub)

Após criar uma conta no Docker Hub, é necessário a autenticar no terminal. Sendo feito isso, já é possível subir uma imagem ao hub com o `push`.

```bash
docker login -u username
```

Caso a imagem esteja em um repositório com outro nome que não seja o mesmo do namespace, a ação será negada, já que segue o padrão de nomeação `username/image_name`. Dessa forma, é necessário criar uma cópia deste repositório com o nome correto, isso sendo feito com o `docker tag`.

```bash
docker push image
```

```bash
docker tag original_repo new_repo

docker tag old_repo/image username/image
```

## Persistindo Dados

No momento em que um container é removido da máquina ou seu processo é parado, seu arquivo R/W também é removido, o que ocasiona na perda dos dados gerados naquele container, já que o container é composto pelas camadas da imagem, que são R/O (imutáveis), mais a sua própria camada temporária de R/W.

Para contornar este comportamento e atingir uma certa persistência de dados, são usados os volumes, dentre eles: `bind mount`, `volume` e `tmpfs mount`.

**Bind Mount ↓**

É uma maneira de fazer um vínculo (bind) entre o sistema de arquivos do sistema operacional e o sistema de arquivos do container. Assim, se estabelece uma ponte entre esses dois que persistirá essa informação tanto no host, quanto em outros containers.

```bash
docker run -v os_dir:container_dir
```

```bash
docker run --mount type=bind,source=os_dir,target=container_dir
```

Essa é uma solução prática para a persistência de dados, mas talvez não seja a mais interessante ou segura, pois pode se escrever um caminho que não existe e ter algum problema, ou não ter permissão para acessá-lo, ou alguém pode simplesmente deletar esse caminho localmente, pois ele estará no host. 

**Volume ↓**

É o mais recomendado pelo Docker para ambientes produtivos.

Conforme a documentação, os volumes são uma área gerenciada pelo Docker dentro do sistema de arquivos. Então, mesmo que as informações continuem no host original para serem persistidas, há uma área que o Docker vai gerenciar, o que é muito mais seguro em termos de alguém fazer alterações indesejadas ou causar algum problema.

```bash
docker volume create vol_name
```

```bash
docker run -v vol_name:container_dir
```

```bash
docker run --mount source=vol_name,target=container_dir
```

Resumindo, volumes são gerenciados pelo Docker e independem da estrutura de pastas do sistema.

**TMPFS ↓**

**_Só funciona no Linux._**

Cria uma pasta temporária, escrevendo na memória do host. Ou seja, no momento em que esse container parar de funcionar, os arquivos da pasta serão perdidos. A ideia do tmpfs é, basicamente, persistir dados na memória do seu host, mas esses dados não estão sendo escritos na camada de read-write. Eles são escritos diretamente na memória do host.

Isso é importante quando há algum dado sensível que não se quer persistir na camada de read-write, por questões de segurança, mas quer tê-los de alguma maneira. É uma questão de segurança que seria interessante em alguns cenários, como arquivos de senha, ou algum arquivo que não se quer carregar e manter durante a execução como um todo.

```bash
docker run --tmpfs=container_dir
```

```bash
docker run --mount type=tmpfs,destination=container_dir
```

## Comunicação Através de Redes

O docker trabalha com 3 redes: bridge, host e none, todas em escopo local por padrão.

Se um container é isolado, como pode haver comunicação entre eles? A resposta está nas redes, principalmente na rede `bridge`, que é configurada pelo próprio docker por padrão no momento de execução do container.

Como o container recebe essa rede `bridge` já configurada, é possível estabelecer uma comunicação entre redes a partir dos endereços de IP configurados em cada rede. Porém, como os containers, por muitas vezes, estão suscetíveis a serem temporários (serem reiniciados, recriados e afins), e isso não vai garantir que o contêiner vai ter sempre o mesmo IP.

Então, essa conexão será muito instável. É preciso ter uma maneira mais certa de fazer isso, como, por exemplo, via um DNS, talvez um hostname seria interessante.

Uma maneira de estabelecer uma conexão mais confiável é nomear os container e criar uma rede própria, definindo nome e rede usada pelo container no seu comando de execução.

```bash
docker network create --driver bridge network_name
```

```bash
docker run -it --name container_name --network network_name image command
```

Dessa forma, é possível fazer a comunicação entre todos os containers dentro dessa `bridge` própria por meio de seus namespaces, ao invés de ficar dependendo de endereços IPs inconsistentes. Isso acontece porquê as redes criadas por usuário proveem essa resolução automática de DNS entre contêineres.

**Host ↓**

Na prática, quando o driver `none` é utilizado, está simplesmente indicando que esse contêiner não terá qualquer interface de rede vinculada a ele. Com isso, o contêiner fica completamente isolado em termos de rede, não conseguindo realizar nenhuma operação que envolva a rede do contêiner, porque seu driver é `none`, ou seja, utiliza o driver `null`.

```bash
docker run -d --network none image command
```

**None ↓**

Agora, caso queria fazer o contrário, ou seja, que o contêiner tenha uma interface de rede, além de utilizar a rede `bridge`, em alguns casos, é mais interessante que a interface de rede seja mais vinculada ao host.

```bash
docker run -d --network host username/image
```

Isso significa que agora, se uma nova aba do navegador for aberta, é possível acessar a aplicação sem que seja necessário mapear as portas. Isso ocorre porque, ao definir qual porta se quer acessar, a aplicação já estará disponível, já que, ao utilizar o driver `host`, qualquer isolamento que existia entre a interface de rede do container e e do host é removido.

Porém, a aplicação deste container não poderá ser acessada se outra aplicação já estiver em execução no host com a mesma porta, pois há um conflito de portas.

(comunicação aplicação banco)

```bash
docker pull mongo:4.4.6
docker pull aluradocker/alura-books
docker run -d --network minha-bridge --name meu-mongo mongo:4.4.6
docker run -d --network minha-bridge --name alurabooks -p 3000:3000 aluradocker/alura-books:1.0
```

## Coordenando Containers

Quando se está trabalhando com aplicações simples, definir os comandos de execução e sua ordem pode ser, no máximo, inconveniente, mesmo que sejam comandos verbosos. Agora, quanto maior a complexidade da aplicação, mais impraticável se torna.

Além de subir um a um manualmente, e em ordem, toda vez que se quiser parar um container, terá que usar o comando `docker stop` ou `docker rm` para remover um a um. Ou seja, para cada container será necessário executar um comando, além da pilha de execução com todos esses containers.

Para isso, o próprio docker tem uma solução, é chamado de Docker Compose.

**Docker Compose ↓**

É uma ferramenta de coordenação de containers, o que é diferente de orquestração. Ele auxilia a compor vários containers em um mesmo ambiente por meio de um único arquivo. Assim, é possível compor uma aplicação maior com os containers. Resumindo, o Docker Compose irá resolver o problema de executar múltiplos containers de uma só vez e de maneira coordenada, evitando executar cada comando de execução individualmente.

Essa definição é feita por meio de um arquivo YAML, uma linguagem de serialização de dados versátil e legível que é comumente usada para escrever arquivos de configuração. Nele se pode definir versão, serviços, volumes, comunicação, entre outros processos relacionados aos containers.

A versão será a versão do YAML usado, já os serviços são os próprios containers, que recebem como parâmetros imagens, nomes, redes e portas. Uma network criada pelo usuário também pode ser definida para facilitar a comunicação entre os containers.

```yml
version: "3.9"
services:
  mongodb:
    image: mongo:4.4.6
    container_name: meu-mongo
    networks:
      - compose-bridge
  
  alurabooks:
    image: aluradocker/alura-books:1.0
    container_name: alurabooks
    networks:
      - compose-bridge
    ports:
      - 3000:3000

networks:
  compose-bridge:
    driver: bridge
```

Com o arquivo pronto, só é necessário acessar o seu diretório no terminal e executar o seguinte comando:

```bash
file_name up

docker-compose up
```