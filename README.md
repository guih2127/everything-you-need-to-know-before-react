O javascript é uma linguagem que surgiu a partir de outra linguagem, o ECMAscript.
O ECMAscript é um padrão seguido por várias linguagens de programação, dentre elas,
o javascript. No ECMAscript, várias implementações são feitas, constantemente, e os
browsers não acompanham essa evolução.
Isso faz com que seja necessário, ainda, compiladores de código, para que o browser
consiga entender o código que está sendo escrito, sendo o mais famoso deles, o BABEL.
(Com o babeljs.io podemos ver funções que nem todos os browsers entendem, e ver como ele
fica compilado pelo babel).
Temos também o WEBPACK, uma ferramenta de bundle, ou seja, ele pega vários arquivos
e "junta" eles em apenas um, ou seja, faz um bundle deles, fazendo com que todo .js
vire apenas um arquivo .js, todo o .css vire apenas um .css, e assim por diante.  
O bundle era necessário antigamente, pois os browsers não suportavam IMPORTAÇÃO
DE ARQUIVOS, fazendo com que fosse necessário realizar esse bundle para o browser
entender nosso código.
Hoje, nativamente, os browsers já suportam importação entre arquivos, fazendo com que
ferramentas de bundle não sejam mais necessárias. (Com o caniuse.com podemos ver funcionalidades
que browsers aceitam ou não).
Basicamente, para aplicações modernas, precisamos da compilação para um JS mais moderno,
mas não precisamos de um bundle. Uma das melhores ferramentas para se utilizar hoje em dia,
nesse contexto, é o ESBUILD, que está bastante em alta e é performático.
Vite: Ferramenta que traz o ESBUILD por padrão, junto com algumas outras coisas por padrão,
como suporte a Typescript, importação de CSS e live reloading. O Vite é um ambiente de
desenvolvimento poderoso com javascript.
