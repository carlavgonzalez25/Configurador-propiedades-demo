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
        type: "Standard",
        parent: "Shingles: Tamko building products"
      },
      {
        name: "Heritage Shadow Grey",
        alias: "Shadow Grey",
        image_url: shadowGrey,
        type: "Standard",
        parent: "Shingles: Tamko building products"
      },
      {
        name: "Heritage Glacier White",
        alias: "Glacier White",
        image_url: glacierWhite,
        type: "Standard",
        parent: "Shingles: Tamko building products"
      },
      {
        name: "Heritage premium - Rustic Evergreen",
        alias: "Rustic Evergreen",
        image_url: rusticEvergreen,
        type: "Premium",
        parent: "Shingles: Tamko building products"
      },
      {
        name: "Heritage premium - Olde English Pewter",
        alias: "Olde English Pewter",
        image_url: englishPewter,
        type: "Premium",
        parent: "Shingles: Tamko building products"
      },
      {
        name: "Heritage premium - Black Walnut",
        alias: "Black Walnut",
        image_url: blackWalnut,
        type: "Premium",
        parent: "Shingles: Tamko building products"
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
        type: "Standard",
        parent: "Granite Edge"
      },
      {
        name: "Radius",
        alias: "radius",
        image_url: radius,
        type: "Standard",
        parent: "Granite Edge"
      },
      {
        name: "1/4 Bevel",
        alias: "bevel",
        image_url: bevel,
        type: "Standard",
        parent: "Granite Edge"
      },
      {
        name: "Full Bullnose",
        alias: "fullBullnose",
        image_url: fullBullnose,
        type: "Premium",
        parent: "Granite Edge"
      },
      {
        name: "Ogee",
        alias: "ogee",
        image_url: ogee,
        type: "Premium",
        parent: "Granite Edge"
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
        type: "Standard",
        parent: "Tile Throughout"
      },
      {
        name: "PC 001 20x20",
        alias: "pc20x20",
        image_url: pc,
        type: "Standard",
        parent: "Tile Throughout"
      },
      {
        name: "London Marfil 24x24",
        alias: "londonMarfil",
        image_url: londonMarfil,
        type: "Premium",
        parent: "Tile Throughout"
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
        type: "Standard",
        parent: "Shower Floor Tile"
      },
      {
        name: "Orata Sand",
        alias: "orataSand",
        image_url: orataSand,
        type: "Standard",
        parent: "Shower Floor Tile"
      },
      {
        name: "Pable Black",
        alias: "pableBlack",
        image_url: pableBlack,
        type: "Standard",
        parent: "Shower Floor Tile"
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
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Antique White",
        alias: "antiqueWhite",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Buff",
        alias: "buff",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Harvest",
        alias: "harvest",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Irish Cream",
        alias: "irishCream",
        image_url: ventana2,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Havana Tan",
        alias: "havanaTan",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Caramel",
        alias: "caramel",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Malt",
        alias: "malt",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Naples Red",
        alias: "naplesRed",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Cuban Coffee",
        alias: "cubanCoffee",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Marble Beige",
        alias: "marbleBeige",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Sand Dune Beige",
        alias: "sandDuneBeige",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Sandstone",
        alias: "sandstone",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Navy",
        alias: "navy",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Mist",
        alias: "mist",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Stone",
        alias: "stone",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Storm Grey",
        alias: "stormGrey",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Grey",
        alias: "grey",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Windy Pine",
        alias: "windyPine",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Cream",
        alias: "cream",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Almond",
        alias: "almond",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Sandy Creek",
        alias: "sandyCreek",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Beige",
        alias: "beige",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Fawn",
        alias: "fawn",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Honey",
        alias: "honey",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Heather",
        alias: "heather",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Terra Cotta",
        alias: "terraCotta",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Moc Brown",
        alias: "mocBrown",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Oyster",
        alias: "oyster",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Birch",
        alias: "birch",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Beach Dunes",
        alias: "beachDunes",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Marina Grey",
        alias: "marinGrey",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Windsurf Blue",
        alias: "windsurfBlue",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Platinum",
        alias: "platinum",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Graphite",
        alias: "graphite",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Charcoal",
        alias: "charcoal",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "South Beach",
        alias: "southBeach",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
      },
      {
        name: "Jet Black",
        alias: "jetBlack",
        image_url: ventana1,
        type: "Standard",
        parent: "Grout"
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
        type: "Standard",
        parent: "Cabinets"
      },
      {
        name: "Providence Espresso",
        alias: "providenceEspresso",
        image_url: providenceEspresso,
        type: "Standard",
        parent: "Cabinets"
      },
      {
        name: "SC Shaker Cinder",
        alias: "shakerCinder",
        image_url: shakerCinder,
        type: "Premium",
        parent: "Cabinets"
      },
      {
        name: "Liberty Shaker White",
        alias: "shakerWhite",
        image_url: libertyShakerWhite,
        type: "Premium",
        parent: "Cabinets"
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
        type: "Standard",
        parent: "Kitchen Sink"
      },
      {
        name: "The Doral",
        description: "50/50 Double equal bowl sink. 304 stainless steel",
        alias: "theDoral",
        image_url: theDoral,
        type: "Standard",
        parent: "Kitchen Sink"
      },
      {
        name: "The Bonita",
        description:
          "60/40. Asymmetrical double bowl sink. 304 Stainless Steel",
        alias: "theBonita",
        image_url: theBonita,
        type: "Standard",
        parent: "Kitchen Sink"
      },
      {
        name: "The Tampa",
        description:
          "70/30 Asymmetrical shaped single bowl. 304 stainless steel - SNKFAB103",
        alias: "theTampa",
        image_url: theTampa,
        type: "Premium",
        parent: "Kitchen Sink"
      },
      {
        name: "The Duval",
        description:
          "70/30 Asymmetrical double bowl sink 304 stainless steel - SNKFAB7030",
        alias: "theDuval",
        image_url: theDuval,
        type: "Premium",
        parent: "Kitchen Sink"
      },
      {
        name: "The Calypso",
        description:
          "33*21*10 60/40. Asymmetrical double bow farm sink. 304 stainless steel - SNKCRF6040",
        alias: "double bow farm sink",
        image_url: theCalypso,
        type: "Premium",
        parent: "Kitchen Sink"
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
        type: "Standard",
        parent: "Bathroom Vanity Sink"
      },
      {
        name: "Oval Biscuit",
        description:
          '17-5/8" x 14-3/8" x 8-1/8". White cut size oval vanity bowl. SNKFAB1714W',
        alias: "Biscuit cut size oval vanity bowl",
        image_url: oval,
        type: "Standard",
        parent: "Bathroom Vanity Sink"
      },
      {
        name: "Rectangle White",
        description:
          '18-1/8" x 13" x 7-5/8" Cut size rectangle vanity bowl. SNKFAB1813W',
        alias: "rectangleWhite",
        image_url: rectangle,
        type: "Standard",
        parent: "Bathroom Vanity Sink"
      },
      {
        name: "Rectangle Biscuit",
        description:
          '18-1/8" x 13" x 7-5/8", Cut size rectangle vanity bowl.  SNKFAB1813W',
        alias: "rectangleBiscuit",
        image_url: rectangle,
        type: "Standard",
        parent: "Bathroom Vanity Sink"
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
        type: "Standard",
        parent: "Bathroom faucet"
      },
      {
        name: "Eva Chrome",
        alias: "evaChrome",
        image_url: evaChrome,
        type: "Standard",
        parent: "Bathroom faucet"
      },
      {
        name: "Eva bronze",
        alias: "evaBronze",
        image_url: evaBronze,
        type: "Premium",
        parent: "Bathroom faucet"
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
        type: "standard",
        parent: "Interior wall paint color"
      },
      {
        name: "Option 2",
        alias: "option 2",
        image_url: interiorOption2,
        type: "standard",
        parent: "Interior wall paint color"
      },
      {
        name: "Option 3",
        alias: "option 3",
        image_url: interiorOption3,
        type: "standard",
        parent: "Interior wall paint color"
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
        type: "standard",
        parent: "Exterior wall paint color"
      },
      {
        name: "Option 2",
        alias: "option 2",
        image_url: exteriorOption2,
        type: "standard",
        parent: "Exterior wall paint color"
      },
      {
        name: "Option 3",
        alias: "option 3",
        image_url: exteriorOption3,
        type: "standard",
        parent: "Exterior wall paint color"
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
    type: "Standard",
    parent: "Shingles: Tamko building products"
  },
  tileThroughout: "",
  showerFloorTile: {
    name: "Orata Sand",
    alias: "orataSand",
    image_url:
      "static/media/modeloParana_showerFloorTile_orataSand.a5fd449d.jpg",
    type: "Standard",
    parent: "Shower Floor Tile"
  },
  cabinets: {
    name: "Providence Espresso",
    alias: "providenceEspresso",
    image_url:
      "static/media/modeloParana_cabinets_providenceEspresso.15064821.jpg",
    type: "Standard",
    parent: "Cabinets"
  },
  kitchenSink: "",
  bathroomSink: {
    name: "Oval Biscuit",
    description:
      '17-5/8" x 14-3/8" x 8-1/8". White cut size oval vanity bowl. SNKFAB1714W',
    alias: "Biscuit cut size oval vanity bowl",
    image_url: "static/media/modeloParana_vanitySink_oval.774f4202.jpg",
    type: "Standard",
    parent: "Bathroom Vanity Sink"
  },
  bathroomFaucet: "",
  interiorWallColor: {
    name: "Option 2",
    alias: "option 2",
    image_url: "static/media/modeloParana_interiorWallColor_2.3590173a.jpg",
    type: "standard",
    parent: "Interior wall paint color"
  },
  exteriorWallColor: "",
  graniteEdge: {
    name: "1/4 Bevel",
    alias: "bevel",
    image_url:
      "data:image/png;base64,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AMCHEQABACBCBAQA7kQABACAEBEQALidAAgAADEiIABwKwEQAACCREAA4CYBEAAAokRAAGAIgAAA0CYCAgACIAAAxImAALBsAiAAACyACAgAyyUAAgDAQoiAALBMAiAAACyICAgAyyMAAgDAwoiAALAsAiAAACyQCAgAyyEAAgDAQomAALAMAiAAACyYCAgAfQIgAAAsnAgIAG0CIAAAIAICQJgACAAAvEcEBIAmARAAAHifCAgAPQIgAADwd0RAAGgRAAEAgA8QAQGgQwAEAADuSAQEgAYBEAAA+FAiIAAcPgEQAAC4KxEQAA6bAAgAAHwkERAADpcACAAAHIkICACHSQAEAACOTAQEgMMjAAIAAPdEBASAwyIAAgAA90wEBIDDIQACAACTiIAAcBgEQAAAYDIREADmTwAEAAB2IgICwLwJgAAAwM5EQACYLwEQAADYCxEQAOZJAAQAAPZGBASA+REAAQCAvRIBAWBeBEAAAGDvREAAmA8BEAAAOBYiIADMgwAIAAAcGxEQAE6fAAgAABwrERAATpcACAAAHDsREABOjwAIAACcCBEQAE6HAAgAAJwYERAATp4ACAAAnCgREABOlgAIAACcOBEQAE6OAAgAAJwKERAAToYACAAAnBoREACOnwAIAACcKhEQAI6XAAgAAJw6ERAAjo8ACAAAzIIICADHQwAEAABmQwQEgP0TAAEAgFkRAQFgvwRAAABgdkRAANgfARAAAJglERAA9kMABAAAZksEBIDdCYAAAMCsiYAAsBsBEAAAmD0REACmEwABAICDIAICwDQCIAAAcDBEQAC4dwIgAABwUERAALg3AiAAAHBwREAAODoBEAAAOEgiIAAcjQAIAAAcLBEQAD6aAAgAABw0ERAA7k4ABAAADp4ICAAfTgAEAAASREAAuDMBEAAAyBABAeCDBEAAACBFBASAvycAAgAAOSIgAPw/ARAAAEgSAQHg/wiAAABAlggIAAIgAAAQJwICsHQCIAAAkCcCArBkAiAAALAIIiAASyUAAgAAiyECArBEAiAAALAoIiAASyMAAgAAiyMCArAkAiAAALBIIiAASyEAAgAAiyUCArAEAiAAALBoIiAAdQIgAACweCIgAGUCIAAAgAgIQJgACAAAsCUCAlAkAAIAANxCBASgRgAEAAC4jQgIQIkACAAAcAciIAAVAiAAAMCHEAEBKBAAAQAA7kIEBODQCYAAAAAfQQQE4JAJgAAAAEcgAgJwqARAAACAIxIBAThEAiAAAMA9EAEBODQCIAAAwD0SAQE4JAIgAADABCIgAIdCAAQAAJhIBATgEAiAAAAAOxABAZg7ARAAAGBHIiAAcyYAAgAA7IEICMBcCYAAAAB7cnsEBIA5EAABAAD2aBsBAWA2BEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAAwgRAAAAAAAgTAAEAAAAgTAAEAAAAgDABEAAAAADCBEAAAAAACBMAAQAAACBMAAQAAACAMAEQAAAAAMIEQAAAAAAIEwABAAAAIEwABAAAAIAwARAAAAAA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JgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAGECIAAAAACECYAAAAAAECYAAgAAAECYAAgAAAAAYQIgAAAAAIQJgAAAAAAQJgACAAAAQJgACAAAAABhAiAAAAAAhAmAAAAAABAmAAIAAABAmAAIAAAAAFVjjL8BXo4J2fvO2v8AAAAASUVORK5CYII=",
    type: "Standard",
    parent: "Granite Edge",
    subOption: {
      name: "Santa Cecilia",
      alias: "santaCecilia",
      image_url: "/app/static/media/santaCecilia.26082dcc.jpg"
    }
  },
  grout: ""
};

export { properties, configPrueba };
