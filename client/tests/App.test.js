import React from 'react';
import { shallow } from 'enzyme';
import App from 'src/components/App';
// import { expect } from 'chai';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
