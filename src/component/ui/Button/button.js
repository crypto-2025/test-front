import './button.css'
import styles from './ButtonWithAnimation.module.css'; 
export default function Button({
  type,
  children,
  disabled,
  fullWidth,
  onClick,
  component,
  withAnimation
}) {
 

    return (
      withAnimation ? (
        <div className={styles.btnBlock}>
         
        <div className={styles.buttonContainer}>
          <button className={styles.buttonFree}>{children}</button>
          <div className={styles.animatedBackground}></div>
          <div className={styles.innerBlurEffect}></div>
        </div>
</div>
      ) :(
        <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${component}`}
    >
        {children}
    </button>
      )
    )
      
    
     

}

