declare type SelectMethod = (context: {
    projectRoot: string;
    force: boolean;
}) => Promise<void>;
declare type EnabledMethod = (context: {
    projectRoot: string;
    force: boolean;
}) => Promise<boolean>;
declare type CustomizeOption = {
    name: string;
    type: 'custom' | 'required' | 'extra';
    destinationPath: (projectRoot: string) => string;
    templatePath?: string;
    description: string;
    onSelectAsync: SelectMethod;
    onEnabledAsync: EnabledMethod;
};
export declare const manifest: CustomizeOption[];
export {};
