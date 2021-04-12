import React, {useContext} from 'react'
import {ThemeContext} from './Contexts/ThemeContext'

function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext)
    const styles = {
      width: '100vw',
      height: '100vh',
      backgroundColor: isDarkMode ? '#333': 'white',
    }
    return (
      <div style={styles}>{props.children}</div>
    )
}

export default PageContent
