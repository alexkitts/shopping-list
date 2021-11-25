import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { checkInclude, Ingridient, Recipe } from '../recipies/RecipeTypes';

interface ShoppingListProps {
  recipes: Array<Recipe>;
}

function ShoppingList(props: ShoppingListProps) {
  const { recipes } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  interface List {
    FruitVeg: Array<Ingridient>;
    NutsHerbs: Array<Ingridient>;
    Fridge: Array<Ingridient>;
    Dry: Array<Ingridient>;
    Freezer: Array<Ingridient>;
    Other: Array<Ingridient>;
  }

  const list: List = {
    FruitVeg: [],
    NutsHerbs: [],
    Fridge: [],
    Dry: [],
    Freezer: [],
    Other: [],
  };

  recipes.forEach((r) => {
    r.ingridients.forEach((ingToAdd) => {
      if (!checkInclude(ingToAdd)) {
        // Skip
        return;
      }
      const alreadyPresentIngridient = list[ingToAdd.category].find(
        (inListIng) => inListIng.name === ingToAdd.name
      );
      if (alreadyPresentIngridient) {
        // Already present in list. Add totals
        alreadyPresentIngridient.quantity += ingToAdd.quantity;
      } else {
        // Not present, add to list
        list[ingToAdd.category].push(ingToAdd);
      }
    });
  });

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        View Shopping list
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Fruit and Veg</h6>
          {list.FruitVeg.map((item) => {
            return (
              <>
                {item.name} {item.quantity} <br />
              </>
            );
          })}
          <br />
          <h6>Herbs and nuts</h6>
          {list.NutsHerbs.map((item) => {
            return (
              <>
                {item.name} {item.quantity} <br />
              </>
            );
          })}
          <br />
          <h6>Dry</h6>
          {list.Dry.map((item) => {
            return (
              <>
                {item.name} {item.quantity} <br />
              </>
            );
          })}
          <br />
          <h6>Fridge</h6>
          {list.Fridge.map((item) => {
            return (
              <>
                {item.name} {item.quantity} <br />
              </>
            );
          })}
          <br />
          <h6>Freezer</h6>
          {list.Freezer.map((item) => {
            return (
              <>
                {item.name} {item.quantity} <br />
              </>
            );
          })}
          <br />
          <h6>Other</h6>
          {list.Other.map((item) => {
            return (
              <>
                {'   '}
                {item.name} {item.quantity} <br />
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShoppingList;
