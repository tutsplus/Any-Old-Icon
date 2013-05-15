/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'any-old-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'pavitra-s-tandon-only-goodness' : '&#xe000;',
			'ian-yates-y-fronts' : '&#xe001;',
			'pavitra-s-tandon-chat-for-lovers' : '&#xe002;',
			'muhamad-bahrul-ulum-log-out' : '&#xe003;',
			'muhamad-bahrul-ulum-log-in' : '&#xe004;',
			'justin-skull-ribbon' : '&#xe005;',
			'justin-burns-skull' : '&#xe006;',
			'justin-burns-skull-badge' : '&#xe007;',
			'designmodo-settings' : '&#xe008;',
			'designmodo-location' : '&#xe009;',
			'designmodo-like' : '&#xe00a;',
			'cole-townsend-pencil' : '&#xe00b;',
			'cole-townsend-check' : '&#xe00c;',
			'cole-townsend-chat' : '&#xe00d;',
			'ian-yates-porridge' : '&#xe00e;',
			'ian-yates-mr-whippy' : '&#xe00f;',
			'ian-yates-milk' : '&#xe010;',
			'aleks-dorohovich-rocket' : '&#xe011;',
			'vincent-gschwindemann-sun' : '&#xe012;',
			'vectortuts-pirate-panda' : '&#xe013;',
			'sanjit-saha-afro' : '&#xe014;',
			'samuel-sosina-command-line' : '&#xe015;',
			'quin-robinson-casual-shoe' : '&#xe016;',
			'michael-howarth-tardis' : '&#xe017;',
			'kenneth-bielinski-timer' : '&#xe018;',
			'juan-ortiz-zaforas-plug-f-female' : '&#xe019;',
			'juan-ortiz-zaforas-plug-c-female' : '&#xe01a;',
			'juan-gomez-alzaga-rocking-horse' : '&#xe01b;',
			'juan-gomez-alzaga-paint-brush' : '&#xe01c;',
			'juan-gomez-alzaga-leaf' : '&#xe01d;',
			'juan-gomez-alzaga-bird' : '&#xe01e;',
			'jeffrey-herrera-beer-mug' : '&#xe01f;',
			'jack-rugile-anchor' : '&#xe020;',
			'ilias-ismanalijev-batman' : '&#xe021;',
			'corinne-ducusin-doumbek' : '&#xe022;',
			'aleks-dorohovich-triforce' : '&#xe023;',
			'steve-debeus-farm' : '&#xe024;',
			'patrik-larsson-pokemon' : '&#xe025;',
			'patrik-larsson-pakman' : '&#xe026;',
			'ordog-zoltan-canon' : '&#xe027;',
			'johana-barretto-kitty' : '&#xe028;',
			'johana-barretto-kitty-stripy' : '&#xe029;',
			'jj-moi-manga-poison' : '&#xe02a;',
			'jj-moi-manga-eye' : '&#xe02b;',
			'jj-moi-kneel' : '&#xe02c;',
			'dom-waters-speedo' : '&#xe02d;',
			'dom-waters-knife' : '&#xe02e;',
			'derek-mui-tie' : '&#xe02f;',
			'derek-mui-invader' : '&#xe030;',
			'darren-reay-telephone-box' : '&#xe031;',
			'darren-reay-pen-nib' : '&#xe032;',
			'arno-hattingh-park' : '&#xe033;',
			'anton-boshoff-headset' : '&#xe034;',
			'joshua-barker-landscape' : '&#xe035;',
			'joshua-barker-house' : '&#xe036;',
			'jory-raphael-cart' : '&#xe037;',
			'johan-manuel-hernandez-record-player' : '&#xe038;',
			'danis-lou-joystick' : '&#xe039;',
			'christina-pedersen-walkman' : '&#xe03a;',
			'christina-pedersen-cassette' : '&#xe03b;',
			'chris-spittles-unpinned' : '&#xe03c;',
			'chris-spittles-save' : '&#xe03d;',
			'chris-spittles-pinned' : '&#xe03e;',
			'chris-spittles-health' : '&#xe03f;',
			'chris-spittles-geo-location' : '&#xe040;',
			'cesgra-globe' : '&#xe041;',
			'matt-hakes-spectacles' : '&#xe042;',
			'matt-hakes-moustache' : '&#xe043;',
			'ian-yates-creative-commons' : '&#xe044;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};