const { profile } = require("console");

function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
    
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };
      
      export default function Profile() {
        return (
          <>
            <h1>{user.name}</h1>
            <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
            />
          </>
        );
      }
      
import React , { useState, useEffect } from 'react';


  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }


  export default profile;
