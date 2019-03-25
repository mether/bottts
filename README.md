# React component for Bottts

The core React component for [Bottts Generator](https://botttsgenerator.com/) developed by [Mack Etherington](https://twitter.com/MackEtherington), based on the Sketch library [Bottts](https://bottts.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). Forked and adapted from [Fang-Pen Lin](https://twitter.com/fangpenlin)'s [Avataaars](https://github.com/fangpenlin/avataaars).

<p align="center"><img src='./bottts-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://botttsgenerator.com/)

## Usage

First, you need to install the bottts component package, here you run

```
yarn add bottts
```

or

```
npm install bottts --save
```

if you are using npm. Then, in your React app, import the Bottt component and put it where you like it to be, for example

```jsx
import * as React from 'react'
import Bot from 'bottts'

export default class MyComponent extends React.Component {
  render () {
    return 
      <div>
        Your bot:
        <Bottt
          style={{width: '100px', height: '100px'}}
          botStyle='Circle'
          circleColor='BlueGrey300'
          topType='Bulb02'
          topColor='BlueGrey500'
          faceType='Square01'
          faceColor='BlueGrey500'
          textureType='Camo01'
          eyeType='Round'
          mouthType='Square01'
          sideType='Square'
          sidesColor='BlueGrey500'
        />
      </div>
  }
}
```

To showcase individual pieces of the bot you can use the Piece component, for example:

```jsx
import * as React from 'react'
import {Piece} from 'bottts';

export default class MyComponent extends React.Component {
  render () {
    return 
      <div>
        <Piece botStyle='Circle' pieceType="top" pieceSize="100" topType="Bulb02" topColor="BlueGrey500"/>
        <Piece botStyle='Circle' pieceType="face" pieceSize="100" faceType="Square01" faceColor="BlueGrey500" textureType="Camo01"/>
        <Piece botStyle='Circle' pieceType="eye" pieceSize="100" eyeType="Round"/>
        <Piece botStyle='Circle' pieceType="mouth" pieceSize="100" mouthType="Square01"/>
        <Piece botStyle='Circle' pieceType="sides" pieceSize="100" sidesType="Square" sidesColor="BlueGrey500"/>
      </div>
  }
}
```

To explore bot options and generate the React code, please use [Bottts Generator](https://botttsgenerator.com/)

## Collect options

To build your own avatar editor, you may want to use lower level `Bot` component along with `OptionContext`. For more details usage, please reference to source code of [bottts-generator](https://github.com/mether/bottts-geneator), see how it uses `OptionContext` to collection available options.
