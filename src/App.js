import './App.css';
import StepProgress from './components/Main/StepProgress/Step';
import ProgressControl from './components/Main/ProgressControl/ProgressControl';
import RegisterForm from './components/Main/Form/RegisterForm';
import CreditCardForm from './components/Main/Form/CreditCardForm';
import ShippingForm from './components/Main/Form/ShippingForm';

function App() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <section className="register-container" data-phase="1" data-total-price="0">
            <h2 className="register-title">結帳</h2>
            <StepProgress />
            <RegisterForm
              formTitle={'寄送地址'}
            />
            {/* <ShippingForm
              formTitle={'運送方式'}
            /> */}
            {/* <CreditCardForm 
              formTitle={'付款資訊'}
            /> */}
          </section>
          <ProgressControl />

        </div>
      </main>
    </>
  );
}

export default App;
