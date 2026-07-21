const APP_PASSWORD = "Brah2026";

const recipes = [
  { id: 1, title: "Bananen-Hafer-Pancakes", age: 1, meals: ["fruehstueck","snack"], tags: ["vegetarisch","ohne-milch","ohne-nuesse"], time: 15, emoji: "🥞", description: "Weiche Pancakes ohne zugesetzten Zucker, ideal für kleine Hände.", url: "https://www.google.com/search?q=Bananen+Hafer+Pancakes+Kinder+ab+1+Jahr" },
  { id: 2, title: "Kartoffel-Möhren-Taler", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","ohne-ei","ohne-nuesse"], time: 25, emoji: "🥕", description: "Milde, weiche Gemüsetaler mit Kartoffeln und Möhren.", url: "https://www.google.com/search?q=Kartoffel+M%C3%B6hren+Taler+Kinder+ab+1+Jahr" },
  { id: 3, title: "Linsen-Gemüse-Bolognese", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","ohne-nuesse"], time: 30, emoji: "🍝", description: "Eine milde Bolognese mit roten Linsen und fein geschnittenem Gemüse.", url: "https://www.google.com/search?q=Linsen+Gem%C3%BCse+Bolognese+Kinder" },
  { id: 4, title: "Cremige Brokkoli-Kartoffel-Suppe", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","glutenfrei","ohne-nuesse"], time: 30, emoji: "🥦", description: "Sanfte Gemüsesuppe mit weicher Konsistenz und wenigen Zutaten.", url: "https://www.google.com/search?q=Brokkoli+Kartoffel+Suppe+Kleinkind" },
  { id: 5, title: "Apfel-Zimt-Porridge", age: 1, meals: ["fruehstueck"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","ohne-nuesse"], time: 10, emoji: "🥣", description: "Warmes Haferfrühstück mit weich gedünstetem Apfel.", url: "https://www.google.com/search?q=Apfel+Porridge+Kleinkind+ab+1" },
  { id: 6, title: "Reis mit Erbsen und mildem Hähnchen", age: 1, meals: ["mittagessen","abendessen"], tags: ["ohne-ei","ohne-milch","glutenfrei","ohne-nuesse"], time: 30, emoji: "🍚", description: "Ein mildes Familiengericht mit weichem Reis, Erbsen und zartem Hähnchen.", url: "https://www.google.com/search?q=Reis+Erbsen+H%C3%A4hnchen+Kleinkind" },
  { id: 7, title: "Süßkartoffel-Kichererbsen-Stampf", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","glutenfrei","ohne-nuesse"], time: 25, emoji: "🍠", description: "Cremiger Stampf mit pflanzlichem Eiweiß und natürlicher Süße.", url: "https://www.google.com/search?q=S%C3%BC%C3%9Fkartoffel+Kichererbsen+Stampf+Kind" },
  { id: 8, title: "Gemüse-Couscous", age: 2, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","ohne-nuesse"], time: 20, emoji: "🥗", description: "Schnelles Couscousgericht mit fein geschnittenem, weichem Gemüse.", url: "https://www.google.com/search?q=Gem%C3%BCse+Couscous+Kinder" },
  { id: 9, title: "Eier-Gemüse-Muffins", age: 2, meals: ["fruehstueck","snack","abendessen"], tags: ["vegetarisch","glutenfrei","ohne-nuesse"], time: 30, emoji: "🧁", description: "Herzhafte, weiche Muffins mit Ei und Gemüse – gut für unterwegs.", url: "https://www.google.com/search?q=Eier+Gem%C3%BCse+Muffins+Kinder" },
  { id: 10, title: "Milder Lachs mit Kartoffelstampf", age: 1, meals: ["mittagessen","abendessen"], tags: ["ohne-ei","glutenfrei","ohne-nuesse"], time: 35, emoji: "🐟", description: "Zarter Lachs mit weichem Kartoffelstampf und gedünstetem Gemüse.", url: "https://www.google.com/search?q=Lachs+Kartoffelstampf+Kleinkind" },
  { id: 11, title: "Bananen-Joghurt-Becher", age: 1, meals: ["fruehstueck","snack"], tags: ["vegetarisch","ohne-ei","glutenfrei","ohne-nuesse"], time: 5, emoji: "🍌", description: "Schneller Snack aus Naturjoghurt und zerdrückter Banane.", url: "https://www.google.com/search?q=Bananen+Joghurt+Kleinkind" },
  { id: 12, title: "Zucchini-Nudeln mit Tomatensoße", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","ohne-nuesse"], time: 25, emoji: "🍅", description: "Milde Tomatensoße mit fein geriebener Zucchini und weichen Nudeln.", url: "https://www.google.com/search?q=Zucchini+Tomaten+Nudeln+Kleinkind" },
  { id: 13, title: "Polenta mit Gemüse", age: 1, meals: ["mittagessen","abendessen"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","glutenfrei","ohne-nuesse"], time: 20, emoji: "🌽", description: "Cremige Polenta mit mildem, weich gegartem Gemüse.", url: "https://www.google.com/search?q=Polenta+Gem%C3%BCse+Kleinkind" },
  { id: 14, title: "Birnen-Hafer-Snack", age: 1, meals: ["snack","fruehstueck"], tags: ["vegetarisch","vegan","ohne-ei","ohne-milch","ohne-nuesse"], time: 15, emoji: "🍐", description: "Weicher Snack aus reifer Birne und Haferflocken.", url: "https://www.google.com/search?q=Birne+Hafer+Snack+Kleinkind" }
];

const screens = {
  welcome: document.getElementById('welcomeScreen'),
  password: document.getElementById('passwordScreen'),
  app: document.getElementById('mainApp')
};
function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[name].classList.add('active');
}

const memoAudio = document.getElementById('memoAudio');
const memoStatus = document.getElementById('memoStatus');
const continueBtn = document.getElementById('continueBtn');
document.getElementById('playMemoBtn').addEventListener('click', async () => {
  try {
    memoAudio.currentTime = 0;
    await memoAudio.play();
    memoStatus.textContent = 'Die Notiz wird abgespielt. ❤️';
    memoStatus.className = 'status-message success';
    continueBtn.classList.remove('hidden');
  } catch (error) {
    memoStatus.textContent = 'Die Audiodatei konnte nicht abgespielt werden. Bitte ersetze assets/notiz.mp3 durch deine Aufnahme.';
    memoStatus.className = 'status-message error';
    continueBtn.classList.remove('hidden');
  }
});
continueBtn.addEventListener('click', () => showScreen('password'));

const passwordInput = document.getElementById('passwordInput');
document.getElementById('togglePassword').addEventListener('click', () => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});
function login() {
  const status = document.getElementById('loginStatus');
  if (passwordInput.value === APP_PASSWORD) {
    status.textContent = 'Zugang geöffnet.';
    status.className = 'status-message success';
    setTimeout(() => showScreen('app'), 300);
  } else {
    status.textContent = 'Das Passwort ist nicht richtig.';
    status.className = 'status-message error';
  }
}
document.getElementById('loginBtn').addEventListener('click', login);
passwordInput.addEventListener('keydown', event => { if (event.key === 'Enter') login(); });
document.getElementById('logoutBtn').addEventListener('click', () => {
  passwordInput.value = '';
  showScreen('welcome');
});

const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(btn => btn.addEventListener('click', () => {
  tabs.forEach(item => item.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById(btn.dataset.tab === 'single' ? 'singlePanel' : 'weeklyPanel').classList.add('active');
}));

function getSelectedTags() {
  return [...document.querySelectorAll('.diet-filter:checked')].map(input => input.value);
}
function filterRecipes(age, meal, maxTime, tags = []) {
  return recipes.filter(recipe => {
    const ageOk = recipe.age <= Number(age);
    const mealOk = meal === 'all' || recipe.meals.includes(meal);
    const timeOk = recipe.time <= Number(maxTime);
    const tagsOk = tags.every(tag => recipe.tags.includes(tag));
    return ageOk && mealOk && timeOk && tagsOk;
  });
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]; }
function prettyTag(tag) {
  const map = { vegetarisch: 'ohne Fleisch', vegan: 'vegan', 'ohne-ei': 'ohne Ei', 'ohne-milch': 'ohne Milch', glutenfrei: 'glutenfrei', 'ohne-nuesse': 'ohne Nüsse' };
  return map[tag] || tag;
}
function renderRecipe(recipe) {
  const result = document.getElementById('recipeResult');
  result.className = 'result-card';
  result.innerHTML = `
    <div class="recipe-hero">
      <div class="recipe-emoji" aria-hidden="true">${recipe.emoji}</div>
      <div><p class="eyebrow">Deine Empfehlung</p><h3>${recipe.title}</h3></div>
    </div>
    <div class="badges">
      <span class="badge">ab ${recipe.age} Jahr${recipe.age > 1 ? 'en' : ''}</span>
      <span class="badge">${recipe.time} Minuten</span>
      ${recipe.tags.slice(0,4).map(tag => `<span class="badge">${prettyTag(tag)}</span>`).join('')}
    </div>
    <p class="recipe-description">${recipe.description}</p>
    <div class="recipe-actions">
      <a class="primary-btn recipe-link" href="${recipe.url}" target="_blank" rel="noopener noreferrer">Zum Gericht ↗</a>
      <button id="rerollBtn" class="secondary-btn" type="button">Anderes Gericht</button>
    </div>`;
  document.getElementById('rerollBtn').addEventListener('click', chooseRandomRecipe);
}
function chooseRandomRecipe() {
  const matches = filterRecipes(
    document.getElementById('ageFilter').value,
    document.getElementById('mealFilter').value,
    document.getElementById('timeFilter').value,
    getSelectedTags()
  );
  if (!matches.length) {
    const result = document.getElementById('recipeResult');
    result.className = 'result-card empty-state';
    result.innerHTML = '<div class="empty-icon">🤔</div><h3>Keine passende Kombination</h3><p>Lockere bitte einen Filter oder erhöhe die Zubereitungszeit.</p>';
    return;
  }
  renderRecipe(pickRandom(matches));
}
document.getElementById('randomRecipeBtn').addEventListener('click', chooseRandomRecipe);
document.getElementById('resetFiltersBtn').addEventListener('click', () => {
  document.getElementById('ageFilter').value = '1';
  document.getElementById('mealFilter').value = 'all';
  document.getElementById('timeFilter').value = '999';
  document.querySelectorAll('.diet-filter').forEach(input => input.checked = false);
});

const weeklyModeInputs = document.querySelectorAll('input[name="weeklyMode"]');
weeklyModeInputs.forEach(input => input.addEventListener('change', () => {
  document.querySelectorAll('.choice-card').forEach(card => card.classList.remove('selected'));
  input.closest('.choice-card').classList.add('selected');
}));

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function createWeeklyPlan() {
  const mode = document.querySelector('input[name="weeklyMode"]:checked').value;
  const diet = document.getElementById('weeklyDietFilter').value;
  const tags = diet === 'all' ? [] : [diet];
  const pool = filterRecipes(document.getElementById('weeklyAgeFilter').value, 'all', document.getElementById('weeklyTimeFilter').value, tags)
    .filter(recipe => recipe.meals.includes('mittagessen') || recipe.meals.includes('abendessen'));
  const result = document.getElementById('weeklyResult');
  if (pool.length < 3) {
    result.className = 'weekly-result empty-state';
    result.innerHTML = '<div class="empty-icon">🤔</div><h3>Zu wenige passende Gerichte</h3><p>Bitte lockere einen Filter.</p>';
    return;
  }
  const days = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
  result.className = 'weekly-result';
  if (mode === 'surprise') {
    let choices = shuffle(pool);
    while (choices.length < 7) choices = choices.concat(shuffle(pool));
    choices = choices.slice(0,7);
    result.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Fertig</p><h3>Euer Wochenplan</h3></div><button id="newPlanBtn" class="text-btn" type="button">Neu mischen</button></div><div class="day-list">${days.map((day,i) => `<article class="day-card"><h4>${day}</h4><p>${choices[i].emoji} <strong>${choices[i].title}</strong> · ${choices[i].time} Min.</p><p><a href="${choices[i].url}" target="_blank" rel="noopener noreferrer">Zum Gericht ↗</a></p></article>`).join('')}</div>`;
    document.getElementById('newPlanBtn').addEventListener('click', createWeeklyPlan);
  } else {
    result.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Auswahlmodus</p><h3>Wähle für jeden Tag</h3></div></div><div class="day-list">${days.map((day,i) => {
      const opts = shuffle(pool).slice(0, Math.min(3,pool.length));
      return `<article class="day-card"><h4>${day}</h4><div class="day-options">${opts.map((r,j) => `<label><input type="radio" name="day-${i}" ${j===0?'checked':''}> ${r.emoji} ${r.title}</label>`).join('')}</div></article>`;
    }).join('')}</div>`;
  }
}
document.getElementById('createPlanBtn').addEventListener('click', createWeeklyPlan);
