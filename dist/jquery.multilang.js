/****************************************************
* jQuery plugin for adding multiple language functionality
*
* Author:	Gareth Cadwaladr
* Version:	1.0
*
* Copyright 2013 Gareth Cadwaladr
* Released under the MIT License
****************************************************/

;(function ($, window, document, undefined) {

    $.fn.multilang = function (options) {
        
        var settings = $.extend({
            defaultLang: 'browser', 
            menu: true,
			pathToPix: '',
			pixFormat: 'png',
            languages: {}
        }, options);
        
        var initLang = settings.defaultLang;
        if (initLang=='browser') {
            initLang = (navigator.userLanguage || navigator.language).substring(0,2);
        }
		initLang = getParameterByName('lang') || initLang; 
        
        return this.each(function () {
            multilangShowLang($(this), initLang);
            if (settings.menu) {
				langs = $.isEmptyObject(settings.languages) ? (typeof jsonLangs === "undefined" ? {} : jsonLangs)  : settings.languages;
                multiLangAddMenu($(this),langs,settings.pathToPix,settings.pixFormat);
            }
        });
    };

    function multilangShowLang($this, lang) {
        $this.find('.multilang').hide();
        $this.find('[lang="' + lang + '"]').show();
    }
    
    function multiLangAddMenu($me,langs,dir,ext) {
		var docLangs=[];
		$me.find('.multilang').each(function() {
			thisLang = $(this).attr('lang');
			if ((docLangs.indexOf(thisLang)<0) && (thisLang!='-')) {
				docLangs.push(thisLang);
			}
		});
		var url = removeItemFromQueryString("lang");
		
		var menu = '<ul id="multilangMenu">';
		for (lang in docLangs) {
			var code = docLangs[lang];
			txt = $.isEmptyObject(langs) ? code : langs[code].nativeName;
			display = dir !="" ? '<img src="' + dir + '/' + code + '.' + ext + '" alt="' + txt + '">' : txt;
			menu += '<li><a href="' + url + (url.indexOf('?')>=0 ? '&' : '?') + 'lang=' + code + '" lang="' + code + '" title="' + txt + '">' + display + '</a></li>';
		}
		menu += '</ul>';
		$me.prepend(menu);
		$me.on('click','#multilangMenu [lang]', function() {
			multilangShowLang($me,$(this).attr('lang'));
			return false;
		});
    }
	
	function removeItemFromQueryString(n) {
		return location.search.replace(RegExp("\\&" + n + "=[^&]+"),"").replace(RegExp("\\?" + n + "=[^&]+"),"");
	}
    
    function getParameterByName(name) {
        r = RegExp("[\\?&]" + name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]") + "=([^&#]*)").exec(location.search);
        return r == null ? "" : decodeURIComponent(r[1].replace(/\+/g, " "));
    }
}(jQuery));