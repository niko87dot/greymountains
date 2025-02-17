import { IoMdCamera } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";


export const links = [
    {
        name: "Home",
        path: "./home"
    },
    {
        name: "About",
        path: "./about"
    },
    {
        name: "Contact",
        path: "./contact"
    },
    {
        name: "Podcast",
        path: "./podcast"
    },
    {
        name: "References",
        path: "./references"
    },
]

export const offers = [
    {
        id: 1,
        icon: <IoMdCamera />,
        title: "Service 1",
        info: "Bacon ipsum dolor amet biltong pancetta porchetta capicola. Ball tip chislic andouille turducken leberkas.",
        path: "/"
    },
    {
        id: 2,
        icon: <FaHandshake />,
        title: "Service 2",
        info: "Bacon ipsum dolor amet biltong pancetta porchetta capicola. Ball tip chislic andouille turducken leberkas.",
        path: "/"
    },
    {
        id: 3,
        icon: <IoMdCamera />,
        title: "Service 3",
        info: "Bacon ipsum dolor amet biltong pancetta porchetta capicola. Ball tip chislic andouille turducken leberkas.",
        path: "/"
    },
    {
        id: 4,
        icon: <IoMdCamera />,
        title: "Service 4",
        info: "Bacon ipsum dolor amet biltong pancetta porchetta capicola. Ball tip chislic andouille turducken leberkas.",
        path: "/"
    }
]

export const values = [
    {
        id: 1,
        icon: <IoMdCamera />,
        title: "Wert1",
        desc: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 2,
        icon: <FaHandshake />,
        title: "Wert 2",
        desc: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 3,
        icon: <FaHandshake />,
        title: "Wert 3",
        desc: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 4,
        icon: <FaHandshake />,
        title: "Wert 4",
        desc: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
]

export const faqs = [
    {
        id: 1,
        question: "Frage",
        answer: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 2,
        question: "Frage",
        answer: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 3,
        question: "Frage",
        answer: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
    {
        id: 4,
        question: "Frage",
        answer: "Bacon ipsum dolor amet biltong pancetta porchetta capicola.",
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Brunopolous Jodokulos",
        quote: "Eigentlich bin ich nur hier, weil ich was zu essen möchte. Haben sie die Nummer von Amnesty International?",
        job: "Grey Mountains Media",
        avatar: require("./images/avatar1.jpg"),
    },
    {
        id: 2,
        name: "Jack Bauer",
        quote: "Grey Mountains hat mir geholfen die Welt innerhalb von 24 Stunden zu retten.",
        job: "Grey Mountains Media",
        avatar: require("./images/avatar2.jpg"),
    },
    {
        id: 3,
        name: "Michael Jordan",
        quote: "Grey Mountains hat mir beigebracht Dinge persönlich zu nehmen und mich zu dem Champion gemacht der ich heute bin..",
        job: "Grey Mountains Media",
        avatar: require("./images/avatar3.jpg"),
    },
] 

const Episode1 = require("./images/gallery1.png")
const Episode2 = require("./images/gallery1.png")
const Episode3 = require("./images/gallery1.png")

export const episodes = [
    {
        id: 1,
        image: Episode1,
        title: "Super Bowl LIX",
        path: "https://open.spotify.com/episode/1FX4i826xVg0dUjCuzvDIJ?si=e14c05e995494807",
    },
    {
        id: 2,
        image: Episode2,
        title: "Mustaaaaaaarrd",
        path: "https://open.spotify.com/episode/1FX4i826xVg0dUjCuzvDIJ?si=e14c05e995494807",
    },
    {
        id: 3,
        image: Episode3,
        title: "Mustaaaaaaarrd",
        path: "https://open.spotify.com/episode/1FX4i826xVg0dUjCuzvDIJ?si=e14c05e995494807",
    },
]