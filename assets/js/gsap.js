gsap.registerPlugin(ScrollTrigger);


gsap.set('.hero__title', {yPercent: 100});
gsap.set('.hero__small_title', {opacity: 0});
gsap.set('.header', {opacity: 0});

const heroShow = gsap.timeline({});
heroShow
.addLabel('a')
.to('.hero__title', {yPercent: 0}, 'a')
.to('.hero__small_title', {opacity: 1}, 'a')
.to('.header', {opacity: 1})

const heroHide = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '0% 0%',
        end: '100% 0%',
        // markers: true,
        scrub: 0,
    },
})
heroHide
.to('.hero', {yPercent: -40, opacity: 0.2})


// 이미지 갯수
// 캔버스 사이즈
// #canvas1

const canvas1 = document.querySelector('#canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = 1440;
canvas1.height = 900;

const frameCount1 = 73;

// ${idx.toString().padStart(4, '0')}.jpg

const currentFrame1 = (idx) => {
    return `assets/images/cycle1/${idx.toString()}.jpg`;
} // 리턴 필수

const images1 = [];
const card1 = {
    frame: 0,
};

for (let i = 0; i < frameCount1; i++) {
    const img1 = new Image();
    img1.src = currentFrame1(i + 1);
    images1.push(img1);
}

gsap.to(card1, {
	frame: frameCount1 - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
	    trigger: '.reveal',
        scrub: 1,
        start: '0% 100%',
        end: '100% 100%',
        // pin: true,
        // markers: true
    },
    onUpdate: render1,
    // duration: 4,
});

images1[0].onload = render1;

function render1() {
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx1.drawImage(images1[card1.frame], 0, 0);
}


const revealTxt = new SplitType('.reveal .title-large p', { types: 'words, chars', });

gsap.set('.reveal .word', {opacity: 0.2});
const revealText = gsap.timeline({
    scrollTrigger: {
        trigger: '.reveal .title-large p',
        start: '0 80%',
        end: '100% 100%',
        // markers: true,
        scrub: 1,
    },
});
revealText
// 반복문..?
.to('.reveal__image', {opacity: 0.2})
.to('.reveal .word', 0.1, {opacity: 1, stagger: 0.1, backgroundColor: '#000'})



gsap.set('.argumentation .wrap', {yPercent: 100});

const argumentationText = gsap.timeline({
    scrollTrigger: {
        trigger: '.argumentation',
        start: '0 90%',
        end: '100% 10%',
        // markers: true,
        scrub: 1,
    },
});
argumentationText
.to('.argumentation .wrap', {yPercent: -100})



const cofidisTxt = new SplitType('.cofidis .title-large p', { types: 'words, chars', });

gsap.set('.cofidis .word', {opacity: 0.2});
const cofidisText = gsap.timeline({
    scrollTrigger: {
        trigger: '.cofidis',
        start: '0 80%',
        end: '100% 100%',
        // markers: true,
        scrub: 1,
    },
});
cofidisText
.to('.cofidis .word', 0.1, {opacity: 1, stagger: 0.1})



// 이미지 갯수
// 캔버스 사이즈
// #canvas2

const canvas2 = document.querySelector('#canvas2');
const ctx2 = canvas2.getContext('2d');

canvas2.width = 1600;
canvas2.height = 900;

const frameCount2 = 143;

const currentFrame2 = (idx) => {
    return `assets/images/cycle22/${idx.toString()}.jpg`;
} // 리턴 필수

const images2 = [];
const card2 = {
    frame: 0,
};

for (let i = 0; i < frameCount2; i++) {
    const img2 = new Image();
    img2.src = currentFrame2(i + 1);
    images2.push(img2);
}

gsap.to(card2, {
	frame: frameCount2 - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
	    trigger: '.why',
        scrub: 1,
        start: '0% 0%',
        end: '100% 100%',
        // pin: true,
        // markers: true
    },
    onUpdate: render2,
    // duration: 4,
});

images2[0].onload = render2;

function render2() {
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	ctx2.drawImage(images2[card2.frame], 0, 0);
}


const whyTxt = new SplitType('.why .title-large p', { types: 'words, chars', });

gsap.set('.why .word', {opacity: 0.2});
const whyText = gsap.timeline({
    scrollTrigger: {
        trigger: '.why .title-large p',
        start: '0 80%',
        end: '100% 100%',
        // markers: true,
        scrub: 1,
    },
});
whyText
.to('.why__image', {opacity: 0.2})
.to('.why .word', 0.1, {opacity: 1, stagger: 0.1})



gsap.set('.photo__sticky:nth-child(1) img', {yPercent: 40, rotateZ: '-10deg'});
gsap.set('.photo__sticky:nth-child(2) img', {rotateZ: '10deg'});
gsap.set('.photo__sticky:nth-child(3) img', {rotateZ: '15deg'});

const photoMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.photo',
        start: '0% 80%',
        end: '100% 0%',
        // markers: true,
        scrub: 3,
    },
})
photoMotion
.to('.photo__sticky:nth-child(1) img', {yPercent: 0, rotateZ: '-5deg'})
.to('.photo__sticky:nth-child(2) img', {rotateZ: '5deg'})
.to('.photo__sticky:nth-child(3) img', {rotateZ: '6deg'})
.to('.photo__sticky img', {rotateZ: 0})





const canvas3 = document.querySelector('#canvas3');
const ctx3 = canvas3.getContext('2d');

canvas3.width = 1440;
canvas3.height = 900;

const frameCount3 = 51;

const currentFrame3 = (idx) => {
    return `assets/images/cycle3/${idx.toString()}.jpg`;
} // 리턴 필수

const images3 = [];
const card3 = {
    frame: 0,
};

for (let i = 0; i < frameCount3; i++) {
    const img3 = new Image();
    img3.src = currentFrame3(i + 1);
    images3.push(img3);
}

gsap.to(card3, {
	frame: frameCount3 - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
	    trigger: '.specs',
        scrub: 1,
        start: '0% 100%',
        end: '100% 100%',
        // pin: true,
        // markers: true
    },
    onUpdate: render3,
    // duration: 4,
});

images3[0].onload = render3;

function render3() {
	ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
	ctx3.drawImage(images3[card3.frame], 0, 0);
}

gsap.to('.specs__image', {
    scrollTrigger: {
        trigger: '.specs__info--wrap',
        start: '0 60%',
        end: '100% 100%',
        // markers: true,
        scrub: 1,
    },
    opacity: 0
});



const cofidis2Txt = new SplitType('.cofidis2 .title-large p', { types: 'words, chars', });

gsap.set('.cofidis2 .word', {opacity: 0.2});
const cofidis2Text = gsap.timeline({
    scrollTrigger: {
        trigger: '.cofidis2 .title-large p',
        start: '0 80%',
        end: '100% 100%',
        // markers: true,
        scrub: 1,
    },
});
cofidis2Text
.to('.cofidis2 .word', 0.1, {opacity: 1, stagger: 0.1})



const productMotion = gsap.timeline({
    scrollTrigger: {
        trigger: '.product',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 1,
        invalidateOnRefresh: true,
    },
})
productMotion.to('.product__list',{
    xPercent: -100,
    x: () => {
        return window.innerWidth;
    },
});