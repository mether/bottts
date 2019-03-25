import * as React from 'react'
import Bottt from './bottt'
import CircleColor from './color/CircleColor'

export enum BotStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

type CircleProps = {
  circle: boolean,
  children: React.ReactNode,
}

class Circle extends React.Component<CircleProps> {
  render () {
    const mainID = 'Circle'
    const path1 = `${mainID}-path-1`
    const path2 = `${mainID}-path-2`
    const path3 = `${mainID}-path-3`
    const mask1 = `${mainID}-main-1`
    const mask2 = `${mainID}-main-2`

    return (
      <g id={mainID}>
        <defs>
          <circle id={path1}
                  cx='120'
                  cy='120'
                  r='120'/>
          <path
            d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'
            id={path2}
          />
          <path
            d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
            id={path3}
          />
        </defs>
        <g>
          {this.props.circle ? (
            <g id='Circle'
               strokeWidth='1'
               fillRule='evenodd'>
              <mask id={mask1}
                    fill='white'>
                <use xlinkHref={`#${path1}`}/>
              </mask>
              <use
                id='Circle-Background'
                fill='#E6E6E6'
                xlinkHref={`#${path1}`}
              />
              <CircleColor maskID={mask1}>
                <rect id='🖍Color'
                      x='0'
                      y='0'
                      width='240'
                      height='240'/>
              </CircleColor>
            </g>
          ) : null}
          {this.props.circle ? (
            <mask id={mask2}
                  fill='white'>
              <use xlinkHref={`#${path1}`}/>
            </mask>
          ) : null}
          <g id='Bottt'
             strokeWidth='1'
             fillRule='evenodd'
             mask={`url(#${mask2})`}>
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}

export interface BotProps {
  botStyle: BotStyle
  style?: React.CSSProperties,
  size?: number
}

export class Bot extends React.Component<BotProps> {
  render () {
    const { botStyle, style, size } = this.props
    const circle = botStyle === BotStyle.Circle
    const mainID = 'Bottt'
    const defaultSize = size ? size : 240

    return (
      <svg style={style}
           width={`${defaultSize}px`}
           height={`${defaultSize}px`}
           viewBox={`0 0 240 240`}
           version='1.1'
           xmlns='http://www.w3.org/2000/svg'
           xmlnsXlink='http://www.w3.org/1999/xlink'>
        <title>Bottt</title>
        <desc>Created with botttsgenerator.com</desc>
        <g
          id={mainID}
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'>
          <Circle circle={circle}>
            <Bottt/>
          </Circle>
        </g>
      </svg>
    )
  }
}
