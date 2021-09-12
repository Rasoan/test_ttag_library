import {saveLocale} from './i18nlnit';
import React, {Component} from 'react';
import {t, jt} from 'ttag';
import logo from './logo.svg';
import './App.css';

const setLocale = (locale: string) => (ev: any) => {
    ev.preventDefault();
    saveLocale(locale);
    window.location.reload();
}

const LangSwitcher = () => (
    <div>
        <h2>{t`Switch lang`}</h2>
        <ul style={{display: "flex", minWidth: 200, listStyle: "none", justifyContent: "space-evenly"}}>
            <li key={"locale-uk"}>
                <a href='/' onClick={setLocale('uk')}>uk</a>
            </li>
            <li key={"locale-ru"}>
                <a href='/' onClick={setLocale('ru')}>ru</a>
            </li>
            <li key={"locale-en"}>
                <a href='/' onClick={setLocale('en')}>en</a>
            </li>
        </ul>
    </div>
)

class App extends Component {
    render() {
        const appLink = <code key={"link-app"}>src/App.js</code>;
        return (
            <div className="App">
                <header className="App-header">
                    <LangSwitcher />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {jt`Edit ${appLink} and save to reload.`}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t`Learn React`}
                    </a>
                    <a
                        className="App-link"
                        href="https://ttag.js.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t`Learn ttag`}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;