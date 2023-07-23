import styles from './form.module.css'



export default function RegisterForm({formTitle }) {
    return (
        <div className={styles.formContainer}>
            
            <form className={styles.form} data-phase="address">
              <h3 className={styles.formTitle}>{formTitle}</h3>
              <section className="formBody">
                <div className={styles.inputRow} >
                  <div className={styles.inputGroupW2}>
                    <div className={styles.inputLabel}>稱謂</div>
                    <div className="select-container">
                      <select>
                        <option value="mr" selected>先生</option>
                        <option value="ms">女士</option>
                        <option value="mx">不明</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.inputGroupW4}>
                    <div className={styles.inputLabel}>姓名</div>
                    <input type="text" placeholder="請輸入姓名" />
                  </div>
                </div>
                <div className={styles.inputRow} >
                  <div className={styles.inputGroupW3}>
                    <div className={styles.inputLabel}>電話</div>
                    <input  type="tel" placeholder="請輸入行動電話" />
                  </div>
                  <div className={styles.inputGroupW3}>
                    <div className={styles.inputLabel}>Email</div>
                    <input  type="email" placeholder="請輸入電子郵件" />
                  </div>
                </div>
                <div className={styles.inputRow} >
                  <div className={styles.inputGroupW2}>
                    <div className={styles.inputLabel}>縣市</div>
                    <div className="select-container">
                      <select required>
                        <option value="">請選擇縣市</option>
                        <option value="KLU">基隆市</option>
                        <option value="TPH">新北市</option>
                        <option value="TPE">臺北市</option>
                        <option value="TYC">桃園市</option>
                        <option value="HSH">新竹縣</option>
                        <option value="HSC">新竹市</option>
                        <option value="MAC">苗栗市</option>
                        <option value="MAL">苗栗縣</option>
                        <option value="TXG">臺中市</option>
                        <option value="CWH">彰化縣</option>
                        <option value="CWS">彰化市</option>
                        <option value="NTC">南投市</option>
                        <option value="NTO">南投縣</option>
                        <option value="YLH">雲林縣</option>
                        <option value="CHY">嘉義縣</option>
                        <option value="CYI">嘉義市</option>
                        <option value="TNN">臺南市</option>
                        <option value="KHH">高雄市</option>
                        <option value="IUH">屏東縣</option>
                        <option value="PTS">屏東市</option>
                        <option value="ILN">宜蘭縣</option>
                        <option value="ILC">宜蘭市</option>
                        <option value="HWA">花蓮縣</option>
                        <option value="HWC">花蓮市</option>
                        <option value="TTC">臺東市</option>
                        <option value="TTT">臺東縣</option>
                        <option value="PEH">澎湖縣</option>
                        <option value="KMN">金門縣</option>
                        <option value="LNN">連江縣</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.inputGroupW4}>
                    <div className={styles.inputLabel}>地址</div>
                    <input  type="text" placeholder="請輸入地址" />
                  </div>
                </div>
              </section>
            </form>
        </div>
    )
}

export function ShippingForm ({formTitle}){
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

export function CreditCardForm ({formTitle}) {
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