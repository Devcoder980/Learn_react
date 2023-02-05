// There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

// Inline styling
// CSS stylesheets
// CSS Modules

// IMport css module file
import styles from '../my-Style.module.css';
import '../my-sass.scss'
// Pass style object in tag style
const myStyle={
    color:"white",
    backgroundColor:"darkblue",
    padding:"10px",
    fontFamily:"Sans-Serif"
};
const ReactStyling=()=>{
    return(
        <>
            {/* Inline Styling */}

            <h1 style={{color:"red",backgroundColor:"Blue"}}>Wrtiten INline css</h1>
            <p style={myStyle}>Css Style as a object Transfer</p>
            <h5 className={styles.bigblue} >Css Style Module pass className</h5>
            <h1>We using css Sass styling</h1>
        </>

    )
}

export default ReactStyling
