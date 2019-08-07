import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//For v16 react..
Enzyme.configure({
    adapter: new Adapter()
});

console.log("This file has raun")
//Note : need additional set up. see root folder's jest.config.json