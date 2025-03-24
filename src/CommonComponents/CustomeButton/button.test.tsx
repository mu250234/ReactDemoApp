import { render, screen } from "@testing-library/react";
import NuudayButton from "./nuuday.button";

// Tests that the NuudayButton component renders with children components. tags: [happy path]
it("test_card_renders_with_children", () => {
  const { getByRole } = render(
    <NuudayButton color="cool" label="testButton" />
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});
