import { render, screen } from '@testing-library/react';
import App from '../App';
import React from "react";

test('App renders homepage when starting', () => {
  render(<App />);
  const header = screen.getByText('Frontend-Techtest');
  expect(header).toBeInTheDocument();
});
