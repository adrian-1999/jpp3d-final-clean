import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Tu idea al alcance</h1>
        <p className="text-xl">Pequeñas piezas para un gran futuro</p>
      </div>

      <form className="bg-white text-black p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Enviar Pedido</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="descripcion"
          placeholder="Describe tu diseño o necesidad"
          className="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>

        <input
          type="file"
          name="archivo"
          className="w-full p-2"
          accept=".stl,.jpg,.jpeg,.png"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  );
}

export default App;
