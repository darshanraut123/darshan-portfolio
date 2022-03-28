import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.png'
import hackerrank from '../assets/icons/hackerrank.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import resume from '../assets/cv.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("darshanraut3828@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'Spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src="https://avatars.githubusercontent.com/u/56134448?v=4" alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Darshan <span>Raut</span> </div>
            <div className="sidebar__item sidebar__title">Software Engineer</div>
            <a href={resume} target="_blank" download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.instagram.com/darshan__raut/" target="_blank"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
                <a href="https://www.linkedin.com/in/darshan-raut-223271119/" target="_blank"><img  alt='linkedin' className="sidebar__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAF9klEQVR4nO2aa2xTZRjHf8971g6BKYhikMQPXjHLWmY7TAaoeBfQePuKCSbGKBDaoQJGCYroINizQNRojH7QGC+JqEMT7zEgRtfK2kkigonGGBONyBgwt67n8UNbHGOyU+nZ6cZ+n972vf3f5zznvTzvEfoRSj8wVbK5ZQoLgYuACQCZqC0AoWRcB/s9AuhWke8EXpvQo89/1Wh3FzNMMRFqi91JNrdP4RFgJoXBjxJOE9UGVO3DQXbWJpefV8zIP8m22J2IvFn4/a462FJtJTPhTYf9UlxO6r9ddnafY80W5ClgBrDrYNcZjT/NW/u3hNIPTCWb2wfUKLKqI5rY4LNez5i5KzbJyclO4FJB16SjLeuMZHPLgBrg3dE8eID2+pYDCPcCKLLkwr3Lqg1wM4A62L6qGyYyEXs7ShI457QDgWuMwvkAzoSelM/ahg+j2wDEOI2GvPuzu/bZQ76KGkZM3gMAudycuOjoxFHdB6DKuVWlVKxLxm4VkRhKFHCApIgk0pHENi+EeoWT44DJj3yyaw8ItcU3CrIV5Urym6QaYJ6qtoba4uu9keoNh7ondwKIWwOEU/HbEB4EelV1pWUC0y0TmK7IKqAX4eFwqmmhl6LLyU/z1v5dSI5z9QqoIzFEUWRNR4O9sV/WhrpkE4I2q2ocGFGvAvQ7C5wQ0ShAlal6ZWBWv/8ayidr+CjbKqAwUk6Gx+DWACmAPqdv0cAMx8neBSBKWxl1DRvu5gA0IchcQR+vSzYddfs+p2+Roo/ly0jCS6Fe4coDOqIt7yg0A0FBm3NO9teck/1V0GYgqMi6jobEB95K9QbXc0BH1F6NcAvwOXAI6EL5VFUWdEQTazxT6DEl7QQzEbsVaPVIiy+ckmeB/rjygHAq/qUqjScupTsy0Za5J1NfkQ9FqUeoBaaQ3247wH5gP0K7wudVYj7bddnTP7vRPhTuVoEhxQPInJOtLzAnH6U8junAdJQ6gUU5dQgl418ibCi8lv+b0uaAQjh8IG7D4yeo/z5wAch2Eb7IkctYlvlz/BH2A/QGdVKP6NlGzRyBqxTmA7NR3gul4p84Obn7u1mJX0oZS5GSDOAVmai9YIgi3cBvQAZ4tnZn/EwrIPchuhzlWmM0E07F701H7DdL7dvVJJiJ2vJfT88Pdjfa+zMNifWW6atFeRuYpMrrdamme0pta0SvArsu2/JHpsG+Q5AVgIjqc+FU/LZS2nBlgFAyrpV8DZaOJhICqwFLlRdmfL1kitu6FTEHFKnLrJpsensXK1yvaEhgMoDCX6KkFT6yqvTl9vqWAwPrpqN2czgZu1qR66pN8EnIx/+HomLmgJnJ2ALp7dmr6NOgNwhMA8YB4wSmIdwoQsLJyd66tthNg7UhlrMEyKqwuHZn/Ew3/VbEHDDzm+UNDvI2+c3PdhFZJDm5hIA1kYA1EXVmiOpdoDuAs0Rka11qRWRgO+31m/cCHwMBK6i3u+nb1Ssw8Fq83DjGrAWCwOZMxI4hxwVX9gB7UF4NfxvfrMpSUWcthVutY1B5A9H5IAuBF4fquyI8AJgLYJm+JwYZ/L8IqlXWOgCFKwYr4phceyF5vpuOK8UANZBf1oYqmAlv+h1A4PTB8qt1XPGMcN5g+QOpFAOUjVR0Q2cheYab8qPOAKUyZgC/BfjNmAH8FuA3YwbwW4DfnPIGqKjjcLko5cxyynvAqDRAKRGsUWmAUhgzgN8C/KakVeBkI8PljiyXoz2XHqA7XBTa7l1979oTr+N9lUpx3GNzgN8C/KLo8WMe4LcAvxibAwoYoAugdvf9E33WMmxEkiuLIfNOA/wIEDgSjPonaXjJmmxxrPuMIq0ADtLko6bhxdH8WEVbTZXJblE4iHBzKBV/2GdpnhNOxh4l/5FVZ0CtZwQgnIrdripvAUbhfRFN9HQH2/bM2djlq9oyccmOh2qqx/fNKjz5+YCj6B0d0ZZ3jm5/C0Z4CZd3aiOYThEWpyP2VuDYzxIjyRVnZVWXIroQuJjCre0ooAv4AZVtvU7Plu8vf+bPYsY/Nzgvj70rrLUAAAAASUVORK5CYII="/></a>
                <a href="https://twitter.com/darshanraut123" target="_blank"><img  alt='twitter' className="sidebar__icon" src={twitter} /></a>               
                <a href="https://www.hackerrank.com/darshanraut3828" target="_blank" ><img alt='hackerrank' className="sidebar__icon" src={hackerrank}/></a>             
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/darshanraut123" target="_blank" ><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Mumbai, India</div>
                <div className="sidebar__item">darshanraut3828@gmail.com</div>
                <div className="sidebar__item">+91 9405686153</div>
            </div>
        </motion.div>
    )
}

export default Sidebar;