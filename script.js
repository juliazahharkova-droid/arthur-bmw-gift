
const screens = document.querySelectorAll(".screen");
const counter = document.getElementById("counter");

const openLetterBtn = document.getElementById("openLetterBtn");
const letterContent = document.getElementById("letterContent");
const envelope = document.getElementById("envelope");

const engineBtn = document.getElementById("engineBtn");
const engine = document.getElementById("engine");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

let currentScreen = 0;

function showScreen(index) {
  if (index < 0 || index >= screens.length) return;

  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === index);
  });

  currentScreen = index;

  if (counter) {
    counter.textContent =
      `0${index + 1} / 0${screens.length}`;
  }
}

// Переключение экранов и автоматический переход к музыке
document.querySelectorAll("button[data-next]").forEach((button) => {
  button.addEventListener("click", async () => {
    if (currentScreen === 0) {
      // Останавливаем двигатель
      if (engine) {
        engine.pause();
        engine.currentTime = 0;
      }

      if (engineBtn) {
        engineBtn.textContent = "↗ Start the engine";
      }

      // Запускаем песню
      if (music) {
        try {
          await music.play();

          if (musicBtn) {
            musicBtn.textContent = "♫ Music: on";
          }
        } catch (error) {
          console.log("Не удалось запустить музыку:", error);
        }
      }
    }

    showScreen(currentScreen + 1);
  });
});

// Открытие письма
if (openLetterBtn && letterContent) {
  openLetterBtn.addEventListener("click", () => {
    if (letterContent.hidden) {
      if (envelope) {
        envelope.classList.add("open");
      }

      openLetterBtn.textContent = "Открываем письмо…";
      openLetterBtn.disabled = true;

      setTimeout(() => {
        letterContent.hidden = false;
        openLetterBtn.textContent = "Письмо открыто ♡";
      }, 600);
    }
  });
}

// Звук двигателя — только на первом экране
if (engineBtn && engine) {
  engineBtn.addEventListener("click", async () => {
    if (currentScreen !== 0) return;

    try {
      if (engine.paused) {
        await engine.play();
        engineBtn.textContent = "Выключить звук двигателя";
      } else {
        engine.pause();
        engine.currentTime = 0;
        engineBtn.textContent = "↗ Start the engine";
      }
    } catch (error) {
      console.log("Не удалось включить звук двигателя:", error);
    }
  });
}

// Кнопка управления музыкой
if (musicBtn && music) {
  music.loop = true;

  musicBtn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicBtn.textContent = "♫ Music: on";
      } else {
        music.pause();
        musicBtn.textContent = "♫ Music: off";
      }
    } catch (error) {
      console.log("Не удалось включить музыку:", error);
    }
  });
}

showScreen(0);
