// Scroll hide/show for contact button
let lastScroll = 0;
const btn = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) btn.classList.add('hide');
  else btn.classList.remove('hide');
  lastScroll = currentScroll;
});

// Main translations for text
const translations = {
  en: {
    signin: "sign-in/login",
    missionsTitle: "Our Missions:",
    missionsList: "➤ Healthcare without borders.<br>➤ Healthcare in your language.<br>➤ Seamless on weak networks.<br>➤ All your health in one place.",
    circle1: "Cardiologist",
    circle2: "Dermatologist",
    circle3: "Pediatrician",
    circle4: "Gynecologist",
    circle5: "Neurologist"
  },
  hi: {
    signin: "साइन-इन / लॉगिन",
    missionsTitle: "हमारे उद्देश्य:",
    missionsList: "➤ बिना सीमाओं के स्वास्थ्य सेवा।<br>➤ आपकी भाषा में स्वास्थ्य सेवा।<br>➤ कमजोर नेटवर्क पर भी सुगम।<br>➤ आपके सारे स्वास्थ्य एक ही जगह।",
    circle1: "हृदय रोग विशेषज्ञ",
    circle2: "त्वचा रोग विशेषज्ञ",
    circle3: "बाल रोग विशेषज्ञ",
    circle4: "स्त्री रोग विशेषज्ञ",
    circle5: "स्नायु रोग विशेषज्ञ"
  },
  te: {
    signin: "సైన్-ఇన్ / లాగిన్",
    missionsTitle: "మా లక్ష్యాలు:",
    missionsList: "➤ సరిహద్దులు లేని ఆరోగ్య సేవలు.<br>➤ మీ భాషలో ఆరోగ్య సేవలు.<br>➤ బలహీన నెట్‌వర్క్‌లో కూడా సులభం.<br>➤ మీ ఆరోగ్యం ఒకే చోట.",
    circle1: "కార్డియాలజిస్ట్",
    circle2: "డెర్మటాలజిస్ట్",
    circle3: "పీడియాట్రిషియన్",
    circle4: "గైనకాలజిస్ట్",
    circle5: "న్యూరాలజిస్ట్"
  },
  pa: {
    signin: "ਸਾਈਨ-ਇਨ / ਲਾਗਿਨ",
    missionsTitle: "ਸਾਡੇ ਮਿਸ਼ਨ:",
    missionsList: "➤ ਬਿਨਾਂ ਸੀਮਾਵਾਂ ਦੇ ਸਿਹਤ ਸੇਵਾਵਾਂ।<br>➤ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਿਹਤ ਸੇਵਾਵਾਂ।<br>➤ ਕਮਜ਼ੋਰ ਨੈੱਟਵਰਕ ’ਤੇ ਵੀ ਆਸਾਨ।<br>➤ ਤੁਹਾਡਾ ਸਾਰਾ ਸਿਹਤ ਇੱਕ ਹੀ ਥਾਂ ਤੇ।",
    circle1: "ਕਾਰਡੀਓਲੋਜਿਸਟ",
    circle2: "ਡਰਮੈਟੋਲੋਜਿਸਟ",
    circle3: "ਪੀਡੀਆਟ੍ਰੀਸ਼ਨ",
    circle4: "ਗਾਇਨਕੋਲੋਜਿਸਟ",
    circle5: "ਨਿਊਰੋਲੋਜਿਸਟ"
  }
};

// Language selector
const langSelect = document.querySelector(".lang-btn");

// Change language function
function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  localStorage.setItem("selectedLang", lang);
}

// Load saved language or default
const savedLang = localStorage.getItem("selectedLang") || "en";
langSelect.value = savedLang;
changeLanguage(savedLang);

// Listen for changes
langSelect.addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

// Login dropdown
document.getElementById('login-btn').addEventListener('click', function(e){
  e.stopPropagation();
  const dropdown = document.getElementById('login-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Signup dropdown
document.getElementById('signup-btn').addEventListener('click', function(e){
  e.stopPropagation();
  const dropdown = document.getElementById('signup-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close both dropdowns if clicked outside
window.addEventListener('click', function(){
  document.getElementById('login-dropdown').style.display = 'none';
  document.getElementById('signup-dropdown').style.display = 'none';
});

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}


