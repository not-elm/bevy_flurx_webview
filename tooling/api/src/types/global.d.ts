import {appWindow, core} from "../index";

export {};

declare global {
    interface Window {
        ipc: {
            postMessage: (message: string) => void;
        },
        __FLURX__: {
            core: typeof core,
            appWindow: typeof appWindow
        }
    }
}
