import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '../components/Header';

describe('Testing Header component', () => {
  test('rednders the logo and brand name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // check if the logo is rendered
    const Logo = screen.getByAltText('Logo');
    expect(Logo).toBeTruthy();
    
    // chek if the brand name is rendered
    const brand = screen.getByText('Movie\'s Time');
    expect(brand).toBeTruthy();
  });

  test('renders the microphone and gear icons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if the microphone icon is rendered
    const microphoneIconElement = screen.getByAltText('mic_icon');
    expect(microphoneIconElement).toBeTruthy();

    // Check if the gear icon is rendered
    const gearIconElement = screen.getByAltText('gear_icon', { sibling: microphoneIconElement });
    expect(gearIconElement).toBeTruthy();
  });
});
