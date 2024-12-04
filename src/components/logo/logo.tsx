import styles from './logo.module.css'

export const Logo = () => {
    return (
        <div>
            <img 
                src="./images/logo_highbridge.png"
                className={styles.logo}
            />
        </div>
    )
}