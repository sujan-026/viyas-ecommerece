
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  addresses: {
    id: string;
    title: string;
    fullName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
  }[];
  preferences?: {
    preferredScreenSize?: number;
    preferredResolution?: string;
    mustHaveFeatures?: string[];
    notificationFrequency?: "daily" | "weekly" | "monthly" | "none";
  };
}
