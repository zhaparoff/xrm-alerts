declare module "*.css" {
    const _: string;
    export default _;
}

declare interface Window {
    Alert: any;
    jQuery: any;
    closeWindow: () => void;
}

type Nullable<T> = T | undefined;
