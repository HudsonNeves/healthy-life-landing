# 🎯 Comece Aqui — Healthy Life Landing

Bem-vindo ao projeto educativo **Healthy Life Landing**!

Este é um guia rápido para **começar imediatamente** com o projeto.

---

## 🚀 Em 5 Minutos

### 1. Clonar e Instalar
```bash
git clone -b main-starter https://github.com/HudsonNeves/healthy-life-landing.git
cd healthy-life-landing
npm install
```

### 2. Rodar o Projeto
```bash
npm run dev
```

Abra http://localhost:5173 no navegador. 🎉

### 3. Editar Código
Abra `src/components/Header.jsx` e mude:
```jsx
<h1>Vida Saudável</h1>
```
Para:
```jsx
<h1>🌿 Meu Projeto Incrível</h1>
```

Salve — o navegador atualiza automaticamente! (HMR)

---

## 📚 Roteiro de Aprendizado

### Semana 1: Fundamentos
1. Explore a pasta `src/components/`
2. Leia `GUIA_EVOLUCAO.md` — Fase 1 e 2
3. Aprenda sobre **componentes React** e **JSX**
4. Faça o **Exercício 1** (Personalizar Cores)

### Semana 2: Estilos
1. Estude **CSS Grid** e **Flexbox**
2. Leia `GUIA_EVOLUCAO.md` — Fase 3
3. Faça o **Exercício 2** (Criar CTA)
4. Experimente `hover` effects

### Semana 3: Interatividade
1. Aprenda **React Hooks** (useState, useEffect)
2. Leia `GUIA_EVOLUCAO.md` — Fase 4
3. Faça o **Exercício 3** (Newsletter)
4. Implemente validação

### Semana 4: Projeto
1. Faça o **Exercício 4** (Dark Mode)
2. Leia `.github/copilot-instructions.md`
3. Faça commits e push regulares
4. Compare sua versão com a `main` final

---

## 📁 Estrutura do Projeto

```
healthy-life-landing/
├── src/
│   ├── components/          ← Edite AQUI
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── App.jsx              ← Arquivo principal
│   └── main.jsx             ← Entry point
├── README.md                ← Informações do projeto
├── GUIA_EVOLUCAO.md         ← Seu mapa de aprendizado
├── EXERCICIOS.md            ← Tarefas práticas
├── package.json             ← Dependências
└── vite.config.js           ← Configuração

```

---

## 🎓 Comandos Essenciais

### Desenvolvimento
```bash
npm run dev      # Inicia dev server
npm run lint     # Verifica código
```

### Produção
```bash
npm run build    # Gera build otimizada
npm run preview  # Testa a build
```

### Git
```bash
git status                 # Ver arquivos alterados
git add .                  # Preparar para commit
git commit -m "mensagem"   # Fazer commit
git push origin main       # Enviar para GitHub
```

---

## 📖 Documentação Principal

| Arquivo | Propósito |
|---------|-----------|
| `README.md` | Visão geral do projeto |
| `GUIA_EVOLUCAO.md` | Passo-a-passo de 4 semanas |
| `EXERCICIOS.md` | 5 exercícios práticos |
| `.github/copilot-instructions.md` | Referência técnica |

---

## ❓ Perguntas Frequentes

### P: Por que existem 2 branches?

**R:** 
- `main-starter` — Versão básica (onde você começa)
- `main` — Versão final (objetivo final)

Você aprenderá evoluindo de uma para a outra!

### P: Como voltar a uma versão anterior?

**R:**
```bash
git log              # Ver histórico
git checkout <hash>  # Voltar a um commit
git checkout main    # Voltar ao atual
```

### P: O HMR não está funcionando?

**R:**
```bash
npm run dev          # Reinicie o dev server
Ctrl+Shift+R         # Force refresh no navegador
```

### P: Tenho erro de "Port already in use"?

**R:**
```bash
# Mate o processo anterior:
lsof -i :5173        # macOS/Linux
netstat -ano | grep 5173  # Windows
kill <PID>           # Mate o processo
npm run dev          # Tente novamente
```

### P: Como faço deploy?

**R:**
```bash
npm run build        # Cria pasta 'dist/'
# Upload 'dist/' para Vercel, Netlify ou GitHub Pages
```

---

## 🎁 Recursos Úteis

- **React Docs:** https://react.dev
- **MDN CSS:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Vite Guide:** https://vitejs.dev/guide
- **Git Tutorial:** https://git-scm.com/doc
- **VS Code Tips:** https://code.visualstudio.com/docs

---

## 💡 Dicas de Ouro

1. **Commit frequentemente** — Não espere terminar tudo
2. **Use branches** — `git checkout -b feature/novo-componente`
3. **Teste no mobile** — `npm run dev -- --host`
4. **Leia erros** — Console (F12) é seu melhor amigo
5. **Peça ajuda** — Abra issue no GitHub

---

## 🏆 Metas

- **Nível Bronze:** Completar Semana 1 + Exercício 1 ✅
- **Nível Prata:** Completar Semana 2 + Exercício 2 ✅
- **Nível Ouro:** Completar Semana 3 + Exercício 3 ✅
- **Nível Platina:** Completar Semana 4 + Exercício 4 ✅
- **Nível Diamante:** Fazer Exercício 5 (Supabase) 🔥

---

## ✅ Próximos Passos

1. Clone o repositório
2. Abra `GUIA_EVOLUCAO.md`
3. Siga a **Fase 1** passo-a-passo
4. Ao terminar cada passo, faça um commit
5. Compartilhe seu progresso!

---

**Pronto para começar? 🚀**

```bash
git clone -b main-starter https://github.com/HudsonNeves/healthy-life-landing.git
cd healthy-life-landing
npm install && npm run dev
```

Boa sorte! 🎓

---

**Hudson Neves** | [GitHub](https://github.com/HudsonNeves) | [Repositório](https://github.com/HudsonNeves/healthy-life-landing)
