import * as React from 'react'

export default class Shades extends React.Component {
  static optionValue = 'Shade'

  render () {
    const pieceId = 'Eyes/Shades'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M82.8310869,34 C78.274254,34.204594 75.2818899,35.6397034 73.8539945,38.3053279 C72.6354507,40.5801306 70.2641433,41.9999868 67.6835279,41.9999882 L52,42 L36.9013298,41.9999891 C34.0681565,41.9999875 31.4462964,40.5014832 30.0083339,38.0603493 C28.5305922,35.551685 25.5841186,34.1982352 21.1689131,34 L8,34 C3.581722,34 5.41083001e-16,30.418278 0,26 L0,8 C-5.41083001e-16,3.581722 3.581722,8.11624501e-16 8,0 L96,0 C100.418278,-8.11624501e-16 104,3.581722 104,8 L104,26 C104,30.418278 100.418278,34 96,34 L82.8310869,34 Z'
          id={pathName}/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Container'
             fillOpacity='0.8'
             fill='#000000'
             xlinkHref={`#${pathName}`}/>
        <path
          d='M74.8310869,24 C70.2742542,24.204594 67.2818901,25.6397032 65.8539947,28.3053276 C64.6854389,30.4868112 62.4567598,31.8820547 60,31.9928601 L60,32 L44.9013298,31.9999891 C42.0681565,31.9999875 39.4462964,30.5014832 38.0083339,28.0603493 C36.5305922,25.551685 33.5841186,24.1982352 29.1689131,24 L17,24 C14.2385763,24 12,21.7614237 12,19 L12,17 C12,14.2385763 14.2385763,12 17,12 L87,12 C89.7614237,12 92,14.2385763 92,17 L92,19 C92,21.7614237 89.7614237,24 87,24 L74.8310869,24 Z'
          id='Aww-Yeahh'
          fill='#FF3D3D'
          mask={`url(#${maskName})`}/>
        <path d='M39,-4 L50,-4 L30,42 L19,42 L39,-4 Z M28,-4 L32,-4 L12,42 L8,42 L28,-4 Z'
              id='Highlight'
              fillOpacity='0.2'
              fill='#FFFFFF'
              mask={`url(#${maskName})`}/>
      </g>
    )
  }
}
