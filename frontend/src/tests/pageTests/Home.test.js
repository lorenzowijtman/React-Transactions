import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/Home';
import React from "react";

test('renders homepage', () => {
    render(<Home />);
    const header = screen.getByText('Frontend-Techtest');
    expect(header).toBeInTheDocument();
});
