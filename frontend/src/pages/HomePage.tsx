import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"


const HomePage = () => {
    return (
        <div className="h-screen">
            <Navbar></Navbar>
            <HeroSection/>
        </div>
    )
}

export default HomePage