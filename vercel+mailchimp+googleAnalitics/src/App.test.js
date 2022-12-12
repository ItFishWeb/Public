import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from './App';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('Wczytuje bez błędów', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('Wczytuje link do Oferta', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sprawdź ofertę !/i);
  expect(linkElement).toBeInTheDocument();
});
const renderWithRoutes = (component) => {
  const history = createMemoryHistory();
    render(<App />);
      <Routes history={history}>
      {component}
      </Routes>
    
  }
  it('Powinno załadować główną', () => {

    const { container, getByTestId } = renderWithRoutes(<Route />) 
    const navbar = screen.getByTestId('navbar')
    const link = screen.getByTestId('home-link')
  
    expect(container.innerHTML).toMatch('Strona Główna')
    expect(navbar).toContainElement(link)
  })
  
  it('should navigate to the about page', ()=> {
   const { container, getByTestId } = renderWithRoutes(<Route />) 
  
   fireEvent.click(screen.getByTestId('nav-link'))
  
   expect(container.innerHTML).toMatch('Oferta')
  })
  
  it('Nawigacja do kontaktu', ()=> {
      const { navbar, getByTestId } = renderWithRoutes(<Route />) ;
     
      fireEvent.click(getByTestId.App('contact-link'));
     
      expect(navbar.innerHTML).toMatch('Kontakt');
  })
  ;
