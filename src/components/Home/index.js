import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';
import PDFViewer from './CV';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'm', 'o', 'n', 'e',' ', 'F', 'a', 'i', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>  
                <span className={`${letterClass} _12`}>i,</span>  
                <br/>
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25}
                />
                </h1>
                <h2>
                    Full Stack Developer / .Net / React 
                </h2>
                <Link to="/projects" className='flat-button'>MY PROJECTS</Link>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <PDFViewer />

            {/* <Logo /> */}
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Home