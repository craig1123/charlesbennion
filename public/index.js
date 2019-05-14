var charlesbennion = (function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300italic,600italic,300,600\");a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}mark{background-color:transparent;color:inherit}input::-moz-focus-inner{border:0;padding:0}input,select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none}@-ms-viewport{width:device-width}@media screen and (max-width:480px){body,html{min-width:320px}}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{background:#1b1f22}body.is-preload *,body.is-preload :after,body.is-preload :before{-moz-animation:none!important;-webkit-animation:none!important;-ms-animation:none!important;animation:none!important;-moz-transition:none!important;-webkit-transition:none!important;-ms-transition:none!important;transition:none!important}html{font-size:16pt}@media screen and (max-width:1680px){html{font-size:12pt}}@media screen and (max-width:736px){html{font-size:11pt}}@media screen and (max-width:360px){html{font-size:10pt}}body,input,select,textarea{color:#fff;font-family:Source Sans Pro,sans-serif;font-weight:300;font-size:1rem;line-height:1.65}a{-moz-transition:color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;-webkit-transition:color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;-ms-transition:color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;transition:color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;border-bottom:1px dotted hsla(0,0%,100%,.5);text-decoration:none;color:inherit}a:hover{border-bottom-color:transparent}b,strong{color:#fff;font-weight:600}em,i{font-style:italic}p{margin:0 0 2rem}h1,h2,h3,h4,h5,h6{color:#fff;font-weight:600;line-height:1.5;margin:0 0 1rem;text-transform:uppercase;letter-spacing:.2rem}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;text-decoration:none}h1.major,h2.major,h3.major,h4.major,h5.major,h6.major{border-bottom:1px solid #fff;width:-moz-max-content;width:-webkit-max-content;width:-ms-max-content;width:max-content;padding-bottom:.5rem;margin:0 0 2rem}h1{font-size:2.25rem;line-height:1.3}h1,h2{letter-spacing:.5rem}h2{font-size:1.5rem;line-height:1.4}h3{font-size:1rem}h4{font-size:.8rem}h5{font-size:.7rem}h6{font-size:.6rem}@media screen and (max-width:736px){h1{font-size:1.75rem;line-height:1.4}h2{font-size:1.25em;line-height:1.5}}sub{top:.5rem}sub,sup{font-size:.8rem;position:relative}sup{top:-.5rem}blockquote{border-left:4px solid #fff;font-style:italic;margin:0 0 2rem;padding:.5rem 0 .5rem 2rem}code{background:hsla(0,0%,100%,.075);border-radius:4px;margin:0 .25rem;padding:.25rem .65rem}code,pre{font-family:Courier New,monospace;font-size:.9rem}pre{-webkit-overflow-scrolling:touch;margin:0 0 2rem}pre code{display:block;line-height:1.75;padding:1rem 1.5rem;overflow-x:auto}hr{border:0;border-bottom:1px solid #fff;margin:2.75rem 0}.align-left{text-align:left}.align-center{text-align:center}.align-right{text-align:right}form{margin:0 0 2rem}form>:last-child{margin-bottom:0}form>.fields{display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;-moz-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:calc(100% + 3rem);margin:-1.5rem 0 2rem -1.5rem}form>.fields>.field{-moz-flex-grow:0;-webkit-flex-grow:0;-ms-flex-grow:0;flex-grow:0;-moz-flex-shrink:0;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;padding:1.5rem 0 0 1.5rem;width:calc(100% - 1.5rem)}form>.fields>.field.half{width:calc(50% - .75rem)}form>.fields>.field.third{width:calc(33.33333% - .5rem)}form>.fields>.field.quarter{width:calc(25% - .375rem)}@media screen and (max-width:480px){form>.fields{width:calc(100% + 3rem);margin:-1.5rem 0 2rem -1.5rem}form>.fields>.field{padding:1.5rem 0 0 1.5rem}form>.fields>.field,form>.fields>.field.half,form>.fields>.field.quarter,form>.fields>.field.third{width:calc(100% - 1.5rem)}}label{color:#fff;display:block;font-size:.8rem;font-weight:300;letter-spacing:.2rem;line-height:1.5;margin:0 0 1rem;text-transform:uppercase}input[type=email],input[type=password],input[type=tel],input[type=text],select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-moz-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;-webkit-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;-ms-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;background-color:transparent;border-radius:4px;border:1px solid #fff;color:inherit;display:block;outline:0;padding:0 1rem;text-decoration:none;width:100%}input[type=email]:invalid,input[type=password]:invalid,input[type=tel]:invalid,input[type=text]:invalid,select:invalid,textarea:invalid{box-shadow:none}input[type=email]:focus,input[type=password]:focus,input[type=tel]:focus,input[type=text]:focus,select:focus,textarea:focus{background:hsla(0,0%,100%,.075);border-color:#fff;box-shadow:0 0 0 1px #fff}select{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23ffffff' /%3E%3C/svg%3E\");background-size:1.25rem;background-repeat:no-repeat;background-position:calc(100% - 1rem) 50%;height:2.75rem;padding-right:2.75rem;text-overflow:ellipsis}select option{color:#fff;background:#1b1f22}select:focus::-ms-value{background-color:transparent}select::-ms-expand{display:none}input[type=email],input[type=password],input[type=text],select{height:2.75rem}textarea{padding:.75rem 1rem}input[type=checkbox],input[type=radio]{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;display:block;float:left;margin-right:-2rem;opacity:0;width:1rem;z-index:-1}input[type=checkbox]+label,input[type=radio]+label{text-decoration:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;color:#fff;cursor:pointer;display:inline-block;font-size:.8rem;font-weight:300;margin:0 0 .5rem;padding-left:2.65rem;padding-right:.75rem;position:relative}input[type=checkbox]+label:before,input[type=radio]+label:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:400;text-transform:none!important;-moz-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;-webkit-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;-ms-transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out,background-color .2s ease-in-out;border-radius:4px;border:1px solid #fff;content:\"\";display:inline-block;height:1.65rem;left:0;line-height:1.58125rem;position:absolute;text-align:center;top:-.125rem;width:1.65rem}input[type=checkbox]:checked+label:before,input[type=radio]:checked+label:before{background:#fff!important;border-color:#fff!important;color:#1b1f22;content:\"\\f00c\"}input[type=checkbox]:focus+label:before,input[type=radio]:focus+label:before{background:hsla(0,0%,100%,.075);border-color:#fff;box-shadow:0 0 0 1px #fff}input[type=checkbox]+label:before{border-radius:4px}input[type=radio]+label:before{border-radius:100%}::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)!important;opacity:1}:-moz-placeholder,::-moz-placeholder{color:hsla(0,0%,100%,.5)!important;opacity:1}:-ms-input-placeholder{color:hsla(0,0%,100%,.5)!important;opacity:1}.formerize-placeholder{color:hsla(0,0%,100%,.5)!important;opacity:1}.box{border-radius:4px;border:1px solid #fff;margin-bottom:2rem;padding:1.5em}.box>:last-child,.box>:last-child>:last-child,.box>:last-child>:last-child>:last-child{margin-bottom:0}.box.alt{border:0;border-radius:0;padding:0}.icon{text-decoration:none;border-bottom:none;position:relative}.icon:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:400;text-transform:none!important}.icon>.label{display:none}.image{border-radius:4px;border:0;display:inline-block;position:relative}.image:before{pointer-events:none;background-image:url(../../images/overlay.png);background-color:rgba(19,21,25,.5);content:\"\";height:100%;left:0;opacity:.5;position:absolute;top:0;width:100%}.image:before,.image img{border-radius:4px;display:block}.image.left,.image.right{max-width:40%}.image.left img,.image.right img{width:100%}.image.left{float:left;padding:0 1.5em 1em 0;top:.25em}.image.right{float:right;padding:0 0 1em 1.5em;top:.25em}.image.fit{display:block;margin:0 0 2rem;width:100%}.image.fit img{width:100%}.image.main{display:block;margin:2.5rem 0;width:100%}.image.main img{width:100%}@media screen and (max-width:736px){.image.main{margin:2rem 0}}@media screen and (max-width:480px){.image.main{margin:1.5rem 0}}ol{list-style:decimal;margin:0 0 2rem;padding-left:1.25em}ol li{padding-left:.25em}ul{list-style:disc;margin:0 0 2rem;padding-left:1em}ul li{padding-left:.5em}ul.alt{list-style:none;padding-left:0}ul.alt li{border-top:1px solid #fff;padding:.5em 0}ul.alt li:first-child{border-top:0;padding-top:0}dl{margin:0 0 2rem}dl dt{display:block;font-weight:600;margin:0 0 1rem}dl dd{margin-left:2rem}ul.actions{display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;cursor:default;list-style:none;margin-left:-1rem;padding-left:0}ul.actions li{padding:0 0 0 1rem;vertical-align:middle}ul.actions.special{-moz-justify-content:center;-webkit-justify-content:center;-ms-justify-content:center;justify-content:center;width:100%;margin-left:0}ul.actions.special li:first-child{padding-left:0}ul.actions.stacked{-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:0}ul.actions.stacked li{padding:1.3rem 0 0}ul.actions.stacked li:first-child{padding-top:0}ul.actions.fit{width:calc(100% + 1rem)}ul.actions.fit li{-moz-flex-grow:1;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-moz-flex-shrink:1;-webkit-flex-shrink:1;-ms-flex-shrink:1;flex-shrink:1;width:100%}ul.actions.fit.stacked,ul.actions.fit li>*{width:100%}@media screen and (max-width:480px){ul.actions:not(.fixed){-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:0;width:100%!important}ul.actions:not(.fixed) li{-moz-flex-grow:1;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-moz-flex-shrink:1;-webkit-flex-shrink:1;-ms-flex-shrink:1;flex-shrink:1;padding:1rem 0 0;text-align:center;width:100%}ul.actions:not(.fixed) li>*{width:100%}ul.actions:not(.fixed) li:first-child{padding-top:0}ul.actions:not(.fixed) li .button,ul.actions:not(.fixed) li button,ul.actions:not(.fixed) li input[type=button],ul.actions:not(.fixed) li input[type=reset],ul.actions:not(.fixed) li input[type=submit]{width:100%}ul.actions:not(.fixed) li .button.icon:before,ul.actions:not(.fixed) li button.icon:before,ul.actions:not(.fixed) li input[type=button].icon:before,ul.actions:not(.fixed) li input[type=reset].icon:before,ul.actions:not(.fixed) li input[type=submit].icon:before{margin-left:-.5em}}ul.icons{cursor:default;list-style:none;padding-left:0}ul.icons li{display:inline-block;padding:0 .75em 0 0}ul.icons li:last-child{padding-right:0}ul.icons li a{border-radius:100%;box-shadow:inset 0 0 0 1px #fff;display:inline-block;height:2.25rem;line-height:2.25rem;text-align:center;width:2.25rem}ul.icons li a:hover{background-color:hsla(0,0%,100%,.075)}ul.icons li a:active{background-color:hsla(0,0%,100%,.175)}.table-wrapper{-webkit-overflow-scrolling:touch;overflow-x:auto}table{margin:0 0 2rem;width:100%}table tbody tr{border:1px solid #fff;border-left:0;border-right:0}table tbody tr:nth-child(odd){background-color:hsla(0,0%,100%,.075)}table td{padding:.75em}table th{color:#fff;font-size:.9em;font-weight:600;padding:0 .75em .75em;text-align:left}table thead{border-bottom:2px solid #fff}table tfoot{border-top:2px solid #fff}table.alt{border-collapse:separate}table.alt tbody tr td{border-color:#fff;border-style:solid;border-width:0 1px 1px 0}table.alt tbody tr td:first-child{border-left-width:1px}table.alt tbody tr:first-child td{border-top-width:1px}table.alt thead{border-bottom:0}table.alt tfoot{border-top:0}.button,button,input[type=button],input[type=reset],input[type=submit]{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-moz-transition:background-color .2s ease-in-out,color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out;-ms-transition:background-color .2s ease-in-out,color .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out;background-color:transparent;border-radius:4px;border:0;box-shadow:inset 0 0 0 1px #fff;color:#fff!important;cursor:pointer;display:inline-block;font-size:.8rem;font-weight:300;height:2.75rem;letter-spacing:.2rem;line-height:2.75rem;outline:0;padding:0 1.25rem 0 1.35rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}.button:hover,button:hover,input[type=button]:hover,input[type=reset]:hover,input[type=submit]:hover{background-color:hsla(0,0%,100%,.075)}.button:active,button:active,input[type=button]:active,input[type=reset]:active,input[type=submit]:active{background-color:hsla(0,0%,100%,.175)}.button.icon:before,button.icon:before,input[type=button].icon:before,input[type=reset].icon:before,input[type=submit].icon:before{margin-right:.5em}.button.fit,button.fit,input[type=button].fit,input[type=reset].fit,input[type=submit].fit{width:100%}.button.small,button.small,input[type=button].small,input[type=reset].small,input[type=submit].small{font-size:.6rem;height:2.0625rem;line-height:2.0625rem}.button.primary,button.primary,input[type=button].primary,input[type=reset].primary,input[type=submit].primary{background-color:#fff;color:#1b1f22!important;font-weight:600}.button.disabled,.button:disabled,button.disabled,button:disabled,input[type=button].disabled,input[type=button]:disabled,input[type=reset].disabled,input[type=reset]:disabled,input[type=submit].disabled,input[type=submit]:disabled{pointer-events:none;cursor:default;opacity:.25}button,input[type=button],input[type=reset],input[type=submit]{line-height:calc(2.75rem - 2px)}#bg{-moz-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-backface-visibility:hidden;position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1}#bg:after,#bg:before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}#bg:before{-moz-transition:background-color 2.5s ease-in-out;-webkit-transition:background-color 2.5s ease-in-out;-ms-transition:background-color 2.5s ease-in-out;transition:background-color 2.5s ease-in-out;-moz-transition-delay:.75s;-webkit-transition-delay:.75s;-ms-transition-delay:.75s;transition-delay:.75s;background-image:linear-gradient(0deg,rgba(19,21,25,.5),rgba(19,21,25,.5)),url(../../images/overlay.png);background-size:auto,256px 256px;background-position:50%,50%;background-repeat:no-repeat,repeat;z-index:2}#bg:after{-moz-transform:scale(1.125);-webkit-transform:scale(1.125);-ms-transform:scale(1.125);transform:scale(1.125);-moz-transition:-moz-transform .325s ease-in-out,-moz-filter .325s ease-in-out;-webkit-transition:-webkit-transform .325s ease-in-out,-webkit-filter .325s ease-in-out;-ms-transition:-ms-transform .325s ease-in-out,-ms-filter .325s ease-in-out;transition:transform .325s ease-in-out,filter .325s ease-in-out;background-image:url(../../images/bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat;z-index:1}body.is-article-visible #bg:after{-moz-transform:scale(1.0825);-webkit-transform:scale(1.0825);-ms-transform:scale(1.0825);transform:scale(1.0825);-moz-filter:blur(.2rem);-webkit-filter:blur(.2rem);-ms-filter:blur(.2rem);filter:blur(.2rem)}body.is-preload #bg:before{background-color:#000}#wrapper{display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-moz-align-items:center;-webkit-align-items:center;-ms-align-items:center;align-items:center;-moz-justify-content:space-between;-webkit-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;position:relative;min-height:100vh;width:100%;padding:4rem 2rem;z-index:3}#wrapper:before{content:\"\";display:block}@media screen and (max-width:1680px){#wrapper{padding:3rem 2rem}}@media screen and (max-width:736px){#wrapper{padding:2rem 1rem}}@media screen and (max-width:480px){#wrapper{padding:1rem}}#header{display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-moz-align-items:center;-webkit-align-items:center;-ms-align-items:center;align-items:center;-moz-transition:-moz-transform .325s ease-in-out,-moz-filter .325s ease-in-out,opacity .325s ease-in-out;-webkit-transition:-webkit-transform .325s ease-in-out,-webkit-filter .325s ease-in-out,opacity .325s ease-in-out;-ms-transition:-ms-transform .325s ease-in-out,-ms-filter .325s ease-in-out,opacity .325s ease-in-out;transition:transform .325s ease-in-out,filter .325s ease-in-out,opacity .325s ease-in-out;background-image:-moz-radial-gradient(rgba(0,0,0,.25) 25%,transparent 55%);background-image:-webkit-radial-gradient(rgba(0,0,0,.25) 25%,transparent 55%);background-image:-ms-radial-gradient(rgba(0,0,0,.25) 25%,transparent 55%);background-image:radial-gradient(rgba(0,0,0,.25) 25%,transparent 55%);max-width:100%;text-align:center}#header>*{-moz-transition:opacity .325s ease-in-out;-webkit-transition:opacity .325s ease-in-out;-ms-transition:opacity .325s ease-in-out;transition:opacity .325s ease-in-out;position:relative;margin-top:3.5rem}#header>:before{content:\"\";display:block;position:absolute;top:calc(-3.5rem - 1px);left:calc(50% - 1px);width:1px;height:calc(3.5rem + 1px);background:#fff}#header>:first-child{margin-top:0}#header>:first-child:before{display:none}#header .logo{width:5.5rem;height:5.5rem;line-height:5.5rem;border:1px solid #fff;border-radius:100%}#header .logo .icon:before{font-size:2rem}#header .content{border-left-style:solid;border-right-style:solid;border-left-color:#fff;border-right-color:#fff;border-top:1px solid #fff;border-bottom:1px solid #fff;max-width:100%}#header .content .inner{-moz-transition:max-height .75s ease,padding .75s ease,opacity .325s ease-in-out;-webkit-transition:max-height .75s ease,padding .75s ease,opacity .325s ease-in-out;-ms-transition:max-height .75s ease,padding .75s ease,opacity .325s ease-in-out;transition:max-height .75s ease,padding .75s ease,opacity .325s ease-in-out;-moz-transition-delay:.25s;-webkit-transition-delay:.25s;-ms-transition-delay:.25s;transition-delay:.25s;padding:3rem 2rem;max-height:40rem;overflow:hidden}#header .content .inner>:last-child{margin-bottom:0}#header .content p{text-transform:uppercase;letter-spacing:.2rem;font-size:.8rem;line-height:2}#header nav ul{display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;margin-bottom:0;list-style:none;padding-left:0;border:1px solid #fff;border-radius:4px}#header nav ul li{padding-left:0;border-left:1px solid #fff}#header nav ul li:first-child{border-left:0}#header nav ul li a{display:block;min-width:7.5rem;height:2.75rem;line-height:2.75rem;padding:0 1.25rem 0 1.45rem;text-transform:uppercase;letter-spacing:.2rem;font-size:.8rem;border-bottom:0}#header nav ul li a:hover{background-color:hsla(0,0%,100%,.075)}#header nav ul li a:active{background-color:hsla(0,0%,100%,.175)}#header nav.use-middle:after{content:\"\";display:block;position:absolute;top:0;left:calc(50% - 1px);width:1px;height:100%;background:#fff}#header nav.use-middle ul li.is-middle{border-left:0}body.is-article-visible #header{-moz-transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95);-moz-filter:blur(.1rem);-webkit-filter:blur(.1rem);-ms-filter:blur(.1rem);filter:blur(.1rem);opacity:0}body.is-preload #header{-moz-filter:blur(.125rem);-webkit-filter:blur(.125rem);-ms-filter:blur(.125rem);filter:blur(.125rem)}body.is-preload #header>*{opacity:0}body.is-preload #header .content .inner{max-height:0;padding-top:0;padding-bottom:0;opacity:0}@media screen and (max-width:980px){#header .content p br{display:none}}@media screen and (max-width:736px){#header>*{margin-top:2rem}#header>:before{top:calc(-2rem - 1px);height:calc(2rem + 1px)}#header .logo{width:4.75rem;height:4.75rem;line-height:4.75rem}#header .logo .icon:before{font-size:1.75rem}#header .content .inner{padding:2.5rem 1rem}#header .content p{line-height:1.875}}@media screen and (max-width:480px){#header{padding:1.5rem 0}#header .content .inner{padding:2.5rem 0}#header nav ul{-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:10rem;max-width:100%}#header nav ul li{border-left:0;border-top:1px solid #fff}#header nav ul li:first-child{border-top:0}#header nav ul li a{height:3rem;line-height:3rem;min-width:0;width:100%}#header nav.use-middle:after{display:none}}#main{-moz-flex-grow:1;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-moz-flex-shrink:1;-webkit-flex-shrink:1;-ms-flex-shrink:1;flex-shrink:1;display:-moz-flex;display:-webkit-flex;display:-ms-flex;display:flex;-moz-align-items:center;-webkit-align-items:center;-ms-align-items:center;align-items:center;-moz-justify-content:center;-webkit-justify-content:center;-ms-justify-content:center;justify-content:center;-moz-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:3}#main,#main article{position:relative;max-width:100%}#main article{-moz-transform:translateY(.25rem);-webkit-transform:translateY(.25rem);-ms-transform:translateY(.25rem);transform:translateY(.25rem);-moz-transition:opacity .325s ease-in-out,-moz-transform .325s ease-in-out;-webkit-transition:opacity .325s ease-in-out,-webkit-transform .325s ease-in-out;-ms-transition:opacity .325s ease-in-out,-ms-transform .325s ease-in-out;transition:opacity .325s ease-in-out,transform .325s ease-in-out;padding:4.5rem 2.5rem 1.5rem;width:40rem;background-color:rgba(27,31,34,.85);border-radius:4px;opacity:0}#main article.active{-moz-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}#main article .close{display:block;position:absolute;top:0;right:0;width:4rem;height:4rem;cursor:pointer;text-indent:4rem;overflow:hidden;white-space:nowrap}#main article .close:before{-moz-transition:background-color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out;-ms-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out;content:\"\";display:block;position:absolute;top:.75rem;left:.75rem;width:2.5rem;height:2.5rem;border-radius:100%;background-position:50%;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E\");background-size:20px 20px;background-repeat:no-repeat}#main article .close:hover:before{background-color:hsla(0,0%,100%,.075)}#main article .close:active:before{background-color:hsla(0,0%,100%,.175)}@media screen and (max-width:736px){#main article{padding:3.5rem 2rem .5rem}#main article .close:before{top:.875rem;left:.875rem;width:2.25rem;height:2.25rem;background-size:14px 14px}}@media screen and (max-width:480px){#main article{padding:3rem 1.5rem .5rem}}#footer{-moz-transition:-moz-transform .325s ease-in-out,-moz-filter .325s ease-in-out,opacity .325s ease-in-out;-webkit-transition:-webkit-transform .325s ease-in-out,-webkit-filter .325s ease-in-out,opacity .325s ease-in-out;-ms-transition:-ms-transform .325s ease-in-out,-ms-filter .325s ease-in-out,opacity .325s ease-in-out;transition:transform .325s ease-in-out,filter .325s ease-in-out,opacity .325s ease-in-out;width:100%;max-width:100%;margin-top:2rem;text-align:center}#footer .copyright{letter-spacing:.2rem;font-size:.6rem;opacity:.75;margin-bottom:0;text-transform:uppercase}body.is-article-visible #footer{-moz-transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95);-moz-filter:blur(.1rem);-webkit-filter:blur(.1rem);-ms-filter:blur(.1rem);filter:blur(.1rem);opacity:0}body.is-preload #footer{opacity:0}";
  styleInject(css);

  var main = /*#__PURE__*/Object.freeze({
    'default': css
  });

  (function($) {

  	var	$window = $(window),
  		$body = $('body'),
  		$wrapper = $('#wrapper'),
  		$header = $('#header'),
  		$footer = $('#footer'),
  		$main = $('#main'),
  		$main_articles = $main.children('article');

  	// Breakpoints.
  		breakpoints({
  			xlarge:   [ '1281px',  '1680px' ],
  			large:    [ '981px',   '1280px' ],
  			medium:   [ '737px',   '980px'  ],
  			small:    [ '481px',   '736px'  ],
  			xsmall:   [ '361px',   '480px'  ],
  			xxsmall:  [ null,      '360px'  ]
  		});

  		var year = new Date().getFullYear();
  		$('#copyright-year').text(year);

  		$('#contact-submit').on('submit', function(e) {
  			e.preventDefault();
  			var values = $(this).serializeArray();
  			window.location = 'mailto:Charles.bennion@gmail.com?subject=Piano - ' + values[0].value + '&body=' + values[1].value;
  		});


  	// Play initial animations on page load.
  		$window.on('load', function() {
  			window.setTimeout(function() {
  				$body.removeClass('is-preload');
  			}, 100);
  		});

  	// Fix: Flexbox min-height bug on IE.
  		if (browser.name == 'ie') {

  			var flexboxFixTimeoutId;

  			$window.on('resize.flexbox-fix', function() {

  				clearTimeout(flexboxFixTimeoutId);

  				flexboxFixTimeoutId = setTimeout(function() {

  					if ($wrapper.prop('scrollHeight') > $window.height())
  						$wrapper.css('height', 'auto');
  					else
  						$wrapper.css('height', '100vh');

  				}, 250);

  			}).triggerHandler('resize.flexbox-fix');

  		}

  	// Nav.
  		var $nav = $header.children('nav'),
  			$nav_li = $nav.find('li');

  		// Add "middle" alignment classes if we're dealing with an even number of items.
  			if ($nav_li.length % 2 == 0) {

  				$nav.addClass('use-middle');
  				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

  			}

  	// Main.
  		var	delay = 325,
  			locked = false;

  		// Methods.
  			$main._show = function(id, initial) {

  				var $article = $main_articles.filter('#' + id);

  				// No such article? Bail.
  					if ($article.length == 0)
  						return;

  				// Handle lock.

  					// Already locked? Speed through "show" steps w/o delays.
  						if (locked || (typeof initial != 'undefined' && initial === true)) {

  							// Mark as switching.
  								$body.addClass('is-switching');

  							// Mark as visible.
  								$body.addClass('is-article-visible');

  							// Deactivate all articles (just in case one's already active).
  								$main_articles.removeClass('active');

  							// Hide header, footer.
  								$header.hide();
  								$footer.hide();

  							// Show main, article.
  								$main.show();
  								$article.show();

  							// Activate article.
  								$article.addClass('active');

  							// Unlock.
  								locked = false;

  							// Unmark as switching.
  								setTimeout(function() {
  									$body.removeClass('is-switching');
  								}, (initial ? 1000 : 0));

  							return;

  						}

  					// Lock.
  						locked = true;

  				// Article already visible? Just swap articles.
  					if ($body.hasClass('is-article-visible')) {

  						// Deactivate current article.
  							var $currentArticle = $main_articles.filter('.active');

  							$currentArticle.removeClass('active');

  						// Show article.
  							setTimeout(function() {

  								// Hide current article.
  									$currentArticle.hide();

  								// Show article.
  									$article.show();

  								// Activate article.
  									setTimeout(function() {

  										$article.addClass('active');

  										// Window stuff.
  											$window
  												.scrollTop(0)
  												.triggerHandler('resize.flexbox-fix');

  										// Unlock.
  											setTimeout(function() {
  												locked = false;
  											}, delay);

  									}, 25);

  							}, delay);

  					}

  				// Otherwise, handle as normal.
  					else {

  						// Mark as visible.
  							$body
  								.addClass('is-article-visible');

  						// Show article.
  							setTimeout(function() {

  								// Hide header, footer.
  									$header.hide();
  									$footer.hide();

  								// Show main, article.
  									$main.show();
  									$article.show();

  								// Activate article.
  									setTimeout(function() {

  										$article.addClass('active');

  										// Window stuff.
  											$window
  												.scrollTop(0)
  												.triggerHandler('resize.flexbox-fix');

  										// Unlock.
  											setTimeout(function() {
  												locked = false;
  											}, delay);

  									}, 25);

  							}, delay);

  					}

  			};

  			$main._hide = function(addState) {

  				var $article = $main_articles.filter('.active');

  				// Article not visible? Bail.
  					if (!$body.hasClass('is-article-visible'))
  						return;

  				// Add state?
  					if (typeof addState != 'undefined'
  					&&	addState === true)
  						history.pushState(null, null, '#');

  				// Handle lock.

  					// Already locked? Speed through "hide" steps w/o delays.
  						if (locked) {

  							// Mark as switching.
  								$body.addClass('is-switching');

  							// Deactivate article.
  								$article.removeClass('active');

  							// Hide article, main.
  								$article.hide();
  								$main.hide();

  							// Show footer, header.
  								$footer.show();
  								$header.show();

  							// Unmark as visible.
  								$body.removeClass('is-article-visible');

  							// Unlock.
  								locked = false;

  							// Unmark as switching.
  								$body.removeClass('is-switching');

  							// Window stuff.
  								$window
  									.scrollTop(0)
  									.triggerHandler('resize.flexbox-fix');

  							return;

  						}

  					// Lock.
  						locked = true;

  				// Deactivate article.
  					$article.removeClass('active');

  				// Hide article.
  					setTimeout(function() {

  						// Hide article, main.
  							$article.hide();
  							$main.hide();

  						// Show footer, header.
  							$footer.show();
  							$header.show();

  						// Unmark as visible.
  							setTimeout(function() {

  								$body.removeClass('is-article-visible');

  								// Window stuff.
  									$window
  										.scrollTop(0)
  										.triggerHandler('resize.flexbox-fix');

  								// Unlock.
  									setTimeout(function() {
  										locked = false;
  									}, delay);

  							}, 25);

  					}, delay);


  			};

  		// Articles.
  			$main_articles.each(function() {

  				var $this = $(this);

  				// Close.
  					$('<div class="close">Close</div>')
  						.appendTo($this)
  						.on('click', function() {
  							location.hash = '';
  						});

  				// Prevent clicks from inside article from bubbling.
  					$this.on('click', function(event) {
  						event.stopPropagation();
  					});

  			});

  		// Events.
  			$body.on('click', function(event) {

  				// Article visible? Hide.
  					if ($body.hasClass('is-article-visible'))
  						$main._hide(true);

  			});

  			$window.on('keyup', function(event) {

  				switch (event.keyCode) {

  					case 27:

  						// Article visible? Hide.
  							if ($body.hasClass('is-article-visible'))
  								$main._hide(true);

  						break;

  					default:
  						break;

  				}

  			});

  			$window.on('hashchange', function(event) {

  				// Empty hash?
  					if (location.hash == ''
  					||	location.hash == '#') {

  						// Prevent default.
  							event.preventDefault();
  							event.stopPropagation();

  						// Hide.
  							$main._hide();

  					}

  				// Otherwise, check for a matching article.
  					else if ($main_articles.filter(location.hash).length > 0) {

  						// Prevent default.
  							event.preventDefault();
  							event.stopPropagation();

  						// Show article.
  							$main._show(location.hash.substr(1));

  					}

  			});

  		// Scroll restoration.
  		// This prevents the page from scrolling back to the top on a hashchange.
  			if ('scrollRestoration' in history)
  				history.scrollRestoration = 'manual';
  			else {

  				var	oldScrollPos = 0,
  					scrollPos = 0,
  					$htmlbody = $('html,body');

  				$window
  					.on('scroll', function() {

  						oldScrollPos = scrollPos;
  						scrollPos = $htmlbody.scrollTop();

  					})
  					.on('hashchange', function() {
  						$window.scrollTop(oldScrollPos);
  					});

  			}

  		// Initialize.

  			// Hide main, articles.
  				$main.hide();
  				$main_articles.hide();

  			// Initial article.
  				if (location.hash != ''
  				&&	location.hash != '#')
  					$window.on('load', function() {
  						$main._show(location.hash.substr(1), true);
  					});

  })(jQuery);

  var main$1 = /*#__PURE__*/Object.freeze({

  });

  (function($) {

  	/**
  	 * Generate an indented list of links from a nav. Meant for use with panel().
  	 * @return {jQuery} jQuery object.
  	 */
  	$.fn.navList = function() {

  		var	$this = $(this);
  			$a = $this.find('a'),
  			b = [];

  		$a.each(function() {

  			var	$this = $(this),
  				indent = Math.max(0, $this.parents('li').length - 1),
  				href = $this.attr('href'),
  				target = $this.attr('target');

  			b.push(
  				'<a ' +
  					'class="link depth-' + indent + '"' +
  					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
  					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
  				'>' +
  					'<span class="indent-' + indent + '"></span>' +
  					$this.text() +
  				'</a>'
  			);

  		});

  		return b.join('');

  	};

  	/**
  	 * Panel-ify an element.
  	 * @param {object} userConfig User config.
  	 * @return {jQuery} jQuery object.
  	 */
  	$.fn.panel = function(userConfig) {

  		// No elements?
  			if (this.length == 0)
  				return $this;

  		// Multiple elements?
  			if (this.length > 1) {

  				for (var i=0; i < this.length; i++)
  					$(this[i]).panel(userConfig);

  				return $this;

  			}

  		// Vars.
  			var	$this = $(this),
  				$body = $('body'),
  				$window = $(window),
  				id = $this.attr('id'),
  				config;

  		// Config.
  			config = $.extend({

  				// Delay.
  					delay: 0,

  				// Hide panel on link click.
  					hideOnClick: false,

  				// Hide panel on escape keypress.
  					hideOnEscape: false,

  				// Hide panel on swipe.
  					hideOnSwipe: false,

  				// Reset scroll position on hide.
  					resetScroll: false,

  				// Reset forms on hide.
  					resetForms: false,

  				// Side of viewport the panel will appear.
  					side: null,

  				// Target element for "class".
  					target: $this,

  				// Class to toggle.
  					visibleClass: 'visible'

  			}, userConfig);

  			// Expand "target" if it's not a jQuery object already.
  				if (typeof config.target != 'jQuery')
  					config.target = $(config.target);

  		// Panel.

  			// Methods.
  				$this._hide = function(event) {

  					// Already hidden? Bail.
  						if (!config.target.hasClass(config.visibleClass))
  							return;

  					// If an event was provided, cancel it.
  						if (event) {

  							event.preventDefault();
  							event.stopPropagation();

  						}

  					// Hide.
  						config.target.removeClass(config.visibleClass);

  					// Post-hide stuff.
  						window.setTimeout(function() {

  							// Reset scroll position.
  								if (config.resetScroll)
  									$this.scrollTop(0);

  							// Reset forms.
  								if (config.resetForms)
  									$this.find('form').each(function() {
  										this.reset();
  									});

  						}, config.delay);

  				};

  			// Vendor fixes.
  				$this
  					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
  					.css('-webkit-overflow-scrolling', 'touch');

  			// Hide on click.
  				if (config.hideOnClick) {

  					$this.find('a')
  						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

  					$this
  						.on('click', 'a', function(event) {

  							var $a = $(this),
  								href = $a.attr('href'),
  								target = $a.attr('target');

  							if (!href || href == '#' || href == '' || href == '#' + id)
  								return;

  							// Cancel original event.
  								event.preventDefault();
  								event.stopPropagation();

  							// Hide panel.
  								$this._hide();

  							// Redirect to href.
  								window.setTimeout(function() {

  									if (target == '_blank')
  										window.open(href);
  									else
  										window.location.href = href;

  								}, config.delay + 10);

  						});

  				}

  			// Event: Touch stuff.
  				$this.on('touchstart', function(event) {

  					$this.touchPosX = event.originalEvent.touches[0].pageX;
  					$this.touchPosY = event.originalEvent.touches[0].pageY;

  				});

  				$this.on('touchmove', function(event) {

  					if ($this.touchPosX === null
  					||	$this.touchPosY === null)
  						return;

  					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
  						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
  						th = $this.outerHeight(),
  						ts = ($this.get(0).scrollHeight - $this.scrollTop());

  					// Hide on swipe?
  						if (config.hideOnSwipe) {

  							var result = false,
  								boundary = 20,
  								delta = 50;

  							switch (config.side) {

  								case 'left':
  									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
  									break;

  								case 'right':
  									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
  									break;

  								case 'top':
  									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
  									break;

  								case 'bottom':
  									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
  									break;

  								default:
  									break;

  							}

  							if (result) {

  								$this.touchPosX = null;
  								$this.touchPosY = null;
  								$this._hide();

  								return false;

  							}

  						}

  					// Prevent vertical scrolling past the top or bottom.
  						if (($this.scrollTop() < 0 && diffY < 0)
  						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

  							event.preventDefault();
  							event.stopPropagation();

  						}

  				});

  			// Event: Prevent certain events inside the panel from bubbling.
  				$this.on('click touchend touchstart touchmove', function(event) {
  					event.stopPropagation();
  				});

  			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
  				$this.on('click', 'a[href="#' + id + '"]', function(event) {

  					event.preventDefault();
  					event.stopPropagation();

  					config.target.removeClass(config.visibleClass);

  				});

  		// Body.

  			// Event: Hide panel on body click/tap.
  				$body.on('click touchend', function(event) {
  					$this._hide(event);
  				});

  			// Event: Toggle.
  				$body.on('click', 'a[href="#' + id + '"]', function(event) {

  					event.preventDefault();
  					event.stopPropagation();

  					config.target.toggleClass(config.visibleClass);

  				});

  		// Window.

  			// Event: Hide on ESC.
  				if (config.hideOnEscape)
  					$window.on('keydown', function(event) {

  						if (event.keyCode == 27)
  							$this._hide(event);

  					});

  		return $this;

  	};

  	/**
  	 * Apply "placeholder" attribute polyfill to one or more forms.
  	 * @return {jQuery} jQuery object.
  	 */
  	$.fn.placeholder = function() {

  		// Browser natively supports placeholders? Bail.
  			if (typeof (document.createElement('input')).placeholder != 'undefined')
  				return $(this);

  		// No elements?
  			if (this.length == 0)
  				return $this;

  		// Multiple elements?
  			if (this.length > 1) {

  				for (var i=0; i < this.length; i++)
  					$(this[i]).placeholder();

  				return $this;

  			}

  		// Vars.
  			var $this = $(this);

  		// Text, TextArea.
  			$this.find('input[type=text],textarea')
  				.each(function() {

  					var i = $(this);

  					if (i.val() == ''
  					||  i.val() == i.attr('placeholder'))
  						i
  							.addClass('polyfill-placeholder')
  							.val(i.attr('placeholder'));

  				})
  				.on('blur', function() {

  					var i = $(this);

  					if (i.attr('name').match(/-polyfill-field$/))
  						return;

  					if (i.val() == '')
  						i
  							.addClass('polyfill-placeholder')
  							.val(i.attr('placeholder'));

  				})
  				.on('focus', function() {

  					var i = $(this);

  					if (i.attr('name').match(/-polyfill-field$/))
  						return;

  					if (i.val() == i.attr('placeholder'))
  						i
  							.removeClass('polyfill-placeholder')
  							.val('');

  				});

  		// Password.
  			$this.find('input[type=password]')
  				.each(function() {

  					var i = $(this);
  					var x = $(
  								$('<div>')
  									.append(i.clone())
  									.remove()
  									.html()
  									.replace(/type="password"/i, 'type="text"')
  									.replace(/type=password/i, 'type=text')
  					);

  					if (i.attr('id') != '')
  						x.attr('id', i.attr('id') + '-polyfill-field');

  					if (i.attr('name') != '')
  						x.attr('name', i.attr('name') + '-polyfill-field');

  					x.addClass('polyfill-placeholder')
  						.val(x.attr('placeholder')).insertAfter(i);

  					if (i.val() == '')
  						i.hide();
  					else
  						x.hide();

  					i
  						.on('blur', function(event) {

  							event.preventDefault();

  							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

  							if (i.val() == '') {

  								i.hide();
  								x.show();

  							}

  						});

  					x
  						.on('focus', function(event) {

  							event.preventDefault();

  							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

  							x.hide();

  							i
  								.show()
  								.focus();

  						})
  						.on('keypress', function(event) {

  							event.preventDefault();
  							x.val('');

  						});

  				});

  		// Events.
  			$this
  				.on('submit', function() {

  					$this.find('input[type=text],input[type=password],textarea')
  						.each(function(event) {

  							var i = $(this);

  							if (i.attr('name').match(/-polyfill-field$/))
  								i.attr('name', '');

  							if (i.val() == i.attr('placeholder')) {

  								i.removeClass('polyfill-placeholder');
  								i.val('');

  							}

  						});

  				})
  				.on('reset', function(event) {

  					event.preventDefault();

  					$this.find('select')
  						.val($('option:first').val());

  					$this.find('input,textarea')
  						.each(function() {

  							var i = $(this),
  								x;

  							i.removeClass('polyfill-placeholder');

  							switch (this.type) {

  								case 'submit':
  								case 'reset':
  									break;

  								case 'password':
  									i.val(i.attr('defaultValue'));

  									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

  									if (i.val() == '') {
  										i.hide();
  										x.show();
  									}
  									else {
  										i.show();
  										x.hide();
  									}

  									break;

  								case 'checkbox':
  								case 'radio':
  									i.attr('checked', i.attr('defaultValue'));
  									break;

  								case 'text':
  								case 'textarea':
  									i.val(i.attr('defaultValue'));

  									if (i.val() == '') {
  										i.addClass('polyfill-placeholder');
  										i.val(i.attr('placeholder'));
  									}

  									break;

  								default:
  									i.val(i.attr('defaultValue'));
  									break;

  							}
  						});

  				});

  		return $this;

  	};

  	/**
  	 * Moves elements to/from the first positions of their respective parents.
  	 * @param {jQuery} $elements Elements (or selector) to move.
  	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
  	 */
  	$.prioritize = function($elements, condition) {

  		var key = '__prioritize';

  		// Expand $elements if it's not already a jQuery object.
  			if (typeof $elements != 'jQuery')
  				$elements = $($elements);

  		// Step through elements.
  			$elements.each(function() {

  				var	$e = $(this), $p,
  					$parent = $e.parent();

  				// No parent? Bail.
  					if ($parent.length == 0)
  						return;

  				// Not moved? Move it.
  					if (!$e.data(key)) {

  						// Condition is false? Bail.
  							if (!condition)
  								return;

  						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
  							$p = $e.prev();

  							// Couldn't find anything? Means this element's already at the top, so bail.
  								if ($p.length == 0)
  									return;

  						// Move element to top of parent.
  							$e.prependTo($parent);

  						// Mark element as moved.
  							$e.data(key, $p);

  					}

  				// Moved already?
  					else {

  						// Condition is true? Bail.
  							if (condition)
  								return;

  						$p = $e.data(key);

  						// Move element back to its original location (using our placeholder).
  							$e.insertAfter($p);

  						// Unmark element as moved.
  							$e.removeData(key);

  					}

  			});

  	};

  })(jQuery);

  var util = /*#__PURE__*/Object.freeze({

  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var main$2 = getCjsExportFromNamespace(main);

  var js = {

  };

  return js;

}());
