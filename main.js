// import { dois, soma } from "./lib/math"; // Named imports, onde importamos com o mesmo nome
import * as math from "./lib/math"; // podemos importar tudo de um arquivo para uma variavel
console.log(math.dois);

// Nullish Coalescing Operator
let value = 0;

const idadeValor = 0;
value = "Sua idade é: " + (idadeValor || "Não informado");
// Ao utilizar o || (or), o javascript verificará se o valor é valido ou não,
// ou seja, se ele for 0, '', [], false, undefined ou null, ele não será valido.

// Com o operador nullish, conseguimos ser mais restritivo, ou seja
// apenas se ele for undefined ou null que ele não será valido.
value = "Sua idade é: " + (idadeValor ?? "Não informado");

// Objetos
// Objetos são estruturas de dados que conseguimos armazenar conjuntos
// de chave e valor
const user = {
  name: "Guilherme",
  age: 27,
  address: {
    street: "Rua São Roque",
  },
};

// Podemos utilizar a keyword IN para verificar se um objeto tem uma propriedade
value = "name" in user;

// Podemos utilizar o object.keys para retornar o nome das propriedades de um objeto
value = Object.keys(user);

// Podemos utilizar o object.values para retornar o valor de cada uma delas
value = Object.values(user);

// Para printar um [object, object], podemos usar o JSON.stringify,
// que converte a estrutura para um json
value = JSON.stringify(Object.values(user));

// O object.entries retorna de uma maneira diferente, ele retorna um vetor,
// com vários subvetores dentro dele, sendo que cada subvetor contém
// o nome da propriedade e seu valor
value = JSON.stringify(Object.entries(user));

// Desestruturação
// const address = user.address;
// value = address;

// Com a desestruturação, podemos fazer essa atribuição de uma outra forma,
// quando as propriedades tem o mesmo, nome, dessa forma:
const { address, age } = user;
value = address;

// Mas também podemos renomear variáveis na desestruturação
const { address: endereço, age: idade } = user;

// Podemos também atribuir valores padrão dentro da desestruturação,
// que será atribuído apenas quando aquele valor não existir no objeto.
const { address: endereço2, age: idade2, nickname = "Guih2127" } = user;

// Podemos usar a desestruturação em qualquer lugar que tenha referência
// à um objeto, ou seja, até mesmo em funções:
function mostrarIdade({ age, name }) {
  return name;
}

// Rest operator
// Na desestruturação, podemos pegar o resto das propriedades que não pegamos
// nela, com o operator ...
const { name, ...todoResto } = user;

const array = [1, 2, 3, 4, 5];
const first1 = array[0];
const second1 = array[1];

// Também podemos fazer desestruturação em arrays, ficando dessa forma:
const [first, second, ...rest] = array;

// Podemos até mesmo pular um índice, na desestruturação em arrays:
const [first2, , third2, ...rest2] = array;

// Short Syntax
// Quando temos uma variável e queremos atribuir à uma propriedade de
// mesmo nome, num objecto, podemos utilizar a short syntax:
const numbers = {
  first,
  second,
};

// Optional Chaining
// Ao tentar acessar propriedades que podem não existir, em objetos,
// o console nos mostrará um erro, que podemos solucionar com um ternary:
value = user.family ? user.family : "Não informado";

// O problema é, se tivessemos, por exemplo, um objeto dentro de family,
// teríamos também que fazer essa verificação, para evitar o erro
// value = user.family.mother; -- Vai dar erro
// Então, para lidar com possíveis valores de objetos que podem ou não
// existir, o melhor é usar o Optional Chaining:
value = user.address?.family?.mother ?? "Não informado";

// Podemos utilizar ele para melhorar nosso trabalho com funções, por exemplo:
const objectWithFunction = {
  name: "Nome",
  // function() {
  //   return "This is a function";
  // },
};

value = objectWithFunction.function?.() ?? "";

// Metódos de array

const arrayToTestFunctions = [1, 2, 3, 4, 5];

// podemos percorrer com for e foreach, tal como:
for (const i of arrayToTestFunctions) {
  value += i;
}

arrayToTestFunctions.forEach((item) => {
  value += item;
});

value = "";

// temos também o map, que funciona um pouco diferente do foreach
// o foreach não é muito bom para termos um retorno, diferente do map,
// que serve exatamente para retornar um novo array. com o map, nós
// SEMPRE retornamos um array do mesmo tamanho do utilizado
const arrayMap = arrayToTestFunctions.map((item) => {
  if (item % 2 === 0) {
    return item * 10;
  }
});

value = arrayMap;

// map, filter, every, some, find, findIndex, reduce

// filter
// o filter filtra o array, ou seja, pega apenas uma parte dele,
// diferente do map que retorna um array com o mesmo tanto de valores
// do original
const arrayFilter = arrayToTestFunctions.filter((item) => item % 2 !== 0);

// podemos inclusive concatenar esses metódos
const arrayFilterMap = arrayToTestFunctions
  .filter((item) => item % 2 !== 0)
  .map((item) => item * 10);

// every
// o every retorna true se todos os itens do array satisfazerem uma condição
const todosItensSaoNumeros = arrayToTestFunctions.every((item) => {
  return typeof item === "number";
});

// some
// o sum verifica se pelo menos um item satisfaz uma certa condição
const algumItemNumero = arrayToTestFunctions.some((item) => {
  return typeof item === "string";
});

// find
// com o find conseguimos encontrar um item do array
// é importante frizar que ele sempre retorna o primeiro
// item do array que satisfaça essas condições
const par = arrayToTestFunctions.find((item) => {
  return item % 2 === 0;
});

// findIndex
// o findIndex faz a mesma coisa que o find, mas retornando o índice
// do item encontrado
const parIndex = arrayToTestFunctions.findIndex((item) => {
  return item % 2 === 0;
});

// reduce
// o reduce é muito usado quando queremos pegar um array e a partir dele
// criar uma nova estrutura de dados, com o reduce conseguimos fazer
// várias coisas diferentes
// o reduce recebe dois parametros, uma funcão e o valor inicial
// do que queremos criar, sendo que pode ser 0, ou ate mesmo um objeto vazio
// a função em si recebe dois parametros, acc (de accumulator), que é o objeto
// que esta sendo criado, e o item, que se refere ao item do array
const arrayReduced = arrayToTestFunctions.reduce((acc, item) => {
  return acc + item;
}, 0);

// Template Literals
const message = `Bem vindo ${user.name ?? "Visitante"}`;

// Promises
// Precisamos que algumas coisas da nossa aplicação sejam assíncronas,
// ou seja, precisamos conseguir fazer que nossa aplicação espere
// por determinada coisa acontecer, e para isso utilizamos promises
// podemos inclusive criar promises. as promises recebem dois parametros,
// o resolve e o reject, sendo que o resolve é uma função chamada
// caso ocorra tudo bem, e o reject caso de algum erro.
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// para obter o valor do resolve, utilizamos o then.
// para obter o valor do reject, utilizamos o catch.

// somaDoisNumeros(2, 10).then((soma) => {
//   document.body.innerText = soma;
// });

// exemplo do mundo real
// fetch("https://api.github.com/users/guih2127")
//   .then((response) => {
//     response.json().then((body) => {
//       document.body.innerText = JSON.stringify(body.login);
//     });
//   })
//   .catch((err) => {
//     document.body.innerText = err;
//     console.log(err);
//   })
//   .finally(() => {
//     document.body.innerText = "rodou";
//   });
// obs: O finally é chamado sempre, independente de qualquer coisa

// Trabalhar com then, catch, etc, nem sempre é a melhor opção visualmente
// então podemos usar o async await, sendo que utilizamos try catch
// para capturar os erros (como se fosse o catch)
async function buscaDadosNoGitHub() {
  const response = await fetch("https://api.github.com/users/guih2127");
  const body = await response.json();
  const login = body.login;

  return login;
}

// Toda função vira automaticamente uma promise, então é necessário
// utilizar o .then() ou o await para obter seu resultado.

document.body.innerText = JSON.stringify(math.soma(math.dois, math.dois));
