const output = (msg, clr) => {
  const txt = document.getElementById("console-output");
  if (!txt) return;
  txt.style.color = clr;
  txt.innerText = msg;
};

const changeTabTitle = () => {
  const input = document.getElementById("userinput");
  if (!input) return;
  if (input.value == "") {
    window.localStorage.removeItem("title");
    output("No title entered. Default applied, refresh to see changes", "red");
  } else {
    window.localStorage.setItem("title", input.value);
    window.document.title = input.value;
    output("Title change successful", "green");
  }
  input.value = "";
};

const changeTabIcon = () => {
  const input = document.getElementById("userinput");
  if (!input) return;
  if (input.value === "") {
    document.querySelector("link[rel*='icon']").href = "";
    window.localStorage.removeItem("icon");
    output("No image entered. Default applied, refresh to see changes", "red");
  } else if (validURL(input.value)) {
    document.querySelector("link[rel*='icon']").href = input.value;
    window.localStorage.setItem("icon", input.value);
    output("Icon change successful", "green");
  } else {
    output("Icon change failed. Make sure you are using a valid URL", "red");
  }
  input.value = "";
};

const validURL = (str) => {
  const exp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const reg = new RegExp(exp);
  return !!reg.test(str);
};

const resetTabSettings = () => {
  let items = ["icon", "title"];
  items.forEach((item) => window.localStorage.removeItem(item));
  window.location.reload();
};

function applyUrl(url, title) {
  const input = document.getElementById("userinput");
  if (!input) return;
  input.value = url;
  changeTabIcon();
  input.value = title;
  changeTabTitle();
  output("Preset applied successfully!", "green");
}

const createAboutBlank = () => {
  const url = document.getElementById("url-target");
  if (!url) return;
  if (!url.value.startsWith("https://") && !url.value.startsWith("http://")) {
    url.value = `https://${url.value.split("https://").pop()}`;
  } else if (url.value.startsWith("http://")) {
    url.value = `https://${url.value.split("http://").pop()}`;
  }
  const win = window.open();
  if (!win) return;
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  const iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = url.value;
  win.document.body.appendChild(iframe);
};