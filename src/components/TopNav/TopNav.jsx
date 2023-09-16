import './TopNav.css'

export default function TopNav() {
    return (
        <>
            <nav
                className='navbar'
                role='navigation'
                aria-label='main navigation'
            >
                <div className='navbar-brand'>
                    <a className='navbar-item' href='#'>
                        <strong>Mini Yelp App</strong>
                    </a>

                    <a
                        role='button'
                        className='navbar-burger burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className='navbar-start'>
                        <a className='navbar-item' href='#'>
                            Home
                        </a>

                        <a className='navbar-item' href='#'>
                            About
                        </a>

                        <a className='navbar-item' href='#'>
                            Contact
                        </a>
                    </div>

                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='field is-grouped'>
                                <p className='control'>
                                    <input
                                        className='input'
                                        type='text'
                                        placeholder='Search'
                                    />
                                </p>
                                <p className='control'>
                                    <button className='button is-info'>
                                        Search
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <a className='button is-primary'>
                                    <strong>Sign up</strong>
                                </a>
                                <a className='button is-light'>Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className='section'>
                <div className='container'>
                    <h1 className='title'>Yelp</h1>
                    <p className='subtitle'>
                        Yelp <strong>Mini-Yelp</strong>!
                    </p>
                </div>
            </section>
        </>
    )
}
