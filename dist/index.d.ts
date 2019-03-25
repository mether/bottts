import * as PropTypes from 'prop-types';
import * as React from 'react';
import { OptionContext } from './options';
export { Bot, BotStyle } from './bot';
export { Option, OptionContext, allOptions } from './options';
export interface Props {
    botStyle: string;
    style?: React.CSSProperties;
    circleColor?: string;
    topType?: string;
    topColor?: string;
    faceType?: string;
    faceColor?: string;
    textureType?: string;
    eyeType?: string;
    mouthType?: string;
    sideType?: string;
    sidesColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export default class Bottt extends React.Component<Props> {
    static childContextTypes: {
        optionContext: PropTypes.Requireable<OptionContext>;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private updateOptionContext;
}
export declare class Piece extends React.Component<Props> {
    static childContextTypes: {
        optionContext: PropTypes.Requireable<OptionContext>;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private updateOptionContext;
}
