-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);


INSERT INTO "product" ("productId", "name", "description", "price", "onSale", "available", "imageUrl")
VALUES (
    1,
    'CYBER BABE LED EYESHADOW PALETTE',
    'Our BEST SELLING eyeshadow palette features a color story that compliments each other. Mix and match these colors together for the perfect vibrant look. The duo-chrome glitters are oil-based, can be used without a glitter primer, and is best applied with fingertips. The radiant sparkles don''t do justice over a computer screen. These shades will wow you in person. Inspired by the beautiful nightlife of big cities, cyberpunk, and your favorite video game shooters. The palette includes an LED light mirror. The battery is not rechargeable or changeable. Press and hold to light up. This palette is vegan and cruelty-free. This palette was created by the CEO @jooliekawaii in the representation of herself and her passion for fantasy-like first-person shooter video games and anime culture like many others who love this. Model @fryncesca. Shades: ATTACK- light pink matte, TOKYO- light pink shimmer, PRESS START- hot pink matte, GAME OVER- light sheen pink, METAL- warm salmon duo-chrome with blue/green glitter, CYBER BABE- rose gold duo-chrome with pink/gold glitter, CPU- teal blue matte, CYBERPUNK- teal duo-chrome with blue glitter, YEAR 3000- baby blue matte, BOT- dark blue/purple duo chrome with purple glitter, TELEPORT- soft sage green with light green/blue glitter, SPY- jet black matte, CYBORG- soft purple matte, AI- purple oil-based glitter, NET- deep dark purple matte, ULTRAVIOLET- light pink duo-chrome with purple glitter, FUTURISTIC- stone blue glitter, CITY LIGHTS- shimmery white frost. Ingredients: Mica and Titanium Dioxide (Cl77891) Iron Oxides (Cl77491, Cl177492, Cl77499) Manganese Violet (Cl7742) Ferric Ammonium Ferrocyanide (Cl77510) Ultramarine Blue (Cl77007), FD&C Red No. 40 Al Lake (Cl16035) FD&C Blue No. 1 Al Lake (Cl142090:2) Main contains Talc, Mica, Mineral Oil, Kaolin, Titanium Dioxide, Magnesium Stearate, Isopropyl Palmitate, BHT. Cruelty-free Paraben-free',
    45,
    true,
    true,
    '/images/cyberbabepalette.png'
), (
    2,
    'CHARM BLUSH',
    'The matte blushes are highly pigmented and buildable. The shade "charm" is the perfect flush of a soft baby pink tone. Easy to apply and a silky formulated blush made not to crumble inside the case as most do with the heart-shaped cases. This product is vegan and cruelty-free! The packaging for this product says that the shade name is "DARLING" but my manufacturer printed them wrong, please disregard the shade name on the box. Ingredients: Talc, Mica, Magnesium Stearate, Dimethicone, Phenoxyethanol, Ethylhexylglycerin May contain: CI 15850, CI 45410, CI 77891, CI 16035, CI 19140',
    18,
    true,
    true,
    '/images/charmblush.png',
    PRIMARY KEY (
      ("productId")
    )
)

INSERT INTO "productImages" ("productId", "imageUrl", "video")
  VALUES (
    1,
    'string.png',
    null
  ), (
    1,
    'image.png',
    null
  )
