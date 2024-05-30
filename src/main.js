import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import 'vant/lib/index.less';

//h5  rem适配
import 'amfe-flexible/index.js'
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Col, Row } from 'vant';
import { Popup } from 'vant';
import { Toast } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Dialog } from 'vant';
import { SwipeCell } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { List } from 'vant';

Vue.use(List);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(SwipeCell);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);




Vue.config.productionTip = false

new Vue({
  router,//挂载router
  render: h => h(App),
}).$mount('#app')
