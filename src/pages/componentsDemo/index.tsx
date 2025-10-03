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
import { DemoSection, SectionTitle } from './styles';

const ComponentsDemo = () => {
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checked, setChecked] = useState(false);

  const handleLoadingDemo = () => {
    setLoadingOverlay(true);
    setTimeout(() => {
      setLoadingOverlay(false);
      toast.success('Carregamento concluído!');
    }, 2000);
  };

  return (
    <Layout pageTitle="Demo de Componentes">
      <Flex $direction="column" $gap="2rem">

        {/* Buttons */}
        <DemoSection>
          <Card>
            <SectionTitle>Botões</SectionTitle>
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
            <SectionTitle>Inputs</SectionTitle>
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
            <SectionTitle>Select</SectionTitle>
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
            <SectionTitle>Checkbox</SectionTitle>
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
            <SectionTitle>Modais</SectionTitle>
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
            <SectionTitle>Loading</SectionTitle>
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
          <SectionTitle>Cards</SectionTitle>
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
            <SectionTitle>Toasts (Notificações)</SectionTitle>
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
        <DemoSection>
          <Card>
            <SectionTitle>Skeleton</SectionTitle>

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
      </Flex>
    </Layout>
  );
};

export default ComponentsDemo;