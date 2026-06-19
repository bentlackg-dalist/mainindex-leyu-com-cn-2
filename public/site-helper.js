const CONFIG = {
  siteUrl: "https://mainindex-leyu.com.cn",
  keyword: "乐鱼体育",
  seed: "864490f8c65688d6"
};

function createCard({ title, description, badgeText }) {
  const card = document.createElement("div");
  card.className = "site-card";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = badgeText || "提示";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const desc = document.createElement("p");
  desc.textContent = description;

  card.append(badge, heading, desc);
  return card;
}

function createBadge(keyword) {
  const el = document.createElement("span");
  el.className = "keyword-badge";
  el.textContent = keyword;
  return el;
}

function buildAccessNotice(url) {
  const notice = document.createElement("div");
  notice.className = "access-notice";

  const icon = document.createElement("span");
  icon.textContent = "ℹ️";
  icon.style.marginRight = "8px";

  const link = document.createElement("a");
  link.href = url;
  link.textContent = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const text = document.createTextNode(" 访问地址：");

  notice.append(icon, text, link);
  return notice;
}

function initPageHelpers() {
  const container = document.createElement("div");
  container.id = "site-helper-root";
  container.style.cssText = `
    max-width: 720px;
    margin: 2rem auto;
    padding: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #f9fafb;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  `;

  const title = document.createElement("h2");
  title.textContent = "⚡ 页面助手";
  title.style.marginTop = "0";

  const cardsWrapper = document.createElement("div");
  cardsWrapper.style.display = "flex";
  cardsWrapper.style.flexDirection = "column";
  cardsWrapper.style.gap = "1rem";

  const card1 = createCard({
    title: "欢迎使用",
    description: "本页面向您提供关于" + CONFIG.keyword + "的快速指引与操作提示。",
    badgeText: "信息"
  });
  const card2 = createCard({
    title: "关键词概览",
    description: "当前核心关键词已标记，您可点击徽章了解更多。",
    badgeText: "关键词"
  });
  const card3 = createCard({
    title: "访问链接",
    description: "下方提供直达地址，建议使用现代浏览器打开。",
    badgeText: "链接"
  });

  cardsWrapper.append(card1, card2, card3);

  const badgeRow = document.createElement("div");
  badgeRow.style.margin = "1rem 0 0.5rem";
  badgeRow.style.display = "flex";
  badgeRow.style.gap = "8px";
  badgeRow.style.flexWrap = "wrap";

  const badges = CONFIG.keyword.split(" ");
  badges.forEach(kw => {
    if (kw.trim()) {
      badgeRow.appendChild(createBadge(kw.trim()));
    }
  });

  const notice = buildAccessNotice(CONFIG.siteUrl);

  container.append(title, cardsWrapper, badgeRow, notice);
  document.body.appendChild(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageHelpers);
} else {
  initPageHelpers();
}