import React from 'react';
import Sensor from '../src/screens/SensorScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <Sensor />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
