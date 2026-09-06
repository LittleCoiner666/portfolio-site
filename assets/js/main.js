/* 渲染 data.js 的数据 + 页面交互。加内容不用改这里。 */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* ── 站点信息 ── */
  function renderSite() {
    document.title = SITE.name + " · 3D美术作品集";
    $(".brand").firstChild.textContent = SITE.name;
    $("#year").textContent = new Date().getFullYear();
    $("#icp").textContent = SITE.icp ? "· " + SITE.icp : "";

    const row = $("#contact-row");
    row.innerHTML = "";
    const email = document.createElement("a");
    email.className = "contact-item";
    email.href = "mailto:" + SITE.email;
    email.innerHTML = '<span class="k">邮箱</span>' + SITE.email;
    row.appendChild(email);

    const wx = document.createElement("span");
    wx.className = "contact-item";
    wx.innerHTML = '<span class="k">微信</span>' + SITE.wechat;
    row.appendChild(wx);
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
        '<span class="viewer-hint">拖拽旋转 · 滚轮缩放</span>' +
        '<model-viewer src="' + m.file + '" alt="' + m.title + '" ' +
          'camera-controls auto-rotate rotation-per-second="28deg" ' +
          'camera-orbit="' + (m.orbit || "-30deg 75deg auto") + '" ' +
          'shadow-intensity="1" exposure="1.05" ' +
          'interaction-prompt="basic"></model-viewer>' +
        '<div class="model-info"><h3>' + m.title +
        (m.en ? "<em>" + m.en + "</em>" : "") + "</h3>" +
        (m.desc ? "<p>" + m.desc + "</p>" : "") +
        (m.meta ? '<p class="model-meta">' + m.meta + "</p>" : "") +
        "</div></article>"
    ).join("");

    document.querySelectorAll(".model-card model-viewer").forEach((mv) => {
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
  renderLinks();
  initReveal();
  initTopbar();
})();
