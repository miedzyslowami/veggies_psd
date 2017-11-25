import React from 'react';
import FacebookProvider, { Like } from 'react-facebook';

class LikeBtn extends React.Component {
  render() {
    console.log('faejsbuuuuk');
    return (
      <FacebookProvider appId="195998137639992">
        <Like href="https://miedzyslowami.github.io/veggies_psd/" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}

export default LikeBtn;
