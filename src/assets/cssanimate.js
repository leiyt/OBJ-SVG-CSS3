/**
* @author zhangxinxu(.com)
* @article https://www.zhangxinxu.com/wordpress/?p=8643
* @description 鍥剧墖鍒囨崲鎴栬€呯被浼艰浆鍦鸿剼鏈紝demo涓撶敤锛岄厤鍚坉emo椤甸潰CSS鍜孒TML缁撴瀯瀹炵幇
*              濡傛灉鎯充綔涓虹粍浠朵娇鐢紝璇疯闂� zxx-slide.js
* @license MIT 鍙晢涓氾紝浣嗛渶瑕佷繚鐣欎綔鑰呬俊鎭拰鏉ユ簮
*/
var eleZxxSlides = document.querySelectorAll('animate-img');
[].slice.call(eleZxxSlides).forEach(function (container) {
  var timerSlide = null;
  var indexSlide = 0;
  container.addEventListener('mouseover', function () {
    clearTimeout(timerSlide);
  });
  container.addEventListener('mouseout', function () {
    clearTimeout(timerSlide);
    funSlide();
  });
  // 瀵瑰簲鐨勫厓绱�
  var eleSlides = [].slice.call(container.querySelectorAll('slide-a'));
  // var eleButtons = [].slice.call(container.querySelectorAll('button'));

  // hover鏄剧ず瀵瑰簲骞荤伅
  // eleButtons.forEach(function (button, index) {
  //   ['mouseover', 'click'].forEach(function (eventType) {
  //     button.addEventListener(eventType, function () {
  //       clearTimeout(timerSlide);
  //       indexSlide = index;
  //       funSlide();
  //     });
  //   });
  // });

  eleSlides.forEach(function (slide, index) {
    slide.addEventListener('animationend', function () {
      eleSlides.forEach(function (slide2) {
        if (slide2.classList.contains('in') === false) {
          slide2.style.display = '';
        }
      });
    });
  });

  // 鍒囨崲鏂规硶
  var funSlide = function () {
    eleSlides.forEach(function (slide, index) {
      if (indexSlide === index) {
        slide.classList.remove('out');
        slide.classList.add('in');
        slide.style.display = 'block';
      } else if (slide.classList.contains('in')) {
        slide.classList.remove('in');
        slide.classList.add('out');
      }
    });
    // eleButtons.forEach(function (button, index) {
    //   button.classList.remove('active');
    //   if (indexSlide === index) {
    //     button.classList.add('active');
    //   }
    // });

    timerSlide = setTimeout(function () {
      indexSlide++;
      if (indexSlide === eleSlides.length) {
        indexSlide = 0;
      }
      funSlide();
    }, 4000);
  }

  indexSlide++;
  setTimeout(funSlide, 4000);
});
