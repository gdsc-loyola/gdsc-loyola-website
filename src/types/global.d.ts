declare global {
  interface Window {
    __PUBLIC__?: {
      contactFormToast?: {
        success?: boolean;
        message?: string;
      };
    };
  }
}

export {};
