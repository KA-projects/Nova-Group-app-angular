export type BayutData = {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  geography: {
    lat: number;
    lng: number;
  };
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: null | string;
  referenceNumber: string;
  permitNumber: string;
  projectNumber: null | string;
  title: string;
  title_l1: string;
  title_l2: string;
  title_l3: string;
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
    type?: string;
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
  updatedAt: number;
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
    title: null | string;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
  };
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: {
    mobile: string;
    phone: string;
    whatsapp: string;
    proxyMobile: string;
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
    roles: any[];
    active: boolean;
    createdAt: string;
    commercialNumber: null | string;
    shortNumber: null | string;
    performanceCohort: string;
  };
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: {
    updatedAt: number;
    eligible: boolean;
    status: string;
    verifiedAt: number;
    trucheckedAt: number;
  };
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  randBoostScore_l3: number;
  floorPlanID: number;
  furnishingStatus: string;
  extraFields: {
    dldBuildingNK: string;
    dldPropertySK: string;
    hasRentTransactions: boolean;
    hasSaleTransactions: boolean;
  };
  type: string;
  hasTransactionHistory: boolean;
  ownerAgent: {
    externalID: string;
    name: string;
    name_l1: string;
    name_l2: string;
    name_l3: string;
    user_image: string;
    user_image_id: number;
    isTruBroker: boolean;
  };
  amenities: string[];
  amenities_l1: string[];
  amenities_l2: string[];
  amenities_l3: string[];
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  indyScore_l3: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  plotArea: null | number;
  objectID: string;
  _highlightResult: {
    referenceNumber: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    title_l1: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    title_l2: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    title_l3: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    externalID: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    agency: {
      name: {
        value: string;
        matchLevel: string;
        matchedWords: string[];
      };
      name_l1: {
        value: string;
        matchLevel: string;
        matchedWords: string[];
      };
      name_l2: {
        value: string;
        matchLevel: string;
        matchedWords: string[];
      };
      name_l3: {
        value: string;
        matchLevel: string;
        matchedWords: string[];
      };
    };
    keywords: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    }[];
  };
}[];
