import { render, screen } from "@testing-library/react";
import { NavBar } from "../../components/Header/NavBar";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("NavBar renders buttons correctly", async () => {
  render(<NavBar />);

  const overviewButton = screen.getByRole("button", { name: "Company" });
  const companyButton = screen.getByRole("button", { name: "Overview" });
  const connectButton = screen.getByRole("button", { name: "Connect" });
  expect(overviewButton, companyButton, connectButton).toBeInTheDocument();
});

test("NavBar button renders submenu after click", async () => {
  render(<NavBar />);

  const overviewButton = screen.getByRole("button", { name: "Company" });

  await userEvent.click(overviewButton);
  const dropDownMenu = document.querySelector(".dropDownMenu");
  expect(dropDownMenu).toBeInTheDocument();
});

test("NavBar button dismounts dropdown menu after click", async () => {
  render(<NavBar />);

  const overviewButton = screen.getByRole("button", { name: "Company" });

  await userEvent.click(overviewButton);
  await userEvent.click(overviewButton);
  const dropDownMenu = document.querySelector(".dropDownMenu");
  expect(dropDownMenu).not.toBeInTheDocument();
});
