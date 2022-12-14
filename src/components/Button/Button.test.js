import React from "react";
import { render, screen } from '@testing-library/react';
import Button from "./index";
import userEvent from "@testing-library/user-event";


test('button should render', () => {
    render(<Button />)
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument()
});

