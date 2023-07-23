import styles from './Step.module.css'


function EachProgress({phase, order, label}){
    return (
        <span className={styles.progressGroup} data-phase={phase}>
            <span className={styles.progressIcon}>
                <span className={styles.progressIconText}>{order}</span>
            </span>
            <span className={styles.progressLabel}>{label}</span>
        </span>   
    )
}

export default function StepProgress(){
    return (

          <section className={styles.progressContainer}>
            <EachProgress 
                order={1}
                label="寄送地址"
                phase="address"     
            />
            <span className={styles.progressBar} data-order="1"></span>
            <EachProgress 
                order={2}
                label="運送方式"
                phase="shipping"
            />
            <span className={styles.progressBar} data-order="2"></span>
            <EachProgress 
                order={3} 
                label="付款資訊"
                phase="credit-card"
            />
          </section>
       
    )
}