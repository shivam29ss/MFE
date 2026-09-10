import { createInstance } from "@module-federation/enhanced/runtime";

let mf: ReturnType<typeof createInstance> | null = null;

export function loadCartRemote() {
  if (!mf) {
    mf = createInstance({
      name: "shell",

      remotes: [
        {
          name: "cart",
          entry:
            window.__SHOPSPHERE_CONFIG__.CART_MFE_URL +
            "/mf-manifest.json",
        },
      ],
    });
  }

  return mf.loadRemote("cart/Cart");
}