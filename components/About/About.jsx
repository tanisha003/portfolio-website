import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import frontend from "../../assets/frontend.jpeg"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
    useGSAP(()=>{
        gsap.from(".circle",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
               trigger:".circle",
               scroll:"body",
               scrub:2,
               start:"top 60%",
               end:"top 30%"
            }
        })
        gsap.from(".line",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
               trigger:".line",
               scroll:"body",
               scrub:2,
               start:"top 60%",
               end:"top 30%"
            }
        })
        gsap.from(".aboutdetails h1",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
               trigger:".aboutdetails h1",
               scroll:"body",
               scrub:2,
               start:"top 60%",
               end:"top 30%"
            }
        })
        gsap.from(".aboutdetails ul",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
               trigger:".aboutdetails ul",
               scroll:"body",
               scrub:2,
               start:"top 60%",
               end:"top 30%"
            }
        })
        gsap.from(".rightabout .card",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
               trigger:".rightabout .card",
               scroll:"body",
               scrub:2,
               start:"top 60%",
               end:"top 30%"
            }
        })
    })
  return (
    <div id="about">
      <div className='leftabout'>
      <div className='circle-line'>
        <div className='circle'></div>
        <div className='line'></div>
        <div className='circle'></div>
        <div className='line'></div>
        <div className='circle'></div>
      </div>
      <div className='aboutdetails'>
        <div className='personalinfo'>
            <h1>Personal Info</h1>
            <ul>
                <li>
                <span>Name</span>: TANISHA GHOSH
                </li>
                <li>
                <span>Age</span>: 21 years
                </li>
                <li>
                <span>Gender</span>: Female
                </li>
                <li>
                <span>Language known</span>: English,Hindi,Bengali
                </li>
            </ul>
        </div>
        <div className='education'>
            <h1>Education</h1>
            <ul>
                <li>
                <span>Degree</span>: Btech in Information Technology
                </li>
                <li>
                <span>College</span>: Netaji Subhash Engineering College
                </li>
                <li>
                <span>CGPA</span>: 8.5
                </li>
                <li>
                <span>Passout Year</span>: 2026
                </li>
                
            </ul>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ul>
                <li>
                Frontend Web Development
                </li>
                <li>
                DSA
                </li>
                <li>
                Java , C++
                </li>
                <li>
                HTML, CSS, JavaScript, ReactJS, MySQL
                </li>
            </ul>
        </div>
      </div>
      </div>
      <div className='rightabout'>
      <Card title="Frontend developer" image={frontend}></Card>
      <Card title="DSA" image={dsa}></Card>
      <Card title="JAVA, C++" image={java}></Card>
      </div>
    </div>
  )
}

export default About
