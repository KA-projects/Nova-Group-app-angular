import { bayutData } from 'localData/bayut-data';

export type BauytData = typeof bayutData;

// --details of BauytData--
// type BauytData = ({
//     id: number;
//     ownerID: number;
//     userExternalID: string;
//     sourceID: number;
//     state: string;
//     _geoloc: {
//         lat: number;
//         lng: number;
//     };
//     geography: {
//         lat: number;
//         lng: number;
//     };
//     purpose: string;
//     price: number;
//     ... 67 more ...;
//     deal?: undefined;
// } | ... 4 more ... | {
//     ...;
// })[]
