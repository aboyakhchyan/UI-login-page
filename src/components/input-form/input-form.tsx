import styles from './input-form.module.css'

export const InputForm = () => {
    return (
            <div className={styles.formContainer}>
                <div className={styles.formTitle}>  
                    <h4 className={styles.title}>WELCOME BACK</h4>

                    <h2 className={styles.description}>Log In to your Account</h2>
                </div>



                <form className={styles.form}>
                        <div className={styles.inputContainer}>
                            <label 
                                htmlFor="email"
                                className={styles.inputLabelEmail}
                            >Email</label>
                            <input 
                                id="email" 
                                type="text" 
                                placeholder='johnsondoe@nomail.com'
                                className={styles.inputField}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label 
                                htmlFor="password"
                                className={styles.inputLabelPass}
                            >Password</label>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder='**********'
                                className={styles.inputField}
                            />
                            <img 
                                src="./images/eye.png"
                                className={styles.hideLogo}
                            />
                        </div>

                    <div className={styles.confirmBlock}>
                        <span className={styles.block}>
                            <img 
                                src="./images/new-shape.png"
                                className={styles.shapeImg}
                            />
                        </span>

                        <p className={styles.confirmText}>Remember me</p>

                        <strong className={styles.questionText}>Forgot Password?</strong>
                    </div>

                    <button className={styles.submitForm}>
                        <p className={styles.buttonText}>CONTINUE</p>
                    </button>

                </form>
            </div>
    )
}