import * as React from 'react';
export interface Props {
    maskID: string;
    children: React.ReactNode;
}
export default class FaceColor extends React.Component<Props> {
    render(): JSX.Element;
}
