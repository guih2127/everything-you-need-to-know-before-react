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

value = objectWithFunction.function?.() ?? "Função não existe";

document.body.innerText = JSON.stringify(value);
