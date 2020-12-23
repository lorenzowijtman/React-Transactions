import { render, screen } from '@testing-library/react';
import Transactions from "../../pages/Transactions";
import React from "react";

test('renders transactions page', () => {
    render(<Transactions />);
    const header = screen.getByText('Transactions');
    expect(header).toBeInTheDocument();
});
