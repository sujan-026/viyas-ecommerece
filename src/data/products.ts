import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Viyas LED TV (24) 60 cm - Model VCI-24″N",
    description: "A+ Grade panel with HD Ready 1366x768 resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, HDMI & USB ports, audio‑out for external systems. Energy‑efficient design with table‑top mount & wall‑mounting brackets. 10 Watt Hi‑Fi speaker delivers crystal‑clear sound. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539786774582-b5df4576bf71?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Small TVs",
    rating: 4.5,
    stock: 25,
    featured: false,
    screenSize: 24,
    resolution: "HD Ready 1366x768",
    smartFeatures: [
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI",
      "USB",
      "PC/Laptop",
      "Audio Output"
    ]
  },
  {
    id: "prod-2",
    name: "Viyas Bezel-Less with Soundbar LED TV (32) 80 cm - Model VCI-32″S-FL",
    description: "A+ Grade bezel-less panel with HD Ready 1366x768 resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, HDMI & USB ports, dual‑10 Watt Hi‑Fi soundbar. Table‑top & wall‑mounting brackets. Screen Mirroring, mobile‑data sharing, wide‑angle display, support for all audio/video formats. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Small TVs",
    rating: 4.7,
    stock: 18,
    featured: false,
    screenSize: 32,
    resolution: "HD Ready 1366x768",
    smartFeatures: [
      "Screen Mirroring",
      "Mobile Data Sharing",
      "Wide-Angle Display",
      "All Audio/Video Formats Supported",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI",
      "USB",
      "Wireless Audio-Out (E-Share)",
      "Wi-Fi Antenna"
    ]
  },
  {
    id: "prod-3",
    name: "Viyas FHD Bezel-Less with Soundbar LED TV (43) 109 cm - Model VCI-43″S-FL",
    description: "A+ Grade panel with FHD 1920x1080 resolution and 178°(H/V) viewing angle. Mobile data sharing and support for all audio/video formats. Movies support in USB mode, PC/Laptop connectivity, wide‑angle display. Table‑top & wall‑mounting brackets. HDMI x2, USB x2 ports. 20 W soundbar delivers immersive audio. Screen Mirroring and wireless audio‑out (E‑Share). Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584641911870-6196a97a4e70?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Medium TVs",
    rating: 4.8,
    stock: 42,
    featured: true,
    screenSize: 43,
    resolution: "FHD 1920x1080",
    smartFeatures: [
      "Mobile Data Sharing",
      "All Audio/Video Formats Supported",
      "Screen Mirroring",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI x2",
      "USB x2",
      "Wireless Audio-Out (E-Share)",
      "Wi-Fi Antenna"
    ]
  },
  {
    id: "prod-4",
    name: "Viyas FHD Bezel-Less with Soundbar LED TV (50) 126 cm - Model VCI-50″S-FL 4K",
    description: "A+ Grade panel with 4K UHD (3840x2160) resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, energy‑efficient design with table‑top & wall mounts. HDMI x3, USB x2 ports, built‑in Wi‑Fi antenna. 8 GB internal memory & 1 GB RAM for home‑theatre apps. Ethernet, wireless display & E‑Share/Airplay. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 35000,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Medium TVs",
    rating: 4.9,
    stock: 15,
    featured: true,
    screenSize: 50,
    resolution: "4K UHD 3840x2160",
    smartFeatures: [
      "Built-in Wi-Fi Antenna",
      "8 GB Internal Memory",
      "1 GB RAM",
      "Wireless Display",
      "E-Share & Airplay",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI x3",
      "USB x2",
      "Ethernet",
      "Audio Output (SRS Sound)"
    ]
  },
  {
    id: "prod-5",
    name: "Viyas FHD Bezel-Less with Soundbar LED TV (55) 140 cm - Model VCI-55″S-FL UHD 4K Pro",
    description: "A+ Grade panel soundbar with 4K UHD (3840x2160) resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, energy‑efficient design with table‑top & wall mounts. HDMI x3, USB x2 ports, built‑in Wi‑Fi antenna. 16 GB internal memory & 2 GB RAM for seamless multitasking. Ethernet, wireless display & E‑Share/Airplay. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 45000,
    images: [
      "https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Large TVs",
    rating: 4.8,
    stock: 32,
    featured: false,
    screenSize: 55,
    resolution: "4K UHD 3840x2160",
    smartFeatures: [
      "16 GB Internal Memory",
      "2 GB RAM",
      "Wireless Display",
      "E-Share & Airplay",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI x3",
      "USB x2",
      "Built-in Wi-Fi Antenna",
      "Ethernet",
      "Audio Output (SRS Sound)"
    ]
  },
  {
    id: "prod-6",
    name: "Viyas FHD Bezel-Less with Soundbar LED TV (65) 165 cm - Model VCI-65″S-FL UHD 4K",
    description: "A+ Grade panel soundbar with 4K UHD (3840x2160) resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, energy‑efficient design with table‑top & wall mounts. HDMI x3, USB x2 ports, built‑in Wi‑Fi antenna. 16 GB internal memory & 2 GB RAM. Ethernet, wireless display & E‑Share/Airplay. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 55000,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Large TVs",
    rating: 4.9,
    stock: 28,
    featured: true,
    screenSize: 65,
    resolution: "4K UHD 3840x2160",
    smartFeatures: [
      "16 GB Internal Memory",
      "2 GB RAM",
      "Wireless Display",
      "E-Share & Airplay",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI x3",
      "USB x2",
      "Built-in Wi-Fi Antenna",
      "Ethernet",
      "Audio Output (SRS Sound)"
    ]
  },
  {
    id: "prod-7",
    name: "Viyas FHD Bezel-Less with Soundbar LED TV (75) 191 cm - Model VCI-75″S-FL UHD 4K",
    description: "A+ Grade panel soundbar with 4K UHD (3840x2160) resolution and 178°(H/V) viewing angle. Movies support in USB mode, PC/Laptop connectivity, energy‑efficient design with table‑top & wall mounts. HDMI x3, USB x2 ports, built‑in Wi‑Fi antenna. 16 GB internal memory & 2 GB RAM. Ethernet, wireless display & E‑Share/Airplay. Pre‑installed apps: Google Play Store, YouTube, Amazon Prime, Zee5, Disney+ Hotstar, Netflix.",
    price: 65000,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Premium TVs",
    rating: 5.0,
    stock: 10,
    featured: true,
    screenSize: 75,
    resolution: "4K UHD 3840x2160",
    smartFeatures: [
      "16 GB Internal Memory",
      "2 GB RAM",
      "Wireless Display",
      "E-Share & Airplay",
      "Google Play Store",
      "YouTube",
      "Amazon Prime",
      "Zee5",
      "Disney+ Hotstar",
      "Netflix"
    ],
    connectivity: [
      "HDMI x3",
      "USB x2",
      "Built-in Wi-Fi Antenna",
      "Ethernet",
      "Audio Output (SRS Sound)"
    ]
  },
  {
    id: "prod-8",
    name: "Viyas 4K UHD Smart TV (various sizes) - WebOS-Powered",
    description: "Bezel-less design with metallic build, 4K UHD processing, 400 nits brightness, ThinQ AI, Magic Remote, universal control, Dolby Audio, Quantum Luminit+, D6500 calibration in Cinema mode, MEMC, personalised picture & sound settings on OTT, HDR10, HLG, ALLM, dual‑band Wi‑Fi, Bluetooth 5.0, Miracast, AI quad‑core processor.",
    price: 75000,
    images: [
      "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561316416-8108d10e3f75?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop"
    ],
    category: "Gaming TVs",
    rating: 4.9,
    stock: 22,
    featured: false,
    screenSize: 50,
    resolution: "4K UHD 3840x×2160",
    smartFeatures: [
      "MEMC",
      "ALLM",
      "ThinQ AI",
      "Magic Remote",
      "Dolby Audio",
      "Quantum Luminit+",
      "Universal Control",
      "HDR10",
      "HLG",
      "Personalised OTT Settings"
    ],
    connectivity: [
      "Dual-Band Wi-Fi",
      "Bluetooth 5.0",
      "Miracast"
    ]
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export const categories = [
  "Small TVs",
  "Medium TVs",
  "Large TVs",
  "Premium TVs"
];
