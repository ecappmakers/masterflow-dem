'use strict';



;define("masterflow/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("masterflow/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "masterflow/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"masterflow/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("masterflow/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("masterflow/components/app-footer", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "zQuXJskV",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "masterflow/components/app-footer.hbs",
    "isStrictMode": false
  });

  class AppFooterComponent extends _component2.default {}

  _exports.default = AppFooterComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AppFooterComponent);
});
;define("masterflow/components/app-header", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Language" content="en">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
      <meta name="description" content="This is an example dashboard created using build-in elements and components.">
      <meta name="msapplication-tap-highlight" content="no">
      <link href="./main.css" rel="stylesheet">
  
  
  */
  {
    "id": "EY3WHBSu",
    "block": "[[[1,\"\\n    \"],[10,\"meta\"],[14,\"charset\",\"utf-8\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,\"http-equiv\",\"X-UA-Compatible\"],[14,\"content\",\"IE=edge\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,\"http-equiv\",\"Content-Language\"],[14,\"content\",\"en\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,\"http-equiv\",\"Content-Type\"],[14,\"content\",\"text/html; charset=utf-8\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,3,\"viewport\"],[14,\"content\",\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,3,\"description\"],[14,\"content\",\"This is an example dashboard created using build-in elements and components.\"],[12],[13],[1,\"\\n    \"],[10,\"meta\"],[14,3,\"msapplication-tap-highlight\"],[14,\"content\",\"no\"],[12],[13],[1,\"\\n    \"],[10,\"link\"],[14,6,\"./main.css\"],[14,\"rel\",\"stylesheet\"],[12],[13],[1,\"\\n\\n\"]],[],false,[]]",
    "moduleName": "masterflow/components/app-header.hbs",
    "isStrictMode": false
  });

  class AppHeaderComponent extends _component2.default {}

  _exports.default = AppHeaderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AppHeaderComponent);
});
;define("masterflow/components/header-card", ["exports", "@ember/component", "@ember/template-factory", "ember"], function (_exports, _component, _templateFactory, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"ember"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
                                <div class="card mb-3 widget-content bg-{{this.colour}}">
                                  <div class="widget-content-wrapper text-white">
                                      <div class="widget-content-left">
                                          <div class="widget-heading">{{this.heading}}</div>
                                          <div class="widget-subheading">{{this.subheading}}</div>
                                      </div>
                                      <div class="widget-content-right">
                                          <div class="widget-numbers text-white"><span>{{this.value}}</span></div>
                                      </div>
                                  </div>
                              </div>
                          
  
  */
  {
    "id": "+HIVFM9T",
    "block": "[[[1,\"                            \"],[10,0],[15,0,[29,[\"card mb-3 widget-content bg-\",[30,0,[\"colour\"]]]]],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-wrapper text-white\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,[30,0,[\"heading\"]]],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,[30,0,[\"subheading\"]]],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-numbers text-white\"],[12],[10,1],[12],[1,[30,0,[\"value\"]]],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \\n\"]],[],false,[]]",
    "moduleName": "masterflow/components/header-card.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _ember.default.Component.extend({
    colour: "midnight-bloom",
    heading: "DedaultHeading",
    subheading: "Default Sub Heading",
    value: "q234213"
  }));

  _exports.default = _default;
});
;define("masterflow/components/login", ["exports", "@ember/component", "@ember/template-factory", "ember"], function (_exports, _component, _templateFactory, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"ember"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <html lang="en">
  
  {{app-header}}
  
  <body>
      <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          {{top-bar}}
          <div class="app-main">
              {{nav-bar}}
              <div class="app-main__outer">
                  <div class="app-main__inner">
                      <div class="app-page-title">
                          <div class="page-title-wrapper">
                              <div class="page-title-heading">
                                  <div class="page-title-icon">
                                      <i class="pe-7s-car icon-gradient bg-mean-fruit">
                                      </i>
                                  </div>
                                  <div>Analytics Dashboard
                                      <div class="page-title-subheading">This is an example dashboard created using
                                          build-in elements and components.
                                      </div>
                                  </div>
                              </div>
                              <div class="page-title-actions">
                                  <button type="button" data-toggle="tooltip" title="Example Tooltip"
                                      data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                                      <i class="fa fa-star"></i>
                                  </button>
                                  <div class="d-inline-block dropdown">
                                      <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                          aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                          <span class="btn-icon-wrapper pr-2 opacity-7">
                                              <i class="fa fa-business-time fa-w-20"></i>
                                          </span>
                                          Buttons
                                      </button>
                                      <div tabindex="-1" role="menu" aria-hidden="true"
                                          class="dropdown-menu dropdown-menu-right">
                                          <ul class="nav flex-column">
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-inbox"></i>
                                                      <span>
                                                          Inbox
                                                      </span>
                                                      <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-book"></i>
                                                      <span>
                                                          Book
                                                      </span>
                                                      <div class="ml-auto badge badge-pill badge-danger">5</div>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-picture"></i>
                                                      <span>
                                                          Picture
                                                      </span>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a disabled href="javascript:void(0);" class="nav-link disabled">
                                                      <i class="nav-link-icon lnr-file-empty"></i>
                                                      <span>
                                                          File Disabled
                                                      </span>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content bg-midnight-bloom">
                                  <div class="widget-content-wrapper text-white">
                                      <div class="widget-content-left">
                                          <div class="widget-heading">Total Orders</div>
                                          <div class="widget-subheading">Last year expenses</div>
                                      </div>
                                      <div class="widget-content-right">
                                          <div class="widget-numbers text-white"><span>1896</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content bg-arielle-smile">
                                  <div class="widget-content-wrapper text-white">
                                      <div class="widget-content-left">
                                          <div class="widget-heading">Clients</div>
                                          <div class="widget-subheading">Total Clients Profit</div>
                                      </div>
                                      <div class="widget-content-right">
                                          <div class="widget-numbers text-white"><span>$ 568</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content bg-grow-early">
                                  <div class="widget-content-wrapper text-white">
                                      <div class="widget-content-left">
                                          <div class="widget-heading">Followers</div>
                                          <div class="widget-subheading">People Interested</div>
                                      </div>
                                      <div class="widget-content-right">
                                          <div class="widget-numbers text-white"><span>46%</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content bg-premium-dark">
                                  <div class="widget-content-wrapper text-white">
                                      <div class="widget-content-left">
                                          <div class="widget-heading">Products Sold</div>
                                          <div class="widget-subheading">Revenue streams</div>
                                      </div>
                                      <div class="widget-content-right">
                                          <div class="widget-numbers text-warning"><span>$14M</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12 col-lg-6">
                              <div class="mb-3 card">
                                  <div class="card-header-tab card-header-tab-animation card-header">
                                      <div class="card-header-title">
                                          <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                          Sales Report
                                      </div>
                                      <ul class="nav">
                                          <li class="nav-item"><a href="javascript:void(0);"
                                                  class="active nav-link">Last</a></li>
                                          <li class="nav-item"><a href="javascript:void(0);"
                                                  class="nav-link second-tab-toggle">Current</a></li>
                                      </ul>
                                  </div>
                                  <div class="card-body">
                                      <div class="tab-content">
                                          <div class="tab-pane fade show active" id="tabs-eg-77">
                                              <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                                  <div class="widget-chat-wrapper-outer">
                                                      <div
                                                          class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                          <canvas id="canvas"></canvas>
                                                      </div>
                                                  </div>
                                              </div>
                                              <h6
                                                  class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                                                  Top Authors</h6>
                                              <div class="scroll-area-sm">
                                                  <div class="scrollbar-container">
                                                      <ul
                                                          class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/9.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ella-Rose Henry
                                                                          </div>
                                                                          <div class="widget-subheading">Web Developer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>129</span>
                                                                              <small class="text-danger pl-2">
                                                                                  <i class="fa fa-angle-down"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/5.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ruben Tillman</div>
                                                                          <div class="widget-subheading">UI Designer</div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>54</span>
                                                                              <small class="text-success pl-2">
                                                                                  <i class="fa fa-angle-up"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/4.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Vinnie Wagstaff
                                                                          </div>
                                                                          <div class="widget-subheading">Java Programmer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>429</span>
                                                                              <small class="text-warning pl-2">
                                                                                  <i class="fa fa-dot-circle"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/3.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ella-Rose Henry
                                                                          </div>
                                                                          <div class="widget-subheading">Web Developer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>129</span>
                                                                              <small class="text-danger pl-2">
                                                                                  <i class="fa fa-angle-down"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/2.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ruben Tillman</div>
                                                                          <div class="widget-subheading">UI Designer</div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>54</span>
                                                                              <small class="text-success pl-2">
                                                                                  <i class="fa fa-angle-up"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-12 col-lg-6">
                              <div class="mb-3 card">
                                  <div class="card-header-tab card-header">
                                      <div class="card-header-title">
                                          <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                          Bandwidth Reports
                                      </div>
                                      <div class="btn-actions-pane-right">
                                          <div class="nav">
                                              <a href="javascript:void(0);"
                                                  class="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab
                                                  1</a>
                                              <a href="javascript:void(0);"
                                                  class="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab
                                                  2</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="tab-content">
                                      <div class="tab-pane fade active show" id="tab-eg-55">
                                          <div class="widget-chart p-3">
                                              <div style="height: 350px">
                                                  <canvas id="line-chart"></canvas>
                                              </div>
                                              <div class="widget-chart-content text-center mt-5">
                                                  <div class="widget-description mt-0 text-warning">
                                                      <i class="fa fa-arrow-left"></i>
                                                      <span class="pl-1">175.5%</span>
                                                      <span class="text-muted opacity-8 pl-1">increased server
                                                          resources</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="pt-2 card-body">
                                              <div class="row">
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">63%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Generated Leads
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-danger"
                                                                          role="progressbar" aria-valuenow="63"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 63%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">32%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Submitted Tickers
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-success"
                                                                          role="progressbar" aria-valuenow="32"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 32%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">71%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Server Allocation
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-primary"
                                                                          role="progressbar" aria-valuenow="71"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 71%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">41%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Generated Leads
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-warning"
                                                                          role="progressbar" aria-valuenow="41"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 41%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Total Orders</div>
                                              <div class="widget-subheading">Last year expenses</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-success">1896</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Products Sold</div>
                                              <div class="widget-subheading">Revenue streams</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-warning">$3M</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Followers</div>
                                              <div class="widget-subheading">People Interested</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-danger">45,9%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Income</div>
                                              <div class="widget-subheading">Expected totals</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-focus">$147</div>
                                          </div>
                                      </div>
                                      <div class="widget-progress-wrapper">
                                          <div class="progress-bar-sm progress-bar-animated-alt progress">
                                              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="54"
                                                  aria-valuemin="0" aria-valuemax="100" style="width: 54%;"></div>
                                          </div>
                                          <div class="progress-sub-label">
                                              <div class="sub-label-left">Expenses</div>
                                              <div class="sub-label-right">100%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="main-card mb-3 card">
                                  <div class="card-header">Active Users
                                      <div class="btn-actions-pane-right">
                                          <div role="group" class="btn-group-sm btn-group">
                                              <button class="active btn btn-focus" type="button">Last Week</button>
                                              <button class="btn btn-focus" type="button">All Month</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="table-responsive">
                                      <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                          <thead>
                                              <tr>
                                                  <th class="text-center">#</th>
                                                  <th>Name</th>
                                                  <th class="text-center">City</th>
                                                  <th class="text-center">Status</th>
                                                  <th class="text-center">Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td class="text-center text-muted">#345</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/4.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">John Doe</div>
                                                                  <div class="widget-subheading opacity-7">Web Developer
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Madrid</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-warning">Pending</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-1"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#347</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/3.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Ruben Tillman</div>
                                                                  <div class="widget-subheading opacity-7">Etiam sit amet
                                                                      orci eget</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Berlin</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-success">Completed</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-2"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#321</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/2.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Elliot Huber</div>
                                                                  <div class="widget-subheading opacity-7">Lorem ipsum
                                                                      dolor sic</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">London</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-danger">In Progress</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-3"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#55</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/1.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Vinnie Wagstaff</div>
                                                                  <div class="widget-subheading opacity-7">UI Designer
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Amsterdam</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-info">On Hold</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-4"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  <div class="d-block text-center card-footer">
                                      <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger" type="button"><i
                                              class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                      <button class="btn-wide btn btn-success" type="button">Save</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-danger" role="progressbar"
                                                          aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 71%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Income Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-success" role="progressbar"
                                                          aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 54%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Expenses Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-warning" role="progressbar"
                                                          aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 32%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Spendings Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-info" role="progressbar"
                                                          aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 89%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Totals Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="app-wrapper-footer">
                      <div class="app-footer">
                          <div class="app-footer__inner">
                              <div class="app-footer-left">
                                  <ul class="nav">
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 1
                                          </a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 2
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="app-footer-right">
                                  <ul class="nav">
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 3
                                          </a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              <div class="badge badge-success mr-1 ml-0">
                                                  <small>NEW</small>
                                              </div>
                                              Footer Link 4
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
          </div>
      </div>
      <script type="text/javascript" src="./assets/scripts/main.js"></script>
  </body>
  
  </html>
  */
  {
    "id": "FRjY5B/0",
    "block": "[[[10,\"html\"],[14,\"lang\",\"en\"],[12],[1,\"\\n\\n\"],[1,[34,0]],[1,\"\\n\\n\"],[10,\"body\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header\"],[12],[1,\"\\n        \"],[1,[34,1]],[1,\"\\n        \"],[10,0],[14,0,\"app-main\"],[12],[1,\"\\n            \"],[1,[34,2]],[1,\"\\n            \"],[10,0],[14,0,\"app-main__outer\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"app-main__inner\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"app-page-title\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"page-title-wrapper\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"page-title-heading\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"page-title-icon\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"pe-7s-car icon-gradient bg-mean-fruit\"],[12],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[12],[1,\"Analytics Dashboard\\n                                    \"],[10,0],[14,0,\"page-title-subheading\"],[12],[1,\"This is an example dashboard created using\\n                                        build-in elements and components.\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"page-title-actions\"],[12],[1,\"\\n                                \"],[10,\"button\"],[14,\"data-toggle\",\"tooltip\"],[14,\"title\",\"Example Tooltip\"],[14,\"data-placement\",\"bottom\"],[14,0,\"btn-shadow mr-3 btn btn-dark\"],[14,4,\"button\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"d-inline-block dropdown\"],[12],[1,\"\\n                                    \"],[10,\"button\"],[14,\"data-toggle\",\"dropdown\"],[14,\"aria-haspopup\",\"true\"],[14,\"aria-expanded\",\"false\"],[14,0,\"btn-shadow dropdown-toggle btn btn-info\"],[14,4,\"button\"],[12],[1,\"\\n                                        \"],[10,1],[14,0,\"btn-icon-wrapper pr-2 opacity-7\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"fa fa-business-time fa-w-20\"],[12],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        Buttons\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,\"tabindex\",\"-1\"],[14,\"role\",\"menu\"],[14,\"aria-hidden\",\"true\"],[14,0,\"dropdown-menu dropdown-menu-right\"],[12],[1,\"\\n                                        \"],[10,\"ul\"],[14,0,\"nav flex-column\"],[12],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-inbox\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Inbox\\n                                                    \"],[13],[1,\"\\n                                                    \"],[10,0],[14,0,\"ml-auto badge badge-pill badge-secondary\"],[12],[1,\"86\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-book\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Book\\n                                                    \"],[13],[1,\"\\n                                                    \"],[10,0],[14,0,\"ml-auto badge badge-pill badge-danger\"],[12],[1,\"5\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-picture\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Picture\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,\"disabled\",\"\"],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link disabled\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-file-empty\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        File Disabled\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content bg-midnight-bloom\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-wrapper text-white\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Total Orders\"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Last year expenses\"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-numbers text-white\"],[12],[10,1],[12],[1,\"1896\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content bg-arielle-smile\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-wrapper text-white\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Clients\"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Total Clients Profit\"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-numbers text-white\"],[12],[10,1],[12],[1,\"$ 568\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content bg-grow-early\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-wrapper text-white\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Followers\"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"People Interested\"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-numbers text-white\"],[12],[10,1],[12],[1,\"46%\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"d-xl-none d-lg-block col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content bg-premium-dark\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-wrapper text-white\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Products Sold\"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Revenue streams\"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-numbers text-warning\"],[12],[10,1],[12],[1,\"$14M\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12 col-lg-6\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header-tab card-header-tab-animation card-header\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"card-header-title\"],[12],[1,\"\\n                                        \"],[10,\"i\"],[14,0,\"header-icon lnr-apartment icon-gradient bg-love-kiss\"],[12],[1,\" \"],[13],[1,\"\\n                                        Sales Report\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"active nav-link\"],[12],[1,\"Last\"],[13],[13],[1,\"\\n                                        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link second-tab-toggle\"],[12],[1,\"Current\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"tab-content\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"tab-pane fade show active\"],[14,1,\"tabs-eg-77\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"card mb-3 widget-chart widget-chart2 text-left w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-chat-wrapper-outer\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0\"],[12],[1,\"\\n                                                        \"],[10,\"canvas\"],[14,1,\"canvas\"],[12],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"h6\"],[14,0,\"text-muted text-uppercase font-size-md opacity-5 font-weight-normal\"],[12],[1,\"\\n                                                Top Authors\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"scroll-area-sm\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"scrollbar-container\"],[12],[1,\"\\n                                                    \"],[10,\"ul\"],[14,0,\"rm-list-borders rm-list-borders-scroll list-group list-group-flush\"],[12],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/9.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ella-Rose Henry\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Web Developer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"129\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-danger pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-down\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/5.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"UI Designer\"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"54\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-success pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-up\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/4.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Vinnie Wagstaff\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Java Programmer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"429\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-warning pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-dot-circle\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/3.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ella-Rose Henry\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Web Developer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"129\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-danger pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-down\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"UI Designer\"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"54\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-success pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-up\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12 col-lg-6\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header-tab card-header\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"card-header-title\"],[12],[1,\"\\n                                        \"],[10,\"i\"],[14,0,\"header-icon lnr-rocket icon-gradient bg-tempting-azure\"],[12],[1,\" \"],[13],[1,\"\\n                                        Bandwidth Reports\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"btn-actions-pane-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"nav\"],[12],[1,\"\\n                                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate\"],[12],[1,\"Tab\\n                                                1\"],[13],[1,\"\\n                                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt\"],[12],[1,\"Tab\\n                                                2\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"tab-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"tab-pane fade active show\"],[14,1,\"tab-eg-55\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-chart p-3\"],[12],[1,\"\\n                                            \"],[10,0],[14,5,\"height: 350px\"],[12],[1,\"\\n                                                \"],[10,\"canvas\"],[14,1,\"line-chart\"],[12],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-chart-content text-center mt-5\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-description mt-0 text-warning\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"fa fa-arrow-left\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[14,0,\"pl-1\"],[12],[1,\"175.5%\"],[13],[1,\"\\n                                                    \"],[10,1],[14,0,\"text-muted opacity-8 pl-1\"],[12],[1,\"increased server\\n                                                        resources\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"pt-2 card-body\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"63%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Generated Leads\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-danger\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"63\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 63%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"32%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Submitted Tickers\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-success\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"32\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 32%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"71%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Server Allocation\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-primary\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"71\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 71%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"41%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Generated Leads\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-warning\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"41\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 41%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Total Orders\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Last year expenses\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-success\"],[12],[1,\"1896\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Products Sold\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Revenue streams\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-warning\"],[12],[1,\"$3M\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Followers\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"People Interested\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-danger\"],[12],[1,\"45,9%\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"d-xl-none d-lg-block col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Income\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Expected totals\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-focus\"],[12],[1,\"$147\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-progress-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"progress-bar bg-info\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"54\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 54%;\"],[12],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"progress-sub-label\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"sub-label-left\"],[12],[1,\"Expenses\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"sub-label-right\"],[12],[1,\"100%\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"main-card mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header\"],[12],[1,\"Active Users\\n                                    \"],[10,0],[14,0,\"btn-actions-pane-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,\"role\",\"group\"],[14,0,\"btn-group-sm btn-group\"],[12],[1,\"\\n                                            \"],[10,\"button\"],[14,0,\"active btn btn-focus\"],[14,4,\"button\"],[12],[1,\"Last Week\"],[13],[1,\"\\n                                            \"],[10,\"button\"],[14,0,\"btn btn-focus\"],[14,4,\"button\"],[12],[1,\"All Month\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"table-responsive\"],[12],[1,\"\\n                                    \"],[10,\"table\"],[14,0,\"align-middle mb-0 table table-borderless table-striped table-hover\"],[12],[1,\"\\n                                        \"],[10,\"thead\"],[12],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"#\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[12],[1,\"Name\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"City\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"Status\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"Actions\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,\"tbody\"],[12],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#345\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/4.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"John Doe\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Web Developer\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Madrid\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-warning\"],[12],[1,\"Pending\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-1\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#347\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/3.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Etiam sit amet\\n                                                                    orci eget\"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Berlin\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-success\"],[12],[1,\"Completed\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-2\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#321\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Elliot Huber\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Lorem ipsum\\n                                                                    dolor sic\"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"London\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-danger\"],[12],[1,\"In Progress\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-3\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#55\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/1.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Vinnie Wagstaff\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"UI Designer\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Amsterdam\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-info\"],[12],[1,\"On Hold\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-4\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"d-block text-center card-footer\"],[12],[1,\"\\n                                    \"],[10,\"button\"],[14,0,\"mr-2 btn-icon btn-icon-only btn btn-outline-danger\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"pe-7s-trash btn-icon-wrapper\"],[12],[1,\" \"],[13],[13],[1,\"\\n                                    \"],[10,\"button\"],[14,0,\"btn-wide btn btn-success\"],[14,4,\"button\"],[12],[1,\"Save\"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-danger mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-danger\"],[12],[1,\"71%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-danger\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"71\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 71%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Income Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-success mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-success\"],[12],[1,\"54%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-success\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"54\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 54%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Expenses Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-warning mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-warning\"],[12],[1,\"32%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-warning\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"32\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 32%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Spendings Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-info mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-info\"],[12],[1,\"89%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-info\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"89\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 89%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Totals Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"app-wrapper-footer\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"app-footer\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"app-footer__inner\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"app-footer-left\"],[12],[1,\"\\n                                \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 1\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 2\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"app-footer-right\"],[12],[1,\"\\n                                \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 3\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"badge badge-success mr-1 ml-0\"],[12],[1,\"\\n                                                \"],[10,\"small\"],[12],[1,\"NEW\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            Footer Link 4\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"script\"],[14,\"src\",\"http://maps.google.com/maps/api/js?sensor=true\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"script\"],[14,\"src\",\"./assets/scripts/main.js\"],[14,4,\"text/javascript\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[13]],[],false,[\"app-header\",\"top-bar\",\"nav-bar\"]]",
    "moduleName": "masterflow/components/login.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _ember.default.Component.extend({
    isloggedin: true
  }));

  _exports.default = _default;
});
;define("masterflow/components/mainapp", ["exports", "@ember/component", "@ember/template-factory", "ember"], function (_exports, _component, _templateFactory, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"ember"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.isloggedin}}
    <html lang="en">
  <head>
      {{app-header}}
  </head>
  <body>
      <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          {{top-bar}}
          <div class="app-main">
              {{nav-bar}}
              <div class="app-main__outer">
                  <div class="app-main__inner">
                      {{page-header}}
                     <div class="row">
                          <div class="col-md-6 col-xl-4">
                              {{header-card colour="midnight-bloom" heading="Hello world" subheading="Hey there" value="1205"}}
                          </div>
                          <div class="col-md-6 col-xl-4">
                              {{header-card colour="arielle-smile" heading="Clients" subheading="Total Clients Profit" value="1896"}}
                          </div>
                          <div class="col-md-6 col-xl-4">
                              {{header-card colour="grow-early" heading="Followers" subheading="People Interested" value="23%"}}
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12 col-lg-6">
                              <div class="mb-3 card">
                                  <div class="card-header-tab card-header-tab-animation card-header">
                                      <div class="card-header-title">
                                          <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                          Sales Report
                                      </div>
                                      <ul class="nav">
                                          <li class="nav-item"><a href="javascript:void(0);"
                                                  class="active nav-link">Last</a></li>
                                          <li class="nav-item"><a href="javascript:void(0);"
                                                  class="nav-link second-tab-toggle">Current</a></li>
                                      </ul>
                                  </div>
                                  <div class="card-body">
                                      <div class="tab-content">
                                          <div class="tab-pane fade show active" id="tabs-eg-77">
                                              <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                                  <div class="widget-chat-wrapper-outer">
                                                      <div
                                                          class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                          <canvas id="canvas"></canvas>
                                                      </div>
                                                  </div>
                                              </div>
                                              <h6
                                                  class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                                                  Top Authors</h6>
                                              <div class="scroll-area-sm">
                                                  <div class="scrollbar-container">
                                                      <ul
                                                          class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/9.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ella-Rose Henry
                                                                          </div>
                                                                          <div class="widget-subheading">Web Developer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>129</span>
                                                                              <small class="text-danger pl-2">
                                                                                  <i class="fa fa-angle-down"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/5.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ruben Tillman</div>
                                                                          <div class="widget-subheading">UI Designer</div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>54</span>
                                                                              <small class="text-success pl-2">
                                                                                  <i class="fa fa-angle-up"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/4.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Vinnie Wagstaff
                                                                          </div>
                                                                          <div class="widget-subheading">Java Programmer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>429</span>
                                                                              <small class="text-warning pl-2">
                                                                                  <i class="fa fa-dot-circle"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/3.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ella-Rose Henry
                                                                          </div>
                                                                          <div class="widget-subheading">Web Developer
                                                                          </div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>129</span>
                                                                              <small class="text-danger pl-2">
                                                                                  <i class="fa fa-angle-down"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                              <div class="widget-content p-0">
                                                                  <div class="widget-content-wrapper">
                                                                      <div class="widget-content-left mr-3">
                                                                          <img width="42" class="rounded-circle"
                                                                              src="assets/images/avatars/2.jpg" alt="">
                                                                      </div>
                                                                      <div class="widget-content-left">
                                                                          <div class="widget-heading">Ruben Tillman</div>
                                                                          <div class="widget-subheading">UI Designer</div>
                                                                      </div>
                                                                      <div class="widget-content-right">
                                                                          <div class="font-size-xlg text-muted">
                                                                              <small class="opacity-5 pr-1">$</small>
                                                                              <span>54</span>
                                                                              <small class="text-success pl-2">
                                                                                  <i class="fa fa-angle-up"></i>
                                                                              </small>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-12 col-lg-6">
                              <div class="mb-3 card">
                                  <div class="card-header-tab card-header">
                                      <div class="card-header-title">
                                          <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                          Bandwidth Reports
                                      </div>
                                      <div class="btn-actions-pane-right">
                                          <div class="nav">
                                              <a href="javascript:void(0);"
                                                  class="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab
                                                  1</a>
                                              <a href="javascript:void(0);"
                                                  class="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab
                                                  2</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="tab-content">
                                      <div class="tab-pane fade active show" id="tab-eg-55">
                                          <div class="widget-chart p-3">
                                              <div style="height: 350px">
                                                  <canvas id="line-chart"></canvas>
                                              </div>
                                              <div class="widget-chart-content text-center mt-5">
                                                  <div class="widget-description mt-0 text-warning">
                                                      <i class="fa fa-arrow-left"></i>
                                                      <span class="pl-1">175.5%</span>
                                                      <span class="text-muted opacity-8 pl-1">increased server
                                                          resources</span>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="pt-2 card-body">
                                              <div class="row">
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">63%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Generated Leads
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-danger"
                                                                          role="progressbar" aria-valuenow="63"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 63%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">32%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Submitted Tickers
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-success"
                                                                          role="progressbar" aria-valuenow="32"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 32%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">71%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Server Allocation
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-primary"
                                                                          role="progressbar" aria-valuenow="71"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 71%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-md-6">
                                                      <div class="widget-content">
                                                          <div class="widget-content-outer">
                                                              <div class="widget-content-wrapper">
                                                                  <div class="widget-content-left">
                                                                      <div class="widget-numbers fsize-3 text-muted">41%
                                                                      </div>
                                                                  </div>
                                                                  <div class="widget-content-right">
                                                                      <div class="text-muted opacity-6">Generated Leads
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="widget-progress-wrapper mt-1">
                                                                  <div
                                                                      class="progress-bar-sm progress-bar-animated-alt progress">
                                                                      <div class="progress-bar bg-warning"
                                                                          role="progressbar" aria-valuenow="41"
                                                                          aria-valuemin="0" aria-valuemax="100"
                                                                          style="width: 41%;"></div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Total Orders</div>
                                              <div class="widget-subheading">Last year expenses</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-success">1896</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Products Sold</div>
                                              <div class="widget-subheading">Revenue streams</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-warning">$3M</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Followers</div>
                                              <div class="widget-subheading">People Interested</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-danger">45,9%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                              <div class="card mb-3 widget-content">
                                  <div class="widget-content-outer">
                                      <div class="widget-content-wrapper">
                                          <div class="widget-content-left">
                                              <div class="widget-heading">Income</div>
                                              <div class="widget-subheading">Expected totals</div>
                                          </div>
                                          <div class="widget-content-right">
                                              <div class="widget-numbers text-focus">$147</div>
                                          </div>
                                      </div>
                                      <div class="widget-progress-wrapper">
                                          <div class="progress-bar-sm progress-bar-animated-alt progress">
                                              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="54"
                                                  aria-valuemin="0" aria-valuemax="100" style="width: 54%;"></div>
                                          </div>
                                          <div class="progress-sub-label">
                                              <div class="sub-label-left">Expenses</div>
                                              <div class="sub-label-right">100%</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="main-card mb-3 card">
                                  <div class="card-header">Active Users
                                      <div class="btn-actions-pane-right">
                                          <div role="group" class="btn-group-sm btn-group">
                                              <button class="active btn btn-focus" type="button">Last Week</button>
                                              <button class="btn btn-focus" type="button">All Month</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="table-responsive">
                                      <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                          <thead>
                                              <tr>
                                                  <th class="text-center">#</th>
                                                  <th>Name</th>
                                                  <th class="text-center">City</th>
                                                  <th class="text-center">Status</th>
                                                  <th class="text-center">Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td class="text-center text-muted">#345</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/4.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">John Doe</div>
                                                                  <div class="widget-subheading opacity-7">Web Developer
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Madrid</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-warning">Pending</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-1"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#347</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/3.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Ruben Tillman</div>
                                                                  <div class="widget-subheading opacity-7">Etiam sit amet
                                                                      orci eget</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Berlin</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-success">Completed</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-2"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#321</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/2.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Elliot Huber</div>
                                                                  <div class="widget-subheading opacity-7">Lorem ipsum
                                                                      dolor sic</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">London</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-danger">In Progress</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-3"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td class="text-center text-muted">#55</td>
                                                  <td>
                                                      <div class="widget-content p-0">
                                                          <div class="widget-content-wrapper">
                                                              <div class="widget-content-left mr-3">
                                                                  <div class="widget-content-left">
                                                                      <img width="40" class="rounded-circle"
                                                                          src="assets/images/avatars/1.jpg" alt="">
                                                                  </div>
                                                              </div>
                                                              <div class="widget-content-left flex2">
                                                                  <div class="widget-heading">Vinnie Wagstaff</div>
                                                                  <div class="widget-subheading opacity-7">UI Designer
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td class="text-center">Amsterdam</td>
                                                  <td class="text-center">
                                                      <div class="badge badge-info">On Hold</div>
                                                  </td>
                                                  <td class="text-center">
                                                      <button type="button" id="PopoverCustomT-4"
                                                          class="btn btn-primary btn-sm">Details</button>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  <div class="d-block text-center card-footer">
                                      <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger" type="button"><i
                                              class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                      <button class="btn-wide btn btn-success" type="button">Save</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-danger" role="progressbar"
                                                          aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 71%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Income Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-success" role="progressbar"
                                                          aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 54%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Expenses Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-warning" role="progressbar"
                                                          aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 32%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Spendings Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-lg-3">
                              <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                  <div class="widget-content">
                                      <div class="widget-content-outer">
                                          <div class="widget-content-wrapper">
                                              <div class="widget-content-left pr-2 fsize-1">
                                                  <div class="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                              </div>
                                              <div class="widget-content-right w-100">
                                                  <div class="progress-bar-xs progress">
                                                      <div class="progress-bar bg-info" role="progressbar"
                                                          aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"
                                                          style="width: 89%;"></div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="widget-content-left fsize-1">
                                              <div class="text-muted opacity-6">Totals Target</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="app-wrapper-footer">
                      <div class="app-footer">
                          <div class="app-footer__inner">
                              <div class="app-footer-left">
                                  <ul class="nav">
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 1
                                          </a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 2
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="app-footer-right">
                                  <ul class="nav">
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              Footer Link 3
                                          </a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="javascript:void(0);" class="nav-link">
                                              <div class="badge badge-success mr-1 ml-0">
                                                  <small>NEW</small>
                                              </div>
                                              Footer Link 4
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
          </div>
      </div>
      <script type="text/javascript" src="./assets/scripts/main.js"></script>
  </body>
  </html>
  
  {{else}}
      {{login}}
  {{/if}}
  */
  {
    "id": "5ZKxukmP",
    "block": "[[[41,[30,0,[\"isloggedin\"]],[[[1,\"  \"],[10,\"html\"],[14,\"lang\",\"en\"],[12],[1,\"\\n\"],[10,\"head\"],[12],[1,\"\\n    \"],[1,[34,1]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header\"],[12],[1,\"\\n        \"],[1,[34,2]],[1,\"\\n        \"],[10,0],[14,0,\"app-main\"],[12],[1,\"\\n            \"],[1,[34,3]],[1,\"\\n            \"],[10,0],[14,0,\"app-main__outer\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"app-main__inner\"],[12],[1,\"\\n                    \"],[1,[34,4]],[1,\"\\n                   \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[1,[28,[35,5],null,[[\"colour\",\"heading\",\"subheading\",\"value\"],[\"midnight-bloom\",\"Hello world\",\"Hey there\",\"1205\"]]]],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[1,[28,[35,5],null,[[\"colour\",\"heading\",\"subheading\",\"value\"],[\"arielle-smile\",\"Clients\",\"Total Clients Profit\",\"1896\"]]]],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[1,[28,[35,5],null,[[\"colour\",\"heading\",\"subheading\",\"value\"],[\"grow-early\",\"Followers\",\"People Interested\",\"23%\"]]]],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12 col-lg-6\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header-tab card-header-tab-animation card-header\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"card-header-title\"],[12],[1,\"\\n                                        \"],[10,\"i\"],[14,0,\"header-icon lnr-apartment icon-gradient bg-love-kiss\"],[12],[1,\" \"],[13],[1,\"\\n                                        Sales Report\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"active nav-link\"],[12],[1,\"Last\"],[13],[13],[1,\"\\n                                        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link second-tab-toggle\"],[12],[1,\"Current\"],[13],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"tab-content\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"tab-pane fade show active\"],[14,1,\"tabs-eg-77\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"card mb-3 widget-chart widget-chart2 text-left w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-chat-wrapper-outer\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0\"],[12],[1,\"\\n                                                        \"],[10,\"canvas\"],[14,1,\"canvas\"],[12],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"h6\"],[14,0,\"text-muted text-uppercase font-size-md opacity-5 font-weight-normal\"],[12],[1,\"\\n                                                Top Authors\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"scroll-area-sm\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"scrollbar-container\"],[12],[1,\"\\n                                                    \"],[10,\"ul\"],[14,0,\"rm-list-borders rm-list-borders-scroll list-group list-group-flush\"],[12],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/9.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ella-Rose Henry\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Web Developer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"129\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-danger pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-down\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/5.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"UI Designer\"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"54\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-success pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-up\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/4.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Vinnie Wagstaff\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Java Programmer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"429\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-warning pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-dot-circle\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/3.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ella-Rose Henry\\n                                                                        \"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Web Developer\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"129\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-danger pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-down\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                        \"],[10,\"li\"],[14,0,\"list-group-item\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                        \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                        \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"UI Designer\"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                        \"],[10,0],[14,0,\"font-size-xlg text-muted\"],[12],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"opacity-5 pr-1\"],[12],[1,\"$\"],[13],[1,\"\\n                                                                            \"],[10,1],[12],[1,\"54\"],[13],[1,\"\\n                                                                            \"],[10,\"small\"],[14,0,\"text-success pl-2\"],[12],[1,\"\\n                                                                                \"],[10,\"i\"],[14,0,\"fa fa-angle-up\"],[12],[13],[1,\"\\n                                                                            \"],[13],[1,\"\\n                                                                        \"],[13],[1,\"\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12 col-lg-6\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header-tab card-header\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"card-header-title\"],[12],[1,\"\\n                                        \"],[10,\"i\"],[14,0,\"header-icon lnr-rocket icon-gradient bg-tempting-azure\"],[12],[1,\" \"],[13],[1,\"\\n                                        Bandwidth Reports\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"btn-actions-pane-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"nav\"],[12],[1,\"\\n                                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate\"],[12],[1,\"Tab\\n                                                1\"],[13],[1,\"\\n                                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt\"],[12],[1,\"Tab\\n                                                2\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"tab-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"tab-pane fade active show\"],[14,1,\"tab-eg-55\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-chart p-3\"],[12],[1,\"\\n                                            \"],[10,0],[14,5,\"height: 350px\"],[12],[1,\"\\n                                                \"],[10,\"canvas\"],[14,1,\"line-chart\"],[12],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-chart-content text-center mt-5\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-description mt-0 text-warning\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"fa fa-arrow-left\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[14,0,\"pl-1\"],[12],[1,\"175.5%\"],[13],[1,\"\\n                                                    \"],[10,1],[14,0,\"text-muted opacity-8 pl-1\"],[12],[1,\"increased server\\n                                                        resources\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"pt-2 card-body\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"63%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Generated Leads\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-danger\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"63\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 63%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"32%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Submitted Tickers\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-success\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"32\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 32%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"71%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Server Allocation\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-primary\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"71\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 71%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"widget-numbers fsize-3 text-muted\"],[12],[1,\"41%\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Generated Leads\\n                                                                    \"],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-progress-wrapper mt-1\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                                                    \"],[10,0],[14,0,\"progress-bar bg-warning\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"41\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 41%;\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Total Orders\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Last year expenses\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-success\"],[12],[1,\"1896\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Products Sold\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Revenue streams\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-warning\"],[12],[1,\"$3M\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Followers\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"People Interested\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-danger\"],[12],[1,\"45,9%\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"d-xl-none d-lg-block col-md-6 col-xl-4\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card mb-3 widget-content\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Income\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"Expected totals\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-right\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-numbers text-focus\"],[12],[1,\"$147\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-progress-wrapper\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"progress-bar-sm progress-bar-animated-alt progress\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"progress-bar bg-info\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"54\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 54%;\"],[12],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"progress-sub-label\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"sub-label-left\"],[12],[1,\"Expenses\"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"sub-label-right\"],[12],[1,\"100%\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-12\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"main-card mb-3 card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"card-header\"],[12],[1,\"Active Users\\n                                    \"],[10,0],[14,0,\"btn-actions-pane-right\"],[12],[1,\"\\n                                        \"],[10,0],[14,\"role\",\"group\"],[14,0,\"btn-group-sm btn-group\"],[12],[1,\"\\n                                            \"],[10,\"button\"],[14,0,\"active btn btn-focus\"],[14,4,\"button\"],[12],[1,\"Last Week\"],[13],[1,\"\\n                                            \"],[10,\"button\"],[14,0,\"btn btn-focus\"],[14,4,\"button\"],[12],[1,\"All Month\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"table-responsive\"],[12],[1,\"\\n                                    \"],[10,\"table\"],[14,0,\"align-middle mb-0 table table-borderless table-striped table-hover\"],[12],[1,\"\\n                                        \"],[10,\"thead\"],[12],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"#\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[12],[1,\"Name\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"City\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"Status\"],[13],[1,\"\\n                                                \"],[10,\"th\"],[14,0,\"text-center\"],[12],[1,\"Actions\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,\"tbody\"],[12],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#345\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/4.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"John Doe\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Web Developer\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Madrid\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-warning\"],[12],[1,\"Pending\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-1\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#347\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/3.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Ruben Tillman\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Etiam sit amet\\n                                                                    orci eget\"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Berlin\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-success\"],[12],[1,\"Completed\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-2\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#321\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Elliot Huber\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"Lorem ipsum\\n                                                                    dolor sic\"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"London\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-danger\"],[12],[1,\"In Progress\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-3\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"tr\"],[12],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center text-muted\"],[12],[1,\"#55\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left mr-3\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                                                    \"],[10,\"img\"],[14,\"width\",\"40\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/1.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                            \"],[10,0],[14,0,\"widget-content-left flex2\"],[12],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"Vinnie Wagstaff\"],[13],[1,\"\\n                                                                \"],[10,0],[14,0,\"widget-subheading opacity-7\"],[12],[1,\"UI Designer\\n                                                                \"],[13],[1,\"\\n                                                            \"],[13],[1,\"\\n                                                        \"],[13],[1,\"\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"Amsterdam\"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"badge badge-info\"],[12],[1,\"On Hold\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                                \"],[10,\"td\"],[14,0,\"text-center\"],[12],[1,\"\\n                                                    \"],[10,\"button\"],[14,1,\"PopoverCustomT-4\"],[14,0,\"btn btn-primary btn-sm\"],[14,4,\"button\"],[12],[1,\"Details\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"d-block text-center card-footer\"],[12],[1,\"\\n                                    \"],[10,\"button\"],[14,0,\"mr-2 btn-icon btn-icon-only btn btn-outline-danger\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"pe-7s-trash btn-icon-wrapper\"],[12],[1,\" \"],[13],[13],[1,\"\\n                                    \"],[10,\"button\"],[14,0,\"btn-wide btn btn-success\"],[14,4,\"button\"],[12],[1,\"Save\"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-danger mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-danger\"],[12],[1,\"71%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-danger\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"71\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 71%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Income Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-success mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-success\"],[12],[1,\"54%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-success\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"54\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 54%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Expenses Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-warning mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-warning\"],[12],[1,\"32%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-warning\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"32\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 32%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Spendings Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,0],[14,0,\"col-md-6 col-lg-3\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"card-shadow-info mb-3 widget-chart widget-chart2 text-left card\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-content-outer\"],[12],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-left pr-2 fsize-1\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"widget-numbers mt-0 fsize-3 text-info\"],[12],[1,\"89%\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,0],[14,0,\"widget-content-right w-100\"],[12],[1,\"\\n                                                \"],[10,0],[14,0,\"progress-bar-xs progress\"],[12],[1,\"\\n                                                    \"],[10,0],[14,0,\"progress-bar bg-info\"],[14,\"role\",\"progressbar\"],[14,\"aria-valuenow\",\"89\"],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[14,5,\"width: 89%;\"],[12],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,0,\"widget-content-left fsize-1\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"text-muted opacity-6\"],[12],[1,\"Totals Target\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"app-wrapper-footer\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"app-footer\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"app-footer__inner\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"app-footer-left\"],[12],[1,\"\\n                                \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 1\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 2\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"app-footer-right\"],[12],[1,\"\\n                                \"],[10,\"ul\"],[14,0,\"nav\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            Footer Link 3\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                            \"],[10,0],[14,0,\"badge badge-success mr-1 ml-0\"],[12],[1,\"\\n                                                \"],[10,\"small\"],[12],[1,\"NEW\"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            Footer Link 4\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"script\"],[14,\"src\",\"http://maps.google.com/maps/api/js?sensor=true\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"script\"],[14,\"src\",\"./assets/scripts/main.js\"],[14,4,\"text/javascript\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[]],[[[1,\"    \"],[1,[34,6]],[1,\"\\n\"]],[]]]],[],false,[\"if\",\"app-header\",\"top-bar\",\"nav-bar\",\"page-header\",\"header-card\",\"login\"]]",
    "moduleName": "masterflow/components/mainapp.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _ember.default.Component.extend({
    isloggedin: true
  }));

  _exports.default = _default;
});
;define("masterflow/components/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
                <div class="app-sidebar sidebar-shadow">
                  <div class="app-header__logo">
                      <div class="logo-src"></div>
                      <div class="header__pane ml-auto">
                          <div>
                              <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                                  data-class="closed-sidebar">
                                  <span class="hamburger-box">
                                      <span class="hamburger-inner"></span>
                                  </span>
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="app-header__mobile-menu">
                      <div>
                          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                              <span class="hamburger-box">
                                  <span class="hamburger-inner"></span>
                              </span>
                          </button>
                      </div>
                  </div>
                  <div class="app-header__menu">
                      <span>
                          <button type="button"
                              class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                              <span class="btn-icon-wrapper">
                                  <i class="fa fa-ellipsis-v fa-w-6"></i>
                              </span>
                          </button>
                      </span>
                  </div>
                  <div class="scrollbar-sidebar">
                      <div class="app-sidebar__inner">
                          <ul class="vertical-nav-menu">
                              <li class="app-sidebar__heading">Dashboards</li>
                              <li>
                                  <a href="index.html" class="mm-active">
                                      <i class="metismenu-icon pe-7s-rocket"></i>
                                      Dashboard Example 1
                                  </a>
                              </li>
                              <li class="app-sidebar__heading">UI Components</li>
                              <li>
                                  <a href="#">
                                      <i class="metismenu-icon pe-7s-diamond"></i>
                                      Elements
                                      <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                  </a>
                                  <ul>
                                      <li>
                                          <a href="elements-buttons-standard.html">
                                              <i class="metismenu-icon"></i>
                                              Buttons
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-dropdowns.html">
                                              <i class="metismenu-icon">
                                              </i>Dropdowns
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-icons.html">
                                              <i class="metismenu-icon">
                                              </i>Icons
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-badges-labels.html">
                                              <i class="metismenu-icon">
                                              </i>Badges
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-cards.html">
                                              <i class="metismenu-icon">
                                              </i>Cards
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-list-group.html">
                                              <i class="metismenu-icon">
                                              </i>List Groups
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-navigation.html">
                                              <i class="metismenu-icon">
                                              </i>Navigation Menus
                                          </a>
                                      </li>
                                      <li>
                                          <a href="elements-utilities.html">
                                              <i class="metismenu-icon">
                                              </i>Utilities
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">
                                      <i class="metismenu-icon pe-7s-car"></i>
                                      Components
                                      <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                  </a>
                                  <ul>
                                      <li>
                                          <a href="components-tabs.html">
                                              <i class="metismenu-icon">
                                              </i>Tabs
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-accordions.html">
                                              <i class="metismenu-icon">
                                              </i>Accordions
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-notifications.html">
                                              <i class="metismenu-icon">
                                              </i>Notifications
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-modals.html">
                                              <i class="metismenu-icon">
                                              </i>Modals
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-progress-bar.html">
                                              <i class="metismenu-icon">
                                              </i>Progress Bar
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-tooltips-popovers.html">
                                              <i class="metismenu-icon">
                                              </i>Tooltips &amp; Popovers
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-carousel.html">
                                              <i class="metismenu-icon">
                                              </i>Carousel
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-calendar.html">
                                              <i class="metismenu-icon">
                                              </i>Calendar
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-pagination.html">
                                              <i class="metismenu-icon">
                                              </i>Pagination
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-scrollable-elements.html">
                                              <i class="metismenu-icon">
                                              </i>Scrollable
                                          </a>
                                      </li>
                                      <li>
                                          <a href="components-maps.html">
                                              <i class="metismenu-icon">
                                              </i>Maps
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="tables-regular.html">
                                      <i class="metismenu-icon pe-7s-display2"></i>
                                      Tables
                                  </a>
                              </li>
                              <li class="app-sidebar__heading">Widgets</li>
                              <li>
                                  <a href="dashboard-boxes.html">
                                      <i class="metismenu-icon pe-7s-display2"></i>
                                      Dashboard Boxes
                                  </a>
                              </li>
                              <li class="app-sidebar__heading">Forms</li>
                              <li>
                                  <a href="forms-controls.html">
                                      <i class="metismenu-icon pe-7s-mouse">
                                      </i>Forms Controls
                                  </a>
                              </li>
                              <li>
                                  <a href="forms-layouts.html">
                                      <i class="metismenu-icon pe-7s-eyedropper">
                                      </i>Forms Layouts
                                  </a>
                              </li>
                              <li>
                                  <a href="forms-validation.html">
                                      <i class="metismenu-icon pe-7s-pendrive">
                                      </i>Forms Validation
                                  </a>
                              </li>
                              <li class="app-sidebar__heading">Charts</li>
                              <li>
                                  <a href="charts-chartjs.html">
                                      <i class="metismenu-icon pe-7s-graph2">
                                      </i>ChartJS
                                  </a>
                              </li>
                              <li class="app-sidebar__heading">PRO Version</li>
                              <li>
                                  <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/"
                                      target="_blank" rel="noopener noreferrer">
                                      <i class="metismenu-icon pe-7s-graph2">
                                      </i>
                                      Upgrade to PRO
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
  */
  {
    "id": "UHWmBpZE",
    "block": "[[[1,\"            \"],[10,0],[14,0,\"app-sidebar sidebar-shadow\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"app-header__logo\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"logo-src\"],[12],[13],[1,\"\\n                    \"],[10,0],[14,0,\"header__pane ml-auto\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"\\n                            \"],[10,\"button\"],[14,0,\"hamburger close-sidebar-btn hamburger--elastic\"],[14,\"data-class\",\"closed-sidebar\"],[14,4,\"button\"],[12],[1,\"\\n                                \"],[10,1],[14,0,\"hamburger-box\"],[12],[1,\"\\n                                    \"],[10,1],[14,0,\"hamburger-inner\"],[12],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"app-header__mobile-menu\"],[12],[1,\"\\n                    \"],[10,0],[12],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"hamburger hamburger--elastic mobile-toggle-nav\"],[14,4,\"button\"],[12],[1,\"\\n                            \"],[10,1],[14,0,\"hamburger-box\"],[12],[1,\"\\n                                \"],[10,1],[14,0,\"hamburger-inner\"],[12],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"app-header__menu\"],[12],[1,\"\\n                    \"],[10,1],[12],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav\"],[14,4,\"button\"],[12],[1,\"\\n                            \"],[10,1],[14,0,\"btn-icon-wrapper\"],[12],[1,\"\\n                                \"],[10,\"i\"],[14,0,\"fa fa-ellipsis-v fa-w-6\"],[12],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"scrollbar-sidebar\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"app-sidebar__inner\"],[12],[1,\"\\n                        \"],[10,\"ul\"],[14,0,\"vertical-nav-menu\"],[12],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"Dashboards\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"index.html\"],[14,0,\"mm-active\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-rocket\"],[12],[13],[1,\"\\n                                    Dashboard Example 1\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"UI Components\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-diamond\"],[12],[13],[1,\"\\n                                    Elements\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-state-icon pe-7s-angle-down caret-left\"],[12],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,\"ul\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-buttons-standard.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[13],[1,\"\\n                                            Buttons\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-dropdowns.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Dropdowns\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-icons.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Icons\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-badges-labels.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Badges\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-cards.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Cards\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-list-group.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"List Groups\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-navigation.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Navigation Menus\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"elements-utilities.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Utilities\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-car\"],[12],[13],[1,\"\\n                                    Components\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-state-icon pe-7s-angle-down caret-left\"],[12],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,\"ul\"],[12],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-tabs.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Tabs\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-accordions.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Accordions\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-notifications.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Notifications\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-modals.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Modals\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-progress-bar.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Progress Bar\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-tooltips-popovers.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Tooltips & Popovers\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-carousel.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Carousel\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-calendar.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Calendar\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-pagination.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Pagination\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-scrollable-elements.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Scrollable\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                    \"],[10,\"li\"],[12],[1,\"\\n                                        \"],[10,3],[14,6,\"components-maps.html\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"metismenu-icon\"],[12],[1,\"\\n                                            \"],[13],[1,\"Maps\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"tables-regular.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-display2\"],[12],[13],[1,\"\\n                                    Tables\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"Widgets\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"dashboard-boxes.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-display2\"],[12],[13],[1,\"\\n                                    Dashboard Boxes\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"Forms\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"forms-controls.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-mouse\"],[12],[1,\"\\n                                    \"],[13],[1,\"Forms Controls\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"forms-layouts.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-eyedropper\"],[12],[1,\"\\n                                    \"],[13],[1,\"Forms Layouts\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"forms-validation.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-pendrive\"],[12],[1,\"\\n                                    \"],[13],[1,\"Forms Validation\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"Charts\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"charts-chartjs.html\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-graph2\"],[12],[1,\"\\n                                    \"],[13],[1,\"ChartJS\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,\"li\"],[14,0,\"app-sidebar__heading\"],[12],[1,\"PRO Version\"],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[1,\"\\n                                \"],[10,3],[14,6,\"https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"metismenu-icon pe-7s-graph2\"],[12],[1,\"\\n                                    \"],[13],[1,\"\\n                                    Upgrade to PRO\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13]],[],false,[]]",
    "moduleName": "masterflow/components/nav-bar.hbs",
    "isStrictMode": false
  });

  class NavBarComponent extends _component2.default {}

  _exports.default = NavBarComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, NavBarComponent);
});
;define("masterflow/components/page-header", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
                        <div class="app-page-title">
                          <div class="page-title-wrapper">
                              <div class="page-title-heading">
                                  <div class="page-title-icon">
                                      <i class="pe-7s-car icon-gradient bg-mean-fruit">
                                      </i>
                                  </div>
                                  <div>Analytics Dashboard
                                      <div class="page-title-subheading">This is an example dashboard created using
                                          build-in elements and components.
                                      </div>
                                  </div>
                              </div>
                              <div class="page-title-actions">
                                  <button type="button" data-toggle="tooltip" title="Example Tooltip"
                                      data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                                      <i class="fa fa-star"></i>
                                  </button>
                                  <div class="d-inline-block dropdown">
                                      <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                          aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                          <span class="btn-icon-wrapper pr-2 opacity-7">
                                              <i class="fa fa-business-time fa-w-20"></i>
                                          </span>
                                          Buttons
                                      </button>
                                      <div tabindex="-1" role="menu" aria-hidden="true"
                                          class="dropdown-menu dropdown-menu-right">
                                          <ul class="nav flex-column">
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-inbox"></i>
                                                      <span>
                                                          Inbox
                                                      </span>
                                                      <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-book"></i>
                                                      <span>
                                                          Book
                                                      </span>
                                                      <div class="ml-auto badge badge-pill badge-danger">5</div>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a href="javascript:void(0);" class="nav-link">
                                                      <i class="nav-link-icon lnr-picture"></i>
                                                      <span>
                                                          Picture
                                                      </span>
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a disabled href="javascript:void(0);" class="nav-link disabled">
                                                      <i class="nav-link-icon lnr-file-empty"></i>
                                                      <span>
                                                          File Disabled
                                                      </span>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
   
  */
  {
    "id": "UQ5lzN2Q",
    "block": "[[[1,\"                    \"],[10,0],[14,0,\"app-page-title\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"page-title-wrapper\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"page-title-heading\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"page-title-icon\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"pe-7s-car icon-gradient bg-mean-fruit\"],[12],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[12],[1,\"Analytics Dashboard\\n                                    \"],[10,0],[14,0,\"page-title-subheading\"],[12],[1,\"This is an example dashboard created using\\n                                        build-in elements and components.\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"page-title-actions\"],[12],[1,\"\\n                                \"],[10,\"button\"],[14,\"data-toggle\",\"tooltip\"],[14,\"title\",\"Example Tooltip\"],[14,\"data-placement\",\"bottom\"],[14,0,\"btn-shadow mr-3 btn btn-dark\"],[14,4,\"button\"],[12],[1,\"\\n                                    \"],[10,\"i\"],[14,0,\"fa fa-star\"],[12],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"d-inline-block dropdown\"],[12],[1,\"\\n                                    \"],[10,\"button\"],[14,\"data-toggle\",\"dropdown\"],[14,\"aria-haspopup\",\"true\"],[14,\"aria-expanded\",\"false\"],[14,0,\"btn-shadow dropdown-toggle btn btn-info\"],[14,4,\"button\"],[12],[1,\"\\n                                        \"],[10,1],[14,0,\"btn-icon-wrapper pr-2 opacity-7\"],[12],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"fa fa-business-time fa-w-20\"],[12],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        Buttons\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,\"tabindex\",\"-1\"],[14,\"role\",\"menu\"],[14,\"aria-hidden\",\"true\"],[14,0,\"dropdown-menu dropdown-menu-right\"],[12],[1,\"\\n                                        \"],[10,\"ul\"],[14,0,\"nav flex-column\"],[12],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-inbox\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Inbox\\n                                                    \"],[13],[1,\"\\n                                                    \"],[10,0],[14,0,\"ml-auto badge badge-pill badge-secondary\"],[12],[1,\"86\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-book\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Book\\n                                                    \"],[13],[1,\"\\n                                                    \"],[10,0],[14,0,\"ml-auto badge badge-pill badge-danger\"],[12],[1,\"5\"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-picture\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        Picture\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                                                \"],[10,3],[14,\"disabled\",\"\"],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link disabled\"],[12],[1,\"\\n                                                    \"],[10,\"i\"],[14,0,\"nav-link-icon lnr-file-empty\"],[12],[13],[1,\"\\n                                                    \"],[10,1],[12],[1,\"\\n                                                        File Disabled\\n                                                    \"],[13],[1,\"\\n                                                \"],[13],[1,\"\\n                                            \"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n \"]],[],false,[]]",
    "moduleName": "masterflow/components/page-header.hbs",
    "isStrictMode": false
  });

  class PageHeaderComponent extends _component2.default {}

  _exports.default = PageHeaderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PageHeaderComponent);
});
;define("masterflow/components/top-bar", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
            <div class="app-header header-shadow">
              <div class="app-header__logo">
                  <div class="logo-src"></div>
                  <div class="header__pane ml-auto">
                      <div>
                          <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                              data-class="closed-sidebar">
                              <span class="hamburger-box">
                                  <span class="hamburger-inner"></span>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="app-header__mobile-menu">
                  <div>
                      <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                          <span class="hamburger-box">
                              <span class="hamburger-inner"></span>
                          </span>
                      </button>
                  </div>
              </div>
              <div class="app-header__menu">
                  <span>
                      <button type="button"
                          class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                          <span class="btn-icon-wrapper">
                              <i class="fa fa-ellipsis-v fa-w-6"></i>
                          </span>
                      </button>
                  </span>
              </div>
              <div class="app-header__content">
                  <div class="app-header-left">
                      <div class="search-wrapper">
                          <div class="input-holder">
                              <input type="text" class="search-input" placeholder="Type to search">
                              <button class="search-icon" type="button"><span></span></button>
                          </div>
                          <button class="close" type="button"></button>
                      </div>
                      <ul class="header-menu nav">
                          <li class="nav-item">
                              <a href="javascript:void(0);" class="nav-link">
                                  <i class="nav-link-icon fa fa-database"> </i>
                                  Statistics
                              </a>
                          </li>
                          <li class="btn-group nav-item">
                              <a href="javascript:void(0);" class="nav-link">
                                  <i class="nav-link-icon fa fa-edit"></i>
                                  Projects
                              </a>
                          </li>
                          <li class="dropdown nav-item">
                              <a href="javascript:void(0);" class="nav-link">
                                  <i class="nav-link-icon fa fa-cog"></i>
                                  Settings
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div class="app-header-right">
                      <div class="header-btn-lg pr-0">
                          <div class="widget-content p-0">
                              <div class="widget-content-wrapper">
                                  <div class="widget-content-left">
                                      <div class="btn-group">
                                          <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                              class="p-0 btn">
                                              <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg"
                                                  alt="">
                                              <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                          </a>
                                          <div tabindex="-1" role="menu" aria-hidden="true"
                                              class="dropdown-menu dropdown-menu-right">
                                              <button type="button" tabindex="0" class="dropdown-item">User
                                                  Account</button>
                                              <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                                              <h6 tabindex="-1" class="dropdown-header">Header</h6>
                                              <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                                              <div tabindex="-1" class="dropdown-divider"></div>
                                              <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="widget-content-left  ml-3 header-user-info">
                                      <div class="widget-heading">
                                          Alina Mclourd
                                      </div>
                                      <div class="widget-subheading">
                                          VP People Manager
                                      </div>
                                  </div>
                                  <div class="widget-content-right header-user-info ml-3">
                                      <button type="button"
                                          class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                          <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
  */
  {
    "id": "RGe3VnwN",
    "block": "[[[1,\"        \"],[10,0],[14,0,\"app-header header-shadow\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"app-header__logo\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"logo-src\"],[12],[13],[1,\"\\n                \"],[10,0],[14,0,\"header__pane ml-auto\"],[12],[1,\"\\n                    \"],[10,0],[12],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"hamburger close-sidebar-btn hamburger--elastic\"],[14,\"data-class\",\"closed-sidebar\"],[14,4,\"button\"],[12],[1,\"\\n                            \"],[10,1],[14,0,\"hamburger-box\"],[12],[1,\"\\n                                \"],[10,1],[14,0,\"hamburger-inner\"],[12],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"app-header__mobile-menu\"],[12],[1,\"\\n                \"],[10,0],[12],[1,\"\\n                    \"],[10,\"button\"],[14,0,\"hamburger hamburger--elastic mobile-toggle-nav\"],[14,4,\"button\"],[12],[1,\"\\n                        \"],[10,1],[14,0,\"hamburger-box\"],[12],[1,\"\\n                            \"],[10,1],[14,0,\"hamburger-inner\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"app-header__menu\"],[12],[1,\"\\n                \"],[10,1],[12],[1,\"\\n                    \"],[10,\"button\"],[14,0,\"btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav\"],[14,4,\"button\"],[12],[1,\"\\n                        \"],[10,1],[14,0,\"btn-icon-wrapper\"],[12],[1,\"\\n                            \"],[10,\"i\"],[14,0,\"fa fa-ellipsis-v fa-w-6\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"app-header__content\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"app-header-left\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"search-wrapper\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"input-holder\"],[12],[1,\"\\n                            \"],[10,\"input\"],[14,0,\"search-input\"],[14,\"placeholder\",\"Type to search\"],[14,4,\"text\"],[12],[13],[1,\"\\n                            \"],[10,\"button\"],[14,0,\"search-icon\"],[14,4,\"button\"],[12],[10,1],[12],[13],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"button\"],[14,0,\"close\"],[14,4,\"button\"],[12],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"ul\"],[14,0,\"header-menu nav\"],[12],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                \"],[10,\"i\"],[14,0,\"nav-link-icon fa fa-database\"],[12],[1,\" \"],[13],[1,\"\\n                                Statistics\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"btn-group nav-item\"],[12],[1,\"\\n                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                \"],[10,\"i\"],[14,0,\"nav-link-icon fa fa-edit\"],[12],[13],[1,\"\\n                                Projects\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"dropdown nav-item\"],[12],[1,\"\\n                            \"],[10,3],[14,6,\"javascript:void(0);\"],[14,0,\"nav-link\"],[12],[1,\"\\n                                \"],[10,\"i\"],[14,0,\"nav-link-icon fa fa-cog\"],[12],[13],[1,\"\\n                                Settings\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"app-header-right\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"header-btn-lg pr-0\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"widget-content p-0\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"widget-content-wrapper\"],[12],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-left\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"btn-group\"],[12],[1,\"\\n                                        \"],[10,3],[14,\"data-toggle\",\"dropdown\"],[14,\"aria-haspopup\",\"true\"],[14,\"aria-expanded\",\"false\"],[14,0,\"p-0 btn\"],[12],[1,\"\\n                                            \"],[10,\"img\"],[14,\"width\",\"42\"],[14,0,\"rounded-circle\"],[14,\"src\",\"assets/images/avatars/1.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n                                            \"],[10,\"i\"],[14,0,\"fa fa-angle-down ml-2 opacity-8\"],[12],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                        \"],[10,0],[14,\"tabindex\",\"-1\"],[14,\"role\",\"menu\"],[14,\"aria-hidden\",\"true\"],[14,0,\"dropdown-menu dropdown-menu-right\"],[12],[1,\"\\n                                            \"],[10,\"button\"],[14,\"tabindex\",\"0\"],[14,0,\"dropdown-item\"],[14,4,\"button\"],[12],[1,\"User\\n                                                Account\"],[13],[1,\"\\n                                            \"],[10,\"button\"],[14,\"tabindex\",\"0\"],[14,0,\"dropdown-item\"],[14,4,\"button\"],[12],[1,\"Settings\"],[13],[1,\"\\n                                            \"],[10,\"h6\"],[14,\"tabindex\",\"-1\"],[14,0,\"dropdown-header\"],[12],[1,\"Header\"],[13],[1,\"\\n                                            \"],[10,\"button\"],[14,\"tabindex\",\"0\"],[14,0,\"dropdown-item\"],[14,4,\"button\"],[12],[1,\"Actions\"],[13],[1,\"\\n                                            \"],[10,0],[14,\"tabindex\",\"-1\"],[14,0,\"dropdown-divider\"],[12],[13],[1,\"\\n                                            \"],[10,\"button\"],[14,\"tabindex\",\"0\"],[14,0,\"dropdown-item\"],[14,4,\"button\"],[12],[1,\"Dividers\"],[13],[1,\"\\n                                        \"],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-left  ml-3 header-user-info\"],[12],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-heading\"],[12],[1,\"\\n                                        Alina Mclourd\\n                                    \"],[13],[1,\"\\n                                    \"],[10,0],[14,0,\"widget-subheading\"],[12],[1,\"\\n                                        VP People Manager\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                                \"],[10,0],[14,0,\"widget-content-right header-user-info ml-3\"],[12],[1,\"\\n                                    \"],[10,\"button\"],[14,0,\"btn-shadow p-1 btn btn-primary btn-sm show-toastr-example\"],[14,4,\"button\"],[12],[1,\"\\n                                        \"],[10,\"i\"],[14,0,\"fa text-white fa-calendar pr-1 pl-1\"],[12],[13],[1,\"\\n                                    \"],[13],[1,\"\\n                                \"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "masterflow/components/top-bar.hbs",
    "isStrictMode": false
  });

  class TopBarComponent extends _component2.default {}

  _exports.default = TopBarComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TopBarComponent);
});
;define("masterflow/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("masterflow/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("masterflow/helpers/app-version", ["exports", "@ember/component/helper", "masterflow/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"masterflow/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("masterflow/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("masterflow/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("masterflow/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("masterflow/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("masterflow/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "masterflow/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"masterflow/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("masterflow/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("masterflow/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("masterflow/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("masterflow/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("masterflow/router", ["exports", "@ember/routing/router", "masterflow/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"masterflow/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("masterflow/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("masterflow/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("masterflow/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("masterflow/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("masterflow/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("masterflow/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("masterflow/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("masterflow/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Masterflow"}}
  
  {{mainapp}}
  
  {{outlet}}
  */
  {
    "id": "wkzxc5iu",
    "block": "[[[1,[28,[35,0],[\"Masterflow\"],null]],[1,\"\\n\\n\"],[1,[34,1]],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"mainapp\",\"component\",\"-outlet\"]]",
    "moduleName": "masterflow/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("masterflow/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("masterflow/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("masterflow/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("masterflow/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('masterflow/config/environment', [], function() {
  var prefix = 'masterflow';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("masterflow/app")["default"].create({"name":"masterflow","version":"0.0.0+7e1e67d8"});
          }
        
//# sourceMappingURL=masterflow.map
