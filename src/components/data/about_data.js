import React from 'react';

import api from '../../assets/icons/api.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build beautiful and scalable SPA using HTML, CSS ,Bootstrap & React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "I can handle SQL ,MongoDB databases, server, apis and SQLDeveloper tool",
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST APIs using", <strong key={1}> Express-JS & Spring-Boot</strong>]
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "Have habit of solving problems in HackerRank and Codekatta"
    },
    {
        icon: puzzle,
        title: "UI Automation Testing",
        about: ["Can work on GHERKIN based UI automation tests using",<strong key={0}> Gwen  & Selenium with Cucumber.</strong>]
    },
    {
        icon: computer,
        title: "CDAC Certified",
        about: "Completed post graduate diploma in advanced computing from CDAC Kharghar in 2020!"
    },
]

export default skills;