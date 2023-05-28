import Link from "next/link";


export default function Report() {
 

  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-8 col-lg-10 col-md-12">
        <div className="card" >
          <div className="card-body">
            <h1 className="card-title">Report Details</h1>
            <form className="d-flex flex-column gap-3">
            <dl className="row">
  <dt className="col-sm-3"> Title</dt>
  <dd className="col-sm-9">Stolen Card</dd>

  <dt className="col-sm-3">ID</dt>
  <dd className="col-sm-9">52-18268</dd>
  <dt className="col-sm-3">Date</dt>
  <dd className="col-sm-9">3-1-2002</dd>
 

  <dt className="col-sm-3">Bank Account</dt>
  <dd className="col-sm-9">1234-5678-9012-3456</dd>
  <dt className="col-sm-3">Card Details</dt>
  <dd className="col-sm-9">9876-5432-1098-7654</dd>

  <dt className="col-sm-3 ">Description</dt>
  <dd className="col-sm-9">kont bagry fe sheben al kom 3nd porto al zawya we hasal henak 3awa2 we mashakel babos 3al card bta3y la2eto etsara2 fa yaret te2flo</dd>

  <dt className="col-sm-3">Status</dt>
  

  <dd className="col-sm-9">
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Unhandled</label> 
</div>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Pending</label> 
</div>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4"/>
  <label className="form-check-label me-2" htmlFor="inlineRadio2">In Progress </label>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Resolved</label> 
</div>
</div></dd>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
<Link href="http://localhost:3000/report/status" className="btn btn-primary me-md-2">Close</Link>
  <Link href="http://localhost:3000/report/status" className="btn btn-primary ">Update Status</Link> 
</div>


  
</dl>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
 
}
