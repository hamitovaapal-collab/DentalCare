"use strict";
/* Translations: [English, Русский, Кыргызча] */
const T={
home:["Home","Главная","Башкы бет"],about:["About","О клинике","Клиника тууралуу"],services:["Services","Услуги","Кызматтар"],team:["Our Team","Врачи","Дарыгерлер"],reviews:["Reviews","Отзывы","Пикирлер"],blog:["Blog","Блог","Блог"],contact:["Contact","Контакты","Байланыш"],
book:["Book Appointment","Записаться","Жазылуу"],explore:["Explore Services","Наши услуги","Кызматтарыбыз"],eyebrow:["Healthy smiles, brighter futures","Здоровые улыбки — яркое будущее","Дени сак жылмаюу — жаркын келечек"],
h1:["Exceptional Dental Care for Every Stage of Your Journey","Выдающийся уход за зубами на каждом этапе вашего пути","Ар бир этапта жогорку сапаттагы тиш тейлөө"],
sub:["Personalized dental care, advanced technology and a team dedicated to keeping your smile healthy and confident.","Индивидуальный подход, современные технологии и команда, заботящаяся о вашей здоровой и уверенной улыбке.","Жекече мамиле, заманбап технологиялар жана жылмаюуңуздун ден соолугу үчүн кам көргөн команда."],
f1:["Experienced team","Опытная команда","Тажрыйбалуу команда"],f2:["Modern technology","Современные технологии","Заманбап технология"],f3:["Personalized care","Индивидуальный уход","Жекече тейлөө"],
trust:["Trusted by 5,000+ patients","5 000+ пациентов нам доверяют","5 000+ бейтап ишенет"],
s_a:["Modern Dental Services","Современные услуги","Заманбап кызматтар"],s_a2:["Comprehensive care for a healthy smile","Полный уход за здоровой улыбкой","Дени сак жылмаюу үчүн толук тейлөө"],
s_b:["Convenient Opening Hours","Удобный график","Ыңгайлуу иш убактысы"],s_b2:["Mon–Sat 9:00 – 20:00","Пн–Сб 9:00 – 20:00","Дш–Иш 9:00 – 20:00"],
s_c:["Easy Online Booking","Простая запись онлайн","Онлайн оңой жазылуу"],s_c2:["Quick and simple scheduling","Быстро и просто","Тез жана жөнөкөй"],
ab_t:["The Evolution of Our Clinic and the People Who Made It Possible","Как развивалась наша клиника и люди, которые это сделали","Клиникабыздын өнүгүүсү жана аны түзгөн адамдар"],
ab_p:["We provide high-quality dental care in a comfortable, welcoming environment. Our team uses modern technology and personalized treatment plans to help you achieve a healthy, confident smile.","Мы предлагаем качественную стоматологию в комфортной и дружелюбной атмосфере. Наши врачи используют современные технологии и индивидуальные планы лечения.","Биз ыңгайлуу чөйрөдө сапаттуу стоматологиялык кызмат көрсөтөбүз. Дарыгерлерибиз заманбап технологияларды жана жекече дарылоо пландарын колдонушат."],
st1:["Years of experience","Лет опыта","Жылдык тажрыйба"],st2:["Happy patients","Довольных пациентов","Ыраазы бейтаптар"],st3:["Satisfaction rate","Уровень удовлетворённости","Ыраазычылык деңгээли"],
learn:["Learn More","Подробнее","Кененирээк"],close:["Close","Закрыть","Жабуу"],
sv_t:["Explore the Solutions We Provide","Решения, которые мы предлагаем","Биз сунуштаган чечимдер"],sv_p:["Click any card to see what the treatment includes.","Нажмите на карточку, чтобы узнать подробности.","Кенен маалымат үчүн карточканы басыңыз."],
pr_e:["The patient journey","Путь пациента","Бейтаптын жолу"],pr_t:["A Step-by-Step Guide to Our Dental Care Process","Пошаговое руководство по нашему процессу лечения","Биздин дарылоо процессинин кадамдары"],
tm_t:["Meet Our Dentists","Наши стоматологи","Биздин стоматологдор"],wh_t:["Exceptional Dental Care Tailored to Your Needs","Стоматология, созданная под ваши потребности","Муктаждыгыңызга ылайыкталган тиш тейлөө"],
wh_p:["Your comfort and health are our top priorities. We focus on preventive care and individualized treatment.","Ваш комфорт и здоровье — наши главные приоритеты. Мы делаем упор на профилактику и индивидуальное лечение.","Сиздин ыңгайлуулугуңуз жана ден соолугуңуз — биздин башкы милдет. Профилактикага жана жекече дарылоого басым жасайбыз."],
visit:["Book Your Visit","Записаться на приём","Визитке жазылуу"],rv_t:["Listen to Our Happy Patients","Что говорят наши пациенты","Ыраазы бейтаптарыбыз айтат"],
bl_t:["Our Latest Dental Tips and News","Свежие советы и новости","Акыркы кеңештер жана жаңылыктар"],
ap_e:["Appointment request","Заявка на приём","Кабыл алууга өтүнүч"],ap_t:["Request Your Visit","Оставьте заявку на визит","Визитке өтүнүч калтырыңыз"],
ap_p:["Fill in the form and our coordinator will call you to confirm a time.","Заполните форму — координатор перезвонит и подтвердит время.","Форманы толтуруңуз — координатор чалып, убакытты тастыктайт."],
f_name:["Full name","Имя и фамилия","Аты-жөнү"],f_phone:["Phone","Телефон","Телефон"],f_svc:["Service","Услуга","Кызмат"],f_date:["Preferred date","Желаемая дата","Ыңгайлуу күн"],f_msg:["Message (optional)","Сообщение (необязательно)","Билдирүү (милдеттүү эмес)"],f_send:["Send Request","Отправить заявку","Өтүнүч жөнөтүү"],
e_req:["This field is required","Обязательное поле","Милдеттүү талаа"],e_ph:["Enter a valid phone number","Введите корректный телефон","Туура телефон номерин киргизиңиз"],e_dt:["Choose a future date","Выберите будущую дату","Келечектеги күндү тандаңыз"],
f_ok:["Thank you, {n}! Your request is validated. This demo site has no server, so nothing was actually booked — please call us to confirm.","Спасибо, {n}! Заявка проверена. У демо-сайта нет сервера, запись не создана — позвоните нам для подтверждения.","Рахмат, {n}! Өтүнүч текшерилди. Демо сайтта сервер жок, жазылуу түзүлгөн жок — ырастоо үчүн бизге чалыңыз."],
ct_t:["Visit Our Clinic","Приходите в клинику","Клиникага келиңиз"],addr:["120 Chuy Avenue, Bishkek, Kyrgyzstan","пр. Чуй, 120, Бишкек, Кыргызстан","Чүй проспектиси, 120, Бишкек, Кыргызстан"],
hrs_t:["Opening Hours","Часы работы","Иш убактысы"],hrs:["Mon–Sat 9:00–20:00 · Sun closed","Пн–Сб 9:00–20:00 · Вс выходной","Дш–Иш 9:00–20:00 · Жк дем алыш"],
note:["Sample contact details — replace with your real address, phone and email.","Пример контактов — замените на реальные адрес, телефон и email.","Үлгү байланыш маалыматы — чыныгы дарек, телефон жана email менен алмаштырыңыз."],
map:["Open in Maps","Открыть на карте","Картада ачуу"],tag:["Your healthier smile awaits.","Вас ждёт здоровая улыбка.","Дени сак жылмаюу сизди күтөт."],top:["Back to Top","Наверх","Жогору"],rights:["All rights reserved.","Все права защищены.","Бардык укуктар корголгон."],
vid:["Video tour is not available in this demo — please visit us in person!","Видеоэкскурсии в демо нет — приходите к нам лично!","Демодо видео экскурсия жок — бизге келиңиз!"]
};
/* Content: image, [name], [description] */
const S = [
  ["general", [
    "General Dentistry",
    "Общая стоматология",
    "Жалпы стоматология"
  ], [
    "Routine check-ups, cleanings and fillings for a healthy smile.",
    "Профосмотры, чистка и пломбирование для здоровой улыбки.",
    "Дени сак жылмаюу үчүн текшерүү, тазалоо жана пломба."
  ]],

  ["aesthetic", [
    "Cosmetic Dentistry",
    "Эстетическая стоматология",
    "Эстетикалык стоматология"
  ], [
    "Veneers and smile design to enhance your natural look.",
    "Виниры и дизайн улыбки для естественной красоты.",
    "Винирлер жана жылмаюу дизайны."
  ]],

  ["implantation", [
    "Dental Implants",
    "Имплантация",
    "Имплантация"
  ], [
    "Permanent, natural-looking replacement for missing teeth.",
    "Постоянная естественная замена утраченных зубов.",
    "Жоголгон тиштердин табигый ордун толтуруу."
  ]],

  ["whitening", [
    "Teeth Whitening",
    "Отбеливание зубов",
    "Тиштерди актоо"
  ], [
    "Professional whitening for a brighter smile in one visit.",
    "Профессиональное отбеливание за один визит.",
    "Бир визитте профессионалдык актоо."
  ]],

  ["orthodontics", [
    "Orthodontics",
    "Ортодонтия",
    "Ортодонтия"
  ], [
    "Braces and clear aligners to straighten your teeth.",
    "Брекеты и элайнеры для ровных зубов.",
    "Тиштерди түздөө үчүн брекет жана элайнер."
  ]],

  ["prevention", [
    "Preventive Care",
    "Профилактика",
    "Профилактика"
  ], [
    "Cleanings, fluoride and guidance to keep problems away.",
    "Чистка, фторирование и советы для профилактики.",
    "Тазалоо, фторлоо жана профилактикалык кеңештер."
  ]]
];

const P=[[["Initial Consultation","Первичная консультация","Баштапкы кеңеш"],["Discuss your needs and health history.","Обсудим ваши запросы и историю здоровья.","Муктаждыктарыңызды талкуулайбыз."]],
[["Comprehensive Exam","Полное обследование","Толук текшерүү"],["Digital imaging and detailed assessment.","Цифровые снимки и детальная оценка.","Санарип сүрөттөр жана баалоо."]],
[["Treatment Plan","План лечения","Дарылоо планы"],["A plan tailored to your goals and budget.","План под ваши цели и бюджет.","Максатыңызга жана бюджетиңизге план."]],
[["Follow-up Care","Поддержка после лечения","Дарылоодон кийинки көзөмөл"],["Long-term support for a lasting smile.","Долгосрочная поддержка результата.","Узак мөөнөттүү колдоо."]]];
const D=[["hero1","Dr. Aigerim Sadykova",["Lead Dentist · 12 yrs","Главный врач · 12 лет","Башкы дарыгер · 12 жыл"],["Specialises in cosmetic dentistry and smile design. Member of the national dental association.","Специализируется на эстетической стоматологии и дизайне улыбки.","Эстетикалык стоматологияга адистешкен."]],
["hero2","Dr. Bakyt Omurov",["Implantologist · 9 yrs","Имплантолог · 9 лет","Имплантолог · 9 жыл"],["Performs guided implant surgery and complex restorations.","Выполняет имплантацию и сложное протезирование.","Имплантация жана протездөө боюнча адис."]],
["hero3","Dr. Elena Petrova",["Orthodontist · 8 yrs","Ортодонт · 8 лет","Ортодонт · 8 жыл"],["Braces and clear aligners for children and adults.","Брекеты и элайнеры для детей и взрослых.","Балдар жана чоңдор үчүн брекет жана элайнер."]]];
const R=[["A","Aigerim S.",["The staff is amazing and the care I received was top-notch. My smile has never looked better!","Персонал потрясающий, уход на высшем уровне. Моя улыбка никогда не выглядела лучше!","Кызматкерлер сонун, тейлөө жогорку деңгээлде. Жылмаюум мынчалык кооз болгон эмес!"]],
["E","Emil B.",["Professional, friendly and very attentive. I highly recommend this clinic to everyone!","Профессионально, дружелюбно и внимательно. Рекомендую всем!","Кесипкөй, достук жана көңүл буруучу. Баарына сунуштайм!"]],
["A","Aisuluu T.",["Modern technology, clean clinic and kind doctors. I'm so happy with my results.","Современные технологии, чистота и добрые врачи. Очень довольна результатом.","Заманбап технология, таза клиника жана боорукер дарыгерлер. Абдан ыраазымын."]],
["N","Nurlan K.",["No pain and no waiting. My implant was done exactly as planned.","Без боли и очередей. Имплант поставили точно по плану.","Ооруксуз жана кезексиз. Имплант план боюнча коюлду."]]];
const B=[
["hero1",["How to Maintain a Healthy Smile","Как сохранить здоровую улыбку","Дени сак жылмаюуну кантип сактоо"],["Brush twice a day for two minutes with fluoride toothpaste, and clean between teeth daily.","Чистите зубы дважды в день по две минуты фторсодержащей пастой и ежедневно используйте флосс.","Күнүнө эки жолу эки мүнөттөн фторлуу паста менен тазалап, күн сайын жип колдонуңуз."]],
["hero2",["Why Regular Checkups Matter","Почему важны регулярные осмотры","Үзгүлтүксүз текшерүү эмне үчүн маанилүү"],["A check-up every six months catches cavities and gum disease early, when treatment is simple.","Осмотр раз в полгода выявляет кариес и болезни дёсен на ранней стадии.","Жарым жылда бир текшерүү оорунун алгачкы стадиясын аныктайт."]],
["hero3",["Understanding Teeth Whitening","Всё об отбеливании зубов","Тиш актоо жөнүндө баары"],["Professional whitening is safe when supervised by a dentist. Avoid dark drinks for 48 hours afterwards.","Профессиональное отбеливание безопасно под контролем врача. 48 часов избегайте тёмных напитков.","Дарыгердин көзөмөлүндө актоо коопсуз. 48 саат кара суусундуктардан сактаныңыз."]],
["hero4",["5 Habits for Better Oral Health","5 привычек для здоровья полости рта","Оозду сактоочу 5 адат"],["Limit sugary snacks, drink water, replace your brush every 3 months, don't smoke, visit your dentist.","Меньше сладкого, больше воды, смена щётки каждые 3 месяца, отказ от курения, визиты к врачу.","Таттуу азыкты азайтып, суу ичип, щёткаңызды 3 айда алмаштырып, тартпаңыз."]]
];

let L=localStorage.getItem("lang")||"en";if(!"en ru ky".includes(L))L="en";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],I=()=>["en","ru","ky"].indexOf(L);
const t=k=>T[k][I()];

/* Render dynamic content */
function render(){
 $("#svc").innerHTML=S.map((s,i)=>`<button class="card rv" data-svc="${i}"><div class="im"><img src="images/${s[0]}.jpg" alt="${s[1][I()]}" loading="lazy"></div><div class="bd"><h3>${s[1][I()]}</h3><p>${s[2][I()]}</p><u>${t("learn")} →</u></div></button>`).join("");
 $("#steps").innerHTML=P.map((p,i)=>`<div class="step rv"><b>0${i+1}</b><h3>${p[0][I()]}</h3><p>${p[1][I()]}</p></div>`).join("");
 $("#docs").innerHTML=D.map((d,i)=>`<button class="card doc rv" data-doc="${i}"><div class="im"><img src="images/${d[0]}.jpg" alt="${d[1]}" loading="lazy"></div><div class="bd"><h3>${d[1]}</h3><p>${d[2][I()]}</p><u>${t("learn")} →</u></div></button>`).join("");
 $("#posts").innerHTML=B.map((b,i)=>`<button class="card rv" data-post="${i}"><div class="im"><img src="images/${b[0]}.jpg" alt="${b[1][I()]}" loading="lazy"></div><div class="bd"><h3>${b[1][I()]}</h3><u>${t("learn")} →</u></div></button>`).join("");
 $("#track").innerHTML=R.map(r=>`<div class="slide"><div><span class="av">${r[0]}</span><span class="st" aria-label="5 stars">★★★★★</span><q>${r[2][I()]}</q><small>${r[1]}</small></div></div>`).join("");
 $("#fsv").innerHTML=S.map(s=>`<li>${s[1][I()]}</li>`).join("");
 const fs=$("#fs"),v=fs.value;fs.innerHTML=`<option value="">—</option>`+S.map((s,i)=>`<option value="${i}">${s[1][I()]}</option>`).join("");fs.value=v;
 buildDots();go(pos);observe();
}
function setLang(l){L=l;localStorage.setItem("lang",l);document.documentElement.lang=l;
 $$("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));$$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));
 document.title={en:"DentalCare — Modern Dental Clinic in Bishkek",ru:"DentalCare — современная стоматология в Бишкеке",ky:"DentalCare — Бишкектеги заманбап стоматология"}[l];render();}

/* Scroll reveal + counters */
let io;function observe(){io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);
 $$("[data-n]",e.target).forEach(count)}}),{threshold:.15});$$(".rv").forEach((e,i)=>{e.style.transitionDelay=(i%3)*.08+"s";io.observe(e)})}
function count(el){if(el.dataset.done)return;el.dataset.done=1;const n=+el.dataset.n;if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=n.toLocaleString();return}
 const s=performance.now();(function f(x){const p=Math.min((x-s)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString();p<1&&requestAnimationFrame(f)})(s)}

/* Carousel */
let pos=0,timer;const per=()=>innerWidth<=600?1:innerWidth<=980?2:3,pages=()=>Math.max(1,R.length-per()+1);
function buildDots(){$("#dots").innerHTML=Array.from({length:pages()},(_,i)=>`<button aria-label="Slide ${i+1}" data-d="${i}"></button>`).join("")}
function go(i){const n=pages();pos=(i+n)%n;$("#track").style.transform=`translateX(-${pos*100/per()}%)`;$$("#dots button").forEach((d,k)=>d.classList.toggle("on",k===pos))}
function auto(){clearInterval(timer);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(()=>go(pos+1),5000)}
$("#prev").onclick=()=>{go(pos-1);auto()};$("#next").onclick=()=>{go(pos+1);auto()};
$("#dots").onclick=e=>{if(e.target.dataset.d){go(+e.target.dataset.d);auto()}};
addEventListener("resize",()=>{buildDots();go(Math.min(pos,pages()-1))});

/* Modal + lightbox */
const M=$("#modal");let last;
function open(html){last=document.activeElement;$("#mc").innerHTML=html;M.hidden=false;requestAnimationFrame(()=>M.classList.add("show"));document.body.style.overflow="hidden";$("#mx").focus()}
function shut(){M.classList.remove("show");setTimeout(()=>M.hidden=true,300);document.body.style.overflow="";last&&last.focus()}
$("#mx").onclick=shut;M.onclick=e=>e.target===M&&shut();addEventListener("keydown",e=>e.key==="Escape"&&!M.hidden&&shut());
// const bookBtn=()=>`<a class="btn" href="#book" onclick="document.getElementById('mx').click()">${t("book")}</a>`;
function bookBtn(){
  return `<button class="btn" type="button" id="openBooking">${t("book")}</button>`;
}

function openBooking(){
  const bookingForm = $("#form");

  if (!bookingForm) {
    document.querySelector("#book")?.scrollIntoView({
      behavior: "smooth"
    });
    return;
  }

  open(`
    <div class="booking-head">
      <div class="eyebrow">DentalCare</div>
      <h2>${t("book")}</h2>
      <p>${t("f_ok").split("{n}")[0]}</p>
    </div>
    <div id="bookingFormPlace"></div>
  `);

  const place = $("#bookingFormPlace");
  const clone = bookingForm.cloneNode(true);

  clone.id = "bookingModalForm";
  clone.classList.add("booking-form");
  clone.reset();

  place.appendChild(clone);

  clone.addEventListener("submit", function(e){
    e.preventDefault();

    const name = clone.querySelector('[name="n"], #n');
    const phone = clone.querySelector('[name="p"], #p');
    const service = clone.querySelector('[name="s"], #s');
    const date = clone.querySelector('[name="d"], #d');

    if (!name || !phone || !service || !date) {
      alert("Формадагы талааларды текшерип көр.");
      return;
    }

    if (
      name.value.trim().length < 2 ||
      !/^\+?[\d\s()-]{7,18}$/.test(phone.value.trim()) ||
      !service.value ||
      !date.value ||
      date.value < new Date().toISOString().slice(0,10)
    ) {
      alert(t("e_req"));
      return;
    }

    const ok = clone.querySelector("#ok");
    if (ok) {
      ok.hidden = false;
      ok.textContent = t("f_ok").replace(
        "{n}",
        name.value.trim()
      );
    }
  });
}

document.addEventListener("click", function(e){
  const btn = e.target.closest("#openBooking");

  if (btn) {
    openBooking();
  }
});


document.addEventListener("click",e=>{
 const c=e.target.closest("[data-svc],[data-doc],[data-post],[data-lb]");if(!c)return;
 if(c.dataset.svc){const s=S[c.dataset.svc];open(`<img src="images/${s[0]}.jpg" alt="${s[1][I()]}"><div class="pd"><h3>${s[1][I()]}</h3><p>${s[2][I()]}</p>${bookBtn()}</div>`);
  $("#fs").value=c.dataset.svc}
 else if(c.dataset.doc){const d=D[c.dataset.doc];open(`<img src="images/${d[0]}.jpg" alt="${d[1]}"><div class="pd"><h3>${d[1]}</h3><b>${d[2][I()]}</b><p>${d[3][I()]}</p>${bookBtn()}</div>`)}
 else if(c.dataset.post){const b=B[c.dataset.post];open(`<img src="images/${b[0]}.jpg" alt="${b[1][I()]}"><div class="pd"><h3>${b[1][I()]}</h3><p>${b[2][I()]}</p></div>`)}
 else open(`<img src="${c.src}" alt="${c.alt}">`)});
$("#vid").onclick=()=>open(`<div class="pd"><p>${t("vid")}</p>${bookBtn()}</div>`);

/* Nav */
const nav=$("#nav"),mn=$("#menu"),bg=$("#burger");
addEventListener("scroll",()=>nav.classList.toggle("sc",scrollY>30),{passive:true});
bg.onclick=()=>{const o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
$$("#menu a").forEach(a=>a.onclick=()=>{mn.classList.remove("open");bg.setAttribute("aria-expanded",false)});
$$(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
/* Light parallax on hero collage */
const col=$(".collage");if(!matchMedia("(prefers-reduced-motion:reduce)").matches)addEventListener("scroll",()=>{if(scrollY<900)col.style.transform=`translateY(${scrollY*.06}px)`},{passive:true});

/* Form */
const F=$("#form");F.d.min=new Date().toISOString().slice(0,10);
F.addEventListener("submit",e=>{e.preventDefault();let ok=true;
 const chk=(el,bad,k)=>{const m=el.parentElement.querySelector("em");el.classList.toggle("bad",bad);m.textContent=bad?t(k):"";if(bad)ok=false};
 chk(F.n,F.n.value.trim().length<2,"e_req");chk(F.p,!/^\+?[\d\s()-]{7,18}$/.test(F.p.value.trim()),"e_ph");chk(F.s,!F.s.value,"e_req");
 chk(F.d,!F.d.value||F.d.value<F.d.min,"e_dt");
 const o=$("#ok");if(ok){o.textContent=t("f_ok").replace("{n}",F.n.value.trim());o.hidden=false;F.reset()}else o.hidden=true});
F.addEventListener("input",e=>e.target.classList.remove("bad"));

setLang(L);auto();
