<h1 align=center>
<img src="https://drive.google.com/file/d/1w_F-SHL9aDRtoQ1UtxDLSi77a_JCtyHS/view?usp=sharing" />
</h1>

<h3 align="center">

Projeto desenvolvido para consumir a Joke API (https://jokes.one/api/joke/).

</h3>

## **:memo: O QUE É ESTE PROJETO?**

O projeto visa consumir uma API que tem dois endpoints: uma que retorna uma piada do dia, recebendo uma query param em sua URL para escolher a categoria e outro endpoint que retorna todas as categorias possíveis.


## **:runner: __Instruções Para Compilar e Executar a Aplicação:**

### Configs do Servidor:

O Backend da aplicação é uma API mockada utilizando a library json-server (https://www.npmjs.com/package/json-server). Basicamente essa library mocka endpoints em seu localhost. Para tanto, é necessário instalar globalmente o json-server, que escutarar qualquer modificação no arquivo ```db.json``` dentro do diretório ``` root/server/```

É necessário rodar o seguinte comando dentro deste diretório:
```sh
	json-server --watch db.json --port:8000
```
É imprescindível definir a porta 8000, senão a aplicação não funcionará.

No root do projeto, rodar os seguintes comandos:
```sh
	yarn install (ou npm install);
  yarn start (ou npm, caso opte).
```
Para executar testes:
```sh
	yarn test
```
