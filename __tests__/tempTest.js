import React from 'react';
import TempNav from '../src/screens/TempNavScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
    <TempNav />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
