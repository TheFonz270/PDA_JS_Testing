import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  let button1; 
  let button2; 
  let button3;
  let button4; 
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;

  let buttonequals;
  let buttondecimal;
  let buttondivide;
  let buttonmultiply;
  let buttonsubtract;
  let buttonadd;
  let buttonclear;

  let runningTotal;

  beforeEach(() => {
    container = mount(<Calculator/>)
     button1 = container.find('#number1');
     button2 = container.find('#number2');
     button3 = container.find('#number3');
     button4 = container.find('#number4');
     button5 = container.find('#number5');
     button6 = container.find('#number6');
     button7 = container.find('#number7');
     button8 = container.find('#number8');
     button9 = container.find('#number9');
     button0 = container.find('#number0');
  
     buttonequals = container.find('#operator-equals');
     buttondecimal = container.find('#decimal');
     buttondivide = container.find('#operator-divide');
     buttonmultiply = container.find('#operator-multiply');
     buttonsubtract = container.find('#operator-subtract');
     buttonadd = container.find('#operator_add');
     buttonclear = container.find('#clear');
  
     runningTotal = container.find('#running-total');
  })



  it('should change running total on number enter', () => {
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('Should be able to add', () => {
    button1.simulate('click');
    buttonadd.simulate('click');
    button4.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('5');

  })

  it('Should be able to subtract', () => {
    button7.simulate('click');
    buttonsubtract.simulate('click');
    button4.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to multiply', () => {
    button3.simulate('click');
    buttonmultiply.simulate('click');
    button5.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('Should be able to divide', () => {
    button2.simulate('click');
    button1.simulate('click');
    buttondivide.simulate('click');
    button7.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to concatanate the number display', () => {
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('123')
  })

  it('Should be able to chain multiple operators', () => {
    button1.simulate('click');
    button0.simulate('click');
    buttonadd.simulate('click');
    button5.simulate('click');
    buttonadd.simulate('click')
    button5.simulate('click');
    buttonsubtract.simulate('click');
    button7.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('13');
  })

  it('Should be able to clear the running total without affecting the calculation', () => {
    button3.simulate('click');
    buttonmultiply.simulate('click');
    button3.simulate('click');
    buttonequals.simulate('click');
    buttonsubtract.simulate('click');
    button3.simulate('click');
    buttonclear.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('9');
  })

})

// - `calculator.add()` - add 1 to 4 and get 5
// - `calculator.subtract()` subtract 4 from 7 and get 3
// - `calculator.multiply()` - multiply 3 by 5 and get 15
// - `calculator.divide()` - divide 21 by 7 and get 3
// - `calculator.numberClick()` - concatenate multiple number button clicks
// - `calculator.operatorClick()` - chain multiple operations together
// - `calculator.clearClick()` - clear the running total without affecting the calculation