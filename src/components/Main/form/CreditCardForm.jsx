import styles from './Form.module.css'


export default function CreditCardForm ({formTitle}) {
    return(
      <div className={styles.formContainer}>
        <form class={styles.form} data-phase="credit-card">
          <h3 class={styles.formTitle}>{formTitle}</h3>
          <section class="formBody">
            <div class={styles.inputRow}>
              <div class={styles.inputGroupW4}>
                <div class={styles.inputLabel}>持卡人姓名</div>
                <input type="text" placeholder="John Doe" />
              </div>
            </div>
            <div class={styles.inputRow}>
              <div class={styles.inputGroupW4}>
                <div class={styles.inputLabel}>卡號</div>
                <input type="text" placeholder="1111 2222 3333 4444" />
              </div>
            </div>
            <div class={styles.inputRow}>
              <div class={styles.inputGroupW3}>
                <div class={styles.inputLabel}>有效期限</div>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div class={styles.inputGroupW3}>
                <div class={styles.inputLabel}>CVC / CCV</div>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </section>
        </form>
      </div>
    )
  }