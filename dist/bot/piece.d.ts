import * as React from 'react';
export declare enum BotStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    botStyle: BotStyle;
    style?: React.CSSProperties;
}
export declare class PieceComponent extends React.Component<Props> {
    render(): JSX.Element;
}
