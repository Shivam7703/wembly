import { about, about2, banner, banner2, Best200, Best480, Best50, Best720, Best75, bestacron720, Bestsup, car, cl1, dual, farm16, farm20, fendel, ferti, logo2, man5sc, mansup, oxp, rondo, sec1, sulph, supa, supa480, supa720, supaking, supamec, supath, tunza } from "@/assets";
import {
  FaMapLocationDot,
} from "react-icons/fa6";
import { GiChestnutLeaf, GiDeadEye } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaBullseyeSolid, LiaChargingStationSolid } from "react-icons/lia";
import { MdAttachEmail, MdLocationCity, MdWifiCalling3, MdWorkHistory } from "react-icons/md";
import { PiPlugChargingFill } from "react-icons/pi";
import { SiTerraform} from "react-icons/si";
import { TbRecharging, TbSpiral } from "react-icons/tb";
import { VscActivateBreakpoints } from "react-icons/vsc";

// homepage
export const navItemsArray = [
  { id: 1, label: "About Us", href: "/about" },
  {
    id: 2,
    label: "Products",
    href: "/products",
    subNav:[
      {id:1,
        label:"Implementss",
        href:"/products/product-detail"
      },
      {id:1,
        label:"Insecticidess",
        href:"/products/product-detail"
      },
      {id:1,
        label:"Herbicidess",
        href:"/products/product-detail"
      },
      {id:1,
        label:"Fungicidess",
        href:"/products/product-detail"
      },
      {id:1,
        label:"Fertilizer",
        href:"/products/product-detail"
      }
    ]
  },

  { id: 3, label: "Agro Machinery", href: "/agro-machinery" },
  { id: 7, label: "Sustainability", href: "/sustainability" },
  { id: 4, label: "Privacy Policy", href: "/privacy" },
  { id: 5, label: "Blogs", href: "/blogs" },
  { id: 6, label: "Contact Us", href: "/contact-us" },
];

export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Welcome to AI Eco Fuel",
    title1: "Transforming India's Future with",
    title2: "AI Ecofuels",

    btntext: "Explore More",
    href: "/",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner2,
    welcome: "Welcome to AI Eco Fuel2",
    title1: "Transforming Your Future with",
    title2: "AI Ecofuels",

    btntext: "Contact Us",
    href: "/",
  },
];

export const aboutdata = {
  img: about,
  img2: about2,

  title1: "About Us",
  title2: "Transforming India's Future with AI Ecofuels",
  para:
    "At AI Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of farmers and people across India. By promoting biofuel production, we are creating opportunities and employment for individuals in even the most rural areas.",
  title3: "Our Vision and Commitment",
  vision: [
    {
      id: 1,
      heading: "Empowering Rural Communities",
      text: "Generating jobs and boosting local economies.",
    },
    {
      id: 2,
      heading: "Sustainable Energy Solutions",
      text: "Leading the way in eco-friendly biofuel production.",
    },
    {
      id: 3,
      heading: "Trusted Partnerships",
      text:
        "Valuing our distributors, clients, customers, associates, employees, and well-wishers.",
    },
  ],
  title4: "Join us at AI Ecofuels and be part of the change!",
};

export const countDown=[
  {id:1,
    icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    textColor:"!text-[#0E9384]",
    Value:"50"
  },{id:2,
    icon:<GiChestnutLeaf />,
    title:"booking completed",
    textColor:"!text-[#0E9384]",
    Value:"750"
  },{id:3,    icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    textColor:"!text-blue-700",
    Value:"6000"
  },{id:4,     icon:<GiChestnutLeaf />,
    title:"destinations worldwide",
    textColor:"!text-red-800",
    Value:"50"
  }
]

export const whychoose ={
  img: banner,
  img2: banner2,
  title1:"Why Choose Us",
  title2:"Explore the Horizon: Discover",
  title3:"The World",
      para: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  vision:[{
    id:1,
    icon:<GiDeadEye />,
    heading:"Our Vision",
    text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
  },
  {
    id:2,
    icon:<LiaBullseyeSolid />,
    heading:"Our Mission",
    text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
  }],
  title4:"Join us at Bharat Ecofuels and be part of the change!"
}
export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  para:
    "We are best service Provider for We are best service Provider for We are best service Provider for service ",
  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
  ],
};

export const faqData = {
  title:"Frequently Asked ",
  title2:"Question",
  para: "dreamsTour, a tour operator specializing in dream destinations, offers a variety of benefits for travelers",
  faqs:[
    {
      id:1,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:2,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:3,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:4,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:5,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }
  ]
}

export const footer = {
  logo: logo2,
  text:
    "lorem At AI Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of",

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
    links: [
      { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },
    ],
  },

  list2: {
    title: "Main Menus",
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
    description: "Subscribe to our newsletter to get latest news and updates.",
  },
};

export const benefit = {
  title1: "Certified By Government Of India",
  title2: "Benefits of Biofuels",
  para:
    "Biofuels reduce carbon emissions, promote energy security, create jobs, support rural economies, and decrease reliance on fossil fuels. Embrace renewable energy for a sustainable and eco-friendly future.",
  img: car,
  points: [
    {
      id: 1,
      icon: <TbSpiral />,
      heading: "INDIA based productions",
      text:
        "There is growing demand for Biofuel as it is safe alternative to traditional fuel.",
    },

    {
      id: 2,
      icon: <TbSpiral />,
      heading: "Employment opportunities",
      text: "Join, Work and Succeed.",
    },

    {
      id: 3,
      icon: <TbSpiral />,
      heading: "85% pollution reduction",
      text: "Go green, Breathe clean.",
    },

    {
      id: 4,
      icon: <TbSpiral />,
      heading: "Additional mileage best in quality fuel and GST benefit",
      text: "Fuel for your engine.",
    },

   
  ],
};


export const blogData = {
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  para:
    "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
  blogs: [
    {
      id: 1,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/23",
      img: banner,
    },
    {
      id: 2,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "15/12/23",
      img: banner,
    },
    {
      id: 3,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/24",
      img: banner,
    },
    {
      id: 4,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "07/03/24",
      img: banner,
    },
    {
      id: 5,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "15/09/24",
      img: banner,
    },
    {
      id: 6,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "01/07/24",
      img: banner,
    },
  ],
};
export const whychooseData = {
  title2: "Why Choose AI Eco Fuels",

  data: [
    {
      id: 1,
      icon: <SiTerraform />,
      title: "EV Site Identification",
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
    {
      id: 2,
      icon: <TbRecharging />,
      title: "EV Location Survey",
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
    {
      id: 3,
      title: "Installation and Activation",
      icon: <VscActivateBreakpoints />,
      text:
        "This is to mean that our technicians have the right to handle everything from installation to activation to enable charging stations to run as from the inception.",
    },
    {
      id: 4,
      title: "Charging Station Maintenance",
      icon: <GrVmMaintenance />,
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
  ],
};



// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "about-us",
  img: banner2,
};

export const aboutsec1 = {
  img: sec1,
  img2: car,
  title1: "About Us",
  title2: "Transforming India's Future ",
  title3: "with AI Ecofuels",
  para1:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan,Risus commodo viverra maecenas accumsan.",
    para2:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan,Risus commodo viverra maecenas accumsan.",
  vision: [
    {
      id: 1,
      icon: <GiDeadEye />,
      heading: "Our Vision",
      text:
        "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
    {
      id: 2,
      icon: <LiaBullseyeSolid />,
      heading: "Our Mission",
      text:
        "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
  ],
  title4: "Join us at AI Ecofuels and be part of the change!",
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

// products page and product
export const productBanner = {
  title: "Our Products",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "about-us",
  img: banner2,
};

export const productcategory = [
  {
  id:1,
  label:"Implements"
},
{
  id:2,
  label:"Insecticides"
},
{
  id:3,
  label:"Herbicides"
},
{
  id:4,
  label:"Fungicides"
},
{
  id:5,
  label:"Fertilizer"
}
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
  name:"FENDEL DUST 1.13%", desc:"(FENITROTHION1% + Deltamethrin 0.13%)",
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
  para2:"Is a broad – spectrum systemic insecticides which is effective for controlling Diamond black moth, aphid, leaf miner, red spider mites, stock bore, whitefly, thrips, mites,beetle,fruits flies, plant bugs, fire ants on kale, toamatoes ,capsicum ,okra, and greenpaper.",
  sizes:[
    {id:1,
      pack:"1 Litre",
      cartoon:"1L x 10"
    },
   
    {id:2,
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
  img:supa720,
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
  name:"BESTONIL 50% SC", desc:"(CHLOROTHALONIL 500G/L)",
  para1:"Ni kiuatilifu kinachotumika kuzuia na kutibu magonjwa ya kutu ya majani ,ukungu ,kuvu ,madoa,kukauka na mabaka ya majani kwenye mazao mbalimbali pia hutibu CDB kenye kahawa ,hutumika kwenye mazao kama kahawa ,viazi , nyanya na maharage.",
  para2:"Is a broad-spectrum contact fungicides for control of late blight in tomatoes, potatoes, coffee and French beans. Prevents and treats diseases of leaf rust, mold, fungus, spots, drying and leaf spots on various crops, also treats CDB like coffee.",
  sizes:[
    {id:1,
      pack:"1 Litre ",
      cartoon:"1L x 10"
    },
    {id:2,
      pack:"500 ML",
      cartoon:"500 ML X20"
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
];

export const outletBanner = {
  title: "Our Outlets",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "about-us",
  img: banner,
};

export const OutletDetails = [
  {
    id: 1,
    name: "Andhra Pradesh",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

    ],
  },

 

];

// blog Page
export const blogBanner = {
  title: "Blogs & News",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "blogs",
  img: banner,
};


// contat Us

export const contactBanner = {
  title: "Contact Us",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "contact-us",
  img: banner,
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
      text: "(+91) 1800-214-122",
      slug: "tel:+911800-214-122",
    },
    {
      id: 2,
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: "wembly@example.com",
      slug: "mailto:wembly@example.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address1",
      text: "lorem Consectetur adipiscing elit.",
      slug: "#",
    },
    {
      id: 3,
      icon: <MdLocationCity />,
      title: "Address2",
      text: "lorem Consectetur adipiscing elit.",
      slug: "#",
    },
  ],
};
