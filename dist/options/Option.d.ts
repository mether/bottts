export default class Option {
    private _key;
    private _label;
    constructor({ key, label }: {
        key: string;
        label: string;
    });
    readonly key: string;
    readonly label: string;
}
