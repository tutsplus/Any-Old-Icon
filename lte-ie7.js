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
			'ian-yates-milk' : '&#xe010;'
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