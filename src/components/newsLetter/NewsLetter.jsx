import React, { useState } from 'react';

export const NewsLetter = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <section className="NewsLetter">
        <div className="container">
          <div className="row content">
            <div className="col-12">
              <p>35,000+ ALREADY JOINED</p>
              <h1>Stay up-to-date with what we’re doing</h1>
            </div>

            <form
              className="col-12 mt-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="row">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  controlId="validationCustom01"
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
