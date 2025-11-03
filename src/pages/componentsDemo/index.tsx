// src/pages/componentsDemo/index.tsx
import { useState } from 'react';
import Layout from '@components/layout';
import {
  Button,
  Card,
  Input,
  Modal,
  ConfirmModal,
  Loading,
  InlineLoading,
  Checkbox,
  Select,
  Flex,
  Grid,
  Skeleton,
} from '@components/common';
import { useToast } from '@components/toast';
import { Code } from 'lucide-react';
import { DemoSection, SectionHeader, SectionTitle } from './styles';
import { codeExamples } from '@utils/codeExamples';
import MultiCodeBlock from '@components/common/MultiCodeBlock';

const ComponentsDemo = () => {
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checked, setChecked] = useState(false);
  
  // Modal de código
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [currentCodeBlocks, setCurrentCodeBlocks] = useState<Array<{title: string; code: string}>>([]);
  const [currentCodeTitle, setCurrentCodeTitle] = useState('');

  const handleLoadingDemo = () => {
    setLoadingOverlay(true);
    setTimeout(() => {
      setLoadingOverlay(false);
      toast.success('Carregamento concluído!');
    }, 2000);
  };

  const showCode = (blocks: Array<{title: string; code: string}>, title: string) => {
    setCurrentCodeBlocks(blocks);
    setCurrentCodeTitle(title);
    setCodeModalOpen(true);
  };

  return (
    <Layout pageTitle="Demo de Componentes">
      <Flex $direction="column" $gap="2rem">

        {/* Buttons */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Botões</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.button, 'Button')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $gap="1rem" $wrap>
              <Button $variant="primary">Primary</Button>
              <Button $variant="secondary">Secondary</Button>
              <Button $variant="outline">Outline</Button>
              <Button $variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </Flex>

            <Flex $gap="1rem" $wrap style={{ marginTop: '1rem' }}>
              <Button $size="sm">Small</Button>
              <Button $size="md">Medium</Button>
              <Button $size="lg">Large</Button>
            </Flex>
          </Card>
        </DemoSection>

        {/* Inputs */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Inputs</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.input, 'Input')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Grid $columns={2} $gap="1rem">
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                helperText="Nunca compartilharemos seu email"
              />
              <Input
                label="Senha"
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Com erro"
                error="Este campo é obrigatório"
                placeholder="Campo com erro"
              />
              <Input
                label="Desabilitado"
                disabled
                placeholder="Campo desabilitado"
              />
              <Input
                label="Full Width"
                $fullWidth
                placeholder="Campo de largura total"
              />
            </Grid>
          </Card>
        </DemoSection>

        {/* Select */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Select</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.select, 'Select')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Grid $columns={2} $gap="1rem">
              <Select
                label="Escolha uma opção"
                placeholder="Selecione..."
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[
                  { value: '1', label: 'Opção 1' },
                  { value: '2', label: 'Opção 2' },
                  { value: '3', label: 'Opção 3' },
                  { value: '4', label: 'Opção 4 (Desabilitada)', disabled: true },
                ]}
              />
              <Select
                label="Com erro"
                error="Selecione uma opção"
                options={[
                  { value: 'a', label: 'Opção A' },
                  { value: 'b', label: 'Opção B' },
                ]}
              />
            </Grid>
          </Card>
        </DemoSection>

        {/* Checkbox */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Checkbox</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.checkbox, 'Checkbox')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $direction="column" $gap="0.5rem" $align="start">
              <Checkbox
                label="Aceito os termos e condições"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <Checkbox label="Deseja receber novidades?" />
              <Checkbox label="Opção desabilitada" disabled />
              <Checkbox label="Marcado e desabilitado" checked disabled />
            </Flex>
          </Card>
        </DemoSection>

        {/* Modal */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Modais</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.modal, 'Modal')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $gap="1rem" $wrap>
              <Button onClick={() => setModalOpen(true)}>
                Abrir Modal
              </Button>
              <Button onClick={() => setConfirmOpen(true)}>
                Modal de Confirmação
              </Button>
            </Flex>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Exemplo de Modal"
              footer={
                <Flex $justify="end" $gap="0.5rem">
                  <Button $variant="outline" onClick={() => setModalOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => {
                    setModalOpen(false);
                    toast.success('Ação confirmada!');
                  }}>
                    Confirmar
                  </Button>
                </Flex>
              }
            >
              <p>Este é um exemplo de modal customizável.</p>
              <p>Você pode colocar qualquer conteúdo aqui!</p>
            </Modal>

            <ConfirmModal
              isOpen={confirmOpen}
              onClose={() => setConfirmOpen(false)}
              onConfirm={() => toast.info('Você confirmou a ação!')}
              title="Confirmar ação"
              message="Tem certeza que deseja realizar esta ação?"
            />
          </Card>
        </DemoSection>

        {/* Loading */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Loading</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.loading, 'Loading')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $gap="2rem" $wrap $align="center">
              <div>
                <p style={{ marginBottom: '0.5rem' }}>Tamanhos:</p>
                <Flex $gap="1rem" $align="center">
                  <Loading size="xs" />
                  <Loading size="sm" />
                  <Loading size="md" />
                  <Loading size="lg" />
                </Flex>
              </div>

              <div>
                <p style={{ marginBottom: '0.5rem' }}>Com texto:</p>
                <Loading size="md" text="Carregando..." />
              </div>

              <div>
                <Button>
                  Botão <InlineLoading /> Carregando
                </Button>
              </div>

              <div>
                <Button onClick={handleLoadingDemo}>
                  Testar Loading Overlay
                </Button>
              </div>
            </Flex>

            {loadingOverlay && <Loading overlay text="Processando..." />}
          </Card>
        </DemoSection>

        {/* Cards */}
        <DemoSection>
          <SectionHeader>
            <SectionTitle>Cards</SectionTitle>
            <Button 
              $size="sm" 
              $variant="outline"
              onClick={() => showCode(codeExamples.card, 'Card')}
            >
              <Code size={16} /> Ver Código
            </Button>
          </SectionHeader>
          
          <Grid $columns={3} $gap="1rem">
            <Card $variant="default">
              <h3>Card Padrão</h3>
              <p>Sombra média com hover</p>
            </Card>
            <Card $variant="elevated">
              <h3>Card Elevado</h3>
              <p>Sombra maior com animação</p>
            </Card>
            <Card $variant="outlined">
              <h3>Card Outlined</h3>
              <p>Apenas borda</p>
            </Card>
          </Grid>
        </DemoSection>

        {/* Toasts */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Toasts (Notificações)</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.toast, 'Toast')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $gap="1rem" $wrap>
              <Button onClick={() => toast.success('Sucesso!')}>
                Success
              </Button>
              <Button onClick={() => toast.error('Erro!')}>
                Error
              </Button>
              <Button onClick={() => toast.warning('Atenção!')}>
                Warning
              </Button>
              <Button onClick={() => toast.info('Informação!')}>
                Info
              </Button>
            </Flex>
          </Card>
        </DemoSection>

        {/* Skeleton */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Skeleton</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.skeleton, 'Skeleton')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>

            <Flex $direction="column" $gap="2rem">
              <div>
                <p style={{ marginBottom: '0.5rem' }}>Texto:</p>
                <Flex $direction="column" $gap="0.5rem">
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </Flex>
              </div>

              <div>
                <p style={{ marginBottom: '0.5rem' }}>Circular (Avatar):</p>
                <Flex $gap="1rem">
                  <Skeleton variant="circular" width="40px" />
                  <Skeleton variant="circular" width="60px" />
                  <Skeleton variant="circular" width="80px" />
                </Flex>
              </div>

              <div>
                <p style={{ marginBottom: '0.5rem' }}>Retangular (Card/Image):</p>
                <Skeleton variant="rectangular" height="200px" />
              </div>
            </Flex>
          </Card>
        </DemoSection>

        {/* Flex */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Flex (Layout)</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.flex, 'Flex')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $direction="column" $gap="1rem">
              <div>
                <p style={{ marginBottom: '0.5rem' }}>Horizontal (padrão):</p>
                <Flex $gap="0.5rem">
                  <Card $padding="1rem">Item 1</Card>
                  <Card $padding="1rem">Item 2</Card>
                  <Card $padding="1rem">Item 3</Card>
                </Flex>
              </div>
              
              <div>
                <p style={{ marginBottom: '0.5rem' }}>Vertical:</p>
                <Flex $direction="column" $gap="0.5rem">
                  <Card $padding="1rem">Item 1</Card>
                  <Card $padding="1rem">Item 2</Card>
                  <Card $padding="1rem">Item 3</Card>
                </Flex>
              </div>
            </Flex>
          </Card>
        </DemoSection>

        {/* Grid */}
        <DemoSection>
          <Card>
            <SectionHeader>
              <SectionTitle>Grid (Layout)</SectionTitle>
              <Button 
                $size="sm" 
                $variant="outline"
                onClick={() => showCode(codeExamples.grid, 'Grid')}
              >
                <Code size={16} /> Ver Código
              </Button>
            </SectionHeader>
            
            <Flex $direction="column" $gap="1.5rem">
              <div>
                <p style={{ marginBottom: '0.5rem' }}>2 Colunas:</p>
                <Grid $columns={2} $gap="0.5rem">
                  <Card $padding="1rem">Item 1</Card>
                  <Card $padding="1rem">Item 2</Card>
                  <Card $padding="1rem">Item 3</Card>
                  <Card $padding="1rem">Item 4</Card>
                </Grid>
              </div>
              
              <div>
                <p style={{ marginBottom: '0.5rem' }}>3 Colunas:</p>
                <Grid $columns={3} $gap="0.5rem">
                  <Card $padding="1rem">Item 1</Card>
                  <Card $padding="1rem">Item 2</Card>
                  <Card $padding="1rem">Item 3</Card>
                </Grid>
              </div>
            </Flex>
          </Card>
        </DemoSection>
      </Flex>

      {/* Modal de Código */}
      <Modal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
        title={`Código: ${currentCodeTitle}`}
        size="lg"
      >
        <MultiCodeBlock blocks={currentCodeBlocks} />
      </Modal>
    </Layout>
  );
};

export default ComponentsDemo;