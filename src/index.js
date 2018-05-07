import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'index.scss';

const render = () => {
  const Main = require('containers').default;
  const Section = require('components').default;
  const nameAry = [
    {
      name: "Austin",
      mobile: "0978-086-965"
    },
    {
      name: "Jason",
      mobile: "0928-216-235"
    }
    ,
    {
      name: "Andy",
      mobile: "0911-465-757"
    }
  ];
  ReactDOM.render(
    <AppContainer>
      <div className={'wrap'}>
        <Main />
        {nameAry.map((item,index)=>{
            return <Section key={index} name={item.name} mobile={item.mobile} />
        })}
        
      </div>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
if (module.hot) {
  module.hot.accept('containers/', () => {
    render();
  });
}
