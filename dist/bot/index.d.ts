import * as React from 'react';
export declare enum BotStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface BotProps {
    botStyle: BotStyle;
    style?: React.CSSProperties;
    size?: number;
}
export default class Bot extends React.Component<BotProps> {
    render(): JSX.Element;
}
