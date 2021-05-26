import { CareerService } from "./career.service";
export declare class CareerController {
    private readonly careerService;
    constructor(careerService: CareerService);
    career(body: any): Promise<{
        results: import("../interface/career.interface").CareerInterface[];
        des: import("../interface/jobcategory.interface").JobcategoryInterface[];
        pageCount: number;
        totalCount: number;
    }>;
    career1(): Promise<{
        results: {
            title: string;
            description: string;
            modified: number;
            internalJob: boolean;
            url: string;
            locations: {
                id: string;
                title: string;
            }[];
            teams: {
                id: string;
                title: string;
            }[];
        }[];
        pageCount: number;
        totalCount: number;
    }>;
    AddCareer(body: any): Promise<{
        responseCode: number;
        error: boolean;
        responseMessage: string;
        response: {
            jobCode: string;
            title: string;
            description: string;
            exp: string;
            designation: string;
            country: string;
            location: string;
            state: string;
            addBy: string;
        };
    }>;
    updatecareer(body: any): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    deleteCareer(body: any): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    careerOne(body1: any, id: string): Promise<import("../interface/career.interface").CareerInterface>;
    email(body: any): Promise<void>;
    Category(): Promise<import("../interface/jobcategory.interface").JobcategoryInterface[]>;
    countries(): Promise<{
        country: ({
            id: number;
            name: string;
            iso3: string;
            iso2: string;
            phone_code: string;
            capital: string;
            currency: string;
            currency_symbol: string;
            tld: string;
            native: string;
            region: string;
            subregion: string;
            timezones: {
                zoneName: string;
                gmtOffset: number;
                gmtOffsetName: string;
                abbreviation: string;
                tzName: string;
            }[];
            translations: {
                br: string;
                pt: string;
                nl: string;
                hr: string;
                fa: string;
                de: string;
                es: string;
                fr: string;
                ja: string;
                it: string;
            };
            latitude: string;
            longitude: string;
            emoji: string;
            emojiU: string;
        } | {
            id: number;
            name: string;
            iso3: string;
            iso2: string;
            phone_code: string;
            capital: string;
            currency: string;
            currency_symbol: string;
            tld: string;
            native: string;
            region: string;
            subregion: string;
            timezones: {
                zoneName: string;
                gmtOffset: number;
                gmtOffsetName: string;
                abbreviation: string;
                tzName: string;
            }[];
            translations: {
                br: string;
                pt: string;
                fa: string;
                de: string;
                fr: string;
                it: string;
                nl?: undefined;
                hr?: undefined;
                es?: undefined;
                ja?: undefined;
            };
            latitude: string;
            longitude: string;
            emoji: string;
            emojiU: string;
        } | {
            id: number;
            name: string;
            iso3: string;
            iso2: string;
            phone_code: string;
            capital: string;
            currency: string;
            currency_symbol: string;
            tld: string;
            native: string;
            region: string;
            subregion: string;
            timezones: {
                zoneName: string;
                gmtOffset: number;
                gmtOffsetName: string;
                abbreviation: string;
                tzName: string;
            }[];
            translations: {
                br: string;
                pt: string;
                nl: string;
                fa: string;
                de: string;
                fr: string;
                it: string;
                hr?: undefined;
                es?: undefined;
                ja?: undefined;
            };
            latitude: string;
            longitude: string;
            emoji: string;
            emojiU: string;
        } | {
            id: number;
            name: string;
            iso3: string;
            iso2: string;
            phone_code: string;
            capital: string;
            currency: string;
            currency_symbol: string;
            tld: string;
            native: string;
            region: string;
            subregion: string;
            timezones: {
                zoneName: string;
                gmtOffset: number;
                gmtOffsetName: string;
                abbreviation: string;
                tzName: string;
            }[];
            translations: {
                br: string;
                pt: string;
                nl: string;
                hr: string;
                fa: string;
                de: string;
                es: string;
                fr: string;
                ja: string;
                it?: undefined;
            };
            latitude: string;
            longitude: string;
            emoji: string;
            emojiU: string;
        } | {
            id: number;
            name: string;
            iso3: string;
            iso2: string;
            phone_code: string;
            capital: string;
            currency: string;
            currency_symbol: string;
            tld: string;
            native: string;
            region: string;
            subregion: string;
            timezones: {
                zoneName: string;
                gmtOffset: number;
                gmtOffsetName: string;
                abbreviation: string;
                tzName: string;
            }[];
            translations: {
                br: string;
                pt: string;
                nl: string;
                fa: string;
                de: string;
                es: string;
                fr: string;
                ja: string;
                it: string;
                hr?: undefined;
            };
            latitude: string;
            longitude: string;
            emoji: string;
            emojiU: string;
        })[];
        state: {
            id: number;
            name: string;
            country_id: number;
            country_code: string;
            state_code: string;
            latitude: string;
            longitude: string;
        }[];
    }>;
    location(): Promise<{
        country: any[];
        location: import("../interface/jobcategory.interface").LocationInterface[];
    }>;
}
