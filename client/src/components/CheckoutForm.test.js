import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm, { showSuccessMessage } from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //Arrange
  const { getByText } = render(<CheckoutForm />);
  //Act
  const header = getByText(/Checkout Form/i);
  //Assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //AAA
  expect(showSuccessMessage).toBe();
});
