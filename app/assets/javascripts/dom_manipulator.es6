import AjaxExample from './ajax_example.es6';
import $ from 'jquery';

class DomManipulator {
  constructor() {
    alert('now JS is a real programming language finally...');
  }

  element_select() {
    let element = document.getElementsByClassName('hello_element');
    console.log(element);

    let input = document.getElementsByName('hello_input');
    console.log(input);
    input[0].setAttribute("value", "es6");
  }
}

$(()=> {
  // let dom_manipulator = new DomManipulator();
  // dom_manipulator.element_select();

  // let home = new AjaxExample();
  // home.setup();

});
