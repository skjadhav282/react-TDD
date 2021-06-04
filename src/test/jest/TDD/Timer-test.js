import React from 'react';
import Timer from 'js/TDD/Timer';
import { shallow } from 'enzyme';

describe("Timer", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Timer></Timer>);
            expect(wrapper.find(".Timer_container").exists()).toEqual(true);
        })

         it("check Timer Div render", () => {
                          const wrapper = shallow(<Timer></Timer>);
                          expect(wrapper.find(".displayTimer").exists()).toEqual(true);
          })

         it("check buttons render", () => {
                   const wrapper = shallow(<Timer></Timer>);
                   expect(wrapper.find(".button_container").childAt(0).hasClass("start_button")).toEqual(true);
                   expect(wrapper.find(".button_container").childAt(0).hasClass("stop_button")).toEqual(true);
                   expect(wrapper.find(".button_container").childAt(0).hasClass("reset_button")).toEqual(true);
               })

})