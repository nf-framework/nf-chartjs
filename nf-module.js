import { registerLibDir } from "@nfjs/front-server";
async function init() {
    registerLibDir('@nfjs/chartjs')
    registerLibDir('chart.js');
    registerLibDir('chart.js/dist/helpers.esm', process.cwd() + '/node_modules/chart.js/dist/helpers.esm.js', { singleFile: true })
    registerLibDir('chartjs-plugin-datalabels');
}

export {
    init
};
