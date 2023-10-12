"use client"
import Image from "next/image";
import ReactPlayer from "react-player";
import { createState, useState } from 'state-pool';
import {
  Throwable,
  Level,
  Site,
  Team,
} from './types'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

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
    id: 1,
    src: "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
    location: "Jungle",
    level: Level.MIRAGE,
    site: Site.MID,
    team: Team.T,
    variation: 0,
    type: Throwable.SMOKE,
    instructions: "Keep holding D, then jump throw"
  },
  {
    id: 2,
    src: "https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4",
    location: "Jungle",
    level: Level.MIRAGE,
    site: Site.MID,
    team: Team.T,
    variation: 0,
    type: Throwable.SMOKE,
    instructions: "lineup with the wall"
  },
]

function getVideoById(id) {
  return videos.filter((video) => video.id === id)[0]
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

const activeVideo = createState(null)

export default function Home() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeVideo, setActiveVideo] = useState(null)

  let videoCards = videos.map((video) => (
    <VideoCard {...video} />
  ))


  /**
   * @description A card showing a GIF of a lineup.
   * The GIF is the video. Clicking on a card will open a modal with the GIF playing.
   */
  function VideoCard(video) {
    function title(video) {
      const variation = video.variation === 0 ? "" : `(${video.variation})`
      return `${video.location} ${video.level} ${video.team} ${variation}`
    }

    function onClickCallback(e) {
      // e.preventDefault()
      // copy e.target into ModalContent
      const id = parseInt(e.target.parentNode.parentNode.id)
      setActiveVideo(getVideoById(id))
      console.log(activeVideo)
      // setActiveVideo('huh')
      onOpen()
    }

    let card = (
      <div className="mt-8" onClick={onClickCallback} id={video.id}>
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
    )
    return card
  }


  return (
    <div className="px-8" style={{
      backgroundColor: "#272727"
    }}>
      <Hero />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {/* Set dynamically */}
                <VideoCard video={activeVideo} />
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

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