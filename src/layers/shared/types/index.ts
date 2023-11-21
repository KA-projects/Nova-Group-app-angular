export type ApartmentDetails = {
  id: number;
  objectID: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  geography: {
    lat: number;
    lng: number;
  };
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  rentFrequency: null;
  referenceNumber: string;
  permitNumber: string;
  projectNumber: null;
  title: string;
  title_l1: string;
  title_l2: string;
  title_l3: string;
  description: string;
  descriptionTranslated: false;
  descriptionTranslated_l1: null;
  descriptionTranslated_l2: null;
  descriptionTranslated_l3: null;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  location: {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
  }[];
  category: {
    id: number;
    level: number;
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
    nameSingular: string;
    nameSingular_l1: string;
    nameSingular_l2: string;
    nameSingular_l3: string;
  }[];
  createdAt: number;
  approvedAt: number;
  updatedAt: number;
  touchedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  score_l2: number;
  score_l3: number;
  coverPhoto: {
    id: number;
    externalID: string;
    title: null;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
  };
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  photos: {
    id: number;
    externalID: string;
    title: null;
    orderIndex: number;
    nimaScore: number;
    url: string;
  }[];
  floorPlans: never[]; // Assuming it's an empty array
  videos: never[]; // Assuming it's an empty array
  panoramas: never[]; // Assuming it's an empty array
  amenities: {
    externalGroupID: number;
    groupRank: number;
    text: string;
    text_l1: string;
    text_l2: string;
    text_l3: string;
    amenities: {
      text: string;
      text_l1: string;
      text_l2: string;
      text_l3: string;
      value: string | boolean;
      rank: number;
      slug: string;
      format: 'number' | 'checkbox' | 'text';
      externalID: number;
    }[];
  }[];
  phoneNumber: {
    mobile: string;
    phone: string;
    proxyPhone: string;
    phoneNumbers: string[];
    mobileNumbers: string[];
  };
  contactName: string;
  agency: {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: {
      number: string;
      authority: string;
    }[];
    logo: {
      id: number;
      url: string;
    };
    slug: string;
    slug_l1: string;
    slug_l2: string;
    slug_l3: string;
    tr: number;
    tier: number;
    roles: never[]; // Assuming it's an empty array
    active: boolean;
    createdAt: string;
    commercialNumber: null;
    shortNumber: null;
    performanceCohort: string;
  };
  active: boolean;
  hasExactGeography: boolean;
  verification: {
    status: string;
    type: null;
    eligible: boolean;
    comment: null;
    updatedAt: number;
    verifiedAt: number;
    visitedAt: null;
    trucheckedAt: number;
  };
  isVerified: boolean;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  randBoostScore_l3: number;
  furnishingStatus: string;
  extraFields: Record<string, never>; // Assuming it's an empty object
  type: string;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  indyScore_l3: number;
  hasMatchingFloorPlans: boolean;
  hidePrice: boolean;
  locationPurposeTier: number;
  plotArea: null;
};
