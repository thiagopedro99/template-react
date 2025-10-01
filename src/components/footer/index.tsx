// src/components/footer/index.tsx
import { Container, Flex } from '@components/common';
import { FooterContainer, Link, Copyright } from './styles';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: FooterLink[];
}

const Footer = ({ 
  companyName = "Sua Empresa",
  year = new Date().getFullYear(),
  links = []
}: FooterProps) => {
  return (
    <FooterContainer>
      <Container $maxWidth="xl">
        <Flex 
          $direction="row" 
          $justify="center" 
          $align="center"
          $wrap
          $gap="1.5rem"
        >
          {links.length > 0 && (
            <Flex $gap="1.5rem" $wrap>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </Flex>
          )}
          
          <Copyright>
            © {year} {companyName}. Todos os direitos reservados.
          </Copyright>
        </Flex>
      </Container>
    </FooterContainer>
  );
};

export default Footer;