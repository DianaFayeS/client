import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSingnedIn: null }
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: 
          '24671523949-gimsm5fpa509fmgjdbilrp95dftdh0f2.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSingnedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know of we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div> I am signed in</div>
    } else {
        return <div>I am not signed in</div>
      }
  }
  
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;