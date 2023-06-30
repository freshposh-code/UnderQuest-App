import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ApiIcon from '@mui/icons-material/Api';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Facebook, Language, LinkedIn } from '@mui/icons-material';

export const navlink = [
  {
    name: "About us",
    link: "#Aboutus",
  },
  {
    name: "Our Project",
    link: "#Ourproject",
  },
  {
    name: "Resources",
    link: "#resources",
  },
  {
    name: "Community",
    link: "#community",
  },
];

export const usage = [
  {
    icon: (
      <ion-icon
        name="home"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Commercial",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="people"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Social",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="logo-game-controller-b"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Games",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="bookmarks"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Education",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="musical-notes"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Leisure",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="football"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Sport",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="person"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Business",
      },
    ],
  },
  {
    icon: (
      <ion-icon
        name="color-palette"
        style={{
          backgroundColor: "red",
          padding: "17px",
          fontSize: "2rem",
          borderRadius: "5px",
        }}
      ></ion-icon>
    ),
    names: [
      {
        name: "Art",
      },
    ],
  },
];

export const accord = [
    {
      Title:"Immersive learning system",
      Desc:`experiential training methodology that uses Virtual Reality (VR)
      to simulate real-world scenarios and train employees in a safe and engaging immersive training environment.`,
      icon:  <SurroundSoundIcon style={{padding:"3px", backgroundColor:'red' , color:"black", borderRadius:"6px" ,  fontSize:'1.5rem'}}/>
    },
    {
      Title:"Responsible Research",
      Desc:`All participants, regardless of how they’re engaged, will only be included in a study if they grant their full, voluntary, and informed consent.
       This principle will apply completely to real-time interviews and focus groups in digital research.`,
       icon: <PersonSearchIcon style={{padding:"3px", backgroundColor:'red' , color:"black", borderRadius:"6px" ,  fontSize:'1.5rem'}}/>
    },
    {
      Title:"Responsible Innovation",
      Desc:`In recent months, the metaverse has become one of the most controversial digital innovations, arousing hope, fears, and lots of questions... 
      But what does this immersive digital space really represent? What are the key promises?`,
      icon: <ApiIcon  style={{padding:"3px", backgroundColor:'red' , color:"black", borderRadius:"6px" ,  fontSize:'1.5rem'}}/>
    }
]

export const context = [
  {
    icon: <SportsVolleyballIcon className='bg-red-500 group-hover:bg-black text-black group-hover:text-[#fa0000]' style={{ borderRadius:"5px", fontSize:"35px", padding:"6px"}}/>,
    Desc:"Basis Website"
  },
  {
    icon: <SportsVolleyballIcon className='bg-red-500 group-hover:bg-black text-black group-hover:text-[#fa0000]' style={{ borderRadius:"5px", fontSize:"35px", padding:"6px"}}/>,
    Desc:"Visual Reality"
  },
  {
    icon: <SportsVolleyballIcon className='bg-red-500 group-hover:bg-black text-black group-hover:text-[#fa0000]' style={{ borderRadius:"5px", fontSize:"35px", padding:"6px"}}/>,
    Desc:"smart Devices"
  }
]

export const resource = [
  {
    Title: "MetaSupport",
    Desc: `for self hosted user, we provide you priority & bug fix guarantee, so can stop worrying`,
    Guide:"Get a Quote",
    icon: <HeadsetMicIcon style={{ fontSize:"5rem"}}/>,
  },
  {
    Title: "100% Open Source",
    Desc: `Meta is infinitely extensible. Customize it, build upon it, add your apps built with UNDA Framework`,
    Guide:"View on Github",
    icon: <GitHubIcon  style={{ fontSize:"5rem"}}/>,
  }
]

export const footer = [
  {
    head: "About",
  link:[
      {
        links: "About us",
      },
      {
        links: "Blog",
      },
      {
        links: "Careers",
      },
      {
        links: "Jobs",
      },
      {
        links: "In Press",
      },
      {
        links: "Gallery",
      }
    ]
  },
  {
    head: "Support",
  link:[
      {
        links: "Contact Us",
      },
      {
        links: "Online Chat",
      },
      {
        links: "Whatsapp",
      },
      {
        links: "Telegram",
      },
      {
        links: "Ticketing",
      },
      {
        links: "Call Center",
      }
    ]
  },
  {
    head: "FAQ",
  link:[
      {
        links: "Account",
      },
      {
        links: "Manage Deliveries",
      },
      {
        links: "Orders",
      },
      {
        links: "Payments",
      },
      {
        links: "Returns",
      },
      {
        links: "Privacy Policy",
      }
    ]
  },
]

export const footerIcon = [
  {
    icon: <Facebook className='bg-slate-600 rounded-[50%] sm:h-4 h-1 sm:w-4 w-1 sm:p-1 p-2' style={{fontSize: "32px"}}/>,
  },
  {
    icon: <Language className='bg-slate-600 rounded-[50%] sm:h-4 h-1 sm:w-4 w-1 sm:p-1 p-2' style={{fontSize: "32px"}}/>,
  },
  {
    icon: <LinkedIn className='bg-slate-600 rounded-[50%] sm:h-4 h-1 sm:w-4 w-1 sm:p-1 p-2' style={{fontSize: "32px"}}/>,
  },
]