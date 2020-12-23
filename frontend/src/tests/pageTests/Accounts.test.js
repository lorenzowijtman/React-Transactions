import { render, screen } from '@testing-library/react';
import Accounts from "../../pages/Accounts";
import React from "react";

test('renders accounts page', () => {
    render(<Accounts />);
    const header = screen.getByText('Accounts');
    expect(header).toBeInTheDocument();
});
