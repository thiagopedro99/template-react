import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              TENDENDÊ
            </Typography>
            <Typography variant="body">
              Levando a magia do samba para todos os palcos, o Tendendê une
              tradição e inovação numa experiência musical única.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" paragraph>
              Email: contato@tendende.com.br
            </Typography>
            <Typography variant="body2" paragraph>
              Telefone: (11) 99999-9999
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="WhatsApp">
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid margin={"auto"} item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Home
            </Typography>
            <Link href="/Link2" color="inherit" display="block" sx={{ mb: 1 }}>
              Link2
            </Link>
            <Link href="/Link3" color="inherit" display="block" sx={{ mb: 1 }}>
              Link3
            </Link>
            <Link href="/Link4" color="inherit" display="block" sx={{ mb: 1 }}>
              Link4
            </Link>
            <Link href="/Link5" color="inherit" display="block">
              Link5
            </Link>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 5, borderTop: "1px solid rgba(255,255,255,0.2)", pt: 2 }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} template. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
