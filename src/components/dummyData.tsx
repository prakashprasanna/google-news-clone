import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'

const dummyData = {
    topStories: [
      {
        title: "More than 40,000 protest New Zealand Maori rights bill",
        source: "Aljazeera",
        time: "2 hours ago",
        image: news1,
        related: [
          {
            title: "Tens of thousands march on NZ parliament in protest against Māori treaty bill",
            source: "The Guardian",
            time: "12 hours ago",
            author: "Eva Corlett"
          },
          {
            title: "42,000 march on New Zealand's parliament in support of Maori rights",
            source: "Sky News",
            time: "1 hour ago"
          },
          {
            title: "New Zealand's founding treaty is at a flashpoint. Why are thousands protesting for Māori rights?",
            source: "The Associated Press",
            time: "2 hours ago",
            author: "Charlotte Graham-McLay"
          }
        ]
      },
      {
          title: "Pilot winched from water after 'ditching' aircraft in sea off Nelson coast",
          source: "New Zealand Herald",
          time: "1 hour ago",
          image: news2,
          related: [
            {
              title: "Light plane crashes off Tasman Coast",
              source: "RNZ",
              time: "2 hours ago"
            },
            {
              title: "Pilot rescued after light plane crashes off Tasman coast",
              source: "1News",
              time: "1 hour ago"
            },
            {
              title: "Emergency services responding to unfolding aviation incident at Tasman Bay near Nelson",
              source: "Newstalk ZB",
              time: "2 hours ago"
            }
          ]
        }
    ],
    localNews: [
      {
        title: "Four arrested after graffiti spree: police",
        source: "Otago Daily Times",
        time: "Yesterday",
        author: "Laine Priestley"
      },
      {
        title: "‘I had fallen into bad habits’",
        source: "Otago Daily Times",
        time: "18 hours ago"
      },
      {
        title: "Options ‘fall far short’: clinician",
        source: "Otago Daily Times",
        time: "18 hours ago",
        author: "Hamish D Maclean"
      }
    ],
    picksForYou: [
      {
        title: "Why job hiring activity keeps falling",
        source: "New Zealand Herald",
        time: "18 hours ago"
      },
      {
        title: "Tenders sought for fundamental review of electricity market structure",
        source: "BusinessDesk",
        time: "18 hours ago",
        author: "Ian Llewellyn"
      }
    ]
  };

  export default dummyData;
  