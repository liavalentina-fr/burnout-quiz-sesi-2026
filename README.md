# Avaliação de Burnout — SESI Internacional Maringá

Aplicação web de avaliação de burnout desenvolvida como trabalho avaliativo do curso Técnico em Desenvolvimento de Sistemas do SESI Internacional Maringá.

**Equipe 2 · TDS · 2026**
Lia · Valdir · Miguel · Vitor · Enzo

---

## O que é o projeto

Um questionário digital de bem-estar no ambiente de trabalho baseado na escala Likert (1 a 7, formato de bolinhas). O funcionário responde 20 perguntas e recebe uma análise do seu nível de risco de burnout com orientações práticas. O gerente pode fazer login e ver um painel com os resultados da equipe.

O projeto tem duas versões:
- **Web** — feita em HTML, CSS e JavaScript, roda direto no navegador
- **Console** — feita em C#, roda no terminal

---

## Divisão de tarefas

| Integrante | O que fez |
|-----------|-----------|
| **Miguel** | Escreveu a estrutura `switch` em C# que classifica o resultado em níveis de risco e calcula a pontuação. |
| **Enzo** | Escreveu as 20 perguntas do questionário |
| **Vitor** | Fez o código das perguntas em C# (leitura das respostas) |
| **Valdir** | Escreveu a análise de cada nível de resultado e as dicas para o funcionário e para o gerente |
| **Lia** | Fez o HTML, CSS e JavaScript da versão web, juntou todo o trabalho da equipe no Vscode e subiu o projeto no GitHub |

---

## Como a versão web foi feita (Lia)

### HTML

O site tem quatro telas: tela de escolha de perfil, login do gerente, questionário e resultado. Cada tela é uma `<div>` com a classe `screen`. Só a tela ativa aparece (com a classe `active`), as outras ficam escondidas com `display: none`. Isso simula a navegação entre páginas sem precisar de arquivos separados.

### CSS —

Todo o estilo foi feito com variáveis CSS no `:root`, por exemplo:

```css
:root {
  --navy: #1a2e5a;
  --yellow: #f5c800;
}
```

Assim é fácil mudar as cores do projeto inteiro em um só lugar. As bolinhas da escala Likert são elementos `<span>` estilizados como círculos — quando o usuário seleciona uma opção, o CSS muda a cor de fundo automaticamente usando o seletor `:checked`.

### JavaScript

O JavaScript faz três coisas principais:

1. **Gera as perguntas dinamicamente** — em vez de escrever 20 perguntas no HTML na mão, o código lê um array (que tá no c#) com as perguntas e cria os elementos na página automaticamente com `document.createElement`.

2. **Calcula o resultado** — cada pergunta tem um tipo: `"pos"` (concordar é saudável) ou `"neg"` (discordar é saudável). A pontuação é calculada assim:
   - Pergunta positiva: `valor - 1` (quem marcou 7 ganha 6 pontos de saúde)
   - Pergunta negativa: `7 - valor` (quem marcou 1 ganha 6 pontos de saúde)
   - O total é dividido pelo máximo possível (120) e multiplicado por 100 para virar porcentagem.

3. **Salva os resultados** — usa o `localStorage` do navegador para guardar os resultados. Assim o gerente consegue ver os dados de quem respondeu no mesmo dispositivo.

### Como o código C# virou um formulário web

A lógica criada pela equipe em C# foi traduzida para JavaScript:

- As perguntas que o Vitor fez com `Console.ReadLine()` viraram bolinhas clicáveis na tela
- O `switch` do Miguel que classifica o resultado virou um array de objetos com os níveis e suas cores, análises e dicas (escritas pelo Valdir)
- O cálculo de porcentagem é o mesmo, só que em JavaScript ao invés de C#

A grande diferença é que no C# o usuário digita um número e vê texto no terminal. Na versão web, o usuário clica em bolinhas e vê um medidor animado, cores e cards. Mas a lógica é basicamente a msm

---

## Como logar o gerente

**Login do gerente:**
- Usuário: `ColegioSesi`
- Senha: `1234`

---