import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: 
          '24671523949-gimsm5fpa509fmgjdbilrp95dftdh0f2.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  
  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;