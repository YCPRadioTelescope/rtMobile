import React from 'react';
import Denial from '../src/screens/DenialScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <Denial />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
