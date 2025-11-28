# 🌿 Healthy Life Landing

Uma página de destino moderna para promover hábitos de vida saudável, construída com **React 19** e **Vite**.

**Autor:** Hudson Neves

## 📋 Sobre o Projeto

Este é um aplicativo React de página única (SPA) otimizado para desempenho com Vite. Apresenta uma interface limpa e responsiva com componentes de Hero, Benefícios, Depoimentos e Footer.

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
- **Tailwind CSS** — Utilitários de estilo
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

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar e modificar.

---

**Desenvolvido por Hudson Neves** | [GitHub](https://github.com/HudsonNeves)
