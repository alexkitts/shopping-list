import React from 'react';
import { Container, Navbar, Row } from 'react-bootstrap';
import { Recipe } from '../recipies/RecipeTypes';
import FileLoader from './FileLoader';
import ShoppingList from './ShoppingList';

interface HeaderProps {
  recipes: Array<Recipe>;
}

const Header = (props: HeaderProps) => {
  const { recipes } = props;
  return (
    <Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shopping list maker</Navbar.Brand>
          <FileLoader fileJsonContestCallback={(data) => console.log(data)} />
          <ShoppingList recipes={recipes} />
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;
