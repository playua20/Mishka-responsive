<?php require('php/keys.php'); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mishka - magazine</title>
  <link rel="stylesheet" href="css/libs.min.css">
  <link rel="stylesheet" href="css/style.min.css">
  <link rel="apple-touch-icon" sizes="60x60" href="img/favicons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="120x120" href="img/favicons/apple-icon-120x120.png">
  <link rel="icon" type="image/png" sizes="192x192" href="img/favicons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
  <link rel="manifest" href="img/favicons/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="img/favicons/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
  <object id="object" type="image/svg+xml" data="img/symbol/sprite.svg"
          style="height: 0; width: 0; position: absolute; left: 9999px;">
    Your browser does not support SVG
  </object>
  <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt11LYPBA2uJRs5cUa3glS04MCZ0xpXEw&callback=initMap">
  </script>
</head>

<body id="works-body">

<header id="header">

  <section class="s-header__nav  container">
    <div class="header__top row">
      <div class="nav__item-logo-mobile  col-12">
        <a href="/">
          <picture>
            <source media="(min-width: 1200px)" srcset="img/mishka-logo-des.svg">
            <source media="(min-width: 768px)" srcset="img/mishka-logo-tab.svg">
            <img src="img/mishka-logo-mob.svg" alt="Mishka logotype">
          </picture>
        </a>
      </div>
      <nav class="nav  nav--closed  nav--nojs  col">
        <div class="nav__inner  container">
          <ul class="nav__list  row">
            <li class="nav__item  col-12  col-md"><a href="works.html">Каталог товаров</a></li>
            <li class="nav__item  col-12  col-md"><a href="order.php">Вязание на заказ</a></li>
            <li class="nav__item  nav__item-logo  nav__item--active  col-12  col-md">
              <a href="/">
                <picture>
                  <source media="(min-width: 1200px)" srcset="/img/mishka-logo-des.svg">
                  <source media="(min-width: 768px)" srcset="/img/mishka-logo-tab.svg">
                  <img src="/img/mishka-logo-mob.svg" alt="Mishka logotype">
                </picture>
              </a>
            </li>
            <li class="nav__item  col-12  col-md"><a href="/#about">О нас</a></li>
            <li class="nav__item  col-12  col-md"><a href="/#contacts">Контакты</a></li>
          </ul>
        </div>
      </nav>
      <div class="hamburger-close hamburger--squeeze js-hamburger is-active">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
      <div class="hamburger hamburger--squeeze js-hamburger">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
    <div class="header__bot">
      <p class="header__bot-share">Бесплатная доставка по городу</p>
    </div>
  </section>

  <section class="s-hero">
    <div class="hero">
      <div class="hero__title">
        <h1>Вязание на заказ</h1>
      </div>
    </div>
  </section>

</header>

<main>

  <section class="s-form">

    <div class="form">

      <div class="form__intro">
        <p>Мы будем рады воплотить в жизнь ваши пожелания! <br>
          Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.</p>
      </div>

      <form id="order-form" method="POST">
        <div class="form__b-wrap">
          <div class="form__b  form__b-type">
            <div class="form__b-name">
              <b>Тип</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content">
              <div class="form__b-item">
                <input type="radio" name="r-group__type" id="interior-accessory" checked>
                <label for="interior-accessory"><span class="r-indicator"></span>Аксесуар для интерьера</label>
              </div>
              <div class="form__b-item">
                <input type="radio" name="r-group__type" id="child-toy">
                <label for="child-toy"><span class="r-indicator"></span>Детская игрушка</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form__b-wrap">
          <div class="form__b  form__b-color">
            <div class="form__b-name">
              <b class="form__b-require">Цвет</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content">
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="white" value="белый" checked>
                <label for="white">
                  <span class="ch-indicator"></span>
                  Белый</label>
              </div>
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="grey" value="серый">
                <label for="grey">
                  <span class="ch-indicator"></span>
                  Серый</label>
              </div>
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="tiffani" value="«тиффани»">
                <label for="tiffani">
                  <span class="ch-indicator"></span>
                  «Тиффани»</label>
              </div>
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="black" value="чёрный">
                <label for="black">
                  <span class="ch-indicator"></span>
                  Чёрный</label>
              </div>
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="pink" value="«тиффани»">
                <label for="pink">
                  <span class="ch-indicator"></span>
                  Розовый</label>
              </div>
              <div class="form__b-item">
                <input type="checkbox" name="ch-group__color[]" id="orange" value="оранжевый">
                <label for="orange">
                  <span class="ch-indicator"></span>
                  Оранжевый</label>
              </div>
            </div>
          </div>
        </div>

        <div class="form__b-wrap">
          <div class="form__b">
            <div class="form__b-name">
              <b>Фио</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content  form__b-naming">
              <div class="form__b-item">
                <label for="subname">Фамилия:</label>
                <input type="text" name="order-subname" id="subname" placeholder="Укажите фамилию">
              </div>
              <div class="form__b-item">
                <label class="form__b-require" for="name">Имя:</label>
                <input type="text" name="order-name" id="name" placeholder="Введите Ваше имя">
              </div>
              <div class="form__b-item">
                <label for="patronymic">Отчество:</label>
                <input type="text" name="order-patronymic" id="patronymic" placeholder="Отчество, если желаете">
              </div>
            </div>
          </div>
        </div>

        <div class="form__b-wrap  form__b-wrap-contacts">
          <div class="form__b">
            <div class="form__b-name">
              <b class="form__b-require">Тел</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content">
              <div class="form__b-item  form__b-item-tel">
                <input type="tel" name="order-tel" placeholder="+3 (050) XXX-XX-XX">
              </div>
            </div>
          </div>
          <div class="form__b">
            <div class="form__b-name">
              <b class="form__b-require">E-mail</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content  form__b-item-mail">
              <input type="email" name="order-email" placeholder="katy@gmail.com">
            </div>
          </div>
        </div>

        <div class="form__b-wrap  form__b-wrap-submit">
          <div class="form__b">
            <div class="form__b-name">
              <b>Доп</b><span class="form__b-name-line"></span>
            </div>
            <div class="form__b-content">
              <textarea name="order-msg" rows="6" placeholder="Опишите все ваши пожелания к заказу"></textarea>
              <div class="g-recaptcha" data-sitekey="<?php echo SITE_KEY; ?>"></div>
              <div class="order-status"></div>
              <div class="preloader">
                <div class="order-preloader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <button class="btn  form__btn" type="submit">Отправить заказ</button>
            </div>
          </div>
        </div>

      </form>

    </div>

  </section>

</main>

<footer id="footer">
  <div class="footer__container">
    <div class="footer__inner  row">
      <div class="footer__logo col-12 col-md-4">
        <a class="footer__logo-link" href="/">
        </a>
      </div>
      <div class="footer__social col-12 col-md-4">
          <span class="social-list">
            <a class="social-link  social-link-ins" href=""></a>
            <a class="social-link  social-link-fb" href=""></a>
            <a class="social-link  social-link-tw" href=""></a>
          </span>
      </div>
      <div class="footer__dev col-12 col-md-4">
        <p>
          <a class="github-logo" href="https://github.com/playua18/" title="мой github">
            <span>Вёрстка:</span>
            <svg id="github-logo">
              <use xlink:href="img/symbol/sprite.svg#github-logo"></use>
            </svg>
          </a>
        </p>
        <p>
          <a class="htmlacademy-logo" href="https://htmlacademy.ru/" title="Html Academy">
            <span>Дизайн:</span>
            <svg id="htmlacademy-logo">
              <use xlink:href="img/symbol/sprite.svg#htmlacademy-logo"></use>
            </svg>
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
<div id="modal-overlay"></div>
<div class="scroll-top" title="Вверх"><span>&#8673</span></div>
<link rel="stylesheet" href="css/libs.min.css">
<link rel="stylesheet" href="css/style.min.css">
<!--<script src="https://www.google.com/recaptcha/api.js" async defer></script>-->
<script src='https://www.google.com/recaptcha/api.js'></script>
<script src="js/libs.min.js"></script>
<script src="js/main.min.js"></script>
</body>
</html>
