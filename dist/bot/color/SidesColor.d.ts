import * as React from 'react';
export interface Props {
    maskID: string;
    children: React.ReactNode;
}
export default class SidesColor extends React.Component<Props> {
    render(): JSX.Element;
}
