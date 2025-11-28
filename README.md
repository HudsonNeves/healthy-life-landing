# 🌿 Healthy Life Landing

Uma página de destino moderna para promover hábitos de vida saudável, construída com **React 19** e **Vite**.

**Autor:** Hudson Neves

## 📋 Sobre o Projeto

Este é um aplicativo React de página única (SPA) otimizado para desempenho com Vite. Apresenta uma interface limpa e responsiva com componentes de Hero, Benefícios, Depoimentos e Footer.

> 📚 **Projeto Educativo:** Este repositório contém **duas versões** para fins didáticos e de aprendizagem progressiva.

## 🌳 Versões do Projeto

### `main` — Versão Final ⭐
A versão completa e polida com:
- ✅ Componentes enriquecidos com conteúdo real em português
- ✅ Estilos profissionais e responsivos (CSS moderno)
- ✅ Animações e transições suaves
- ✅ Estrutura HTML semântica e bem organizada
- ✅ Cards com emojis, descrições detalhadas e efeitos hover
- ✅ Footer com múltiplas seções (links, contato, newsletter)
- ✅ Header sticky com navegação melhorada
- ✅ Depoimentos com fotos (emojis), ratings e roles

**Use esta branch para:**
- Ver o resultado final e polido
- Usar como referência de qualidade produção
- Clonar e fazer deploy

```bash
git clone https://github.com/HudsonNeves/healthy-life-landing.git
cd healthy-life-landing
npm install
npm run dev
```

### `main-starter` — Versão Inicial 🎓
A versão básica e simplificada com:
- ✔️ Componentes minimalistas
- ✔️ Estrutura HTML simples
- ✔️ Estilos CSS básicos
- ✔️ Conteúdo em português funcional
- ✔️ Sem animações ou efeitos avançados

**Use esta branch para:**
- Aprender a estrutura fundamental
- Começar um projeto do zero
- Evoluir gradualmente os componentes
- Comparar e entender as melhorias

```bash
git clone -b main-starter https://github.com/HudsonNeves/healthy-life-landing.git
cd healthy-life-landing
npm install
npm run dev
```

## 🚀 Início Rápido

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn

### Instalação

```bash
cd healthy-life-landing
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre o servidor local em `http://localhost:5173` com Hot Module Replacement (HMR) ativado.

### Build para Produção

```bash
npm run build
```

Gera arquivos otimizados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

Serve a build de produção localmente para teste.

### Linting

```bash
npm run lint
```

Executa ESLint para verificar estilo de código.

## 🏗️ Estrutura do Projeto

```
healthy-life-landing/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   └── *.css           # Estilos de cada componente
│   ├── assets/             # Arquivos de mídia
│   ├── App.jsx             # Componente raiz
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Arquivos estáticos
├── index.html              # HTML principal
├── vite.config.js          # Configuração Vite
├── package.json            # Dependências e scripts
└── eslint.config.js        # Configuração ESLint
```

## 🛠️ Tecnologias

- **React 19** — Biblioteca de UI
- **Vite** — Build tool e dev server
- **Tailwind CSS** — Utilitários de estilo (compatível)
- **PostCSS** — Processamento de CSS
- **ESLint** — Linting de código
- **React Compiler** — Otimizações automáticas

## ⚙️ Configuração do React Compiler

O React Compiler está habilitado para otimizações automáticas. Veja a [documentação oficial](https://react.dev/learn/react-compiler) para mais detalhes.

> **Nota:** Pode impactar performance de dev e build. Para desabilitar, remova `babel-plugin-react-compiler` do `package.json`.

## 📦 Plugins Vite

Este projeto usa o plugin oficial `@vitejs/plugin-react` que implementa Fast Refresh via Babel.

Alternativa: `@vitejs/plugin-react-swc` (usa SWC para Fast Refresh, mais rápido).

## 📚 Convenções de Código

- Cada componente tem seu arquivo CSS ao lado (ex: `Header.jsx` + `Header.css`)
- Componentes são funcionais com Hooks
- Ativos estáticos em `public/` ou `src/assets/`
- Sem roteamento — página única

## 🤝 Contribuindo

Para contribuir, siga os passos em [.github/copilot-instructions.md](.github/copilot-instructions.md).

## 📊 Comparação: main vs main-starter

| Aspecto | main (Final) | main-starter (Inicial) |
|---------|-------------|----------------------|
| Conteúdo | Enriquecido e detalhado | Básico e funcional |
| Estilos | Profissionais e responsivos | Simples e utilitários |
| Animações | Sim (float, hover effects) | Não |
| Cards | Com ícones, descrições, efeitos | Apenas texto |
| Footer | 4 seções, newsletter | Apenas copyright |
| Header | Sticky, logo com emoji | Simples navbar |
| Depoimentos | 4 com ratings e roles | 2 com nome apenas |
| Benefícios | 6 com descrições | 4 com títulos |

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar e modificar.

---

**Desenvolvido por Hudson Neves** | [GitHub](https://github.com/HudsonNeves) | [Repositório](https://github.com/HudsonNeves/healthy-life-landing)
