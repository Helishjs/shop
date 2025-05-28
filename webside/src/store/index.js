import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
    persist(
        (set) => ({
            // Auth state
            isLoggedIn: false,
            userInfo: null,
            token: null,

            // Cart state
            cart: [],
            wishlist: [],

            // Auth actions
            login: (userData, token) => set({
                isLoggedIn: true,
                userInfo: userData,
                token: token
            }),
            logout: () => set({
                isLoggedIn: false,
                userInfo: null,
                token: null,
                cart: [],
                wishlist: []
            }),
            updateUserInfo: (userData) => set((state) => ({
                userInfo: { ...state.userInfo, ...userData }
            })),

            // Cart actions
            addToCart: (product) => set((state) => ({
                cart: [...state.cart, product]
            })),
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter(item => item.id !== productId)
            })),
            clearCart: () => set({ cart: [] }),

            // Wishlist actions
            addToWishlist: (product) => set((state) => ({
                wishlist: [...state.wishlist, product]
            })),
            removeFromWishlist: (productId) => set((state) => ({
                wishlist: state.wishlist.filter(item => item.id !== productId)
            })),
            clearWishlist: () => set({ wishlist: [] }),

            // Category state
            activeCategory: 'all',
            setActiveCategory: (category) => set({ activeCategory: category }),
        }),
        {
            name: 'bookstore-storage', // Tên của storage
            partialize: (state) => ({
                isLoggedIn: state.isLoggedIn,
                userInfo: state.userInfo,
                token: state.token,
                cart: state.cart,
                wishlist: state.wishlist,
                activeCategory: state.activeCategory
            })
        }
    )
); 