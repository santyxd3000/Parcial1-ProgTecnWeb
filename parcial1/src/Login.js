import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNextStep = () => {
    if (step === 1) {
      // Validar el formato de correo electrónico
      if (!isValidEmail(email)) {
        setEmailError('Ingrese un correo electrónico válido.');
      } else {
        setEmailError('');
        setStep(2);
      }
    } else if (step === 2) {
      // Validar la contraseña (mínimo 6 caracteres)
      if (password.length < 6) {
        setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setPasswordError('');
        // Aquí puedes realizar la lógica de autenticación
        // Por ejemplo, puedes enviar una solicitud GET para obtener datos del archivo JSON.
        console.log('Email:', email);
        console.log('Contraseña:', password);
        // Lógica de autenticación aquí
      }
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                {step === 1 ? 'Acceder' : 'Contraseña'}
              </h2>
              {step === 1 ? (
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Ingrese su correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
              ) : (
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
              )}
              <button
                className="btn btn-primary btn-block"
                onClick={handleNextStep}
              >
                {step === 1 ? 'Siguiente' : 'Iniciar Sesión'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
