# odin-etch-a-sketch
4º Projeto do Odin Project - Basics

Tem por objetivo criar uma grid 16x16, em seguida adicionar um efeito hover em cada célula do bloco, e então, adicionar um botão cujo efeito é deixar o usuário definir o tamanho da grid (rows X columns), mantendo a proporção de tamanho, com o limite de até 100 linhas e 100 colunas.

Primeiramente, foi criada uma função makeGrid(gridNum), que tem por objetivo criar os elementos presentos na grid. O parâmetro pedido determina a quantidade de loops de criação de linhas, e dentro de cada uma dessas linhas, outro loop foi criado, ainda utilizando esse mesmo parâmetro, para criação de colunas, ou seja, dentro de cada uma dessas linhas, teriam X colunas. Essas linhas e colunas seriam organizadas dentro do container através do display: flex, com direção horizontal. Para chamar essa função, o window.onload foi utilizado, definindo assim que toda vez que a página fosse carregada, essa função seria chamada, utilizando 16 como parâmetro, o que cria uma grid de 16x16.

O segundo passo, foi determinar um efeito "hover" toda vez que o mouse passasse por cima de uma das células. Para isso, ainda dentro do loop de colunas (no caso, como ele está dentro do loop de linhas, cada uma das colunas determina uma célula), foi adicionado um addEventListener, que determina que ao mouse entrar na célula, ela mesma ser alvo do programa, e mudar seu background para outra cor, criando assim aquele efeito de trilha ao passar o mouse.

Por último, foi necessário criar um botão, que tem por objetivo mudar o tamanho da grid, de acordo com o valor determinado pelo usuário, com o valor máximo de 100x100. Para isso, foi criada uma função changeGrid(), que abre um prompt pedindo um valor, e se esse valor estiver entre 1 e 100, ela chama a função makeGrid() com o valor determinado, senão, um aviso é aberto e pede para inserir um valor adequado. Essa função foi adicionada como efeito de clique do botão através do addEventListener(). Em seguida, foi determinado um valor máximo, tanto para a grid, como para as células, ainda dentro da função makeGrid, de modo que aquele container tenha um valor fixo, e as células, quando seu tamanho mudar, adequem seu height e seu width, de modo a ocupar o valor exato da área do container, ou seja, dentro do container, uma grid de 2x2, vai ter o mesmo height e mesmo width que uma grid de 64x64.

* Algumas modificações foram feitas dentro do styles.css, para manter mais organizado, e mais "bonito" visualmente, mas o core do código foi feito utilizando DOM e javascript (e mesmo essas modificações feitas no styles.css poderiam ser feitas dentro do javascript.js, mas para evitar um código bagunçado, optei por organizar assim).
