import { Category } from "./types";

export const categoriesData: Category[] = [
  {
    id: "metropolitan",
    title: "Metropolitan Icons",
    subtitle: "Residences set within the world's most dynamic city skylines.",
    properties: [
      {
        id: "m1",
        title: "The Pinnacle Penthouse",
        location: "Manhattan, New York",
        price: "$18,500,000",
        beds: 4,
        baths: 5,
        sqft: "5,200 sqft",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        description: "A crowning architectural marvel. Featuring soaring double-height ceilings, a private glass-enclosed sky pool, and uninhibited 360-degree views of the Manhattan skyline.",
        highlights: ["360° Skyline Views", "Private Sky Pool", "Bespoke Onyx Kitchen", "24/7 Concierge Service"]
      },
      {
        id: "m2",
        title: "The Tokyo Apex Suite",
        location: "Minato, Tokyo",
        price: "$12,400,000",
        beds: 3,
        baths: 3.5,
        sqft: "3,800 sqft",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        description: "Hyper-connected modern sanctuary. Crafted from bush-hammered architectural concrete and flawless high-gloss lacquered timber, framing magnificent views of Tokyo Tower.",
        highlights: ["Views of Mt. Fuji", "Integrated Tech OS", "Traditional Tea Room Room", "Sub-Zero Wine Cellar"]
      }
    ]
  },
  {
    id: "seaside",
    title: "Seaside Sanctuaries",
    subtitle: "Private villas and retreats along pristine coastlines.",
    properties: [
      {
        id: "s1",
        title: "Villa d'Azur",
        location: "Amalfi Coast, Italy",
        price: "$24,000,000",
        beds: 6,
        baths: 7,
        sqft: "8,400 sqft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        description: "Staggered whitewashed terraces clinging model-like to high limestone cliffs. Melds local ceramic tilework with custom limestone infinity pools looking out onto Amalfi seas.",
        highlights: ["Private Deep-Water Dock", "Olive Grove Gardens", "Cliffs-built Funicular", "1,500-Bottle Cave Cellar"]
      },
      {
        id: "s2",
        title: "Caldera Horizon Cove",
        location: "Oia, Santorini",
        price: "$9,800,000",
        beds: 4,
        baths: 5,
        sqft: "4,200 sqft",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        description: "A traditional cycladic cave structure redesigned as an absolute luxury outpost. Plunge into your heated indoor-outdoor cave pool staring directly into the sunset.",
        highlights: ["Direct Caldera Views", "Heated Cave Plunge Pool", "Polished Microcement Floors", "Sunset Viewing Deck"]
      }
    ]
  },
  {
    id: "mountain",
    title: "Mountain Escapes",
    subtitle: "Exclusive chalets and estates nestled in breathtaking landscapes.",
    properties: [
      {
        id: "mo1",
        title: "The Obsidian Chalet",
        location: "Aspen, Colorado",
        price: "$15,200,000",
        beds: 5,
        baths: 6,
        sqft: "6,800 sqft",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
        description: "Ski-in, ski-out supremacy. Custom crafted of charred cedar and raw hand-cut stone columns, featuring double-sided stone fireplaces and expansive heated viewing pavilions.",
        highlights: ["Direct Ski-in / Ski-out", "Heated Timber Deck", "Indoor Spa & Sauna", "Custom Gear Locker Room"]
      },
      {
        id: "mo2",
        title: "Matterhorn Crest Pavilion",
        location: "Zermatt, Switzerland",
        price: "$16,500,000",
        beds: 5,
        baths: 5,
        sqft: "5,900 sqft",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        description: "Surrounded by imposing peaks. Expansive thermal-insulated triple glass framing uninterrupted views of the Matterhorn. Handpicked larch pine wood paneling lines the interiors.",
        highlights: ["Matterhorn Panoramic Views", "Thermal Spring Pools", "Home Theater Suite", "Private Chef Kitchen"]
      }
    ]
  },
  {
    id: "historic",
    title: "Historic Charm",
    subtitle: "Timeless properties within cultural capitals and heritage districts.",
    properties: [
      {
        id: "h1",
        title: "Palazzo di Renaissance",
        location: "Florence, Italy",
        price: "$11,200,000",
        beds: 4,
        baths: 4.5,
        sqft: "6,100 sqft",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description: "A majestic estate built in 1540, impeccably restored under museum supervision. Showcasing pristine, original ceiling frescoes, handcrafted iron loggias, and a manicured secret courtyard.",
        highlights: ["Museum-Restored Frescoes", "Private Tuscan Courtyard", "Grand Loggia Entryway", "Limestone Oil-Press Vault"]
      },
      {
        id: "h2",
        title: "The Chelsea Mews House",
        location: "London, United Kingdom",
        price: "$8,900,000",
        beds: 3,
        baths: 3,
        sqft: "3,100 sqft",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        description: "Classic London charm. This red-brick Victorian mews boasts double-height glass extensions facing a beautifully secluded botanical courtyard garden.",
        highlights: ["Victorian Heritage Façade", "Glass Roof Extension", "Custom Brass Fixtures", "Bespoke Library Nook"]
      }
    ]
  }
];
