import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="https://www.marvel.com/">
                    <span>Marvel</span> information portal
                </a>
            </h1>
        </header>
    )
}

export default AppHeader;