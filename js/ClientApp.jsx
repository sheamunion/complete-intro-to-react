import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement;

const MyTitle = props => ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

const MyFirstComponent = () => ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Sherlock', color: 'peru' }),
    ce(MyTitle, { title: 'Family Guy', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Shield', color: 'PapayaWhip' }),
    ce(MyTitle, { title: 'Warehouse 13', color: 'aqua' })
  );

render(ce(MyFirstComponent), document.getElementById('app'));
