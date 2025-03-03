const Header = () => {

    const handleChange = (event) => {
        console.log(event)
    }

    return(
        <header>
            <div 
                className="logo"
                onClick={()=>console.log('I was clicked')}
                onPointerEnter={e=> console.log('onPointerEvent')}
            >LOGO</div>
            <input
                onChange={handleChange}
                onFocus={e => console.log('onFocus')}
                onBlur={e=> console.log('blur')}
            />
        </header>
    )

}

export default Header;