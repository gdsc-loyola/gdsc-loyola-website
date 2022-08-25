import { children, createEffect } from "solid-js";
import { spread } from "solid-js/web";
import toast from "solid-toast";

export default function ToastActivator(props: { children: any }) {
  const c = children(() => props.children);

  createEffect(() =>
    spread(
      c() as Element,
      {
        onClick: () => {
          toast("Hey");
        },
        id: "a",
      },
      false,
      true
    )
  );

  return c;
}
