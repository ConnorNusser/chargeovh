import Link from 'next/link'
import {Button, Nav} from 'react-bootstrap';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSession, signIn, signOut } from "next-auth/react"
const NavbarComponent = () => {
  return (
    <Navbar bg="light">
    <Container>
      <Link href="/" passHref className="justify-content-end" style={{ width: "100%", alignItems:'center'}}>
      <Navbar.Brand><Image
      src="/logo.png"
      alt="Picture of the author"
        width={150}
      height={100}
    /></Navbar.Brand>
      </Link>
      <Nav className="me-auto">
        <Link href="/" passHref>
        <Button>Home</Button>
        </Link>
        <Link href="/features" passHref>
        <Button>Features</Button>
        </Link>
        <Link href="/portfolio" passHref>
          <Button>Portfolio</Button>
        </Link>
      </Nav>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
            <LoginComponent/>
        </Nav>
    </Container>
  </Navbar>
  );
}

const LoginComponent = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Button onClick={() => signOut()}>Welcome {session.user?.name} Sign out</Button>
    );
  }
  return (
    <Button onClick={() => signIn()}>Sign in</Button>
  );
}
export default NavbarComponent;