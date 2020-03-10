import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HeadLineList from './Components/HeadLineList/HeadLineList';
import HeadLineItem from './Components/HeadLineItem/HeadLineItem';
import App from './App';
import apiService from './apiService'


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
const headline={headline:'h1',newspaper: 'n1', locale:'es-ES'};
const headlineUK={headline:'h1',newspaper: 'n1', locale:'en-GB'};
const headlines=[{headline:'h1',newspaper: 'n1', locale:'es-ES'}, {headline:'h1',newspaper: 'n1', locale:'en-GB'},{headline:'h1',newspaper: 'n1', locale:'es-ES'}];
const headlinesSpain='h1n1h1n1';

it("renders the headline in headlineitem", () => {
  act(() => {
    render(<HeadLineItem headline={headline}/>, container);
  });
  expect(container.querySelector(".headline").textContent).toBe(headline.headline);
  expect(container.querySelector(".newspaper").textContent).toBe(headline.newspaper);
});

it("renders the headlines depening of the amount the headlines that we have", () => {
  act(() => {
    render(<HeadLineList headlines={headlines} headline={headline}/>, container);
  });
  expect([headline,headlineUK,headline]).toStrictEqual(headlines);
});

it("renders the lists by country", () => {
  act(() => {
    render(<HeadLineList headlines={headlines} headline={headline}/>, container);
  }); 
  expect(container.querySelector(".wrapper-spain").textContent).toBe(headlinesSpain);
});


