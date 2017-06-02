import request from 'browser-request';

class AjaxExample {
  constructor(root) {
    this.root = root;
  }

  setup() {
    console.log('loading the home page...');

    request('/', (er, res)=> {
      console.log(res);
      console.log('browser-request got your root path:\n' + res.body)
    });
  }

  render() {
    console.log('render component on DOM');
  }
}

export default AjaxExample;
