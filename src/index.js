/*!
 * MIT License
 *
 * Copyright (c) 2023 SiYuan 思源笔记
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
(() => {
    "use strict";
    var s = {};
    s.d = (c, n) => {
        for (var e in n) s.o(n, e) && !s.o(c, e) && Object.defineProperty(c, e, {enumerable: !0, get: n[e]})
    }, s.o = (c, n) => Object.prototype.hasOwnProperty.call(c, n), s.r = c => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(c, "__esModule", {value: !0})
    };
    var p = {};
    s.r(p), s.d(p, {default: () => m});
    const o = require("siyuan");
    var f = (c, n, e) => new Promise((t, l) => {
        var d = u => {
            try {
                b(e.next(u))
            } catch (v) {
                l(v)
            }
        }, i = u => {
            try {
                b(e.throw(u))
            } catch (v) {
                l(v)
            }
        }, b = u => u.done ? t(u.value) : Promise.resolve(u.value).then(d, i);
        b((e = e.apply(c, n)).next())
    });
    const a = "menu-config", r = "custom_tab", h = "dock_tab";

    class m extends o.Plugin {
        constructor() {
            super(...arguments), this.blockIconEventBindThis = this.blockIconEvent.bind(this)
        }

        onload() {
            this.data[a] = {readonlyText: "Readonly"};
            const n = (0, o.getFrontend)();
            this.isMobile = n === "mobile" || n === "browser-mobile", this.addIcons(`<symbol id="iconSiyuanGraph" viewBox="0 0 2500 2500">
    <g transform="matrix(1.00521,0,0,1,-3.9557e-16,0)">
        <g transform="matrix(0.472689,0,0,0.464672,-1.26803,3.24366)">
            <path d="M2474.18,-6.841L2473.66,1167.33C2473.66,1167.33 2018.65,1123.2 1590.6,1565.83C1149.68,2021.75 1203.29,2463.64 1203.29,2463.64L2.683,2464.66L2.683,611.034C2.683,270.019 274.848,-6.841 610.079,-6.841L2474.18,-6.841Z"/>
        </g>
        <g transform="matrix(0.195935,0,0,0.195935,683.472,665.591)">
            <path d="M2473.47,-6.841L2474.18,2464.66L2.683,2462.25C2.683,1098.2 1109.41,-6.841 2473.47,-6.841Z"/>
        </g>
        <g transform="matrix(-0.472689,0,0,0.464672,2468.36,3.24366)">
            <path d="M2474.18,-6.841L2473.66,1167.33C2473.66,1167.33 2018.65,1123.2 1590.6,1565.83C1149.68,2021.75 1203.29,2463.64 1203.29,2463.64L2.683,2464.66L2.683,611.034C2.683,270.019 274.848,-6.841 610.079,-6.841L2474.18,-6.841Z"/>
        </g>
        <g transform="matrix(-0.195935,0,0,0.195935,1783.62,665.591)">
            <path d="M2473.47,-6.841L2474.18,2464.66L2.683,2462.25C2.683,1098.2 1109.41,-6.841 2473.47,-6.841Z"/>
        </g>
        <g transform="matrix(-0.472689,0,0,-0.464672,2468.36,2477.14)">
            <path d="M2474.18,-6.841L2473.66,1167.33C2473.66,1167.33 2018.65,1123.2 1590.6,1565.83C1149.68,2021.75 1203.29,2463.64 1203.29,2463.64L2.683,2464.66L2.683,611.034C2.683,270.019 274.848,-6.841 610.079,-6.841L2474.18,-6.841Z"/>
        </g>
        <g transform="matrix(-0.195935,0,0,-0.195935,1783.62,1814.79)">
            <path d="M2473.47,-6.841L2474.18,2464.66L2.683,2462.25C2.683,1098.2 1109.41,-6.841 2473.47,-6.841Z"/>
        </g>
        <g transform="matrix(0.472689,0,0,-0.464672,-1.26803,2477.14)">
            <path d="M2474.18,-6.841L2473.66,1167.33C2473.66,1167.33 2018.65,1123.2 1590.6,1565.83C1149.68,2021.75 1203.29,2463.64 1203.29,2463.64L2.683,2464.66L2.683,611.034C2.683,270.019 274.848,-6.841 610.079,-6.841L2474.18,-6.841Z"/>
        </g>
        <g transform="matrix(0.195935,0,0,-0.195935,683.472,1814.79)">
            <path d="M2473.47,-6.841L2474.18,2464.66L2.683,2462.25C2.683,1098.2 1109.41,-6.841 2473.47,-6.841Z"/>
        </g>
    </g>
    </symbol>
    <symbol id="iconSaving" viewBox="0 0 32 32">
<path d="M20 13.333c0-0.733 0.6-1.333 1.333-1.333s1.333 0.6 1.333 1.333c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333zM10.667 12h6.667v-2.667h-6.667v2.667zM29.333 10v9.293l-3.76 1.253-2.24 7.453h-7.333v-2.667h-2.667v2.667h-7.333c0 0-3.333-11.28-3.333-15.333s3.28-7.333 7.333-7.333h6.667c1.213-1.613 3.147-2.667 5.333-2.667 1.107 0 2 0.893 2 2 0 0.28-0.053 0.533-0.16 0.773-0.187 0.453-0.347 0.973-0.427 1.533l3.027 3.027h2.893zM26.667 12.667h-1.333l-4.667-4.667c0-0.867 0.12-1.72 0.347-2.547-1.293 0.333-2.347 1.293-2.787 2.547h-8.227c-2.573 0-4.667 2.093-4.667 4.667 0 2.507 1.627 8.867 2.68 12.667h2.653v-2.667h8v2.667h2.68l2.067-6.867 3.253-1.093v-4.707z"></path>
</symbol>`);
            const e = this.addTopBar({
                icon: "iconSiyuanGraph",
                title: this.i18n.titleBar,
                position: "right",
                callback: () => {
                    if (this.isMobile) this.addMenu(); else {
                        let i = e.getBoundingClientRect();
                        i.width === 0 && (i = document.querySelector("#barMore").getBoundingClientRect()), i.width === 0 && (i = document.querySelector("#barPlugins").getBoundingClientRect()), this.addMenu(i)
                    }
                }
            }), t = document.createElement("template");
            t.innerHTML = `<div class="toolbar__item ariaLabel" aria-label="Remove plugin-sample Data">
    <svg>
        <use xlink:href="#iconTrashcan"></use>
    </svg>
</div>`, t.content.firstElementChild.addEventListener("click", () => {
                (0, o.confirm)("\u26A0\uFE0F", this.i18n.confirmRemove.replace("${name}", this.name), () => {
                    this.removeData(a).then(() => {
                        this.data[a] = {readonlyText: "Readonly"}, (0, o.showMessage)(`[${this.name}]: ${this.i18n.removedData}`)
                    })
                })
            }), this.addStatusBar({element: t.content.firstElementChild}), this.customTab = this.addTab({
                type: r,
                init() {
                    this.element.innerHTML = `<div class="plugin-sample__custom-tab">${this.data.text}</div>`
                },
                beforeDestroy() {
                    console.log("before destroy tab:", r)
                },
                destroy() {
                    console.log("destroy tab:", r)
                }
            }), this.addCommand({
                langKey: this.i18n.newGraph, hotkey: "", callback: () => {
                    this.showDialog()
                }
            });
            const l = document.createElement("textarea");
            this.setting = new o.Setting({
                confirmCallback: () => {
                    this.saveData(a, {readonlyText: l.value})
                }
            }), this.setting.addItem({
                title: "Readonly text",
                direction: "row",
                description: "Open plugin url in browser",
                createActionElement: () => (l.className = "b3-text-field fn__block", l.placeholder = "Readonly text in the menu", l.value = this.data[a].readonlyText, l)
            });
            const d = document.createElement("button");
            d.className = "b3-button b3-button--outline fn__flex-center fn__size200", d.textContent = "Open", d.addEventListener("click", () => {
                window.open("https://github.com/siyuan-note/plugin-sample")
            }), this.setting.addItem({
                title: "Open plugin url",
                description: "Open plugin url in browser",
                actionElement: d
            }), this.protyleSlash = [{
                filter: ["insert emoji \u{1F60A}", "\u63D2\u5165\u8868\u60C5 \u{1F60A}", "crbqwx"],
                html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.insertEmoji}</span><span class="b3-list-item__meta">\u{1F60A}</span></div>`,
                id: "insertEmoji",
                callback(i) {
                    i.insert("\u{1F60A}")
                }
            }], this.protyleOptions = {
                toolbar: ["block-ref", "a", "|", "text", "strong", "em", "u", "s", "mark", "sup", "sub", "clear", "|", "code", "kbd", "tag", "inline-math", "inline-memo", "|", {
                    name: "insert-smail-emoji",
                    icon: "iconEmoji",
                    hotkey: "\u21E7\u2318I",
                    tipPosition: "n",
                    tip: this.i18n.insertEmoji,
                    click(i) {
                        i.insert("\u{1F60A}")
                    }
                }]
            }, console.log(this.i18n.helloPlugin)
        }

        blockIconEvent({detail: n}) {
            n.menu.addItem({
                iconHTML: "", label: this.i18n.removeSpace, click: () => {
                    const e = [];
                    n.blockElements.forEach(t => {
                        const l = t.querySelector('[contenteditable="true"]');
                        l && (l.textContent = l.textContent.replace(/ /g, ""), e.push({
                            id: t.dataset.nodeId,
                            data: t.outerHTML,
                            action: "update"
                        }))
                    }), n.protyle.getInstance().transaction(e)
                }
            })
        }

        showDialog() {
            const n = new o.Dialog({
                title: this.i18n.titleBar, content: `<div class="b3-dialog__content">
    <div id="siyuanGraphFunctionsDOM"></div>
    <div class="fn__hr"></div>
    <div>
        <button id="siyuanGraphNewFunc" class="b3-button b3-button--outline fn__flex-center fn__size200">
            <div class="fn__hr"></div>
                ${this.i18n.newFunc}
        </button>
        <button id="siyuanGraphClearFunc" class="b3-button b3-button--outline fn__flex-center">
            <div class="fn__hr"></div>
            <svg style="height: 14px"><use xlink:href="#iconClose"></use></svg>
                ${this.i18n.clearFunc}
        </button>
    </div>
    <div class="fn__hr"></div>
    <div class="fn__hr"></div>
    ${this.i18n.globalSettings}
    <div class="fn__hr"></div>
    <div style="height: 6rem">
        <div style="display inline-block;width: 45%;float: left">
            <div>
                <div style="display: inline-block; position: static" class="b3-label__text">${this.i18n.xInterval}</div>
                <input id="siyuanGraphXInterval" style="display: inline-block; width: 50%;float: right" class="b3-text-field" placeholder="auto">
            </div>
            <div style="margin-top: 1rem">
                <div style="display: inline-block; position: static" class="b3-label__text">${this.i18n.yInterval}</div>
                <input id="siyuanGraphYInterval" style="display: inline-block; width: 50%;float: right" class="b3-text-field" placeholder="auto">
            </div>
        </div>
        <div style="display inline-block;width: 45%;float: right">
            <div>
                <input id="siyuanGraphYFloor" style="display: inline-block; width: 5rem;float: left" class="b3-text-field" value="-5">
                <p style="display: inline-block;width: calc(100% - 10rem); text-align: center; margin-top: 3px">≤ y ≤</p>
                <input id="siyuanGraphYCeiling" style="display: inline-block; width: 5rem;float: right" class="b3-text-field" value="5">
            </div>
            <div style="margin-top: 1.5rem;">
                <div style="display: inline-block; position: static" class="b3-label__text">${this.i18n.showSymbol}</div>
                <input id="siyuanGraphShowSymbol" style="float: right; margin-top: 0.5rem" class="b3-switch" type="checkbox" checked>
            </div>
        </div>
    </div>
    <button id="siyuanGraphGenerateCodeDOM" class="b3-button b3-button--outline fn__flex-center fn__size200">
            <div class="fn__hr"></div>
                ${this.i18n.generateCode}
        </button>
    <textarea style="width: 100%; height: 8rem;margin-top: 0.5rem" class="b3-text-field fn__block" id="siyuanGraphGeneratedCode" placeholder="¯\_(ツ)_/¯"></textarea>
</div>`, width: this.isMobile ? "92vw" : "560px", height: "540px"
            });
            siyuanGraphN = n;
            siyuanGraphInstance = this;
            if (siyuanGraphFunctionData.length > 0) { // If data are not rendered
                siyuanGraphRenderFunctions()
            } else { // If it's raw
                siyuanGraphAddFunction()
            }
            n.element.querySelector("#siyuanGraphNewFunc").addEventListener("click", siyuanGraphAddFunction, false);
            n.element.querySelector("#siyuanGraphClearFunc").addEventListener("click", siyuanGraphClearFunction, false);
            n.element.querySelector("#siyuanGraphGenerateCodeDOM").addEventListener("click", siyuanGraphGenerateCode, false);
        }

        addMenu(n) {
            const e = new o.Menu("topBarSample", () => {
                console.log(this.i18n.byeMenu)
            });
            e.addItem({
                icon: "iconInfo",
                label: this.i18n.newGraph,
                accelerator: this.commands[0].customHotkey,
                click: () => {
                    this.showDialog()
                }
            }), this.isMobile ? e.fullscreen() : e.open({x: n.right, y: n.bottom, isLeft: !0})
        }
    }

    module.exports = p
})();

var siyuanGraphN = undefined;
var siyuanGraphInstance = undefined;

var siyuanGraphFunctionData = []
let siyuanGraphFunctionDefault = {
    code: "",
    xFloor: -5,
    xCeiling: 5,
    step: 1,
    color: "",
}

var siyuanGraphGlobalSettings = [];

function siyuanGraphRenderFunctions() {
    siyuanGraphN.element.querySelector("#siyuanGraphFunctionsDOM").innerHTML = "";
    for (let i = 0; i < siyuanGraphFunctionData.length; i++) {
        siyuanGraphN.element.querySelector("#siyuanGraphFunctionsDOM").innerHTML += `
<div id="siyuanGraphFunc${i}" class="math-graph-function" style="box-shadow: 0px 0.5px 2px 0px rgba(112, 112, 112, 1); border-radius: 5px;padding: 0.5rem;margin-bottom: 1rem">
    Func ${i}<a id="siyuanGraphFuncClose${i}"><svg style="width: 1rem; height: 1rem; float: right; position: static" class="b3-dialog__close"><use xlink:href="#iconCloseRound"></use></svg></a>
    <div class="b3-label__text">${siyuanGraphInstance.i18n.jsFuncCode}</div>
    <div class="fn__hr"></div>
    <textarea style="width: 69%; height: 8rem" class="b3-text-field fn__block" id="siyuanGraphFuncCode${i}" placeholder="1/x">${siyuanGraphFunctionData[i].code}</textarea>
    <div style="display: inline-block; width: 29%; float: right">
        <div>
            <input id="siyuanGraphFunc${i}_floor" style="display: inline-block; width: 3rem;float: left" class="b3-text-field" placeholder="-5" value="${siyuanGraphFunctionData[i].xFloor}">
            <p style="display: inline-block;width: calc(100% - 6rem); text-align: center; margin-top: 3px">≤ x ≤</p>
            <input id="siyuanGraphFunc${i}_ceiling" style="display: inline-block; width: 3rem;float: right" class="b3-text-field" placeholder="5" value="${siyuanGraphFunctionData[i].xCeiling}">
        </div>
        <div style="margin-top: 1.3rem">
            <div style="display: inline-block; position: static" class="b3-label__text">Step</div>
            <input id="siyuanGraphFunc${i}_step" style="display: inline-block; width: 70%;float: right" class="b3-text-field" placeholder="0.1" value="${siyuanGraphFunctionData[i].step}">
        </div>
        <div style="margin-top: 1.3rem">
            <div style="display: inline-block; position: static" class="b3-label__text">Color</div>
            <input id="siyuanGraphFunc${i}_color" style="display: inline-block; width: 70%;float: right" class="b3-text-field" placeholder="random" value="${siyuanGraphFunctionData[i].color}">
        </div>
    </div>
</div>
`
        siyuanGraphN.element.querySelector(`#siyuanGraphFuncClose${i}`).addEventListener("click", siyuanGraphDelFunction, false);
    }
    for (let i = 0; i < siyuanGraphFunctionData.length; i++) {
        siyuanGraphN.element.querySelector(`#siyuanGraphFuncClose${i}`).addEventListener("click", siyuanGraphDelFunction, false);
    }
}

function siyuanGraphAddFunction() {
    if (siyuanGraphFunctionData.length > 0) {
        siyuanGraphUpdateFunction()
    }
    siyuanGraphFunctionData.push(siyuanGraphFunctionDefault);
    siyuanGraphRenderFunctions();
}

function siyuanGraphUpdateFunction() {
    for (let i = 0; i < siyuanGraphFunctionData.length; i++) {
        let tempFuncData = {
            code: siyuanGraphN.element.querySelector(`#siyuanGraphFuncCode${i}`).value,
            xFloor: siyuanGraphN.element.querySelector(`#siyuanGraphFunc${i}_floor`).value,
            xCeiling: siyuanGraphN.element.querySelector(`#siyuanGraphFunc${i}_ceiling`).value,
            step: siyuanGraphN.element.querySelector(`#siyuanGraphFunc${i}_step`).value,
            color: siyuanGraphN.element.querySelector(`#siyuanGraphFunc${i}_color`).value || ""
        }
        siyuanGraphFunctionData[i] = tempFuncData;
    }
}

function siyuanGraphDelFunction() {
    siyuanGraphUpdateFunction()
    const funcId = this.id.replace("siyuanGraphFuncClose", "");
    siyuanGraphFunctionData.splice(funcId, 1);
    siyuanGraphRenderFunctions();
}

function siyuanGraphClearFunction() {
    siyuanGraphFunctionData = []
    siyuanGraphAddFunction()
}

function siyuanGraphUpdateGlobalSettings() {
    tempData = {
        xInterval: siyuanGraphN.element.querySelector("#siyuanGraphXInterval").value || undefined,
        yInterval: siyuanGraphN.element.querySelector("#siyuanGraphYInterval").value || undefined,
        yFloor: siyuanGraphN.element.querySelector("#siyuanGraphYFloor").value,
        yCeiling: siyuanGraphN.element.querySelector("#siyuanGraphYCeiling").value,
        showSymbol: siyuanGraphN.element.querySelector("#siyuanGraphShowSymbol").checked
    }
    siyuanGraphGlobalSettings = tempData;
}

function siyuanGraphGenerateCode() {
    siyuanGraphUpdateFunction()
    siyuanGraphUpdateGlobalSettings()
    // for (let oi = 0; oi < siyuanGraphFunctionData.length; oi++) {
    //     // siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = siyuanGraphFunctionData[oi].code
    //     // siyuanGraphGenerateData(new Function("x", `return ${code};`), xFloor, xCeiling, step, color)
    //     let equa = new Function("x", `return ${siyuanGraphFunctionData[oi].code};`)
    //     let data = [];
    //     for (let i = siyuanGraphFunctionData[oi].xFloor; i <= siyuanGraphFunctionData[oi].xCeiling; i += siyuanGraphFunctionData[oi].step) {
    //         let y = equa(i);
    //         if (y >= siyuanGraphGlobalSettings.yFloor && y <= siyuanGraphGlobalSettings.yCeiling) {
    //             data.push([i, y]);
    //         }
    //         // siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = JSON.stringify(data)
    //         // siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value += data.length
    //         siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = `i:${i},xfloor:${siyuanGraphFunctionData[oi].xFloor},xceiling:${siyuanGraphFunctionData[oi].xCeiling},step:${siyuanGraphFunctionData[oi].step}`
    //         await new Promise(r => setTimeout(r, 500));
    //         // break
    //     }
    //     siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = JSON.stringify(data)
    // }

    let series = siyuanGraphFunctionData.map(({code, xFloor, xCeiling, step, color}, index) => ({
        name: `func${index}`,
        type: 'line',
        smooth: true,
        color: color,
        showSymbol: siyuanGraphGlobalSettings.showSymbol,
        data: siyuanGraphGenerateData(new Function("x", `return ${code};`), xFloor, xCeiling, step, color)
    }));
    // siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = JSON.stringify(series)

    option = {
        animation: false,
        height: undefined,
        xAxis: {
            type: 'value',
            name: 'x',
            axisLine: {onZero: true},
            splitLine: {show: true},
            interval: siyuanGraphGlobalSettings.xInterval,
            axisLabel: {
                show: true,
                // margin: 630,
                verticalAlign: 'top',
                // inside: true // 标签显示在内侧
            },
        },
        yAxis: {
            type: 'value',
            name: 'y',
            axisLine: {onZero: true},
            splitLine: {show: true},
            interval: siyuanGraphGlobalSettings.yInterval
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: "siyuanGraphFormatterPlaceholder"
        },
        series: series
    };
    let strinified = JSON.stringify(option);
    siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = strinified.replace('"siyuanGraphFormatterPlaceholder"','function (params) {let xValue = params[0].value[0];let yValue = params[0].value[1];return \`x: ${xValue}<br/>y: ${yValue}\`;}')
    // siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = JSON.stringify(siyuanGraphGlobalSettings);
}

function siyuanGraphGenerateData(func, xFloor, xCeiling, step = 1) {
    let data = [];
    for (let i = Number(xFloor); i <= Number(xCeiling); i += Number(step)) {
        let y = func(i);
        if (y >= siyuanGraphGlobalSettings.yFloor && y <= siyuanGraphGlobalSettings.yCeiling) {
            data.push([i, y]);
        }
    }
    return data;
}