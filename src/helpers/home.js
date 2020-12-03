
let $ = require("jquery");

// :style="{ left: one.left + '%', right:two.right + '%' }"

// :style="{ right: one.right + '%' }"

export function moveRail(shiftX, rail, x, railNo) {
    let min = 0
    let lastPos;

    const leftPosition = ((x - shiftX < 0 ? 0 : x - shiftX) / $(window).width()) * 100;
    var right = ($(rail).css("right").replace("px", "") / $(window).width()) * 100;
    var left = ($(rail).css("left").replace("px", "") / $(window).width()) * 100;

    if (railNo === 'one') {
        min = 5
        lastPos = (parseInt($(`[data-rail="two"]`).css("left"), 10) / $(window).width()) * 100 - 5;

        if (leftPosition > lastPos) {
            left = lastPos;
        } else if (leftPosition <= min) {
            left = min;
        } else {
            left = leftPosition;
        }
    } else {
        min = 95
        lastPos = (parseInt($(`[data-rail="one"]`).css("left"), 10) / $(window).width()) * 100 + 5;

        if (leftPosition < lastPos) {
            left = lastPos;
        } else if (leftPosition >= min) {
            left = min;
        } else {
            left = leftPosition;
        }
    }

    $(`[data-rail='${railNo}']`).css({ right: right + '%', left: left + '%' })
    calcColumn()

    move({ left, right, lastPos, min, railNo })

}
export function move(data) {
    if (data.railNo === 'two') {
        $(`[data-column='three']`).css({ left: data.left + '%' })
        $(`[data-column='two']`).css({ right: (100 - data.left) + '%' })

    } else {
        $(`[data-column='two']`).css({ left: data.left + '%' })
        $(`[data-column='one']`).css({ right: (100 - data.left) + '%' })

    }
}
export function calcColumn() {
    const screenwidth = window.innerWidth;
    const colWidth = screenwidth / 3;
    const columns = document.querySelectorAll(".column");
    const double = Math.floor(colWidth + colWidth / 3);
    const trible = double + colWidth;

    for (let i = 0; i < columns.length; i++) {
        const width = columns[i].offsetWidth;

        if (width >= double) {
            columns[i].dataset.size = "2";
            columns[i].dataset.blur = "false";
        }

        if (width >= trible) {
            columns[i].dataset.size = "3";
            columns[i].dataset.blur = "false";
        }

        if (width <= colWidth) {
            columns[i].dataset.size = "1";
            columns[i].dataset.blur = "false";
        }

        if (width <= (colWidth / 2)) {
            columns[i].dataset.blur = "true";
        }

        if (width <= 180) {
            columns[i].dataset.size = "0";
            columns[i].dataset.blur = "false";
        }
    }
}


export function shrink() {
    const columns = document.querySelectorAll(".column");
    for (let i = 0; i < columns.length; i++) { columns[i].dataset.size = 1 }
}


export function changePositions(coords) {
    calcColumn()

    const article = document.querySelector("[data-column='one']")
    const projects = document.querySelector("[data-column='two']")
    const studio = document.querySelector("[data-column='three']")

    const rightRail = document.querySelector("[data-rail='two']")
    const leftRail = document.querySelector("[data-rail='one']")

    article.style.right = coords.one.right + '%'
    projects.style.right = coords.two.right + '%'
    projects.style.left = coords.one.left + '%'

    studio.style.left = coords.two.left + '%'


    rightRail.style.left = coords.two.left + '%'
    leftRail.style.left = coords.one.left + '%'
    calcColumn()

}


