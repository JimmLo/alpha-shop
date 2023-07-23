import leftArrows from '../../../left-arrows.svg'
import rightArrows from '../../../right-arrows.svg'
import styles from './progressControl.module.css'

function Button({buttonText, control, image}) {
  return (
    <>
    <button className={`${styles.controlNext} ${control}`}>
      {buttonText}
      <object data={image} className={styles.cusorPoint}>
      </object>
    </button>
    </>
  )
}

export default function ProgressControl() {
    return (
        <section className={styles.progressControlContainer}>
          <section className={styles.buttonGroup} data-phase="address">
            <Button
              control= {'next'}
              buttonText= {'下一步'}
              image= {rightArrows}
            />
          </section>
          {/* <section className="button-group col col-12" data-phase="shipping">
            <Button
              control= {'prev'}
              buttonText= {'上一步'}
              image= {leftArrows}
            />
            
            <Button
              control= {'next'}
              buttonText= {'下一步'}
              image= {rightArrows}
            />
          </section>
          <section className="button-group col col-12" data-phase="credit-card">
            <Button
              control= {'prev'}
              buttonText= {'上一步'}
              image= {leftArrows}
            />
            <button className="next">
              確認下單
            </button>
          </section> */}
        </section>
    )
}