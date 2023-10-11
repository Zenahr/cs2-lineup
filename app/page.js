"use client"
import Image from "next/image";
import ReactPlayer from "react-player";
import {
  Throwable,
  Level,
  Site,
  Team,
} from './types'

function MainStuff() {
  const people = [
    {
      name: "Calvin Hawkins",
      email: "calvin.hawkins@example.com",
      image:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="flex py-4">
          <img className="w-10 h-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Card({ styling, children }) {
  return (
    <div
      className={`p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 ${styling}`} style={{
        backgroundColor: "#2e2e2e",
        borderColor: "#feac00"
      }}
    >
      {children}
    </div>
  );
}

const videos = [
  {
    src: "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
    location: "Jungle",
    level: Level.MIRAGE,
    site: Site.MID,
    team: Team.T,
    variation: 0,
    type: Throwable.SMOKE
  },
  {
    src: "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
    location: "Jungle",
    level: Level.MIRAGE,
    site: Site.MID,
    team: Team.T,
    variation: 0,
    type: Throwable.SMOKE
  },
]

/**
 * @description A card showing a GIF of a lineup.
 * The GIF is the video. Clicking on a card will open a modal with the GIF playing.
 */
function VideoCard(video) {
  function title(video) {
    const variation = video.variation === 0 ? "" : `(${video.variation})`
    return `${video.location} ${video.level} ${video.team} ${variation}`
  }
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ReactPlayer

            url='https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4'
            controls={false}
            playing={true}
            style={{
              borderRadius: "0.5rem",
              padding: "1.8rem",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              backgroundColor: "#2e2e2e",
            }}
          />
          <p className="mx-auto text-center text-gray-500 uppercase ">
            {title(video)}
          </p>
        </div>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="">
      <div className="grid px-4 py-2 mx-auto max-w-screen lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-1 text-4xl font-extrabold leading-none tracking-tight uppercase md:text-5xl xl:text-6xl dark:text-white">
            Counter-Strike 2
          </h1>
          <p className="max-w-2xl mb-1 ml-1 font-light text-gray-500 uppercase lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lineup Reference
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="px-8" style={{
      backgroundColor: "#272727"
    }}>
      <Hero />
      <Card>
        {/* put stuff in here for filters
          look up "nextJS forms"
        */}
      </Card >

      {/* Lineups container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard {...video} />
        ))}
      </div>


      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        {/* <MainStuff /> */}
      </main>
    </div >
  );
}
