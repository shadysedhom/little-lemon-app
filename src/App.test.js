import { render, screen } from '@testing-library/react';
import App from './App';
import Bookingpage from './Bookingpage';

test('renders learn react link', () => {

  render( <BookingForm /> )
  const formHeading = screen.getByText(/Make Your Reservation/);
  expect(formHeading).toBeInTheDocument();

});
