import {configure} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Thumbnail from '../client/src/Thumbnail.jsx';
configure({ adapter: new EnzymeAdapter() });

describe('Thumbnail functionality', () => {
	it(' Thumbnail component should contain images', () => {
		const wrapper = shallow(<Thumbnail />);
		expect(wrapper.find('.thumbnails').exists()).toBe(true);
	});
})

