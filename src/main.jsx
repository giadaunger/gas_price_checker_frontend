import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center min-h-screen w-2/3">
      <div className="text-center pb-4">
        <h2 className="text-4xl pb-2">Save More, Drive Smarter!</h2>
        <p className="text-xl">Join our SMS list and get instant alerts when gas prices drop.</p>
        <button className="p-4 bg-blue-500 text-white rounded mt-8 text-xl">Join SMS list!</button>
      </div>
      <div className="mt-12 w-1/2">
        <h2 className="text-center text-2xl pb-4">Current gas prices</h2>
        <div className="flex flex-col gap-8">
            <div className="p-4 bg-blue-300 rounded text-center">
                <h2 className="text-xl">Gas station</h2>
                <p className="text-lg">Price</p>
            </div>
            <div className="p-4 bg-blue-300 rounded text-center">
                <h2 className="text-xl">Gas station</h2>
                <p className="text-lg">Price</p>
            </div>
            <div className="p-4 bg-blue-300 rounded text-center">
                <h2 className="text-xl">Gas station</h2>
                <p className="text-lg">Price</p>
            </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);