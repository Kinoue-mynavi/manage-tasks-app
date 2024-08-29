import { toast, TypeOptions, ToastOptions } from 'react-toastify';

type ToastType = Extract<keyof typeof toast, TypeOptions>;

type Args = {
  type: ToastType;
  message: string;
  position?: ToastOptions['position'];
};

export const showToast = ({ type, message, position = 'top-right' }: Args) => {
  toast[type](message, {
    position,
  });
};
