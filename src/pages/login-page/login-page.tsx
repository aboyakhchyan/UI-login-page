import { InputForm } from '../../components/input-form/input-form';
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

      <div className={styles.backgroundBlur}></div>

      <Logo />

      <Slide />

      <InputForm />
    </div>
  );
};
