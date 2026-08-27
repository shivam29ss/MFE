declare module "*.css";

interface Window {
  __SHOPSPHERE_CONFIG__: {
    PRODUCTS_MFE_URL: string;
  };

  products: {
    get: (request: string) => Promise<unknown>;
    init: (shareScope: unknown) => void;
  };
}