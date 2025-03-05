import Navigation from './nav';
import { useState } from 'react';

const Header = (props) => {
    const [active,setActive] = useState('active');
    // const [keywords,setKeywords] = useState('');

    const handleChange = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active';
        // setKeywords(event.target.value)
        setActive(value)
    }

    return(
        <header>
            <div className="logo"
            >Awesome News</div>
            <input
                onChange={props.getKeywords}
            />
            {/* The kewords are: {keywords} */}
            <Navigation/>
        </header>
    )
}

export default Header;