import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Recipe } from '../recipies/RecipeTypes';
import FileLoader from './FileLoader';
import ShoppingList from './ShoppingList';

interface HeaderProps {
  recipes: Array<Recipe>;
  fileJsonContestCallback(data: any): void;
}

const Header = (props: HeaderProps) => {
  const { recipes } = props;
  return (
    <Row>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shopping list maker</Navbar.Brand>
          <div style={{ float: 'right' }}>
            <FileLoader
              fileJsonContestCallback={props.fileJsonContestCallback}
            />
            {'  '}
            <ShoppingList recipes={recipes} />
          </div>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;
