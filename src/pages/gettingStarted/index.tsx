// src/pages/gettingStarted/index.tsx
import { useNavigate } from 'react-router-dom';
import Layout from '@components/layout';
import { Button, Card, Flex } from '@components/common';
import {
    Section,
    SectionTitle,
    CodeBlock,
    List,
    ListItem,
    Highlight,
    StepNumber,
    StepContainer,
    FolderTree,
    FolderItem,
    InfoBox,
    TokenSpan
} from './styles';
import { Code, Folder, Rocket, Settings, Package, FileCode, BookOpen } from 'lucide-react';
import { tokenize } from '@components/common/MultiCodeBlock/highlighter';

// Componente para renderizar código com syntax highlighting
const HighlightedCode = ({ code, language = 'tsx' }: { code: string; language?: string }) => {
    const tokens = tokenize(code, language);

    return (
        <CodeBlock>
            <code >
                {tokens.map((token, index) => (
                    <TokenSpan key={index} $type={token.type}>
                        {token.content}
                    </TokenSpan>
                ))}
            </code>
        </CodeBlock>
    );
};

const GettingStarted = () => {
    const navigate = useNavigate();

    return (
        <Layout pageTitle="Getting Started - Guia de Início">
            <Flex $direction="column" $gap="2rem">

                {/* Header */}
                <Card>
                    <Flex $direction="column" $gap="1rem" $align="center" style={{ textAlign: 'center' }}>
                        <Rocket size={48} color="#1976d2" />
                        <h1 style={{ margin: 0 }}>Guia de Início Rápido</h1>
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                            Tudo que você precisa saber para começar a desenvolver com este template
                        </p>
                    </Flex>
                </Card>

                {/* Instalação */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <Package size={24} color="#1976d2" />
                            <SectionTitle>1. Instalação</SectionTitle>
                        </Flex>

                        <StepContainer>
                            <StepNumber>1</StepNumber>
                            <div>
                                <h4>Clone ou baixe o template</h4>
                                <HighlightedCode
                                    code={`git clone seu-repositorio.git meu-projeto
cd meu-projeto`}
                                    language="bash"
                                />
                            </div>
                        </StepContainer>

                        <StepContainer>
                            <StepNumber>2</StepNumber>
                            <div>
                                <h4>Instale as dependências</h4>
                                <HighlightedCode code="npm install" language="bash" />
                                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                                    Ou use yarn: <code>yarn install</code>
                                </p>
                            </div>
                        </StepContainer>

                        <StepContainer>
                            <StepNumber>3</StepNumber>
                            <div>
                                <h4>Configure as variáveis de ambiente</h4>
                                <HighlightedCode
                                    code="cp .env.example .env"
                                    language="bash"
                                />
                                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                                    Edite o arquivo <code>.env</code> com suas configurações
                                </p>
                            </div>
                        </StepContainer>

                        <StepContainer>
                            <StepNumber>4</StepNumber>
                            <div>
                                <h4>Inicie o servidor de desenvolvimento</h4>
                                <HighlightedCode code="npm run dev" language="bash" />
                                <InfoBox>
                                    ✨ O projeto estará rodando em <Highlight>http://localhost:5173</Highlight>
                                </InfoBox>
                            </div>
                        </StepContainer>
                    </Card>
                </Section>

                {/* Estrutura do Projeto */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <Folder size={24} color="#1976d2" />
                            <SectionTitle>2. Estrutura do Projeto</SectionTitle>
                        </Flex>

                        <p style={{ marginBottom: '1.5rem' }}>
                            O projeto segue uma estrutura organizada e escalável:
                        </p>

                        <FolderTree>
                            <FolderItem $level={0}>📁 src/</FolderItem>
                            <FolderItem $level={1}>📁 assets/ - Imagens, fontes, ícones</FolderItem>
                            <FolderItem $level={1}>📁 components/ - Componentes reutilizáveis</FolderItem>
                            <FolderItem $level={2}>📁 common/ - Componentes básicos (Button, Input, etc)</FolderItem>
                            <FolderItem $level={2}>📁 layout/ - Layout principal da aplicação</FolderItem>
                            <FolderItem $level={2}>📁 navbar/ - Barra de navegação</FolderItem>
                            <FolderItem $level={2}>📁 footer/ - Rodapé</FolderItem>
                            <FolderItem $level={2}>📁 toast/ - Sistema de notificações</FolderItem>
                            <FolderItem $level={1}>📁 hooks/ - Custom hooks React</FolderItem>
                            <FolderItem $level={1}>📁 pages/ - Páginas da aplicação</FolderItem>
                            <FolderItem $level={1}>📁 routes/ - Configuração de rotas</FolderItem>
                            <FolderItem $level={1}>📁 services/ - APIs e serviços externos</FolderItem>
                            <FolderItem $level={1}>📁 stores/ - Gerenciamento de estado (Zustand)</FolderItem>
                            <FolderItem $level={1}>📁 styles/ - Temas e estilos globais</FolderItem>
                            <FolderItem $level={1}>📁 utils/ - Funções utilitárias</FolderItem>
                        </FolderTree>
                    </Card>
                </Section>

                {/* Guias Rápidos */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <Code size={24} color="#1976d2" />
                            <SectionTitle>3. Guias Rápidos</SectionTitle>
                        </Flex>

                        <Flex $direction="column" $gap="2rem">
                            {/* Criar nova página */}
                            <div >
                                <h3>Como criar uma nova página</h3>
                                <List>
                                    <ListItem>
                                        <strong>1.</strong> Crie uma pasta em <code>src/pages/</code>
                                        <HighlightedCode
                                            code={`src/pages/minhaPage/
  ├── index.tsx
  └── styles.ts`}
                                            language="bash"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <strong>2.</strong> Crie o componente:
                                        <HighlightedCode
                                            code={`import Layout from '@components/layout';

const MinhaPage = () => {
  return (
    <Layout pageTitle="Minha Página">
      <h1>Conteúdo da página</h1>
    </Layout>
  );
};

export default MinhaPage;`}
                                            language="tsx"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <strong>3.</strong> Adicione a rota em <code>src/routes/routes.tsx</code>:
                                        <HighlightedCode
                                            code={`import MinhaPage from '@pages/minhaPage';

const routes = [
  {
    path: "/",
    privateRoute: false,
    routes: [
      // ... outras rotas
      ["/minha-page", <MinhaPage />],
    ],
  },
];`}
                                            language="tsx"
                                        />
                                    </ListItem>
                                </List>
                            </div>

                            {/* Usar componentes */}
                            <div>
                                <h3>Como usar os componentes</h3>
                                <HighlightedCode
                                    code={`import { Button, Card, Input, Modal } from '@components/common';

const MeuComponente = () => {
  return (
    <Card>
      <Input label="Nome" />
      <Button>Enviar</Button>
    </Card>
  );
};`}
                                    language="tsx"
                                />
                                <InfoBox style={{ marginTop: '1rem' }}>
                                    💡 Veja todos os componentes disponíveis na página{' '}
                                    <span
                                        onClick={() => navigate('/components')}
                                        style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        Components Demo
                                    </span>
                                </InfoBox>
                            </div>

                            {/* Gerenciar estado */}
                            <div>
                                <h3>Como gerenciar estado global (Zustand)</h3>
                                <HighlightedCode
                                    code={`import { useAppStore } from '@stores/App/appStore';

const MeuComponente = () => {
  const { theme, toggleTheme } = useAppStore();
  
  return (
    <button onClick={toggleTheme}>
      Tema atual: {theme}
    </button>
  );
};`}
                                    language="tsx"
                                />
                            </div>

                            {/* Fazer chamadas API */}
                            <div>
                                <h3>Como fazer chamadas de API</h3>
                                <HighlightedCode
                                    code={`import { api } from '@services/api';

// GET
const fetchUsers = async () => {
  const response = await api.get('/users');
  console.log(response.data);
};

// POST
const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  console.log(response.data);
};`}
                                    language="tsx"
                                />
                            </div>

                            {/* Usar notificações */}
                            <div>
                                <h3>Como usar notificações (Toast)</h3>
                                <HighlightedCode
                                    code={`import { useToast } from '@components/toast';

const MeuComponente = () => {
  const toast = useToast();
  
  const handleClick = () => {
    toast.success('Operação realizada com sucesso!');
    // toast.error('Erro ao realizar operação');
    // toast.warning('Atenção!');
    // toast.info('Informação importante');
  };
  
  return <button onClick={handleClick}>Mostrar Toast</button>;
};`}
                                    language="tsx"
                                />
                            </div>
                        </Flex>
                    </Card>
                </Section>

                {/* Customização */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <Settings size={24} color="#1976d2" />
                            <SectionTitle>4. Customização</SectionTitle>
                        </Flex>

                        <Flex $direction="column" $gap="2rem">
                            <div>
                                <h3>Modificar cores do tema</h3>
                                <p>Edite os arquivos em <code>src/styles/themes/</code>:</p>
                                <HighlightedCode
                                    code={`// src/styles/themes/light.ts
export const lightTheme = {
  colors: {
    primary: '#1976d2',      // Sua cor primária
    secondary: '#dc004e',    // Sua cor secundária
    background: '#fafafa',
    // ... outras cores
  },
  // ...
};`}
                                    language="tsx"
                                />
                            </div>

                            <div>
                                <h3>Configurar variáveis de ambiente</h3>
                                <p>Edite o arquivo <code>.env</code> na raiz do projeto:</p>
                                <HighlightedCode
                                    code={`# API Configuration
VITE_API_BASE_URL=https://sua-api.com/v1

# Application
VITE_APP_NAME=Meu App
VITE_APP_VERSION=1.0.0

# Environment
VITE_ENV=development`}
                                    language="bash"
                                />
                                <InfoBox style={{ marginTop: '1rem' }}>
                                    ⚠️ Lembre-se de adicionar <code>.env</code> no <code>.gitignore</code>
                                </InfoBox>
                            </div>

                            <div>
                                <h3>Personalizar o Layout</h3>
                                <p>Modifique o componente Layout em <code>src/components/layout/</code> para:</p>
                                <List>
                                    <ListItem>Alterar o menu de navegação</ListItem>
                                    <ListItem>Adicionar sidebar</ListItem>
                                    <ListItem>Modificar o footer</ListItem>
                                    <ListItem>Adicionar breadcrumbs</ListItem>
                                </List>
                            </div>
                        </Flex>
                    </Card>
                </Section>

                {/* Comandos Úteis */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <FileCode size={24} color="#1976d2" />
                            <SectionTitle>5. Comandos Úteis</SectionTitle>
                        </Flex>

                        <Flex $direction="column" $gap="1rem">
                            <div>
                                <strong>Desenvolvimento:</strong>
                                <HighlightedCode code="npm run dev" language="bash" />
                            </div>
                            <div>
                                <strong>Build para produção:</strong>
                                <HighlightedCode code="npm run build" language="bash" />
                            </div>
                            <div>
                                <strong>Preview da build:</strong>
                                <HighlightedCode code="npm run preview" language="bash" />
                            </div>
                            <div>
                                <strong>Lint (verificar código):</strong>
                                <HighlightedCode code="npm run lint" language="bash" />
                            </div>
                            <div>
                                <strong>Type check:</strong>
                                <HighlightedCode code="npm run type-check" language="bash" />
                            </div>
                        </Flex>
                    </Card>
                </Section>

                {/* Tecnologias */}
                <Section>
                    <Card>
                        <Flex $align="center" $gap="0.5rem" style={{ marginBottom: '1rem' }}>
                            <BookOpen size={24} color="#1976d2" />
                            <SectionTitle>Tecnologias Utilizadas</SectionTitle>
                        </Flex>
                        <Flex $direction="column" $gap="0.5rem" style={{ marginTop: '1rem' }}>
                            <p>• <strong>React 19</strong> - Biblioteca UI</p>
                            <p>• <strong>TypeScript</strong> - Tipagem estática</p>
                            <p>• <strong>Vite</strong> - Build tool ultra-rápido</p>
                            <p>• <strong>React Router</strong> - Navegação</p>
                            <p>• <strong>Styled Components</strong> - CSS-in-JS</p>
                            <p>• <strong>Zustand</strong> - Gerenciamento de estado</p>
                            <p>• <strong>Axios</strong> - HTTP client</p>
                            <p>• <strong>Lucide React</strong> - Ícones</p>
                        </Flex>
                    </Card>
                </Section>

                {/* Próximos Passos */}
                <Card style={{ backgroundColor: 'rgba(25, 118, 210, 0.05)' }}>
                    <Flex $direction="column" $gap="1.5rem" $align="center" style={{ textAlign: 'center' }}>
                       <Rocket size={48} color="#1976d2" />
                        <h2 style={{ margin: 0 }}>Pronto para começar? </h2>
                        <p style={{ margin: 0, maxWidth: '600px' }}>
                            Agora que você conhece o básico, explore os componentes disponíveis e comece a construir sua aplicação!
                        </p>
                        <Flex $gap="1rem" $wrap>
                            <Button
                                $variant="primary"
                                onClick={() => navigate('/components')}
                                $size='lg'
                            >
                                Ver Componentes
                            </Button>
                            <Button
                                $variant="outline"
                                onClick={() => navigate('/')}
                                $size='lg'
                            >
                                Voltar para Home
                            </Button>
                        </Flex>
                    </Flex>
                </Card>

            </Flex>
        </Layout>
    );
};

export default GettingStarted;