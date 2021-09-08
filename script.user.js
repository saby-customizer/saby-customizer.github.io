// ==UserScript==
// @name          SABY Customizer
// @namespace     saby-customizer
// @version       0.0.2
// @author        IgorNovozhilov
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @homepage      https://saby-customizer.github.io
// @icon
// @icon64
// @supportURL    https://github.com/saby-customizer/saby-customizer.github.io/issues
// @include       https://sbis.ru/*
// @include       https://*.sbis.ru/*
// @include       https://saby.ru/*
// @include       https://*.saby.ru/*
// @include       https://tensor.ru/*
// @include       https://*.tensor.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const script = document.createElement('script')

  script.id = 'saby-customizer-userscript'
  script.type = 'module'
  script.src = 'https://saby-customizer.github.io/userscript.js'

  document.documentElement.appendChild(script)
})(
  // @ts-ignore
  unsafeWindow
)
