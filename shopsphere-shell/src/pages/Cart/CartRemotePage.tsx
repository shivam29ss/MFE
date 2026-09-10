import { useEffect, useState, useRef } from "react";
import { loadCartRemote } from "../../cartLoader";
import { useCart } from "../../state/CartContext";
import type { CartItem } from "../../../../shared/contracts/cart";

type ShopCartElement = HTMLElement & {
    cartItems: CartItem[];
};

export default function CartRemotePage() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    } = useCart();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const cartElementRef = useRef<ShopCartElement | null>(null);

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCartRemote()
            .then(() => {
                setLoaded(true);
            })
            .catch((err) => {
                console.error("Failed to load Cart MFE:", err);
                setError("Cart is currently unavailable.");
            });
    }, []);

    useEffect(() => {
        if (!loaded || !containerRef.current) {
            return;
        }

        const cartElement =
            document.createElement("shop-cart") as ShopCartElement;
        cartElement.cartItems = cartItems;
        // Cart actions coming from Vue → Shell
        const handleRemove = (event: Event) => {
            const [productId] = (
                event as CustomEvent<[number]>
            ).detail;

            removeFromCart(productId);
        };

        const handleIncrease = (event: Event) => {
            const [productId] = (
                event as CustomEvent<[number]>
            ).detail;

            increaseQuantity(productId);
        };

        const handleDecrease = (event: Event) => {
            const [productId] = (
                event as CustomEvent<[number]>
            ).detail;

            decreaseQuantity(productId);
        };

        const handleClear = () => {
            clearCart();
        };

        cartElement.addEventListener(
            "cart-remove",
            handleRemove
        );

        cartElement.addEventListener(
            "cart-increase",
            handleIncrease
        );

        cartElement.addEventListener(
            "cart-decrease",
            handleDecrease
        );

        cartElement.addEventListener(
            "cart-clear",
            handleClear
        );

        cartElementRef.current = cartElement;

        containerRef.current.replaceChildren(cartElement);

        console.log("🟢 SHELL -> CART:", cartElement.cartItems);
        return () => {
            cartElementRef.current = null;
        };
    }, [loaded]);

    useEffect(() => {
        if (!cartElementRef.current) {
            return;
        }
        cartElementRef.current.cartItems = cartItems;
    }, [cartItems]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!loaded) {
        return <div>Loading cart...</div>;
    }

    return <div ref={containerRef} />;
}