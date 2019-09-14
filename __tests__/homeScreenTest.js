import React from 'react';
import Home from '../src/screens/HomeScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
