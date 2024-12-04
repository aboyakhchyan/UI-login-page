import styles from "./slide.module.css"

export const Slide = () => {

    


    return (
        <div className={styles.slideContainer}>

            <div className={styles.slideHeader}>

            <h1 className={styles.title}>Building the Future...</h1>

            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            </div>
        
            <span className={styles.controller1}></span>
            <span className={styles.controller2}></span>
            <span className={styles.controller3}></span>
        
      </div>
    )
}