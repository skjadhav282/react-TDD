import React from 'react';
import Timer from 'js/TDD/Timer';
import { shallow } from 'enzyme';

describe("Timer", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.find(".calculator_conatiner").exists()).toEqual(true);
        })

      
    })
})