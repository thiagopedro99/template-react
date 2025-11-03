// src/components/common/CodeBlock/highlighter.ts

interface Token {
  type: string;
  content: string;
}

export const tokenize = (code: string, language: string): Token[] => {
  const tokens: Token[] = [];
  
  if (language === 'tsx' || language === 'jsx' || language === 'typescript' || language === 'javascript') {
    // Padrões de regex
    const patterns = [
      // Comentários de linha
      { type: 'comment', regex: /\/\/.*$/gm },
      // Comentários de bloco
      { type: 'comment', regex: /\/\*[\s\S]*?\*\//g },
      // Strings com aspas duplas
      { type: 'string', regex: /"(?:[^"\\]|\\.)*"/g },
      // Strings com aspas simples
      { type: 'string', regex: /'(?:[^'\\]|\\.)*'/g },
      // Template strings
      { type: 'string', regex: /`(?:[^`\\]|\\.)*`/g },
      // Imports e exports
      { type: 'keyword', regex: /\b(import|export|from|default|as)\b/g },
      // Keywords JS/TS
      { type: 'keyword', regex: /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|throw|new|typeof|instanceof|this|super|class|extends|interface|type|enum|async|await|void|null|undefined|true|false)\b/g },
      // React hooks e tipos
      { type: 'react', regex: /\b(useState|useEffect|useCallback|useMemo|useRef|useContext|React|ReactNode|FC|Props)\b/g },
      // Tags JSX (componentes com letra maiúscula)
      { type: 'tag', regex: /<\/?[A-Z][a-zA-Z0-9]*\b/g },
      // Tags HTML (lowercase)
      { type: 'tag', regex: /<\/?[a-z][a-zA-Z0-9\-]*\b/g },
      // Propriedades JSX
      { type: 'property', regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*=)/g },
      // Números
      { type: 'number', regex: /\b\d+\.?\d*\b/g },
      // Funções (palavra seguida de parênteses)
      { type: 'function', regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g },
    ];

    // Array para armazenar todas as correspondências com suas posições
    const matches: Array<{ start: number; end: number; type: string; content: string }> = [];

    // Encontrar todas as correspondências
    patterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      
      while ((match = regex.exec(code)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          type: pattern.type,
          content: match[0]
        });
      }
    });

    // Ordenar por posição
    matches.sort((a, b) => a.start - b.start);

    // Remover sobreposições (manter a primeira correspondência)
    const cleanMatches: typeof matches = [];
    let lastEnd = 0;
    
    matches.forEach(match => {
      if (match.start >= lastEnd) {
        cleanMatches.push(match);
        lastEnd = match.end;
      }
    });

    // Construir tokens
    let currentPos = 0;
    cleanMatches.forEach(match => {
      // Adicionar texto antes do match
      if (match.start > currentPos) {
        tokens.push({
          type: 'text',
          content: code.slice(currentPos, match.start)
        });
      }
      
      // Adicionar o match
      tokens.push({
        type: match.type,
        content: match.content
      });
      
      currentPos = match.end;
    });

    // Adicionar texto restante
    if (currentPos < code.length) {
      tokens.push({
        type: 'text',
        content: code.slice(currentPos)
      });
    }
  } else {
    // Para outras linguagens, retornar como texto simples
    tokens.push({ type: 'text', content: code });
  }

  return tokens;
};
