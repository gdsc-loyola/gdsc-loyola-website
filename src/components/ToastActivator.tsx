import toast from "solid-toast";

export default function ToastActivator() {
  return (
    <button
      id="contact-form-toast-btn"
      class="hidden"
      onClick={() => {
        const contactFormToast = window.__PUBLIC__?.contactFormToast;
        if (contactFormToast) {
          if (contactFormToast.success) {
            toast.success(contactFormToast.message, {
              duration: 3000,
            });
          } else {
            toast.error(contactFormToast.message, {
              duration: 3000,
            });
          }
        }
      }}
    ></button>
  );
}
