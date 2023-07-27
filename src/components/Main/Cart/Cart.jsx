import styles from './Cart.module.css'
import  Minus from '../../../minus.svg'
import  Plus from '../../../plus.svg'
import {data} from './data.js' 

export default function Cart(){
    // 渲染每個商品
    const products = data.map(product =>
        <div className={styles.productContainer} key={product.id} data-count="0" data-price={product.price}>
            <img className={styles.imgContainer}  alt={product.name} src={product.img} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <img className={styles.productAction} src={Minus} />
                        <span className="styles.productCount">{product.quantity}</span>
                        <img className={styles.productAction} src={Plus} />
                    </div>
                </div>
                <div className={styles.price}>${product.price}</div>
            </div>
        </div>
    )
    return (
        <section className={styles.cartContainer} >
            <h3 className={styles.cartTitle}>購物籃</h3>
                {products}
            <section className={styles.cartInfo} >
                <div className={styles.text}>運費</div>
                <div className={styles.price}>123123123</div>
            </section>
            <section className={styles.cartInfo} >
                <div className={styles.text}>小計</div>
                <div className={styles.price}>123</div>
            </section>
        </section>

    )
}
