const sql = require('better-sqlite3');
const db = sql('gadgets.db');

const dummyGadgets = [
  {
    title: 'Samsung S24',
    slug: 'samsungS24',
    image: '/images/samsung-s24-ultra.jpg',
    summary:
      'The Samsung Galaxy S24 is a powerful device with significant improvements over its predecessor.',
    opinion: `
      1. Display Brightness: The 6.2-inch Dynamic AMOLED 2X display with a peak brightness of 2,600 nits is a standout feature. 
            It provides a clear and vivid viewing experience, even in bright sunlight.

      2. Performance: Powered by the Snapdragon 8 Gen 3 (or Exynos 2400 in some regions),
         the phone delivers excellent performance for gaming, multitasking, and day-to-day use.

      3. Camera Setup: The triple camera system, including a 50MP main sensor and 10MP telephoto lens with 3x optical zoom, 
            should meet the needs of most users looking for solid photography.

      4. AI Features: The AI-driven software features like live translation and photo editing add extra value,
             making the phone smarter and more adaptable to modern usage.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Samsung A55',
    slug: 'samsungA55',
    image: '/images/samsung-a55-5g.jpg',
    summary:
      'The Samsung Galaxy A55 5G is a solid mid-range smartphone that combines a sleek design with impressive features at a competitive price.',
    opinion: `
      1. Premium Design: Despite being a mid-range phone, 
            the A55 5G has a premium feel with its aluminum frame and Gorilla Glass, offering a sturdy build.

      2. Display: The 6.6-inch Super AMOLED display with a 120Hz refresh rate delivers vibrant colors and smooth scrolling,
         making it ideal for media consumption.

      3. Battery Life: The 5,000mAh battery provides excellent longevity,
         easily lasting a full day with moderate use, and even stretching to two days under lighter usage.

      4. Camera Setup: Equipped with a 50MP main camera, the A55 offers solid photography, especially in well-lit conditions, 
            and includes features like Nightography for low-light performance.

      5. Samsung Knox Security: Samsung's Knox Vault security system is included, 
            ensuring your personal data is well-protected.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Iphone 14',
    slug: 'iphone14',
    image: '/images/iphone-14.jpg',
    summary:
      'The iPhone 14 offers a 6.1-inch Super Retina XDR OLED display, powered by the A15 Bionic chip with 5G support.',
    opinion: `
      1. Performance: Powered by the A15 Bionic chip, 
            the iPhone 14 delivers fast performance, handling multitasking and demanding apps with ease.

      2. Camera: The dual 12MP camera system offers 
            excellent low-light photography and improved video stabilization.

      3. Safety Features: Emergency SOS via satellite and 
            crash detection are valuable additions for safety-conscious users.

      4. Display: The 6.1-inch Super Retina XDR OLED display is bright and vivid.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Iphone 15',
    slug: 'iphone15',
    image: '/images/iphone-15.jpg',
    summary:
      "The iPhone 15, released in September 2023, introduces several key updates and features.",
    opinion: `
      1. Enhanced Performance: It features the A17 Pro chip, 
            which provides faster performance and improved efficiency compared to previous models.

      2. Improved Camera System: The iPhone 15 has upgraded camera technology, including enhanced low-light performance,
         better optical zoom, and new computational photography features.

      3. USB-C Port: It adopts the USB-C port, 
            which offers faster data transfer speeds and more compatibility with various accessories and chargers.

      4. Dynamic Island: This feature, which was introduced in the iPhone 14 Pro models, continues to be refined, 
            providing an interactive area that adapts to various notifications and tasks.

      5. Better Battery Life: The iPhone 15 offers improved battery life due to more efficient hardware and software optimizations.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Oppo A78',
    slug: 'oppoA78',
    image: '/images/oppo-a-78-4g.jpg',
    summary:
      'The Oppo A78 4G is a budget-friendly smartphone offering a balance of performance and features. ',
    opinion: `
      1. Display: A large, vibrant screen with good color accuracy for its price range.

      2. Performance: Powered by a mid-range processor suitable for everyday tasks and moderate multitasking.

      3. Camera: A decent camera setup that handles basic photography needs well.

      4. Battery: A substantial battery life that supports all-day use.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Infinix Note40',
    slug: 'infinixNote40',
    image: '/images/infinix-note-40.jpg',
    summary:
      'The Infinix Note 40 is a mid-range smartphone that offers a good mix of features and performance. ',
    opinion: `
      1. Display: A large, high-resolution screen that provides vibrant visuals and a good viewing experience.

      2. Camera: A versatile camera setup that delivers decent photo and video quality for its segment.

      3. Battery: A substantial battery capacity for extended usage and efficient power management.

      4. Design: Stylish and modern design with a focus on durability and aesthetics.
 `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'GooglePixel6',
    slug: 'googlePixel6',
    image: '/images/google-pixel6.jpg',
    summary:
      'The Google Pixel 6 is a flagship smartphone that emphasizes Google software and AI capabilities.',
    opinion: `
      1. Display: A high-quality OLED screen with vibrant colors and sharp resolution.
    
      2. Performance: Powered by the Google Tensor chip, offering strong performance and AI-driven enhancements.
    
      3. Camera: Advanced camera system with excellent photo and video quality, 
            enhanced by Google's computational photography.
    
      4. Battery: Reliable battery life with support for fast charging.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS gadgets (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       opinion  TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO gadgets VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @opinion,
         @creator,
         @creator_email
      )
   `);

  for (const gadget of dummyGadgets) {
    stmt.run(gadget);
  }
}

initData();