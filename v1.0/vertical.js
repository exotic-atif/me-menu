window.addEventListener("DOMContentLoaded", function() {
  // Load Font Awesome 6 Free via trusted CDN
  if (!document.getElementById('fa-cdn')) {
    const faLink = document.createElement("link");
    faLink.id = "fa-cdn";
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
    document.head.appendChild(faLink);
  }

  const container = document.createElement("div");
  container.innerHTML = `
    <div id="atifWidget" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;">
      <div id="atifMenu" style="position: absolute; bottom: 30px; right: 4px; display: flex; flex-direction: column-reverse; align-items: flex-end;">
        <a href='https://www.youtube.com/@exotic_atif' target='_blank' title='YouTube' style='background:#FF0000'><i class='fab fa-youtube'></i></a>
        <a href='https://www.instagram.com/exotic_atif' target='_blank' title='Instagram' style='background:#C13584'><i class='fab fa-instagram'></i></a>
        <a href='https://www.facebook.com/ExoticAtif/' target='_blank' title='Facebook' style='background:#1877F2'><i class='fab fa-facebook-f'></i></a>
        <a href='https://github.com/exotic-atif' target='_blank' title='GitHub' style='background:#24292E'><i class='fab fa-github'></i></a>
        <a href='https://www.snapchat.com/add/exotic_atif' target='_blank' title='Snapchat' style='background:#E6C200; color:#000;'><i class='fab fa-snapchat-ghost'></i></a>
        <a href='https://telegram.me/exotic_atif' target='_blank' title='Telegram' style='background:#0088CC'><i class='fab fa-telegram'></i></a>
        <a href='mailto:mratif00007@gmail.com' title='Email' style='background:#444'><i class='fas fa-envelope'></i></a>
      </div>

      <button id="atifToggle" style="background-color: #111; color: #fff; border: none; border-radius: 50%; width: 56px; height: 56px; font-size: 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: all 0.4s ease;">
        <i class="fas fa-face-grin-wink"></i>
      </button>
    </div>
  `;
  document.body.appendChild(container);

  const toggle = container.querySelector("#atifToggle");
  const menu = container.querySelector("#atifMenu");
  const buttons = Array.from(menu.querySelectorAll("a")).reverse();

  // initial style
  buttons.forEach((btn) => {
    Object.assign(btn.style, {
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      color: "#fff",
      textDecoration: "none",
      boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
      position: "absolute",
      bottom: "0",
      right: "0",
      opacity: "0",
      transform: "translateY(0)",
      fontSize: "20px",
      zIndex: 1,
      transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)"
    });
  });

  let open = false;

  toggle.addEventListener("click", () => {
    open = !open;

    // Animate toggle
    toggle.style.transform = open ? "rotate(360deg)" : "rotate(0deg)";
    toggle.style.backgroundColor = open ? "#e02424" : "#111";
    toggle.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-face-grin-wink"></i>';

    if (open) {
      buttons.forEach((btn, i) => {
        setTimeout(() => {
          btn.style.display = "flex";      // first unhide
          btn.style.opacity = "0";          // start transparent
          btn.style.transform = `translateY(0)`; 

          // Force reflow to ensure animation triggers
          btn.getBoundingClientRect();

          // Animate to visible
          btn.style.opacity = "1";
          btn.style.transform = `translateY(-${(i + 1) * 60}px)`;
        }, i * 70);
      });
    } else {
      buttons.forEach((btn, i) => {
        setTimeout(() => {
          btn.style.opacity = "0";
          btn.style.transform = "translateY(0)";
          setTimeout(() => btn.style.display = "none", 400); // hide after animation
        }, (buttons.length - i - 1) * 70);
      });
    }
  });
});
