declare module "*.css";

interface Window {
  __SHOPSPHERE_CONFIG__: {
    PRODUCTS_MFE_URL: string;
    CART_MFE_URL: string;
  };

  products: {
    get: (request: string) => Promise<unknown>;
    init: (shareScope: unknown) => void;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    "shop-cart": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}