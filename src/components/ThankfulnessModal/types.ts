export type ThankfulnessModalProps = {
  onClose: () => void;
  conntent?: {
    title: string;
    subTitle?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
  };
};
