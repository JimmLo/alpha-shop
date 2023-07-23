import styles from './Form.module.css'

export default function ShippingForm ({formTitle}){
  return(
      <div className={styles.formContainer}>
        <form className={styles.form} data-phase="shipping">
          <h3 className={styles.formTitle}>{formTitle}</h3>
          <section className="formBody">
            <label className={styles.radioGroup} data-price="0">
              <input id="shipping-standard" type="radio" name="shipping"  checked/>
              <div className={styles.radioInfo}>
                <div className={styles.wayAndPriceContainer}>
                  <div className={styles.wayText}>標準運送</div>
                  <div className="price"></div>
                </div>
                <div className={styles.periodText}>約 3~7 個工作天</div>
              </div>
              <div className={styles.radioBoxBorder}></div>
            </label>
            <label className={styles.radioGroup} data-price="500">
              <input id="shipping-dhl" type="radio" name="shipping" />
              <div className={styles.radioInfo}>
                <div className={styles.wayAndPriceContainer}>
                  <div className={styles.wayText}>DHL 貨運</div>
                  <div className="price"></div>
                </div>
                <div className={styles.periodText}>48 小時內送達</div>
              </div>
              <div className={styles.radioBoxBorder}></div>
            </label>
          </section>
        </form>
      </div>
    )
}