export type ThankfulnessModalProps = {
  onClose: () => void;
  content?: {
    title: string;
    subTitle?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
  };
};
