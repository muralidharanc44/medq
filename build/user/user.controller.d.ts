import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            userName: string;
            userId: number;
            phone: number;
            password: string;
            email: string;
            pushNotificationToken: string;
            deviceOs: string;
            deviceName: string;
            deviceOsVersion: string;
            deviceBrand: string;
            buildVersion: string;
            accessToken: any;
            jwtToken: any;
        };
    } | {
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    }>;
    adminSignup(body: any): Promise<void>;
    loginUser(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
    } | {
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            userName: any;
            userId: any;
            accessToken: any;
            phone: any;
            email: any;
            password: any;
            pushNotificationToken: any;
            deviceOs: any;
            deviceName: any;
            deviceOsVersion: any;
            deviceBrand: any;
            buildVersion: any;
        };
    }>;
    socialloginUser(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            userName: string;
            userId: number;
            socialIdToken: string;
            phone: number;
            password: string;
            pushNotificationToken: string;
            deviceOs: string;
            deviceName: string;
            deviceOsVersion: string;
            deviceBrand: string;
            buildVersion: string;
            accessToken: string;
        };
    }>;
    usersList(): Promise<{
        responseCode: number;
        responseMessage: string;
        response: {
            users: import("../interface/user.interface").UserInterface[];
            users_count: number;
        };
    }>;
    userUpdate(body1: any, id: string): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    sentOtp(body: any): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    changePassword(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: any[];
        data?: undefined;
    } | {
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: any[];
        response?: undefined;
    }>;
    forgotPassword(body: any): Promise<{}>;
    verifyOtp(body: any): Promise<any>;
    deshbordProducts(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            location: {
                location_id: string;
                location: string;
            }[];
            categories: {
                caregoryId: string;
                categoryName: string;
                img: string;
            }[];
            topOffer: {
                productImg: string;
                productId: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
            bannerImg: string[];
        };
    }>;
    searchProduct(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            products: {
                productImg: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
        };
    }>;
    subCategories(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            caregoryId: string;
            categoryName: string;
            img: string;
            products: {
                productImg: string;
                productId: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
        };
    }>;
    removePromoCode(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: any[];
    }>;
    applyPromoCode(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            accessToken: string;
            userId: string;
            productId: string;
            promoCode: string;
        };
    }>;
    myCarts(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            carts: {
                productImg: string;
                productId: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
            paymentDetails: {
                paymentKey: string;
                paymentValue: string;
            }[];
        };
    }>;
    addCarts(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            carts: {
                productImg: string;
                productId: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
        };
    }>;
    removecart(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            carts: {
                productImg: string;
                productId: string;
                name: string;
                price: string;
                currency: string;
                offerPerchtage: number;
                offer: string;
                grandTotal: string;
            }[];
        };
    }>;
    madicineDetails(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            productImg: string;
            productId: string;
            name: string;
            price: string;
            currency: string;
            offerPerchtage: number;
            offer: string;
            grandTotal: string;
            about: string;
            Composition: string;
        };
    }>;
    paymentDetails(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            paymentDetails: {
                paymentKey: string;
                paymentValue: string;
            }[];
        };
    }>;
    listCard(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            card: {
                cardId: string;
                name: string;
                cardType: string;
                cardNumber: string;
                validDate: string;
                cvv: string;
            }[];
        };
    }>;
    addCard(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            card: {
                cardId: string;
                name: string;
                cardType: string;
                cardNumber: string;
                validDate: string;
                cvv: string;
            }[];
        };
    }>;
    removeCard(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            card: {
                cardId: string;
                name: string;
                cardType: string;
                cardNumber: string;
                validDate: string;
                cvv: string;
            }[];
        };
    }>;
    digitalwallets(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            digiId: string;
            digiName: string;
            img: string;
            paytmAPI: string;
        }[];
    }>;
    listinternetbanking(): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: {
            bankId: string;
            name: string;
            img: string;
            apipath: string;
        }[];
    }>;
    listAddress(req: any): Promise<{
        responseCode: number;
        responseMessage: string;
        error: string;
        response: {
            address: import("../interface/address.interface").AddressInterface[];
            address_count: number;
        };
    }>;
    makeAddressPrimary(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            primaryAddress: any;
        };
    }>;
    removeAddress(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        data: any[];
    }>;
    addAddress(req: any, body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: import("../interface/address.interface").AddressInterface;
    }>;
    UpdateAddress(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            address: any;
            ContactName: any;
            landmark: any;
            city: any;
            state: any;
            pincode: any;
            country: any;
            primaryAddress: any;
            mobileNumber: any;
        };
    }>;
}
