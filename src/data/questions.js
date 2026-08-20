// Expanded Dataset for "REAL or FAKE?" Game
// Categories: news, ai_image, social_media, science, geography, tech, photo

export const QUESTIONS = [
  // 📰 NEWS HEADLINES
  {
    id: "news-01",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Florida Man Attempts to Rob Bank Using an Avocado as a Weapon",
    isReal: true,
    source: "CNN / NBC News",
    difficulty: "medium",
    explanation: "REAL! In 2019, a man in South Florida claimed he had a grenade, which turned out to be an avocado painted dark green. He was arrested by police.",
    details: "The suspect spray-painted a dark green avocado and tried to convince tellers it was an explosive device."
  },
  {
    id: "news-02",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "NASA Postpones Spacewalk After Astronaut Loses Glove in Deep Space",
    isReal: false,
    source: "Satire News Wire",
    difficulty: "easy",
    explanation: "FAKE! While items have occasionally floated away during spacewalks, no spacewalk has ever been canceled mid-suit up due to losing a glove before exit.",
    details: "Spacewalk preparations follow strict triple-check lock protocols with tethered equipment."
  },
  {
    id: "news-03",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Town Elects a 3-Year-Old Goat as Mayor for Two Consecutive Terms",
    isReal: true,
    source: "BBC News",
    difficulty: "hard",
    explanation: "REAL! Fair Haven, Vermont elected a Nubian goat named Lincoln as honorary mayor in 2019 to raise funds for a local playground.",
    details: "Lincoln the goat beat out a dog named Sammie and a gerbil to serve as mayor!"
  },
  {
    id: "news-04",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Scientists Successfully Teach Goldfish How to Drive a Robotic Car on Land",
    isReal: true,
    source: "Ben-Gurion University Study",
    difficulty: "hard",
    explanation: "REAL! Researchers in Israel created a 'Fish Operated Vehicle' (FOV) with cameras tracking the goldfish's movements in water to steer wheels on land towards food targets.",
    details: "The study demonstrated that goldfish possess spatial navigational abilities outside water!"
  },
  {
    id: "news-05",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Disney World Installs Underwater Glass Roller Coaster Crossing Florida Lake",
    isReal: false,
    source: "Theme Park Hoax",
    difficulty: "medium",
    explanation: "FAKE! This viral concept art was created as an April Fool's hoax. Glass underwater tunnels for coasters present immense structural and emergency egress challenges.",
    details: "Theme park fan sites frequently circulate rendered concepts, but no such coaster exists."
  },
  {
    id: "news-06",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Chess Grandmaster Accused of Using Vibrating Micro-Receivers to Cheat in World Tournament",
    isReal: true,
    source: "Wall Street Journal / Chess.com",
    difficulty: "medium",
    explanation: "REAL! High-profile chess scandals led to investigations where players were suspected of receiving Morse code chess moves via tiny vibrating wireless receivers.",
    details: "Modern chess tournaments now utilize metal detectors, signal jammers, and radio frequency scanners!"
  },
  {
    id: "news-07",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Man Eats Free First-Class VIP Meals at Airport for a Year by Rebooking the Same Ticket 300 Times",
    isReal: true,
    source: "Daily Mail / Xi'an Airport Report",
    difficulty: "hard",
    explanation: "REAL! A man in China bought a first-class ticket, ate at the VIP lounge every day for a year by changing his flight date daily, then canceled the ticket for a full refund!",
    details: "Eastern China Airlines eventually closed the loophole after discovering his 300+ flight date re-bookings."
  },
  {
    id: "news-08",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Zoo Paints Fluffy Chow Chow Dogs Black and White to Display Them as 'Panda Dogs'",
    isReal: true,
    source: "NBC News / Taizhou Zoo",
    difficulty: "medium",
    explanation: "REAL! In May 2024, Taizhou Zoo in China groomed and dyed fluffy Chow Chow dogs to look like giant pandas, drawing massive crowds.",
    details: "The zoo candidly admitted they didn't have real pandas, so they created 'Panda Dogs' to entertain visitors!"
  },
  {
    id: "news-09",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Greece Outlaws High Heel Shoes at Ancient Historical Monuments and Theaters",
    isReal: true,
    source: "NPR / Greek Ministry of Culture",
    difficulty: "medium",
    explanation: "REAL! Since 2009, high heels have been strictly banned at the Acropolis and ancient Greek sites because sharp heel tips exert massive pressure that chips thousand-year-old marble.",
    details: "Visitors must wear soft-soled flat shoes to prevent micro-fractures in historic stonework."
  },
  {
    id: "news-10",
    category: "news",
    categoryName: "News Headline",
    categoryIcon: "newspaper",
    title: "Japan Invents Edible Wooden Chopsticks Flavored Like Savory Tonkotsu Ramen Soup",
    isReal: true,
    source: "Mainichi Shimbun / Marumiya",
    difficulty: "hard",
    explanation: "REAL! Japanese food innovators created biodegradable chopsticks made from compressed edible rice bran and savory spices that dissolve into soup after eating.",
    details: "Designed to eliminate plastic waste while adding extra broth flavor!"
  },

  // 🤖 AI-GENERATED IMAGES vs REAL PHOTOGRAPHY
  {
    id: "ai-01",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_cat.png",
    title: "Ginger Cat Wearing NASA Space Helmet Looking Out Galaxy Window",
    isReal: false,
    source: "AI Generated (Midjourney v6)",
    difficulty: "medium",
    explanation: "FAKE (AI)! Generated by AI. Notice the hyper-smooth cosmic reflection, impossible glass curvature, and unnatural fur symmetry along the collar.",
    details: "Clues: Visor glass lacks true optical refraction, and space dust particles float in unnatural patterns."
  },
  {
    id: "ai-02",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_owl.png",
    title: "Mechanical Steampunk Owl with Copper Gears Sitting on Antique Leather Book",
    isReal: false,
    source: "AI Generated (DALL-E 3)",
    difficulty: "easy",
    explanation: "FAKE (AI)! Generated using AI art prompts. Look closely at the interlocking gears—they overlap non-functionally, a classic AI rendering artifact.",
    details: "AI creates gear aesthetics that look convincing at first glance, but gear teeth don't connect logically."
  },
  {
    id: "ai-03",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_car.png",
    title: "Neon Cyberpunk Hypercar Speeds Through Rain-Slicked Tokyo Street at Night",
    isReal: false,
    source: "AI Generated (Flux 1)",
    difficulty: "medium",
    explanation: "FAKE (AI)! Created with AI. Clues: the kanji signage on background neon signs melts into gibberish characters, and light reflections don't align.",
    details: "Background text in AI art often contains pseudo-characters. Text coherence is one of the best AI indicators!"
  },
  {
    id: "ai-04",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_castle.png",
    title: "Surreal Floating Fantasy Castle Suspended in Glowing Purple Cloudscape",
    isReal: false,
    source: "AI Generated (Midjourney v6)",
    difficulty: "easy",
    explanation: "FAKE (AI)! AI generated fantasy artwork. Gravity-defying waterfalls cascading into infinite void clouds showcase characteristic AI fluid dynamics.",
    details: "Look at the castle turrets—architectural symmetry melts into non-Euclidean geometry upon zooming in."
  },
  {
    id: "ai-05",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_cyber_dog.png",
    title: "Robotic Cybernetic Hound with Glowing Blue Eyes Running in Neon Rain",
    isReal: false,
    source: "AI Generated (Stable Diffusion 3)",
    difficulty: "medium",
    explanation: "FAKE (AI)! Created with AI. Notice the metallic fur plating blending seamlessly into organic fur without seams or fasteners.",
    details: "AI smooths out mechanical joints, blurring the line between metal armor and biological skin."
  },
  {
    id: "ai-06",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_space_food.png",
    title: "Gourmet Cheeseburger Floating in Zero Gravity Inside Spaceship Deck",
    isReal: false,
    source: "AI Generated (DALL-E 3)",
    difficulty: "medium",
    explanation: "FAKE (AI)! Generated by AI. Sesame seeds on the bun hover in impossible geometric grids, and sauce drips upward defying surface tension.",
    details: "Real food in microgravity would disperse into floating crumbs and liquid droplets."
  },
  {
    id: "ai-07",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_underwater.png",
    title: "Futuristic Submerged Metropolis Inside Glass Domes with Bioluminescent Jellyfish",
    isReal: false,
    source: "AI Generated (Flux 1)",
    difficulty: "medium",
    explanation: "FAKE (AI)! AI artwork. The architecture features hyper-complex glass caustics that overlap without realistic refraction physics.",
    details: "Notice how city lights underneath water reflect with identical brightness regardless of ocean depth."
  },
  {
    id: "ai-08",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    title: "Giant Desert Canyon Highway Winding Under Crisp Blue Sky",
    isReal: true,
    source: "Real Landscape Photography",
    difficulty: "hard",
    explanation: "REAL! Authentic photograph taken at Utah desert national park. Rock canyon textures, erosion lines, and shadow gradients are natural optical physics.",
    details: "High shutter cameras capture natural desert vibrance without needing artificial AI rendering."
  },
  {
    id: "ai-09",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    title: "Emerald Green Hummingbird Hovering Near Vibrant Tropical Flower",
    isReal: true,
    source: "High Speed Wildlife Photography",
    difficulty: "hard",
    explanation: "REAL! Captured at 1/4000s shutter speed. The wing motion blur and micro-feather iridescence follow true macro photography depth of field.",
    details: "Notice the natural dust particles on flower petals—details AI often smooths out or ignores."
  },
  {
    id: "ai-10",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Milky Way Galaxy Arching Over Snow-Capped Alpine Mountain Peak",
    isReal: true,
    source: "Astrophotography Long Exposure",
    difficulty: "medium",
    explanation: "REAL! Authentic night sky long-exposure photograph. The star trails and cosmic nebulae follow astronomical camera tracking sensor alignment.",
    details: "Astrophotography camera sensors collect light over 30-second exposures to reveal vivid Milky Way colors."
  },

  // 💬 SOCIAL MEDIA POSTS
  {
    id: "social-01",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "Elon Musk: 'Next I'm buying Coca-Cola to put the cocaine back in.'",
    author: "Elon Musk (@elonmusk)",
    avatar: "🚀",
    postText: "Next I'm buying Coca-Cola to put the cocaine back in.",
    metrics: "4.8M Likes • 680K Retweets",
    date: "Apr 27, 2022",
    isReal: true,
    source: "Verified X / Twitter Post",
    difficulty: "easy",
    explanation: "REAL! Elon Musk posted this viral tweet on April 27, 2022. It became one of the most liked tweets in social media history.",
    details: "The post was made shortly after his initial proposal to buy Twitter, joking about early 1900s soda formulas."
  },
  {
    id: "social-02",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "Bill Gates: 'Control+Alt+Delete was a mistake.'",
    author: "Bill Gates (@BillGates)",
    avatar: "💻",
    postText: "Control+Alt+Delete was a mistake. We should have had a single physical button on every keyboard.",
    metrics: "1.2M Likes • 140K Retweets",
    date: "Sep 15, 2023",
    isReal: true,
    source: "Harvard Speech & Viral Clip",
    difficulty: "hard",
    explanation: "REAL! Bill Gates admitted during a Harvard interview and post that relying on a three-key combination was a hardware compromise by IBM.",
    details: "IBM engineer David Bradley designed Ctrl+Alt+Del, but Gates publicly wished for a dedicated single key."
  },
  {
    id: "social-03",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "NASA: 'We have detected artificial radio signals from Proxima Centauri b.'",
    author: "Official NASA (@NASA)",
    avatar: "🌌",
    postText: "We have detected artificial radio signals originating from Proxima Centauri b. Team is decoding.",
    metrics: "3.4M Likes • 950K Retweets",
    date: "Nov 12, 2024",
    isReal: false,
    source: "Inspect Element Hoax",
    difficulty: "medium",
    explanation: "FAKE! NASA never made this announcement. This viral screenshot was fabricated using browser inspect-element editing.",
    details: "While SETI programs listen for extraterrestrial radio signals, no confirmed alien signal has been detected."
  },
  {
    id: "social-04",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "McDonald's: 'Bringing back the McRib permanently starting next Monday.'",
    author: "McDonald's (@McDonalds)",
    avatar: "🍟",
    postText: "Bringing back the McRib permanently starting next Monday. No more limited runs.",
    metrics: "890K Likes • 210K Retweets",
    date: "Oct 04, 2023",
    isReal: false,
    source: "Fake Brand Account",
    difficulty: "easy",
    explanation: "FAKE! McDonald's maintains the McRib as a seasonal limited menu item. This post came from a parody handle during blue check changes.",
    details: "McRib pork supply logistics depend on seasonal futures pricing, making a permanent run unviable."
  },
  {
    id: "social-05",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "Ryan Reynolds: 'My daughter asked what a hangover was...'",
    author: "Ryan Reynolds (@VancityReynolds)",
    avatar: "🎬",
    postText: "My daughter asked what a hangover was. I told her it's when your body pays taxes on fun.",
    metrics: "920K Likes • 110K Retweets",
    date: "Jun 14, 2021",
    isReal: true,
    source: "Verified X / Twitter Post",
    difficulty: "medium",
    explanation: "REAL! Ryan Reynolds is famous for his witty parenting tweets. This post went viral across social media platforms.",
    details: "Reynolds frequently shares humorous observational jokes about raising his children."
  },
  {
    id: "social-06",
    category: "social_media",
    categoryName: "Social Media Post",
    categoryIcon: "message-square",
    title: "Twitter / X Replaces Blue Bird Logo with a Dancing Doge Meme for 3 Days",
    author: "X Corp Announcement",
    avatar: "🐕",
    postText: "As promised. (Dogecoin logo displayed on home button)",
    metrics: "2.1M Likes • 340K Retweets",
    date: "Apr 03, 2023",
    isReal: true,
    source: "Official X Platform Event",
    difficulty: "easy",
    explanation: "REAL! On April 3, 2023, Twitter replaced its iconic blue bird logo on web browsers with the Shiba Inu Doge meme icon for several days!",
    details: "The temporary logo change caused Dogecoin cryptocurrency value to surge by 30% in hours."
  },

  // 🧪 SCIENTIFIC CLAIMS
  {
    id: "science-01",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Wombat Poop is the Only Known Cube-Shaped Excrement in the Animal Kingdom",
    isReal: true,
    source: "Ig Nobel Prize in Physics (2019)",
    difficulty: "medium",
    explanation: "REAL! Australian wombats produce up to 100 cube-shaped droppings per night. Unique intestinal elasticity allows them to stack poop without it rolling away!",
    details: "Scientists discovered that non-uniform gut wall stiffness shapes intestinal contents into sharp corners."
  },
  {
    id: "science-02",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Humans Share 50% of Their DNA Structure with Commercial Bananas",
    isReal: true,
    source: "National Human Genome Research Institute",
    difficulty: "medium",
    explanation: "REAL! Because all life on Earth evolved from a common cellular ancestor, fundamental genes for cell division and energy synthesis are shared.",
    details: "About 50% of our fundamental cellular pathway genes have banana homologs!"
  },
  {
    id: "science-03",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Microwaving Food Destroys Over 90% of Its Nutrients Compared to Boiling",
    isReal: false,
    source: "Harvard Health Publishing",
    difficulty: "easy",
    explanation: "FAKE! Microwaving preserves MORE nutrients than boiling because it cooks faster and uses minimal water. Boiling leaches water-soluble vitamins away.",
    details: "Nutrient loss depends on temperature, cook time, and liquid volume. Microwaves heat water molecules directly."
  },
  {
    id: "science-04",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Hot Water Can Freeze Faster Than Cold Water Under Specific Thermodynamic Conditions",
    isReal: true,
    source: "Mpemba Effect / Nature Physics",
    difficulty: "hard",
    explanation: "REAL! Known as the 'Mpemba Effect', warm water can freeze faster than cold water due to convection currents, evaporation, and dissolved gas concentrations.",
    details: "First documented by Tanzanian student Erasto Mpemba in 1963, physicists still study hydrogen bond dynamics."
  },
  {
    id: "science-05",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Sharks Existed Before Trees and Even Before the Rings of Saturn Formed",
    isReal: true,
    source: "Smithsonian Paleontology",
    difficulty: "hard",
    explanation: "REAL! Fossil records show shark ancestors appeared 450 million years ago. Early trees evolved ~350M years ago, and Saturn's rings are estimated under 100M years old!",
    details: "Sharks have survived four of the 'Big Five' mass extinction events on Earth."
  },
  {
    id: "science-06",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Lightning Never Strikes the Exact Same Spot Twice",
    isReal: false,
    source: "National Weather Service",
    difficulty: "easy",
    explanation: "FAKE! Lightning routinely strikes the same tall conductive structures multiple times. The Empire State Building is struck by lightning about 25 times every year!",
    details: "Lightning follows paths of least electrical resistance, repeatedly striking high towers and metallic points."
  },
  {
    id: "science-07",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Bananas Are Naturally Radioactive Due to Potassium-40 Isotopes",
    isReal: true,
    source: "US EPA / Nuclear Physics",
    difficulty: "medium",
    explanation: "REAL! Bananas contain naturally occurring Potassium-40, a radioactive isotope. Nuclear physics uses the 'Banana Equivalent Dose' as an informal unit of radiation exposure!",
    details: "You would need to eat 10 million bananas at once to suffer lethal radiation sickness."
  },
  {
    id: "science-08",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Octopuses Have Three Hearts and Blue Copper-Based Blood",
    isReal: true,
    source: "Natural History Museum",
    difficulty: "medium",
    explanation: "REAL! Two hearts pump blood to the gills while the third pumps it to the rest of the body. Their blood uses copper-based hemocyanin, giving it a vibrant blue color!",
    details: "Hemocyanin is far more efficient than iron-based hemoglobin at carrying oxygen in cold ocean water."
  },
  {
    id: "science-09",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Humans Only Use 10% of Their Total Brain Capacity",
    isReal: false,
    source: "Neurology / Scientific American",
    difficulty: "easy",
    explanation: "FAKE! Brain imaging (fMRI) shows nearly 100% of the brain is active over a 24-hour day. Even small brain damage affects cognitive function, proving all regions are vital.",
    details: "The 10% brain myth originated from 19th-century self-help misquotes."
  },
  {
    id: "science-10",
    category: "science",
    categoryName: "Scientific Claim",
    categoryIcon: "flask-conical",
    title: "Pure Honey Never Spoils; 3,000-Year-Old Honey Found in Egyptian Tombs is Still Edible",
    isReal: true,
    source: "Smithsonian Magazine",
    difficulty: "medium",
    explanation: "REAL! Honey's low moisture content, high acidity (pH ~3.9), and natural hydrogen peroxide content create an environment where bacteria and fungi cannot grow.",
    details: "Archaeologists excavating ancient Egyptian tombs found jars of honey thousands of years old that were perfectly preserved!"
  },

  // 🌎 GEOGRAPHY FACTS
  {
    id: "geo-01",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "North Korea and Norway Are Separated by Only One Country",
    isReal: true,
    source: "World Atlas",
    difficulty: "medium",
    explanation: "REAL! Russia borders both Norway on its western frontier and North Korea on its eastern coast. Russia is the single country between them!",
    details: "Norway shares a 198 km border with Russia in the Arctic, while Russia shares a 17 km land border with North Korea."
  },
  {
    id: "geo-02",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "Reno, Nevada lies Further West Than Los Angeles, California",
    isReal: true,
    source: "US Geological Survey",
    difficulty: "hard",
    explanation: "REAL! Because the California coastline curves significantly eastward as you travel south, Reno (Longitude 119.81° W) is further west than Los Angeles (Longitude 118.24° W)!",
    details: "Map distortions trick our intuition! Nevada's border slopes southeast, placing Reno west of LA."
  },
  {
    id: "geo-03",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "The Great Wall of China is Easily Visible from Low Earth Orbit with the Naked Eye",
    isReal: false,
    source: "NASA Astronaut Statements",
    difficulty: "easy",
    explanation: "FAKE! Astronauts confirm the Great Wall is constructed from local stone and soil matching surrounding terrain, making it virtually invisible without camera magnification.",
    details: "Astronaut Chris Hadfield confirmed highways and bright city lights are visible, but the Great Wall requires high-zoom lenses."
  },
  {
    id: "geo-04",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "Africa Spans Across All Four Earth Hemispheres (North, South, East, and West)",
    isReal: true,
    source: "National Geographic",
    difficulty: "medium",
    explanation: "REAL! Africa is the only continent traversed by both the Equator (dividing North/South) and the Prime Meridian (dividing East/West).",
    details: "Algeria sits on the Prime Meridian, while Kenya sits on the Equator, spreading Africa into all 4 quadrants!"
  },
  {
    id: "geo-05",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "Canada Has More Lake Area Than the Rest of the World's Lakes Combined",
    isReal: true,
    source: "Global Lakes and Wetlands Database",
    difficulty: "medium",
    explanation: "REAL! Canada contains over 2 million lakes, covering 9% of its landmass and accounting for over 60% of all natural surface lakes on Earth!",
    details: "Glacial retreats during the last Ice Age carved out millions of natural basins across Canada."
  },
  {
    id: "geo-06",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "Australia is Geographically Wider Than the Diameter of the Moon",
    isReal: true,
    source: "NASA / Geographical Statistics",
    difficulty: "hard",
    explanation: "REAL! Australia spans approximately 4,000 kilometers (2,485 miles) from east to west, whereas the Moon's diameter is only 3,474 kilometers (2,158 miles)!",
    details: "While the Moon has far greater surface area, Australia's horizontal width exceeds the Moon's diameter."
  },
  {
    id: "geo-07",
    category: "geography",
    categoryName: "Geography Fact",
    categoryIcon: "globe",
    title: "Iceland Has Zero Native Mosquito Populations Operating in Its Ecosystem",
    isReal: true,
    source: "Icelandic Institute of Natural History",
    difficulty: "medium",
    explanation: "REAL! Iceland's unique oceanic sub-polar climate features rapid freeze-thaw cycles in winter that disrupt mosquito pupae reproduction before larvae mature.",
    details: "Neighboring Greenland and Norway have mosquitoes, but Iceland remains completely mosquito-free!"
  },

  // 💻 TECHNOLOGY STATEMENTS
  {
    id: "tech-01",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "The First Computer Mouse Was Carved Out of Solid Wood",
    isReal: true,
    source: "Computer History Museum",
    difficulty: "easy",
    explanation: "REAL! In 1964, Douglas Engelbart invented the computer mouse at Stanford. The prototype was housed in a carved wooden shell with metal wheels.",
    details: "It was nicknamed 'mouse' because the cord tail exiting the wooden box resembled a rodent!"
  },
  {
    id: "tech-02",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "The Apollo 11 Guidance Computer Had Less Memory Than a Modern USB Charging Cable",
    isReal: true,
    source: "NASA Historical Archive",
    difficulty: "medium",
    explanation: "REAL! The AGC had 2 Kilobytes of RAM and 36 KB of ROM. Modern USB-C cables contain microcontrollers with far more memory and processing bandwidth!",
    details: "Your smartphone is roughly 100,000 times more powerful than the guidance computer that landed humans on the Moon."
  },
  {
    id: "tech-03",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "Bluetooth Wireless Tech Was Named After a 10th-Century Viking King Who Loved Blueberries",
    isReal: true,
    source: "Bluetooth SIG History",
    difficulty: "hard",
    explanation: "REAL! Intel engineer Jim Kardach proposed 'Bluetooth' after King Harald 'Bluetooth' Gormsson, who united Scandinavian tribes—just as Bluetooth unites wireless devices!",
    details: "The Bluetooth logo is actually a Scandinavian bindrune combining King Harald's initials (ᚼ Hagall and ᛒ Bjarkan)."
  },
  {
    id: "tech-04",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "Nintendo Was Founded in 1889 as a Hand-Crafted Playing Card Company",
    isReal: true,
    source: "Nintendo Corporate History",
    difficulty: "medium",
    explanation: "REAL! Long before video games, Fusajiro Yamauchi founded Nintendo in Kyoto, Japan in 1889 to manufacture handmade 'Hanafuda' playing cards.",
    details: "Nintendo operated for nearly 80 years selling playing cards, toys, and instant rice before producing arcade video games in the 1970s!"
  },
  {
    id: "tech-05",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "The Famous Windows XP 'Bliss' Wallpaper Photo Was Digitally Edited with Photoshop",
    isReal: false,
    source: "National Geographic Interview",
    difficulty: "medium",
    explanation: "FAKE! Photographer Charles O'Rear took the unedited photo in Sonoma County, California in 1996 using a medium-format Mamiya camera on Fujifilm Velvia stock.",
    details: "Microsoft bought the photo outright. O'Rear confirmed zero digital manipulation or photoshop filter was added!"
  },
  {
    id: "tech-06",
    category: "tech",
    categoryName: "Technology Statement",
    categoryIcon: "laptop",
    title: "Over 90% of the World's Currency Exists Only on Digital Bank Servers, Not Physical Cash",
    isReal: true,
    source: "Federal Reserve Bank Report",
    difficulty: "medium",
    explanation: "REAL! Economists estimate that only about 8% to 10% of total world money supply exists as physical banknotes and coins.",
    details: "The overwhelming majority of global transactions exist solely as digital accounting entries on interbank ledger networks."
  },

  // 📸 PHOTOGRAPHY & ART
  {
    id: "photo-01",
    category: "photo",
    categoryName: "Photograph / Visual",
    categoryIcon: "camera",
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    title: "Cat Standing on Two Hind Legs Striking a Perfect Kung-Fu Martial Arts Pose",
    isReal: true,
    source: "High-Speed Action Photography",
    difficulty: "medium",
    explanation: "REAL! Captured mid-air during a playful leap using high shutter speed (1/2000s). High speed photography freezes split-second feline reflexes that look cartoonish!",
    details: "Cats rotate their torsos in mid-air using their tail as a counterweight, producing human-like poses when frozen on camera."
  },
  {
    id: "photo-02",
    category: "photo",
    categoryName: "Photograph / Visual",
    categoryIcon: "camera",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Pink Glowing Sand Beach Shimmers Under Bioluminescent Wave Light",
    isReal: true,
    source: "Harbour Island / Marine Biology",
    difficulty: "medium",
    explanation: "REAL! Pink sand beaches exist (caused by microscopic crushed coral shells called Foraminifera) combined with bioluminescent plankton glowing blue at night!",
    details: "Bahamas Harbour Island has pink sand, while Maldivian waters feature dinoflagellates glowing blue when agitated by waves."
  },
  {
    id: "photo-03",
    category: "photo",
    categoryName: "Photograph / Visual",
    categoryIcon: "camera",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    title: "Translucent Ocean Jellyfish Glowing with Rainbow Bioluminescence in Pitch Black Depths",
    isReal: true,
    source: "Deep Ocean Exploration Photography",
    difficulty: "medium",
    explanation: "REAL! Deep-sea comb jellies (Ctenophores) produce bioluminescent rainbow pulses along their ciliated ridges in total pitch black ocean depths.",
    details: "Bioluminescence is produced by chemical reactions involving luciferin and luciferase enzymes."
  },
  {
    id: "photo-04",
    category: "photo",
    categoryName: "Photograph / Visual",
    categoryIcon: "camera",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Yosemite Waterfall Glowing Like Molten Lava During Annual February 'Firefall' Sunset",
    isReal: true,
    source: "National Park Service",
    difficulty: "hard",
    explanation: "REAL! For two weeks in February, if conditions are clear, Horsetail Fall in Yosemite captures setting sunlight at an exact angle, making the water look like flowing liquid fire!",
    details: "Photographers travel from around the world to capture this rare 10-minute optical phenomenon."
  },
  {
    id: "ai-11",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_dinosaur.png",
    title: "Giant T-Rex Dinosaur Walking Beside Yellow Taxi Cab on Busy New York Times Square Street",
    isReal: false,
    source: "AI Generated (Flux 1)",
    difficulty: "easy",
    explanation: "FAKE (AI)! Generated using AI prompts. Clues: Notice how the dinosaur's shadow points left while taxi cabs cast shadows pointing downward under midday lights.",
    details: "AI often creates inconsistent light sources and shadow directions when blending scale subjects."
  },
  {
    id: "ai-12",
    category: "ai_image",
    categoryName: "AI Image vs Real",
    categoryIcon: "bot",
    imageUrl: "/assets/ai_dragon.png",
    title: "Violet Crystal Quartz Dragon Sleeping on Snow-Covered Alpine Mountain Peak",
    isReal: false,
    source: "AI Generated (Midjourney v6)",
    difficulty: "medium",
    explanation: "FAKE (AI)! Created with AI artwork. Look closely at the crystal facets—they overlap in non-refractive geometry.",
    details: "AI crystal rendering creates beautiful glowing highlights, but light ray physics inside the gemstones do not refract accurately."
  }
];

// Smart non-repeating question selector
export function getRandomQuestions(count = 10, category = 'all', seenIds = []) {
  let list;
  if (category === 'all') {
    list = [...QUESTIONS];
  } else if (category === 'photos' || category === 'photo_master' || category === 'images') {
    list = QUESTIONS.filter(q => q.category === 'ai_image' || q.category === 'photo' || Boolean(q.imageUrl));
  } else {
    list = QUESTIONS.filter(q => q.category === category);
  }

  // Filter out questions player has already seen recently
  let unseen = list.filter(q => !seenIds.includes(q.id));

  // If we don't have enough unseen questions, cycle and mix in recycled questions
  if (unseen.length < count) {
    const recycled = list.filter(q => seenIds.includes(q.id));
    shuffleArray(recycled);
    unseen = [...unseen, ...recycled];
  }

  shuffleArray(unseen);
  return unseen.slice(0, count);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function getAllCategories() {
  return [
    { id: 'photos', name: '📸 All Real & Fake Photos (AI vs Real)', icon: 'camera' },
    { id: 'ai_image', name: '🤖 AI Art vs Real Photography', icon: 'bot' },
    { id: 'photo', name: '� Visual Photography & Illusions', icon: 'camera' }
  ];
}
