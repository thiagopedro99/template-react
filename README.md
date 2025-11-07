# React Vite Template

Um template moderno e completo para desenvolvimento de aplicações React, construído com as melhores práticas e tecnologias atuais.

## Visão Geral

Este template fornece uma base sólida para iniciar projetos React com TypeScript, incluindo componentes reutilizáveis, sistema de temas, gerenciamento de estado, roteamento e muito mais. Projetado para ser escalável e fácil de manter.

## Características Principais

- **React 19** com TypeScript para desenvolvimento type-safe
- **Vite** para build ultra-rápido e Hot Module Replacement otimizado
- **Styled Components** para estilização com CSS-in-JS
- **React Router** para navegação client-side
- **Zustand** para gerenciamento de estado global leve e eficiente
- **Axios** configurado para requisições HTTP
- **Sistema de temas** (Light/Dark) totalmente customizável
- **Componentes reutilizáveis** prontos para uso
- **Sistema de notificações** (Toast) integrado
- **Estrutura de pastas** organizada e escalável
- **ESLint** configurado para qualidade de código
- **Path aliases** para imports mais limpos

## Tecnologias Utilizadas

### Core
- React 19.1.0
- TypeScript 5.8.3
- Vite 6.3.5

### UI e Estilização
- Styled Components 6.1.18
- Lucide React 0.544.0 (ícones)

### Roteamento e Estado
- React Router DOM 7.6.0
- Zustand 5.0.4

### HTTP Client
- Axios 1.9.0

### Ferramentas de Desenvolvimento
- ESLint 9.25.0
- TypeScript ESLint 8.30.1
- Babel Plugin Styled Components 2.1.4

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd meu-projeto
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
VITE_API_BASE_URL=https://api.example.com/v1
VITE_APP_NAME=Meu Template React
VITE_APP_VERSION=1.0.0
VITE_ENV=development
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (imagens, fontes, etc)
├── components/       # Componentes reutilizáveis
│   ├── common/      # Componentes básicos (Button, Input, Card, etc)
│   ├── layout/      # Layout principal da aplicação
│   ├── navbar/      # Barra de navegação
│   ├── footer/      # Rodapé
│   └── toast/       # Sistema de notificações
├── hooks/           # Custom React hooks
├── pages/           # Páginas da aplicação
│   ├── home/
│   ├── componentsDemo/
│   ├── gettingStarted/
│   └── notFound/
├── routes/          # Configuração de rotas
├── services/        # Serviços de API e integrações
├── stores/          # Gerenciamento de estado (Zustand)
│   ├── App/        # Estado global da aplicação
│   └── Data/       # Estado de dados específicos
├── styles/          # Temas e estilos globais
│   └── themes/     # Temas light e dark
├── utils/           # Funções utilitárias
├── App.tsx          # Componente raiz
└── main.tsx         # Entry point
```

## Scripts Disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com hot reload.

### Build

```bash
npm run build
```

Cria a build otimizada para produção na pasta `dist/`.

### Preview

```bash
npm run preview
```

Visualiza a build de produção localmente.

### Linting

```bash
npm run lint
```

Executa o ESLint para verificar problemas no código.

### Type Check

```bash
npm run type-check
```

Verifica os tipos TypeScript sem emitir arquivos.

## Componentes Disponíveis

O template inclui uma biblioteca completa de componentes reutilizáveis:

### Layout
- **Container** - Container responsivo com larguras máximas configuráveis
- **Flex** - Layout flexível com props para direção, alinhamento e espaçamento
- **Grid** - Sistema de grid responsivo

### Formulários
- **Button** - Botão com múltiplas variantes (primary, secondary, outline, ghost)
- **Input** - Input com label, validação e mensagens de erro
- **Select** - Select customizado com suporte a opções desabilitadas
- **Checkbox** - Checkbox estilizado com label opcional

### Feedback
- **Modal** - Modal customizável com overlay e animações
- **ConfirmModal** - Modal de confirmação pré-configurado
- **Toast** - Sistema de notificações (success, error, warning, info)
- **Loading** - Indicador de carregamento com tamanhos variados
- **Skeleton** - Placeholders de carregamento

### Superfície
- **Card** - Container de conteúdo com variantes (default, elevated, outlined)

### Navegação
- **Navbar** - Barra de navegação responsiva com menu mobile
- **Footer** - Rodapé customizável

Para ver todos os componentes em ação, acesse a rota `/components` no aplicativo.

## Gerenciamento de Estado

O template utiliza Zustand para gerenciamento de estado global. Exemplos de stores incluídos:

### App Store

Gerencia o estado global da aplicação:

```typescript
import { useAppStore } from '@stores/App/appStore';

const { theme, toggleTheme, language, setLanguage } = useAppStore();
```

**Estados disponíveis:**
- `theme` - Tema atual (light/dark)
- `language` - Idioma da aplicação
- `sidebarOpen` - Estado da sidebar
- `modalOpen` - Estado de modals

### Data Store

Exemplo de store para gerenciar dados da aplicação:

```typescript
import { useDataStore } from '@stores/Data/dataStore';

const { items, addItem, updateItem, removeItem } = useDataStore();
```

## API e Serviços

### Configuração Base

O template inclui um cliente Axios pré-configurado em `src/services/api.ts`:

```typescript
import { api } from '@services/api';

// GET
const response = await api.get('/users');

// POST
const response = await api.post('/users', userData);

// PUT
const response = await api.put('/users/1', userData);

// DELETE
const response = await api.delete('/users/1');
```

### Interceptors

Os interceptors já configurados incluem:
- Adição automática de tokens de autenticação
- Tratamento global de erros
- Logging em modo desenvolvimento
- Redirecionamento em caso de erro 401

### Serviços Personalizados

Crie serviços específicos em `src/services/`:

```typescript
// src/services/userService.ts
class UserService {
  private basePath = '/users';

  async list() {
    return api.get(this.basePath);
  }

  async getById(id: string) {
    return api.get(`${this.basePath}/${id}`);
  }
}

export const userService = new UserService();
```

## Sistema de Temas

### Estrutura dos Temas

Os temas são definidos em `src/styles/themes/`:

- `light.ts` - Tema claro
- `dark.ts` - Tema escuro

### Customização

Para modificar as cores e estilos:

```typescript
// src/styles/themes/light.ts
export const lightTheme = {
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
    background: '#fafafa',
    surface: '#ffffff',
    // ...
  },
  // ...
};
```

### Alternância de Tema

```typescript
import { useAppStore } from '@stores/App/appStore';

const { theme, toggleTheme } = useAppStore();

// Alternar tema
<button onClick={toggleTheme}>
  Tema: {theme}
</button>
```

## Roteamento

### Adicionar Nova Rota

1. Crie a página em `src/pages/`:

```typescript
// src/pages/minhaPage/index.tsx
import Layout from '@components/layout';

const MinhaPage = () => {
  return (
    <Layout pageTitle="Minha Página">
      <h1>Conteúdo</h1>
    </Layout>
  );
};

export default MinhaPage;
```

2. Adicione a rota em `src/routes/routes.tsx`:

```typescript
import MinhaPage from '@pages/minhaPage';

const routes = [
  {
    path: "/",
    privateRoute: false,
    routes: [
      // ...
      ["/minha-page", <MinhaPage />],
    ],
  },
];
```

## Path Aliases

O projeto está configurado com aliases para imports mais limpos:

```typescript
import { Button } from '@components/common';
import { useAppStore } from '@stores/App/appStore';
import { api } from '@services/api';
import Layout from '@components/layout';
```

**Aliases disponíveis:**
- `@components/*` → `src/components/*`
- `@pages/*` → `src/pages/*`
- `@stores/*` → `src/stores/*`
- `@services/*` → `src/services/*`
- `@hooks/*` → `src/hooks/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`
- `@assets/*` → `src/assets/*`
- `@routes/*` → `src/routes/*`
- `@actions/*` → `src/actions/*`

## Build para Produção

### Otimizações Incluídas

O template está configurado com várias otimizações de build:

- **Code splitting** automático por vendors
- **Tree shaking** habilitado
- **CSS minification**
- **Compressão de assets**
- **Chunks otimizados** (react-vendor, ui-vendor, state-vendor)

### Configuração de Build

Personalize em `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // ...
  },
});
```

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças seguindo o padrão Conventional Commits
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Conventional Commits

Este projeto segue a convenção de [Conventional Commits](https://www.conventionalcommits.org/). Use os seguintes prefixos:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação, falta de ponto e vírgula, etc (sem mudança de código)
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `chore:` - Atualização de dependências, configurações, etc

**Exemplos:**
```bash
git commit -m "feat: adiciona componente Accordion"
git commit -m "fix: corrige bug no modal de confirmação"
git commit -m "docs: atualiza documentação do componente Button"
git commit -m "chore: atualiza dependências do projeto"
```

### Diretrizes

- Mantenha o código consistente com o estilo existente
- Adicione testes quando apropriado
- Atualize a documentação conforme necessário
- Certifique-se de que o lint passa antes de commitar
- Use commits atômicos e descritivos

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Thiago Silva**

- LinkedIn: [linkedin.com/in/thiago-silva](https://www.linkedin.com/in/thiago-pedro-da-silva/)
- GitHub: [github.com/thiagopedro99](https://github.com/thiagopedro99)
