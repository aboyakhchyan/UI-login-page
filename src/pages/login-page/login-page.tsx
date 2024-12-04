import { Logo } from '../../components/logo/logo';
import { Slide } from '../../components/slide/slide';
import styles from './login.module.css'

export const LoginPage = () => {
  return (
    <div className={styles.mainContainer}>
      <img 
          src="../images/bg-img.png"
          className={styles.backgroundImg}
      />

      <Logo />

      <Slide />
      {/* <main>
        <img src="" />

        <div>
          <h1></h1>
          <p></p>

          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
            <div>  
                <h4></h4>

                <h2></h2>
            </div>

            <div>
                <form>
                    <label></label>
                    <input type="text" />

                    <label></label>
                    <input type="password">
                        <span></span>
                    </input>

                    <div>
                        <div>

                        </div>

                        <p></p>

                        <strong></strong>
                    </div>

                    <button>CONTINUE</button>

                </form>
            </div>
        </div>
      </main> */}
    </div>
  );
};
