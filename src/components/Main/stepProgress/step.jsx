import styles from './step.module.css'


function EachProgress({step}){
    return (
        <>
        <span className={styles.progressGroup} data-phase={step.phase}>
              <span className={styles.progressIcon}>
                <span className={styles.progressIconText}>{step.order}</span>
              </span>
              <span className={styles.progressLabel}>{step.label}</span>
            </span>   
        </>
    )
}

export default function StepProgress(){
    return (

          <section className={styles.progressContainer}>
            <EachProgress 
                step={{
                    order: 1,
                    label: '寄送地址',
                    phase: 'address'
                }}
            />
            <span className={styles.progressBar} data-order="1"></span>
            <EachProgress 
                step={{
                    order: 2,
                    label: '運送方式',
                    phase: 'shipping'
                }}
            />
            <span className={styles.progressBar} data-order="2"></span>
            <EachProgress 
                step={{
                    order: 3,
                    label: '付款資訊',
                    phase: 'credit-card'
                }}
            />
          </section>
       
    )
}