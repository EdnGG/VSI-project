// source --> https://valvesolutions.com/wp-includes/js/jquery/ui/slider.min.js 
/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.slider",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b<c;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!c),this._super(b,c),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===c?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,b=this._valueMin(),c=this.options.step,d=Math.floor(+(a-b).toFixed(this._precision())/c)*c;a=d+b,this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var c,d,e,f,g=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),c=this._start(b,g),c===!1))return}switch(f=this.options.step,d=e=this.options.values&&this.options.values.length?this.values(g):this.value(),b.keyCode){case a.ui.keyCode.HOME:e=this._valueMin();break;case a.ui.keyCode.END:e=this._valueMax();break;case a.ui.keyCode.PAGE_UP:e=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(d===this._valueMax())return;e=this._trimAlignValue(d+f);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d===this._valueMin())return;e=this._trimAlignValue(d-f)}this._slide(b,g,e)},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})});
// source --> https://valvesolutions.com/wp-content/plugins/product-enquiry-pro/wisdm-forms/views/js/jquery-ui-timepicker-addon.js 
/*! jQuery Timepicker Addon - v1.4.4 - 2014-03-29
* http://trentrichardson.com/examples/timepicker
* Copyright (c) 2014 Trent Richardson; Licensed MIT */
(function ($) {

    /*
    * Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
    */
    $.ui.timepicker = $.ui.timepicker || {};
    if ($.ui.timepicker.version) {
        return;
    }

    /*
    * Extend jQueryUI, get it started with our version number
    */
    $.extend($.ui, {
        timepicker: {
            version: "1.4.4"
        }
    });

    /* 
    * Timepicker manager.
    * Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    * Settings for (groups of) time pickers are maintained in an instance object,
    * allowing multiple different settings on the same page.
    */
    var Timepicker = function () {
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            currentText: 'Now',
            closeText: 'Done',
            amNames: ['AM', 'A'],
            pmNames: ['PM', 'P'],
            timeFormat: 'HH:mm',
            timeSuffix: '',
            timeOnlyTitle: 'Choose Time',
            timeText: 'Time',
            hourText: 'Hour',
            minuteText: 'Minute',
            secondText: 'Second',
            millisecText: 'Millisecond',
            microsecText: 'Microsecond',
            timezoneText: 'Time Zone',
            isRTL: false
        };
        this._defaults = { // Global defaults for all the datetime picker instances
            showButtonPanel: true,
            timeOnly: false,
            timeOnlyShowDate: false,
            showHour: null,
            showMinute: null,
            showSecond: null,
            showMillisec: null,
            showMicrosec: null,
            showTimezone: null,
            showTime: true,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            stepMillisec: 1,
            stepMicrosec: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            microsec: 0,
            timezone: null,
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            millisecMin: 0,
            microsecMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            millisecMax: 999,
            microsecMax: 999,
            minDateTime: null,
            maxDateTime: null,
            maxTime: null,
            minTime: null,
            onSelect: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            millisecGrid: 0,
            microsecGrid: 0,
            alwaysSetTime: true,
            separator: ' ',
            altFieldTimeOnly: true,
            altTimeFormat: null,
            altSeparator: null,
            altTimeSuffix: null,
            pickerTimeFormat: null,
            pickerTimeSuffix: null,
            showTimepicker: true,
            timezoneList: null,
            addSliderAccess: false,
            sliderAccessArgs: null,
            controlType: 'slider',
            defaultValue: null,
            parse: 'strict'
        };
        $.extend(this._defaults, this.regional['']);
    };

    $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        microsec_slider: null,
        timezone_select: null,
        maxTime: null,
        minTime: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null,
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        microsecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        microsecMaxOriginal: null,
        ampm: '',
        formattedDate: '',
        formattedTime: '',
        formattedDateTime: '',
        timezoneList: null,
        units: ['hour', 'minute', 'second', 'millisec', 'microsec'],
        support: {},
        control: null,

        /* 
        * Override the default settings for all instances of the time picker.
        * @param  {Object} settings  object - the new settings to use as defaults (anonymous object)
        * @return {Object} the manager object
        */
        setDefaults: function (settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        /*
        * Create a new Timepicker instance
        */
        _newInst: function ($input, opts) {
            var tp_inst = new Timepicker(),
            inlineSettings = {},
            fns = {},
            overrides, i;

            for (var attrName in this._defaults) {
                if (this._defaults.hasOwnProperty(attrName)) {
                    var attrValue = $input.attr('time:' + attrName);
                    if (attrValue) {
                        try {
                            inlineSettings[attrName] = eval(attrValue);
                        } catch (err) {
                            inlineSettings[attrName] = attrValue;
                        }
                    }
                }
            }

            overrides = {
                beforeShow: function (input, dp_inst) {
                    if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
                        return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
                    }
                },
                onChangeMonthYear: function (year, month, dp_inst) {
                    // Update the time as well : this prevents the time from disappearing from the $input field.
                    tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
                        tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                    }
                },
                onClose: function (dateText, dp_inst) {
                    if (tp_inst.timeDefined === true && $input.val() !== '') {
                        tp_inst._updateDateTime(dp_inst);
                    }
                    if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
                        tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
                    }
                }
            };
            for (i in overrides) {
                if (overrides.hasOwnProperty(i)) {
                    fns[i] = opts[i] || null;
                }
            }

            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
                evnts: fns,
                timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
            });
            tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (val) {
                return val.toUpperCase();
            });
            tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (val) {
                return val.toUpperCase();
            });

            // detect which units are supported
            tp_inst.support = detectSupport(
                tp_inst._defaults.timeFormat + 
                (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : '') +
                (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : ''));

            // controlType is string - key to our this._controls
            if (typeof(tp_inst._defaults.controlType) === 'string') {
                if (tp_inst._defaults.controlType === 'slider' && typeof($.ui.slider) === 'undefined') {
                    tp_inst._defaults.controlType = 'select';
                }
                tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
            }
            // controlType is an object and must implement create, options, value methods
            else {
                tp_inst.control = tp_inst._defaults.controlType;
            }

            // prep the timezone options
            var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60,
            0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
            if (tp_inst._defaults.timezoneList !== null) {
                timezoneList = tp_inst._defaults.timezoneList;
            }
            var tzl = timezoneList.length, tzi = 0, tzv = null;
            if (tzl > 0 && typeof timezoneList[0] !== 'object') {
                for (; tzi < tzl; tzi++) {
                    tzv = timezoneList[tzi];
                    timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
                }
            }
            tp_inst._defaults.timezoneList = timezoneList;

            // set the default units
            tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) :
            ((new Date()).getTimezoneOffset() * -1);
            tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin :
            tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin :
            tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin :
            tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
            tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin :
            tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
            tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin :
            tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
            tp_inst.ampm = '';
            tp_inst.$input = $input;

            if (tp_inst._defaults.altField) {
                tp_inst.$altInput = $(tp_inst._defaults.altField).css({
                    cursor: 'pointer'
                }).focus(function () {
                    $input.trigger("focus");
                });
            }

            if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
                tp_inst._defaults.minDate = new Date();
            }
            if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
                tp_inst._defaults.maxDate = new Date();
            }

            // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
            if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
                tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
            }
            if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
                tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
            }
            if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
                tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
            }
            if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
                tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
            }
            tp_inst.$input.bind('focus', function () {
                tp_inst._onFocus();
            });

            return tp_inst;
        },

        /*
        * add our sliders to the calendar
        */
        _addTimePicker: function (dp_inst) {
            var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

            this.timeDefined = this._parseTime(currDT);
            this._limitMinMaxDateTime(dp_inst, false);
            this._injectTimePicker();
        },

        /*
        * parse the time string from input value or _setTime
        */
        _parseTime: function (timeString, withDate) {
            if (!this.inst) {
                this.inst = $.datepicker._getInst(this.$input[0]);
            }

            if (withDate || !this._defaults.timeOnly) {
                var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
                try {
                    var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
                    if (!parseRes.timeObj) {
                        return false;
                    }
                    $.extend(this, parseRes.timeObj);
                } catch (err) {
                    $.timepicker.log("Error parsing the date/time string: " + err +
                        "\ndate/time string = " + timeString +
                        "\ntimeFormat = " + this._defaults.timeFormat +
                        "\ndateFormat = " + dp_dateFormat);
                    return false;
                }
                return true;
            } else {
                var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
                if (!timeObj) {
                    return false;
                }
                $.extend(this, timeObj);
                return true;
            }
        },

        /*
        * generate and inject html for timepicker into ui datepicker
        */
        _injectTimePicker: function () {
            var $dp = this.inst.dpDiv,
            o = this.inst.settings,
            tp_inst = this,
            litem = '',
            uitem = '',
            show = null,
            max = {},
            gridSize = {},
            size = null,
            i = 0,
            l = 0;

            // Prevent displaying twice
            if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
                var noDisplay = ' style="display:none;"',
                html = '<div class="ui-timepicker-div' + (o.isRTL ? ' ui-timepicker-rtl' : '') + '"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
                '<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

                // Create the markup
                for (i = 0, l = this.units.length; i < l; i++) {
                    litem = this.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
                    show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

                    // Added by Peter Medeiros:
                    // - Figure out what the hour/minute/second max should be based on the step values.
                    // - Example: if stepMinute is 15, then minMax is 45.
                    max[litem] = parseInt((o[litem + 'Max'] - ((o[litem + 'Max'] - o[litem + 'Min']) % o['step' + uitem])), 10);
                    gridSize[litem] = 0;

                    html += '<dt class="ui_tpicker_' + litem + '_label"' + (show ? '' : noDisplay) + '>' + o[litem + 'Text'] + '</dt>' +
                    '<dd class="ui_tpicker_' + litem + '"><div class="ui_tpicker_' + litem + '_slider"' + (show ? '' : noDisplay) + '></div>';

                    if (show && o[litem + 'Grid'] > 0) {
                        html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                        if (litem === 'hour') {
                            for (var h = o[litem + 'Min']; h <= max[litem]; h += parseInt(o[litem + 'Grid'], 10)) {
                                gridSize[litem]++;
                                var tmph = $.datepicker.formatTime(this.support.ampm ? 'hht' : 'HH', {hour: h}, o);
                                html += '<td data-for="' + litem + '">' + tmph + '</td>';
                            }
                        }
                        else {
                            for (var m = o[litem + 'Min']; m <= max[litem]; m += parseInt(o[litem + 'Grid'], 10)) {
                                gridSize[litem]++;
                                html += '<td data-for="' + litem + '">' + ((m < 10) ? '0' : '') + m + '</td>';
                            }
                        }

                        html += '</tr></table></div>';
                    }
                    html += '</dd>';
                }
                
                // Timezone
                var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
                html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
                html += '<dd class="ui_tpicker_timezone" ' + (showTz ? '' : noDisplay) + '></dd>';

                // Create the elements from string
                html += '</dl></div>';
                var $tp = $(html);

                // if we only want time picker...
                if (o.timeOnly === true) {
                    $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
                    $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
                }
                
                // add sliders, adjust grids, add events
                for (i = 0, l = tp_inst.units.length; i < l; i++) {
                    litem = tp_inst.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
                    show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

                    // add the slider
                    tp_inst[litem + '_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_' + litem + '_slider'), litem, tp_inst[litem], o[litem + 'Min'], max[litem], o['step' + uitem]);

                    // adjust the grid and add click event
                    if (show && o[litem + 'Grid'] > 0) {
                        size = 100 * gridSize[litem] * o[litem + 'Grid'] / (max[litem] - o[litem + 'Min']);
                        $tp.find('.ui_tpicker_' + litem + ' table').css({
                            width: size + "%",
                            marginLeft: o.isRTL ? '0' : ((size / (-2 * gridSize[litem])) + "%"),
                            marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : '0',
                            borderCollapse: 'collapse'
                        }).find("td").click(function (e) {
                            var $t = $(this),
                            h = $t.html(),
                            n = parseInt(h.replace(/[^0-9]/g), 10),
                            ap = h.replace(/[^apm]/ig),
                                    f = $t.data('for'); // loses scope, so we use data-for

                                    if (f === 'hour') {
                                        if (ap.indexOf('p') !== -1 && n < 12) {
                                            n += 12;
                                        }
                                        else {
                                            if (ap.indexOf('a') !== -1 && n === 12) {
                                                n = 0;
                                            }
                                        }
                                    }
                                    
                                    tp_inst.control.value(tp_inst, tp_inst[f + '_slider'], litem, n);

                                    tp_inst._onTimeChange();
                                    tp_inst._onSelectHandler();
                                }).css({
                                    cursor: 'pointer',
                                    width: (100 / gridSize[litem]) + '%',
                                    textAlign: 'center',
                                    overflow: 'hidden'
                                });
                    } // end if grid > 0
                } // end for loop

                // Add timezone options
                this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
                $.fn.append.apply(this.timezone_select,
                    $.map(o.timezoneList, function (val, idx) {
                        return $("<option />").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val);
                    }));
                if (typeof(this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") {
                    var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1;
                    if (local_timezone === this.timezone) {
                        selectLocalTimezone(tp_inst);
                    } else {
                        this.timezone_select.val(this.timezone);
                    }
                } else {
                    if (typeof(this.hour) !== "undefined" && this.hour !== null && this.hour !== "") {
                        this.timezone_select.val(o.timezone);
                    } else {
                        selectLocalTimezone(tp_inst);
                    }
                }
                this.timezone_select.change(function () {
                    tp_inst._onTimeChange();
                    tp_inst._onSelectHandler();
                });
                // End timezone options
                
                // inject timepicker into datepicker
                var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
                if ($buttonPanel.length) {
                    $buttonPanel.before($tp);
                } else {
                    $dp.append($tp);
                }

                this.$timeObj = $tp.find('.ui_tpicker_time');

                if (this.inst !== null) {
                    var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined;
                }

                // slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
                if (this._defaults.addSliderAccess) {
                    var sliderAccessArgs = this._defaults.sliderAccessArgs,
                    rtl = this._defaults.isRTL;
                    sliderAccessArgs.isRTL = rtl;
                    
                    setTimeout(function () { // fix for inline mode
                        if ($tp.find('.ui-slider-access').length === 0) {
                            $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

                            // fix any grids since sliders are shorter
                            var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
                            if (sliderAccessWidth) {
                                $tp.find('table:visible').each(function () {
                                    var $g = $(this),
                                    oldWidth = $g.outerWidth(),
                                    oldMarginLeft = $g.css(rtl ? 'marginRight' : 'marginLeft').toString().replace('%', ''),
                                    newWidth = oldWidth - sliderAccessWidth,
                                    newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
                                    css = { width: newWidth, marginRight: 0, marginLeft: 0 };
                                    css[rtl ? 'marginRight' : 'marginLeft'] = newMarginLeft;
                                    $g.css(css);
                                });
                            }
                        }
                    }, 10);
                }
                // end slideAccess integration

                tp_inst._limitMinMaxDateTime(this.inst, true);
            }
        },

        /*
        * This function tries to limit the ability to go outside the
        * min/max date range
        */
        _limitMinMaxDateTime: function (dp_inst, adjustSliders) {
            var o = this._defaults,
            dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

            if (!this._defaults.showTimepicker) {
                return;
            } // No time so nothing to check here

            if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
                var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
                minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
                    this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                    this.millisecMinOriginal = o.millisecMin;
                    this.microsecMinOriginal = o.microsecMin;
                }

                if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
                    this._defaults.hourMin = minDateTime.getHours();
                    if (this.hour <= this._defaults.hourMin) {
                        this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes();
                        if (this.minute <= this._defaults.minuteMin) {
                            this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds();
                            if (this.second <= this._defaults.secondMin) {
                                this.second = this._defaults.secondMin;
                                this._defaults.millisecMin = minDateTime.getMilliseconds();
                                if (this.millisec <= this._defaults.millisecMin) {
                                    this.millisec = this._defaults.millisecMin;
                                    this._defaults.microsecMin = minDateTime.getMicroseconds();
                                } else {
                                    if (this.microsec < this._defaults.microsecMin) {
                                        this.microsec = this._defaults.microsecMin;
                                    }
                                    this._defaults.microsecMin = this.microsecMinOriginal;
                                }
                            } else {
                                this._defaults.millisecMin = this.millisecMinOriginal;
                                this._defaults.microsecMin = this.microsecMinOriginal;
                            }
                        } else {
                            this._defaults.secondMin = this.secondMinOriginal;
                            this._defaults.millisecMin = this.millisecMinOriginal;
                            this._defaults.microsecMin = this.microsecMinOriginal;
                        }
                    } else {
                        this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                        this._defaults.millisecMin = this.millisecMinOriginal;
                        this._defaults.microsecMin = this.microsecMinOriginal;
                    }
                } else {
                    this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                    this._defaults.millisecMin = this.millisecMinOriginal;
                    this._defaults.microsecMin = this.microsecMinOriginal;
                }
            }

            if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
                var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
                maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
                    this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                    this.millisecMaxOriginal = o.millisecMax;
                    this.microsecMaxOriginal = o.microsecMax;
                }

                if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
                    this._defaults.hourMax = maxDateTime.getHours();
                    if (this.hour >= this._defaults.hourMax) {
                        this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes();
                        if (this.minute >= this._defaults.minuteMax) {
                            this.minute = this._defaults.minuteMax;
                            this._defaults.secondMax = maxDateTime.getSeconds();
                            if (this.second >= this._defaults.secondMax) {
                                this.second = this._defaults.secondMax;
                                this._defaults.millisecMax = maxDateTime.getMilliseconds();
                                if (this.millisec >= this._defaults.millisecMax) {
                                    this.millisec = this._defaults.millisecMax;
                                    this._defaults.microsecMax = maxDateTime.getMicroseconds();
                                } else {
                                    if (this.microsec > this._defaults.microsecMax) {
                                        this.microsec = this._defaults.microsecMax;
                                    }
                                    this._defaults.microsecMax = this.microsecMaxOriginal;
                                }
                            } else {
                                this._defaults.millisecMax = this.millisecMaxOriginal;
                                this._defaults.microsecMax = this.microsecMaxOriginal;
                            }
                        } else {
                            this._defaults.secondMax = this.secondMaxOriginal;
                            this._defaults.millisecMax = this.millisecMaxOriginal;
                            this._defaults.microsecMax = this.microsecMaxOriginal;
                        }
                    } else {
                        this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                        this._defaults.millisecMax = this.millisecMaxOriginal;
                        this._defaults.microsecMax = this.microsecMaxOriginal;
                    }
                } else {
                    this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                    this._defaults.microsecMax = this.microsecMaxOriginal;
                }
            }

            if (dp_inst.settings.minTime!==null) {                
                var tempMinTime=new Date("01/01/1970 " + dp_inst.settings.minTime);                
                if (this.hour<tempMinTime.getHours()) {
                    this.hour=this._defaults.hourMin=tempMinTime.getHours();
                    this.minute=this._defaults.minuteMin=tempMinTime.getMinutes();                            
                } else if (this.hour===tempMinTime.getHours() && this.minute<tempMinTime.getMinutes()) {
                    this.minute=this._defaults.minuteMin=tempMinTime.getMinutes();
                } else {                        
                    if (this._defaults.hourMin<tempMinTime.getHours()) {
                        this._defaults.hourMin=tempMinTime.getHours();
                        this._defaults.minuteMin=tempMinTime.getMinutes();                    
                    } else if (this._defaults.hourMin===tempMinTime.getHours()===this.hour && this._defaults.minuteMin<tempMinTime.getMinutes()) {
                        this._defaults.minuteMin=tempMinTime.getMinutes();                        
                    } else {
                        this._defaults.minuteMin=0;
                    }
                }                
            }
            
            if (dp_inst.settings.maxTime!==null) {                
                var tempMaxTime=new Date("01/01/1970 " + dp_inst.settings.maxTime);
                if (this.hour>tempMaxTime.getHours()) {
                    this.hour=this._defaults.hourMax=tempMaxTime.getHours();                        
                    this.minute=this._defaults.minuteMax=tempMaxTime.getMinutes();
                } else if (this.hour===tempMaxTime.getHours() && this.minute>tempMaxTime.getMinutes()) {                            
                    this.minute=this._defaults.minuteMax=tempMaxTime.getMinutes();                        
                } else {
                    if (this._defaults.hourMax>tempMaxTime.getHours()) {
                        this._defaults.hourMax=tempMaxTime.getHours();
                        this._defaults.minuteMax=tempMaxTime.getMinutes();                    
                    } else if (this._defaults.hourMax===tempMaxTime.getHours()===this.hour && this._defaults.minuteMax>tempMaxTime.getMinutes()) {
                        this._defaults.minuteMax=tempMaxTime.getMinutes();                        
                    } else {
                        this._defaults.minuteMax=59;
                    }
                }                        
            }
            
            if (adjustSliders !== undefined && adjustSliders === true) {
                var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
                minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
                secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
                millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10),
                microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);

                if (this.hour_slider) {
                    this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax, step: this._defaults.stepHour });
                    this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
                }
                if (this.minute_slider) {
                    this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax, step: this._defaults.stepMinute });
                    this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
                }
                if (this.second_slider) {
                    this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax, step: this._defaults.stepSecond });
                    this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
                }
                if (this.millisec_slider) {
                    this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax, step: this._defaults.stepMillisec });
                    this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
                }
                if (this.microsec_slider) {
                    this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax, step: this._defaults.stepMicrosec });
                    this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec));
                }
            }

        },

        /*
        * when a slider moves, set the internal time...
        * on time change is also called when the time is updated in the text field
        */
        _onTimeChange: function () {
            if (!this._defaults.showTimepicker) {
                return;
            }
            var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
            minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
            second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
            millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
            microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false,
            timezone = (this.timezone_select) ? this.timezone_select.val() : false,
            o = this._defaults,
            pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
            pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

            if (typeof(hour) === 'object') {
                hour = false;
            }
            if (typeof(minute) === 'object') {
                minute = false;
            }
            if (typeof(second) === 'object') {
                second = false;
            }
            if (typeof(millisec) === 'object') {
                millisec = false;
            }
            if (typeof(microsec) === 'object') {
                microsec = false;
            }
            if (typeof(timezone) === 'object') {
                timezone = false;
            }

            if (hour !== false) {
                hour = parseInt(hour, 10);
            }
            if (minute !== false) {
                minute = parseInt(minute, 10);
            }
            if (second !== false) {
                second = parseInt(second, 10);
            }
            if (millisec !== false) {
                millisec = parseInt(millisec, 10);
            }
            if (microsec !== false) {
                microsec = parseInt(microsec, 10);
            }
            if (timezone !== false) {
                timezone = timezone.toString();
            }

            var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

            // If the update was done in the input field, the input field should not be updated.
            // If the update was done using the sliders, update the input field.
            var hasChanged = (
                        hour !== parseInt(this.hour,10) || // sliders should all be numeric
                        minute !== parseInt(this.minute,10) || 
                        second !== parseInt(this.second,10) || 
                        millisec !== parseInt(this.millisec,10) || 
                        microsec !== parseInt(this.microsec,10) || 
                        (this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || 
                        (this.timezone !== null && timezone !== this.timezone.toString()) // could be numeric or "EST" format, so use toString()
                        );

            if (hasChanged) {

                if (hour !== false) {
                    this.hour = hour;
                }
                if (minute !== false) {
                    this.minute = minute;
                }
                if (second !== false) {
                    this.second = second;
                }
                if (millisec !== false) {
                    this.millisec = millisec;
                }
                if (microsec !== false) {
                    this.microsec = microsec;
                }
                if (timezone !== false) {
                    this.timezone = timezone;
                }

                if (!this.inst) {
                    this.inst = $.datepicker._getInst(this.$input[0]);
                }

                this._limitMinMaxDateTime(this.inst, true);
            }
            if (this.support.ampm) {
                this.ampm = ampm;
            }

            // Updates the time within the timepicker
            this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
            if (this.$timeObj) {
                if (pickerTimeFormat === o.timeFormat) {
                    this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
                }
                else {
                    this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
                }
            }

            this.timeDefined = true;
            if (hasChanged) {
                this._updateDateTime();
                //this.$input.focus(); // may automatically open the picker on setDate
            }
        },

        /*
        * call custom onSelect.
        * bind to sliders slidestop, and grid click.
        */
        _onSelectHandler: function () {
            var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
            var inputEl = this.$input ? this.$input[0] : null;
            if (onSelect && inputEl) {
                onSelect.apply(inputEl, [this.formattedDateTime, this]);
            }
        },

        /*
        * update our input with the new date time..
        */
        _updateDateTime: function (dp_inst) {
            dp_inst = this.inst || dp_inst;
            var dtTmp = (dp_inst.currentYear > 0? 
                new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : 
                new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
            dt = $.datepicker._daylightSavingAdjust(dtTmp),
                //dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
                //dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay)),
                dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
                formatCfg = $.datepicker._getFormatConfig(dp_inst),
                timeAvailable = dt !== null && this.timeDefined;
                this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
                var formattedDateTime = this.formattedDate;
                
            // if a slider was changed but datepicker doesn't have a value yet, set it
            if (dp_inst.lastVal === "") {
                dp_inst.currentYear = dp_inst.selectedYear;
                dp_inst.currentMonth = dp_inst.selectedMonth;
                dp_inst.currentDay = dp_inst.selectedDay;
            }

            /*
            * remove following lines to force every changes in date picker to change the input value
            * Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
            * If the user manually empty the value in the input field, the date picker will never change selected value.
            */
            //if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
            //    return;
            //}

            if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) {
                formattedDateTime = this.formattedTime;
            } else if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) {
                formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
            }

            this.formattedDateTime = formattedDateTime;

            if (!this._defaults.showTimepicker) {
                this.$input.val(this.formattedDate);
            } else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
                this.$altInput.val(this.formattedTime);
                this.$input.val(this.formattedDate);
            } else if (this.$altInput) {
                this.$input.val(formattedDateTime);
                var altFormattedDateTime = '',
                altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
                altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
                
                if (!this._defaults.timeOnly) {
                    if (this._defaults.altFormat) {
                        altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
                    }
                    else {
                        altFormattedDateTime = this.formattedDate;
                    }

                    if (altFormattedDateTime) {
                        altFormattedDateTime += altSeparator;
                    }
                }

                if (this._defaults.altTimeFormat) {
                    altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
                }
                else {
                    altFormattedDateTime += this.formattedTime + altTimeSuffix;
                }
                this.$altInput.val(altFormattedDateTime);
            } else {
                this.$input.val(formattedDateTime);
            }

            this.$input.trigger("change");
        },

        _onFocus: function () {
            if (!this.$input.val() && this._defaults.defaultValue) {
                this.$input.val(this._defaults.defaultValue);
                var inst = $.datepicker._getInst(this.$input.get(0)),
                tp_inst = $.datepicker._get(inst, 'timepicker');
                if (tp_inst) {
                    if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
                        try {
                            $.datepicker._updateDatepicker(inst);
                        } catch (err) {
                            $.timepicker.log(err);
                        }
                    }
                }
            }
        },

        /*
        * Small abstraction to control types
        * We can add more, just be sure to follow the pattern: create, options, value
        */
        _controls: {
            // slider methods
            slider: {
                create: function (tp_inst, obj, unit, val, min, max, step) {
                    var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
                    return obj.prop('slide', null).slider({
                        orientation: "horizontal",
                        value: rtl ? val * -1 : val,
                        min: rtl ? max * -1 : min,
                        max: rtl ? min * -1 : max,
                        step: step,
                        slide: function (event, ui) {
                            tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value);
                            tp_inst._onTimeChange();
                        },
                        stop: function (event, ui) {
                            tp_inst._onSelectHandler();
                        }
                    });    
                },
                options: function (tp_inst, obj, unit, opts, val) {
                    if (tp_inst._defaults.isRTL) {
                        if (typeof(opts) === 'string') {
                            if (opts === 'min' || opts === 'max') {
                                if (val !== undefined) {
                                    return obj.slider(opts, val * -1);
                                }
                                return Math.abs(obj.slider(opts));
                            }
                            return obj.slider(opts);
                        }
                        var min = opts.min, 
                        max = opts.max;
                        opts.min = opts.max = null;
                        if (min !== undefined) {
                            opts.max = min * -1;
                        }
                        if (max !== undefined) {
                            opts.min = max * -1;
                        }
                        return obj.slider(opts);
                    }
                    if (typeof(opts) === 'string' && val !== undefined) {
                        return obj.slider(opts, val);
                    }
                    return obj.slider(opts);
                },
                value: function (tp_inst, obj, unit, val) {
                    if (tp_inst._defaults.isRTL) {
                        if (val !== undefined) {
                            return obj.slider('value', val * -1);
                        }
                        return Math.abs(obj.slider('value'));
                    }
                    if (val !== undefined) {
                        return obj.slider('value', val);
                    }
                    return obj.slider('value');
                }
            },
            // select methods
            select: {
                create: function (tp_inst, obj, unit, val, min, max, step) {
                    var sel = '<select class="ui-timepicker-select" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">',
                    format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

                    for (var i = min; i <= max; i += step) {
                        sel += '<option value="' + i + '"' + (i === val ? ' selected' : '') + '>';
                        if (unit === 'hour') {
                            sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig, '')), {hour: i}, tp_inst._defaults);
                        }
                        else if (unit === 'millisec' || unit === 'microsec' || i >= 10) { sel += i; }
                        else {sel += '0' + i.toString(); }
                        sel += '</option>';
                    }
                    sel += '</select>';

                    obj.children('select').remove();

                    $(sel).appendTo(obj).change(function (e) {
                        tp_inst._onTimeChange();
                        tp_inst._onSelectHandler();
                    });

                    return obj;
                },
                options: function (tp_inst, obj, unit, opts, val) {
                    var o = {},
                    $t = obj.children('select');
                    if (typeof(opts) === 'string') {
                        if (val === undefined) {
                            return $t.data(opts);
                        }
                        o[opts] = val;    
                    }
                    else { o = opts; }
                    return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
                },
                value: function (tp_inst, obj, unit, val) {
                    var $t = obj.children('select');
                    if (val !== undefined) {
                        return $t.val(val);
                    }
                    return $t.val();
                }
            }
        } // end _controls

    });

$.fn.extend({
        /*
        * shorthand just to use timepicker.
        */
        timepicker: function (o) {
            o = o || {};
            var tmp_args = Array.prototype.slice.call(arguments);

            if (typeof o === 'object') {
                tmp_args[0] = $.extend(o, {
                    timeOnly: true
                });
            }

            return $(this).each(function () {
                $.fn.datetimepicker.apply($(this), tmp_args);
            });
        },

        /*
        * extend timepicker to datepicker
        */
        datetimepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof(o) === 'string') {
                if (o === 'getDate') {
                    return $.fn.datepicker.apply($(this[0]), tmp_args);
                } else {
                    return this.each(function () {
                        var $t = $(this);
                        $t.datepicker.apply($t, tmp_args);
                    });
                }
            } else {
                return this.each(function () {
                    var $t = $(this);
                    $t.datepicker($.timepicker._newInst($t, o)._defaults);
                });
            }
        }
    });

    /*
    * Public Utility to parse date and time
    */
    $.datepicker.parseDateTime = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
        if (parseRes.timeObj) {
            var t = parseRes.timeObj;
            parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
            parseRes.date.setMicroseconds(t.microsec);
        }

        return parseRes.date;
    };

    /*
    * Public utility to parse time
    */
    $.datepicker.parseTime = function (timeFormat, timeString, options) {
        var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
        iso8601 = (timeFormat.replace(/\'.*?\'/g, '').indexOf('Z') !== -1);

        // Strict parse requires the timeString to match the timeFormat exactly
        var strictParse = function (f, s, o) {

            // pattern for standard and localized AM/PM markers
            var getPatternAmpm = function (amNames, pmNames) {
                var markers = [];
                if (amNames) {
                    $.merge(markers, amNames);
                }
                if (pmNames) {
                    $.merge(markers, pmNames);
                }
                markers = $.map(markers, function (val) {
                    return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
                });
                return '(' + markers.join('|') + ')?';
            };

            // figure out position of time elements.. cause js cant do named captures
            var getFormatPositions = function (timeFormat) {
                var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
                orders = {
                    h: -1,
                    m: -1,
                    s: -1,
                    l: -1,
                    c: -1,
                    t: -1,
                    z: -1
                };

                if (finds) {
                    for (var i = 0; i < finds.length; i++) {
                        if (orders[finds[i].toString().charAt(0)] === -1) {
                            orders[finds[i].toString().charAt(0)] = i + 1;
                        }
                    }
                }
                return orders;
            };

            var regstr = '^' + f.toString()
            .replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
                var ml = match.length;
                switch (match.charAt(0).toLowerCase()) {
                    case 'h':
                    return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
                    case 'm':
                    return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
                    case 's':
                    return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
                    case 'l':
                    return '(\\d?\\d?\\d)';
                    case 'c':
                    return '(\\d?\\d?\\d)';
                    case 'z':
                    return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
                    case 't':
                    return getPatternAmpm(o.amNames, o.pmNames);
                            default:    // literal escaped in quotes
                            return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
                        }
                    })
            .replace(/\s/g, '\\s?') +
            o.timeSuffix + '$',
            order = getFormatPositions(f),
            ampm = '',
            treg;

            treg = s.match(new RegExp(regstr, 'i'));

            var resTime = {
                hour: 0,
                minute: 0,
                second: 0,
                millisec: 0,
                microsec: 0
            };

            if (treg) {
                if (order.t !== -1) {
                    if (treg[order.t] === undefined || treg[order.t].length === 0) {
                        ampm = '';
                        resTime.ampm = '';
                    } else {
                        ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
                        resTime.ampm = o[ampm === 'AM' ? 'amNames' : 'pmNames'][0];
                    }
                }

                if (order.h !== -1) {
                    if (ampm === 'AM' && treg[order.h] === '12') {
                        resTime.hour = 0; // 12am = 0 hour
                    } else {
                        if (ampm === 'PM' && treg[order.h] !== '12') {
                            resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                        } else {
                            resTime.hour = Number(treg[order.h]);
                        }
                    }
                }

                if (order.m !== -1) {
                    resTime.minute = Number(treg[order.m]);
                }
                if (order.s !== -1) {
                    resTime.second = Number(treg[order.s]);
                }
                if (order.l !== -1) {
                    resTime.millisec = Number(treg[order.l]);
                }
                if (order.c !== -1) {
                    resTime.microsec = Number(treg[order.c]);
                }
                if (order.z !== -1 && treg[order.z] !== undefined) {
                    resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
                }


                return resTime;
            }
            return false;
        };// end strictParse

        // First try JS Date, if that fails, use strictParse
        var looseParse = function (f, s, o) {
            try {
                var d = new Date('2012-01-01 ' + s);
                if (isNaN(d.getTime())) {
                    d = new Date('2012-01-01T' + s);
                    if (isNaN(d.getTime())) {
                        d = new Date('01/01/2012 ' + s);
                        if (isNaN(d.getTime())) {
                            throw "Unable to parse time with native Date: " + s;
                        }
                    }
                }

                return {
                    hour: d.getHours(),
                    minute: d.getMinutes(),
                    second: d.getSeconds(),
                    millisec: d.getMilliseconds(),
                    microsec: d.getMicroseconds(),
                    timezone: d.getTimezoneOffset() * -1
                };
            }
            catch (err) {
                try {
                    return strictParse(f, s, o);
                }
                catch (err2) {
                    $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f);
                }                
            }
            return false;
        }; // end looseParse
        
        if (typeof o.parse === "function") {
            return o.parse(timeFormat, timeString, o);
        }
        if (o.parse === 'loose') {
            return looseParse(timeFormat, timeString, o);
        }
        return strictParse(timeFormat, timeString, o);
    };

    /**
     * Public utility to format the time
     * @param {string} format format of the time
     * @param {Object} time Object not a Date for timezones
     * @param {Object} [options] essentially the regional[].. amNames, pmNames, ampm
     * @returns {string} the formatted time
     */
     $.datepicker.formatTime = function (format, time, options) {
         options = options || {};
         options = $.extend({}, $.timepicker._defaults, options);
         time = $.extend({
             hour: 0,
             minute: 0,
             second: 0,
             millisec: 0,
             microsec: 0,
             timezone: null
         }, time);

         var tmptime = format,
         ampmName = options.amNames[0],
         hour = parseInt(time.hour, 10);

         if (hour > 11) {
             ampmName = options.pmNames[0];
         }

         tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
             switch (match) {
                 case 'HH':
                 return ('0' + hour).slice(-2);
                 case 'H':
                 return hour;
                 case 'hh':
                 return ('0' + convert24to12(hour)).slice(-2);
                 case 'h':
                 return convert24to12(hour);
                 case 'mm':
                 return ('0' + time.minute).slice(-2);
                 case 'm':
                 return time.minute;
                 case 'ss':
                 return ('0' + time.second).slice(-2);
                 case 's':
                 return time.second;
                 case 'l':
                 return ('00' + time.millisec).slice(-3);
                 case 'c':
                 return ('00' + time.microsec).slice(-3);
                 case 'z':
                 return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
                 case 'Z':
                 return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
                 case 'T':
                 return ampmName.charAt(0).toUpperCase();
                 case 'TT':
                 return ampmName.toUpperCase();
                 case 't':
                 return ampmName.charAt(0).toLowerCase();
                 case 'tt':
                 return ampmName.toLowerCase();
                 default:
                 return match.replace(/'/g, "");
             }
         });

         return tmptime;
     };

    /*
    * the bad hack :/ override datepicker so it doesn't close on select
    // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
    */
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function (id, dateStr) {
        var inst = this._getInst($(id)[0]),
        tp_inst = this._get(inst, 'timepicker');

        if (tp_inst && inst.settings.showTimepicker) {
            tp_inst._limitMinMaxDateTime(inst, true);
            inst.inline = inst.stay_open = true;
            //This way the onSelect handler called from calendarpicker get the full dateTime
            this._base_selectDate(id, dateStr);
            inst.inline = inst.stay_open = false;
            this._notifyChange(inst);
            this._updateDatepicker(inst);
        } else {
            this._base_selectDate(id, dateStr);
        }
    };

    /*
    * second bad hack :/ override datepicker so it triggers an event when changing the input field
    * and does not redraw the datepicker on every selectDate event
    */
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function (inst) {

        // don't popup the datepicker if there is another instance already opened
        var input = inst.input[0];
        if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
            return;
        }

        if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

            this._base_updateDatepicker(inst);

            // Reload the time control when changing something in the input text field.
            var tp_inst = this._get(inst, 'timepicker');
            if (tp_inst) {
                tp_inst._addTimePicker(inst);
            }
        }
    };

    /*
    * third bad hack :/ override datepicker so it allows spaces and colon in the input field
    */
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function (event) {
        var inst = $.datepicker._getInst(event.target),
        tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if ($.datepicker._get(inst, 'constrainInput')) {
                var ampm = tp_inst.support.ampm,
                tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone,
                dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
                datetimeChars = tp_inst._defaults.timeFormat.toString()
                .replace(/[hms]/g, '')
                .replace(/TT/g, ampm ? 'APM' : '')
                .replace(/Tt/g, ampm ? 'AaPpMm' : '')
                .replace(/tT/g, ampm ? 'AaPpMm' : '')
                .replace(/T/g, ampm ? 'AP' : '')
                .replace(/tt/g, ampm ? 'apm' : '')
                .replace(/t/g, ampm ? 'ap' : '') + 
                " " + tp_inst._defaults.separator + 
                tp_inst._defaults.timeSuffix + 
                (tz ? tp_inst._defaults.timezoneList.join('') : '') + 
                (tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
                dateChars,
                chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
            }
        }

        return $.datepicker._base_doKeyPress(event);
    };

    /*
    * Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
    * Update any alternate field to synchronise with the main field.
    */
    $.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
    $.datepicker._updateAlternate = function (inst) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var altField = tp_inst._defaults.altField;
            if (altField) { // update alternate field too
                var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
                date = this._getDate(inst),
                formatCfg = $.datepicker._getFormatConfig(inst),
                altFormattedDateTime = '', 
                altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
                altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
                altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
                
                altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
                if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) {
                    if (tp_inst._defaults.altFormat) {
                        altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
                    }
                    else {
                        altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
                    }
                }
                $(altField).val(altFormattedDateTime);
            }
        }
        else {
            $.datepicker._base_updateAlternate(inst);
        }
    };

    /*
    * Override key up event to sync manual input changes.
    */
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function (event) {
        var inst = $.datepicker._getInst(event.target),
        tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
                try {
                    $.datepicker._updateDatepicker(inst);
                } catch (err) {
                    $.timepicker.log(err);
                }
            }
        }

        return $.datepicker._base_doKeyUp(event);
    };

    /*
    * override "Today" button to also grab the time.
    */
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function (id) {
        var inst = this._getInst($(id)[0]),
        $dp = inst.dpDiv;
        this._base_gotoToday(id);
        var tp_inst = this._get(inst, 'timepicker');
        selectLocalTimezone(tp_inst);
        var now = new Date();
        this._setTime(inst, now);
        $('.ui-datepicker-today', $dp).click();
    };

    /*
    * Disable & enable the Time in the datetimepicker
    */
    $.datepicker._disableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            inst.settings.showTimepicker = false;
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst);
        }
    };

    $.datepicker._enableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            inst.settings.showTimepicker = true;
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst); // Could be disabled on page load
            tp_inst._updateDateTime(inst);
        }
    };

    /*
    * Create our own set time function
    */
    $.datepicker._setTime = function (inst, date) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var defaults = tp_inst._defaults;

            // calling _setTime with no date sets time to defaults
            tp_inst.hour = date ? date.getHours() : defaults.hour;
            tp_inst.minute = date ? date.getMinutes() : defaults.minute;
            tp_inst.second = date ? date.getSeconds() : defaults.second;
            tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
            tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;

            //check if within min/max times.. 
            tp_inst._limitMinMaxDateTime(inst, true);

            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst);
        }
    };

    /*
    * Create new public method to set only time, callable as $().datepicker('setTime', date)
    */
    $.datepicker._setTimeDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst);
            var tp_date;
            if (date) {
                if (typeof date === "string") {
                    tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                    tp_date.setMicroseconds(tp_inst.microsec);
                } else {
                    tp_date = new Date(date.getTime());
                    tp_date.setMicroseconds(date.getMicroseconds());
                }
                if (tp_date.toString() === 'Invalid Date') {
                    tp_date = undefined;
                }
                this._setTime(inst, tp_date);
            }
        }

    };

    /*
    * override setDate() to allow setting time too within Date object
    */
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function (target, date) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        if (typeof(date) === 'string') {
            date = new Date(date);
            if (!date.getTime()) {
                $.timepicker.log("Error creating Date object from string.");
            }
        }

        var tp_inst = this._get(inst, 'timepicker');
        var tp_date;
        if (date instanceof Date) {
            tp_date = new Date(date.getTime());
            tp_date.setMicroseconds(date.getMicroseconds());
        } else {
            tp_date = date;
        }
        
        // This is important if you are using the timezone option, javascript's Date 
        // object will only return the timezone offset for the current locale, so we 
        // adjust it accordingly.  If not using timezone option this won't matter..
        // If a timezone is different in tp, keep the timezone as is
        if (tp_inst && tp_date) {
            // look out for DST if tz wasn't specified
            if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
                tp_inst.timezone = tp_date.getTimezoneOffset() * -1;
            }
            date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
            tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
        }

        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
    };

    /*
    * override getDate() to allow getting time too within Date object
    */
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function (target, noDefault) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            // if it hasn't yet been defined, grab from field
            if (inst.lastVal === undefined) {
                this._setDateFromField(inst, noDefault);
            }

            var date = this._getDate(inst);
            if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
                date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                date.setMicroseconds(tp_inst.microsec);

                // This is important if you are using the timezone option, javascript's Date 
                // object will only return the timezone offset for the current locale, so we 
                // adjust it accordingly.  If not using timezone option this won't matter..
                if (tp_inst.timezone != null) {
                    // look out for DST if tz wasn't specified
                    if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
                        tp_inst.timezone = date.getTimezoneOffset() * -1;
                    }
                    date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
                }
            }
            return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
    };

    /*
    * override parseDate() because UI 1.8.14 throws an error about "Extra characters"
    * An option in datapicker to ignore extra format characters would be nicer.
    */
    $.datepicker._base_parseDate = $.datepicker.parseDate;
    $.datepicker.parseDate = function (format, value, settings) {
        var date;
        try {
            date = this._base_parseDate(format, value, settings);
        } catch (err) {
            // Hack!  The error message ends with a colon, a space, and
            // the "extra" characters.  We rely on that instead of
            // attempting to perfectly reproduce the parsing algorithm.
            if (err.indexOf(":") >= 0) {
                date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(':') - 2)), settings);
                $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
            } else {
                throw err;
            }
        }
        return date;
    };

    /*
    * override formatDate to set date with time to the input
    */
    $.datepicker._base_formatDate = $.datepicker._formatDate;
    $.datepicker._formatDate = function (inst, day, month, year) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            tp_inst._updateDateTime(inst);
            return tp_inst.$input.val();
        }
        return this._base_formatDate(inst);
    };

    /*
    * override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
    */
    $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
    $.datepicker._optionDatepicker = function (target, name, value) {
        var inst = this._getInst(target),
        name_clone;
        if (!inst) {
            return null;
        }

        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var min = null,
            max = null,
            onselect = null,
            overrides = tp_inst._defaults.evnts,
            fns = {},
            prop;
            if (typeof name === 'string') { // if min/max was set with the string
                if (name === 'minDate' || name === 'minDateTime') {
                    min = value;
                } else if (name === 'maxDate' || name === 'maxDateTime') {
                    max = value;
                } else if (name === 'onSelect') {
                    onselect = value;
                } else if (overrides.hasOwnProperty(name)) {
                    if (typeof (value) === 'undefined') {
                        return overrides[name];
                    }
                    fns[name] = value;
                    name_clone = {}; //empty results in exiting function after overrides updated
                }
            } else if (typeof name === 'object') { //if min/max was set with the JSON
                if (name.minDate) {
                    min = name.minDate;
                } else if (name.minDateTime) {
                    min = name.minDateTime;
                } else if (name.maxDate) {
                    max = name.maxDate;
                } else if (name.maxDateTime) {
                    max = name.maxDateTime;
                }
                for (prop in overrides) {
                    if (overrides.hasOwnProperty(prop) && name[prop]) {
                        fns[prop] = name[prop];
                    }
                }
            }
            for (prop in fns) {
                if (fns.hasOwnProperty(prop)) {
                    overrides[prop] = fns[prop];
                    if (!name_clone) { name_clone = $.extend({}, name); }
                    delete name_clone[prop];
                }
            }
            if (name_clone && isEmptyObject(name_clone)) { return; }
            if (min) { //if min was set
                if (min === 0) {
                    min = new Date();
                } else {
                    min = new Date(min);
                }
                tp_inst._defaults.minDate = min;
                tp_inst._defaults.minDateTime = min;
            } else if (max) { //if max was set
                if (max === 0) {
                    max = new Date();
                } else {
                    max = new Date(max);
                }
                tp_inst._defaults.maxDate = max;
                tp_inst._defaults.maxDateTime = max;
            } else if (onselect) {
                tp_inst._defaults.onSelect = onselect;
            }
        }
        if (value === undefined) {
            return this._base_optionDatepicker.call($.datepicker, target, name);
        }
        return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
    };
    
    /*
    * jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
    * it will return false for all objects
    */
    var isEmptyObject = function (obj) {
        var prop;
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };

    /*
    * jQuery extend now ignores nulls!
    */
    var extendRemove = function (target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] === null || props[name] === undefined) {
                target[name] = props[name];
            }
        }
        return target;
    };

    /*
    * Determine by the time format which units are supported
    * Returns an object of booleans for each unit
    */
    var detectSupport = function (timeFormat) {
        var tf = timeFormat.replace(/'.*?'/g, '').toLowerCase(), // removes literals
            isIn = function (f, t) { // does the format contain the token?
                return f.indexOf(t) !== -1 ? true : false;
            };
            return {
                hour: isIn(tf, 'h'),
                minute: isIn(tf, 'm'),
                second: isIn(tf, 's'),
                millisec: isIn(tf, 'l'),
                microsec: isIn(tf, 'c'),
                timezone: isIn(tf, 'z'),
                ampm: isIn(tf, 't') && isIn(timeFormat, 'h'),
                iso8601: isIn(timeFormat, 'Z')
            };
        };

    /*
    * Converts 24 hour format into 12 hour
    * Returns 12 hour without leading 0
    */
    var convert24to12 = function (hour) {
        hour %= 12;

        if (hour === 0) {
            hour = 12;
        }

        return String(hour);
    };

    var computeEffectiveSetting = function (settings, property) {
        return settings && settings[property] ? settings[property] : $.timepicker._defaults[property];
    };

    /*
    * Splits datetime string into date and time substrings.
    * Throws exception when date can't be parsed
    * Returns {dateString: dateString, timeString: timeString}
    */
    var splitDateTime = function (dateTimeString, timeSettings) {
        // The idea is to get the number separator occurrences in datetime and the time format requested (since time has
        // fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
        var separator = computeEffectiveSetting(timeSettings, 'separator'),
        format = computeEffectiveSetting(timeSettings, 'timeFormat'),
            timeParts = format.split(separator), // how many occurrences of separator may be in our format?
            timePartsLen = timeParts.length,
            allParts = dateTimeString.split(separator),
            allPartsLen = allParts.length;

            if (allPartsLen > 1) {
                return {
                    dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator),
                    timeString: allParts.splice(0, timePartsLen).join(separator)
                };
            }

            return {
                dateString: dateTimeString,
                timeString: ''
            };
        };

    /*
    * Internal function to parse datetime interval
    * Returns: {date: Date, timeObj: Object}, where
    *   date - parsed date without time (type Date)
    *   timeObj = {hour: , minute: , second: , millisec: , microsec: } - parsed time. Optional
    */
    var parseDateTimeInternal = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var date,
        parts,
        parsedTime;

        parts = splitDateTime(dateTimeString, timeSettings);
        date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings);

        if (parts.timeString === '') {
            return {
                date: date
            };
        }

        parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings);

        if (!parsedTime) {
            throw 'Wrong time format';
        }

        return {
            date: date,
            timeObj: parsedTime
        };
    };

    /*
    * Internal function to set timezone_select to the local timezone
    */
    var selectLocalTimezone = function (tp_inst, date) {
        if (tp_inst && tp_inst.timezone_select) {
            var now = date || new Date();
            tp_inst.timezone_select.val(-now.getTimezoneOffset());
        }
    };

    /*
    * Create a Singleton Instance
    */
    $.timepicker = new Timepicker();

    /**
     * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
     * @param {number} tzMinutes if not a number, less than -720 (-1200), or greater than 840 (+1400) this value is returned
     * @param {boolean} iso8601 if true formats in accordance to iso8601 "+12:45"
     * @return {string}
     */
     $.timepicker.timezoneOffsetString = function (tzMinutes, iso8601) {
         if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) {
             return tzMinutes;
         }

         var off = tzMinutes,
         minutes = off % 60,
         hours = (off - minutes) / 60,
         iso = iso8601 ? ':' : '',
         tz = (off >= 0 ? '+' : '-') + ('0' + Math.abs(hours)).slice(-2) + iso + ('0' + Math.abs(minutes)).slice(-2);
         
         if (tz === '+00:00') {
             return 'Z';
         }
         return tz;
     };

    /**
     * Get the number in minutes that represents a timezone string
     * @param  {string} tzString formatted like "+0500", "-1245", "Z"
     * @return {number} the offset minutes or the original string if it doesn't match expectations
     */
     $.timepicker.timezoneOffsetNumber = function (tzString) {
        var normalized = tzString.toString().replace(':', ''); // excuse any iso8601, end up with "+1245"

        if (normalized.toUpperCase() === 'Z') { // if iso8601 with Z, its 0 minute offset
            return 0;
        }

        if (!/^(\-|\+)\d{4}$/.test(normalized)) { // possibly a user defined tz, so just give it back
            return tzString;
        }

        return ((normalized.substr(0, 1) === '-' ? -1 : 1) * // plus or minus
                    ((parseInt(normalized.substr(1, 2), 10) * 60) + // hours (converted to minutes)
                    parseInt(normalized.substr(3, 2), 10))); // minutes
    };

    /**
     * No way to set timezone in js Date, so we must adjust the minutes to compensate. (think setDate, getDate)
     * @param  {Date} date
     * @param  {string} toTimezone formatted like "+0500", "-1245"
     * @return {Date}
     */
     $.timepicker.timezoneAdjust = function (date, toTimezone) {
         var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
         if (!isNaN(toTz)) {
             date.setMinutes(date.getMinutes() + -date.getTimezoneOffset() - toTz);
         }
         return date;
     };

    /**
     * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
     * enforce date range limits.
     * n.b. The input value must be correctly formatted (reformatting is not supported)
     * @param  {Element} startTime
     * @param  {Element} endTime
     * @param  {Object} options Options for the timepicker() call
     * @return {jQuery}
     */
     $.timepicker.timeRange = function (startTime, endTime, options) {
         return $.timepicker.handleRange('timepicker', startTime, endTime, options);
     };

    /**
     * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
     * enforce date range limits.
     * @param  {Element} startTime
     * @param  {Element} endTime
     * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
     *   a boolean value that can be used to reformat the input values to the `dateFormat`.
     * @param  {string} method Can be used to specify the type of picker to be added
     * @return {jQuery}
     */
     $.timepicker.datetimeRange = function (startTime, endTime, options) {
         $.timepicker.handleRange('datetimepicker', startTime, endTime, options);
     };

    /**
     * Calls `datepicker` on the `startTime` and `endTime` elements, and configures them to
     * enforce date range limits.
     * @param  {Element} startTime
     * @param  {Element} endTime
     * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
     *   a boolean value that can be used to reformat the input values to the `dateFormat`.
     * @return {jQuery}
     */
     $.timepicker.dateRange = function (startTime, endTime, options) {
         $.timepicker.handleRange('datepicker', startTime, endTime, options);
     };

    /**
     * Calls `method` on the `startTime` and `endTime` elements, and configures them to
     * enforce date range limits.
     * @param  {string} method Can be used to specify the type of picker to be added
     * @param  {Element} startTime
     * @param  {Element} endTime
     * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
     *   a boolean value that can be used to reformat the input values to the `dateFormat`.
     * @return {jQuery}
     */
     $.timepicker.handleRange = function (method, startTime, endTime, options) {
         options = $.extend({}, {
            minInterval: 0, // min allowed interval in milliseconds
            maxInterval: 0, // max allowed interval in milliseconds
            start: {},      // options for start picker
            end: {}         // options for end picker
        }, options);

        // for the mean time this fixes an issue with calling getDate with timepicker()
        var timeOnly = false;
        if(method === 'timepicker'){
            timeOnly = true;
            method = 'datetimepicker';
        }

        function checkDates(changed, other) {
            var startdt = startTime[method]('getDate'),
            enddt = endTime[method]('getDate'),
            changeddt = changed[method]('getDate');

            if (startdt !== null) {
                var minDate = new Date(startdt.getTime()),
                maxDate = new Date(startdt.getTime());

                minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
                maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);

                if (options.minInterval > 0 && minDate > enddt) { // minInterval check
                    endTime[method]('setDate', minDate);
                }
                else if (options.maxInterval > 0 && maxDate < enddt) { // max interval check
                    endTime[method]('setDate', maxDate);
                }
                else if (startdt > enddt) {
                    other[method]('setDate', changeddt);
                }
            }
        }

        function selected(changed, other, option) {
            if (!changed.val()) {
                return;
            }
            var date = changed[method].call(changed, 'getDate');
            if (date !== null && options.minInterval > 0) {
                if (option === 'minDate') {
                    date.setMilliseconds(date.getMilliseconds() + options.minInterval);
                }
                if (option === 'maxDate') {
                    date.setMilliseconds(date.getMilliseconds() - options.minInterval);
                }
            }
            if (date.getTime) {
                other[method].call(other, 'option', option, date);
            }
        }

        $.fn[method].call(startTime, $.extend({
            timeOnly: timeOnly,
            onClose: function (dateText, inst) {
                checkDates($(this), endTime);
            },
            onSelect: function (selectedDateTime) {
                selected($(this), endTime, 'minDate');
            }
        }, options, options.start));
        $.fn[method].call(endTime, $.extend({
            timeOnly: timeOnly,
            onClose: function (dateText, inst) {
                checkDates($(this), startTime);
            },
            onSelect: function (selectedDateTime) {
                selected($(this), startTime, 'maxDate');
            }
        }, options, options.end));

        checkDates(startTime, endTime);
        selected(startTime, endTime, 'minDate');
        selected(endTime, startTime, 'maxDate');
        return $([startTime.get(0), endTime.get(0)]);
    };

    /**
     * Log error or data to the console during error or debugging
     * @param  {Object} err pass any type object to log to the console during error or debugging
     * @return {void}
     */
     $.timepicker.log = function (err) {
         if (window.console) {
             window.console.log(err);
         }
     };

    /*
     * Add util object to allow access to private methods for testability.
     */
     $.timepicker._util = {
         _extendRemove: extendRemove,
         _isEmptyObject: isEmptyObject,
         _convert24to12: convert24to12,
         _detectSupport: detectSupport,
         _selectLocalTimezone: selectLocalTimezone,
         _computeEffectiveSetting: computeEffectiveSetting,
         _splitDateTime: splitDateTime,
         _parseDateTimeInternal: parseDateTimeInternal
     };

    /*
    * Microsecond support
    */
    if (!Date.prototype.getMicroseconds) {
        Date.prototype.microseconds = 0;
        Date.prototype.getMicroseconds = function () { return this.microseconds; };
        Date.prototype.setMicroseconds = function (m) {
            this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000));
            this.microseconds = m % 1000;
            return this;
        };
    }

    /*
    * Keep up with the version
    */
    $.timepicker.version = "1.4.4";

})(jQuery);
// source --> https://valvesolutions.com/wp-content/plugins/product-enquiry-pro/wisdm-forms/views/js/jquery.rateit.min.js 
﻿/*! RateIt | v1.0.21 / 03/16/2014 | https://rateit.codeplex.com/license
    http://rateit.codeplex.com | Twitter: @gjunge
    */
    (function(n){function t(n){var u=n.originalEvent.changedTouches,t=u[0],i="",r;switch(n.type){case"touchmove":i="mousemove";break;case"touchend":i="mouseup";break;default:return}r=document.createEvent("MouseEvent");r.initMouseEvent(i,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null);t.target.dispatchEvent(r);n.preventDefault()}n.rateit={aria:{resetLabel:"reset rating",ratingLabel:"rating"}};n.fn.rateit=function(i,r){var e=1,u={},o="init",s=function(n){return n.charAt(0).toUpperCase()+n.substr(1)},f;if(this.length===0)return this;if(f=n.type(i),f=="object"||i===undefined||i===null)u=n.extend({},n.fn.rateit.defaults,i);else{if(f=="string"&&i!=="reset"&&r===undefined)return this.data("rateit"+s(i));f=="string"&&(o="setvalue")}return this.each(function(){var c=n(this),f=function(n,t){if(t!=null){var i="aria-value"+(n=="value"?"now":n),r=c.find(".rateit-range");r.attr(i)!=undefined&&r.attr(i,t)}return arguments[0]="rateit"+s(n),c.data.apply(c,arguments)},p,w,v,h,b,g,nt,l,y,k,a;if(i=="reset"){p=f("init");for(w in p)c.data(w,p[w]);f("backingfld")&&(h=n(f("backingfld")),h.val(f("value")),h.trigger("change"),h[0].min&&(h[0].min=f("min")),h[0].max&&(h[0].max=f("max")),h[0].step&&(h[0].step=f("step")));c.trigger("reset")}if(c.hasClass("rateit")||c.addClass("rateit"),v=c.css("direction")!="rtl",o=="setvalue"){if(!f("init"))throw"Can't set value before init";i!="readonly"||r!=!0||f("readonly")||(c.find(".rateit-range").unbind(),f("wired",!1));i=="value"&&(r=r==null?f("min"):Math.max(f("min"),Math.min(f("max"),r)));f("backingfld")&&(h=n(f("backingfld")),i=="value"&&h.val(r),i=="min"&&h[0].min&&(h[0].min=r),i=="max"&&h[0].max&&(h[0].max=r),i=="step"&&h[0].step&&(h[0].step=r));f(i,r)}f("init")||(f("min",isNaN(f("min"))?u.min:f("min")),f("max",isNaN(f("max"))?u.max:f("max")),f("step",f("step")||u.step),f("readonly",f("readonly")!==undefined?f("readonly"):u.readonly),f("resetable",f("resetable")!==undefined?f("resetable"):u.resetable),f("backingfld",f("backingfld")||u.backingfld),f("starwidth",f("starwidth")||u.starwidth),f("starheight",f("starheight")||u.starheight),f("value",Math.max(f("min"),Math.min(f("max"),isNaN(f("value"))?isNaN(u.value)?u.min:u.value:f("value")))),f("ispreset",f("ispreset")!==undefined?f("ispreset"):u.ispreset),f("backingfld")&&(h=n(f("backingfld")).hide(),(h.attr("disabled")||h.attr("readonly"))&&f("readonly",!0),h[0].nodeName=="INPUT"&&(h[0].type=="range"||h[0].type=="text")&&(f("min",parseInt(h.attr("min"))||f("min")),f("max",parseInt(h.attr("max"))||f("max")),f("step",parseInt(h.attr("step"))||f("step"))),h[0].nodeName=="SELECT"&&h[0].options.length>1?(f("min",isNaN(f("min"))?Number(h[0].options[0].value):f("min")),f("max",Number(h[0].options[h[0].length-1].value)),f("step",Number(h[0].options[1].value)-Number(h[0].options[0].value)),b=h.find("option[selected]"),b.length==1&&f("value",b.val())):f("value",h.val())),g=c[0].nodeName=="DIV"?"div":"span",e++,nt='<button id="rateit-reset-{{index}}" data-role="none" class="rateit-reset" aria-label="'+n.rateit.aria.resetLabel+'" aria-controls="rateit-range-{{index}}">Clear<\/button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="'+n.rateit.aria.ratingLabel+'" aria-owns="rateit-reset-{{index}}" aria-valuemin="'+f("min")+'" aria-valuemax="'+f("max")+'" aria-valuenow="'+f("value")+'"><{{element}} class="rateit-selected" style="height:'+f("starheight")+'px"><\/{{element}}><{{element}} class="rateit-hover" style="height:'+f("starheight")+'px"><\/{{element}}><\/{{element}}>',c.append(nt.replace(/{{index}}/gi,e).replace(/{{element}}/gi,g)),v||(c.find(".rateit-reset").css("float","right"),c.find(".rateit-selected").addClass("rateit-selected-rtl"),c.find(".rateit-hover").addClass("rateit-hover-rtl")),f("init",JSON.parse(JSON.stringify(c.data()))));c.find(".rateit-selected, .rateit-hover").height(f("starheight"));l=c.find(".rateit-range");l.width(f("starwidth")*(f("max")-f("min"))).height(f("starheight"));y="rateit-preset"+(v?"":"-rtl");f("ispreset")?c.find(".rateit-selected").addClass(y):c.find(".rateit-selected").removeClass(y);f("value")!=null&&(k=(f("value")-f("min"))*f("starwidth"),c.find(".rateit-selected").width(k));a=c.find(".rateit-reset");a.data("wired")!==!0&&a.bind("click",function(t){t.preventDefault();a.blur();var i=n.Event("beforereset");if(c.trigger(i),i.isDefaultPrevented())return!1;c.rateit("value",null);c.trigger("reset")}).data("wired",!0);var tt=function(t,i){var u=i.changedTouches?i.changedTouches[0].pageX:i.pageX,r=u-n(t).offset().left;return v||(r=l.width()-r),r>l.width()&&(r=l.width()),r<0&&(r=0),k=Math.ceil(r/f("starwidth")*(1/f("step")))},it=function(n){var t=n*f("starwidth")*f("step"),r=l.find(".rateit-hover"),i;r.data("width")!=t&&(l.find(".rateit-selected").hide(),r.width(t).show().data("width",t),i=[n*f("step")+f("min")],c.trigger("hover",i).trigger("over",i))},d=function(t){var i=n.Event("beforerated");return(c.trigger(i,[t]),i.isDefaultPrevented())?!1:(f("value",t),f("backingfld")&&n(f("backingfld")).val(t).trigger("change"),f("ispreset")&&(l.find(".rateit-selected").removeClass(y),f("ispreset",!1)),l.find(".rateit-hover").hide(),l.find(".rateit-selected").width(t*f("starwidth")-f("min")*f("starwidth")).show(),c.trigger("hover",[null]).trigger("over",[null]).trigger("rated",[t]),!0)};f("readonly")?a.hide():(f("resetable")||a.hide(),f("wired")||(l.bind("touchmove touchend",t),l.mousemove(function(n){var t=tt(this,n);it(t)}),l.mouseleave(function(){l.find(".rateit-hover").hide().width(0).data("width","");c.trigger("hover",[null]).trigger("over",[null]);l.find(".rateit-selected").show()}),l.mouseup(function(n){var t=tt(this,n),i=t*f("step")+f("min");d(i);l.blur()}),l.keyup(function(n){(n.which==38||n.which==(v?39:37))&&d(Math.min(f("value")+f("step"),f("max")));(n.which==40||n.which==(v?37:39))&&d(Math.max(f("value")-f("step"),f("min")))}),f("wired",!0)),f("resetable")&&a.show());l.attr("aria-readonly",f("readonly"))})};n.fn.rateit.defaults={min:0,max:5,step:.5,starwidth:16,starheight:16,readonly:!1,resetable:!0,ispreset:!1};n(function(){n("div.rateit, span.rateit").rateit()})})(jQuery);
/*
//# sourceMappingURL=jquery.rateit.min.js.map
*/;
// source --> https://valvesolutions.com/wp-content/plugins/product-enquiry-pro/wisdm-forms/views/js/jquery.validate.min.js 
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
// source --> https://valvesolutions.com/wp-content/plugins/product-enquiry-pro/wisdm-forms/views/js/frontend.js 
jQuery(window).load(function() {

    /**
     * Function to check if rating is set and is greater than 0
     * @param  object currentElement object reference of current element
     */
     function clearStatus(currentElement)
     {
        if(currentElement.attr('aria-valuenow') <= 0  || currentElement.attr('aria-valuenow') == '') {
            currentElement.prev('.rateit-reset').hide();
        }else {
            currentElement.prev('.rateit-reset').show();
        }
    }

    /**
     * This function decides to show or hide clear on page load
     */
     jQuery('.rateit-range').each(function(){
        clearStatus(jQuery(this));
    })

    //Hide or show clear for ratings
    jQuery('.rateit-range').hover(function() {
        jQuery( this ).prev('.rateit-reset').hide();
    }, function() {
        clearStatus(jQuery(this));
    })

    /**
     * Hide 'clear' button on click.
     *
     * Trigger 'change' event on Rating hidden field, so that conditional logic
     * of other fields which (other fields) are dependent on Rating field will
     * work. (For example, 'Message' field will be displayed if Rating is more
     * than 4.)
     */
     jQuery('.rateit-reset').click(function(){
        let $resetButton        = jQuery(this),
            $ratingHiddenField  = $resetButton.closest('div[id^=Rating_].form-group').find('input:hidden[id^=Rating_]');
        $resetButton.hide();
        $ratingHiddenField.val('');
        $ratingHiddenField.change();
    })
 });
// source --> https://valvesolutions.com/wp-includes/js/imagesloaded.min.js 
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e<this.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\(['"]*([^'"\)]+)['"]*\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n<this.images.length;n++){var i=this.images[n];i.once("progress",e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,n.bind(this.proxyImage,"load",this),n.bind(this.proxyImage,"error",this),n.bind(this.img,"load",this),n.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this),n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,"load",this),n.bind(this.img,"error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});