import { Routes, Route } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Inicio from '../pages/Inicio';
import Procesadores from '../pages/Procesadores';
import Tarjetas_Madre from '../pages/Tarjetas_Madre';
import RAM from '../pages/RAM';
import Otros from '../pages/Otros';
import TodosProcesadores from '../pages/TodosProcesadores';
import TodosRAM from './TodosRAM.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/procesadores" element={<Procesadores />} />
          <Route path="/Tarjetas_Madre" element={<Tarjetas_Madre />} />
          <Route path="/ram" element={<RAM />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/todosprocesadores" element={<TodosProcesadores />} /> 
          <Route path="/todosram" element={<TodosRAM />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
