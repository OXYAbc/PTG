export interface Country {
    label: string;
    code: string;
    items: City[];
}

export interface City {
    label: string;
    value: string;
}