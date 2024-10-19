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
        <g transform="matrix(1.00032,0,0,1.00032,0.778437,7.23463)">
            <path d="M2478.74,612.648L2478.74,1852.41C2478.74,2194.53 2200.98,2472.29 1858.86,2472.29L619.102,2472.29C276.981,2472.29 -0.778,2194.53 -0.778,1852.41L-0.778,612.648C-0.778,270.527 276.981,-7.232 619.102,-7.232L1858.86,-7.232C2200.98,-7.232 2478.74,270.527 2478.74,612.648Z" style="fill-opacity:0.75;"/>
        </g>
        <g transform="matrix(1.01773,0,0,1,-31.198,44.3787)">
            <path d="M88.681,1195.78L2409.73,1195.78" style="fill:none;stroke:#eddcdc;stroke-width:206.49px;"/>
        </g>
        <g transform="matrix(1,0,0,1.00913,-58.6475,-2.27441)">
            <path d="M1298.81,60.775L1298.81,2401.62" style="fill:none;stroke:#eddcdc;stroke-width:207.38px;"/>
        </g>
        <g transform="matrix(190.706,0,0,67.5281,-21286.6,463.584)">
            <path d="M107.996,0.5C111.371,0.5 111.371,22.5 114.747,22.5C118.122,22.5 118.122,0.5 121.498,0.5C124.874,0.5 124.874,22.5 128.25,22.5" style="fill:none;fill-rule:nonzero;stroke:#eddcdc;stroke-width:1.46px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;"/>
        </g>
    </symbol>
    <symbol id="iconSaving" viewBox="0 0 32 32">
<path d="M20 13.333c0-0.733 0.6-1.333 1.333-1.333s1.333 0.6 1.333 1.333c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333zM10.667 12h6.667v-2.667h-6.667v2.667zM29.333 10v9.293l-3.76 1.253-2.24 7.453h-7.333v-2.667h-2.667v2.667h-7.333c0 0-3.333-11.28-3.333-15.333s3.28-7.333 7.333-7.333h6.667c1.213-1.613 3.147-2.667 5.333-2.667 1.107 0 2 0.893 2 2 0 0.28-0.053 0.533-0.16 0.773-0.187 0.453-0.347 0.973-0.427 1.533l3.027 3.027h2.893zM26.667 12.667h-1.333l-4.667-4.667c0-0.867 0.12-1.72 0.347-2.547-1.293 0.333-2.347 1.293-2.787 2.547h-8.227c-2.573 0-4.667 2.093-4.667 4.667 0 2.507 1.627 8.867 2.68 12.667h2.653v-2.667h8v2.667h2.68l2.067-6.867 3.253-1.093v-4.707z"></path>
</symbol>`);

            // Add Top Bar icon
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
            })

            // Add bottom right icon
//             const t = document.createElement("template");
//             t.innerHTML = `<div class="toolbar__item ariaLabel" aria-label="Remove plugin-sample Data">
//     <svg>
//         <use xlink:href="#iconTrashcan"></use>
//     </svg>
// </div>`;
//             t.content.firstElementChild.addEventListener("click", () => {
//                 (0, o.confirm)("\u26A0\uFE0F", this.i18n.confirmRemove.replace("${name}", this.name), () => {
//                     this.removeData(a).then(() => {
//                         this.data[a] = {readonlyText: "Readonly"}, (0, o.showMessage)(`[${this.name}]: ${this.i18n.removedData}`)
//                     })
//                 })
//             });
//             this.addStatusBar({element: t.content.firstElementChild});

            // Add a tab (page)
            // this.customTab = this.addTab({
            //     type: r,
            //     init() {
            //         this.element.innerHTML = `<div class="plugin-sample__custom-tab">${this.data.text}</div>`
            //     },
            //     beforeDestroy() {
            //         console.log("before destroy tab:", r)
            //     },
            //     destroy() {
            //         console.log("destroy tab:", r)
            //     }
            // })

            // Add a shortcut
            this.addCommand({
                langKey: this.i18n.newGraph, hotkey: "", callback: () => {
                    this.showDialog()
                }
            });


            /*******************************
             This chunk defines Settings
             ********************************

             // Register Settings
             this.setting = new o.Setting({
             confirmCallback: () => {
             this.saveData(a, {readonlyText: l.value})
             }
             })
             // Define a textarea then add to Settings
             const l = document.createElement("textarea");
             this.setting.addItem({
             title: "Readonly text",
             direction: "row",
             description: "Open plugin url in browser",
             createActionElement: () => (l.className = "b3-text-field fn__block", l.placeholder = "Readonly text in the menu", l.value = this.data[a].readonlyText, l)
             });
             // Register a button in Settings
             const d = document.createElement("button");
             d.className = "b3-button b3-button--outline fn__flex-center fn__size200", d.textContent = "Open", d.addEventListener("click", () => {
             window.open("https://github.com/siyuan-note/plugin-sample")
             })
             this.setting.addItem({
             title: "Open plugin url",
             description: "Open plugin url in browser",
             actionElement: d
             })
             */

            // Add slash menu
            // this.protyleSlash = [{
            //     filter: ["graph", "chart", "math"],
            //     html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.insertEmoji}</span><span class="b3-list-item__meta">SiYuan-Graph</span></div>`,
            //     id: "siyuanGraphSlash",
            //     callback(i) {
            // i.insert("\u{1F60A}")
            // o.fetchPost("/api/system/currentTime", {}, (response) => {
            //     i.insert(new Date(response.data).toString());
            // });
            // i.insert(`<!--<p>wdferwstg</p>-->`)
            // const selection = window.getSelection();
            // const focusNode = selection?.focusNode;
            // console.log(selection)
            // const Query = n.QueryClosetElement?.[typeName];
            // if (Query) {
            //     const blockId = Query(ele, filterType);
            //     if (!blockId) {
            //         showMessage(`Failed, can't find block`, 5000, 'error');
            //     } else {
            //         showMessage(blockId);
            //     }
            // }
            // protyle.insert(window.Lute.Caret, false, false);
            // }
            // }]

            // Add option to input toolbar
            // this.protyleOptions = {
            //     toolbar: ["block-ref", "a", "|", "text", "strong", "em", "u", "s", "mark", "sup", "sub", "clear", "|", "code", "kbd", "tag", "inline-math", "inline-memo", "|", {
            //         name: "insert-smail-emoji",
            //         icon: "iconEmoji",
            //         hotkey: "\u21E7\u2318I",
            //         tipPosition: "n",
            //         tip: this.i18n.insertEmoji,
            //         click(i) {
            //             // i.insert("\u{1F60A}")
            //             fetchPost("/api/system/currentTime", {}, (response) => {
            //                 dialog.element.querySelector("#time").innerHTML = new Date(response.data).toString();
            //             });
            //         }
            //     }]
            // }
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
    <textarea style="width: 100%; height: 8rem;margin-top: 0.5rem" class="b3-text-field fn__block" id="siyuanGraphGeneratedCode" placeholder="¯\\_(ツ)_/¯"></textarea>
<div style="width: 100%;height:30%;margin-top: 1rem;">
    <div id="siyuanGraphDialogPreview" style="width: 100%; height:100%"></div>
</div>
</div>
`, width: this.isMobile ? "92vw" : "560px", height: "80%"
            });

            try {
                siyuanGraphDialogPreviewDOM = n.element.querySelector('#siyuanGraphDialogPreview');
                siyuanGraphDialogPreviewECharts = echarts.init(siyuanGraphDialogPreviewDOM);
                siyuanGraphEnablePreview = true;
            } catch (e) {
                siyuanGraphEnablePreview = false;
                o.confirm(this.i18n.cautionTitle, this.i18n.cautionNoChartFoundMsg, () => {
                    o.showMessage(this.i18n.previewDisabled);
                }, () => {
                    n.destroy();
                });
            }

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

var siyuanGraphDialogPreviewDOM = undefined;
var siyuanGraphDialogPreviewECharts = undefined;

var siyuanGraphEnablePreview = true;

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
            <div style="display: inline-block; position: static" class="b3-label__text">${siyuanGraphInstance.i18n.step}</div>
            <input id="siyuanGraphFunc${i}_step" style="display: inline-block; width: 70%;float: right" class="b3-text-field" placeholder="0.1" value="${siyuanGraphFunctionData[i].step}">
        </div>
        <div style="margin-top: 1.3rem">
            <div style="display: inline-block; position: static" class="b3-label__text">${siyuanGraphInstance.i18n.color}</div>
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
    let series = siyuanGraphFunctionData.map(({code, xFloor, xCeiling, step, color}, index) => {
        try {
            return {
                name: `func${index}`,
                type: 'line',
                smooth: true,
                color: color,
                showSymbol: siyuanGraphGlobalSettings.showSymbol,
                data: siyuanGraphGenerateData(new Function("x", `return ${code};`), xFloor, xCeiling, step, color)
            };
        } catch (error) {
            alert(`${siyuanGraphInstance.i18n.failedPlottingFunction}: Func ${index}\n${siyuanGraphInstance.i18n.checkFunctionSyntax}`);
            return {
                name: `func${index}`,
                type: 'line',
                smooth: true,
                color: color,
                showSymbol: siyuanGraphGlobalSettings.showSymbol,
                data: []
            };
        }
    });


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
                // inside: true
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
    siyuanGraphN.element.querySelector(`#siyuanGraphGeneratedCode`).value = strinified.replace('"siyuanGraphFormatterPlaceholder"', 'function (params) {let xValue = params[0].value[0];let yValue = params[0].value[1];return \`x: ${xValue}<br/>y: ${yValue}\`;}')
    if (siyuanGraphEnablePreview) {
        siyuanGraphDialogPreviewEChartsRefresh(option);
    }
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

function siyuanGraphDialogPreviewEChartsRefresh(option) {
    let tooltip = {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function (params) {
            let xValue = params[0].value[0];
            let yValue = params[0].value[1];
            return `x: ${xValue}<br/>y: ${yValue}`;
        }
    }
    option.tooltip = tooltip
    siyuanGraphDialogPreviewECharts.setOption(option, true);
}