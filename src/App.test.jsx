import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  it('renders an h1 element', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the correct text in the h1 element', () => {
    render(<App />);
    expect(screen.getByText('React-Template')).toBeInTheDocument();
  });
});
