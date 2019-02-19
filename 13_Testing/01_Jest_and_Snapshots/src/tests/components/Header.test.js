import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // RENDER VIRTUAL
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);

  // GUARDAR RENDER EN __SNAPSHOTS__ Y COMPARAR CON EL PRIMERO
  // PARA GUARDAR UN NUEVO SNAPSHOT PRESIONAL 'U' EN TERMIMAL 
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
