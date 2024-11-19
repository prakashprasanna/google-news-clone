import React from "react";
import dummyData from '../components/dummyData'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 mx-4 lg:mx-12">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Your briefing</h1>
        <p className="text-sm text-gray-500">Wednesday, 20 November</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Stories */}
        <section className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Top stories &rarr;</h2>
          {dummyData.topStories.map((story, index) => (
            <div key={index} className="bg-white shadow rounded-md overflow-hidden mb-6">
              <img src={story.image} alt="Story" className="w-50 h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{story.title}</h3>
                <p className="text-sm text-gray-500">{story.source} • {story.time}</p>
                <div className="mt-4 space-y-2">
                  {story.related.map((related, i) => (
                    <div key={i} className="text-sm text-gray-700">
                      <span className="font-semibold">{related.title}</span>
                      <p className="text-gray-500">{related.source} • {related.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="space-y-6">
          {/* Local News */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-blue-600">Local news &rarr;</h2>
            <div className="bg-white shadow rounded-md p-4">
              {dummyData.localNews.map((news, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-sm">{news.title}</h3>
                  <p className="text-sm text-gray-500">{news.source} • {news.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Picks for You */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-purple-600">Picks for you &rarr;</h2>
            <div className="bg-white shadow rounded-md p-4">
              {dummyData.picksForYou.map((pick, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-sm">{pick.title}</h3>
                  <p className="text-sm text-gray-500">{pick.source} • {pick.time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
