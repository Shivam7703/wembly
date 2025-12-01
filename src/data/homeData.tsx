import { about, about2, aboutb, AminoCalGold, AminoEggBoost, AminoESel, Aminolyte, AminoMilkBoost, banner, banner2, banner3, bene2, bene3, bene4, Best200, Best480, Best50, Best720, Best75, bestacron720, Bestsup, Boostermin, careerb, choose1, cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, contactb, dual, farm16, farm20, fendel, ferti, logo2, man5sc, mansup, oxp, PigBoost, PoultryBoost, prob, Respecure, rondo,  sulph, supa, supa480, supa720, supaextra, supagrow, supaking, supamec, supapower, suparice, supath, supatiger, tunza, vegi } from "@/assets";
import { BsCart4 } from "react-icons/bs";
import {
  FaMapLocationDot,
} from "react-icons/fa6";
import { GiDeadEye, GiOakLeaf } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { LiaBullseyeSolid} from "react-icons/lia";
import { LuSmilePlus } from "react-icons/lu";
import { MdAttachEmail, MdGppGood, MdLocationCity, MdWifiCalling3} from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";


// homepage
export const navItemsArray = [
  { id: 1, label: "About Us", href: "/about" },
  {
    id: 2,
    label: "Products",
    href: "/products/herbicides",
    subNav:[
      {id:1,
        label:"Herbicides",
        href:"/products/herbicides"
      },
      {id:2,
        label:"Fungicides",
        href:"/products/fungicides"
      },
      {id:3,
        label:"Insecticides",
        href:"/products/insecticides"
      },
      {id:4,
        label:"Fertilizer",
        href:"/products/fertilizer"
      },
      {id:5,
        label:"Implements",
        href:"/products/implements"
      },
       {id:6,
        label:"Plant Growth Regulator",
        href:"/products/plant-growth-regulator"
      },
      {id:7,
        label:"Animal Feeds",
        href:"/products/animal-feeds"
      },
     
    ]
  },

  { id: 3, label: "Sustainability", href: "/sustainability" },
  { id: 4, label: "Career", href: "/career" },
  { id: 5, label: "Blogs", href: "/blogs" },
  { id: 6, label: "Contact Us", href: "/contact-us" },
];

export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Welcome To Wembley International",
    title1: "Better care for crops, stronger yields with our ",
    title2: "trusted solutions",
para:" Our Solutions Provide Everything your Crops Need, From Pest Protection to Essential Nutrients. Ensuring Healthy Growth and Higher Yields. ",
    btntext: "Explore More",
    href: "/products/herbicides",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner2,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Helping farmers grow more with ",
    title2: "simple and effective products.",
para:"Making farming simple and effective. Your crops will be protected while the soil gets nourished for increased production.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
   {
    id: 3, // Fix duplicate id issue by using unique ids
    img: banner3,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Leading the Future of Crop ",
    title2: "Protection & Growth",
para:"Empowering farmers with innovative agri-solutions that ensure healthier crops and higher yields. Sustainable, effective, and farmer-focused—we help you grow with confidence.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

export const aboutdata = {
  img: about,
  img2: about2,

  title1: "About Us",
  title2: "Cultivating Tanzania's Growth,",
  title4: " One Harvest at a Time",

  para:
    "Wembley International (Tanzania) Ltd. is a leading and dynamic force in Tanzania's agricultural sector. Founded in 2015, we have grown from an ambitious startup into a widely recognized and trusted distribution partner for the nation's farming community. Our mission is to empower Tanzanian farmers with the essential tools for success: advanced crop protection solutions, high-quality fertilizers, and modern agro-equipment.",
  title3: "Our Vision and Commitment",
  vision: [
    {
      id: 1,
      text: "The company aims to give farmers access to state-of-the-art, cost-effective, and performance-based agricultural products.",
    },
    {
      id: 2,
      text: "Our mission enables farmers to reach sustainable, successful farming outcomes.",
    },
    {
      id: 3,
      text:
        "Quality products from our company deliver crop care benefits while safeguarding environmental resources.",
    },
  ],
};

export const countDown=[
  {id:1,
    icon:<HiShoppingBag  />,
    title:"Dealers",
    Value:"2000"
  },{id:2,
    icon:<RiShoppingCart2Fill />    ,
    title:"Branches",
    Value:"6"
  },{id:3,    icon:<IoIosPeople />    ,
    title:"Sales Vehicles",
    Value:"1000"
  },{id:4,     icon:<HiBuildingOffice />    ,
    title:"Registered Products",
    Value:"30"
  }
]

export const whychoose ={
  img: prob,
  img2: choose1,
  title1:"Why Choose Us",
  title2:"Your Trusted Partner in ",
  title3:"Agricultural Excellence",
      para: "Our company maintains trust from farmers so we supply premium solutions for protecting crops and supporting their growth. The company's dedication to innovations combined with quality guarantees and eco-respectful approaches leads to improved crop production and health, which extends assistance to farmers across their entire journey.",
  vision:[{
    id:1,
    icon:<GiDeadEye />,
    heading:"Our Vision",
    text:"We aim to excel globally as an agricultural market leader by developing state-of-the-art agricultural solutions with environmentally sustainable farming practices.",
  },
  {
    id:2,
    icon:<LiaBullseyeSolid />,
    heading:"Our Mission",
    text:"The company aims to deliver innovative, affordable, and dependable agricultural solutions that protect crops while improving their growth performance.",
  }],
}
export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  testimonials: [{
    id: 1,
    title: "SOLOMON MAGEMBE",
    text:
      "Tangu nianze kutumia viuatilifu hivi, wadudu wamepotea kabisa shambani. Mimea yangu sasa inakua vizuri bila mashambulizi ya wadudu. Mavuno yangu yameongezeka kwa kiasi kikubwa. Viuatilifu hivi vimenisaidia kulinda mazao yangu hadi kuvuna.",
    img: cl1,
  },
  {
    id: 2,
    title: "ABDALAH RAMADHANI",
    text:
      "Baada ya kupulizia mara moja tu, niliona matokeo haraka na haikuhitaji kurudia mara kwa mara. Maelekezo ni rahisi kufuata na viuatilifu vinachanganyika vizuri. Hata wakulima wapya wanaweza kuvitumia kwa urahisi.",
    img: cl2,
  },
  {
    id: 3,
    title: "JESCA NASHON",
    text:
      "Nilitumia viuatilifu hivi bila madhara kwa mimea au mazingira. Ni salama na vyenye matokeo mazuri. Kwa sababu mazao yangu hayakuathiriwa na wadudu, nimepata faida kubwa sokoni mwaka huu.",
    img: cl3,
  },
  {
    id: 4,
    title: "CLEMENCIA JOHN",
    text:
      "Kampuni ilitoa maelekezo mazuri ya matumizi na ushauri wa kitaalamu. Huduma kwa wateja ni nzuri sana. Nimekuwa nikitumia bidhaa hizi kwa misimu kadhaa sasa, na kila mara zinafanya kazi vizuri.",
    img: cl4,
  },
  {
    id: 5,
    title: "YOHANA AUGUSTINO",
    text:
      "Nimewashauri wakulima wenzangu pia kutumia viuatilifu hivi kwa sababu ni bora na vya uhakika. Niliona tofauti ndani ya siku chache tu baada ya kupulizia. Wadudu waliisha haraka na mimea ikaanza kuimarika. Hata wadudu waliokuwa sugu kwa viuatilifu vingine waliangamizwa. Hivi viuatilifu vina nguvu na ufanisi wa hali ya juu.",
    img: cl5,
  },
  {
    id: 6,
    title: "PHILIPO MWAKALELI",
    text:
      "Mimea yangu iliyokuwa imeathiriwa na wadudu ilianza kuota majani mapya na maua baada ya kutumia viuatilifu hivi. Nimefurahishwa kwa sababu viuatilifu hivi havikuathiri viumbe wengine wasio lengo la kuharibu mazao.",
    img: cl6,
  },
  {
    id: 7,
    title: "VERONICA GEORGE",
    text:
      "Mwaka huu nimepata mavuno bora zaidi kuliko miaka yote iliyopita. Hakuna hasara kutokana na wadudu tena.",
    img: cl7,
  },
  {
    id: 8,
    title: "GEORGE NATHANAEL",
    text:
      "Kwa bei yake, viuatilifu hivi ni nafuu ukilinganisha na matokeo makubwa niliyopata. Inastahili thamani yake kabisa. Nimeitumia kwenye mazao tofauti kama mahindi, nyanya, na mboga mboga na mazao mengine kila mara inafanya kazi vizuri.",
    img: cl8,
  },
  {
    id: 9,
    title: "MARIA JOEL",
    text:
      "Bidhaa zina vifungashio vizuri na imara. Rahisi kuhifadhi na hakuna uvujaji wala harufu kali. Kila msimu ninanunua viuatilifu hivi kutoka kampuni hii hii kwa sababu sijawahi kuvunjika moyo.",
    img: cl9,
  },
  {
    id: 10,
    title: "AUGUSTINO MAYAO",
    text:
      "Baada ya kutumia viuatilifu hivi, pia nimeona magonjwa ya mimea kama ukungu na doa doa yakipungua. Kwa sababu wadudu hawarudi haraka, sipulizii mara nyingi, hivyo natumia pesa kidogo kwenye matibabu.",
    img: cl5 ,
  },],
};

export const faqData = {
  title:"Frequently Asked ",
  title2:"Question",
  para: "The dependable herbicides, along with insecticides, fungicides, and fertilizers offered by the company, help farmers maintain healthful crops and higher production volumes while remaining budget-friendly.",
  faqs:[
    {
      id:1,
      que:"What products do you offer?",
      ans:"Our company delivers herbicides as weed treatment solutions and insecticides for pest protection along with fungicides for disease prevention and fertilizers for growth improvement and practical farming tools."
    }, {
      id:2,
      que:"Are your products safe for the environment?",
      ans:" Absolutely! The development of all our products includes environmentally friendly production techniques that produce minimal environmental impact while providing proper crop care."
    }, {
      id:3,
      que:"Do your solutions improve yields?",
      ans:" Yes, for sure! The design of our products works to improve crop wellbeing and minimize losses, which in turn supports farmers to reach enduringly increased yields."
    }, {
      id:4,
      que:"How can farmers use your products?",
      ans:" A simple instruction manual accompanies our products, which allows farmers to use them professionally for protecting and caring for their crops."
    }, {
      id:5,
      que:"Where can I buy your products?",
      ans:"we are available at your local Agro shops. You may contact our regional sales person listed under contact us to know local retail outlets."
    }
  ]
}

export const footer = {
  logo: logo2,
  text:
    "Wembley delivers reliable crop protection solutions with advanced insecticides, herbicides, and fungicides to support Tanzanian farmers and boost yields.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2024 . Designed and Manage by ",
  list1: {
    title: "Products",
    links:[
      {id:1,
        label:"Herbicides",
        href:"/products/herbicides"
      },
      {id:2,
        label:"Fungicides",
        href:"/products/fungicides"
      },
      {id:3,
        label:"Insecticides",
        href:"/products/insecticides"
      },
      {id:4,
        label:"Fertilizer",
        href:"/products/fertilizer"
      },
      {id:5,
        label:"Implements",
        href:"/products/implements"
      },
      {id:6,
        label:"Animal Feeds",
        href:"/products/animal-feeds"
      },
     
    ]
  },

  list2: {
    title: "Main Menu",
    links: [
      { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
   
  },
};

export const benefit = {
  title1: "Our Sustainable Agriculture Practices",
  title2: "Benefits of our crop protection products",
  para:
    "Our products defend plants from pests and diseases while enhancing yield quantities to encourage healthier development, which leads to environmentally sustainable cultivation resulting in better harvests.",
  points: [
    {
      id: 1,
     img:banner2,
      heading: "Simplify Your Protection Strategy",
      text:
        "From fungus to insects, we have a proven solution. Count on our comprehensive range to effectively address your biggest crop threats. (Please change image to image from new video of farmer with yellow sprayer",
    },

    {
      id: 2,
      img:bene2,
      heading: "Boost Plant Health & Vitality",
      text: "Healthier plants start with the right nutrition. Our fertilizers and inputs strengthen crops from within, building natural resilience for a more bountiful harvest.",
    },

    {
      id: 3,
      img:bene3,
      heading: "Confident Weed Management",
      text: "Reclaim your fields from competitive weeds. Our effective herbicides ensure your crops get the water, light, and nutrients they need to thrive.",
    },

    {
      id: 4,
      img:bene4,
      heading: "Your Partner in Every Season",
      text: "We're here with the products and advice you can rely on. Let our expertise help you make confident decisions for a successful season.",
    },
  ],
};

export const blogData = {
  img:banner3,
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  para:
    "Stay informed with Wembley International—your trusted source for agricultural knowledge and innovation.",
  blogs: [
    {
      id: 1,
      title: "Benefits of Crop Protection in Indian Agriculture",
      text:
        "Indian agricultural farming practices serve over one billion citizens while sustaining the professional lives of numerous farmers throughout the region. The production of a healthy yield faces continuous threats from plant diseases, together with pest attacks and weed growth. Crop protection stands as a necessity for such situations. The crop protection from dangerous organisms through effective methods ensures improved yield quality and secures food availability, and also enhances farmer financial stability. ",
        detail:`  <h1 style="">Benefits of Crop Protection in Indian Agriculture</h1>

    <p>Indian agricultural farming practices serve over one billion citizens while sustaining the professional lives of numerous farmers throughout the region. The production of a healthy yield faces continuous threats from plant diseases, together with pest attacks and weed growth. Crop protection stands as a necessity for such situations. The crop protection from dangerous organisms through effective methods ensures improved yield quality and secures food availability, and also enhances farmer financial stability.</p>

    <h2 style="">Why Crop Protection Matters for Indian Farmers?</h2>
    <p>Crop protection has become essential in India because agricultural weather instability, rising pest adaptation rates, and diseases are negatively affecting farms' health. Farmers need to invest their time in crop cultivation for months. The careful work of farmers will become useless because sudden infestations or infections will destroy their crops if adequate crop protection is not implemented. The implementation of insecticides, together with fungicides and herbicides, provides crop protection from beginning to end.</p>

    <h2 style="">Types of Crop Protection Solutions Used in India</h2>
    <ul>
      <li><strong>Insecticides:</strong> Protective agents against insects such as bollworms, aphids, and beetles.</li>
      <li><strong>Herbicides:</strong> Suppress weeds that compete with crops for nutrients and water.</li>
      <li><strong>Fungicides:</strong> Defend crops from fungal infections like blight and mildew.</li>
      <li><strong>Fertilizers:</strong> Supply essential nutrients to boost development and harvest yields.</li>
      <li><strong>Implements:</strong> Tools and machines like plows and harvesters improve work efficiency.</li>
      <li><strong>Animal Feeds:</strong> Ensure nutritious diets for livestock, boosting vitality and commercial value.</li>
    </ul>

    <h2 style="">Benefits of Crop Protection in Indian Agriculture</h2>
    <ul>
      <li><strong>Higher Yields:</strong> Reduces damage from pests and diseases for better harvests.</li>
      <li><strong>Improved Quality:</strong> Results in better-quality produce with premium market value.</li>
      <li><strong>Food Security:</strong> Helps increase national food reserves and manage inflation.</li>
      <li><strong>Farmer Income Growth:</strong> Reduces losses and improves financial security.</li>
      <li><strong>Sustainable Agriculture:</strong> Promotes land and plant health for long-term farming.</li>
    </ul>

    <h2 style="">Wembley International’s Role in Crop Protection</h2>
    <p>Wembley International offers a wide range of crop protection products tailored to Indian farming conditions, including:</p>
    <ul>
      <li>Eco-friendly insecticides for safe pest control.</li>
      <li>New-generation herbicides that protect without harming crops.</li>
      <li>Modern fungicides applied at critical crop development stages.</li>
    </ul>
    <p>All products are certified for safety, effectiveness, and affordability based on Indian conditions.</p>

    <h2 style="">How Crop Protection Helps Different Crops</h2>
    <ul>
      <li><strong>Wheat and Rice:</strong> Protection from rust, blight, and borer infestations.</li>
      <li><strong>Cotton:</strong> Defense against bollworms and sucking pests.</li>
      <li><strong>Vegetables:</strong> Safeguards from fungal infections and leaf eaters.</li>
      <li><strong>Fruits:</strong> Prevention of diseases like anthracnose to preserve fruit quality.</li>
    </ul>

    <h2 style="">How Indian Farmers Can Use Crop Protection Wisely</h2>
    <ul>
      <li>Follow instructions on product labels carefully.</li>
      <li>Use protective gear while handling pesticides.</li>
      <li>Apply specific sprays instead of general scattering.</li>
      <li>Combine crop protection with proper irrigation, seed selection, and soil health strategies.</li>
    </ul>

    <h2 style="">The Future of Crop Protection in Indian Agriculture</h2>
    <p>Sustainable and smart solutions are reshaping crop protection. Drone tech, data-based farming, and precision tools now help detect pests early and apply solutions efficiently. Wembley International continues to invest in innovative, eco-friendly protection solutions for Indian farmers.</p>

    <h2 style="">How Wembley Can Help You With Crop Protection</h2>
    <ul>
      <li><strong>Eco-friendly insecticides:</strong> Target pests while being safe for the environment.</li>
      <li><strong>Advanced herbicides:</strong> Tackle tough weeds without harming crops.</li>
      <li><strong>Modern fungicides:</strong> Support crop health during key growth phases.</li>
    </ul>
    <p>All products are tested under Indian soil and climate conditions to ensure reliability and affordability. With Wembley’s help, farmers can enhance yield, protect plants, and uplift community well-being.</p>

    <p style="margin-top:20px; font-weight:600;">Crop protection is not just a farming technique—it's a lifeline for Indian agriculture. With reliable solutions from trusted names like Wembley International, farmers can grow healthy crops, increase incomes, and contribute to India's food security. Let’s support our farmers by promoting smart, safe, and effective crop protection practices across the country.</p>

`,
      date: "05/09/23",
      img: banner,
    },
    {
      id: 2,
      title: "Protecting Crops with Advanced Farming Solutions",
      text:
        "Indian agriculture sustains itself due to farming yet crop protection remains essential for farmer success. The expanding population, along with climate uncertainties, makes it essential for farmers to adopt progressive farm solutions at this historical moment. Advanced farming solutions enable farmers to achieve better crop yield and protect their crops while practicing sustainable agriculture.",
        detail:` <h1 style="color:#2c5f2d;">Protecting Crops with Advanced Farming Solutions</h1>

    <p>Indian agriculture sustains itself due to farming yet crop protection remains essential for farmer success. The expanding population, along with climate uncertainties, makes it essential for farmers to adopt progressive farm solutions at this historical moment. Advanced farming solutions enable farmers to achieve better crop yield and protect their crops while practicing sustainable agriculture.</p>

    <p>Agriculture experiences a transformation through the implementation of precise tools along with sustainable pesticides and integrated pest management solutions. The modern agricultural solutions minimize both pests and diseases' impact on crops, together with efficient utilization of water and fertilizers. These agricultural methods provide farmers with better yields and environmental protection, together with solid soil preservation, which allows sustained agricultural production.</p>

    <h2 >Why Do We Need Advanced Farming Solutions Today?</h2>
    <p>Advanced farming solutions deliver technical tools along with efficient farming technologies, which help farmers execute all agricultural processes. These farming solutions enhance productivity levels while minimizing harvest losses through their utilization from planting until the harvest period. The contemporary agricultural field suffers crop destruction from pests and diseases, together with weed growth. Crop protection requires effective farming solutions for its survival.</p>

    <h2 >Types of Advanced Farming Solutions for Indian Agriculture</h2>
    <ul>
      <li><strong>Precision Farming Solutions:</strong> The system integrates both data and technological tools for enhanced planting and harvesting quality.</li>
      <li><strong>Integrated Pest Management:</strong> Combines different methods to control pests without harming the environment.</li>
      <li><strong>Organic Farming Solutions:</strong> Organic agriculture should be promoted through fertilization methods based on nature, along with biopesticide applications for crop production.</li>
      <li><strong>Smart Irrigation Systems:</strong> Efficient water preservation systems allow for exact watering amounts to arrive at the crops.</li>
      <li><strong>Drone-Based Farming Solutions:</strong> Farmers need to inspect crops while they perform fertilizer applications, and they need to obtain current field information.</li>
    </ul>

    <h2 >Benefits of Using Advanced Farming Solutions</h2>
    <ul>
      <li>Better crop protection against pests and diseases</li>
      <li>Increased crop yield and better quality produce</li>
      <li>Reduced need for chemical pesticides</li>
      <li>Improved soil health and water usage</li>
      <li>Enhanced income for farmers and reduced losses</li>
    </ul>

    <h2 >Farming Solutions and Crop Protection—A Strong Relationship</h2>
    <p>Present-day agricultural solutions function to maintain complete protection of crops. Proper utilization of insecticides together with fungicides and herbicides stands as a core element of smart farming technology. The tools safeguard crops from damaging pests while offering protection without harming the environmental surroundings.</p>

    <h2 >How Agriculture Solutions Are Transforming Indian Farms</h2>
    <p>Indian agricultural workers experience fundamental operational changes through technology-enabled solutions in farming. Indian farmers access solutions that use technology to deliver weather alerts along with soil testing features and crop health monitoring capabilities. These methods have revolutionized rural territories that used to practice farming through traditional methods only.</p>

    <h2 >Challenges in Adopting Farming Solutions</h2>
    <ul>
      <li>Lack of awareness among farmers</li>
      <li>Limited access to new technology</li>
      <li>High cost of advanced farming solutions</li>
    </ul>
    <p>To harness modern farming technology, farmers require assistance from the government along with training programs.</p>

    <h2 >How Wembley International Supports Farmers with Farming Solutions</h2>
    <p>Wembley International works to supply trusted farming solutions that empower Indian farmers. Wembley International delivers agricultural sprays and insecticides, along with fungicides that have been specially formulated to accommodate Indian agricultural requirements. The offered agricultural products defend crops while fostering sustainable farming methods.</p>

    <p>Farmers who adopt Wembley’s farming solutions have achieved outstanding improvements regarding both their harvest output and crop quality outcomes. The company delivers professional recommendations together with reasonably priced agricultural products to ensure all farmers receive ideal solutions.</p>

    <h2 >The Future of Indian Agriculture with Farming Solutions</h2>
    <p>Modernizing farming solutions will determine what kind of future Indian agriculture will have. Sustainable farming tools, together with precise equipment and organic growing methods, and advanced pest management solutions become accessible to all farmers with proper backing systems. The transition will enhance both economic growth and the supply of food worldwide.</p>

    <p>Indian agricultural practices will become more productive through contemporary farming solutions, which simultaneously defend crops from pests as well as maintain soil well-being. Advanced solutions protect sustainability in farming operations, maintain farmer incomes, and strengthen food security for prosperous agricultural development.</p>
`,
      date: "15/12/23",
      img: banner,
    },
    {
      id: 3,
      title: "Revolutionizing Indian Farming with Advanced Agricultural Solutions",
      text:
        "The modern agricultural environment demands that Indian farmers adopt sustainable, efficient solutions. With smart irrigation, organic practices, and digital innovations, agriculture in India is undergoing a major transformation—boosting productivity and ensuring crop protection.",
      detail: `<h1 style="color:#2c5f2d;">Revolutionizing Indian Farming with Advanced Agricultural Solutions</h1>
    
      <p>The modern agricultural environment demands that farmers adopt agricultural solutions that enable them to boost yield while safeguarding their crops through sustainable methods. Indian agriculture experiences a major transformation through smart irrigation systems, modern farming solutions, and organic pesticide applications. The following segment evaluates how agricultural solutions enable farmers to become both more productive and intelligent.</p>
    
      <h2>What Are Agriculture Solutions?</h2>
      <p>Modern solutions that enhance agriculture promote enhanced farming operations and techniques through contemporary instrumentation or methods. The system integrates new seed varieties with organic nutrients and smart water distribution systems, along with digital platforms used to monitor plant health. By implementing farming solutions, farmers gain better efficiency in crop protection and increased yield production.</p>
    
      <h2>Why India Needs Modern Agriculture Solutions</h2>
      <ul>
        <li>The expanding population demands more food.</li>
        <li>Unpredictable weather conditions are affecting crops.</li>
        <li>There is an urgent need for crop protection against pests and diseases.</li>
        <li>Decreasing soil fertility and water resources.</li>
        <li>High standards emerge as a necessity for companies aiming to succeed in worldwide markets.</li>
      </ul>
      <p>Farmers can resolve present challenges through the implementation of farming solutions and agricultural solutions that protect their income streams.</p>
    
      <h2>Top Benefits of Agriculture Solutions for Indian Farmers</h2>
      <ul>
        <li>Higher crop yield with better seed and fertilizer technology</li>
        <li>Low-cost agricultural practices and reduced waste</li>
        <li>Effective crop protection using biological fungicides and pesticides</li>
        <li>Improved water management with smart irrigation</li>
        <li>Informed decision-making through real-time data</li>
      </ul>
    
      <h2>Key Components of Modern Agriculture Solutions</h2>
      <ul>
        <li><strong>Smart Irrigation Systems:</strong> Drip irrigation and moisture sensors for optimal water usage</li>
        <li><strong>Organic Fertilizers and Bio-Pesticides:</strong> Eco-friendly options for crop safety</li>
        <li><strong>Advanced Machinery:</strong> Tools like seeders and harvesters for efficiency</li>
        <li><strong>Digital Platforms and Mobile Apps:</strong> Tools for weather updates, soil conditions, and market rates</li>
        <li><strong>Crop Monitoring and Drone Technology:</strong> Early detection of pests and diseases</li>
      </ul>
    
      <h2>How Agricultural Solutions Improve Crop Protection</h2>
      <ul>
        <li>Targeted use of insecticides, herbicides, and fungicides</li>
        <li>Disease-resistant seed varieties</li>
        <li>Early detection using AI and sensors</li>
        <li>Safer alternatives to chemical sprays</li>
      </ul>
    
      <h2>Sustainable Agriculture Solutions for the Future</h2>
      <p>New agricultural solutions must focus on the development of sustainable practices. This includes:</p>
      <ul>
        <li>Organic farming methods</li>
        <li>Zero-waste cultivation</li>
        <li>Crop rotation and soil rejuvenation</li>
        <li>Solar-powered equipment</li>
        <li>Nature-based pest management</li>
      </ul>
      <p>These practices support long-term profitability and environmental care.</p>
    
      <h2>Role of Wembley International in Delivering Agriculture Solutions</h2>
      <p>Wembley International leads the way by providing stable agricultural solutions to the market. Their offerings include:</p>
      <ul>
        <li>Quality crop care products</li>
        <li>Research-based farming solutions</li>
        <li>Training programs for modern practices</li>
        <li>Affordable and accessible products for Indian farmers</li>
      </ul>
      <p>Wembley dedicates itself to innovative research so farmers receive top-quality solutions for crop protection and agricultural growth.</p>
    
      <h2>How to Choose the Right Agriculture Solutions</h2>
      <ul>
        <li>Type of crop being grown</li>
        <li>Soil condition and region</li>
        <li>Budget and available resources</li>
        <li>Climate and seasonal challenges</li>
        <li>Long-term farming goals</li>
      </ul>
      <p>Farmers should always seek expert advice and explore trusted providers of tailored solutions.</p>
    
      <h2>Government Support for Agriculture Solutions in India</h2>
      <ul>
        <li>Subsidies on modern farming equipment</li>
        <li>Support for organic and natural farming programs</li>
        <li>Financial aid for purchasing crop protection chemicals and fertilizers</li>
        <li>Farmer education initiatives for better agricultural practices</li>
      </ul>
    
      <h2>Challenges in Implementing Agriculture Solutions</h2>
      <ul>
        <li>Lack of awareness about modern farming solutions</li>
        <li>High cost of advanced technology</li>
        <li>Limited access in rural areas</li>
        <li>Resistance to adopting new methods</li>
      </ul>
      <p>With increased outreach and training, adoption can grow across India.</p>
    
      <h2>Agricultural Solutions Are the Future of Farming</h2>
      <p>The future of Indian agriculture depends on the implementation of smart, scalable, and sustainable farming systems. Advanced agricultural solutions offer increased yield, better crop protection, and reduced operational costs. Collaboration among farmers, government, and innovators like Wembley International will define the next era of Indian farming.</p>
      `,
      date: "25/04/25",
      img: banner, // replace 'banner' with your actual image import or path
    }
  ],
};

export const healthy = {
  title1: "Safe Farming For Healthy Lifestyle",
  para:
    "Manufactured products that guarantee safety contribute to human health by minimizing threats, in addition to fostering well-being and maintaining environmental cleanliness.",
  points: [
    {
      id: 1,
     img:<BsCart4 />     ,
      heading: "Safe Products",
      text:
        "Our company creates protective products that safeguard crops and maintain health by preventing adverse effects on humans and nature.",
    },

    {
      id: 2,
      img:<LuSmilePlus />,
      heading: "Healthier Lifestyle",
      text: "Solutions offered by our company enable farmers to cultivate nutritious crops that result in improved food quality and promote better health outcomes throughout the population.",
    },

    {
      id: 3,
      img:<MdGppGood />,
      heading: "High-Quality Solutions",
      text: "The company provides dependable, high-quality solutions that bring effective protection and growth support to farmers maintaining simple crop management.",
    },

    {
      id: 4,
      img:<GiOakLeaf />,
      heading: "Sustainable Practices ",
      text: "Our environmental protection methods combine with sustainable approaches to achieve farming success for future generations in a green, sustainable world.",
    },
  ],
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "We are confident that we are the leading farm in providing agricultural products that ensure food hygiene and safety.",
  slug: "about-us",
  img: aboutb,
};

export const aboutsec1 = {
  img: about2,
  title1: "About Us",
  title2: "Providing the Finest Agro Solutions to the",
  title3: "Best Farming Partners",
  para1:
    "The company Wembley International supplies premium crop protection options, which include herbicides together with insecticides and fungicides and other solutions. Wembley International delivers solution products to the best agricultural suppliers for increased farm productivity through crop protection and healthy yield maintenance. Wembley International provides reliable farming products to suit diverse agricultural requirements.",
    para2:
    "Our extensive network as well as our accumulated experience enables us to identify current agricultural requirements. Our production aims to deliver solutions for weed control and pest and disease management operations. Our company, Wembley International, maintains its solemn pledge to supply sustainable farming with high-quality solutions for achieving effective harvests.",
  vision: [
    {
      id: 1,
      heading: "OUR MISSION",
      text:
        "Wembley International dedicates itself to supplying farmers with top-quality herbicides, along with insecticides and fungicides and additional crop care products, which aid farmers in protecting their crops and achieving higher yields. Our organization serves modern farming by delivering agricultural products that provide safety and effectiveness in addition to reliability. The company seeks to create enduring partnerships through proven methods backed by expert feedback, which results in reliable, sustainable outcomes.",
    },
    {
      id: 2,
      heading: "OUR VISION",
      text:
        "Our company plans to be the leading agrochemical industry player by providing innovative, sustainable solutions that benefit farmers. Every type of farmer should be able to obtain simple and affordable high-quality crop protection products for their agricultural operations. Wembley International strives to achieve better yields and healthier crops with environmentally responsible farming practices, together with continual improvement of its products, to plant a greener planet.",
    },
  ],

};

export const aboutsec2 =
[
{id:1, img:banner},
{id:2, img:banner2},
{id:3, img:banner},
{id:4, img:banner2},
{id:5, img:banner},
{id:6, img:banner2},
{id:7, img:banner},
{id:8, img:banner2},
]

// Career
export const careerBanner = {
  title: "Grow Your Career with Wembley",
  para:
    "At Wembley, we’re not just cultivating crops—we’re cultivating potential. Every product we create, every field we serve, and every innovation we deliver is powered by the dedication, creativity, and expertise of our team.",
  slug: "about-us",
  img: careerb,
};

export const whywork = {
  title1: "Why Work With Us",
  points: [
    {
      id: 1,
      heading: "Purpose-Driven Work",
      text:
        "Make a real difference by helping farmers improve productivity and sustainability.",
    },

    {
      id: 2,
      heading: "Innovation at the Core",
      text: " Be part of a team that values research, technology, and creative problem-solving.",
    },

    {
      id: 3,
      heading: "Career Growth",
      text: "We invest in your learning and professional development through continuous training and mentorship.",
    },

    {
      id: 4,
      heading: "Inclusive Culture",
      text: "Work in an environment that respects ideas, encourages collaboration, and celebrates success.",
    },
  ],
};

// products page and product
export const productBanner = {
  title: "Our Products",
  para:
    "We provide a full range of quality agricultural solutions trusted by farmers for consistent performance, better growth, and long-term success in every season.",
  slug: "products",
  img: prob,
};

export const productcategory = [

  {id:1,
    label:"Herbicides",
  },
  {id:2,
    label:"Fungicides",
  },
  {id:3,
    label:"Insecticides",
  },
  {id:4,
    label:"Fertilizer",
  },
  {id:5,
    label:"Implements",
  },
   {id:6,
        label:"Plant Growth Regulator",
      },
      {id:7,
        label:"Animal Feeds",
      },
];


export const products = [
  {
  id:1,
  img:oxp,
  category:"Implements",
  name:"OX PLOUGH",
  para1:"Ni jembe linalokokotwa na mnyama na hutumika kugeuza udongo kabla ya kupanda. Inatumika kwa kilimo cha msingi na cha sekondari. Jembe hutumika kwa shughuli mbalimbali za shambani ambazo ni pamoja na kulima, kuweka alama kwenye mstari (kwa ajili ya uanzishaji wa mazao),  na kupalilia. Wakati wa kulima,  jembe la kukokotwa hukata, hupasua, hulegeza, hugeuza udongo na kufukia magugu, mabaki ya mazao na samadi. Jembe la kukokotwa na ng'ombe ni zana ya kawaida ya kulima inayotumiwa na wakulima wadogo barani Afrika. ",
  para2:"Is farming tool that is used to turn over the soil before planting. It is used for primary and secondary tillage. The plough is used for a number of different field operations that include ploughing, row-marking (for crop establishment), ridging and weeding. During ploughing, the animal drawn plough cuts, breaks, loosens, inverts the soil and buries weeds, crop residues and manure. The ox drawn plough is the most common tillage implements used by smallholder farmers in Africa."
},
{
  id:2,
  img:farm16,
  category:"Implements",
  name:"FARMCARE SPRAYER", desc:"(16Ltrs)",
  para1:"Ni bomba nzuri na imara kwa matumizi ya shambani, nyumbani na kwenye bustani. Ni rahisi kutumia na hazichoshi. Imeundwa vizuri sana inakuja kamili ikiwa na nozeli za aina tofauti tofauti na  vipuri, na vile vile  ina  kuja na mkono wa  chuma  ambao  ni  mgumu,imara na unadumu kwa muda mrefu.Inaweza pia kutumika kunyunyizia  sumu za  magugu ili kudhibiti magugu na kunyunyizia virutubisho ili kuimarisha ukuaji wa mimea. Kinyunyizio hiki cha Lita 16  kinakuja na kifunga bomba na kifyatulio kinachoweza kurekebishwa kikamilifu. Ni bora kwa kunyunyizia vimiminika mbalimbali Mfano: Maji, Mbolea,Viuatilifu kwa mfano, viuamagugu,viuakuvu na viuadudu . Inaweza pia kutumika kwa sabuni za kusafisha dawa au matibabu ya vihifadhi. Utumiaji wa bomba hizi hautumii umeme wala mafuta katika ufanyaji kazi wake.",
  para2:"A good and strong knapsack sprayer   for use in the farm field, home and in the garden. It is easy to use and not tiring. It is very well constructed and very simple to use. It comes complete with a nozzle tip and spare parts, as well as it's tough and durable, it’s come with heavy duty steel lance with brass nozzle. It works with manual pressure pump with a side lever. It can also be used to apply herbicidess to control weeds and spray micro-nutrients to enhance plant growth. This 16 Litre Knapsack Pressure Sprayer with shoulder strap comes with a fully adjustable nozzle and trigger lock. It is ideal for spraying various liquids E.g. Water, Fertilizers, Herbicidess and Pesticides. It can also be used for spray cleaning detergents or solvent free preservative treatments. No electricity, no fuel, just good old elbow grease. Straps onto your back and holds 16 litres of liquid for large areas."
},
{
  id:3,
  img:farm20,
  category:"Implements",
  name:"FARM CARE 20Ltrs SPRAYER",desc:"(20 Ltrs)",
  para1:"Ni pampu inayofaa kwa kunyunyizia mbolea za kioevu, dawa za kuua wadudu na kuvu ili kuboresha mavuno ya uzalishaji. Inafaa kwa matumizi ya shambani, nyumbani na kwenye bustani. Ni rahisi kutumia na hazichoshi. Inafanya kazi kupitia kiwiko cha kusukuma cha kushoto/kulia kinachoendeshwa kwa mkono. Kinyunyizio kina vifaa vya pampu ya bastola ya shaba inayoweza kunyumbulika ili kukomesha uvujaji wowote inapotumika. Pampu ya nyuma imeundwa kulingana na mkunjo wa nyuma wa mwili wa binadamu ili kumfanya mtumiaji ajisikie vizuri zaidi anapofanya kazi.",
  para2:"Is farming tool that is used to turn over the soil before planting. It is used for primary and secondary tillage. The plough is used for a number of different field operations that include ploughing, row-marking (for crop establishment), ridging and weeding. During ploughing, the animal drawn plough cuts, breaks, loosens, inverts the soil and buries weeds, crop residues and manure. The ox drawn plough is the most common tillage implements used by smallholder farmers in Africa."
},
{
  id:4,
  img:bestacron720,
  category:"Insecticides",
  name:"BESTACRON 720 EC", desc:"(PROFENOFOS 720G/L)",
  para1:"Ni kiuadudu na kupe kwenye mimea chenye nguvu ya kudhibiti wadudu wanaofyonza ,watafunao na wanaobangua majani na matunda kwenye mazao mbalimbali kama  vile mahindi,vitunguu,kahawa,korosho,nyanya,biringanya,karoti brokoli na mbogamboga nyingine.",
  para2:"Is a foliar insecticides and acaricide which is highly effective against thrips in coffee and tick on plants with the power to control insects that suck, chew and tear leaves and fruits on various crops such as maize, onions african eggplant, carrot, broccoli, lettuce, cashews, tomatoes, and other vegetables.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML x 20"
    },
    {id:3,
      pack:"100 ML",
      cartoon:"100 ML x 100"
    },
  ]
},
{
  id:5,
  img:dual,
  category:"Insecticides",
  name:"DUAL POWER 344EC", desc:"(CYPERMETHRIN 144G/L+IMIDACLOPRID 200G/L)",
  para1:"Ni kiua dudu ambacho hutumika kuua wadudu kama inzi weupe na wadudu wengine wafanyao kazi katika mimea ya mapambo(maua). Na mazao kama vile kabichi, tango na spinachi. ",
  para2:"Is abroad spectrum systematic insecticides which is effective for controlling aphids, bollworm, leafworm and beetles on cabbage, cucumber and spinach and other sucking pests on ornamentals.",
  sizes:[
   
    {id:1,
      pack:"100 ML",
      cartoon:"100 ML x 100"
    },
  ]
},
{
  id:6,
  img:fendel,
  category:"Insecticides",
  name:"FENDEL DUST", desc:"(FENITROTHION1% + Deltamethrin 0.13%)",
  para1:"Ni kiua dudu cha kuangamiza wadudu mbalimbali kwenye mazao ya nafaka na mikunde dhidi ya wadudu waharibifu kwenye ghala la mazao. Inashauriwa kumwaga dawa  kwenye kuta na sakafu ya ghala kabla ya kuhifadhi nafaka au nafaka ambazo tayari zimetibiwa. Ni muhimu kwa ganda la  mahindi kutoka kwa punje na kuchanganya nafaka zilizotibiwa vizuri ni salama kwa hadi miezi 12.",
  para2:"Is a grain protectant dust for post-harvest protection of grains in the granary/grain store. It is advisable to splash some FENDEL DUST on walls and floor of granary before storing cereals or already treated cereals. Its kw maize from kernel and mix properly treated grains are safe for up to 12 months.",
  sizes:[
    {id:1,
      pack:"200 GM",
      cartoon:"200 GM x 40"
    },
    {id:2,
      pack:"500 GM",
      cartoon:"500 GM x 20"
    },
  ]
},
{
  id:7,
  img:supamec,
  category:"Insecticides",
  name:"SUPAMECTIN 5EC", desc:"(ABAMECTIN 20G/L+ACETAMIPRID 30G/L)",
  para1:"Ni kiua dudu ambacho hutumika kuua wadudu kama vidukari ,funza wa mitumba ,vithiripi,na wadudu wengine wafyonzao katika mimea kama tango ,nyanya ,pilipili,chainizi na bamia.",
  para2:"Is a broad – spectrum systemic insecticides which is effective for controlling Diamond black moth, aphid, leaf miner, red spider mites, stock bore, whitefly, thrips, mites,beetle,fruits flies, plant bugs, fire ants on kale, toamatoes ,capsicum ,okra, and Green pepper.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML x 20"
    },
    {id:3,
      pack:"100 ML",
      cartoon:"100 ML x 100"
    },
  ]
},
{
  id:8,
  img:supath,
  category:"Insecticides",
  name:"SUPATHRIN 5EC", desc:"(LAMBDA CYHALOTHRIN 50GM/L)",
  para1:"Ni kiuadudu chenye uwigo mpana wa kuteketeza na kuangamiza wadudu wanaopekecha mazao ,viwavi,viwavi jeshi,mende,vithiripi,jamii ya minyoo,na wadudu wanaofyonza majani.Hutumika kwenye mazao kama nafaka mbogamboga ,vitunguu na mazao ya bustani.",
  para2:"Is a non-systematic broad-spectrum insecticides against sucking pest. It kills pest in onion, it has a wide scope to consume and destroy insects that pierce crops, caterpillars, caterpillars, beetles, worms, earthworms, and insects that suck leaves. It is used on crops such as grains, vegetables, and garden crops.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML x 20"
    },
    {id:3,
      pack:"200 ML",
      cartoon:"200 ML x 40"
    },
    {id:4,
      pack:"100 ML",
      cartoon:"100 ML x 100"
    },
  ]
},
{
  id:9,
  img:tunza,
  category:"Insecticides",
  name:"TUNZA 70WS", desc:"(IMIDACLOPRID 700GM/KG)",
  para1:"Ni kiua dudu cha majumbani na hutumika kulinda mbegu zinazoshambuliwa na wadudu waishio ardhini  .Hutumika kulinda mbegu zilizopandwa au zile zilizosiwa kwenye kitalu .Hufanya kazi kwa ufanisi mkubwa na matokeo mazuri yanayopelekea kupata mavuno mengi na yaliyo bora.",
  para2:"It is a household insecticides and is used to protect seeds that are attacked by insects living in the ground. It is used to protect the seeds that are planted or those that are planted in the nursery. It works with great efficiency and good results that lead to getting more and better harvests.",
  sizes:[
    {id:1,
      pack:"10 GM",
      cartoon:"10 GM x 50"
    },
    {id:2,
      pack:"500 GM",
      cartoon:"500 GM x 10"
    },
  ]
},
{
  id:10,
  img:Best200,
  category:"Herbicides",
  name:"BESTO QUAT 200SL", desc:"(PARAQUAT DICHLORIDE 200G/L)",
  para1:"Ni kiuagugu ambacho hudhibiti magugu ya kila mwaka ,nyasi za kudumu na majani mapana .Inaua magugu papo hapo wakati zoezi la kupulizia linaendelea. Mazao mapya yanaweza kupandwa kwa usalama masaa 4 baada ya kunyunyizia, paraquat haiendani na vifaa vya alkali.",
  para2:" Is a non -selective fast acting contact herbicides for control of all grasses and broadleaved weeds. It kills all green vegetation, leaving brown matured bark of trees unaffected. In activated on contact with soil and it is not taken up by crop roots. New crops can be safely planted 4hours after spraying paraquat is incompatible with alkaline materials.",
  sizes:[
    {id:1,
      pack:"1 Litre bottle",
      cartoon:"1L x 12"
    },
  ]
},

{
  id:11,
  img:Best720,
  category:"Herbicides",
  name:"BESTOMINE 720SL", desc:"(2,4 -D AMINE SALT 720G/L)",
  para1:"Ni kiuagugu chenye wigo mpana wa kuzuia na kuangamiza magugu mapana  na vichaka kwenye mashamba ya mahindi, ngano,mpunga ,miwa na mtama. Inaweza kutumika kabla na badaa wakati udongo una unyevu lakini si wakati wa mvua au ukame, na wakati wa kupulizia mifugo  inatakiwa kuwekwa mbali na malisho kwa angalau siku 21.",
  para2:"Is a selective herbicides for post emergence control of broad leaf weeds in wheat, millet, sugarcane and maize. It can be used at pre/post -emergence when soil is moist but not during rain or drought, and when spayed livestock should be kept away from pastures for at least 21days.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 12"
    },
  ]
},{
  id:12,
  img:Best480,
  category:"Herbicides",
  name:"BESTOSATE 480SL", desc:"(GLYPHOSATE 480G/L)",
  para1:"Ni kiuagugu chenye mpenyo na uwigo mpana wa kuzuia na kuangamiza  magugu mapana na vichaka wakati wa kuandaa shamba kabla ya kupanda mazao mbalimbali kama mahindi ,ufuta,  n.k.",
  para2:"Is herbicidess which used for control of wide range of annual and perennial grasses, broadleaves weeds, certain woody perennials and for field preparation before planting and other field crops such as maize and sesame.",
  sizes:[
    {id:1,
      pack:"1 Litre bottle",
      cartoon:"1L x 12"
    },
    {id:1,
      pack:"20 Litre drum",
      cartoon:"20L drum x 1"
    },
  ]
},{
  id:13,
  img:Best75,
  category:"Herbicides",
  name:"BESTOSPEED", desc:"(GLYPHOSATE AMMONIUM 757G/KG)",
  para1:"Ni kiuagugu  ambacho hufyonzwa kwenye majani na kusafirishwa hadi kwenye mzizi na kupelekea majani kufa kabisa. Husaidia kudhibiti magugu ya msimu kujirudia.Hufanya kazi kwa haraka zaidi na kuleta matokeo mazuri.Ni rahisi kutumia.",
  para2:"It is an herbicides that is sucked into the leaves and transported to the root, causing the leaves to die completely. It helps to control seasonal weed recurrence. It works faster and brings good results. It is easy to use.",
  sizes:[
    {id:1,
      pack:"100 GM ",
      cartoon:"100 GM x 100 "
    },
  ],
  imp:"Use one pack for 16 liters of water."
},{
  id:14,
  img:rondo,
  category:"Herbicides",
  name:"RONDO 480SL", desc:"(GLYPHOSATE 480G/L)",
  para1:"Ni kiuagugu katika hali ya kimiminika,hutumika kuua  magugu  ya aina zote, magugu ya mwaka na magugu ya msimu.  Hupenya ndani ya mmea kwa kupitia  majani na mashina na kuua  magugu  ya kudumu, Mbundu, ukoka ,miamba ya miwa n.k.",
  para2:" It is a post emergence, systemic and non – selective herbicides with translocation within the plant to control annual and perennial grasses and broadleaf weeds, sedges, sugarcane ratoons, and tree stumps regrowth.",
  sizes:[
    {id:1,
      pack:"1 Litre bottle",
      cartoon:"1L x 12"
    },
  ]
},
{
  id:15,
  img:supa720,
  category:"Herbicides",
  name:"SUPAMINE 720SL", desc:"(2,4 – AMINE SALT 720G/L)",
  para1:"Ni kiua gugu  chenye wigo mpana na chenye uwezo wa kuchagua  magugu,kinatumika kuua magugu kwenye mashamba ya mpunga, mahindi,mtama,miwa,n.k, hususani huangamiza majani mapana na hutumika kwa maparizi kwenye mazao husika.",
  para2:"Is a selective water soluble herbicides for post emergence control of broad leaf weeds in wheat corn, millet, sugarcane, etc., especially it destroys broad leaves and is used for trimming on the relevant crops.Can be applied when soil is moist but not during rain or drought.",
  sizes:[
    {id:1,
      pack:"1 Litre bottle",
      cartoon:"1L x 12"
    },
  ]
},
{
  id:16,
  img:suparice,
  category:"Herbicides",
  name:"SUPARICE GOLD 100SC", desc:"(Bispyribac – sodium 100G/L)",
  para1:"Ni kiuagugu chenye wigo mpana katika kuangamiza magugu yote sumbufu kwenye shamba la mpunga. Ni kuuagugu kinacho fanya kazi  baada ya kufyozwa na majani na mizizi. Haidhuru ukuaji au ubora wa mimea ya mpunga  na pia ni salama kwa afya ya udongo. Ni kiambata amilifu chenye Bispyribac-sodiamu:100G/L ambacho kinatumika takribani siku 15 baada ya kupandwa moja kwa moja wakati wa mpunga upo kwenye hatua ya majani 3-5.",
  para2:"  Is a selective post emergence broad spectrum herbicides for control of annual weeds,      broad leaf, aquatics and grasses in rice including resistance biotype. It works after being absorbed by the leaves and roots. It does not harm the growth or quality of rice plants and is also safe for soil health. It has the active ingredient which is Bispyribac – sodium 100G/L, and is being applied about 15days direct seeded when the rice is at 4 leaves stage and weeds are 3-5 leaves stage. De water before application and then water the field 1- 2 days after application or keep wet for 4-5days. Avoid spray drift onto nearby susceptible crops. Apply no more than once for each crop season.",
  sizes:[
    {id:1,
      pack:"100mls",
      cartoon:"100mls x 100"
    },
  ]
},{
  id:17,
  img:supa480,
  category:"Herbicides",
  name:"SUPASATE 480SL", desc:"(GLYPHOSATE 480G/L)",
  para1:"Ni kiuagugu chenye mpenyo na uwigo  mpana wa kuzuia na kuangamiza magugu na vichaka wakati wa kuandaa shamba la mazao mbalimbali. Hutumika kwa udhibiti wa aina mbalimbali za nyasi za kila mwaka na za kudumu, magugu ya majani mapana, na kwa kuandaa shamba kabla ya kupanda mahindi na mazao mengine ya shambani. Inaweza kunyunyiziwa katika hali nzuri ya hali ya hewa wakati hakuna upepo, ili kuzuia kupeperushwa kwa dawa kwenye mimea inayoshambuliwa. Inaweza pia kunyunyiziwa ili kudhibiti magugu kwenye vichochoro kati ya mimea ya mazao katika kahawa, mkonge, mizabibu, miti ya matunda na mashamba ya miwa.",
  para2:"Is used for control of wide range of annual & perennial grasses, broadleaf weeds, certain woody perennials and for field preparation before planting maize and other field crops. It can be sprayed under good weather conditions when no wind, to avoid drifting of spray to adjoining susceptible plants and other useful crops. It can also be sprayed to control weeds in alleys between crop plants in coffee,sisal,vines, fruits trees &sugarcane plantations.",
  sizes:[
    {id:1,
      pack:"1 Litre bottle",
      cartoon:"1L x 12"
    },
  ]
},{
  id:18,
  img:Best50,
  category:"Fungicides",
  name:"BESTONIL 50SC", desc:"BESTONIL 50% SC(CHLOROTHALONIL 500G/L)",
  para1:"Ni kiuatilifu kinachotumika kuzuia na kutibu magonjwa ya kutu ya majani ,ukungu ,kuvu ,madoa,kukauka na mabaka ya majani kwenye mazao mbalimbali pia hutibu CDB kenye kahawa ,hutumika kwenye mazao kama kahawa ,viazi , nyanya na maharage.",
  para2:"Is a broad-spectrum contact fungicides for control of late blight in tomatoes, potatoes, coffee and French beans. Prevents and treats diseases of leaf rust, mold, fungus, spots, drying and leaf spots on various crops, also treats CDB like coffee.",
  sizes:[
    {id:1,
      pack:"1 Litre ",
      cartoon:"1L x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML X 20"
    },
  ]
},
{
  id:19,
  img:Bestsup,
  category:"Fungicides",
  name:"BESTONIL SUPER 720SC", desc:"(CHLOROTHALONIL 720G/L)",
  para1:"Ni kiua kuvu chenye wigo mpana wa kukinga kuvu kwenye mazao mbalimbali kama vile, nyanya ,viazi,kahawa na maharage kiuatilifu hiki hukinga na kuzuia magonjwa inapopuliziwa kabla ya mmea haujaathirika na ugonjwa. Kiambata hiki hufanya kazi kwa njia ya mguso.",
  para2:"Is a broad – spectrum contact fungicidess for control of early and late blight on tomatoes, potatoes, coffee and French beans. This fungicides protects and prevents diseases when sprayed before the plant is affected by the disease. This agent works through contact.",
  sizes:[
    {id:1,
      pack:"1 Litre ",
      cartoon:"1L x 20"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML X20"
    },
  ]
},
{
  id:20,
  img:mansup,
  category:"Fungicides",
  name:"MANCOSTAR SUPER 720WP", desc:"(MANCOZEB 640G/KG +METALAXYL 80G/KG)",
  para1:"Ni kiuatilifu chenye wigo mpana wa kuangamiza kuvu na magonjwa mengine kwenye nyanya na mazao mengine.Hutibu na kukinga kuvu kwenye mazao ya mashambani  kama nyanya ,viazi,vitunguu  mbogamboga n.k. Matumizi yake inatumika kwa 1.5kg/ha kwa kuchanganya na lita 600 za maji. ",
  para2:"Is a broad Spectrum systemic and Contact fungicides to control a wide range of fungal diseases in agricultural crops by its dual action: preventive as well as curative. These diseases include early and late blight of tomatoes, potatoes and onions. The application rate is 1.5kg/ha per 600 Lt of water Mancostar Super 720WP.",
  sizes:[
    {id:1,
      pack:"1KG",
      cartoon:"1KG X 20"
    },
    {id:2,
      pack:"500GM",
      cartoon:"500GM X20"
    },
    {id:3,
      pack:"200GM",
      cartoon:"200GM x50"
    },
  ]
},
{
  id:21,
  img:man5sc,
  category:"Fungicides",
  name:"MANCOVIL 5SC", desc:"(HEXACONAZOLE 5%SC)",
  para1:"Ni kiuatilifu chenye wigo mpana wa kudhibiti na kutibu kuvu kwenye mpunga ,nyanya na ubwiri unga kwenye mikorosho inaweza kuchanganywa na viuatilifu vingine vya wadudu kama lambda, cyhalothrin ,profenofos n.k.",
  para2:"Is a broad spectrum suspension concentration systemic fungicides for the control of rice false smut, rice blight and fungal in tomatoes and control of powdery mildews on cashews. Can be mixed with other insecticidess such as lambda, cyhalothrin, profenofos etc.",
  sizes:[
    {id:1,
      pack:"1 Litre ",
      cartoon:"1L x 10"
    },
    
  ]
},
{
  id:22,
  img:sulph,
  category:"Fungicides",
  name:"SULPHOWIT 800WDG", desc:"(SULPHUR 800GM/KG)",
  para1:"Ni kiua kuvu kinachopenya kwa njia ya mguso hutumika kwa mazao ya mashambani kama korosho, tufani, njegere, maharage, mbogamboga n.k. Inaweza kutumika kwa kiwango cha 50gm kwa lita 20 za maji. Ili kuandaa mchanganyiko huo, ongeza sulphowit 80% WDG kwenye tanki na ujaze hadi kiwango cha maji kinachohitajika, hakikisha kuna mtikisiko wa kutosha wakati wa kujaza kuchanganya na kunyunyiza.",
  para2:"Is a contact fungicides that is based on naturally occurring Sulphur. It is used for controlling scab diseases of apples, peas, cashew nuts and peaches. It consists of water dispersible granules containing 80% Sulphur.It can be applied at a rate of 50gm per 20lts of water. To prepare the mixture add sulphowit 80%WDG to the tank and full up to tne required amount of water, ensure adequate agitation duringfilling mixing and spraying.",
  sizes:[
    {id:1,
      pack:"1KG",
      cartoon:"1KG X20"
    },
    
  ]
},
{
  id:23,
  img:supaking,
  category:"Fungicides",
  name:"SUPAKINGA 72WP", desc:"(MANCOZEB 640G/KG+CYMOXANIL 80G/KG)",
  para1:"Ni kiuatilifu kisichochagua aina ya kuvu  chenye wigo mpana wa kuzuia na kutibu kuvu na ukungu kwenye nyanya, viazi na kabichi. Usipulizie wakati wa jua kali, wakati wa upepo mkali na wakati mvua inanyesha.  Unaweza kupuliza wakati wa asubuhi mapema na jioni wakati jua limezama.",
  para2:"Is a broad spectrum &systemic fungicides for protecting and curing early and late blights, downy mildew on tomatoes, potatoes and cabbage it cannot be sprayed during the day, when the sun is shining, and when there is strong wind and when it is raining.",
  sizes:[
    {id:1,
      pack:"1KG ",
      cartoon:"1KG X20"
    },
    {id:2,
      pack:"500GM",
      cartoon:"500GMx20"
    },
    {id:3,
      pack:"200GM",
      cartoon:"200GM x50"
    },
  ]
},
{
  id:24,
  img:supa,
  category:"Fungicides",
  name:"SUPAZEB 80WP", desc:"(MANCOZEB 800GM/KG)",
  para1:"Ni kiua kuvu cha kuzuia na kukinga kuambukizwa ukungu kwenye mazao ya bustani kama nyanya, biringanya, viazi na mbogamboga. Inafanya kazi vizuri kwa kuchanganywa na  maji. Lazima itumike kama dawa kama kiuatilifu cha  kuzuia na kukinga kwa hivyo itumike kabla ya ugonjwa kuonekana. Inaendana na viuadudu vyote vya kawaida isipokuwa salfa ya chokaa au suluhisho la alkali.",
  para2:"Is a broad-spectrum control a wide range of fungal diseases in agricultural plants.  These include early and late blight of tomatoes, potatoes and eggplants by its preventive action only. Must be used as a preventive spray and therefore applied before the disease appears. Is compatible with all common insecticidess except lime sulphur or alkaline solution.",
  sizes:[
    {id:1,
      pack:"1KG ",
      cartoon:"1KG X20"
    },
    {id:2,
      pack:"500GM",
      cartoon:"500GM X40"
    },{id:3,
      pack:"200GM",
      cartoon:"200GM x 50"
    },
  ]
},
{
  id:25,
  img:ferti,
  category:"Fertilizer",
  name:"AMMONIUM SULPHATE", desc:"(NITROGEN -21% +SULPHUR- 24%)",
  para1:"Ni mbolea yenye asili ya chumvi chumvi, hutumika kukuzia mimea ya mazao mbalimbali kama vile mahindi, maharage n.k. Ina nitrojeni ya ammoniakali na salfa inayoweza kuyeyuka katika maji. Nitrojeni iko katika mfumo wa amonia, ambayo hupunguza hatari ya kuvuja wakati wa mvua. Mbolea hii hutumika zaidi katika kilimo na kwenye nyasi na mimea inayohitaji salfa nyingi ( mahindi na viazi).",
  para2:" Ammonium sulphate contains ammoniacal nitrogen and water-soluble sulphur. The nitrogen is entirely in the form of ammonium, which reduces the risk of leaching during wet periods. This fertilizer is mainly used in arable farming and on grassland on crops that need a lot of sulphur (e.g. maize and potatoes). It is a salt-based fertilizer, used to grow various crops such as corn, beans, etc.",
},
{
  id:26,
  img:supaextra,
  category:"Herbicides",
  name:"SUPA EXTRA 660SC", desc:"(METOLACHLOR 290G/L +ATRAZINE 370G/L)",
  para1:"Ni kiuagugu cha kimfumo kinachobaagua kinachotumika Kwa kudhibi na kuangamiza nyasi na magugu ya majani mapana kwenye zao la mahindi. Ni kiuagugu kinachotumika kabla na baada ya zao kuchipua. ",
  para2:"Is a selective herbicide for control of broadleaf weed in maize. Spray on soil evenly at pre-emergence of corn. Use only once during the growth season of crops.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 12"
    },
  ]
},{
  id:27,
  img:supapower,
  category:"Fungicides",
  name:"SUPA POWER 76WP", desc:"PROBINEB 70% + CYMOXANIL 6%",
  para1:"Ni kiua kuvu kisichochagua aina ya kuvu chenye wigo mpana wa kuzuiana kutibu kuvu na ukungu kwenye mazao kama nyanya,viazi,kabichi na vitunguu. Nyunyizia kabla au katika hatua ya awali ya ugonjwa na nyunyizia mara moja kila baada ya siku 7 kulingana na hali. Inaweza kunyunyiziwa mara kwa mara 2-3 ili kuhakikisha athari ya udhibiti. Usinyunyizie kipindi cha upepo mkali au mvua.",
  para2:"Is a broad spectrum and systemic fungicide for protecting and curing early and late blight, Anthracnose, scab and Downy mildew in potatoes, tomatoes, cabbage and onions.Spray before or in the early stage of disease, and spray once every 7 days according to the condition. It can be sprayed continuously for 2-3 times. The spraying must be done in the way that each single part of the plants is coated.",
  sizes:[
    {id:1,
      pack:"1 KG",
      cartoon:"1KG x 20"
    },
  ]
},
{
  id:28,
  img:supatiger,
  category:"Insecticides",
  name:"SUPA TIGER 140SC", desc:"CHLORFENAPYR 100G/L +ABAMECTIN 40G/L",
  para1:"Ni kiua dudu chenye uwigo mpana kinachotumika kuzuia na kuangamiza wadudu kwa njia ya mguso na tumbo ambacho kinauwezo wakupenya kwenye jani ili kudhibiti na kuua wadudu wasumbufu. Hutumika kuangamiza wadudu kama Leafminer na Tuta absoluta(kanitangaze) kwenye nyanya , viwavi jeshi kwenye mahindi, and vithiripi kwenye vitunguu.",
  para2:" Is a broad-spectrum insecticide with both systemic and contact stomach action. For control of army caterpillar in Maize, Caterpillar and thrips on onion, Leaf miner (Tuta absoluta) on Tomatoes and beet armyworm in Kale.  Incompatible with alkaline materials and oxidizing agent. Do not use in the place of honeybee colony and the flowering periods. Do not use in the silkworm room and the mulberry orchard.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1 Litre x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML x 20"
    },
     {id:3,
      pack:"100 ML",
      cartoon:"100 ML x 100"
    },
  ]
},
{
  id:29,
  img:supagrow,
  category:"Fertilizer",
  name:"SUPAGROW", desc:"(NPK 19-19-19 +1MgO +TE)",
  para1:"Ni mbolea yenye virutubisho na madini yayeyukao kwenye maji inayotumika kwenye bustani,kilimo cha mbogamboga na mazao mengine ina mchanganyiko maalum wenye kuupa mmea matokeo mazurina ya uhakika baada ya kutumia kikamilifu kwa kufuata maelekezo.",
  para2:"SUPAGROW is a complete range of NPK 19-19-19+1MgO+TE water soluble fertilizer characterized with acid reaction. It’s produced with pure raw materials and chelated trace elements and rich source of magnesium to develop the chlorophyll photosynthesis in the rapid growth phase of the crop. SUPAGROW is ideal for nutrigation, soil application and foliar spray. All nutrients’ elements are promptly absorbed to stimulate fundamental physiological processes. It can be used before and after transplanting.",
  sizes:[
    {id:1,
      pack:"1 KG",
      cartoon:"1 KG x 20"
    },
  ]
},
{
  id:30,
  img:vegi,
  category:"Plant Growth Regulator",
  name:"VEGI SUPER", desc:"",
  para1:"Inatumika katika kuimarisha Ukuaji wa Mimea.Inatumika kwenye mazao kama vile Matunda, Mboga mboga, Maua,na mazao mengine ya shambani. Ina mchanganyiko wenye virutubisho vya,",
  para2:"",
  detail:[
    {id:1,
      pack:"Nitrojeni",
      cartoon:"Husaidia katika uchukuaji wa virutubisho vingine muhimu kwa kukuza ukuaji wa mizizi na kuongeza ufyonzaji wa virutubisho na mizizi ya mimea."
    },
     {id:2,
      pack:"Fosforasi",
      cartoon:"Kusitawisha mizizi · Kuongezeka kwa bua na uimara wa shina · Uotaji bora wa maua na uzalishaji wa mbegu·"
    }, {id:3,
      pack:"Calcium",
      cartoon:"Madini muhumu sana kwa mimea, na kazi yake kubwa ni kutengeneza kuta za cell ambazo husaidia kuukinga mmea au tunda dhidi ya vijidudu hatarishi vya magonjwa."
    }, {id:4,
      pack:"Magnesium",
      cartoon:"	Ni madini muhimu katika kuhakikisha ubora wa matunda."
    }, {id:5,
      pack:"Salfa ",
      cartoon:"Kuipa mimea virutubisho muhimu, kuchochea ukuaji imara na kuongeza uzalishaji wa mazao kwa ujumla."
    },
  ]
},
{
  id:31,
  img:AminoESel,
  category:"Animal Feeds",
  name:"AMINO E SEL", desc:"Powerful Antioxidant for Crazy Chick Disease",
  para1:"Vitamin E and selenium deficiencies are main reason for encephalomalacia, muscular dystrophy, exudative diathesis, decreased hatch ability in eggs, infertility problems in calves, cattle, goats, sheeps, poultry and pigs It prevents iron intoxication after iron administration in piglets.",
  para2:"",
  sizes:[
    {id:1,
      pack:"100GM",
      cartoon:"100GM X 70"
    },
  
  ],
  
points: [
  {
    id: 1,
    heading: "DOSAGE: For Oral Administration",
    pointers: [
      "Poultry and Swine – 2 gm per 2 Lt. of drinking water for 10 days",
      "Chicks (< 21 days): 1 gm per 2 Lt. of drinking water for 10 days",
      "Calves, Goats and Sheep – 10 gm per 2 Lt. of drinking water for 10 days",
      "Cattle – 25 gm per 2 Lt. of drinking water for 10 days"
    ]
  },
  {
    id: 2,
    heading: "WITHDRAWAL PERIOD",
    pointers: [
      "None"
    ]
  },
  {
    id: 3,
    heading: "ADVANTAGES",
    pointers: [
      "Prevents crazy chick disease",
      "For improved fertility and hatchability",
      "Helps maintain muscle strength and stamina in poultry and livestock",
      "Aids in cases of encephalomalacia and exudative diathesis in poultry",
      "Improves muscle tone and reduces problems of leg weakness"
    ]
  },
  {
    id: 4,
    heading: "Pack Size",
    pointers: [
      "100GM x 70"
    ]
  },
  {
    id: 5,
    heading: "Product Composition",
    pointers: [
      "Vitamin E feed grade – 200 mg",
      "Sodium selenite – 2 mg"
    ]
  },
  {
    id: 6,
    heading: "SABABU / FAIDA YA KUTUMIA BIDHAA HII",
    pointers: [
      "Upungufu wa vitamini E na selenium ni miongoni mwa sababu kuu za ugojwa wa degedege ya kuku, kusinyaa kwa misuli, upungufu wa vitamin E kwa kuku, kupungua kwa uwezo wa kuanguliwa kwa mayai, utasa kwa Ng’ombe, Mbuzi, Kondoo, Kuku na Nguruwe",
      "Huzuia sumu ya madini chuma kwa mnyama baada ya kuchoma sindano ya madini chuma kwa nguruwe",
      "Husaidia wanyama kukua kwa kasi na uwezo wa kushika mimba (infertility)",
      "Huzuia tatizo la kondo kubaki (Retained placenta) na maambukizi ya kizazi (Metritis)",
      "Huzuia tatizo la ugonjwa wa machuchu (mastitis), joto lisilo onekana (silent heat) na husaidia wanyama kuingia joto"
    ]
  },
  {
    id: 7,
    heading: "KIPIMO - Tumia kwa njia ya kunywa kwenye maji",
    pointers: [
      "Kuku na Nguruwe: gm 2 kwa lita 2 ya maji ya kunywa kwa siku 10",
      "Vifaranga (chini ya siku 21): gm 100 kwa lita 200 za maji kwa siku 10",
      "Ndama, Mbuzi na Kondoo: gm 10 kwa lita 2 za maji kwa siku 10",
      "Ng’ombe: gm 25 kwenye lita 2 za maji kwa siku 10",
      "Muda wa mazao ya mnyama kurudi katika matumizi tena hakuna"
    ]
  }
],
},
{
  id:32,
  img:AminoMilkBoost,
  category:"Animal Feeds",
  name:"AMINO MILK BOOST", desc:"To Improve Production & Fat Percentage",
  para1:"Vitamin E and selenium deficiencies are main reason for encephalomalacia, muscular dystrophy, exudative diathesis, decreased hatch ability in eggs, infertility problems in calves, cattle, goats, sheeps, poultry and pigs It prevents iron intoxication after iron administration in piglets.",
  para2:"",
  sizes:[
    {id:1,
      pack:"100GM",
      cartoon:"100GM X 70"
    },
  
  ],
  
points: [
  {
    id: 1,
    heading: "DOSAGE: For Oral Administration",
    pointers: [
      "Poultry and Swine – 2 gm per 2 Lt. of drinking water for 10 days",
      "Chicks (< 21 days): 1 gm per 2 Lt. of drinking water for 10 days",
      "Calves, Goats and Sheep – 10 gm per 2 Lt. of drinking water for 10 days",
      "Cattle – 25 gm per 2 Lt. of drinking water for 10 days"
    ]
  },
  {
    id: 2,
    heading: "WITHDRAWAL PERIOD",
    pointers: [
      "None"
    ]
  },
  {
    id: 3,
    heading: "ADVANTAGES",
    pointers: [
      "Prevents crazy chick disease",
      "For improved fertility and hatchability",
      "Helps maintain muscle strength and stamina in poultry and livestock",
      "Aids in cases of encephalomalacia and exudative diathesis in poultry",
      "Improves muscle tone and reduces problems of leg weakness"
    ]
  },
  {
    id: 4,
    heading: "Pack Size",
    pointers: [
      "100GM x 70"
    ]
  },
  {
    id: 5,
    heading: "Product Composition",
    pointers: [
      "Vitamin E feed grade – 200 mg",
      "Sodium selenite – 2 mg"
    ]
  },
  {
    id: 6,
    heading: "SABABU / FAIDA YA KUTUMIA BIDHAA HII",
    pointers: [
      "Upungufu wa vitamini E na selenium ni miongoni mwa sababu kuu za ugojwa wa degedege ya kuku, kusinyaa kwa misuli, upungufu wa vitamin E kwa kuku, kupungua kwa uwezo wa kuanguliwa kwa mayai, utasa kwa Ng’ombe, Mbuzi, Kondoo, Kuku na Nguruwe",
      "Huzuia sumu ya madini chuma kwa mnyama baada ya kuchoma sindano ya madini chuma kwa nguruwe",
      "Husaidia wanyama kukua kwa kasi na uwezo wa kushika mimba (infertility)",
      "Huzuia tatizo la kondo kubaki (Retained placenta) na maambukizi ya kizazi (Metritis)",
      "Huzuia tatizo la ugonjwa wa machuchu (mastitis), joto lisilo onekana (silent heat) na husaidia wanyama kuingia joto"
    ]
  },
  {
    id: 7,
    heading: "KIPIMO - Tumia kwa njia ya kunywa kwenye maji",
    pointers: [
      "Kuku na Nguruwe: gm 2 kwa lita 2 ya maji ya kunywa kwa siku 10",
      "Vifaranga (chini ya siku 21): gm 100 kwa lita 200 za maji kwa siku 10",
      "Ndama, Mbuzi na Kondoo: gm 10 kwa lita 2 za maji kwa siku 10",
      "Ng’ombe: gm 25 kwenye lita 2 za maji kwa siku 10",
      "Muda wa mazao ya mnyama kurudi katika matumizi tena hakuna"
    ]
  }
],
},
{
  id: 33,
  img: AminoCalGold, // change if needed
  category: "Animal Feeds",
  name: "AMINO CAL GOLD",
  desc: "Calcium, Phosphorus with Vitamins D3 & B12 for Animal Healthcare",

  para1:
    "Increase milk yield, improve muscle and skeletal strength, promote growth and stamina, help in protein synthesis, prevent milk fever and rickets in cattle, assist in mastitis prevention, strengthen bones, improve egg production and eggshell strength, reduce leg weakness in broilers and layers, and enhance overall growth and hatchability.",

  para2:
    "Huongeza uzalishaji wa maziwa, kuimarisha hamu ya kula na FCR, kuboresha afya ya mnyama, kuimarisha mifupa na misuli, kusaidia kutengeneza protini mwilini, kuzuia homa ya maziwa, na kuongeza ukuaji na stamina kwa wanyama.",

  sizes: [
    {
      id: 1,
      pack: "1 Litre",
      cartoon: "1 LT x 12"
    },
    {
      id: 2,
      pack: "500 ML",
      cartoon: "500 ML x 24"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "BENEFITS",
      pointers: [
        "Increase milk yield",
        "Improve muscle and skeletal strength",
        "Promote growth and stamina",
        "Help in protein synthesis",
        "Prevents milk fever and rickets in cattle",
        "Help in mastitis prevention Improves skeletal and muscular strength of cattle",
        "Makes stronger bones and prevent bones related disease in cattle and poultry",
        "Improves egg production and eggshell strength in poultry",
        "Prevents leg weakness in broilers, breeders, and layers",
        "Improves overall growth and hatchability in broilers, breeders and layers."
      ]
    },
    {
      id: 2,
      heading: "DIRECTION FOR USE",
      pointers: [
        "Cattle: 2 ml per 1 L of water for 8–10 days",
        "Poultry: 1 ml per 1 L of water for 8–10 days",
        "Chicks: 1 ml per 1 L of water for 8–10 days",
        "Growers / Broilers: 2.5 ml per 1 L of water for 8–10 days",
        "Egg laying hens: 5 ml per 1 L of water for 8–10 days"
      ]
    },
    {
      id: 3,
      heading: "PRODUCT COMPOSITION",
      pointers: [
        "Calcium – 32560 mg",
        "Phosphorus – 16770 mg",
        "Vitamin D3 – 16000 IU",
        "Vitamin B12 – 2000 mcg",
        "Carbohydrate – 400000 mg",
        "Asparagus Recemoces – 2000 mg",
        "Magnesium – 20000 mg"
      ]
    },
    {
      id: 4,
      heading: "FAIDA",
      pointers: [
        "Huongeza uzalishaji mkubwa wa maziwa bora kwa ng’ombe na mbuzi",
        "Huongeza hamu ya kula na FCR",
        "Huboresha afya ya mnyama",
        "Huimarisha mifupa na nguvu za misuli",
        "Husaidia katika kutengeneza protini muhimu mwilini",
        "Huzuia homa ya maziwa (Milk fever)",
        "Husaidia ukuaji wa haraka na stamina kwa mnyama"
      ]
    },
    {
      id: 5,
      heading: "NAMNA YA KUTUMIA",
      pointers: [
        "Ng’ombe: 2 ml kwa lita 1 ya maji kwa siku 8–10",
        "Ndege: 1 ml kwa lita 1 ya maji kwa siku 8–10",
        "Vifaranga: 1 ml kwa lita 1 ya maji kwa siku 8–10",
        "Kuku wanyama: 2.5 ml kwa lita 1 ya maji kwa siku 8–10",
        "Kuku wa mayai: 5 ml kwa lita 1 ya maji kwa siku 8–10"
      ]
    }
  ]
},
{
  id: 34,
  img: AminoEggBoost, // update if needed
  category: "Animal Feeds",
  name: "AMINO EGG BOOSTER",
  desc: "Nutrients For Eggshell Quality",

  para1:
    "Helps overcome thin-shelled and leathery eggs, reduces shell fractures, controls uneven and rough eggshells, boosts egg production during laying period, and helps birds recover from stress.",

  para2:
    "Huongeza utagaji wa mayai, kuondoa tatizo la magamba mabovu, kupunguza uwezekano wa kuvunjika kwa ganda, kuboresha afya na kinga ya kuku, na kudumisha utagaji wenye ubora kwa muda mrefu.",

  sizes: [
    {
      id: 1,
      pack: "1 Litre",
      cartoon: "1 LT x 12"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "ADVANTAGES",
      pointers: [
        "Overcomes problems of thin-shelled eggs and leathery eggs",
        "Reduces the incidence of shell fracture with hairline cracks",
        "Controls uneven and rough eggshell",
        "Boosts egg production in laying birds and helps in stress recovery",
        "Maintains high production levels throughout the laying period"
      ]
    },
    {
      id: 2,
      heading: "DOSAGE",
      pointers: [
        "Breeders and Layers: 1 ml per 2 Litres of drinking water for 10 days",
        "Supplementation may be re-introduced if required",
        "Withdrawal period: NONE"
      ]
    },
    {
      id: 3,
      heading: "PRODUCT COMPOSITION",
      pointers: [
        "Calcium – 2000 mg",
        "Phosphorus – 1000 mg",
        "Vitamin D3 – 8000 IU",
        "Vitamin B12 – 100 mcg"
      ]
    },
    {
      id: 4,
      heading: "VIRUTUBISHO KWA UBORA WA GANDA LA YAI",
      pointers: [
        "Huongeza utagaji wa mayai mengi na yenye ubora",
        "Husaidia kuondoa tatizo la mayai yenye magamba membamba na mayai yasiyo na magamba (teketeke)",
        "Hupunguza uwezekano wa ganda kuvunjika na kuwa na mistari ya nyufa",
        "Huboresha afya na kuzuia mayai kuwa ya ukubwa tofauti na magamba yasiyo nyororo",
        "Hudumisha utagaji wa mayai kwa muda mrefu na ganda kuwa imara",
        "Huboresha afya ya kuku na kuimarisha kinga dhidi ya magonjwa"
      ]
    },
    {
      id: 5,
      heading: "KIPIMO",
      pointers: [
        "Kuku wazazi na watagao: 1 ml kwa lita 2 ya maji kwa siku 10",
        "Virutubisho vinaweza kutolewa tena endapo kutahitajika"
      ]
    }
  ]
},
{
  id: 35,
  img: Aminolyte, // update image variable if needed
  category: "Animal Feeds",
  name: "AMINOLYTE",
  desc: "Water Soluble Powder With Vitamins, Electrolytes and Acidifiers for Livestock and Poultry (Best Electrolyte)",

  para1:
    "AMINOLYTE is used as a continuous source of essential micronutrients, helping animals cope with stress caused by vaccination, transportation, weather changes, and diseases. It provides essential amino acids that support growth and improve feed conversion. Recommended to use for at least 10 days or until appetite returns.",

  para2:
    "AMINOLYTE inaweza kutumika kama chanzo cha virutubisho muhimu katika hali ya joto na uzalishaji wa kisasa. Husaidia kupunguza mfadhaiko kutokana na mabadiliko ya hali ya hewa, magonjwa, chanjo, usafiri, na kukata midomo. Huongeza ukuaji, utagaji, hamu ya kula, na FCR, na hutumika pia wakati wa magonjwa kusaidia uponyaji.",

  sizes: [
    {
      id: 1,
      pack: "100 GM",
      cartoon: "100GM x 70"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "INDICATION (Continuous Application)",
      pointers: [
        "AMINOLYTE may be used as a source of micronutrients in tropical conditions and for intensive production methods.",
        "Changes, vaccination, transportation and debarking etc",
        "It also provides essential amino acids to promoter growth and improved feed conversion.",
        "Intensive Application Helps to reduce stress in animals arising from diseases, weather.",
        "AMINOLYTE should be used for at least 10 days or until appetite is regained."
      ]
    },
    {
      id: 2,
      heading: "DOSAGE AND ADMINISTRATION",
      pointers: [
        "Continuous Application: Poultry- 1 gm per 2 Litres of water for 10 days",
        "Continuous Application: Swine- 1 gm per 2 Litres of water for 10 days",
        "Intensive application (treatment): Poultry- 2 gm per 1 Litre of water for 10 days",
        "Intensive application (treatment): Swine- 2 gm per 1 Litre of water for 10 days"
      ]
    },
    {
      id: 3,
      heading: "PRODUCT COMPOSITION",
      pointers: [
        "Vitamin A – 10.0 MIU",
        "Vitamin D3 – 4.0 MIU",
        "Vitamin E – 6.5 g",
        "Vitamin K3 – 2.0 g",
        "Vitamin B1 – 1.5 g",
        "Vitamin B2 – 3.5 g",
        "Vitamin B6 – 2.5 g",
        "Vitamin B12 – 10 mg",
        "Vitamin C – 12 g",
        "Folic Acid – 0.4 g",
        "Nicotinic Acid – 7 g",
        "Pantothenic Acid – 7 g",
        "Magnesium – 6 g",
        "Potassium – 7.5 g",
        "Sodium – 20 g",
        "Lysine – 20 g",
        "Methionine – 10 g",
        "Threonine – 5 g",
        "Citric Acid – 10 g"
      ]
    },
    {
      id: 4,
      heading: "KWA MATUMIZI ENDELEVU",
      pointers: [
        "AMINOLYTE inaweza kutumika kama chanzo cha virutubisho muhimu kwenye hali ya hewa ya joto na katika mfumo wa uzalishaji usiyo kuwa wa huria.",
        "Pia hutoa amino asidi muhimu zisizo zalishwa na mwili ili kuboresha ukuaji na uwezo wa myama kubadilisha chakula kuwa mazao.",
        "Matumizi sahihi ya aminolyte husaida kupunguza mfadhaiko unaotokana na magonjwa, mabadiliko ya hali ya hewa, chanjo, usarishaji na kukata midono n.k.",
        "AMINOLYTE inapaswa kutumika kwa angalau siku 10 au hadi mnyama atakapo pata tena hamu ya kula.",
        "Hu boost kuku katika ukuaji, utagaji na afya kwa ujumla.",
        "Huondoa stress za ain azote kwa Wanyama (chanjo, usafiri,n.k).",
        "Kusaidia sana katika kuongeza uzalishaji.",
        "Hutumika wakati wa magonjwa na matibabu kusaidia uponyaji.",
        "Huongeza hamu ya kula na FCR."
      ]
    },
    {
      id: 5,
      heading: "KIPIMO NA JINSI YA KUWAPATIA Kwa matumizi endelevu",
      pointers: [
        "Kuku: 1 gm kwa lita 2 za maji kwa siku 10",
        "Nguruwe: gm 1 kwa lita 2 ya maji kwa siku 10 Kwa matumizi sahihi ya matibabu",
        "Kuku: 2gm kwa lita 1 ya maji kwa siku 10",
        "Nguruwe: 2gm kwa lita 1 ya maji kwa siku 10"
      ]
    }
  ]
},
{
  id: 36,
  img: Boostermin, // update image variable if needed
  category: "Animal Feeds",
  name: "BOOSTERMIN",
  desc: "Brioler Booster Multivitamin with Additional Amino Acids. (WATER SOLUBLE POWDER)",

  para1:
    "INDICATION A balance supplement containing vitamins, minerals and extra amino acids in water soluble form to promote growth of commercial broilers and chicks up to 8 weeks of age. • Useful to combat stress during periods of high temperature, vaccination and as aid in recovery from disease, to boost perfomance of the stock. • BOOSTERMIN contains the extra Methionone and Lysine which helps the healthy and productive poultry for maximum growth and high performance. Also, the references show increased final body and breast weight with increasing dietary methionone content. Methionine helps to improve and normalize the liver function which increases the immunity and prevent poultry from infectious diseases.",

  para2:
    "SABABU/FAIDA YA KUTUMIA BOOSTERMIN Boostermin ni kirutubisho ambacho kina vitamini, madini na asidi za amino za ziada ndani yake na ipo katika mfumo wapoda unao yeyuka kwenye maji ili kusaidia ukuaji wa kuku wa nyama na vifaranga hadi kufikia wiki 8. Boostermin hutumika katika kupambana na mfadhaiko katika kipindi cha joto kali, Chanjo, usafirishaji na kama msaada katika kupona kipindi wanapo ugua, na kuongeza uzalishaji wa kuku. Boostermin ina methionine na lysine za ziada ambazo husaidia kuku wenye afya na tija ili waweze kukua kwa haraka na kuongeza uzalishaji Pia rejeo zinaonyesha kadiri unavyoongeza methionine katika chakula cha kuku ndivyo utakavyopata kuku wenye uzito mkubwa na kidari chenye uzito mkubwa. Methionine husaidia kuboresha na kurekebisha ufanisi wa kazi za ini ambazo huongeza kinga na kuzuia kuku kupata magonjwa ya kuambukiza. • Hutumika kulelea vifaranga na pia hutumika kwa kuku wakubwa. • Huongeza uchangamfu kwa vifaranga na kuongeza kasi ya ukuaji. • Wakati wa magonjwa husaidia kuku kupona haraka. • Huongeza uzalishaji wa kuku wa mayai nawa nyama. • Hudumisha na kuboresha afya ya mnyama.",

  sizes: [
    {
      id: 1,
      pack: "1KG",
      cartoon: "1KG X 12"
    },
    {
      id: 2,
      pack: "500GM",
      cartoon: "500GM X 24"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "DOSAGE",
      pointers: [
        "Routine: 1 gm in 2 Lt drinking water for 7 consecutive days.",
        "Strategic: 1 gm in 3 Lt drinking water during 3rd to 6th weeks of age.",
        "Vaccination: 1 gm 2 Lt drinking water one day before.",
        "WITHDRAWAL PERIOD: None"
      ]
    },
    {
      id: 2,
      heading: "PRODUCT COMPOSITION",
      pointers: [
        "Vitamin A- 10000000 IU",
        "Vitamin D3- 4750000 IU",
        "Vitamin E- 3000 IU",
        "Vitamin K3- 4000 Mg",
        "Vitamin C- 10000 Mg",
        "Vitamin B1- 2750 Mg",
        "Vitamin B2- 4750 Mg",
        "Vitamin B6- 2750 Mg",
        "Vitamin B12- 11750 Mg",
        "D - calcium pantothenate- 5750 Mg",
        "Nicotinamide- 16500 Mg",
        "DL - methionine- 20000 Mg",
        "Lysine hydrochloride- 40000 Mg",
        "Manganese sulphate- 12750 Mg",
        "Zinc sulphate- 13250 Mg",
        "Ferrous sulphate- 5250 Mg",
        "Copper sulphate- 13250 Mg",
        "Potassium chloride- 73750Mg",
        "Biotin- 20000 Mcg",
        "Sodium sulphate- 215000 Mg",
        "Sodium chloride- 48750 Mg",
        "Magnesium sulphate- 12750 Mg",
        "Excipients qs"
      ]
    },
    {
      id: 3,
      heading: "KIPIMO",
      pointers: [
        "1 gm kwenye lita 2 za maji kwa siku 10",
        "ONYO Weka mbali na watoto",
        "MUDA WA MAZAO YA MNYAMA KURUDI KUTUMIKA Hakuna"
      ]
    }
  ]
},
{
  id: 37,
  img: PigBoost, // update image variable if needed
  category: "Animal Feeds",
  name: "PIG BOOSTER",
  desc: "(VITAMINS, MINERALS, AMINO ACIDS AND GROWTH PROMOTER)",

  para1:
    "PIG BOOSTER is a strong combination of vitamin, minerals and amino Acids that is essential for pig growth.",

  para2:
    "PIG BOOSTER ni mchanganyiko bora wa vitamin, madini na amino aside ambazo ni muhimu kwa ukuaji wa nguruwe.",

  sizes: [
    {
      id: 1,
      pack: "1KG",
      cartoon: "1KG X 12"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "USAGE",
      pointers: [
        "Should be added in feed, fattening diet and concentrated supplement.",
        "Proper mixing is required for desired results.",
        "De-worming must be done before usage of PIG BOOSTER."
      ]
    },
    {
      id: 2,
      heading: "DOSAGE",
      pointers: [
        "Use 1 Kg of PIG BOOSTER per ton of feed and mix properly.",
        "WITHDRAWAL PERIOD: NONE"
      ]
    },
    {
      id: 3,
      heading: "PRODUCT COMPOSITIONS",
      pointers: [
        "Vitamin A- 10,000,000IU",
        "Vitamin D- 1,000,000IU",
        "Vitamin E- 2,000 Mg",
        "Vitamin B1- 2,000Mg",
        "Vitamin B2- 5000Mg",
        "Vitamin B3- 1,500,00 Mg",
        "Pantothenic Acid- 30,000mg",
        "Vitamin B6- 3,000Mg",
        "Vitamin B12- 220Mg",
        "Betaine- 40,000mg",
        "Lysine- 500mg",
        "Methionine- 500mg",
        "Manganese- 50,000mg",
        "Zinc- 50,000mg",
        "Iron- 40,000mg",
        "Copper- 6,000mg",
        "Iodine- 2,000mg",
        "Cobolt- 400mg",
        "Olaquindox- 10mg"
      ]
    },
    {
      id: 4,
      heading: "MATUMIZI",
      pointers: [
        "PIG BOOSTER inapswa kuongezewa kwenye chakula, lishe ya kunenepesha na kwenye virutubisho. Mchanganyiko sahihi unahitajika ili kupata matokeo yaliyokusudiwa.",
        "Dawa za minyoo zinatakiwa kutumia kabla ya kutumia PIG BOOSTER.",
        "Ni busta ya kunenepesha nguruwe kwa haraka.",
        "Hudunisha afya na kuimarisha kinga ya mwili.",
        "Huongeza hamu ya kula na kusaidia nguruwe walio dumaa.",
        "Hutumika kipindi cha ugonjwa au matibabu."
      ]
    },
    {
      id: 5,
      heading: "KIPIMO",
      pointers: [
        "Tumia kilo 1 ya PIG BOOSTER kwa tani 1 ya chakula na uchanganye vizuri."
      ]
    }
  ]
},
{
  id: 38,
  img: PoultryBoost, // update image variable if needed
  category: "Animal Feeds",
  name: "POULTRY BOOSTER",
  desc: "Premium Chick Tonic (ORAL SOLUTION)",

  para1:
    "POULTRY BOOSTER is indicated for all animal species. It increases appetite, improves disease resistance and immunity building in poultry, enhances weight gain and overall vitality, and prevents and corrects avitaminosis and malnutrition. It reduces chick mortality and acts as a support supplement during lactation, pregnancy, moulting, intense production, stress, convalescence, anorexia and fatty liver.",

  para2:
    "POULTRY BOOSTER ina tumika kuzuia na kutibu tatizo la upungufu wa vitamini na hali ya utapiamlo (chakula duni), hupunguza vifo vya vifaranga, huongeza FCR na hutumika kama msaada wakati wa mimba, kunyonyesha, kutoa manyoya, uzalishaji mkubwa, mfadhaiko, wakati wa kupona kutokana na ugonjwa, kukosa hamu ya kula na tatizo la mafuta ya ini.",

  sizes: [
    {
      id: 1,
      pack: "1LT",
      cartoon: "1LT x 12"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "INDICATIONS AND SPECIES OF DESTINATION",
      pointers: [
        "Increase appetite",
        "Improving disease resistance and immunity building in poultry",
        "Improved weight gain and enhanced overall vitality in your birds",
        "Is indicated to prevent and correct avitaminosis and malnutrition states, to reduce chicks mortality and as a support supplement in states of lactation pregnancy, moulting, intense production, stress, convalescence, anorexia and fat liver."
      ]
    },
    {
      id: 2,
      heading: "DOSAGE",
      pointers: [
        "Administer 1ml of POULTRY BOOSTER per 2 Litres of drinking water for 10 days.",
        "Oral route in drinking water."
      ]
    },
    {
      id: 3,
      heading: "BENEFITS",
      pointers: [
        "POULTRY BOOSTER tonic is a complex of hydro and fat-soluble vitamins and amino acids that corrects deficient states and improves animals yield and feed conversion ratio.",
        "WITHDRAWAL PERIOD: Nil"
      ]
    },
    {
      id: 4,
      heading: "PRODUCT COMPOSITIONS",
      pointers: [
        "Vitamin A- 2500000 IU",
        "Vitamin D3- 50000 IU",
        "Vitamin E- 3.75GM",
        "Vitamin B2- 4GM",
        "Vitamin B1- 13.5GM",
        "Vitamin B6- 2GM",
        "Vitamin B12- 10MG",
        "Sodium pantothenate- 15MG",
        "Vitamin K3- 250MG",
        "Choline Chloride- 400MG",
        "D L Methionine- 5GM",
        "L Lysine- 2.5GM",
        "Histidine- 900MG",
        "Arginine- 490MG",
        "Aspartic Acid- 1.45GM",
        "Threonine- 500MG",
        "Serine- 680MG",
        "Glutamic acid- 1.16GM",
        "Proline- 510MG",
        "Glycine- 575MG",
        "Alanine- 975MG",
        "Cystine- 150MG",
        "Valine- 1.1MG",
        "Leucine- 1.5MG",
        "Isoleucine- 125MG",
        "Tyrosine- 340MG",
        "Phenylanine- 810MG",
        "Tryptophane- 75MG",
        "Biotin- 2MG",
        "Inositol- 2.5MG",
        "Excipients- q.s"
      ]
    },
    {
      id: 5,
      heading: "SABABU YA KUTUMIA POULTRY BOOSTER",
      pointers: [
        "Huzuia na kutibu upungufu wa vitamini na hali ya utapiamlo",
        "Hupunguza vifo vya vifaranga",
        "Huongeza FCR",
        "Hutumika wakati wa mimba, kunyonyesha, kutoa manyoya, na uzalishaji mkubwa",
        "Husaidia wakati wa mfadhaiko, kupona ugonjwa, kukosa hamu ya kula, na tatizo la mafuta ya ini"
      ]
    },
    {
      id: 6,
      heading: "KIPIMO",
      pointers: [
        "Weka ml 1 ya POULTRY BOOSTER kwenye lita 2 ya maji kwa siku 10",
        "Kwa njia ya kunywa kwenye maji"
      ]
    },
    {
      id: 7,
      heading: "FAIDA",
      pointers: [
        "Mchanganyiko wa vitamini mumunyifu ndani ya maji na mafuta na amino asidi",
        "Hurekebisha upungufu wa vitamini na kuboresha mazao ya mifugo",
        "Huongeza uwezo wa mnyama kubadilisha chakula kuwa mazao",
        "Husaidia katika ukuaji wa kuku wa aina zote (mayai, nyama, na chotara)",
        "Huongeza hamu ya kula na kuboresha afya",
        "Huongeza uzito na uzalishaji hata kwa kuku waliodumaa",
        "Huongeza uwezo wa kuzuia magonjwa"
      ]
    }
  ]
},
{
  id: 39,
  img: Respecure, // update image variable if needed
  category: "Animal Feeds",
  name: "RESPICURE",
  desc: "Poultry Respiratory Tonic",

  para1:
    "Vital role in reducing mucus accumulation and discharging out from respiratory cavities. Clears air passage in lungs to improve respiration. Improve resistance to various respiratory infections. Helps to promotes growth rate and feed conversion.",

  para2:
    "Ni muhimu katika kupunguza na kutoa makamasi nje kutoka katika mfumo wa hewa. Husafisha njia ya hewa kwenye mapafu ilikuboresha upumuaji. Huboresha uwezo wa kustahimili maambukizi mbalimbali ya mfumo wa hewa. Huponya na kuwapa nafuu kuku wanaopiga chafya. Husaidia kuboresha ukuaji na uwezo wa mnyama kubadilisha chakula kuwa mazao.",

  sizes: [
    {
      id: 1,
      pack: "1LT",
      cartoon: "1LT x 12"
    },
    {
      id: 2,
      pack: "500mls",
      cartoon: "500mls x 24"
    },
    {
      id: 3,
      pack: "100mls",
      cartoon: "100mls x 100"
    }
  ],

  
  points: [
    {
      id: 1,
      heading: "INDICATION",
      pointers: [
        "Vital role in reducing mucus accumulation and discharging out from respiratory cavities",
        "Clears air passage in lungs to improve respiration",
        "Improve resistance to various respiratory infections",
        "Helps to promotes growth rate and feed conversion"
      ]
    },
    {
      id: 2,
      heading: "DOSAGE AND ADMINISTRATION",
      pointers: [
        "1 ml per 4 Litres of drinking water or as advised by a veterinarian."
      ]
    },
    {
      id: 3,
      heading: "PRODUCT COMPOSITION",
      pointers: [
        "Eucalyptus oil- 40000mg",
        "Menthol- 40 000mg",
        "Thymol- 20 000mg",
        "Biotin- 900mg",
        "Folic acid- 200mg",
        "Methionine- 30000mg"
      ]
    },
    {
      id: 4,
      heading: "SABABU/FAIDA YA KUTUMIA",
      pointers: [
        "Ni muhimu katika kupunguza na kutoa makamasi nje kutoka katika mfumo wa hewa.",
        "Husafisha njia ya hewa kwenye mapafu ilikuboresha upumuaji.",
        "Huboresha uwezo wa kustahimili maambukizi mbalimbali ya mfumo wa hewa.",
        "Huponya na kuwapa nafuu kuku wanaopiga chafya.",
        "Husaidia kuboresha ukuaji na uwezo wa mnyama kubadilisha chakula kuwa mazao."
      ]
    },
    {
      id: 5,
      heading: "KIPIMO NA NJIA YA KUWAPATIA",
      pointers: [
        "1 ml kwa lita 4 za maji ya kunywa au kama inavyoshauriwa na Daktari wa Mifugo"
      ]
    }
  ]
}
];


// contat Us
export const contactBanner = {
  title: "Contact Us",
  para:
    "Connect With Wembley For Reliable Crop Protection & Farming Support. We're Here to Help Your Agriculture Thrive With Expert Solutions.",
  slug: "contact-us",
  img: contactb,
};

export const contactsec1 = {
  title: "Contact Details",
  para:
    "Please contact us, We are sure that you can receive our reply as soon as possible.",
  detail: [
    {
      id: 1,
      icon: <MdWifiCalling3 />,
      title: "Call Us",
      text: [
        { id: 1, text: "Head Office: - 0676200772" },
        { id: 2, text: "Masasi - 0659965129" },
        { id: 3, text: "Mbeya - 0677048455" },
        { id: 4, text: "Njombe - 0677025245" },
        { id: 5, text: "Kigoma - 0679513203" },
        { id: 6, text: "Head Sales - 0679513203, 0677066361" },
        { id: 7, text: "Moshi - 0677141102, 0677047881" }
      ],
      slug: "tel: 0676200772",
    },
    {
      id: 2,
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: [ { id: 1, text: "info@wembleyinternational.com" },],
      slug: "mailto:info@wembleyinternational.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address1",
      text: [ { id: 1, text: "302-A, Elegant House, 28A Kipawa Industrial Area, Nyerere Road, Dar Es Salaam, Tanzania, P.O. Box 75641" },],
      slug: "#",
    },
    {
      id: 3,
      icon: <MdLocationCity />,
      title: "Address2",
      text: [ { id: 1, text: "22, Plot No. 2360/75 E Vingunguti, Pugu Road, Dar Es Salaam, Tanzania, P.O. Box 75641" },],
      slug: "#",
    },
  ],
};
