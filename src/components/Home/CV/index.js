import './index.scss'
import CV from './Curriculum_Simone_Faia.pdf'
import { useState , useEffect } from 'react'
import AnimatedLetters from '../../AnimatedLetters'

const PDFViewer = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'y', ' ', 'r', 'e','s', 'u', 'm', 'e']

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
            <div className='cv-preview'>
                <h2>
                    <AnimatedLetters
                        letterClass={letterClass} 
                            strArray={nameArray}
                            idx={15} />
                </h2>
                <iframe src={CV} />
            </div>
        </>
    )
}
export default PDFViewer