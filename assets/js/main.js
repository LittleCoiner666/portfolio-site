/* 渲染 data.js 的数据 + 页面交互。加内容不用改这里。 */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* ── 站点信息 ── */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      /* 旧浏览器/非安全上下文兜底 */
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
      } catch (e2) {
        return false;
      }
    }
  }

  function makeCopyCard(k, value) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "contact-item";
    el.title = "点击复制";
    el.innerHTML =
      '<span class="k">' + k + '</span><span class="v">' + value +
      '</span><span class="copy-hint mono">复制</span>';
    el.addEventListener("click", async () => {
      const hint = el.querySelector(".copy-hint");
      const ok = await copyText(value);
      el.classList.add("copied");
      hint.textContent = ok ? "已复制 ✓" : "复制失败";
      setTimeout(() => {
        el.classList.remove("copied");
        hint.textContent = "复制";
      }, 1600);
    });
    return el;
  }

  function makeQrCard(src, label) {
    const fig = document.createElement("figure");
    fig.className = "qr-card";
    fig.innerHTML =
      '<img src="' + src + '" alt="' + label + '">' +
      '<figcaption class="mono">' + label + "</figcaption>";
    return fig;
  }

  function renderSite() {
    document.title = SITE.name + " · 3D美术作品集";
    $(".brand").firstChild.textContent = SITE.name;
    $("#year").textContent = new Date().getFullYear();
    $("#icp").textContent = SITE.icp ? "· " + SITE.icp : "";

    const row = $("#contact-row");
    row.innerHTML = "";

    const cards = document.createElement("div");
    cards.className = "contact-cards";
    cards.appendChild(makeCopyCard("邮箱", SITE.email));
    if (SITE.wechat) cards.appendChild(makeCopyCard("微信", SITE.wechat));
    if (SITE.qq) cards.appendChild(makeCopyCard("QQ", SITE.qq));
    row.appendChild(cards);

    const qrs = document.createElement("div");
    qrs.className = "qr-row";
    if (SITE.wechatQr) qrs.appendChild(makeQrCard(SITE.wechatQr, "微信扫一扫"));
    if (SITE.qqQr) qrs.appendChild(makeQrCard(SITE.qqQr, "QQ扫一扫"));
    if (qrs.children.length) row.appendChild(qrs);
  }

  /* ── 接单种类 ── */
  function renderServices() {
    $("#services-grid").innerHTML = SERVICES.map(
      (s) =>
        '<article class="service-card reveal"><h3>' +
        s.title + "</h3><p>" + s.desc + "</p></article>"
    ).join("");
  }

  /* ── 3D 作品 ── */
  function renderModels() {
    $("#models-grid").innerHTML = MODELS.map(
      (m) =>
        '<article class="model-card reveal">' +
        '<span class="handle h-tl"></span><span class="handle h-tr"></span>' +
        '<span class="handle h-bl"></span><span class="handle h-br"></span>' +
        '<model-viewer src="' + m.file + '" alt="' + m.title + '" ' +
          'camera-controls auto-rotate rotation-per-second="28deg" ' +
          (m.autoplay ? "autoplay " : "") +
          'camera-orbit="' + (m.orbit || "-30deg 75deg auto") + '" ' +
          'shadow-intensity="1" exposure="1.05"></model-viewer>' +
        '<div class="model-info"><h3>' + m.title +
        (m.en ? "<em>" + m.en + "</em>" : "") + "</h3>" +
        (m.desc ? "<p>" + m.desc + "</p>" : "") +
        (m.meta ? '<p class="model-meta">' + m.meta + "</p>" : "") +
        "</div></article>"
    ).join("");

    document.querySelectorAll(".model-card model-viewer").forEach((mv) => {
      const initOrbit = mv.getAttribute("camera-orbit");
      mv.addEventListener("dblclick", () => {
        mv.cameraTarget = "auto";
        mv.fieldOfView = "auto";
        if (initOrbit) mv.cameraOrbit = initOrbit;
        if (mv.resetTurntableRotation) mv.resetTurntableRotation();
      });
      mv.addEventListener("error", () => {
        const fail = document.createElement("div");
        fail.className = "viewer-fail";
        fail.textContent = "// 模型加载失败：" + mv.getAttribute("src");
        mv.replaceWith(fail);
      });
    });
  }

  /* ── Roblox 游戏 ── */
  function renderGames() {
    $("#games-grid").innerHTML = GAMES.map(
      (g) =>
        '<article class="game-card reveal">' +
        '<div class="game-cover">' +
        (g.cover ? '<img src="' + g.cover + '" alt="' + g.title + '">' : "// 游戏宣传图待补") +
        "</div>" +
        '<div class="game-body"><h3>' + g.title +
        (g.role ? '<span class="role">' + g.role + "</span>" : "") + "</h3>" +
        "<p>" + g.desc + "</p>" +
        '<a class="btn btn-ghost" href="' + g.url + '" target="_blank" rel="noopener">进入游戏 ↗</a>' +
        "</div></article>"
    ).join("");
  }

  /* ── 插件与软件 ── */
  function renderTools() {
    $("#tools-grid").innerHTML = TOOLS.map(
      (t) =>
        '<article class="tut-card reveal"><h3>' + t.name +
        '<span class="role">' + t.platform + "</span></h3>" +
        "<p>" + t.desc + '</p><p class="tut-stats mono">' + t.meta + "</p>" +
        (t.url
          ? '<a class="btn btn-ghost" href="' + t.url + '" target="_blank" rel="noopener">' + (t.cta || "了解详情 ↗") + "</a>"
          : "") +
        "</article>"
    ).join("");
  }

  /* ── 教程与课程 ── */
  function renderTutorials() {
    $("#tutorials-grid").innerHTML = TUTORIALS.map(
      (t) =>
        '<article class="tut-card reveal"><h3>' + t.title +
        (t.role ? '<span class="role">' + t.role + "</span>" : "") +
        "</h3><p>" + t.desc + '</p><p class="tut-stats mono">' + t.stats + "</p>" +
        '<a class="btn btn-ghost" href="' + t.url + '" target="_blank" rel="noopener">' + t.cta + "</a></article>"
    ).join("");
  }

  /* ── 外链 ── */
  const ICONS = {
    sketchfab:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5z"/><path d="M12 22V12M3 7l9 5 9-5" opacity=".55"/></svg>',
    cgmodel:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" opacity=".55"/></svg>',
    bilibili:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M7 3l3 3M17 3l-3 3M8 12v3M16 12v3"/></svg>',
  };

  function renderLinks() {
    $("#links-grid").innerHTML = LINKS.map(
      (l) =>
        '<a class="link-card reveal" href="' + l.url + '" target="_blank" rel="noopener">' +
        (ICONS[l.icon] || ICONS.cgmodel) +
        "<div><h3>" + l.name + "</h3><p>" + l.desc + "</p></div>" +
        '<span class="arrow">-></span></a>'
    ).join("");
  }

  /* ── 入场 reveal ── */
  function initReveal() {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  /* ── 顶栏滚动状态 ── */
  function initTopbar() {
    const bar = $("#topbar");
    const onScroll = () => bar.classList.toggle("scrolled", scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  renderSite();
  renderServices();
  renderModels();
  renderGames();
  renderTools();
  renderTutorials();
  renderLinks();
  initReveal();
  initTopbar();
})();
