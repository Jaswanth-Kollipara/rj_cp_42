import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const bgstyle = isDarkTheme ? 'darktheme' : 'lighttheme'
      const textstyle = isDarkTheme ? 'light' : 'dark'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`${bgstyle}`}>
          <img src={logoUrl} alt="website logo" />
          <ul>
            <li>
              <Link to="/" className={`${textstyle}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${textstyle}`}>
                About
              </Link>
            </li>
            <li onClick={onClickTheme}>
              <button type="button" data-testid="theme">
                <img src={themeUrl} alt="theme" />
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
