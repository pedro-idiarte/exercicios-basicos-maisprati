const prompt = require('prompt-sync')()

function exercicio01() {
    let num = Number(prompt('Digite um número: '))
    if ((num % 2) == 0) {
        console.log(num, 'é par.')
    } else {
        console.log(num, 'é ímpar.')
    }
}

function exercicio02() {
    let idade = Number(prompt('Digite a idade: '))
    if (idade < 12) {
        console.log('A pessoa é uma criança.')
    } else if (idade < 18) {
        console.log('A pessoa é um adolescente.')
    } else if (idade < 60) {
        console.log('A pessoa é um adulto.')
    } else {
        console.log('A pessoa é um idoso.')
    }
}

function exercicio03() {
    let nota = Number(prompt('Digite a nota: '))
    if (nota >= 7) {
        console.log('Está aprovado.')
    } else if (nota == 6) {
        console.log('Está em recuperação.')
    } else {
        console.log('Está reprovado.')
    }
}

function exercicio04() {
    let caminho = prompt('Qual caminho você quer seguir? Up, Left ou Right? ')
    switch (caminho.toLowerCase()) {
        case 'up':
            console.log('Você pegou o caminho para cima!')
            break
        case 'left':
            console.log('Você pegou o caminho para a esquerda!')
            break
        case 'right':
            console.log('Você pegou o caminho para a direita!')
            break
        default:
            console.log('Caminho inválido!')
    }
}

function exercicio05() {
    let peso = parseFloat(prompt('Qual seu peso? '))
    let altura = parseFloat(prompt('Qual sua altura? '))
    let imc = peso / (altura * altura)
    if (imc < 18.5) {
        console.log('Categoria: Baixo peso.')
    } else if (imc <= 24.9) {
        console.log('Categoria: Peso normal.')
    } else if (imc <= 29.9) {
        console.log('Categoria: Sobrepeso.')
    } else {
        console.log('Categoria: Obesidade.')
    }
}

function exercicio06() {
    let A = Number(prompt('Qual o tamanho do lado A? '))
    let B = Number(prompt('Qual o tamanho do lado B? '))
    let C = Number(prompt('Qual o tamanho do lado C? '))
    if (A + B > C && A + C > B && B + C > A) {
        if (A === B && B === C) {
            console.log("Triângulo Equilátero.")
        } else if (A === B || A === C || B === C) {
            console.log("Triângulo Isósceles.")
        } else {
            console.log("Triângulo Escaleno.")
        }
    } else {
        console.log("Os valores fornecidos não formam um triângulo.")
    }
}

function exercicio07() {
    let maca = Number(prompt('Quantas maçãs deseja comprar? '))
    let preco = maca >= 12 ? 0.25 : 0.30
    let total = maca * preco
    console.log('O preço total da sua compra de maçãs é: R$', total.toFixed(2))
}

function exercicio08() {
    let valor1 = Number(prompt('Qual o valor 1? '))
    let valor2 = Number(prompt('Qual o valor 2? '))
    if (valor1 < valor2) {
        console.log(valor1, ',', valor2)
    } else {
        console.log(valor2, ',', valor1)
    }
}

function exercicio09() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}

function exercicio10() {
    let numero = prompt('Digite um número: ')
    for (let i = 0; i < 10; i++) {
        console.log(numero)
    }
}

function exercicio11() {
    let soma = 0
    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt('Digite um número: '))
        soma += numero
    }
    console.log('A soma total é:', soma)
}

function exercicio12() {
    let numero = Number(prompt('Digite um número para ver a tabuada: '))
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

function exercicio13() {
    let soma = 0
    let contador = 0
    let numero = 0
    do {
        numero = parseFloat(prompt('Digite um número decimal (0 para sair): '))
        if (numero !== 0) {
            soma += numero
            contador++
        }
    } while (numero !== 0)
    if (contador > 0) {
        let media = soma / contador
        console.log('A média dos números é:', media.toFixed(2))
    } else {
        console.log('Nenhum número foi inserido.')
    }
}

function exercicio14() {
    let numero = Number(prompt('Digite um número para calcular o fatorial: '))
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`)
}

function exercicio15() {
    let a = 0
    let b = 1
    console.log(a)
    console.log(b)
    for (let i = 2; i < 10; i++) {
        let proximo = a + b
        console.log(proximo)
        a = b
        b = proximo
    }
}

function menu() {
    let opcao
    do {
        console.log('\n===== MENU DE EXERCÍCIOS =====')
        console.log('Exercício 1 - Par ou Ímpar')
        console.log('Exercício 2 - Classificação por idade')
        console.log('Exercício 3 - Verificar aprovação')
        console.log('Exercício 4 - Escolha de caminho (Up, Left, Right)')
        console.log('Exercício 5 - Cálculo de IMC')
        console.log('Exercício 6 - Tipo de Triângulo')
        console.log('Exercício 7 - Valor da compra de maçãs')
        console.log('Exercício 8 - Mostrar valores em ordem crescente')
        console.log('Exercício 9 - Contagem regressiva de 10 a 0')
        console.log('Exercício 10 - Repetição de número 10 vezes')
        console.log('Exercício 11 - Soma de 5 números')
        console.log('Exercício 12 - Tabuada de um número')
        console.log('Exercício 13 - Média de números decimais (encerra com 0)')
        console.log('Exercício 14 - Fatorial de um número')
        console.log('Exercício 15 - Sequência de Fibonacci (10 primeiros termos)')
        console.log('0 - Sair')
        opcao = Number(prompt('Escolha o exercício: '))

        switch (opcao) {
            case 1:
                exercicio01()
                break
            case 2:
                exercicio02()
                break
            case 3:
                exercicio03()
                break
            case 4:
                exercicio04()
                break
            case 5:
                exercicio05()
                break
            case 6:
                exercicio06()
                break
            case 7:
                exercicio07()
                break
            case 8:
                exercicio08()
                break
            case 9:
                exercicio09()
                break
            case 10:
                exercicio10()
                break
            case 11:
                exercicio11()
                break
            case 12:
                exercicio12()
                break
            case 13:
                exercicio13()
                break
            case 14:
                exercicio14()
                break
            case 15:
                exercicio15()
                break
            case 0:
                console.log('Saindo do programa...')
                break
            default:
                console.log('Opção inválida!')
        }
    } while (opcao !== 0)
}

menu()