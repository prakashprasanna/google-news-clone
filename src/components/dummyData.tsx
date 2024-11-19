import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'

const dummyData = {
    topStories: [
      {
        title: "Why are New Zealand's Maori protesting over colonial-era treaty bill?",
        source: "Al Jazeera",
        time: "3 hours ago",
        image: news1,
        related: [
          {
            title: "Tens of thousands march on NZ parliament in protest against Māori treaty bill",
            source: "The Guardian",
            time: "23 hours ago",
            author: "Eva Corlett"
          },
          {
            title: "Live: 42,000 join as Treaty Principles Bill hikoi reaches Parliament",
            source: "RNZ",
            time: "Yesterday"
          },
          {
            title: "New Zealand's Maori demand justice over colonial-era treaty issues",
            source: "Stuff",
            time: "5 days ago"
          }
        ]
      },
      {
        title: "'You will die in lies': Daughter clashes with father at French rape trial",
        source: "New Zealand Herald",
        time: "1 hour ago",
        image: news2,
        related: [
          {
            title: "'You were the devil': Kids speak out against dad in France's mass rape trial",
            source: "Stuff",
            time: "2 days ago",
            author: "Eva Gallot"
          },
          {
            title: "Gisèle Pelicot condemns rape accused and says French society must change",
            source: "BBC.com",
            time: "5 hours ago",
            author: "Laura Gozzi"
          },
          {
            title: "Pelicot trial: young vineyard worker proposed drugging and raping his own mother",
            source: "The Guardian",
            time: "4 days ago",
            author: "Angelique Chrisafis"
          }
        ]
      },
      {
        title: "Thousands gather for historic Māori hikoi",
        source: "RNZ",
        time: "6 hours ago",
        image: news3,
        related: [
          {
            title: "Live updates from Māori hikoi reaching Parliament",
            source: "1News",
            time: "7 hours ago"
          },
          {
            title: "NZ faces critical moments in Treaty discussions",
            source: "Stuff",
            time: "1 day ago"
          },
          {
            title: "Māori protests demand systemic change in New Zealand",
            source: "The Guardian",
            time: "2 days ago"
          }
        ]
      },
      {
        title: "Floods cause havoc across Wellington region",
        source: "NZ Herald",
        time: "2 hours ago",
        image: news4,
        related: [
          {
            title: "Emergency services respond to flash flooding",
            source: "Stuff",
            time: "3 hours ago"
          },
          {
            title: "Heavy rains disrupt public transport in Wellington",
            source: "RNZ",
            time: "4 hours ago"
          },
          {
            title: "Flood victims recount their narrow escape",
            source: "1News",
            time: "5 hours ago"
          }
        ]
      }
    ],
    localNews: [
      {
        title: "Four arrested after graffiti spree: police",
        source: "Otago Daily Times",
        time: "2 days ago",
        author: "Laine Priestley"
      },
      {
        title: "Council chief's language slammed",
        source: "Otago Daily Times",
        time: "5 hours ago"
      },
      {
        title: "Demolition remains a possibility",
        source: "Otago Daily Times",
        time: "5 hours ago",
        author: "Tim Scott"
      },
      {
        title: "Local festival celebrates diversity",
        source: "Stuff",
        time: "1 day ago",
        author: "Claire Trevett"
      }
    ],
    picksForYou: [
      {
        title: "What happened Tuesday",
        source: "Interest.co.nz",
        time: "18 hours ago",
        author: "David Chaston"
      },
      {
        title: "Sri Lanka win series after third ODI washed out",
        source: "NZ Herald",
        time: "4 hours ago"
      },
      {
        title: "Tenders sought for fundamental review of electricity market structure",
        source: "BusinessDesk",
        time: "18 hours ago",
        author: "Ian Llewellyn"
      },
      {
        title: "Tech companies gear up for AI regulations in New Zealand",
        source: "Tech News NZ",
        time: "2 hours ago",
        author: "Rachel Davies"
      }
    ]
  };
  

  export default dummyData;
  