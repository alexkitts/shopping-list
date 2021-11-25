import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { checkInclude, ListRecipe, Recipe } from '../recipies/RecipeTypes';
import recipies from '../recipies/Recipies';
import Header from './Header';
import RecipieStub from './RecipeStub';

const App = () => {
  // Fix Recipe list to have indexes and selectable
  const rawRecipieList: Array<ListRecipe> = recipies.map((r: Recipe, index) => {
    const listRec: ListRecipe = r as ListRecipe;
    listRec.index = index;
    listRec.selected = false;
    return listRec;
  });

  const [recipieList, setRecipieList] =
    useState<Array<ListRecipe>>(rawRecipieList);

  const [filterText, setFilterText] = useState<string>('');

  const selectRecipeCallback = (id: number) => {
    const selected: ListRecipe = { ...recipieList[id] };
    selected.selected = !selected.selected;
    const newArray = [...recipieList];
    newArray[id] = selected;
    setRecipieList(newArray);
  };

  const selectIngridientCallBack = (id: number, ingridientName: string) => {
    const recipieBeingChanged: ListRecipe = { ...recipieList[id] };
    const ingridient = recipieBeingChanged.ingridients.find(
      (ing) => ing.name === ingridientName
    );
    if (!ingridient) {
      return;
    }
    // Flip included
    ingridient.include = !checkInclude(ingridient);

    const newIngList = [...recipieBeingChanged.ingridients];
    const newRecipe: ListRecipe = {
      ...recipieBeingChanged,
      ingridients: newIngList,
    };

    const newArray = [...recipieList];
    newArray[id] = newRecipe;
    setRecipieList(newArray);
  };

  return (
    <>
      <Header recipes={recipieList.filter((r) => r.selected)} />
      <Container>
        <Row>
          <Col sm={7}>
            <Card key="Recipies">
              <Card.Header>Recipies</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                      onChange={(event) => setFilterText(event.target.value)}
                    />
                  </Form.Group>
                </Form>

                {recipieList
                  .filter((recipe) => !recipe.selected)
                  .filter((recipe) =>
                    recipe.name
                      .toLowerCase()
                      .includes(filterText.toLocaleLowerCase())
                  )
                  .map((recipe) => (
                    <RecipieStub
                      key={recipe.index}
                      recipe={recipe}
                      selectRecipeCallback={selectRecipeCallback}
                      selectIngridientCallBack={selectIngridientCallBack}
                    />
                  ))}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card key="Shopping">
              <Card.Header>Shopping</Card.Header>
              <Card.Body>
                {recipieList
                  .filter((recipe) => recipe.selected)
                  .map((recipe) => (
                    <RecipieStub
                      key={recipe.index}
                      recipe={recipe}
                      selectRecipeCallback={selectRecipeCallback}
                      selectIngridientCallBack={selectIngridientCallBack}
                    />
                  ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
