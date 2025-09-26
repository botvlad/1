import React, { useState } from "react";
import games from "./data/games";
import GameBot from "./components/GameBot";

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="p-6 font-sans">
      {!selectedGame ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Выберите игру</h1>
          <div className="grid grid-cols-2 gap-4">
            {games.map((game) => (
              <div
                key={game.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedGame(game)}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-32 h-32 object-cover mx-auto rounded-lg"
                />
                <h2 className="text-center mt-2 font-semibold">{game.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setSelectedGame(null)}
          >
            ⬅ Назад
          </button>
          <GameBot game={selectedGame} />
        </div>
      )}
    </div>
  );
}
