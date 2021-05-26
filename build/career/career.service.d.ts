import { Model } from "mongoose";
import { CareerInterface } from "../interface/career.interface";
import { JobcategoryInterface, LocationInterface } from "../interface/jobcategory.interface";
export declare class CareerService {
    private readonly careerInterface;
    private readonly jobcategoryInterface;
    private readonly locationInterface;
    constructor(careerInterface: Model<CareerInterface>, jobcategoryInterface: Model<JobcategoryInterface>, locationInterface: Model<LocationInterface>);
    careers(body: any): Promise<{
        results: CareerInterface[];
        des: JobcategoryInterface[];
        pageCount: number;
        totalCount: number;
    }>;
    careerOne(body: any): Promise<CareerInterface>;
    deletecareer(body: any): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    addCareer(body: any): Promise<{
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
    addCategory(body: any): Promise<void>;
    addlocation(body: any): Promise<void>;
    Category(): Promise<JobcategoryInterface[]>;
    getUnique(array: any): any[];
    location(): Promise<{
        country: any[];
        location: LocationInterface[];
    }>;
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
    updatecareer(body: any): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    main(body: any): Promise<void>;
}
