import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgstyle = isDarkTheme ? 'darktheme' : 'lighttheme'
      const textstyle = isDarkTheme ? 'light' : 'dark'

      return (
        <>
          <Navbar />
          <div className={`${bgstyle}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`${textstyle}`}>Lost Your Way?</h1>
            <p className={`${textstyle}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
