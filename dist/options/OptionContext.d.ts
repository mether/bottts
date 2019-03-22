import Option from './Option';
export interface OptionState {
    key: string;
    options: Array<string>;
    defaultValue?: string;
    available: number;
}
export declare type OptionContextState = {
    [index: string]: OptionState;
};
export default class OptionContext {
    private stateChangeListeners;
    private valueChangeListeners;
    private _data;
    private readonly _options;
    private _state;
    constructor(options: Array<Option>);
    readonly state: OptionContextState;
    readonly options: Option[];
    addStateChangeListener(listener: () => void): void;
    removeStateChangeListener(listener: () => void): void;
    addValueChangeListener(listener: (key: string, value: string) => void): void;
    removeValueChangeListener(listener: (key: string, value: string) => void): void;
    optionEnter(key: string): void;
    optionExit(key: string): void;
    getOptionState(key: string): OptionState | null;
    getValue(key: string): string | null;
    setValue(key: string, value: string): void;
    setData(data: {
        [index: string]: string;
    }): void;
    setDefaultValue(key: string, defaultValue: string): void;
    setOptions(key: string, options: Array<string>): void;
    private setState;
    private notifyListener;
}
