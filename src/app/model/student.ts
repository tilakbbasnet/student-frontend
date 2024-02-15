import { Address } from "./address";

export class Student {
    id!: number;
    fullName: string | undefined;
    email: string | undefined;
    gender: string |undefined;
    phone: string | undefined;
    level: string | undefined;
    addresses!: Address[];
    stringAddress!: string;
}
