import React,{useState} from 'react'
import { MdCall } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


import logo from './images/logo/logo.png'
import lotus from './images/lotus.png'

export default function Navbar() {

    const [name, setname] = useState(true)

    const toggleMenu = () => {
        setname(!name)
    }

    const [rotate, setRotate] = useState(false);
    const [xvalue, setXvalue] = useState(false)
    const [yvalue, setYvalue] = useState(false)
    const [hide, sethide] = useState(false)
    const [color,setColor] = useState('bg-orange-600')

    const changeHamburger = ()=>{
        setRotate(!rotate);
        setXvalue(!xvalue);
        setYvalue(!yvalue);
        sethide(!hide);

        if (color === 'bg-orange-600') {
            setColor('bg-white')
        } else if (color === 'bg-white') {
            setColor('bg-orange-600')
        }
    }

    const [show, setShow] = useState(false)
    const [showTwo, setShowTwo] = useState(false)

    const openDiv =()=> {
        setShow(true)
    }

    const openMobDiv = ()=> {
        setShow(!show)
    }
    const openMobDivTwo = ()=> {
        setShowTwo(!showTwo)
    }

    const openDivTwo =()=> {
        setShowTwo(true)
    }

  return (
    <>
    <div className='justify-between text-white font-normal bg-orange-500 py-1 text-xs xs:text-sm px-2 sm:px-20 lg:px-40 xs:flex '>
        {/* left */}
        <div className='flex items-center gap-2'>
            <div className='flex justify-items items-center gap-1'>
                <div>
                    <MdCall />
                </div>
                <div>
                    <a href="tel:+918888991122">
                    +91 88889 91122
                    </a>
                </div>
            </div>
            <div className='flex justify-items items-center gap-1'>
                <div>
                    <FaMapMarkerAlt />
                </div>
                <div>
                    ता. हवेली, जिल्हा पुणे
                </div>
            </div>
        </div>
        <div className='hidden sm:block'>
            <div className='flex justify-center items-center gap-1'>
                <div>
                4S हेल्पलाईन -
                </div>
                <div>
                    <MdCall />
                </div>
                <div>
                    <a href="tel:+917378991122">
                    +91 7378 991122
                    </a>
                </div> 
            </div>
        </div>
        {/* right  */}
        <div className='flex items-center  text-base sm:gap-4 gap-1 '>
            <a href='https://www.facebook.com/AnilSatavP' className='border-r border-white sm:pr-4 pr-1 cursor-pointer' target='_blank' rel="noreferrer" ><FaFacebookSquare/></a>
            <a href='https://twitter.com/AnilSatavPatil' target='_blank' rel="noreferrer" className='border-r border-white sm:pr-4 pr-1 cursor-pointer'><FaTwitter/></a>
            <a href='https://www.instagram.com/anilsatavpatil/' target='_blank' rel="noreferrer" className='cursor-pointer'><AiFillInstagram/></a>
        </div>
    </div>
    <nav className='hidden md:flex justify-between items-center border py-[1.1rem] gap-20 px-[2rem]' >
        {/* navbar logo image */}
        <div className='flex gap-[1.5rem] items-center'>
            <img className='w-[5vw] h-[10vh] hidden sm:block' src={lotus} alt="" />
            <img href="/" className=' hidden sm:block z-[3] bg-white py-1 w-[34vw] h-[12vh] cursor-pointer' src={logo} alt="" />
        </div>
        {/* navbar menu */}
        <div className='top-20 z-[2] hidden sm:flex gap-6  py-8 drop-shadow-2xl'>
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
                <div className='text-[1.15rem] cursor-pointer font-nunito'>मुख्यपृष्ठ</div>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                <div className='text-[1.15rem] cursor-pointer font-nunito'>व्यक्ती विशेष</div>
            </Link>
            <Link to="aboutintro" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='flex items-center gap-1 text-[1.15rem] cursor-pointer font-nunito' onMouseEnter={()=> {
                    openDiv();
                    setShowTwo(false);
                }} >कार्य अहवाल <BiChevronDown/> </div>
                <div onMouseLeave={()=>{setShow(false)}} className={`absolute px-6 py-2 mt-2 bg-white ${show ? '':'hidden'} `}>
                    <Link to="aboutintro" spy={true} smooth={true} offset={-50} duration={500}>
                        <div className='py-2 cursor-pointer text-[16px]'>कार्यआढावा</div>
                    </Link>
                    <Link to="karya-adhava" spy={true} smooth={true} offset={-50} duration={500}>
                        <div className='py-2 cursor-pointer text-[16px]'>विडिओ स्वरूपातील अहवाल</div>
                    </Link>
                    <Link to="carouseldiv" spy={true} smooth={true} offset={-50} duration={500}>
                        <div className='py-2 cursor-pointer text-[16px]'>विशेष योजना</div>
                    </Link>
                </div>
            </Link>
            <Link to="service" spy={true} smooth={true} offset={-100} duration={500}>
                <div className='flex items-center gap-1 text-[1.15rem] cursor-pointer font-nunito' onMouseEnter={()=> {
                    openDivTwo();
                    setShow(false);
                }} >सामाजिक योगदान <BiChevronDown/></div>
                <div onMouseLeave={()=>{setShowTwo(false)}} className={`absolute px-4 py-2 mt-2 bg-white ${showTwo ? '':'hidden'} `}>
                    <Link to="service" spy={true} smooth={true} offset={-40} duration={500}>
                        <div className='py-2 cursor-pointer text-[16px]'>वाघोली मधील विकास कार्ये</div>
                    </Link>
                    <Link to="servicehero" spy={true} smooth={true} offset={-100} duration={500}>
                        <div className='py-2 cursor-pointer text-[16px]'>जनलाभ</div>
                    </Link>
                </div>
            </Link>
            <Link to="post" spy={true} smooth={true} offset={-80} duration={500}>
                <div className='text-[1.15rem] cursor-pointer font-nunito'>मीडिया</div>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='text-[1.15rem] cursor-pointer font-nunito'>संपर्क</div>
            </Link>
        </div>        
    </nav>
    <div className='sm:hidden flex justify-between items-center px-[1rem] py-[0.5rem]'>
        <div >
            {/* mobile logo */}
            <a href="/">    
            <div className=' bg-white flex items-center gap-1'>
                <img href="/" className=' sm:hidden w-[2rem] z-[3]  py-1 cursor-pointer' src={lotus} alt="" />
                <img href="/" className=' sm:hidden w-[12rem] h-[2.5rem] z-[3]  py-1 cursor-pointer' src={logo} alt="" />
            </div>
            </a>
        </div>
        {/* mobile menu button */}
        <div
        className='sm:hidden z-[4] cursor-pointer'
        onClick={toggleMenu}>
            <div className='py-4' onClick={changeHamburger}>
                <motion.div
                    animate={{
                        rotate: [rotate ? 45: 0],
                        x:[xvalue ? 4:0],
                        y: [yvalue ? 4:0],
                    }} className={`${color} w-8 h-[0.2rem] rounded-full my-1 duration-300 ease-linear`}>
                </motion.div>
                <div className={`bg-orange-600 w-8 h-[0.2rem] rounded-full my-1 ${hide ? 'hidden' : ''}`}></div>
                <motion.div
                    animate={{
                        rotate: [rotate ? -50: 0],
                        x:[xvalue ? 4:0],
                        y: [yvalue ? -3:0],
                    }} className={`${color} w-8 h-[0.2rem] rounded-full my-1 duration-300 ease-linear`}>
                </motion.div>
            </div>
        </div>
    </div>
    {/* mobile nav menu */}
    <ul className={`overflow-hidden absolute top-0 h-screen md:hidden flex-col bg-slate-500 bg-opacity-100 z-[3] border-white duration-300 ease-linear right-0 ${name ? 'w-0'  : 'w-[60%]' }`} >
    <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 text-start font-base text-xl mt-[100px] py-6 tracking-wide text-white cursor-pointer'>मुख्यपृष्ठ</li>
    </Link>
    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 text-start font-base text-xl py-6 tracking-wide text-white cursor-pointer'>व्यक्ती विशेष</li>
    </Link>
    <Link to="" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 flex items-center gap-2 text-start font-base text-xl py-6 tracking-wide text-white cursor-pointer' onClick={openMobDiv}>कार्य अहवाल <BiChevronDown/></li>
        <div className={`pl-8 ${show ? '': 'hidden'} `}>
            <Link to="aboutintro" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='py-2 text-white tracking-wide cursor-pointer text-[16px]'>कार्यआढावा</div>
            </Link>
            <Link to="karya-adhava" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='py-2 text-white tracking-wide cursor-pointer text-[16px]'>विडिओ स्वरूपातील अहवाल</div>
            </Link>
            <Link to="carouseldiv" spy={true} smooth={true} offset={-50} duration={500}>
                <div className='py-2 text-white tracking-wide cursor-pointer text-[16px]'>विशेष योजना</div>
            </Link>
        </div>
    </Link>
    <Link to="" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 text-start flex items-center gap-2 font-base text-xl py-6 tracking-wide text-white cursor-pointer' onClick={openMobDivTwo} >सामाजिक योगदान <BiChevronDown/></li>
        <div className={`pl-8 ${showTwo ? '': 'hidden'} `}>
            <Link to="service" spy={true} smooth={true} offset={-40} duration={500}>
                <div className='py-2 text-white tracking-wide cursor-pointer text-[16px]'>वाघोली मधील विकास कार्ये</div>
            </Link>
            <Link to="servicehero" spy={true} smooth={true} offset={-100} duration={500}>
                <div className='py-2 text-white tracking-wide cursor-pointer text-[16px]'>जनलाभ</div>
            </Link>
        </div>
    </Link>
    <Link to="post" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 text-start font-base text-xl py-6 tracking-wide text-white cursor-pointer'>मीडिया</li>
    </Link>
    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
        <li className='pl-4 text-start font-base text-xl py-6 tracking-wide text-white cursor-pointer'>संपर्क</li>
    </Link>
    </ul>
    </>
  )
}
