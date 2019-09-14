import React from 'react';
import Status from '../src/screens/StatusScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <Status />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
