$(document).ready(function() {
    "use strict";

    function e(e) {
        if ($(".home").length) {
            $(document).scrollTop();
            $("nav ul li a").each(function() {
                var e = $(this);
                $(e.attr("href"))
            })
        }
    }
    $(document).on("scroll", e), $('a[href^="#"]').on("click", function(o) {
        o.preventDefault(), $(document).off("scroll"), $("a").each(function() { $(this).removeClass("active"), $(window).width() < 768 && $(".nav-menu").slideUp() }), $(this).addClass("active");
        var i = this.hash;
        i = $(i), $("html, body").stop().animate({ scrollTop: i.offset().top - 80 }, 500, "swing", function() { window.location.hash = i.selector, $(document).on("scroll", e) })
    }), $(window).scroll(function() { $(window).scrollTop() > 200 ? ($("#main-nav, #main-nav-subpage").slideDown(700), $("#main-nav-subpage").removeClass("subpage-nav")) : ($("#main-nav").slideUp(700), $("#main-nav-subpage").hide(), $("#main-nav-subpage").addClass("subpage-nav")) }), $(".responsive").on("click", function(e) { $(".nav-menu").slideToggle() });
}); // ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'Roque Leal',
    '100% Utile',
    '100% Géolocalisée',
    'Data Science',
    'Business Intelligence ',
    'Big Data',
    'Data Visualisations'
];

const el = document.querySelector('.text-header')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}

next()