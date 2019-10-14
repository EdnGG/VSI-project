// source --> https://valvesolutions.com/wp-content/plugins/product-enquiry-pro/js/public/end-approval-quote-session.js 
/**
 * Ends a session created after Approving the Quote,
 * Ends session when user clicks end session.
 */
jQuery(document).ready(function () {
    jQuery("#endsession").click(function () {
        var data = {
            'action': 'clearsession',
        };
        jQuery.post(quote_data.ajax_url, data, function ( response ) {
            window.location = quote_data.URL;
        });
    });
});
// source --> https://valvesolutions.com/wp-content/plugins/halfdata-optin-downloads/js/script.js 
var opd_busy = false;
function opd_submit(_object) {
	if (opd_busy == true) return;
	//opd_busy = true;
	var container = jQuery(_object).parentsUntil(".opd-container").slice(-1)[0];
	jQuery(container).find(".opd-submit").attr("disabled","disabled");
	jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-spinner opd-fa-spin");
	jQuery(container).find(".opd-error").removeClass("opd-error");
	
	var form_data = {action: "opd-submit"};
	jQuery(container).find(".opd-input").each(function() {
		var name = jQuery(this).attr("name");
		if (!name) return;
		if (jQuery(this).is(":checked")) {
			form_data["opd-"+name] = opd_encode64("on");
		} else {
			form_data["opd-"+name] = opd_encode64(jQuery(this).val());
		}
	});
	
	jQuery.ajax({
		url: opd_action, 
		data: form_data,
		dataType: "jsonp",
		success: function(return_data) {
			opd_busy = false;
			jQuery(container).find(".opd-submit").removeAttr("disabled");
			jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-ok");
			var data;
			try {
				if (typeof return_data == 'object') {
					data = return_data;
				} else {
					data = jQuery.parseJSON(return_data);
				}
				if (data.status == "OK") {
					opd_ga_track("opt-in-downloads", "subscribe");
					jQuery(container).find(".opd-form").fadeOut(300, function() {
						jQuery(container).find(".opd-message").html(data.message);
						jQuery(container).find(".opd-message").fadeIn(300, function() {
							if (jQuery(container).find(".opd-redirect").val() != "") {
								location.href = jQuery(container).find(".opd-redirect").val();
							}
						});
					});
				} else if (data.status == "ERROR") {
					if (data.message) {
						jQuery(container).find(".opd-form").fadeOut(300, function() {
							jQuery(container).find(".opd-message").html(data.message);
							jQuery(container).find(".opd-message").fadeIn(300);
						});
					} else {
						jQuery(container).find(".opd-input").each(function() {
							var name = jQuery(this).attr("name");
							if (!name) return;
							if (data[name] == "ERROR") jQuery(this).parent().addClass("opd-error");
						});
						//jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-attention");
					}
				} else {
					console.log(data);
					jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-attention");
				}
			} catch(error) {
				console.log(return_data);
				jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-attention");
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			jQuery(container).find(".opd-submit i").attr("class", "opd-fa opd-fa-attention");
		}
		
	});
	return false;
}

function opd_ga_track(type, action) {
	if (opd_ga_tracking != "on") return;
	try {
		var title = document.title;
		if (title.length > 0) {
			if (typeof _gaq == 'object') {
				_gaq.push(['_trackEvent', type, action, title, 1, false]);
			} else if (typeof _trackEvent == 'function') { 
				_trackEvent(type, action, title, 1, false);
			} else if (typeof __gaTracker == 'function') { 
				__gaTracker('send', 'event', type, action, title);
			} else if (typeof ga == 'function') {
				ga('send', 'event', type, action, title);
			}
		}
	} catch(error) {
	
	}
}
function opd_utf8encode(string) {
	string = string.replace(/\x0d\x0a/g, "\x0a");
	var output = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			output += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			output += String.fromCharCode((c >> 6) | 192);
			output += String.fromCharCode((c & 63) | 128);
		} else {
			output += String.fromCharCode((c >> 12) | 224);
			output += String.fromCharCode(((c >> 6) & 63) | 128);
			output += String.fromCharCode((c & 63) | 128);
		}
	}
	return output;
}
function opd_encode64(input) {
	var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;
	input = opd_utf8encode(input);
	while (i < input.length) {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}
		output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4);
	}
	return output;
}
function opd_utf8decode(input) {
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;
	while ( i < input.length ) {
		c = input.charCodeAt(i);
		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		} else if ((c > 191) && (c < 224)) {
			c2 = input.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = input.charCodeAt(i+1);
			c3 = input.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return string;
}
function opd_decode64(input) {
	var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	while (i < input.length) {
		enc1 = keyString.indexOf(input.charAt(i++));
		enc2 = keyString.indexOf(input.charAt(i++));
		enc3 = keyString.indexOf(input.charAt(i++));
		enc4 = keyString.indexOf(input.charAt(i++));
		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;
		output = output + String.fromCharCode(chr1);
		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}
	}
	output = opd_utf8decode(output);
	return output;
};