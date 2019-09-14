import React from 'react';
import ApprovalDashboard from '../src/screens/ApprovalDashboardScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
      <ApprovalDashboard />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
