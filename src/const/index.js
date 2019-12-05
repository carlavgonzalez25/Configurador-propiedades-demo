import {
  libertyShakerWhite,
  portlandChestnut,
  providenceEspresso,
  shakerCinder,
  exteriorOption1,
  exteriorOption2,
  exteriorOption3,
  interiorOption1,
  interiorOption2,
  interiorOption3,
  glacierWhite,
  blackWalnut,
  englishPewter,
  rusticEvergreen,
  rusticHickory,
  shadowGrey,
  orataSand,
  pableBlack,
  pableEarth,
  londonMarfil,
  madridBeige,
  pc,
  brushedNickel,
  evaBronze,
  evaChrome,
  theBonita,
  theCalypso,
  theDoral,
  theDuval,
  thePompano,
  theTampa,
  oval,
  rectangle,
  ventana1,
  ventana2,
  ventana3,
  radius,
  fullBullnose,
  flat,
  bevel,
  ogee,
  santaCeciliaLight,
  santaCecilia
} from "../img";

const properties = {
  shingles: {
    name: "Shingles: Tamko building products",
    alias: "shingles",
    options: [
      {
        name: "Heritage Rustic Hickory",
        alias: "Rustic Hickory",
        image_url: rusticHickory,
        type: "Standard"
      },
      {
        name: "Heritage Shadow Grey",
        alias: "Shadow Grey",
        image_url: shadowGrey,
        type: "Standard"
      },
      {
        name: "Heritage Glacier White",
        alias: "Glacier White",
        image_url: glacierWhite,
        type: "Standard"
      },
      {
        name: "Heritage premium - Rustic Evergreen",
        alias: "Rustic Evergreen",
        image_url: rusticEvergreen,
        type: "Premium"
      },
      {
        name: "Heritage premium - Olde English Pewter",
        alias: "Olde English Pewter",
        image_url: englishPewter,
        type: "Premium"
      },
      {
        name: "Heritage premium - Black Walnut",
        alias: "Black Walnut",
        image_url: blackWalnut,
        type: "Premium"
      }
    ]
  },
  graniteEdge: {
    name: "Granite Edge",
    alias: "graniteEdge",
    subOptions: [
      {
        name: "Santa Cecilia",
        alias: "santaCecilia",
        image_url: santaCecilia
      },
      {
        name: "Santa Cecilia Light",
        alias: "santaCeciliaLight",
        image_url: santaCeciliaLight
      }
    ],
    options: [
      {
        name: "Flat",
        alias: "flat",
        image_url: flat,
        type: "Standard"
      },
      {
        name: "Radius",
        alias: "radius",
        image_url: radius,
        type: "Standard"
      },
      {
        name: "1/4 Bevel",
        alias: "bevel",
        image_url: bevel,
        type: "Standard"
      },
      {
        name: "Full Bullnose",
        alias: "fullBullnose",
        image_url: fullBullnose,
        type: "Premium"
      },
      {
        name: "Ogee",
        alias: "ogee",
        image_url: ogee,
        type: "Premium"
      }
    ]
  },
  tileThroughout: {
    name: "Tile Throughout",
    alias: "tileThroughout",
    options: [
      {
        name: "Madrid Beige 20x20",
        alias: "beige20x20",
        image_url: madridBeige,
        type: "Standard"
      },
      {
        name: "PC 001 20x20",
        alias: "pc20x20",
        image_url: pc,
        type: "Standard"
      },
      {
        name: "London Marfil 24x24",
        alias: "londonMarfil",
        image_url: londonMarfil,
        type: "Premium"
      }
    ]
  },
  showerFloorTile: {
    name: "Shower Floor Tile",
    alias: "showerFloorTile",
    options: [
      {
        name: "Pable Earth 12x12",
        alias: "pableEarth",
        image_url: pableEarth,
        type: "Standard"
      },
      {
        name: "Orata Sand",
        alias: "orataSand",
        image_url: orataSand,
        type: "Standard"
      },
      {
        name: "Pable Black",
        alias: "pableBlack",
        image_url: pableBlack,
        type: "Standard"
      }
    ]
  },
  grout: {
    name: "Grout",
    alias: "grout",
    options: [
      {
        name: "White",
        alias: "white",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Antique White",
        alias: "antiqueWhite",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Buff",
        alias: "buff",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Harvest",
        alias: "harvest",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Irish Cream",
        alias: "irishCream",
        image_url: ventana2,
        type: "Standard"
      },
      {
        name: "Havana Tan",
        alias: "havanaTan",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Caramel",
        alias: "caramel",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Malt",
        alias: "malt",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Naples Red",
        alias: "naplesRed",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Cuban Coffee",
        alias: "cubanCoffee",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Marble Beige",
        alias: "marbleBeige",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Sand Dune Beige",
        alias: "sandDuneBeige",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Sandstone",
        alias: "sandstone",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Navy",
        alias: "navy",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Mist",
        alias: "mist",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Stone",
        alias: "stone",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Storm Grey",
        alias: "stormGrey",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Grey",
        alias: "grey",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Windy Pine",
        alias: "windyPine",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Cream",
        alias: "cream",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Almond",
        alias: "almond",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Sandy Creek",
        alias: "sandyCreek",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Beige",
        alias: "beige",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Fawn",
        alias: "fawn",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Honey",
        alias: "honey",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Heather",
        alias: "heather",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Terra Cotta",
        alias: "terraCotta",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Moc Brown",
        alias: "mocBrown",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Oyster",
        alias: "oyster",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Birch",
        alias: "birch",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Beach Dunes",
        alias: "beachDunes",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Marina Grey",
        alias: "marinGrey",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Windsurf Blue",
        alias: "windsurfBlue",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Platinum",
        alias: "platinum",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Graphite",
        alias: "graphite",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Charcoal",
        alias: "charcoal",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "South Beach",
        alias: "southBeach",
        image_url: ventana1,
        type: "Standard"
      },
      {
        name: "Jet Black",
        alias: "jetBlack",
        image_url: ventana1,
        type: "Standard"
      }
    ]
  },
  cabinets: {
    name: "Cabinets",
    alias: "cabinets",
    options: [
      {
        name: "Portland Chestnut",
        alias: "portlandChestnut",
        image_url: portlandChestnut,
        type: "Standard"
      },
      {
        name: "Providence Espresso",
        alias: "providenceEspresso",
        image_url: providenceEspresso,
        type: "Standard"
      },
      {
        name: "SC Shaker Cinder",
        alias: "shakerCinder",
        image_url: shakerCinder,
        type: "Premium"
      },
      {
        name: "Liberty Shaker White",
        alias: "shakerWhite",
        image_url: libertyShakerWhite,
        type: "Premium"
      }
    ]
  },
  kitchenSink: {
    name: "Kitchen Sink",
    alias: "kitchenSink",
    options: [
      {
        name: "The Pompano",
        description:
          "30/18 Standard large single bowl sink. 304 Stainless steel",
        alias: "thePompano",
        image_url: thePompano,
        type: "Standard"
      },
      {
        name: "The Doral",
        description: "50/50 Double equal bowl sink. 304 stainless steel",
        alias: "theDoral",
        image_url: theDoral,
        type: "Standard"
      },
      {
        name: "The Bonita",
        description:
          "60/40. Asymmetrical double bowl sink. 304 Stainless Steel",
        alias: "theBonita",
        image_url: theBonita,
        type: "Standard"
      },
      {
        name: "The Tampa",
        description:
          "70/30 Asymmetrical shaped single bowl. 304 stainless steel - SNKFAB103",
        alias: "theTampa",
        image_url: theTampa,
        type: "Premium"
      },
      {
        name: "The Duval",
        description:
          "70/30 Asymmetrical double bowl sink 304 stainless steel - SNKFAB7030",
        alias: "theDuval",
        image_url: theDuval,
        type: "Premium"
      },
      {
        name: "The Calypso",
        description:
          "33*21*10 60/40. Asymmetrical double bow farm sink. 304 stainless steel - SNKCRF6040",
        alias: "double bow farm sink",
        image_url: theCalypso,
        type: "Premium"
      }
    ]
  },
  bathroomSink: {
    name: "Bathroom Vanity Sink",
    alias: "bathroomSink",
    options: [
      {
        name: "Oval White",
        description:
          '17-5/8" x 14-3/8" x 8-1/8". White cut size oval vanity bowl. SNKFAB1714W ',
        alias: "White cut size oval vanity bowl",
        image_url: oval,
        type: "Standard"
      },
      {
        name: "Oval Biscuit",
        description:
          '17-5/8" x 14-3/8" x 8-1/8". White cut size oval vanity bowl. SNKFAB1714W',
        alias: "Biscuit cut size oval vanity bowl",
        image_url: oval,
        type: "Standard"
      },
      {
        name: "Rectangle White",
        description:
          '18-1/8" x 13" x 7-5/8" Cut size rectangle vanity bowl. SNKFAB1813W',
        alias: "rectangleWhite",
        image_url: rectangle,
        type: "Standard"
      },
      {
        name: "Rectangle Biscuit",
        description:
          '18-1/8" x 13" x 7-5/8", Cut size rectangle vanity bowl.  SNKFAB1813W',
        alias: "rectangleBiscuit",
        image_url: rectangle,
        type: "Standard"
      }
    ]
  },
  bathroomFaucet: {
    name: "Bathroom faucet",
    alias: "bathroomFaucet",
    options: [
      {
        name: "Eva Brushed Nickel",
        alias: "Eva brushed nickel",
        image_url: brushedNickel,
        type: "Standard"
      },
      {
        name: "Eva Chrome",
        alias: "evaChrome",
        image_url: evaChrome,
        type: "Standard"
      },
      {
        name: "Eva bronze",
        alias: "evaBronze",
        image_url: evaBronze,
        type: "Premium"
      }
    ]
  },
  interiorWallColor: {
    name: "Interior wall paint color",
    alias: "interiorWallColor",
    options: [
      {
        name: "Option 1",
        alias: "option 1",
        image_url: interiorOption1,
        type: "optional"
      },
      {
        name: "Option 2",
        alias: "option 2",
        image_url: interiorOption2,
        type: "optional"
      },
      {
        name: "Option 3",
        alias: "option 3",
        image_url: interiorOption3,
        type: "optional"
      }
    ]
  },
  exteriorWallColor: {
    name: "Exterior wall paint color",
    alias: "exteriorWallColor",
    options: [
      {
        name: "Option 1",
        alias: "option 1",
        image_url: exteriorOption1,
        type: "optional"
      },
      {
        name: "Option 2",
        alias: "option 2",
        image_url: exteriorOption2,
        type: "optional"
      },
      {
        name: "Option 3",
        alias: "option 3",
        image_url: exteriorOption3,
        type: "optional"
      }
    ]
  }
};

const configPrueba = {
  shingles: {
    name: "Heritage Glacier White",
    alias: "Glacier White",
    image_url:
      "static/media/modeloParana_shingles_heritageGlacierWhite.d9d251ae.jpg",
    type: "Standard"
  },
  tileThroughout: {
    name: "London Marfil 24x24",
    alias: "londonMarfil",
    image_url:
      "static/media/modeloParana_tileThroughout_londonMarfile.efede06e.jpg",
    type: "Premium"
  },
  showerFloorTile: {
    name: "Pable Black",
    alias: "pableBlack",
    image_url:
      "static/media/modeloParana_showerFloorTile_pableBlack.27450298.jpg",
    type: "Standard"
  },
  cabinets: {
    name: "Portland Chestnut",
    alias: "portlandChestnut",
    image_url:
      "static/media/modeloParana_cabinets_portlandChestnut.5c232d7f.jpg",
    type: "Standard"
  },
  kitchenSink: {
    name: "The Pompano",
    description: "30/18 Standard large single bowl sink. 304 Stainless steel",
    alias: "thePompano",
    image_url: "static/media/modeloParana_kitchenSink_thePompano.5bed840e.jpg",
    type: "Standard"
  },
  bathroomSink: {
    name: "Oval White",
    description:
      '17-5/8" x 14-3/8" x 8-1/8". White cut size oval vanity bowl. SNKFAB1714W ',
    alias: "White cut size oval vanity bowl",
    image_url: "static/media/modeloParana_vanitySink_oval.774f4202.jpg",
    type: "Standard"
  },
  bathroomFaucet: {
    name: "Eva Brushed Nickel",
    alias: "Eva brushed nickel",
    image_url:
      "static/media/modeloParana_bathroomSink_brushedNickel.579dbb2b.jpg",
    type: "Standard"
  },
  interiorWallColor: {
    name: "Option 1",
    alias: "option 1",
    image_url: "static/media/modeloParana_interiorWallColor_1.c82dcf23.jpg",
    type: "optional"
  },
  exteriorWallColor: {
    name: "Option 1",
    alias: "option 1",
    image_url: "static/media/modeloParana_exteriorWallColor_1.0aaff03b.jpg",
    type: "optional"
  },
  graniteEdge: {
    name: "Ogee",
    alias: "ogee",
    image_url: "static/media/ventana-1.74ee1d46.PNG",
    type: "Premium"
  },
  grout: {
    name: "White",
    alias: "white",
    image_url: "static/media/ventana-1.74ee1d46.PNG",
    type: "Standard"
  },
  selected: "exteriorWallColor",
  imgElegida: "/app/static/media/modeloParana_exteriorWallColor_1.0aaff03b.jpg",
  step: { der: "save", izq: "categories" },
  alert: null,
  filename: "Prueba 2"
};

export { properties, configPrueba };
