import './App.css';
import StepProgress from './components/Main/stepProgress/step';
import ProgressControl from './components/Main/progressControl/progressControl';
import RegisterForm, { CreditCardForm, ShippingForm } from './components/Main/form/form';

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
