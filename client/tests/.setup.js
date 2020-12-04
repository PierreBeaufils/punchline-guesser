/* yarn add --dev mocha enzyme enzyme-adapter-react-16 react-test-renderer
*/
require('@babel/register')();
require('ignore-styles');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });