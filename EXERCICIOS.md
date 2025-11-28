# 🔨 Exercícios Práticos — Healthy Life Landing

Série de exercícios progressivos para dominar React, CSS e Git trabalhando no projeto real.

---

## 📋 EXERCÍCIO 1: Personalizar Cores (⭐ Fácil)

**Objetivo:** Aprender a trabalhar com variáveis CSS e cores globais

**Tempo estimado:** 30 minutos

### Tarefa
Mude a paleta de cores do projeto de verde para **azul** ou **roxo**.

### Passo a passo

1. **Abra `src/index.css`** e procure por:
   ```css
   :root {
     --green: #10b981;
     --light-green: #ecfdf5;
   }
   ```

2. **Substitua por sua cor escolhida:**
   ```css
   :root {
     --blue: #3b82f6;        /* azul claro */
     --blue-dark: #1d4ed8;   /* azul escuro */
     --blue-light: #dbeafe;  /* azul bem claro */
   }
   ```

3. **Atualize todas as referências** nos componentes CSS:
   ```bash
   # No Header.css: 
   # background: var(--green) → background: var(--blue)
   
   # No Hero.css:
   # color: #059669 → color: var(--blue-dark)
   ```

4. **Teste no navegador:**
   ```bash
   npm run dev
   ```

5. **Commit seu trabalho:**
   ```bash
   git add .
   git commit -m "feat: change color scheme from green to blue"
   git push origin main
   ```

### Desafio Extra
- [ ] Crie uma variável CSS para cada cor usada
- [ ] Use `rgb()` em vez de hex para explorar transparências
- [ ] Adicione comentários explicando cada cor

---

## 📋 EXERCÍCIO 2: Criar Nova Seção CTA (⭐⭐ Médio)

**Objetivo:** Criar um componente React completo do zero

**Tempo estimado:** 1 hora

### Tarefa
Crie uma seção "Call To Action" (CTA) chamativa entre **Benefits** e **Testimonials**.

### Passo a passo

1. **Crie o componente React** `src/components/CTA.jsx`:
   ```jsx
   import "./CTA.css";

   export default function CTA() {
     return (
       <section className="cta">
         <div className="cta-content">
           <h2>Pronto para transformar sua vida?</h2>
           <p>Junte-se a milhares de pessoas que já começaram sua jornada.</p>
           <button className="cta-button">Começar Agora</button>
         </div>
       </section>
     );
   }
   ```

2. **Crie o arquivo CSS** `src/components/CTA.css`:
   ```css
   .cta {
     background: linear-gradient(135deg, #10b981 0%, #059669 100%);
     color: white;
     padding: 4rem 2rem;
     text-align: center;
     margin: 4rem 0;
   }

   .cta-content {
     max-width: 600px;
     margin: 0 auto;
   }

   .cta h2 {
     font-size: 2rem;
     margin-bottom: 1rem;
   }

   .cta p {
     font-size: 1.1rem;
     margin-bottom: 2rem;
     opacity: 0.9;
   }

   .cta-button {
     background: white;
     color: #059669;
     padding: 1rem 2rem;
     border: none;
     border-radius: 8px;
     font-weight: bold;
     cursor: pointer;
     transition: all 0.3s ease;
   }

   .cta-button:hover {
     transform: translateY(-2px);
     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
   }
   ```

3. **Importe no `App.jsx`:**
   ```jsx
   import CTA from "./components/CTA";

   function App() {
     return (
       <>
         <Header />
         <Hero />
         <Benefits />
         <CTA />           {/* ← Adicione aqui */}
         <Testimonials />
         <Footer />
       </>
     );
   }
   ```

4. **Teste e verifique:**
   ```bash
   npm run dev
   ```

5. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add CTA section between benefits and testimonials"
   git push origin main
   ```

### Desafio Extra
- [ ] Adicione ícone/emoji antes do título
- [ ] Faça o botão abrir um modal ou scroll para email
- [ ] Adicione animação ao aparecer (fade-in)

---

## 📋 EXERCÍCIO 3: Validação de Newsletter (⭐⭐⭐ Avançado)

**Objetivo:** Aprender React Hooks (useState) e validação de formulários

**Tempo estimado:** 1.5 horas

### Tarefa
Faça o formulário de newsletter do Footer funcionar com validação.

### Passo a passo

1. **Edite `src/components/Footer.jsx`** — Crie um componente Newsletter:
   ```jsx
   import { useState } from "react";

   function Newsletter() {
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);

     const handleSubscribe = (e) => {
       e.preventDefault();
       
       // Validação simples
       if (!email.includes("@")) {
         setMessage("❌ Email inválido!");
         return;
       }

       // Simular envio
       setLoading(true);
       setTimeout(() => {
         setMessage("✅ Inscrito com sucesso!");
         setEmail("");
         setLoading(false);
       }, 1000);
     };

     return (
       <div className="newsletter">
         <h4>Newsletter</h4>
         <p>Receba dicas semanais de saúde.</p>
         <form onSubmit={handleSubscribe}>
           <input
             type="email"
             placeholder="Seu email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             disabled={loading}
           />
           <button type="submit" disabled={loading}>
             {loading ? "Enviando..." : "Inscrever"}
           </button>
         </form>
         {message && <p className="newsletter-message">{message}</p>}
       </div>
     );
   }

   export default Newsletter;
   ```

2. **Atualize o Footer para usar o componente:**
   ```jsx
   import Newsletter from "./Newsletter"; // ← importar

   // ... dentro do return
   <Newsletter />
   ```

3. **Adicione CSS para mensagens:**
   ```css
   .newsletter-message {
     margin-top: 1rem;
     padding: 0.75rem;
     border-radius: 6px;
     background: rgba(255, 255, 255, 0.2);
   }
   ```

4. **Teste:**
   ```bash
   npm run dev
   # Teste digitando um email inválido
   # Depois valide: seu@email.com
   ```

5. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add email validation to newsletter form"
   git push origin main
   ```

### Desafio Extra
- [ ] Salve emails em localStorage
- [ ] Mostre total de inscritos
- [ ] Integre com uma API real (Mailchimp, etc)

---

## 📋 EXERCÍCIO 4: Modo Escuro (Dark Mode) (⭐⭐⭐ Avançado)

**Objetivo:** CSS variables, localStorage e state management

**Tempo estimado:** 2 horas

### Tarefa
Adicione um toggle para dark/light mode com persistência.

### Passo a passo

1. **Crie um hook customizado** `src/hooks/useDarkMode.js`:
   ```jsx
   import { useState, useEffect } from "react";

   export function useDarkMode() {
     const [isDark, setIsDark] = useState(() => {
       // Recupera do localStorage
       const saved = localStorage.getItem("darkMode");
       return saved ? JSON.parse(saved) : false;
     });

     useEffect(() => {
       // Salva no localStorage
       localStorage.setItem("darkMode", JSON.stringify(isDark));
       
       // Aplica a classe no HTML
       if (isDark) {
         document.documentElement.classList.add("dark");
       } else {
         document.documentElement.classList.remove("dark");
       }
     }, [isDark]);

     return [isDark, setIsDark];
   }
   ```

2. **Atualize `src/components/Header.jsx`:**
   ```jsx
   import { useDarkMode } from "../hooks/useDarkMode";

   export default function Header() {
     const [isDark, setIsDark] = useDarkMode();

     return (
       <header className="header">
         <div className="header-container">
           <div className="logo">
             <span className="logo-icon">🌿</span>
             <h1>Vida Saudável</h1>
           </div>
           <nav className="nav">
             {/* ... links ... */}
             <button 
               onClick={() => setIsDark(!isDark)}
               className="theme-toggle"
             >
               {isDark ? "☀️" : "🌙"}
             </button>
           </nav>
         </div>
       </header>
     );
   }
   ```

3. **Atualize `src/index.css`** com variáveis para dark mode:
   ```css
   :root {
     --bg: white;
     --text: #1f2937;
     --border: #e5e7eb;
   }

   :root.dark {
     --bg: #1f2937;
     --text: white;
     --border: #4b5563;
   }

   body {
     background: var(--bg);
     color: var(--text);
     transition: all 0.3s ease;
   }
   ```

4. **Atualize componentes para usar variáveis:**
   ```css
   /* Em cada .css */
   .benefit-card {
     background: var(--bg);
     color: var(--text);
     border: 1px solid var(--border);
   }
   ```

5. **Teste:**
   ```bash
   npm run dev
   # Clique no botão 🌙/☀️ no header
   # Recarregue — tema deve ser preservado
   ```

6. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add dark mode with localStorage persistence"
   git push origin main
   ```

### Desafio Extra
- [ ] Use CSS transitions mais suaves
- [ ] Adicione animação ao toggle
- [ ] Sincronize com preferência do sistema (prefers-color-scheme)

---

## 📋 EXERCÍCIO 5: Integração com Supabase (⭐⭐⭐⭐ Expert)

**Objetivo:** Backend real, autenticação e banco de dados

**Tempo estimado:** 3 horas

### Tarefa
Adicione um sistema simples de contato que salva no Supabase.

**Pré-requisito:** Conta Supabase gratuita (https://supabase.com)

### Passos resumidos:
1. Crie tabela "contacts" no Supabase
2. Instale `@supabase/supabase-js`
3. Crie arquivo `src/api/supabase.js`
4. Atualize Footer para salvar contatos
5. Mostre lista de contatos recentes

---

## 📊 Pontuação de Exercícios

- Exercício 1: **100 pontos** (fácil)
- Exercício 2: **200 pontos** (médio)
- Exercício 3: **300 pontos** (avançado)
- Exercício 4: **350 pontos** (avançado)
- Exercício 5: **500 pontos** (expert)

**Total máximo: 1450 pontos**

---

## 🎓 Conceitos Aprendidos

| Exercício | Conceitos |
|-----------|-----------|
| 1 | CSS variables, cor, tema |
| 2 | Componentes React, JSX, import/export |
| 3 | React Hooks (useState), formulários, validação |
| 4 | useEffect, localStorage, CSS dinamizado |
| 5 | API REST, backend, autenticação |

---

## ✅ Checklist de Submissão

Quando terminar cada exercício:

- [ ] Código funciona sem erros
- [ ] Passei no `npm run lint`
- [ ] Fiz commit com mensagem clara
- [ ] Push para o GitHub
- [ ] Abri um Pull Request (opcional)

---

## 🆘 Precisa de Ajuda?

1. **Erro no navegador?** → F12 > Console
2. **Código não funciona?** → Verifique indentação e sintaxe
3. **Git com problema?** → `git status` e `git log`
4. **Dúvida sobre React?** → https://react.dev/learn

---

**Boa sorte! 🚀**

Hudson Neves
