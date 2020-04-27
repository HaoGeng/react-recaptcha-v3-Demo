import React, { Component } from 'react';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3'

const verifyCallback = token => {
  // Here you will get the final token!!!
  console.log(token, 'verifycallback')
}

class Form2 extends Component {

  constructor (props) {
    super(props)
    this.state = {}
   //this.clickMe = this.clickMe.bind(this)
  }

  componentDidMount () {
    loadReCaptcha("6LdS2O0UAAAAAG5xZLkNE6STywkEyi3eMpTqcyi-");
  }

  render () {
    return (
      <div>
        <ReCaptcha
          action='main'
          sitekey='6LdS2O0UAAAAAG5xZLkNE6STywkEyi3eMpTqcyi-'
          verifyCallback={verifyCallback}
        />

        <h2>Google ReCaptcha with React </h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br />
          2. Check <strong>console</strong> to see the token.
        </code>

        <header>
          <h1>Thanks for using `react-recaptcha-google`</h1>
        </header>
      </div>
    )
  };
};

export default Form2;