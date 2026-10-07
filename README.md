# EJA em Ação

Landing page educativa para alunos da Educação de Jovens e Adultos (EJA), com uma atividade simples de alfabetização em HTML, CSS e JavaScript.

## Objetivo

Apresentar uma página acessível e educativa com:
- título e explicação curta
- atividade de alfabetização
- feedback visual ao responder
- atualização da pontuação
- botão para avançar para a próxima pergunta

## Estrutura do projeto

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── img/
```

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Inicie um servidor local. Por exemplo:

```bash
cd /Users/eduarda.coelho/Projetos/Eduarda/eja-interativo
python3 -m http.server 8000
```

3. Abra no navegador:

```text
http://localhost:8000/
```

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript

## Funcionalidades

- pergunta com 3 alternativas
- validação da resposta
- feedback visual sem `alert`
- pontuação dinâmica
- navegação entre perguntas
- uso de `querySelector`, `getElementById`, `addEventListener`, `textContent` e `classList`

## Observação

Este projeto foi desenvolvido como exemplo de manipulação do DOM e de boas práticas para páginas educativas acessíveis.
