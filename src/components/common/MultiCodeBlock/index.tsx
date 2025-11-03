// src/components/common/MultiCodeBlock/index.tsx
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { 
  MultiCodeBlockWrapper, 
  CodeSection, 
  SectionHeader, 
  SectionTitle, 
  CopyButton,
  CodeContent,
  TokenSpan 
} from './styles';
import { tokenize } from './highlighter';
import { MultiCodeBlockProps } from './types';



export const MultiCodeBlock = ({ blocks, language = 'tsx' }: MultiCodeBlockProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <MultiCodeBlockWrapper>
      {blocks.map((block, index) => {
        const tokens = tokenize(block.code, language);
        const isCopied = copiedIndex === index;

        return (
          <CodeSection key={index}>
            <SectionHeader>
              <SectionTitle>{block.title}</SectionTitle>
              <CopyButton 
                onClick={() => handleCopy(block.code, index)}
                title={isCopied ? 'Copiado!' : 'Copiar código'}
              >
                {isCopied ? (
                  <>
                    <Check size={16} />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar</span>
                  </>
                )}
              </CopyButton>
            </SectionHeader>
            
            <CodeContent>
              <pre>
                <code>
                  {tokens.map((token, tokenIndex) => (
                    <TokenSpan key={tokenIndex} $type={token.type}>
                      {token.content}
                    </TokenSpan>
                  ))}
                </code>
              </pre>
            </CodeContent>
          </CodeSection>
        );
      })}
    </MultiCodeBlockWrapper>
  );
};

export default MultiCodeBlock;