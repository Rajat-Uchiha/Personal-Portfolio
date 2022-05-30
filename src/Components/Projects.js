import React from 'react'
import ProjectCard from './ProjectCard'
import AvgTemp from './AvgTemp.png'
import texteditor from './texteditor.png'
import apimaster from './apimaster.png'
import remindmeplease from './remindmeplease.png'
import aboutcovidnow from './aboutcovidnow.png'
import moviehub from './moviehub.png'
import portfolio from './portfolio.png'

import Slide from 'react-reveal/Slide';

export default function Projects(props) {


    Projects = [
        {
            projectName: "Portfolio",
            projectDesc: "This is my personal portfolio which tells everything about me.",
            technologiesUsed: "created using HTML5, tailwindCSS, JS, reactjs and emailjs.",
            imageLink: portfolio,
            githubLink: "https://github.com/Rajat-Uchiha/Personal-Portfolio",
            liveProjectLink: "https://workwithrajat.netlify.app/"
        },
        {
            projectName: "Covid-19 Report",
            projectDesc: "A web application which gives report about covid-19 cases until now",
            technologiesUsed: "created using HTML5, tailwindCSS and JS.",
            imageLink: aboutcovidnow,
            githubLink: "https://github.com/Rajat-Uchiha/Covid19-Cases-Tracker",
            liveProjectLink: "https://aboutcovidnow.netlify.app/"
        },

        {
            projectName: "TextEditor",
            projectDesc: "A web application helps to you edit your text like to remove extra space and alot more,",
            technologiesUsed: "created using HTML3, tailwindCSS, JS and reactjs.",
            imageLink: texteditor,
            githubLink: "https://github.com/Rajat-Uchiha/TextEditor-react.js",
            liveProjectLink: "https://edittextwithrajat.netlify.app/"
        },
        {
            projectName: "ApiMaster",
            projectDesc: "A web application which helps you to see the response of GET and POST requests,",
            technologiesUsed: "created using HTML5, tailwindCss, JS, fetch api.",
            imageLink: apimaster,
            githubLink: "https://github.com/Rajat-Uchiha/ApiMaster",
            liveProjectLink: "https://myapimaster.netlify.app/"
        },
        {
            projectName: "MovieHub",
            projectDesc: "A web application where you can watch movies, shows and kids cartoons,",
            technologiesUsed: "created using HTML5, CSS3 and JS.",
            imageLink: moviehub,
            githubLink: "https://github.com/Rajat-Uchiha/MovieHub",
            liveProjectLink: "https://moviehub99.netlify.app/"
        },
        {
            projectName: "RemindmePlease",
            projectDesc: "A web application where you can set your reminders as aa alarm and it will remind you at proper time,",
            technologiesUsed: "created using HTML5, tailwindCSS and JS.",
            imageLink: remindmeplease,
            githubLink: "https://github.com/Rajat-Uchiha/Remind-me-please",
            liveProjectLink: "https://remindmeplease.netlify.app/"
        },
        {
            projectName: "AvgGlobeTemp",
            projectDesc: "This is a web application which tells you average global temperature of Earth,",
            technologiesUsed: "created using HTML5, tailwindCss, JS, fetch api.",
            imageLink: AvgTemp,
            githubLink: "https://github.com/Rajat-Uchiha/Average-Global-Temperature",
            liveProjectLink: "https://ourglobetemp.netlify.app/"
        },

    ]

    return (
        < >
            <div style={props.bgStyle} className="bg-stone-800" >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div>
                <div className='py-2 '>
                    <Slide left>
                        <h1 className='text-3xl py-2 md:text-4xl lg:text-5xl hover xl:text-5xl font-Chewy rounded-full text-center text-white  underline underline-offset-4 ' >Projects</h1>
                    </Slide>

                </div>


                {/* Project cards */}
                <div className=' flex flex-row items-center py-6 flex-wrap justify-evenly '>
                    {Projects.map((ele) => {
                        return <ProjectCard key={ele.imageLink} projectName={ele.projectName} projectDesc={ele.projectDesc} technologiesUsed={ele.technologiesUsed} imageLink={ele.imageLink} githubLink={ele.githubLink} liveProjectLink={ele.liveProjectLink}></ProjectCard>
                    })}
                </div>

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1917" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>
        </>
    )
}
