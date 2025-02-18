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
        question: "Welche Leistungen bietet ihr genau an?",
        answer: "Wir sind auf Videomarketing, Social Media Content, Podcasts und Grafikdesign spezialisiert. Dazu gehören Imagefilme, Recruitingvideos, Social-Media-Pakete und grafische Inhalte wie Print- und Social-Media-Designs. Wir übernehmen nicht nur die Produktion, sondern helfen auch bei der strategischen Verbreitung – damit euer Content die richtige Zielgruppe erreicht.",
    },
    {
        id: 2,
        question: "Was unterscheidet euch von anderen Agenturen?",
        answer: "Wir kombinieren Kreativität mit Strategie. Es geht uns nicht nur darum, ansprechende Inhalte zu erstellen – unser Fokus liegt darauf, dass sie auch messbare Ergebnisse liefern. Ob Markenaufbau, Recruiting oder Verkaufsförderung: Unser Content sieht nicht nur gut aus, sondern wirkt. Außerdem denken wir outside the box – für uns gibt es keine Standardlösungen, sondern individuelle, kreative Ansätze für jede Herausforderung.",
    },
    {
        id: 3,
        question: "Für wen sind eure Dienstleistungen geeignet?",
        answer: "Unsere Leistungen sind für Unternehmen jeder Größe, die sich professionell präsentieren und ihre Marke stärken möchten. Ob Start-up, Mittelstand oder Großunternehmen – wir entwickeln maßgeschneiderte Inhalte, die auf eure Ziele abgestimmt sind.",
    },
    {
        id: 4,
        question: "Wie läuft eine Zusammenarbeit mit euch ab?",
        answer: "Ganz einfach: Ihr bringt eure Vision und Ziele mit, wir kümmern uns um die kreative Umsetzung. Wir starten mit einem Beratungsgespräch, um eure Bedürfnisse zu verstehen. Dann entwickeln wir ein Konzept, das sowohl kreativ als auch strategisch durchdacht ist. Anschließend produzieren wir euren Content und helfen euch, ihn erfolgreich zu platzieren.",
    },
    {
        id: 5,
        question: "Wie schnell bekomme ich den Content?",
        answer: "Die Produktionszeit hängt von mehreren Faktoren ab, aber wir legen Wert auf einen effizienten Ablauf. Bei Interesse vereinbaren wir schnellstmöglich ein Beratungsgespräch, in dem wir die wichtigsten Fragen klären – zum Beispiel die Zielgruppe, den Verwendungszweck und den gewünschten Stil des Videos. Mit diesen Informationen können wir die Produktion gezielt vorbereiten. Sobald unser Angebot angenommen wurde, muss nur noch ein gemeinsamer Drehtermin gefunden werden. Nach dem Produktionstag liefern wir den fertigen Content innerhalb von 7 Tagen.",
    },
    {
        id: 6,
        question: "Was kostet das Ganze?",
        answer: "Der Preis hängt davon ab, was ihr genau braucht – jedes Projekt ist individuell. Wir wissen aber, dass es wichtig ist, eine erste Orientierung zu haben. Dafür haben wir unser Preis-Quiz entwickelt: Beantwortet ein paar Fragen zu eurem Projekt, und ihr bekommt sofort eine erste Einschätzung, mit der ihr planen könnt.",
    }
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

const Episode1 = require("./images/Cover_brandit/Superbowl.png")
const Episode2 = require("./images/Cover_brandit/Mustard.png")
const Episode3 = require("./images/Cover_brandit/Nespresso.png")

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
        title: "Nespresso",
        path: "https://open.spotify.com/episode/1FX4i826xVg0dUjCuzvDIJ?si=e14c05e995494807",
    },
]


/*======================PROJEKTE=============*/

const Projekt1 = require("./images/Logo_white.png")
const Projekt2 = require("./images/Logo_white.png")
const Projekt3 = require("./images/Logo_white.png")
const Projekt4 = require("./images/Logo_white.png")
const Projekt5 = require("./images/Logo_white.png")
const Projekt6 = require("./images/Logo_white.png")
const Projekt7 = require("./images/Logo_white.png")
const Projekt8 = require("./images/Logo_white.png")
const Projekt9 = require("./images/Logo_white.png")
const Projekt10 = require("./images/Logo_white.png")

export const projects = [
    {
        id: 1,
        title: "Imagefilm",
        headline: "AMEOS",
        description:"BLABLABLABLABLAB",
        image: Projekt1,
    },
    {
        id: 2,
        title: "",
        headline: "",
        description:"",
        image: Projekt2,
    },
    {
        id: 3,
        title: "",
        headline: "",
        description:"",
        image: Projekt3,
    },
    {
        id: 4,
        title: "",
        headline: "",
        description:"",
        image: Projekt4,
    },
    {
        id: 5,
        title: "",
        headline: "",
        description:"",
        image: Projekt5,
    },
    {
        id: 6,
        title: "",
        headline: "",
        description:"",
        image: Projekt6,
    },
    {
        id: 7,
        title: "",
        headline: "",
        description:"",
        image: Projekt7,
    },
    {
        id: 8,
        title: "",
        headline: "",
        description:"",
        image: Projekt8,
    },
    {
        id: 9,
        title: "",
        headline: "",
        description:"",
        image: Projekt9,
    },
    {

        id: 10,
        title: "",
        headline: "",
        description:"",
        image: Projekt10,
    },
]