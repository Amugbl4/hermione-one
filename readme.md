# Hermione starter

Пожелания и проблемы писать в [Issue Tracker](https://github.com/gemini-testing/hermione/issues). 


## Что потребуется установить в систему

1. Java Development Kit (JDK) версии 8.
Страница загрузки - https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

2. Python версии 2.7.
Страница загрузки https://www.python.org/downloads/

3. Node.js версии не ниже 8.
Страница загрузки - https://nodejs.org/en/download/

4. `npm install --global hermione chai selenium-standalone`


## Пользователям Windows 

1. Установить .NET Framework 2 - https://www.microsoft.com/ru-ru/download/details.aspx?id=1639

2. После установки JDK и Python добавить их пути до директорий содержащих исполняемые файлы в переменную окружения PATH
(если это не сделано автоматически - при установке может быть опция выбора).

3. Установить Visual Studio Build Tools командой `npm install --global --production windows-build-tools `


Может возникнуть проблема с модулем `wd`, тогда потребуется его переустановка:

1. `npm uninstall wd`

2. `npm install -D wd`

*Также проблема с отображением изображений*, пока официально не решена (https://github.com/gemini-testing/html-reporter/issues/27).

Решается след. образом: файл `node_modules/html-reporter/lib/server-utils.js`

Строка 44:

```js
return path.join.apply(null, components);
```

Заменить на:
```js 
const urlJoin = (...args) =>
    args
        .map((value, index) => (index ? _.trim : _.trimEnd)(value, '/'))
        .join('/');
        
const osPathToUrl = (osPath) => osPath.replace(/\\/g, '/');

return urlJoin.apply(null, components.map(osPathToUrl));
```


## Конфигурация

В файле `.hermione.conf.js` согласно [документации](https://github.com/gemini-testing/hermione/blob/master/README.md#quick-start).


## Тест-кейсы

Писать в папке test/*.


## Запуск GUI

Выполните команду `npm start`.
После выполнения этой команды произойдет следующее:

*hermione*

- установит npm-модули
- установит драйверы selenium
- запустит сервер selenium
- откроет веб-страницу по адресу http://localhost:8000/

Последние 2 команды работаю параллельно.

Для остановки выполнить `Ctrl + C`


## Отчёты

После запуска тестирования создаются html-отчёты в папке `hermione-reports`

## "Эталонные" скриншоты

Если с полученным в ходе теста всё в порядке - его нужно сохранить как "эталонный". Путь для сохраненных скриншотов
указывается с помощью опции `screenshotsDir` в .hermione.conf.js. Путь может быть указан как для всех скриншотов, так и для каждого 
браузера и разрешения отдельно.


## Ссылки

- [Документация hermione](https://github.com/gemini-testing/hermione/blob/master/README.md)
- [Проект hermione](https://github.com/gemini-testing/hermione)
- [Проект html-reporter(hermione-gui)](https://github.com/gemini-testing/html-reporter)
- [Домашняя страница hermione](https://yandex.ru/dev/hermione/)
- [Видео: Доклад на OdessaJS](https://events.yandex.ru/lib/talks/4850/)
- [Видео: Я.Субботник по фронтенду](https://events.yandex.ru/lib/talks/4848/)
- [Поддерживаемые устройства эмуляции Chrome](https://cs.chromium.org/chromium/src/chrome/test/chromedriver/chrome/mobile_device_list.cc)


## Что нужно знать автору тестов?

- [Основы JavaScript](https://learn.javascript.ru/) - написание тест-кейсов
- [Документацию Webdriver.io](http://v4.webdriver.io/) - понимание механики работы команд
- [JSON](https://ru.wikipedia.org/wiki/JSON) - конфигурация hermione, package.json
- [Yaml](https://ru.wikipedia.org/wiki/YAML) - конфигурация hermione
- [Основы HTML](https://webref.ru/course/html-tutorial) - понимание того, как строится веб-страница
- [CSS-селекторы](https://learn.javascript.ru/css-selectors) - для тест-кейсов
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) - поможет составить селектор
- Документацию Hermione 😀
