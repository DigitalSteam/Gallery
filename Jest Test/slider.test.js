import {configure} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import SliderBar from '../client/src/Sliderbar.jsx';


configure({ adapter: new EnzymeAdapter() });

describe('slider bar functionality', () => {
	it('scrollleft initialized to -10 ', () => {
		const wrapper = shallow(<SliderBar />);
		const scrollleft = wrapper.state().scrollleft;
		expect(scrollleft).toEqual(-10);
	});

	it('nextFrame gets called when click on > span', () => {
		const fake = () => {

		}
		SliderBar.prototype.nextFrame = jest.fn(SliderBar.prototype.nextFrame);
		const wrapper = shallow(<SliderBar selectFrame={fake}/>);
		wrapper.find('.toggleright').simulate('click');
    	expect(SliderBar.prototype.nextFrame).toBeCalled();
	});

	
});


