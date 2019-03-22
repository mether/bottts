import * as React from 'react';
export interface TextureProps {
    readonly maskID?: string;
}
export default class Texture extends React.Component<TextureProps> {
    render(): JSX.Element;
}
