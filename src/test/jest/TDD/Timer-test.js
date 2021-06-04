import React from 'react';
import Timer from 'js/TDD/Timer';
import { shallow } from 'enzyme';

describe("Timer", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Timer></Timer>);
            expect(wrapper.find(".Timer_container").exists()).toEqual(true);
        })

      describe("render function", () => {
              it("check Timer Div render", () => {
                  const wrapper = shallow(<Timer></Timer>);
                  expect(wrapper.find(".displayTimer").exists()).toEqual(true);
              })
    })
})