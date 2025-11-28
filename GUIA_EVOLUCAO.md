# 📚 Guia de Evolução do Projeto — Healthy Life Landing

Este guia mostra como evoluir progressivamente o projeto **Healthy Life Landing** de uma versão básica até uma versão profissional e polida.

## 🎯 Objetivo Educativo

Aprender **React**, **CSS**, **Git** e boas práticas de desenvolvimento vendo a transformação real de um projeto.

---

## 📖 Estrutura do Guia

O projeto está dividido em **2 versões** no GitHub:

1. **`main-starter`** → Versão inicial (básica)
2. **`main`** → Versão final (profissional)

Cada uma tem commits que mostram o progresso.

---

## 🚀 FASE 1: Começar com `main-starter`

### Passo 1.1: Clonar a versão inicial
```bash
git clone -b main-starter https://github.com/HudsonNeves/healthy-life-landing.git
cd healthy-life-landing
npm install
npm run dev
```

Você verá a versão **básica** rodando em `http://localhost:5173`.

### Passo 1.2: Explorar a estrutura
Abra os arquivos e veja:
- `src/components/Header.jsx` — navbar simples
- `src/components/Hero.jsx` — seção hero minimalista
- `src/components/Benefits.jsx` — lista com 4 benefícios
- `src/components/Testimonials.jsx` — 2 depoimentos simples
- `src/components/Footer.jsx` — footer com apenas copyright

**O que observar:**
- Componentes funcionais com React
- JSX simples e legível
- Props e `.map()` para renderizar listas
- Estilos CSS básicos

---

## 🎨 FASE 2: Melhorar a Estrutura (Semana 1)

### Passo 2.1: Melhorar o Header
**Objetivo:** Adicionar logo com emoji e botão CTA

Edite `src/components/Header.jsx`:
```jsx
// ANTES: apenas h1 e nav simples
// DEPOIS: adicione logo, flexbox, botão "Iniciar"

<div className="logo">
  <span className="logo-icon">🌿</span>
  <h1>Vida Saudável</h1>
</div>
```

Atualize `src/components/Header.css`:
```css
/* Adicione flexbox e layout */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Passo 2.2: Expandir Benefits
**Objetivo:** Aumentar de 4 para 6 benefícios com descrições

Edite `src/components/Benefits.jsx`:
```jsx
// ANTES: apenas strings em um array
// DEPOIS: objetos com ícone, título e descrição

const benefits = [
  {
    icon: "⚡",
    title: "Mais Energia",
    description: "Aumente sua disposição com exercícios regulares..."
  },
  // ... mais 5
];
```

### Passo 2.3: Enriquecer Testimonials
**Objetivo:** Adicionar role, rating e emoji para cada depoente

Edite `src/components/Testimonials.jsx`:
```jsx
// ANTES: { name, text }
// DEPOIS: { name, role, text, rating, image }

const testimonials = [
  {
    name: "Ana Souza",
    role: "Educadora",
    text: "Em apenas 3 meses...",
    rating: 5,
    image: "👩‍🏫"
  }
];
```

---

## 💅 FASE 3: Estilos Profissionais (Semana 2)

### Passo 3.1: Melhorar Hero
**Objetivo:** Grid layout, dois botões, cards de stats

Edite `src/components/Hero.css`:
```css
/* Layout em grid: texto + imagem lado a lado */
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Dois botões diferentes */
.btn-primary { /* verde sólido */ }
.btn-secondary { /* branco com borda */ }

/* Cards com estatísticas */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

### Passo 3.2: Animar Benefits
**Objetivo:** Cards com hover effect, gradientes, ícones maiores

Edite `src/components/Benefits.css`:
```css
.benefit-card {
  background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
  border: 2px solid #a7f3d0;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(16, 185, 129, 0.15);
}

.benefit-icon {
  font-size: 3rem;
}
```

### Passo 3.3: Cards de Depoimentos
**Objetivo:** Layout melhorado com avatar, rating em estrelas

Edite `src/components/Testimonials.css`:
```css
.testi-card {
  border-left: 4px solid #10b981;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.testi-header-card {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.testi-rating {
  font-size: 0.9rem;
  color: #fbbf24;
}
```

### Passo 3.4: Footer Completo
**Objetivo:** 4 seções + newsletter

Edite `src/components/Footer.jsx`:
```jsx
// Adicione:
// - Seção sobre Vida Saudável
// - Links rápidos
// - Contato (email, telefone, endereço)
// - Newsletter com input
```

---

## 🔄 FASE 4: Responsividade e Refinamentos (Semana 3)

### Passo 4.1: Media Queries
**Objetivo:** Funciona bem em mobile, tablet e desktop

Adicione a cada CSS:
```css
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr; /* mobile: coluna única */
  }
  
  .benefits-container {
    grid-template-columns: 1fr; /* mobile: um card por linha */
  }
}
```

### Passo 4.2: Header Sticky
**Objetivo:** Header fixo no topo ao rolar

Edite `src/components/Header.css`:
```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### Passo 4.3: Animação de Flutuação
**Objetivo:** Emoji na Hero flutua suavemente

Edite `src/components/Hero.css`:
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.image-placeholder {
  animation: float 3s ease-in-out infinite;
}
```

---

## ✅ FASE 5: Validação e Deploy (Semana 4)

### Passo 5.1: Lint e Testes
```bash
npm run lint       # Verificar código
npm run build      # Build para produção
npm run preview    # Preview da build
```

### Passo 5.2: Git Commit
```bash
git add .
git commit -m "feat: add responsive design and animations"
git push origin main
```

### Passo 5.3: Verificar no GitHub
Acesse https://github.com/HudsonNeves/healthy-life-landing e veja seu progresso!

---

## 📊 Checklist de Aprendizado

- [ ] **Semana 1:** Entendo a estrutura de componentes React
- [ ] **Semana 1:** Posso editar JSX e ver mudanças com HMR
- [ ] **Semana 1:** Trabalho com arrays `.map()` para renderizar listas
- [ ] **Semana 2:** Conheço Grid CSS e Flexbox
- [ ] **Semana 2:** Uso gradientes e sombras no CSS
- [ ] **Semana 2:** Entendo hover effects e transitions
- [ ] **Semana 3:** Faço layouts responsivos com media queries
- [ ] **Semana 3:** Entendo z-index e position sticky
- [ ] **Semana 4:** Posso fazer build para produção
- [ ] **Semana 4:** Conheço Git branches e commits

---

## 🎓 Exercícios Sugeridos

### Exercício 1: Personalizar Cores
**Dificuldade:** ⭐ Fácil

Mude a paleta de cores do verde para azul:
- `#10b981` → `#3b82f6` (verde → azul)
- `#059669` → `#1d4ed8` (verde escuro → azul escuro)

### Exercício 2: Adicionar Nova Seção
**Dificuldade:** ⭐⭐ Médio

Crie um novo componente `src/components/CTA.jsx`:
- Título chamativo
- Descrição
- Botão "Começar agora"
- Posicione entre Benefits e Testimonials

### Exercício 3: Validação de Newsletter
**Dificuldade:** ⭐⭐⭐ Avançado

Faça o formulário do Footer funcionar:
- Valide se email é válido
- Mostre mensagem de sucesso
- Use `useState()` do React

### Exercício 4: Dark Mode
**Dificuldade:** ⭐⭐⭐ Avançado

Adicione toggle para dark/light mode:
- Crie variáveis CSS para cores
- Toggle com botão no Header
- Salve preferência em localStorage

---

## 🔄 Comparar Versões

Para ver a diferença entre inicial e final:

```bash
# Ver commits entre branches
git log main-starter..main --oneline

# Comparar arquivos específicos
git diff main-starter main -- src/components/Hero.jsx
```

---

## 🤝 Dicas Importantes

1. **Commit frequentemente** — Um commit por feature pequena
2. **Mensagens claras** — `git commit -m "feat: adicionar newsletter ao footer"`
3. **Teste no mobile** — Use `npm run dev -- --host` para testar em outros dispositivos
4. **Use DevTools** — F12 para inspecionar elementos CSS
5. **Leia a documentação** — React docs em https://react.dev

---

## 📞 Referências

- [React Official Docs](https://react.dev)
- [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Desenvolvido por Hudson Neves** | [GitHub](https://github.com/HudsonNeves)

Bom aprendizado! 🚀
