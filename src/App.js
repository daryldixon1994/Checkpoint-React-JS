import React from 'react';
import './App.css';
import { Form, Button, Col, Nav, Navbar, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
};

export const MainForm = ()=> {
  return (
      <div className="App">
          <Form>
<Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form.Row>

<Form.Group controlId="formGridAddress1">
  <Form.Label>Address</Form.Label>
  <Form.Control placeholder="1234 Main St" />
</Form.Group>

<Form.Group controlId="formGridAddress2">
  <Form.Label>Address 2</Form.Label>
  <Form.Control placeholder="Apartment, studio, or floor" />
</Form.Group>

<Form.Row>
  <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>City</Form.Label>
    <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
      <option>Choose...</option>
      <option>Béja</option>
      <option>Grand Tunis</option>
      <option>Bizerte</option>
      <option>Nabeul</option>
      <option>Jendouba</option>
      <option>Siliana</option>
      <option>Kef</option>
    </Form.Control>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip</Form.Label>
    <Form.Control />
  </Form.Group>
</Form.Row>

<Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
    </div>
  );
};

/*export function App() {
  return (
    <div className="App">
      <MainForm />
    </div>
  );
}*/
