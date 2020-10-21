//WebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//burger
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//slider

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,//наявність стілок
		dots:true,//наявніст кружечків знизу
		adaptiveHeight:true,//адаптивність висоти фото
		slidesToShow:1,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:3000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: false,//авто прокрутка
		autoplaySpeed:1500,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:true,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:true,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:false,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:false,//при включеній опції додається новий клас slick-center
		varibleWidth:true,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
		vertical:false, //вертикальний сладер, треба в .slider.slick-track - display:block
		verticalSwiping:false//включає вертикальну прокрутку
	});
});
//slider

$(document).ready(function(){
	$('.slider__small').slick({
		arrows:true,//наявність стілок
		dots:false,//наявніст кружечків знизу
		adaptiveHeight:true,//адаптивність висоти фото
		slidesToShow:1,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:3000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: false,//авто прокрутка
		autoplaySpeed:1500,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:true,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:true,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:false,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:false,//при включеній опції додається новий клас slick-center
		varibleWidth:true,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
		vertical:false, //вертикальний сладер, треба в .slider.slick-track - display:block
		verticalSwiping:false//включає вертикальну прокрутку
	});
});
//popup
   $(document).ready(function(){
    //приховати PopUp при завантаженні сторінки   
        PopUpHide();
    });
    //відобразити PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //приховати PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }

//carusel

$(document).ready(function () {
	var carousel = $("#carousel").waterwheelCarousel({
		// зміна зовнішнього вигляду
		startingItem:               0,   // номер картинки вцентрі, встановіть на 0 для авто
		separation:                 270, //відстань що виступа з боків
		separationMultiplier:       0.6, //помножена на ... для збільшення / зменшення відстані для кожного наступного слайда
		horizonOffset:              -40,   //рухає вгору / вниз слайди
		horizonOffsetMultiplier:    1,   // помножене на ... для збільшення / зменшення зміщення для кожного наступного слайда
		sizeMultiplier:             0.85, //визначає, наскільки різко змінюється розмір кожного наступного слайда 
		opacityMultiplier:          1, //визначає, наскільки різко змінюється непрозорість кожного наступного слайда
		horizon:                    250,   // наскільки «далеко» горизонтальний / вертикальний горизонт повинен бути встановлений від стінки контейнера. 0 для авто
		flankingItems:              1,   //кількість елементів, видимих ​​по обидва боки від центру              

		// анімація
		speed:                      500,      // швидкість в мілісекундах, яка знадобиться для обертання від однієї до іншої
		animationEasing:            'linear', // ефект, який слід використовувати під час анімації
		quickerForFurther:          true,     //встановіть значення true, щоб зробити анімацію швидшою при натисканні на елемент, який знаходиться далеко від центру
		edgeFadeEnabled:            false,    // коли true, предмети зникають у ніщо при досягненні краю. false, щоб вони рухались за центральним зображенням

		// різне
		linkHandling:               2,                 // 1, щоб вимкнути всі (використовується для facebox), 2, щоб вимкнути всі, крім центру (щоб зв’язати зображення)
		autoPlay:                   0,                 //вкажіть швидкість у мілісекундах, яку слід зачекати перед автообертанням. 0, щоб вимкнути. Може бути негативним
		orientation:                'horizontal',      //вкажіть, чи повинна карусель бути "horizontal" або "vertical"
		activeClassName:            'carousel-center', // ім'я класу, присвоєного поточному елементу в центрі
		keyboardNav:                true,             // true, щоб переміщати карусель за допомогою клавіш зі стрілками
		keyboardNavOverride:        true,              // true, щоб замінити нормальну функціональність клавіш зі стрілками (запобігає прокрутці)
		imageNav:                   true,              //натискання нецентрового зображення поверне це зображення до центру

		// попереднє завантажування
		preloadImages:              false,  // вимкнути / увімкнути попередній завантажувач зображень. 
		forcedImageWidth:           770,     //вказати ширину всіх зображень; інакше карусель намагається його обчислити
		forcedImageHeight:          482,     // вказати висоту всіх зображень; інакше карусель намагається його обчислити

		// функції зворотного дзвінка
		movingToCenter:             $.noop, // спрацьовує, коли предмет збирається перейти в центральне положення
		movedToCenter:              $.noop, // спрацьовує, коли предмет закінчується переміщенням до центру
		clickedCenter:              $.noop, // спрацьовує при натисканні на центральний елемент
		movingFromCenter:           $.noop, // спрацьовує, коли предмет збирається покинути центральну позицію
		movedFromCenter:            $.noop  // спрацьовує, коли предмет закінчується переміщенням від центру
	});
	$('#prev').bind('click',function () {
		carousel.prev();
		return false
	});
	$('#next').bind('click',function () {
		carousel.next();
		return false;
	});
});