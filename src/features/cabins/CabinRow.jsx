/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { name, maxCapacity, regularPrice, discounts, image, id, description } =
    cabin;
  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discounts,
      image,
      description,
    });
  }

  return (
    <>
      <Table.Row>
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div> Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discounts ? (
          <Discount>{formatCurrency(discounts)}</Discount>
        ) : (
          <span>&mdash</span>
        )}
        <div>
          {" "}
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id}></Menus.Toggle>
              <Menus.List id={id}>
                <Menus.Button
                  icon={<HiSquare2Stack></HiSquare2Stack>}
                  onClick={handleDuplicate}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil></HiPencil>}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash></HiTrash>}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin}></CreateCabinForm>
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName={name}
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(id)}
                ></ConfirmDelete>
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;