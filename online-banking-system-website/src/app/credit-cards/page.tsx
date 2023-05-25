export default function CreditCards() {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="d-flex flex-column h-100">
            <label className="d-block">
              <div className="d-flex position-relative">
                <div>
                  <img
                    //   src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png"
                    className="visa"
                    alt=""
                  />
                  <p className="mt-2 mb-4 text-white fw-bold">Sai Kumar</p>
                </div>
              </div>
            </label>
            <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
              <p>4989 1237 1234 4532</p>
              <p>01/24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
