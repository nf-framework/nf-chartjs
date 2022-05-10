import { api } from "@nfjs/core";
import { registerLibDir } from "@nfjs/front-server";
async function init() {
    registerLibDir('@nfjs/chartjs')
    registerLibDir('chart.js');
    api.setRouteMap('chartjs', 'chart.js', { replace: '/chart.js/dist/chart.esm.js' });
}

export {
    init
};
