"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const DATA = [
    {
      "first name": "Олексій",
      "last name": "Петров",
      photo: "./img/trainers/trainer-m1.jpg",
      specialization: "Басейн",
      category: "майстер",
      experience: "8 років",
      description:
        "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
      "first name": "Марина",
      "last name": "Іванова",
      photo: "./img/trainers/trainer-f1.png",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
      "first name": "Ігор",
      "last name": "Сидоренко",
      photo: "./img/trainers/trainer-m2.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
      "first name": "Тетяна",
      "last name": "Мороз",
      photo: "./img/trainers/trainer-f2.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "10 років",
      description:
        "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
      "first name": "Сергій",
      "last name": "Коваленко",
      photo: "./img/trainers/trainer-m3.jpg",
      specialization: "Тренажерний зал",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
      "first name": "Олена",
      "last name": "Лисенко",
      photo: "./img/trainers/trainer-f3.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "4 роки",
      description:
        "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
      "first name": "Андрій",
      "last name": "Волков",
      photo: "./img/trainers/trainer-m4.jpg",
      specialization: "Бійцівський клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
      "first name": "Наталія",
      "last name": "Романенко",
      photo: "./img/trainers/trainer-f4.jpg",
      specialization: "Дитячий клуб",
      category: "спеціаліст",
      experience: "3 роки",
      description:
        "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
      "first name": "Віталій",
      "last name": "Козлов",
      photo: "./img/trainers/trainer-m5.jpg",
      specialization: "Тренажерний зал",
      category: "майстер",
      experience: "10 років",
      description:
        "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
      "first name": "Юлія",
      "last name": "Кравченко",
      photo: "./img/trainers/trainer-f5.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "4 роки",
      description:
        "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
      "first name": "Олег",
      "last name": "Мельник",
      photo: "./img/trainers/trainer-m6.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "12 років",
      description:
        "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
      "first name": "Лідія",
      "last name": "Попова",
      photo: "./img/trainers/trainer-f6.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
      "first name": "Роман",
      "last name": "Семенов",
      photo: "./img/trainers/trainer-m7.jpg",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
      "first name": "Анастасія",
      "last name": "Гончарова",
      photo: "./img/trainers/trainer-f7.jpg",
      specialization: "Басейн",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
      "first name": "Валентин",
      "last name": "Ткаченко",
      photo: "./img/trainers/trainer-m8.jpg",
      specialization: "Бійцівський клуб",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
      "first name": "Лариса",
      "last name": "Петренко",
      photo: "./img/trainers/trainer-f8.jpg",
      specialization: "Дитячий клуб",
      category: "майстер",
      experience: "7 років",
      description:
        "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
      "first name": "Олексій",
      "last name": "Петров",
      photo: "./img/trainers/trainer-m9.jpg",
      specialization: "Басейн",
      category: "майстер",
      experience: "11 років",
      description:
        "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
      "first name": "Марина",
      "last name": "Іванова",
      photo: "./img/trainers/trainer-f9.jpg",
      specialization: "Тренажерний зал",
      category: "спеціаліст",
      experience: "2 роки",
      description:
        "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
      "first name": "Ігор",
      "last name": "Сидоренко",
      photo: "./img/trainers/trainer-m10.jpg",
      specialization: "Дитячий клуб",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
      "first name": "Наталія",
      "last name": "Бондаренко",
      photo: "./img/trainers/trainer-f10.jpg",
      specialization: "Бійцівський клуб",
      category: "майстер",
      experience: "8 років",
      description:
        "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
      "first name": "Андрій",
      "last name": "Семенов",
      photo: "./img/trainers/trainer-m11.jpg",
      specialization: "Тренажерний зал",
      category: "інструктор",
      experience: "1 рік",
      description:
        "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
      "first name": "Софія",
      "last name": "Мельник",
      photo: "./img/trainers/trainer-f11.jpg",
      specialization: "Басейн",
      category: "спеціаліст",
      experience: "6 років",
      description:
        "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
      "first name": "Дмитро",
      "last name": "Ковальчук",
      photo: "./img/trainers/trainer-m12.png",
      specialization: "Дитячий клуб",
      category: "майстер",
      experience: "10 років",
      description:
        "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
      "first name": "Олена",
      "last name": "Ткаченко",
      photo: "./img/trainers/trainer-f12.jpg",
      specialization: "Бійцівський клуб",
      category: "спеціаліст",
      experience: "5 років",
      description:
        "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
  ];

  // Клонування темплейту та додавання інформації про тренерів у вигляді масиву карток з кнопкою
  
  const container = document.querySelector(".trainers-cards__container");
  
  function addCards(data, container, template) {
    container.textContent = "";
    data.forEach((trainer, trainerIndex) => {
      const cloneTemplate = template.content.cloneNode(true);
      const trainerPhoto = cloneTemplate.querySelector(".trainer__img");
      const trainerName = cloneTemplate.querySelector(".trainer__name");
      const button = cloneTemplate.querySelector(".trainer__show-more");

      trainerPhoto.src = trainer.photo;
      trainerPhoto.alt = `${trainer["first name"]} ${trainer["last name"]}`;
      trainerName.innerText = `${trainer["first name"]} ${trainer["last name"]}`;
      button.dataset.index = trainerIndex;

      container.append(cloneTemplate);
    });

    // Слухач евенту на події та відкриття модального вікна при натисканні на кнопку "Показати"

    container.querySelectorAll(".trainer__show-more").forEach((button) => {
      button.addEventListener("mousedown", (event) => {
        const trainerIndex = event.target.dataset.index;
        const trainer = data[trainerIndex];
        modalOpen(trainer);
      });
    });
  }

  // Клонування, додавання карток, відкриття/закриття модального вікна про тренерів та прибирання скролу

  function modalOpen(trainer) {
    const modalTemplate = document.getElementById("modal-template");
    const modalClone = modalTemplate.content.cloneNode(true);
    const modal = modalClone.querySelector(".modal");

    modal.querySelector(".modal__img").src = trainer.photo;
    modal.querySelector(".modal__img").alt = `${trainer["first name"]} ${trainer["last name"]}`;
    modal.querySelector(".modal__name").innerText = `${trainer["first name"]} ${trainer["last name"]}`;
    modal.querySelector(".modal__point--category").innerText = `Категорія: ${trainer.category}`;
    modal.querySelector(".modal__point--experience").innerText = `Досвід: ${trainer.experience}`;
    modal.querySelector(".modal__point--specialization").innerText = `Напрям тренера: ${trainer.specialization}`;
    modal.querySelector(".modal__text").innerText = trainer.description;


    document.body.append(modal);
    document.body.classList.toggle("no-scroll", true);

    const modalClose = () => {
      modal.remove();
      document.body.classList.toggle("no-scroll", false);
    };

    modal.querySelector(".modal__close").addEventListener("mousedown", modalClose);
    modal.addEventListener("mousedown", (event) => {
      if (event.target === modal) {
        modalClose();
      }
    });
  }

  function getTrainerCards({
    data,
    containerCards,
    templateCard,
    filterArr = [],}) {
		
    document.querySelector(containerCards);
	console.log(document.querySelector(containerCards));
    const template = document.querySelector(templateCard);

    addCards(data, container, template);

    for (let selector of filterArr) {
      let element = document.querySelector(selector);
      if (element) {
        element.removeAttribute("hidden");
      }
    }
  }

  getTrainerCards({
    data: DATA,
    containerCards: ".trainers-cards__container",
    templateCard: "#trainer-card",
    filterArr: [".sorting", ".sidebar"],
  });

  // Робимо активними кнопки ЗА ПРІЗВИЩЕМ та ЗА ДОСВІДОМ

  function setActiveBtn(activeBtn) {
    let buttons = document.querySelectorAll(".sorting__btn");
    for (let button of buttons) {
      if (button.id === activeBtn) {
        button.classList.add("sorting__btn--active");
      } else {
        button.classList.remove("sorting__btn--active");
      }
    }
  }

  // Додавання та сортування інформації про тренерів від А до Я та за досвідом

  function sortCards(mousedownBtn, arraySorting) {
    const button = document.getElementById(mousedownBtn);
    button.addEventListener("mousedown", () => {
      DATA.sort(arraySorting);

      addCards(DATA, container, document.querySelector("#trainer-card"));
      setActiveBtn(mousedownBtn);
    });
  }

  sortCards("sort-surname", (a, b) =>
    a["last name"].localeCompare(b["last name"])
  );

  sortCards("sort-experience", (a, b) => {
    const experienceA = parseInt(a.experience.split(" ")[0]);
    const experienceB = parseInt(b.experience.split(" ")[0]);
    return experienceA - experienceB;
  });

  // Фільтрація за категоріями та напрямками
  
  const allDirection = {
    "swimming pool": "Басейн",
    gym: "Тренажерний зал",
    "kids club": "Дитячий клуб",
    "fight club": "Бійцівський клуб",
  };

  const allCategory = {
    master: "майстер",
    specialist: "спеціаліст",
    instructor: "інструктор",
  };
  
	const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const directionInput = form.querySelector(
      'input[name="direction"]:checked'
    );
    const categoryInput = form.querySelector('input[name="category"]:checked');

    const direction = directionInput ? directionInput.value : null;
    const category = categoryInput ? categoryInput.value : null;

    if (!direction || !category) return;

    const directionText = (allDirection[direction] || direction).toUpperCase();
    const categoryText = (allCategory[category] || category).toUpperCase();

    // Фільтрація за спеціализацією
    const filterDirection = DATA.filter((trainer) => {
      return (direction === "all" || trainer.specialization.toUpperCase().includes(directionText));
    });

    // Фільтрація за категорією
    const filterСategory = filterDirection.filter((trainer) => {
      return (category === "all" || trainer.category.toUpperCase().includes(categoryText));
    });

    addCards(
      filterСategory,
      container,
      document.getElementById("trainer-card")
    );
  });
});