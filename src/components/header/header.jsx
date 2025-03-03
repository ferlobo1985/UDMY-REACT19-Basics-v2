import Navigation from './nav';

const Header = () => {
    const handleChange = (event) => {
        console.log(event)
    }

    return(
        <header>
            <div className="logo"
            >Awesome News</div>
            <input
                onChange={handleChange}
            />
            <Navigation/>
        </header>
    )
}

export default Header;