/* =====================================================
   PERGUNTAS
   type "pos" = concordar é saudável
   type "neg" = discordar é saudável
   ===================================================== */
   const perguntas = [
    // RELAÇÕES INTERPESSOAIS
    { text: "Sinto que tenho boas relações com meus colegas de trabalho.", type: "pos" },
    { text: "Consigo manter contato com pessoas fora do meu trabalho com frequência.", type: "pos" },
    { text: "Sinto que faço parte de um time coeso e colaborativo.", type: "pos" },
    { text: "Tenho me sentido cada vez mais distante das pessoas ao meu redor.", type: "neg" },
    { text: "Prefiro ficar sozinho do que interagir com colegas, mesmo em situações casuais.", type: "neg" },
    // CARGA E CONTROLE
    { text: "Consigo encerrar meu expediente no horário previsto com regularidade.", type: "pos" },
    { text: "Sinto que a quantidade de trabalho que recebo é compatível com minha carga horária.", type: "pos" },
    { text: "Tenho controle sobre o meu tempo dentro do trabalho.", type: "pos" },
    { text: "Trabalho frequentemente além do horário, mesmo sem necessidade real.", type: "neg" },
    { text: "Sinto que, se não ficar além do horário, serei mal visto pela equipe ou chefia.", type: "neg" },
    // DESCANSO E DESCONEXÃO
    { text: "Faço pausas regulares ao longo do dia para descansar a mente.", type: "pos" },
    { text: "Sinto que meu tempo de almoço é respeitado e não invadido por demandas.", type: "pos" },
    { text: "Consigo me desligar do trabalho nos fins de semana e feriados.", type: "pos" },
    { text: "Sinto culpa quando paro de trabalhar para descansar, mesmo brevemente.", type: "neg" },
    { text: "Percebo que estou trabalhando mesmo durante momentos que deveriam ser de descanso.", type: "neg" },
    // RECONHECIMENTO E COMUNICAÇÃO
    { text: "Recebo retornos claros e construtivos sobre o meu desempenho.", type: "pos" },
    { text: "Sinto que meu trabalho é reconhecido quando entrego bons resultados.", type: "pos" },
    { text: "A comunicação com minha chefia é aberta e transparente.", type: "pos" },
    { text: "Raramente recebo qualquer tipo de retorno sobre o que faço.", type: "neg" },
    { text: "Sinto que as críticas que recebo são injustas ou mal explicadas.", type: "neg" },
  ];
  
  /* =====================================================
     CLASSIFICAÇÕES — usadas nos dois modos
     ===================================================== */
  const classificacoes = [
    {
      max: 25,
      nivel: "Baixo risco de burnout",
      cor: "#2e7d52",
      // Análise pessoal (modo funcionário)
      analise: "Seus resultados indicam que você está em uma posição relativamente saudável. Você mantém vínculos sociais, controla bem seu tempo e consegue se desconectar do trabalho. Continue prestando atenção aos sinais do seu corpo e mente — a prevenção é sempre o melhor caminho.",
      // Dicas para o próprio funcionário
      dicas: [
        "Mantenha seus hábitos de descanso e lazer como prioridade.",
        "Compartilhe boas práticas com colegas que possam estar sobrecarregados.",
        "Aproveite para desenvolver novas habilidades, já que você tem energia disponível.",
        "Revise periodicamente sua carga de trabalho para não acumular sem perceber.",
      ],
      // Para o gerente: o que fazer com funcionários nesse nível
      recGerente: {
        titulo: "Funcionários com baixo risco",
        acoes: [
          "Reconheça publicamente o bom equilíbrio — isso reforça a cultura saudável.",
          "Envolva-os em mentorias ou programas de apoio a colegas.",
          "Ofereça desafios e oportunidades de crescimento para manter o engajamento.",
          "Mantenha check-ins regulares mesmo com quem parece bem.",
        ],
      },
    },
    {
      max: 50,
      nivel: "Risco moderado",
      cor: "#c8862b",
      analise: "Você demonstra alguns sinais de alerta que merecem atenção. Pode estar havendo dificuldade em desconectar do trabalho, sentimento de sobrecarga em alguns momentos ou falta de reconhecimento. Este é o momento ideal para ajustar a rota antes que a situação se agrave.",
      dicas: [
        "Estabeleça horários fixos para encerrar o expediente e respeite-os.",
        "Inclua pausas curtas ao longo do dia — até 5 minutos ajudam a recarregar.",
        "Comunique sua carga de trabalho ao gestor se estiver acima do razoável.",
        "Busque atividades fora do trabalho que te tragam prazer e energia.",
        "Evite verificar mensagens de trabalho nos momentos de descanso.",
      ],
      recGerente: {
        titulo: "Funcionários com risco moderado",
        acoes: [
          "Agende uma conversa individual para entender os pontos de tensão.",
          "Revise a distribuição de tarefas — sobrecarga pontual pode virar crônica.",
          "Ofereça flexibilidade de horário ou home office quando possível.",
          "Garanta que feedbacks sejam frequentes, claros e positivos também.",
          "Observe se há mudança de comportamento nas próximas semanas.",
        ],
      },
    },
    {
      max: 75,
      nivel: "Alto risco de burnout",
      cor: "#c8462b",
      analise: "Seus resultados revelam sinais significativos de esgotamento. Provavelmente você está sentindo dificuldade para se desligar, se sentindo isolado ou com falta de sentido no trabalho. É importante agir agora — tanto no ambiente profissional quanto no cuidado pessoal.",
      dicas: [
        "Fale com alguém de confiança sobre como está se sentindo.",
        "Considere buscar acompanhamento psicológico ou de saúde ocupacional.",
        "Reduza compromissos não essenciais — aprenda a dizer não quando necessário.",
        "Reserve ao menos uma atividade prazerosa por dia fora do trabalho.",
        "Converse com seu gestor sobre redistribuição de tarefas ou prazos.",
        "Evite trabalhar nos fins de semana ou feriados — o descanso é produtivo.",
      ],
      recGerente: {
        titulo: "Funcionários com alto risco",
        acoes: [
          "Priorize uma conversa empática e confidencial o quanto antes.",
          "Considere afastamento temporário ou redução de responsabilidades.",
          "Encaminhe para o programa de saúde mental da empresa, se houver.",
          "Revise imediatamente a carga de trabalho e redistribua tarefas.",
          "Não cobre horas extras ou disponibilidade fora do horário por ora.",
          "Documente e acompanhe a situação com RH.",
        ],
      },
    },
    {
      max: 100,
      nivel: "Risco muito alto",
      cor: "#7b1a1a",
      analise: "Os resultados indicam um nível crítico de esgotamento emocional e profissional. Você pode estar experimentando exaustão intensa, distanciamento afetivo das pessoas e sensação de impotência. Isso é sério e merece atenção imediata — tanto sua quanto da organização.",
      dicas: [
        "Procure apoio profissional de saúde mental o mais breve possível.",
        "Comunique ao RH ou gestor que não está bem — você tem direito a suporte.",
        "Considere afastamento médico se seu médico recomendar.",
        "Reduza qualquer fonte de estresse evitável no dia a dia.",
        "Priorize sono, alimentação e movimento físico leve.",
        "Afaste-se temporariamente de decisões grandes ou complexas.",
        "Saiba que burnout é uma condição reconhecida — você não está exagerando.",
      ],
      recGerente: {
        titulo: "Funcionários com risco muito alto",
        acoes: [
          "Trate como urgência — acione o RH e a liderança imediatamente.",
          "Avalie afastamento remunerado ou licença médica se necessário.",
          "Garanta acompanhamento de saúde mental especializado pela empresa.",
          "Remova esse colaborador de projetos críticos ou prazos apertados.",
          "Investigue se há causas sistêmicas (cultura, liderança, sobrecarga) que precisam ser corrigidas.",
          "Faça follow-up semanal de forma discreta e humana.",
        ],
      },
    },
  ];
  
  /* =====================================================
     ARMAZENAMENTO LOCAL de resultados simulados
     (em produção real, seria um banco de dados)
     ===================================================== */
  const STORAGE_KEY = "burnout_resultados";
  
  function salvarResultado(percentual) {
    const registros = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    registros.push({ percentual, data: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
  }
  
  function obterResultados() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  }
  
  /* =====================================================
     NAVEGAÇÃO ENTRE TELAS
     ===================================================== */
  function irPara(tela) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(tela).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  /* =====================================================
     TELA ESCOLHA
     ===================================================== */
  document.getElementById("btn-funcionario").addEventListener("click", () => {
    irPara("screen-quiz");
    if (!document.querySelector(".question-card")) renderizarPerguntas();
  });
  
  document.getElementById("btn-gerente").addEventListener("click", () => {
    irPara("screen-login");
    document.getElementById("login-user").value = "";
    document.getElementById("login-pass").value = "";
    document.getElementById("login-erro").hidden = true;
    setTimeout(() => document.getElementById("login-user").focus(), 300);
  });
  
  /* =====================================================
     LOGIN DO GERENTE
     ===================================================== */
  const CREDENCIAIS = { usuario: "ColegioSesi", senha: "1234" };
  
  document.getElementById("btn-entrar").addEventListener("click", tentarLogin);
  
  // Permite Enter nos campos
  ["login-user", "login-pass"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => {
      if (e.key === "Enter") tentarLogin();
    });
  });
  
  function tentarLogin() {
    const u = document.getElementById("login-user").value.trim();
    const s = document.getElementById("login-pass").value;
    const erro = document.getElementById("login-erro");
  
    if (u === CREDENCIAIS.usuario && s === CREDENCIAIS.senha) {
      erro.hidden = true;
      irPara("screen-gerente");
      renderizarPainelGerente();
    } else {
      erro.hidden = false;
      erro.style.animation = "none";
      void erro.offsetWidth;
      erro.style.animation = "";
      document.getElementById("login-pass").value = "";
      document.getElementById("login-pass").focus();
    }
  }
  
  /* =====================================================
     RENDERIZAÇÃO DAS PERGUNTAS
     ===================================================== */
  function renderizarPerguntas() {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";
  
    perguntas.forEach((pergunta, index) => {
      const card = document.createElement("div");
      card.classList.add("question-card");
      card.dataset.index = index;
      card.style.animationDelay = `${index * 40}ms`;
  
      const num = document.createElement("p");
      num.classList.add("question-num");
      num.textContent = `Pergunta ${index + 1} de ${perguntas.length}`;
  
      const texto = document.createElement("p");
      texto.classList.add("question-text");
      texto.textContent = pergunta.text;
  
      const wrap = document.createElement("div");
      wrap.classList.add("likert-wrap");
  
      const row = document.createElement("div");
      row.classList.add("likert-row");
  
      for (let v = 1; v <= 7; v++) {
        const label = document.createElement("label");
        label.setAttribute("aria-label", `${v} de 7`);
  
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}`;
        input.value = v;
  
        input.addEventListener("change", () => card.classList.remove("unanswered"));
  
        const dot = document.createElement("span");
        dot.classList.add("dot");
  
        label.appendChild(input);
        label.appendChild(dot);
        row.appendChild(label);
      }
  
      const labels = document.createElement("div");
      labels.classList.add("likert-labels");
      labels.innerHTML = "<span>Discordo</span><span>Concordo</span>";
  
      wrap.appendChild(row);
      wrap.appendChild(labels);
  
      card.appendChild(num);
      card.appendChild(texto);
      card.appendChild(wrap);
      container.appendChild(card);
    });
  }
  
  /* =====================================================
     CÁLCULO
     pos: ponto = valor - 1  (1→0, 7→6)
     neg: ponto = 7 - valor  (1→6, 7→0)
     Máximo: 20 × 6 = 120
     ===================================================== */
  function calcularResultado() {
    let total = 0;
    perguntas.forEach((p, i) => {
      const sel = document.querySelector(`input[name="q${i}"]:checked`);
      if (!sel) return;
      const v = parseInt(sel.value, 10);
      total += p.type === "pos" ? v - 1 : 7 - v;
    });
    return parseFloat(((total / 120) * 100).toFixed(2));
  }
  
  /* =====================================================
     VALIDAÇÃO
     ===================================================== */
  function validar() {
    const cards = document.querySelectorAll(".question-card");
    let ok = true;
    let primeira = null;
  
    cards.forEach((card, i) => {
      const resp = document.querySelector(`input[name="q${i}"]:checked`);
      if (!resp) {
        card.classList.add("unanswered");
        ok = false;
        if (!primeira) primeira = card;
      } else {
        card.classList.remove("unanswered");
      }
    });
  
    if (!ok && primeira) primeira.scrollIntoView({ behavior: "smooth", block: "center" });
    return ok;
  }
  
  /* =====================================================
     ENVIO DO FORMULÁRIO — MODO FUNCIONÁRIO
     ===================================================== */
  document.getElementById("burnout-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const msgVal = document.getElementById("validation-msg");
  
    if (!validar()) {
      msgVal.hidden = false;
      msgVal.style.animation = "none";
      void msgVal.offsetWidth;
      msgVal.style.animation = "";
      return;
    }
  
    msgVal.hidden = true;
    const percentual = calcularResultado();
    salvarResultado(percentual);   // persiste para o gerente ver
    exibirResultadoFuncionario(percentual);
  });
  
  /* =====================================================
     EXIBIÇÃO DO RESULTADO — FUNCIONÁRIO
     ===================================================== */
  function exibirResultadoFuncionario(percentual) {
    document.getElementById("burnout-form").hidden = true;
    const secao = document.getElementById("result-section");
    secao.hidden = false;
    secao.scrollIntoView({ behavior: "smooth" });
  
    const classe = classificacoes.find(c => percentual <= c.max) || classificacoes.at(-1);
  
    document.getElementById("result-percent").textContent = `${percentual.toFixed(0)}%`;
    document.getElementById("result-level").textContent  = classe.nivel;
    document.getElementById("result-level").style.color  = classe.cor;
  
    // Análise pessoal
    document.getElementById("result-analise").textContent = classe.analise;
    document.getElementById("result-analise").style.borderLeftColor = classe.cor;
  
    // Dicas
    const lista = document.getElementById("dicas-lista");
    lista.innerHTML = "";
    classe.dicas.forEach(d => {
      const li = document.createElement("li");
      li.textContent = d;
      lista.appendChild(li);
    });
  
    animarGauge(percentual, classe.cor);
  }
  
  /* =====================================================
     GAUGE ANIMADO
     ===================================================== */
  function animarGauge(percentual, cor) {
    const arc    = document.getElementById("gauge-arc");
    const needle = document.getElementById("gauge-needle");
    const total  = Math.PI * 80; // ≈ 251.3
  
    arc.style.strokeDasharray  = `${total}`;
    arc.style.strokeDashoffset = `${total}`;
    arc.style.stroke = cor;
  
    requestAnimationFrame(() => requestAnimationFrame(() => {
      arc.style.strokeDashoffset = total * (1 - percentual / 100);
      const grau = -90 + (percentual / 100) * 180;
      needle.style.transformOrigin = "100px 100px";
      needle.style.transform       = `rotate(${grau}deg)`;
      needle.style.transition      = "transform 1s cubic-bezier(.4,0,.2,1)";
    }));
  
    // Contador animado
    const display  = document.getElementById("result-percent");
    const inicio   = performance.now();
    const duracao  = 1000;
  
    (function tick(agora) {
      const prog  = Math.min((agora - inicio) / duracao, 1);
      display.textContent = `${Math.round(prog * percentual)}%`;
      if (prog < 1) requestAnimationFrame(tick);
    })(performance.now());
  }
  
  /* =====================================================
     PAINEL DO GERENTE
     ===================================================== */
  function renderizarPainelGerente() {
    const conteudo  = document.getElementById("gerente-conteudo");
    const registros = obterResultados();
  
    conteudo.innerHTML = "";
  
    // — Estado vazio —
    if (registros.length === 0) {
      conteudo.innerHTML = `
        <div class="g-empty">
          <div class="g-empty-icon">📭</div>
          <p><strong>Nenhum resultado registrado ainda.</strong></p>
          <p style="margin-top:8px">Peça aos funcionários para responderem o questionário neste mesmo dispositivo/navegador.</p>
        </div>`;
      return;
    }
  
    // — Cálculos gerais —
    const total    = registros.length;
    const media    = registros.reduce((s, r) => s + r.percentual, 0) / total;
    const maximo   = Math.max(...registros.map(r => r.percentual));
    const minimo   = Math.min(...registros.map(r => r.percentual));
  
    // Contagem por faixa
    const faixas = [
      { label: "Baixo risco (0–25%)",       cor: "#2e7d52", count: 0 },
      { label: "Risco moderado (26–50%)",    cor: "#c8862b", count: 0 },
      { label: "Alto risco (51–75%)",        cor: "#c8462b", count: 0 },
      { label: "Risco muito alto (76–100%)", cor: "#7b1a1a", count: 0 },
    ];
  
    registros.forEach(r => {
      if      (r.percentual <= 25)  faixas[0].count++;
      else if (r.percentual <= 50)  faixas[1].count++;
      else if (r.percentual <= 75)  faixas[2].count++;
      else                          faixas[3].count++;
    });
  
    // Alerta de atenção
    const criticos  = faixas[3].count;
    const altoRisco = faixas[2].count;
    const alertaHTML = (criticos > 0 || altoRisco > 0) ? `
      <div style="background:#fff3f0;border:1.5px solid #f5c6bb;border-radius:12px;padding:16px 22px;
                  margin-bottom:24px;font-size:.9rem;color:#7b1a1a;line-height:1.6;
                  animation:fadeUp .4s both;">
        ⚠ <strong>Atenção necessária:</strong>
        ${criticos  > 0 ? `<strong>${criticos} funcionário(s)</strong> com risco muito alto. ` : ""}
        ${altoRisco > 0 ? `<strong>${altoRisco} funcionário(s)</strong> com alto risco.` : ""}
        Veja as recomendações abaixo para cada perfil.
      </div>` : "";
  
    // — Métricas —
    const corMedia = classificacoes.find(c => media <= c.max)?.cor || "#7b1a1a";
    conteudo.innerHTML = `
      ${alertaHTML}
  
      <h2 class="g-section-title">Visão geral — ${total} resposta${total > 1 ? "s" : ""}</h2>
  
      <div class="g-metricas">
        <div class="g-metrica" style="animation-delay:.0s">
          <div class="g-metrica-num" style="color:${corMedia}">${media.toFixed(0)}%</div>
          <div class="g-metrica-label">Média geral</div>
        </div>
        <div class="g-metrica" style="animation-delay:.08s">
          <div class="g-metrica-num">${total}</div>
          <div class="g-metrica-label">Respostas</div>
        </div>
        <div class="g-metrica" style="animation-delay:.16s">
          <div class="g-metrica-num" style="color:#c8462b">${maximo.toFixed(0)}%</div>
          <div class="g-metrica-label">Maior risco</div>
        </div>
        <div class="g-metrica" style="animation-delay:.24s">
          <div class="g-metrica-num" style="color:#2e7d52">${minimo.toFixed(0)}%</div>
          <div class="g-metrica-label">Menor risco</div>
        </div>
      </div>
  
      <!-- Gráfico de barras -->
      <div class="g-grafico">
        <h3 class="g-section-title" style="font-size:1.1rem;margin-bottom:20px">Distribuição por nível de risco</h3>
        ${faixas.map(f => `
          <div class="g-barra-row">
            <span class="g-barra-label">${f.label.split("(")[0].trim()}</span>
            <div class="g-barra-track">
              <div class="g-barra-fill" data-pct="${total > 0 ? (f.count / total) * 100 : 0}"
                   style="background:${f.cor}"></div>
            </div>
            <span class="g-barra-count">${f.count}</span>
          </div>`).join("")}
      </div>
  
      <!-- Recomendações por nível -->
      <h2 class="g-section-title">O que fazer com cada perfil</h2>
      <div class="g-recs">
        ${classificacoes.map(c => `
          <div class="g-rec-card">
            <p class="g-rec-nivel" style="color:${c.cor}">${c.recGerente.titulo}</p>
            <ul class="g-rec-lista">
              ${c.recGerente.acoes.map(a => `<li>${a}</li>`).join("")}
            </ul>
          </div>`).join("")}
      </div>
  
      <!-- Botão limpar dados -->
      <div style="text-align:center;margin-top:16px">
        <button class="btn-refazer" onclick="limparDados()" style="font-size:.8rem;padding:10px 28px">
          Limpar todos os registros
        </button>
      </div>
    `;
  
    // Anima as barras após renderização
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll(".g-barra-fill").forEach(el => {
        el.style.width = `${el.dataset.pct}%`;
      });
    }));
  }
  
  /* Limpa registros do localStorage */
  function limparDados() {
    if (confirm("Tem certeza que deseja apagar todos os registros?")) {
      localStorage.removeItem(STORAGE_KEY);
      renderizarPainelGerente();
    }
  }
  
  /* =====================================================
     INICIALIZAÇÃO
     ===================================================== */
  irPara("screen-escolha");