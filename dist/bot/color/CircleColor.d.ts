import * as React from 'react';
export interface Props {
    maskID: string;
    children: React.ReactNode;
}
export declare function makeColor(name: string, color: string): any;
export declare const Black: any;
export declare const White: any;
export declare const Red500: any;
export declare const Pink500: any;
export declare const Purple500: any;
export declare const DeepPurple500: any;
export declare const Indigo500: any;
export declare const Blue500: any;
export declare const LightBlue500: any;
export declare const Cyan500: any;
export declare const Teal500: any;
export declare const Green500: any;
export declare const LightGreen500: any;
export declare const Lime500: any;
export declare const Yellow500: any;
export declare const Amber500: any;
export declare const Orange500: any;
export declare const DeepOrange500: any;
export declare const Brown500: any;
export declare const Gray500: any;
export declare const Gray800: any;
export declare const BlueGrey500: any;
export default class CircleColor extends React.Component<Props> {
    render(): JSX.Element;
}
