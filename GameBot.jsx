import React, { useState } from "react";
import dayjs from "dayjs";

export default function GameBot({ game }) {
  const [signal, setSignal] = useState(null);
  const [bot, setBot] = useState(null);

  const generateSignal = () => {
    switch (game.id) {
      case "aviator":
        return Math.random() > 0.5
          ? `🎯 Вход — цель ${(Math.random() * 3 + 1).toFixed(2)}x`
          : "⏸ Пропуск раунда";
      case "mines":
        return Math.random() > 0.5
          ? "✅ Безопасная клетка"
          : "💣 Осторожно, мина!";
      case "luckyjet":
        return `🚀 Старт, цель ${(Math.random() * 2 + 1).toFixed(2)}x`;
      case "jetx":
        return Math.random() > 0.5 ? "📡 Вход в раунд!" : "❌ Пропуск";
      case "sweetbonanza":
        return Math.random() > 0.5
          ? "🍬 Ждём сладкий спин"
          : "⏸ Пропуск спина";
      case "bigbass":
        return Math.random() > 0.5
          ? "🎣 Закидываем удочку!"
          : "🐟 Ждём следующего улова";
      default:
        return "🤖 Нет данных";
    }
  };

  const startBot = () => {
    if (bot) return;
    const newBot = setInterval(() => {
      setSignal({
        message: generateSignal(),
        time: dayjs().format("HH:mm:ss"),
      });
    }, 10000);
    setBot(newBot);
  };

  const stopBot = () => {
    clearInterval(bot);
    setBot(null);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <img
        src={game.image}
        alt={game.name}
        className="w-40 h-40 object-cover rounded-xl mb-2"
      />
      <h1 className="text-xl font-bold">{game.name}</h1>
      <p className="text-gray-500">{game.type}</p>

      <div className="mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={startBot}
        >
          ▶ Запустить бота
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={stopBot}
        >
          ⏹ Остановить
        </button>
      </div>

      <div className="mt-6 p-4 bg-slate-100 rounded-lg w-full text-center">
        {signal ? (
          <>
            <p className="text-lg font-semibold">{signal.message}</p>
            <p className="text-xs text-gray-500">{signal.time}</p>
          </>
        ) : (
          <p className="text-gray-500">Нет сигнала</p>
        )}
      </div>
    </div>
  );
}
