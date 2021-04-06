(function(){'use strict';$(document).ready(function(){var currentOptions={headerBackground:"header-white",navigationBackground:"sidebar-dark",menuDropdownIcon:'icon-style-1',menuListIcon:'icon-list-style-1',}
function getOptions(){return JSON.parse(localStorage.getItem("optionsObject"))}
function setOptions(propertyName,propertyValue){var optionsCopy=Object.assign({},currentOptions);optionsCopy[propertyName]=propertyValue
localStorage.setItem("optionsObject",JSON.stringify(optionsCopy))}
if(getOptions()!=null){currentOptions=getOptions()}else{localStorage.setItem("optionsObject",JSON.stringify(currentOptions))}
function clearOptions(){localStorage.removeItem("optionsObject")}
if(getOptions()!=null){currentOptions=getOptions()}else{localStorage.setItem("optionsObject",JSON.stringify(currentOptions))}
$('[data-toggle="right-sidebar"]').on('click',function(){jQuery('.right-sidebar').addClass('right-sidebar-visible')});$('[data-toggle="right-sidebar-close"]').on('click',function(){jQuery('.right-sidebar').removeClass('right-sidebar-visible')})
var body=jQuery('body');var left_sidebar=jQuery('.left-side-bar');var header_dark=jQuery('.header-dark');var header_light=jQuery('.header-white');header_dark.click(function(){'use strict';jQuery(this).addClass('active');header_light.removeClass('active');body.removeClass('header-white').addClass('header-dark');setOptions("headerBackground","header-dark")});if(currentOptions.headerBackground==="header-dark"){header_dark.trigger("click")}
header_light.click(function(){'use strict';jQuery(this).addClass('active');header_dark.removeClass('active');body.removeClass('header-dark').addClass('header-white');setOptions("headerBackground","header-white")});if(currentOptions.headerBackground==="header-white"){header_light.trigger("click")}
var sidebar_dark=jQuery('.sidebar-dark');var sidebar_light=jQuery('.sidebar-light');sidebar_dark.click(function(){'use strict';jQuery(this).addClass('active');sidebar_light.removeClass('active');body.removeClass('sidebar-light').addClass('sidebar-dark');setOptions("navigationBackground","sidebar-dark")});if(currentOptions.navigationBackground==="sidebar-dark"){sidebar_dark.trigger("click")}
sidebar_light.click(function(){'use strict';jQuery(this).addClass('active');sidebar_dark.removeClass('active');body.removeClass('sidebar-dark').addClass('sidebar-light');setOptions("navigationBackground","sidebar-light")});if(currentOptions.navigationBackground==="sidebar-light"){sidebar_light.trigger("click")}
$('input:radio[name=menu-dropdown-icon]').change(function(){var newClass1=['sidebar-menu'];newClass1.push($('input:radio[name=menu-dropdown-icon]:checked').val().toLowerCase().replace(/\s+/,"-"));newClass1.push($('input:radio[name=menu-list-icon]:checked').val().toLowerCase().replace(/\s+/,"-"));$(".sidebar-menu").attr('class',newClass1.join(' '));setOptions("menuDropdownIcon",newClass1.slice(-2)[0])});if(currentOptions.menuDropdownIcon==="icon-style-1"){$('input:radio[value=icon-style-1]').trigger("click")}
if(currentOptions.menuDropdownIcon==="icon-style-2"){$('input:radio[value=icon-style-2]').trigger("click")}
if(currentOptions.menuDropdownIcon==="icon-style-3"){$('input:radio[value=icon-style-3]').trigger("click")}
$('input:radio[name=menu-list-icon]').change(function(){var newClass=['sidebar-menu'];newClass.push($('input:radio[name=menu-dropdown-icon]:checked').val().toLowerCase().replace(/\s+/,"-"));newClass.push($('input:radio[name=menu-list-icon]:checked').val().toLowerCase().replace(/\s+/,"-"));$(".sidebar-menu").attr('class',newClass.join(' '));setOptions("menuListIcon",newClass.slice(-1)[0])});if(currentOptions.menuListIcon==="icon-list-style-1"){$('input:radio[value=icon-list-style-1]').trigger("click")}
if(currentOptions.menuListIcon==="icon-list-style-2"){$('input:radio[value=icon-list-style-2]').trigger("click")}
if(currentOptions.menuListIcon==="icon-list-style-3"){$('input:radio[value=icon-list-style-3]').trigger("click")}
if(currentOptions.menuListIcon==="icon-list-style-4"){$('input:radio[value=icon-list-style-4]').trigger("click")}
if(currentOptions.menuListIcon==="icon-list-style-5"){$('input:radio[value=icon-list-style-5]').trigger("click")}
if(currentOptions.menuListIcon==="icon-list-style-6"){$('input:radio[value=icon-list-style-6]').trigger("click")}
$('#reset-settings').click(function(){clearOptions();location.reload()})})})()
