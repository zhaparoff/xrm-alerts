declare namespace Alert {
    interface Button {
        label: string;
        callback: () => void;
        setFocus: boolean;
        preventClose: boolean;
    }

    interface AlertStatic {
        show(title?: string, message?: string, icon?: IconType, buttons?: ButtonList, width?: number, height?: number, padding?: number, preventCancel?: boolean): void;
        showIFrame(iframeUrl: string, width?: number, height?: number, padding?: number, title?: string, buttons?: ButtonList, preventCancel?: boolean): void;
        showWebResource(webResourceName: string, width?: number, height?: number, padding?: number, title?: string, buttons?: ButtonList, preventCancel?: boolean, baseUrl?: string): void;
        showDialogProcess(dialogId: string, entityName: string, recordId: string, callback?: () => void, width?: number, height?: number, baseUrl?: string): void;
        showLoading(): void;
        hide(): void;
        htmlEncode(text: string): string;
        getCrmWindow(): Window | undefined;
        getIFrameWindow(): Window | undefined;
    }

    type ButtonList = Button[];

    type IconType = "INFO" | "WARNING" | "ERROR" | "SUCCESS" | "QUESTION" | "LOADING" | "NONE";
}

declare const Alert: Alert.AlertStatic;

export default Alert;
