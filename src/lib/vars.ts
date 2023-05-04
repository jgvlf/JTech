
const inputFieldWidth = window.screen.width / (1080 / 805)
const inputFieldHeight = window.screen.height / (2340 / 230)
const gapViewInputFieldHeight = window.screen.height / (2340 / 150)
const topGapViewInputFieldHeight = window.screen.height / (2340 / 325)
const viewInputFieldHeight = 2*inputFieldHeight+gapViewInputFieldHeight
const topGapPercent = 100 - (2090 / 2340 * 100)
const widthCenterViewImg = (window.screen.width) / 1.08

export {
    gapViewInputFieldHeight, inputFieldHeight,
    inputFieldWidth,
    topGapPercent, topGapViewInputFieldHeight, viewInputFieldHeight, widthCenterViewImg
}

