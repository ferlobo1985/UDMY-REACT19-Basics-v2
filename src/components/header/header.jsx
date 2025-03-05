import Navigation from './nav';
import { useState } from 'react';

const Header = () => {
    const [keywords,setKeywords] = useState('');

    const handleChange = (event) => {
        setKeywords(event.target.value)
    }

    return(
        <header>
            <div className="logo"
            >Awesome News</div>
            <input
                onChange={handleChange}
            />
            The kewords are: {keywords}
            <Navigation/>
        </header>
    )
}

export default Header;