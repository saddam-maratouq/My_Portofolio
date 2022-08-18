import React,{useState} from "react";
import './credit.css'

import { Button,Modal } from 'react-bootstrap'; 


const Creditcard = () => {

  const [Modals, setModals] = useState(false) 


   const handelSubmit = () => {
    event.preventDefault();
     setModals(!Modals)
   }



  return (
    <> 
   
    <div className="creditContainer">
    <div className="card-Content" >  
    <Button variant="info" onClick={handelSubmit} >  
      check  pill
    </Button>
    <Modal show={Modals}  >  
      <form  onSubmit={handelSubmit} > 
        <label>
          Card Number  {' '} <br/> 
          <input type="text" className="C-Number" required />
        </label> 

        <label>
        Card Holder (Name on Card)  {' '} <br/> 
          <input type="text"  className="C-holderNumber" required /> 
        </label> 
        <div  className="Expire-content" >   
        <label>
        Expeire   {' '} <br/> 
          <input type="text"  className="MM" placeholder="mm" required /> 
          <input type="text"  className="yy" placeholder="yy" required /> 
          <input type="text"  className="dd" placeholder="dd" required /> 
         
        </label> 
        </div> 
        <label> 
          CVV  {' '} <br/>  
          <input type='text'  className="cvv"  required /> 
        </label>

        <input type="submit" value="Submit" className="submit" /> 
      </form  >
      </Modal> 
      </div> 
    </div>
    </>
  );
};

export default Creditcard; 
