import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BotStyle } from './bot';
import { OptionContext } from './options';
export { default as Bot, BotStyle } from './bot';
export { Option, OptionContext, allOptions } from './options';
export interface Props {
    botStyle: BotStyle;
    style?: React.CSSProperties;
    color?: string;
    topType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
}
export default class BotComponent extends React.Component<Props> {
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
