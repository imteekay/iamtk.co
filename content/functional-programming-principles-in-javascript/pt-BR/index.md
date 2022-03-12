Depois de um bom tempo aprendendo e trabalhando com programação orientada a objetos, comecei a pensar sobre complexidade em software.
"Complexity is anything that makes software hard to understand or to modify." - John Outerhout

| Minha tradução não-oficial: "Complexidade é qualquer coisa que faça o software ficar difícil de entender ou modificar".

Li um paper que também me fez refletir sobre complexidade e como podemos tentar reduzi-la, para que nossos softwares fiquem mais manuteníveis: fáceis de fazer mudanças e adicionar código.

Pesquisando mais sobre complexidade de sistemas, achei os conceitos de programação funcional como imutabilidade e funções puras. Esses conceitos possibilitam desenvolver funções sem efeitos colaterais. Logo, facilitam a manutenção de sistemas junto com outros benefícios.

Outra reflexão foi do porquê usamos programação orientada a objetos, dado que ela gera grandes complexidades.

Nesse artigo quero conversar sobre programação funcional, apresentar alguns conceitos importantes e mostrar na prática como aplicá-los com JavaScript (sim, vamos ter muito código JavaScript aqui!).

---

## O que é programação funcional?

Functional programming is a programming paradigm - a style of building the structure and elements of computer programs - that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data - Wikipedia

| Minha tradução não-oficial: "Programação funcional é um paradigma de programação - um estilo de construção de uma estrutura e elementos de programas de computador - que trata a computação como avaliação de funções matemáticas e evita mudança de estado e dados mutáveis".

Também gosto muito da "definição" do Arthur Xavier sobre Programação Funcional:

| "É um paradigma de programação onde computações são representadas por funções ou expressões puras, evitando efeitos colaterais e dados mutáveis e que utiliza amplamente de composição de funções e funções de primeira classe"

E é exatamente isso que vamos conversar nesse post:

- Paradigma de programação
- Funções puras
- Imutabilidade
- Funções de primeira classe
- Composição de funções

**Obs**: Vamos conversar sobre functions chaining, mas toda a parte e conceitos de composição serão conversados em um próximo artigo. **Spoiler**: no próximo vamos conversar sobre mais utilizações de reduce, Closures, Curry e Function Composition.

---

## Funções puras

O primeiro conceito fundamental que aprendemos quando queremos entender programação funcional são as funções puras. Mas o que isso significa? O que faz com que uma função seja pura?

Temos 2 regras básicas para definição de pureza:

- A função retorna sempre o mesmo resultado para um dado input (também conhecido como determinístico)
- A função não causa nenhum efeito colateral

A função retorna sempre o mesmo resultado para um dado input
Imagine que queremos implementar uma função que calcula a área de um círculo. Uma função impura receberia um raio como parâmetro e calcularia a área: raio _ raio _ PI.

O calculateArea é uma função bem simples, mas por que essa função é impura? Simplesmente porque ela usa um objeto global que não é passado como parâmetro na função.
Vamos imaginar que alguns matemáticos descobrem que o valor de PI é na verdade 42 e mudam o valor do objeto global.
Agora nossa função impura terá um resultado diferente: 10 _ 10 _ 42 = 4200. Para o mesmo parâmetro ( radius = 10), temos um resultado diferente. Logo, ela não é determinística.
Agora, como consertamos isso? Como transformamos essa função impura em uma função pura, previsível e determinística?

Tudo o que precisamos fazer é passar o valor de PI como parâmetro da função. E agora temos acesso a todos os parâmetros sem precisar acessar um objeto externo.
Para os parâmetros radius = 10 e PI = 3.14, sempre vamos ter o mesmo resultado: 314.0
Para os parâmetrosradius = 10 e PI = 42, sempre vamos ter o mesmo resultado: 4200

A composição dos parâmetros radius e PI sempre tem o mesmo resultado.
Outra solução é transformar nosso valor de PI em uma função (uma função é um valor, um dado. Vamos ver mais sobre isso mais pra frente).

Agora o PI é uma função. E não apenas uma função qualquer. Ela é uma função pura.
A função calculateArea recebe radius como parâmetro e usa uma função pura, sem realizar nenhuma mutação. Logo, calculateArea se torna uma função pura também.

---

Lendo arquivos
Se nossa função lê arquivos externos, ela não é uma função pura - pelo simples motivo de que o conteúdo do arquivo pode mudar. Vamos ver esse exemplo a seguir:

Imagine que chamamos nossa função analyzeFile passando o arquivo arq1.txt. Ela abre o arquivo, analisa e conta o número de caracteres.
Agora imagine que mudamos o conteúdo do arquivo. Para o mesmo arquivo arq1.txt como parâmetro, temos um resultado diferente, o que torna a nossa função não determinística, ou impura.
Um detalhe importante é a separação do "carregamento do arquivo" e da "contagem de texto".
carregamento do arquivo: função impura, pois está lidando com algo externo, que pode sofrer alterações.
contagem de texto: essa função é pura, dado que apenas recebe uma string e conta a quantidade de caracteres.

---

Geração de números aleatórios
Qualquer função que depende de número aleatório não pode ser pura.

Depender de algo aleatório faz com que a função seja imprevisível. Porém, funções puras são determinísticas e precisas. Com funções aleatórias, perdemos previsibilidade.

---

A função não causa nenhum efeito colateral
Alguns exemplos de efeitos colaterais incluem modificar um objeto global (alguma variável global, por exemplo) ou um parâmetro passado como referência.
Efeitos colaterais também são conhecidos como alterar o estado de um objeto, seja ele uma variável ou uma instância.
Para ilustrar essa mudança de estado, vamos implementar uma função que recebe um número inteiro e retorne o valor incrementado por 1.

Definimos a variável counter. E nossa função recebe esse valor e atribui um novo valor incrementado por 1.
Aqui estamos modificando o estado da variável counter, ou seja, nossa função é impura. Mas como fazemos para que nossa função seja pura? Simplesmente recebemos o valor e retornamos um valor incrementado por 1, sem a necessidade de mudança de estado.

Nossa função pura increaseCounter retorna 2 e nossa variável counter mantém o mesmo estado.

---

Benefícios de usar função puras
Se seguirmos essas duas regras simples (sem efeito colateral e determinístico), nossos programas ficam mais simples e mais fáceis de entender.
Funções puras são estáveis, consistentes e previsíveis. Para um mesmo parâmetro, as funções puras sempre retornam o mesmo resultado.
Outro grande benefício é o código ser mais facilmente testável. Não precisamos fazer mock. Apenas precisamos considerar diferentes contextos. Podemos fazer testes de unidade para diferentes contextos (parâmetros):
Dado um parâmetro A → espera-se que a função retorne o valor B
Dado um parâmetro C → espera-se que a função retorne o valor D

Um exemplo simples seria uma função que recebe uma lista de números e retorna uma nova lista com cada número incrementado.

Nos detalhes de implementação, nossa função recebe uma lista de números inteiros, usa a função map e retorna uma nova lista com cada número incrementado.

Para a lista [1, 2, 3, 4, 5], o resultado esperado é [2, 3, 4, 5, 6].
Para a lista [0, 2, 4, 6, 8], o resultado esperado é [1, 3, 5, 7, 9].

---

Imutabilidade
"Change neon light signage" by Ross Findon on UnsplashInalterável ao longo do tempo ou incapaz de ser alterado.
Quando dados são imutáveis, eles não sofrem alterações depois de serem criados. Se quisermos modificar um objeto imutável, ao invés de tentarmos modificar o seu valor, nós criamos um novo objeto com um novo valor. Assim o antigo objeto imutável mantém seu estado inalterado.
Em JavaScript, geralmente usamos o loop for para iterar em cima de listas.
Esse próximo código é um exemplo de código imperativo que possui algumas variáveis que são mutáveis ao longo do loop.

Para cada iteração, modificamos o valor da variável i e de sumOfValue. Queremos aplicar imutabilidade agora, mas como podemos fazer a iteração sem modificar o estado das nossas variáveis? Hmm… Recursão!

Aqui temos a função sum que recebe uma lista de número e um acumulador que será o resultado final da soma (inicializado como 0).
Primeiro temos o caso base: quando a lista está vazia. Se ela estiver vazia, retornamos o valor do acumulador, que basicamente é nossa soma.
Enquanto a lista não estiver vazia, a função chama ela própria sempre passando o valor "atualizado" do acumulador.
Com recursão, conseguimos manter nossas variáveis imutáveis. O estado da lista (list) e do acumulador (accumulator) se mantêm inalterado. Imutabilidade for the win.
Obs: Podemos usar reduce para implementar essa função sum. Mas vamos aprender como fazer isso apenas no tópico sobre Funções de Alta Ordem.

---

Um exemplo mais complexo de imutabilidade
É bem comum implementarmos um código que constrói o estado final de um objeto. Vamos construir uma classe que transforma uma string em uma url slug.
Em programação orientada aobjeto em Ruby, criaríamos uma classe UrlSlugify. E essa classe teria um método slugify que transforma a string na url slug.

Feito! Essa implementação é um código imperativo que fala exatamente como o algoritmo do slugify deve funcionar: transforma a string em "caixa baixa", remover os espaços em branco do começo e do fim e trocar os espaços em branco por hifens.
Mas, para esse caso, estamos mudando o estado da string. Para ser mais preciso, a mutação ocorre em 3 etapas.
Conseguimos remover essa mutação implementando composição de funções (function composition) ou encadeamento de funções (function chaining).
Em outras palavras, o resultado de uma função é usado como entrada para próxima função, sem modificar o estado da string.

Aqui temos:
toLowerCase: converte a string para caixa baixa
trim: remove os espaços em branco do começo e final da string
split e join: troca todos os espaços por hífen

Combinamos essas 4 funções e podemos transformar nossa string em uma url slug sem ter efeitos colaterais.
Lembrando que esses quatro métodos de string não alteram o estado da string. Basicamente eles recebem o valor da string e retornam uma cópia modificada, porém o estado e a referência continuam o mesmo. Imutabilidade do estado.

---

Transparência referencial
"person holding eyeglasses" by Josh Calabrese on UnsplashVamos implementar uma função square que calcula o quadrado de um número:

Essa função pura sempre tem o mesmo resultado para a mesma entrada.

Passar 2 como parâmetro da função square sempre terá o mesmo resultado 4. Dado que sempre teremos o mesmo resultado, podemos trocar o square(2) pela constante 4. Nossa função é referencialmente transparente.
Funções puras + dados imutáveis = transparência referencial

---

Com esse conceito de transparência referencial, uma coisa legal que podemos fazer é usar memoization. Como exemplo, temos uma função de soma sum:

Agora chamamos a função com esses parâmetros:

A soma sum(5, 8) é igual a 13. Essa função sempre tem o mesmo resultado: 13. Então podemos "memorizar" esse resultado e usar dessa forma:

---

Funções como entidades de primeira classe
"first-class" by Andrew Neel on UnsplashFunções como entidades de primeira classe é a ideia de que funções são tratadas como valores e usados como dados.
Funções como entidades de primeira classe podem:
terem suas referências "armazenadas" em variáveis e constantes
serem passadas como parâmetro em outras funções
serem retornadas como resultado de outras funções

Como resumo, a ideia é tratar nossas funções como dados. Dessa forma, podemos combinar diferentes funções para criar novas funções com um novo comportamento.
Confuso?
Imagine que temos essa função que soma dois valores e depois dobra o valor. Algo assim:

Agora queremos implementar uma mesma função, mas subtrair os valores ao invés de somá-los:

Essas duas funções possuem lógicas bem similares, as únicas diferenças são os operadores matemáticos.
Se tratarmos funções como valores, podemos extrair a lógica dos operadores como funções e passá-los como parâmetros.

Implementamos a função sum que recebe 2 valores e soma.
Implementamos a função subtraction que recebe 2 valores e subtrai.
Agora nossa função doubleOperator recebe uma função e usa para fazer a operação antes de dobrar seu valor.

Agora conseguimos usar o doubleOperator passando as funções sum ou subtraction. Podendo extrapolar para outras funções, por exemplo multiplicação.
Assim criamos um novo comportamento, dependendo da função que o doubleOperator recebe.

---

Funções de alta ordem
Quando falamos sobre funções de alta ordem, queremos dizer funções que:
Recebe uma ou mais funções como parâmetros, ou
Retorna função como resultado

A função doubleOperator que implementamos acima é uma função de alta ordem porque recebe uma função como argumento e a usa para criar um novo comportamento.
Você provavelmente já ouviu falar sobre filter, map e reduce. Vamos entendê-las mais a fundo, dadas que são as principais funções de alta ordem.

---

Filter
Dada uma lista, queremos filtrá-la por algum "parâmetro". A função filter espera um valor true ou false para determinar se o elemento deve ou não ser incluído no resultado final.
Basicamente, se a função de callback retorna true, a função filter inclui o elemento na lista final. Caso contrário, ela "remove" esse elemento.
Um exemplo simples é quando temos uma lista de inteiros e queremos apenas os número pares.
Uma abordagem imperativa
Uma maneira imperativa de implementar essa função em JavaScript é:
criar uma lista vazia evenNumbers
iterar pela nossa lista numbers
verificar os números que são pares e adicioná-los na lista evenNumbers

Uma abordagem declarativa
Podemos usar a função filter que apenas recebe uma função even e retorna a lista de números pares:

Usamos uma simples arrow function para definir nossa função even e já podemos usá-la na função filter.
Ao invés de falarmos exatamente como o algoritmo deve filtrar essa lista, apenas declaramos que queremos os números pares.

---

Um problema interessante que resolvi no path do Hacker Rank FP foi o problema Filter Array. Basicamente, a ideia do problema é que dada uma lista de números inteiros, precisamos filtrar apenas números que são menores que um valor especificado X.
Abordagem imperativa
Uma maneira imperativa de se resolver esse problema é:

Falamos exatamente como a nossa função filtrar - dada a lista e o valor de x, iteramos nossa lista de inteiros e para cada número menor que x, adicionamos na lista, que será o resultado final.
Abordagem declarativa
Mas agora vamos resolver esse mesmo problema de uma forma mais declarativa. Usando a função de alta ordem filter.

Aqui usamos closure para definir qual o x dentro da função isSmaller. Nossa função isSmaller recebe x e retorna uma nova função element => element < x. Assim, para cada elemento da lista de inteiros, conseguiremos verificar quais são os números menores que x.
Podemos fazer a mesma implementação para lista de objetos JS. Imagine que temos uma lista de pessoas que possuem atributos como name e age:

E agora queremos filtrar pessoas que tenham idade maior que valor específico, nesse caso, pessoas com idade maior que 21 anos.

Resumo do código:
Temos uma lista de pessoas com atributos name e age.
Temos a função olderThan21. Nesse caso, função implementa a lógica de verificar se a idade (age) de uma dada pessoa é maior que 21.
E finalmente filtramos todas as pessoas baseado na função olderThan21.

---

Map
A ideia da função map é transformar cada elemento de uma lista.
A função map transforma uma lista aplicando uma função em todos os seus elementos e construindo uma nova lista com o valores retornados
Vamos pegar o mesmo exemplo da lista people. Mas agora não queremos filtrar as pessoas. Queremos apenas retornar uma lista de strings, algo como TK is 26 years old. Então a string final seria ${name} is ${age} years old, onde o name e o age são atributos de cada objeto da lista people.
Um maneira imperativa de se resolver esse problema é:

Definimos uma nova lista vazia, que será o resultado final com nossas strings
Iteramos a lista people: para cada pessoa, montamos a sentença com os atributos name e age
E adicionamos na lista final

---

Um jeito declarativo é usar o map:

A ideia é transformar uma lista (de objetos) em uma nova lista (de strings).
makeSentence: interpola os atributos name e age para formar a string desejada
peopleSentences: faz um map para retornar a lista desejada, passando a função makeSentence aplicando em cada objeto pessoa da lista

---

Outro problema interessante do Hacker Rank é o update list problem. O problema é o seguinte: dada uma lista de números, queremos uma nova lista com os valores absolutos de cada número.
Um input [1, 2, 3, -4, 5] resultará no output [1, 2, 3, 4, 5]. Por quê?
O valor absoluto de 1 é 1
O valor absoluto de -4 é 4

E assim por diante.
Uma maneira de resolver esse problema é para cada número da lista, fazer uma atualização "in-place" dos valores. Ou seja, modificar todos os números pelo seu valor absoluto.

Então iteramos em cima da lista e para cada elemento, usamos a função Math.abs para transformar nosso número em seu valor absoluto e depois fazemos a atualização in-place.
Agora vamos pensar um pouco sobre essa implementação: ela não é uma solução funcional (aplicada nos conceitos de programação funcional). Por quê?
Lembra que aprendemos sobre imutabilidade? Agora sabemos que imutabilidade é super importante para fazer com que nossas funções sejam consistentes e previsíveis.
Basicamente, a ideia é construir uma nova lista com todos os valores absolutos.
Outra reflexão é sobre o código imperativo. Por que não deixamos nosso código mais declarativo, usando a funcão map para transformar todos os nossos dados?
Pensando nesses dois pontos, vamos implementar uma nova solução.
Minha primeira ideia era testar o funcionamento da função Math.abs.

Como queremos uma solução que preze pela imutabilidade de dados e declaratividade do código, vamos usar a função map para lidar com a nossa lista.
map: vou receber a lista e transformar todos os valores em valores absolutos.
Então nossa função map precisa apenas receber uma função que transforma valores em seus valores absolutos. Lembra que testamos a funcionalidade da função Math.abs? Podemos usá-la dentro do map.

Agora nossa função updateListMap ficou super simples. Contempla três itens:
values: lista de números
map: função de alta ordem que recebe uma função para fazer transformações em cima de uma lista
Math.abs: função que transforma valores em valores absolutos

Lindo!

---

Reduce
A ideia da função reduce é receber uma função e uma lista e retornar um valor combinando todos os itens da lista.
Um exemplo simples para ilustrar o funcionamento do reduce é calcular o preço total de um pedido.
Imagine que temos um site do tipo e-commerce. Adicionamos o Product 1, Product 2, Product 3 e Product 4 no carrinho de compras (nosso pedido). Agora queremos calcular o preço total desse pedido.
Uma maneira imperativa seria iterar pela de lista de pedidos e somar o preço de cada produto em uma variável totalAmount.

Definimos nossa variável totalAmount, iteramos em cima da lista de pedidos e somamos cada preço na nossa variável. Simples.
Agora vamos para uma implementação mais declarativa. Vamos usar a função reduce para realizar essa soma.

Primeiro temos o shoppingCart que é o nosso pedido com todos os produtos.
A API da função reduce vai esperar dois valores:
fn: recebe 4 valores - o acumulador, o elemento atual da lista, o index atual (opcional) e a lista (opcional)
valor inicial: esse parâmetro é opcional. Se não for passado, o valor inicial será o primeiro elemento da lista

Vamos começar pelo mais simples. O valor inicial que queremos é 0, dado que queremos somar todos os preços dos produtos.
E agora a função (também chamada de reducer) que lidará com a soma dos preços. Criamos a função sumAmount. Ela recebe dois valores o currentTotalAmount (nosso acumulador - e soma final) e o order (pedido na lista de pedidos).
O retorno dessa função é o valor do acumulador na próxima iteração. Então basicamente pegamos o valor do total atual (currentTotalAmount) e somamos com o preço do produto.
Resumindo, a função getTotalAmount é usada para somar os preços de cada produto de shoppingCart, aplicando a função sumAmount e começando por 0.

---

Outra forma de pegar o preço total de todos os produtos é compor as funções map e reduce. O que queremos dizer com isso?
Podemos usar a função map para transformar o nosso shoppingCart em uma lista de preços
E depois usar a função reduce apenas para somar essa lista de preços

Então, nessa nova implementação temos o map que recebe a função getAmount para transformar todos os pedidos em preços.
Depois o reduce recebe sumAmount, que apenas precisa somar o acumulador com o valor da iteração atual (que é um preço, e não mais um produto), inicializando com 0.

---

Compondo filter, map e reduce
Agora que entendemos como cada função de alta ordem funciona, vamos ver um exemplo que usa a composição das três funções.
Ainda pensando naquele exemplo do shopping cart, vamos considerar que ele também tenha o atributo type em seu objeto. Ficaria assim:

O problema que queremos resolver é o seguinte: como categorizamos o preço total pelo tipo de produto? Ou seja, a ideia é, dada a lista de produtos, queremos saber quanto é o preço total de produtos do tipo books, por exemplo. Como o algoritmo vai funcionar?
filter: filtrar por o type books
map: transformar a lista de pedidos filtrada em uma nova lista com apenas os preços dos produtos
reduce: acumular todos os itens da lista somando todos os valores

A implementação fica bem simples! Temos três arrow functions separados, que serão usados em nossas funções de alta ordem: byBooks, getAmount e sumAmount.
A função getTotalAmount recebe os pedidos (shoppingCart), filtra, transforma e soma todos os valores.

---

Recursos
Organizei alguns conteúdos que li e estudei em um repositório do GitHub: Functional Programming Github repository.
Fiquem à vontade para colaborar com links e conteúdo que possam ajudar a comunidade nos estudos de programação funcional.
Introduções à programação funcional
Learning FP in JS
Intro do FP with Python
Overview of FP
A quick intro to functional JS
What is FP?
Functional Programming Jargon

Funções puras
What is a pure function?
Pure Functional Programming 1
Pure Functional Programming 2

Dados imutáveis
Immutable DS for functional programming
Why shared mutable state is the root of all evil
Immutability - something worth striving for

Funções de alta ordem
Eloquent JS: Higher Order Functions
Fun fun function Filter
Fun fun function Map
Fun fun function Basic Reduce
Fun fun function Advanced Reduce
Clojure Higher Order Functions
Purely Function Filter
Purely Functional Map
Purely Functional Reduce

Programação Declarativa
Declarative Programming vs Imperative
Declarative Programming by MPJ
Imperative and Declarative Programming

Se você curte videos
Javascript Funcional, talk do Arthur Xavier
Functional Programming Basics In ES6, talk do Jeremy Fairbank
Programação Funcional 101, talk do Rogério Chaves
Learning Functional Programming with JavaScript, talk da Anjana Vakil

Livros
Professor Frisby's Mostly Adequate Guide to Functional Programming
Composing Software by Eric Elliot
Functional Light JavaScript by Kyle Simpson

Outros recursos que recomendo
Javascript specific resources
Ruby specific resources
Clojure specific resources

---

Se você ainda está aprendendo JavaScript, vale a pena fazer esse curso do WesBos: EcmaScript 6 course by Wes Bos. Ele é bem completo e didático para quem está começando com JS ou programação em geral. Outro conteúdo completo é do One Month Javascript Bootcamp.

---

Espero que tenha sido divertido aprender mais sobre programação funcional! Esse artigo foi uma tentativa de compartilhar o que tenho aprendido e que pode ser útil para desenvolvedoras/desenvolvedores.
Aqui estão todos os códigos usados nesse artigo.
A Learning Path for Functional Programming
Espero que tenha sido útil para você! Te vejo no próximo artigo. Vamos conversar sobre mais utilizações de reduce, Closures, Curry e Function Composition. São tópicos muito interessantes de programação funcional.
Espero que tenha gostado desse conteúdo. Ajude meu trabalho no Ko-Fi
Meu Site, Twitter & Github.
TK.

- https://medium.com/trainingcenter/conceitos-funcionais-em-javascript-2d450550de5a
