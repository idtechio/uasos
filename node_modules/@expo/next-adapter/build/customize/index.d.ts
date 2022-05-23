export * from './manifest';
export declare function runAsync({ projectRoot, force, yes: nonInteractive, }: {
    projectRoot: string;
    force: boolean;
    yes: boolean;
}): Promise<void>;
