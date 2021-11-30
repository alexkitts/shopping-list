import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import Switch from 'react-switch';
import { checkInclude, Ingridient, ListRecipe } from '../recipies/RecipeTypes';
import NumericInput from 'react-numeric-input';

interface RecipieStubProps {
  recipe: ListRecipe;
  selectRecipeCallback(id: number): any;
  selectIngridientCallBack(id: number, ingName: string): any;
  changeMultiplierCallBack(id: number, mulitplier: number): any;
}

const RecipieStub = (props: RecipieStubProps) => {
  const { recipe } = props;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                {recipe.name} (serves {recipe.serves})
              </Col>
              <Col>
                <div style={{ float: 'right' }}>
                  <Row>
                    <Col sm={5}>
                      <div style={{ float: 'right' }}>
                        <h6>Mult:</h6>
                      </div>
                    </Col>
                    <Col sm={7}>
                      <NumericInput
                        mobile
                        className="form-control"
                        value={recipe.muliplier}
                        onChange={(number) =>
                          props.changeMultiplierCallBack(
                            recipe.index,
                            number ? number : 1
                          )
                        }
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card.Title>
          <Button
            size="sm"
            variant={recipe.selected ? 'danger' : 'success'}
            onClick={() => props.selectRecipeCallback(recipe.index)}
          >
            {recipe.selected ? 'Remove' : 'Add'}
          </Button>
          <Table>
            <tbody>
              <tr>
                <th>Ingridient</th>
                <th>Quantity</th>
                <th>Include?</th>
              </tr>
              {recipe.ingridients.map((ing) => {
                return (
                  <>
                    <tr key={ing.name}>
                      <td>{ing.name}</td>
                      <td>{ing.quantity}</td>
                      <td>
                        <Switch
                          onChange={() =>
                            props.selectIngridientCallBack(
                              recipe.index,
                              ing.name
                            )
                          }
                          checked={checkInclude(ing)}
                          height={21}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default RecipieStub;
