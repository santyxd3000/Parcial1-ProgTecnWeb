import React from 'react';
import './App.css'; // Asegúrate de ajustar la ruta a tu archivo de estilos si es necesario
import Login from './Login'; // Importa el componente Login


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h2 className="text-sm">Acceder</h2>
    <h3 className="text-sm">Usa tu cuenta de Unialpes</h3>
    </header>
      <main>
        <Login /> {/* Renderiza el componente Login aquí */}
      </main>
    </div>
  );
}

export default App;


