import React from 'react';

const Modal = () => {
    return (
        <div>
           
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  
<label className="input input-bordered flex items-center gap-2">
 
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2">
 
  <input type="text" className="grow" placeholder="first name" />
</label>
<label className="input input-bordered flex items-center gap-2">
 
  <input type="text" className="grow" placeholder="last name" />
</label>
<label className="input input-bordered flex items-center gap-2">

    
  <input type="password" />
</label>
<label className="input input-bordered flex items-center gap-2">

    
  <input type="number" placeholder='phone' />
</label>
<label className="input input-bordered flex items-center gap-2">

    
  <input type="date" placeholder='date' />
</label>

<button className='btn btn-primary' type='submit' >Make Appoinment</button>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" >Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal; 