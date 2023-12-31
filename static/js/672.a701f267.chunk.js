/*! For license information please see 672.a701f267.chunk.js.LICENSE.txt */
!(function () {
  var e = {
      4184: function (e, t, r) {
        var n;
        !(function (a, i) {
          "use strict";
          var o = "function",
            c = "undefined",
            s = "object",
            _ = "string",
            u = "model",
            f = "name",
            l = "type",
            d = "vendor",
            p = "version",
            m = "architecture",
            h = "console",
            b = "mobile",
            w = "tablet",
            g = "smarttv",
            v = "wearable",
            y = "embedded",
            E = "Amazon",
            A = "Apple",
            k = "ASUS",
            x = "BlackBerry",
            T = "Firefox",
            R = "Google",
            L = "Huawei",
            F = "LG",
            z = "Microsoft",
            M = "Motorola",
            O = "Opera",
            I = "Samsung",
            P = "Sony",
            S = "Xiaomi",
            B = "Zebra",
            D = "Facebook",
            C = function (e) {
              var t = {};
              for (var r in e) t[e[r].toUpperCase()] = e[r];
              return t;
            },
            U = function (e, t) {
              return typeof e === _ && -1 !== V(t).indexOf(V(e));
            },
            V = function (e) {
              return e.toLowerCase();
            },
            N = function (e, t) {
              if (typeof e === _)
                return (
                  (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                  typeof t === c ? e : e.substring(0, 255)
                );
            },
            G = function (e, t) {
              for (var r, n, a, c, _, u, f = 0; f < t.length && !_; ) {
                var l = t[f],
                  d = t[f + 1];
                for (r = n = 0; r < l.length && !_; )
                  if ((_ = l[r++].exec(e)))
                    for (a = 0; a < d.length; a++)
                      (u = _[++n]),
                        typeof (c = d[a]) === s && c.length > 0
                          ? 2 == c.length
                            ? typeof c[1] == o
                              ? (this[c[0]] = c[1].call(this, u))
                              : (this[c[0]] = c[1])
                            : 3 == c.length
                            ? typeof c[1] !== o || (c[1].exec && c[1].test)
                              ? (this[c[0]] = u ? u.replace(c[1], c[2]) : i)
                              : (this[c[0]] = u ? c[1].call(this, u, c[2]) : i)
                            : 4 == c.length &&
                              (this[c[0]] = u
                                ? c[3].call(this, u.replace(c[1], c[2]))
                                : i)
                          : (this[c] = u || i);
                f += 2;
              }
            },
            W = function (e, t) {
              for (var r in t)
                if (typeof t[r] === s && t[r].length > 0) {
                  for (var n = 0; n < t[r].length; n++)
                    if (U(t[r][n], e)) return "?" === r ? i : r;
                } else if (U(t[r], e)) return "?" === r ? i : r;
              return e;
            },
            H = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            Y = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [p, [f, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [p, [f, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [f, p],
                [/opios[\/ ]+([\w\.]+)/i],
                [p, [f, "Opera Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [p, [f, O]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [f, p],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [p, [f, "UCBrowser"]],
                [/\bqbcore\/([\w\.]+)/i],
                [p, [f, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [p, [f, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [p, [f, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [p, [f, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [p, [f, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Secure Browser"], p],
                [/\bfocus\/([\w\.]+)/i],
                [p, [f, "Firefox Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [p, [f, "Opera Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [p, [f, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [p, [f, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [p, [f, "Opera Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [p, [f, "MIUI Browser"]],
                [/fxios\/([-\w\.]+)/i],
                [p, [f, T]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[f, "360 Browser"]],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Browser"], p],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[f, /_/g, " "], p],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [f, p],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                [f],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[f, D], p],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                ],
                [f, p],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [p, [f, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [p, [f, "Chrome Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[f, "Chrome WebView"], p],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [p, [f, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [f, p],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [p, [f, "Mobile Safari"]],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [p, f],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  f,
                  [
                    p,
                    W,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [f, p],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[f, "Netscape"], p],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [p, [f, "Firefox Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [f, p],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[m, "amd64"]],
                [/(ia32(?=;))/i],
                [[m, V]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[m, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[m, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[m, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[m, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[m, /ower/, "", V]],
                [/(sun4\w)[;\)]/i],
                [[m, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[m, V]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [u, [d, I], [l, w]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [u, [d, I], [l, b]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [u, [d, A], [l, b]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [u, [d, A], [l, w]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [u, [d, L], [l, w]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
                ],
                [u, [d, L], [l, b]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [u, /_/g, " "],
                  [d, S],
                  [l, b],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [u, /_/g, " "],
                  [d, S],
                  [l, w],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
                ],
                [u, [d, "OPPO"], [l, b]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [u, [d, "Vivo"], [l, b]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [u, [d, "Realme"], [l, b]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [u, [d, M], [l, b]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [u, [d, M], [l, w]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [u, [d, F], [l, w]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [u, [d, F], [l, b]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [u, [d, "Lenovo"], [l, w]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [u, /_/g, " "],
                  [d, "Nokia"],
                  [l, b],
                ],
                [/(pixel c)\b/i],
                [u, [d, R], [l, w]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [u, [d, R], [l, b]],
                [
                  /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [u, [d, P], [l, b]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [u, "Xperia Tablet"],
                  [d, P],
                  [l, w],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [u, [d, "OnePlus"], [l, b]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [u, [d, E], [l, w]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [u, /(.+)/g, "Fire Phone $1"],
                  [d, E],
                  [l, b],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [u, d, [l, w]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [u, [d, x], [l, b]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [u, [d, k], [l, w]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [u, [d, k], [l, b]],
                [/(nexus 9)/i],
                [u, [d, "HTC"], [l, w]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
                ],
                [d, [u, /_/g, " "], [l, b]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [u, [d, "Acer"], [l, w]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [u, [d, "Meizu"], [l, b]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [u, [d, "Sharp"], [l, b]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [d, u, [l, b]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [d, u, [l, w]],
                [/(surface duo)/i],
                [u, [d, z], [l, w]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [u, [d, "Fairphone"], [l, b]],
                [/(u304aa)/i],
                [u, [d, "AT&T"], [l, b]],
                [/\bsie-(\w*)/i],
                [u, [d, "Siemens"], [l, b]],
                [/\b(rct\w+) b/i],
                [u, [d, "RCA"], [l, w]],
                [/\b(venue[\d ]{2,7}) b/i],
                [u, [d, "Dell"], [l, w]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [u, [d, "Verizon"], [l, w]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [u, [d, "Barnes & Noble"], [l, w]],
                [/\b(tm\d{3}\w+) b/i],
                [u, [d, "NuVision"], [l, w]],
                [/\b(k88) b/i],
                [u, [d, "ZTE"], [l, w]],
                [/\b(nx\d{3}j) b/i],
                [u, [d, "ZTE"], [l, b]],
                [/\b(gen\d{3}) b.+49h/i],
                [u, [d, "Swiss"], [l, b]],
                [/\b(zur\d{3}) b/i],
                [u, [d, "Swiss"], [l, w]],
                [/\b((zeki)?tb.*\b) b/i],
                [u, [d, "Zeki"], [l, w]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[d, "Dragon Touch"], u, [l, w]],
                [/\b(ns-?\w{0,9}) b/i],
                [u, [d, "Insignia"], [l, w]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [u, [d, "NextBook"], [l, w]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[d, "Voice"], u, [l, b]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[d, "LvTel"], u, [l, b]],
                [/\b(ph-1) /i],
                [u, [d, "Essential"], [l, b]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [u, [d, "Envizen"], [l, w]],
                [/\b(trio[-\w\. ]+) b/i],
                [u, [d, "MachSpeed"], [l, w]],
                [/\btu_(1491) b/i],
                [u, [d, "Rotor"], [l, w]],
                [/(shield[\w ]+) b/i],
                [u, [d, "Nvidia"], [l, w]],
                [/(sprint) (\w+)/i],
                [d, u, [l, b]],
                [/(kin\.[onetw]{3})/i],
                [
                  [u, /\./g, " "],
                  [d, z],
                  [l, b],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [u, [d, B], [l, w]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [u, [d, B], [l, b]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [d, u, [l, h]],
                [/droid.+; (shield) bui/i],
                [u, [d, "Nvidia"], [l, h]],
                [/(playstation [345portablevi]+)/i],
                [u, [d, P], [l, h]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [u, [d, z], [l, h]],
                [/smart-tv.+(samsung)/i],
                [d, [l, g]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [u, /^/, "SmartTV"],
                  [d, I],
                  [l, g],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [d, F],
                  [l, g],
                ],
                [/(apple) ?tv/i],
                [d, [u, "Apple TV"], [l, g]],
                [/crkey/i],
                [
                  [u, "Chromecast"],
                  [d, R],
                  [l, g],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [u, [d, E], [l, g]],
                [/\(dtv[\);].+(aquos)/i],
                [u, [d, "Sharp"], [l, g]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                ],
                [
                  [d, N],
                  [u, N],
                  [l, g],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[l, g]],
                [/((pebble))app/i],
                [d, u, [l, v]],
                [/droid.+; (glass) \d/i],
                [u, [d, R], [l, v]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [u, [d, B], [l, v]],
                [/(quest( 2)?)/i],
                [u, [d, D], [l, v]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [d, [l, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [u, [l, b]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [u, [l, w]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[l, w]],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [[l, b]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [u, [d, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [p, [f, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [p, [f, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [f, p],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [p, f],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [f, p],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [f, [p, W, H]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [f, "Windows"],
                  [p, W, H],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [p, /_/g, "."],
                  [f, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [f, "Mac OS"],
                  [p, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [p, f],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [f, p],
                [/\(bb(10);/i],
                [p, [f, x]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [p, [f, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [p, [f, "Firefox OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [p, [f, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [p, [f, "Chromecast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[f, "Chromium OS"], p],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [f, p],
                [/(sunos) ?([\w\.\d]*)/i],
                [[f, "Solaris"], p],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [f, p],
              ],
            },
            X = function e(t, r) {
              if ((typeof t === s && ((r = t), (t = i)), !(this instanceof e)))
                return new e(t, r).getResult();
              var n =
                  t ||
                  (typeof a !== c && a.navigator && a.navigator.userAgent
                    ? a.navigator.userAgent
                    : ""),
                o = r
                  ? (function (e, t) {
                      var r = {};
                      for (var n in e)
                        t[n] && t[n].length % 2 === 0
                          ? (r[n] = t[n].concat(e[n]))
                          : (r[n] = e[n]);
                      return r;
                    })(Y, r)
                  : Y;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t.name = i),
                    (t.version = i),
                    G.call(t, n, o.browser),
                    (t.major =
                      typeof (e = t.version) === _
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : i),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e.architecture = i), G.call(e, n, o.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e.vendor = i),
                    (e.model = i),
                    (e.type = i),
                    G.call(e, n, o.device),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (
                    (e.name = i), (e.version = i), G.call(e, n, o.engine), e
                  );
                }),
                (this.getOS = function () {
                  var e = {};
                  return (e.name = i), (e.version = i), G.call(e, n, o.os), e;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return n;
                }),
                (this.setUA = function (e) {
                  return (
                    (n = typeof e === _ && e.length > 255 ? N(e, 255) : e), this
                  );
                }),
                this.setUA(n),
                this
              );
            };
          (X.VERSION = "0.7.30"),
            (X.BROWSER = C([f, p, "major"])),
            (X.CPU = C([m])),
            (X.DEVICE = C([u, d, l, h, b, g, w, v, y])),
            (X.ENGINE = X.OS = C([f, p])),
            typeof t !== c
              ? (e.exports && (t = e.exports = X), (t.UAParser = X))
              : r.amdO
              ? (n = function () {
                  return X;
                }.call(t, r, t, e)) === i || (e.exports = n)
              : typeof a !== c && (a.UAParser = X);
          var q = typeof a !== c && (a.jQuery || a.Zepto);
          if (q && !q.ua) {
            var j = new X();
            (q.ua = j.getResult()),
              (q.ua.get = function () {
                return j.getUA();
              }),
              (q.ua.set = function (e) {
                j.setUA(e);
                var t = j.getResult();
                for (var r in t) q.ua[r] = t[r];
              });
          }
        })("object" === typeof window ? window : this);
      },
      1689: function (e, t, r) {
        "use strict";
        e.exports = r.p + "static/media/zappar-cv.ad56c9a01f0d026178a3.wasm";
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.m = e),
    (r.amdO = {}),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "./"),
    (r.b = self.location + "/../../../"),
    (function () {
      "use strict";
      function e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function t(t, r) {
        if (t) {
          if ("string" === typeof t) return e(t, r);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? e(t, r)
              : void 0
          );
        }
      }
      function n(e, r) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = t(e)) ||
            (r && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var a = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return a >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[a++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function a(e) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      function i() {
        i = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          c = n.asyncIterator || "@@asyncIterator",
          s = n.toStringTag || "@@toStringTag";
        function _(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          _({}, "");
        } catch (L) {
          _ = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, n) {
          var a = t && t.prototype instanceof d ? t : d,
            i = Object.create(a.prototype),
            o = new x(n || []);
          return (
            (i._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (a, i) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === a) throw i;
                  return R();
                }
                for (r.method = a, r.arg = i; ; ) {
                  var o = r.delegate;
                  if (o) {
                    var c = E(o, r);
                    if (c) {
                      if (c === l) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var s = f(e, t, r);
                  if ("normal" === s.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(e, r, o)),
            i
          );
        }
        function f(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        e.wrap = u;
        var l = {};
        function d() {}
        function p() {}
        function m() {}
        var h = {};
        _(h, o, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          w = b && b(b(T([])));
        w && w !== t && r.call(w, o) && (h = w);
        var g = (m.prototype = d.prototype = Object.create(h));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            _(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function y(e, t) {
          function n(i, o, c, s) {
            var _ = f(e[i], e, o);
            if ("throw" !== _.type) {
              var u = _.arg,
                l = u.value;
              return l && "object" == a(l) && r.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      n("next", e, c, s);
                    },
                    function (e) {
                      n("throw", e, c, s);
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      (u.value = e), c(u);
                    },
                    function (e) {
                      return n("throw", e, c, s);
                    }
                  );
            }
            s(_.arg);
          }
          var i;
          this._invoke = function (e, r) {
            function a() {
              return new t(function (t, a) {
                n(e, r, t, a);
              });
            }
            return (i = i ? i.then(a, a) : a());
          };
        }
        function E(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                E(e, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = f(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = m),
          _(g, "constructor", m),
          _(m, "constructor", p),
          (p.displayName = _(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), _(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(y.prototype),
          _(y.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = y),
          (e.async = function (t, r, n, a, i) {
            void 0 === i && (i = Promise);
            var o = new y(u(t, r, n, a), i);
            return e.isGeneratorFunction(r)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          v(g),
          _(g, s, "Generator"),
          _(g, o, function () {
            return this;
          }),
          _(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = T),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), k(r), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    k(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      var o = (function () {
          var e =
            "undefined" !== typeof document && document.currentScript
              ? document.currentScript.src
              : void 0;
          return function (t) {
            var r, n, a;
            (t = t || {}),
              r || (r = "undefined" !== typeof t ? t : {}),
              (r.ready = new Promise(function (e, t) {
                (n = e), (a = t);
              }));
            var i,
              o = {};
            for (i in r) r.hasOwnProperty(i) && (o[i] = r[i]);
            var c = "./this.program";
            function s(e, t) {
              throw t;
            }
            var _,
              u = "";
            (u = self.location.href),
              e && (u = e),
              (u =
                0 !== u.indexOf("blob:")
                  ? u.substr(0, u.lastIndexOf("/") + 1)
                  : ""),
              (_ = function (e) {
                var t = new XMLHttpRequest();
                return (
                  t.open("GET", e, !1),
                  (t.responseType = "arraybuffer"),
                  t.send(null),
                  new Uint8Array(t.response)
                );
              });
            var f,
              l,
              d = r.print || console.log.bind(console),
              p = r.printErr || console.warn.bind(console);
            for (i in o) o.hasOwnProperty(i) && (r[i] = o[i]);
            (o = null),
              r.thisProgram && (c = r.thisProgram),
              r.quit && (s = r.quit),
              r.wasmBinary && (l = r.wasmBinary);
            var m = r.noExitRuntime || !0;
            "object" !== typeof WebAssembly &&
              K("no native wasm support detected");
            var h,
              b,
              w = !1;
            function g(e, t) {
              e || K("Assertion failed: " + t);
            }
            function v(e) {
              var t = r["_" + e];
              return (
                g(
                  t,
                  "Cannot call unknown function " +
                    e +
                    ", make sure it is exported"
                ),
                t
              );
            }
            function y(e, t, r, n) {
              var a,
                i = {
                  string: function (e) {
                    var t = 0;
                    if (null !== e && void 0 !== e && 0 !== e) {
                      var r = 1 + (e.length << 2);
                      (t = yr(r)), P(e, k, t, r);
                    }
                    return t;
                  },
                  array: function (e) {
                    var t = yr(e.length);
                    return A.set(e, t), t;
                  },
                },
                o = v(e),
                c = [];
              if (((e = 0), n))
                for (var s = 0; s < n.length; s++) {
                  var _ = i[r[s]];
                  _ ? (0 === e && (e = gr()), (c[s] = _(n[s]))) : (c[s] = n[s]);
                }
              return (
                (r = o.apply(null, c)),
                (a = r),
                (r = "string" === t ? I(a) : "boolean" === t ? !!a : a),
                0 !== e && vr(e),
                r
              );
            }
            var E,
              A,
              k,
              x,
              T,
              R,
              L,
              F,
              z,
              M =
                "undefined" !== typeof TextDecoder
                  ? new TextDecoder("utf8")
                  : void 0;
            function O(e, t, r) {
              var n = t + r;
              for (r = t; e[r] && !(r >= n); ) ++r;
              if (16 < r - t && e.subarray && M)
                return M.decode(e.subarray(t, r));
              for (n = ""; t < r; ) {
                var a = e[t++];
                if (128 & a) {
                  var i = 63 & e[t++];
                  if (192 == (224 & a))
                    n += String.fromCharCode(((31 & a) << 6) | i);
                  else {
                    var o = 63 & e[t++];
                    65536 >
                    (a =
                      224 == (240 & a)
                        ? ((15 & a) << 12) | (i << 6) | o
                        : ((7 & a) << 18) |
                          (i << 12) |
                          (o << 6) |
                          (63 & e[t++]))
                      ? (n += String.fromCharCode(a))
                      : ((a -= 65536),
                        (n += String.fromCharCode(
                          55296 | (a >> 10),
                          56320 | (1023 & a)
                        )));
                  }
                } else n += String.fromCharCode(a);
              }
              return n;
            }
            function I(e, t) {
              return e ? O(k, e, t) : "";
            }
            function P(e, t, r, n) {
              if (!(0 < n)) return 0;
              var a = r;
              n = r + n - 1;
              for (var i = 0; i < e.length; ++i) {
                var o = e.charCodeAt(i);
                if (55296 <= o && 57343 >= o)
                  o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++i));
                if (127 >= o) {
                  if (r >= n) break;
                  t[r++] = o;
                } else {
                  if (2047 >= o) {
                    if (r + 1 >= n) break;
                    t[r++] = 192 | (o >> 6);
                  } else {
                    if (65535 >= o) {
                      if (r + 2 >= n) break;
                      t[r++] = 224 | (o >> 12);
                    } else {
                      if (r + 3 >= n) break;
                      (t[r++] = 240 | (o >> 18)),
                        (t[r++] = 128 | ((o >> 12) & 63));
                    }
                    t[r++] = 128 | ((o >> 6) & 63);
                  }
                  t[r++] = 128 | (63 & o);
                }
              }
              return (t[r] = 0), r - a;
            }
            function S(e) {
              for (var t = 0, r = 0; r < e.length; ++r) {
                var n = e.charCodeAt(r);
                55296 <= n &&
                  57343 >= n &&
                  (n =
                    (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++r))),
                  127 >= n
                    ? ++t
                    : (t = 2047 >= n ? t + 2 : 65535 >= n ? t + 3 : t + 4);
              }
              return t;
            }
            function B(e) {
              var t = S(e) + 1,
                r = dr(t);
              return r && P(e, A, r, t), r;
            }
            function D(e, t) {
              for (var r = 0; r < e.length; ++r) A[t++ >> 0] = e.charCodeAt(r);
              A[t >> 0] = 0;
            }
            function C() {
              var e = h.buffer;
              (E = e),
                (r.HEAP8 = A = new Int8Array(e)),
                (r.HEAP16 = x = new Int16Array(e)),
                (r.HEAP32 = R = new Int32Array(e)),
                (r.HEAPU8 = k = new Uint8Array(e)),
                (r.HEAPU16 = T = new Uint16Array(e)),
                (r.HEAPU32 = L = new Uint32Array(e)),
                (r.HEAPF32 = F = new Float32Array(e)),
                (r.HEAPF64 = z = new Float64Array(e));
            }
            var U,
              V = [],
              N = [],
              G = [],
              W = [];
            function H() {
              var e = r.preRun.shift();
              V.unshift(e);
            }
            var Y = 0,
              X = null,
              q = null;
            function j() {
              Y++, r.monitorRunDependencies && r.monitorRunDependencies(Y);
            }
            function Z() {
              if (
                (Y--,
                r.monitorRunDependencies && r.monitorRunDependencies(Y),
                0 == Y && (null !== X && (clearInterval(X), (X = null)), q))
              ) {
                var e = q;
                (q = null), e();
              }
            }
            function K(e) {
              throw (
                (r.onAbort && r.onAbort(e),
                p(e),
                (w = !0),
                (b = 1),
                (e = new WebAssembly.RuntimeError(
                  "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
                )),
                a(e),
                e)
              );
            }
            (r.preloadedImages = {}), (r.preloadedAudios = {});
            var J = "zappar-cv.wasm";
            if (
              String.prototype.startsWith
                ? !J.startsWith("data:application/octet-stream;base64,")
                : 0 !== J.indexOf("data:application/octet-stream;base64,")
            ) {
              var $ = J;
              J = r.locateFile ? r.locateFile($, u) : u + $;
            }
            var Q,
              ee,
              te,
              re = {
                490708: function () {
                  if (self.crypto && self.crypto.getRandomValues) {
                    var e = new Uint32Array(1);
                    return self.crypto.getRandomValues(e), e[0];
                  }
                  return 9007199254740991 * Math.random();
                },
              };
            function ne(e) {
              for (; 0 < e.length; ) {
                var t = e.shift();
                if ("function" == typeof t) t(r);
                else {
                  var n = t.wd;
                  "number" === typeof n
                    ? void 0 === t.Pc
                      ? U.get(n)()
                      : U.get(n)(t.Pc)
                    : n(void 0 === t.Pc ? null : t.Pc);
                }
              }
            }
            function ae(e, t) {
              if (0 === e) e = Date.now();
              else {
                if (1 !== e && 4 !== e) return (R[mr() >> 2] = 28), -1;
                e = te();
              }
              return (
                (R[t >> 2] = (e / 1e3) | 0),
                (R[(t + 4) >> 2] = ((e % 1e3) * 1e6) | 0),
                0
              );
            }
            function ie(e) {
              (this.Ic = e - 16),
                (this.Nd = function (e) {
                  R[(this.Ic + 8) >> 2] = e;
                }),
                (this.Kd = function (e) {
                  R[(this.Ic + 0) >> 2] = e;
                }),
                (this.Ld = function () {
                  R[(this.Ic + 4) >> 2] = 0;
                }),
                (this.Jd = function () {
                  A[(this.Ic + 12) >> 0] = 0;
                }),
                (this.Md = function () {
                  A[(this.Ic + 13) >> 0] = 0;
                }),
                (this.zd = function (e, t) {
                  this.Nd(e), this.Kd(t), this.Ld(), this.Jd(), this.Md();
                });
            }
            te = function () {
              return performance.now();
            };
            function oe(e, t) {
              for (var r = 0, n = e.length - 1; 0 <= n; n--) {
                var a = e[n];
                "." === a
                  ? e.splice(n, 1)
                  : ".." === a
                  ? (e.splice(n, 1), r++)
                  : r && (e.splice(n, 1), r--);
              }
              if (t) for (; r; r--) e.unshift("..");
              return e;
            }
            function ce(e) {
              var t = "/" === e.charAt(0),
                r = "/" === e.substr(-1);
              return (
                (e = oe(
                  e.split("/").filter(function (e) {
                    return !!e;
                  }),
                  !t
                ).join("/")) ||
                  t ||
                  (e = "."),
                e && r && (e += "/"),
                (t ? "/" : "") + e
              );
            }
            function se(e) {
              var t =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                  .exec(e)
                  .slice(1);
              return (
                (e = t[0]),
                (t = t[1]),
                e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : "."
              );
            }
            function _e(e) {
              if ("/" === e) return "/";
              var t = (e = (e = ce(e)).replace(/\/$/, "")).lastIndexOf("/");
              return -1 === t ? e : e.substr(t + 1);
            }
            function ue() {
              for (
                var e = "", t = !1, r = arguments.length - 1;
                -1 <= r && !t;
                r--
              ) {
                if ("string" !== typeof (t = 0 <= r ? arguments[r] : "/"))
                  throw new TypeError(
                    "Arguments to path.resolve must be strings"
                  );
                if (!t) return "";
                (e = t + "/" + e), (t = "/" === t.charAt(0));
              }
              return (
                (t ? "/" : "") +
                  (e = oe(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !t
                  ).join("/")) || "."
              );
            }
            var fe = [];
            function le(e, t) {
              (fe[e] = { input: [], xc: [], Hc: t }), Ce(e, de);
            }
            var de = {
                open: function (e) {
                  var t = fe[e.node.Mc];
                  if (!t) throw new ke(43);
                  (e.vc = t), (e.seekable = !1);
                },
                close: function (e) {
                  e.vc.Hc.flush(e.vc);
                },
                flush: function (e) {
                  e.vc.Hc.flush(e.vc);
                },
                read: function (e, t, r, n) {
                  if (!e.vc || !e.vc.Hc.jd) throw new ke(60);
                  for (var a = 0, i = 0; i < n; i++) {
                    try {
                      var o = e.vc.Hc.jd(e.vc);
                    } catch (c) {
                      throw new ke(29);
                    }
                    if (void 0 === o && 0 === a) throw new ke(6);
                    if (null === o || void 0 === o) break;
                    a++, (t[r + i] = o);
                  }
                  return a && (e.node.timestamp = Date.now()), a;
                },
                write: function (e, t, r, n) {
                  if (!e.vc || !e.vc.Hc.ad) throw new ke(60);
                  try {
                    for (var a = 0; a < n; a++) e.vc.Hc.ad(e.vc, t[r + a]);
                  } catch (i) {
                    throw new ke(29);
                  }
                  return n && (e.node.timestamp = Date.now()), a;
                },
              },
              pe = {
                jd: function (e) {
                  if (!e.input.length) {
                    var t = null;
                    if (
                      ("undefined" != typeof window &&
                      "function" == typeof window.prompt
                        ? null !== (t = window.prompt("Input: ")) && (t += "\n")
                        : "function" == typeof readline &&
                          null !== (t = readline()) &&
                          (t += "\n"),
                      !t)
                    )
                      return null;
                    e.input = _r(t, !0);
                  }
                  return e.input.shift();
                },
                ad: function (e, t) {
                  null === t || 10 === t
                    ? (d(O(e.xc, 0)), (e.xc = []))
                    : 0 != t && e.xc.push(t);
                },
                flush: function (e) {
                  e.xc && 0 < e.xc.length && (d(O(e.xc, 0)), (e.xc = []));
                },
              },
              me = {
                ad: function (e, t) {
                  null === t || 10 === t
                    ? (p(O(e.xc, 0)), (e.xc = []))
                    : 0 != t && e.xc.push(t);
                },
                flush: function (e) {
                  e.xc && 0 < e.xc.length && (p(O(e.xc, 0)), (e.xc = []));
                },
              },
              he = {
                Ac: null,
                Cc: function () {
                  return he.createNode(null, "/", 16895, 0);
                },
                createNode: function (e, t, r, n) {
                  if (24576 === (61440 & r) || 4096 === (61440 & r))
                    throw new ke(63);
                  return (
                    he.Ac ||
                      (he.Ac = {
                        dir: {
                          node: {
                            zc: he.rc.zc,
                            Bc: he.rc.Bc,
                            Kc: he.rc.Kc,
                            Rc: he.rc.Rc,
                            od: he.rc.od,
                            Xc: he.rc.Xc,
                            pd: he.rc.pd,
                            Sc: he.rc.Sc,
                            Tc: he.rc.Tc,
                          },
                          stream: { Fc: he.tc.Fc },
                        },
                        file: {
                          node: { zc: he.rc.zc, Bc: he.rc.Bc },
                          stream: {
                            Fc: he.tc.Fc,
                            read: he.tc.read,
                            write: he.tc.write,
                            dd: he.tc.dd,
                            kd: he.tc.kd,
                            md: he.tc.md,
                          },
                        },
                        link: {
                          node: { zc: he.rc.zc, Bc: he.rc.Bc, Nc: he.rc.Nc },
                          stream: {},
                        },
                        ed: {
                          node: { zc: he.rc.zc, Bc: he.rc.Bc },
                          stream: De,
                        },
                      }),
                    16384 === (61440 & (r = ze(e, t, r, n)).mode)
                      ? ((r.rc = he.Ac.dir.node),
                        (r.tc = he.Ac.dir.stream),
                        (r.sc = {}))
                      : 32768 === (61440 & r.mode)
                      ? ((r.rc = he.Ac.file.node),
                        (r.tc = he.Ac.file.stream),
                        (r.uc = 0),
                        (r.sc = null))
                      : 40960 === (61440 & r.mode)
                      ? ((r.rc = he.Ac.link.node), (r.tc = he.Ac.link.stream))
                      : 8192 === (61440 & r.mode) &&
                        ((r.rc = he.Ac.ed.node), (r.tc = he.Ac.ed.stream)),
                    (r.timestamp = Date.now()),
                    e && ((e.sc[t] = r), (e.timestamp = r.timestamp)),
                    r
                  );
                },
                Zd: function (e) {
                  return e.sc
                    ? e.sc.subarray
                      ? e.sc.subarray(0, e.uc)
                      : new Uint8Array(e.sc)
                    : new Uint8Array(0);
                },
                fd: function (e, t) {
                  var r = e.sc ? e.sc.length : 0;
                  r >= t ||
                    ((t = Math.max(t, (r * (1048576 > r ? 2 : 1.125)) >>> 0)),
                    0 != r && (t = Math.max(t, 256)),
                    (r = e.sc),
                    (e.sc = new Uint8Array(t)),
                    0 < e.uc && e.sc.set(r.subarray(0, e.uc), 0));
                },
                Hd: function (e, t) {
                  if (e.uc != t)
                    if (0 == t) (e.sc = null), (e.uc = 0);
                    else {
                      var r = e.sc;
                      (e.sc = new Uint8Array(t)),
                        r && e.sc.set(r.subarray(0, Math.min(t, e.uc))),
                        (e.uc = t);
                    }
                },
                rc: {
                  zc: function (e) {
                    var t = {};
                    return (
                      (t.ud = 8192 === (61440 & e.mode) ? e.id : 1),
                      (t.$c = e.id),
                      (t.mode = e.mode),
                      (t.Fd = 1),
                      (t.uid = 0),
                      (t.xd = 0),
                      (t.Mc = e.Mc),
                      16384 === (61440 & e.mode)
                        ? (t.size = 4096)
                        : 32768 === (61440 & e.mode)
                        ? (t.size = e.uc)
                        : 40960 === (61440 & e.mode)
                        ? (t.size = e.link.length)
                        : (t.size = 0),
                      (t.qd = new Date(e.timestamp)),
                      (t.Ed = new Date(e.timestamp)),
                      (t.td = new Date(e.timestamp)),
                      (t.rd = 4096),
                      (t.sd = Math.ceil(t.size / t.rd)),
                      t
                    );
                  },
                  Bc: function (e, t) {
                    void 0 !== t.mode && (e.mode = t.mode),
                      void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                      void 0 !== t.size && he.Hd(e, t.size);
                  },
                  Kc: function () {
                    throw xe[44];
                  },
                  Rc: function (e, t, r, n) {
                    return he.createNode(e, t, r, n);
                  },
                  od: function (e, t, r) {
                    if (16384 === (61440 & e.mode)) {
                      try {
                        var n = Fe(t, r);
                      } catch (i) {}
                      if (n) for (var a in n.sc) throw new ke(55);
                    }
                    delete e.parent.sc[e.name],
                      (e.parent.timestamp = Date.now()),
                      (e.name = r),
                      (t.sc[r] = e),
                      (t.timestamp = e.parent.timestamp),
                      (e.parent = t);
                  },
                  Xc: function (e, t) {
                    delete e.sc[t], (e.timestamp = Date.now());
                  },
                  pd: function (e, t) {
                    var r,
                      n = Fe(e, t);
                    for (r in n.sc) throw new ke(55);
                    delete e.sc[t], (e.timestamp = Date.now());
                  },
                  Sc: function (e) {
                    var t,
                      r = [".", ".."];
                    for (t in e.sc) e.sc.hasOwnProperty(t) && r.push(t);
                    return r;
                  },
                  Tc: function (e, t, r) {
                    return ((e = he.createNode(e, t, 41471, 0)).link = r), e;
                  },
                  Nc: function (e) {
                    if (40960 !== (61440 & e.mode)) throw new ke(28);
                    return e.link;
                  },
                },
                tc: {
                  read: function (e, t, r, n, a) {
                    var i = e.node.sc;
                    if (a >= e.node.uc) return 0;
                    if (8 < (e = Math.min(e.node.uc - a, n)) && i.subarray)
                      t.set(i.subarray(a, a + e), r);
                    else for (n = 0; n < e; n++) t[r + n] = i[a + n];
                    return e;
                  },
                  write: function (e, t, r, n, a, i) {
                    if ((t.buffer === A.buffer && (i = !1), !n)) return 0;
                    if (
                      (((e = e.node).timestamp = Date.now()),
                      t.subarray && (!e.sc || e.sc.subarray))
                    ) {
                      if (i) return (e.sc = t.subarray(r, r + n)), (e.uc = n);
                      if (0 === e.uc && 0 === a)
                        return (e.sc = t.slice(r, r + n)), (e.uc = n);
                      if (a + n <= e.uc)
                        return e.sc.set(t.subarray(r, r + n), a), n;
                    }
                    if ((he.fd(e, a + n), e.sc.subarray && t.subarray))
                      e.sc.set(t.subarray(r, r + n), a);
                    else for (i = 0; i < n; i++) e.sc[a + i] = t[r + i];
                    return (e.uc = Math.max(e.uc, a + n)), n;
                  },
                  Fc: function (e, t, r) {
                    if (
                      (1 === r
                        ? (t += e.position)
                        : 2 === r &&
                          32768 === (61440 & e.node.mode) &&
                          (t += e.node.uc),
                      0 > t)
                    )
                      throw new ke(28);
                    return t;
                  },
                  dd: function (e, t, r) {
                    he.fd(e.node, t + r),
                      (e.node.uc = Math.max(e.node.uc, t + r));
                  },
                  kd: function (e, t, r, n, a, i) {
                    if (0 !== t) throw new ke(28);
                    if (32768 !== (61440 & e.node.mode)) throw new ke(43);
                    if (((e = e.node.sc), 2 & i || e.buffer !== E)) {
                      for (
                        (0 < n || n + r < e.length) &&
                          (e = e.subarray
                            ? e.subarray(n, n + r)
                            : Array.prototype.slice.call(e, n, n + r)),
                          n = !0,
                          i = 16384 * Math.ceil(r / 16384),
                          t = dr(i);
                        r < i;

                      )
                        A[t + r++] = 0;
                      if (!(r = t)) throw new ke(48);
                      A.set(e, r);
                    } else (n = !1), (r = e.byteOffset);
                    return { Ic: r, Vd: n };
                  },
                  md: function (e, t, r, n, a) {
                    if (32768 !== (61440 & e.node.mode)) throw new ke(43);
                    return 2 & a || he.tc.write(e, t, 0, n, r, !1), 0;
                  },
                },
              },
              be = null,
              we = {},
              ge = [],
              ve = 1,
              ye = null,
              Ee = !0,
              Ae = {},
              ke = null,
              xe = {};
            function Te(e, t) {
              if (((t = t || {}), !(e = ue("/", e))))
                return { path: "", node: null };
              var r,
                n = { gd: !0, bd: 0 };
              for (r in n) void 0 === t[r] && (t[r] = n[r]);
              if (8 < t.bd) throw new ke(32);
              e = oe(
                e.split("/").filter(function (e) {
                  return !!e;
                }),
                !1
              );
              var a = be;
              for (n = "/", r = 0; r < e.length; r++) {
                var i = r === e.length - 1;
                if (i && t.parent) break;
                if (
                  ((a = Fe(a, e[r])),
                  (n = ce(n + "/" + e[r])),
                  a.Lc && (!i || (i && t.gd)) && (a = a.Lc.root),
                  !i || t.Qc)
                )
                  for (i = 0; 40960 === (61440 & a.mode); )
                    if (
                      ((a = He(n)),
                      (a = Te((n = ue(se(n), a)), { bd: t.bd }).node),
                      40 < i++)
                    )
                      throw new ke(32);
              }
              return { path: n, node: a };
            }
            function Re(e) {
              for (var t; ; ) {
                if (e === e.parent)
                  return (
                    (e = e.Cc.ld),
                    t ? ("/" !== e[e.length - 1] ? e + "/" + t : e + t) : e
                  );
                (t = t ? e.name + "/" + t : e.name), (e = e.parent);
              }
            }
            function Le(e, t) {
              for (var r = 0, n = 0; n < t.length; n++)
                r = ((r << 5) - r + t.charCodeAt(n)) | 0;
              return ((e + r) >>> 0) % ye.length;
            }
            function Fe(e, t) {
              var r;
              if ((r = (r = Ie(e, "x")) ? r : e.rc.Kc ? 0 : 2))
                throw new ke(r, e);
              for (r = ye[Le(e.id, t)]; r; r = r.Gc) {
                var n = r.name;
                if (r.parent.id === e.id && n === t) return r;
              }
              return e.rc.Kc(e, t);
            }
            function ze(e, t, r, n) {
              return (
                (t = Le((e = new sr(e, t, r, n)).parent.id, e.name)),
                (e.Gc = ye[t]),
                (ye[t] = e)
              );
            }
            var Me = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 };
            function Oe(e) {
              var t = ["r", "w", "rw"][3 & e];
              return 512 & e && (t += "w"), t;
            }
            function Ie(e, t) {
              return Ee ||
                ((-1 === t.indexOf("r") || 292 & e.mode) &&
                  (-1 === t.indexOf("w") || 146 & e.mode) &&
                  (-1 === t.indexOf("x") || 73 & e.mode))
                ? 0
                : 2;
            }
            function Pe(e, t) {
              try {
                return Fe(e, t), 20;
              } catch (r) {}
              return Ie(e, "wx");
            }
            function Se(e, t) {
              $e || (($e = function () {}).prototype = {});
              var r,
                n = new $e();
              for (r in e) n[r] = e[r];
              return (
                (e = n),
                (t = (function (e) {
                  for (e = e || 0; e <= 4096; e++) if (!ge[e]) return e;
                  throw new ke(33);
                })(t)),
                (e.Dc = t),
                (ge[t] = e)
              );
            }
            var Be,
              De = {
                open: function (e) {
                  (e.tc = we[e.node.Mc].tc), e.tc.open && e.tc.open(e);
                },
                Fc: function () {
                  throw new ke(70);
                },
              };
            function Ce(e, t) {
              we[e] = { tc: t };
            }
            function Ue(e, t) {
              var r = "/" === t,
                n = !t;
              if (r && be) throw new ke(10);
              if (!r && !n) {
                var a = Te(t, { gd: !1 });
                if (((t = a.path), (a = a.node).Lc)) throw new ke(10);
                if (16384 !== (61440 & a.mode)) throw new ke(54);
              }
              (t = { type: e, ce: {}, ld: t, Dd: [] }),
                ((e = e.Cc(t)).Cc = t),
                (t.root = e),
                r ? (be = e) : a && ((a.Lc = t), a.Cc && a.Cc.Dd.push(t));
            }
            function Ve(e, t, r) {
              var n = Te(e, { parent: !0 }).node;
              if (!(e = _e(e)) || "." === e || ".." === e) throw new ke(28);
              var a = Pe(n, e);
              if (a) throw new ke(a);
              if (!n.rc.Rc) throw new ke(63);
              return n.rc.Rc(n, e, t, r);
            }
            function Ne(e) {
              return Ve(e, 16895, 0);
            }
            function Ge(e, t, r) {
              "undefined" === typeof r && ((r = t), (t = 438)),
                Ve(e, 8192 | t, r);
            }
            function We(e, t) {
              if (!ue(e)) throw new ke(44);
              var r = Te(t, { parent: !0 }).node;
              if (!r) throw new ke(44);
              var n = Pe(r, (t = _e(t)));
              if (n) throw new ke(n);
              if (!r.rc.Tc) throw new ke(63);
              r.rc.Tc(r, t, e);
            }
            function He(e) {
              if (!(e = Te(e).node)) throw new ke(44);
              if (!e.rc.Nc) throw new ke(28);
              return ue(Re(e.parent), e.rc.Nc(e));
            }
            function Ye(e, t) {
              if (!(e = Te(e, { Qc: !t }).node)) throw new ke(44);
              if (!e.rc.zc) throw new ke(63);
              return e.rc.zc(e);
            }
            function Xe(e) {
              return Ye(e, !0);
            }
            function qe(e, t, n, a) {
              if ("" === e) throw new ke(44);
              if ("string" === typeof t) {
                var i = Me[t];
                if ("undefined" === typeof i)
                  throw Error("Unknown file open mode: " + t);
                t = i;
              }
              if (
                ((n =
                  64 & t
                    ? (4095 & ("undefined" === typeof n ? 438 : n)) | 32768
                    : 0),
                "object" === typeof e)
              )
                var o = e;
              else {
                e = ce(e);
                try {
                  o = Te(e, { Qc: !(131072 & t) }).node;
                } catch (c) {}
              }
              if (((i = !1), 64 & t))
                if (o) {
                  if (128 & t) throw new ke(20);
                } else (o = Ve(e, n, 0)), (i = !0);
              if (!o) throw new ke(44);
              if (
                (8192 === (61440 & o.mode) && (t &= -513),
                65536 & t && 16384 !== (61440 & o.mode))
              )
                throw new ke(54);
              if (
                !i &&
                (n = o
                  ? 40960 === (61440 & o.mode)
                    ? 32
                    : 16384 === (61440 & o.mode) && ("r" !== Oe(t) || 512 & t)
                    ? 31
                    : Ie(o, Oe(t))
                  : 44)
              )
                throw new ke(n);
              if (512 & t) {
                if (
                  !(n =
                    "string" === typeof (n = o) ? Te(n, { Qc: !0 }).node : n).rc
                    .Bc
                )
                  throw new ke(63);
                if (16384 === (61440 & n.mode)) throw new ke(31);
                if (32768 !== (61440 & n.mode)) throw new ke(28);
                if ((i = Ie(n, "w"))) throw new ke(i);
                n.rc.Bc(n, { size: 0, timestamp: Date.now() });
              }
              (t &= -131713),
                (a = Se(
                  {
                    node: o,
                    path: Re(o),
                    flags: t,
                    seekable: !0,
                    position: 0,
                    tc: o.tc,
                    Sd: [],
                    error: !1,
                  },
                  a
                )).tc.open && a.tc.open(a),
                !r.logReadFiles ||
                  1 & t ||
                  (Qe || (Qe = {}),
                  e in Qe ||
                    ((Qe[e] = 1),
                    p("FS.trackingDelegate error on read file: " + e)));
              try {
                Ae.onOpenFile &&
                  ((o = 0),
                  1 !== (2097155 & t) && (o |= 1),
                  0 !== (2097155 & t) && (o |= 2),
                  Ae.onOpenFile(e, o));
              } catch (c) {
                p(
                  "FS.trackingDelegate['onOpenFile']('" +
                    e +
                    "', flags) threw an exception: " +
                    c.message
                );
              }
              return a;
            }
            function je(e, t, r) {
              if (null === e.Dc) throw new ke(8);
              if (!e.seekable || !e.tc.Fc) throw new ke(70);
              if (0 != r && 1 != r && 2 != r) throw new ke(28);
              return (e.position = e.tc.Fc(e, t, r)), (e.Sd = []), e.position;
            }
            function Ze() {
              ke ||
                (((ke = function (e, t) {
                  (this.node = t),
                    (this.Id = function (e) {
                      this.wc = e;
                    }),
                    this.Id(e),
                    (this.message = "FS error");
                }).prototype = Error()),
                (ke.prototype.constructor = ke),
                [44].forEach(function (e) {
                  (xe[e] = new ke(e)),
                    (xe[e].stack = "<generic error, no stack>");
                }));
            }
            function Ke(e, t, r) {
              e = ce("/dev/" + e);
              var n = (function (e, t) {
                var r = 0;
                return e && (r |= 365), t && (r |= 146), r;
              })(!!t, !!r);
              Je || (Je = 64);
              var a = (Je++ << 8) | 0;
              Ce(a, {
                open: function (e) {
                  e.seekable = !1;
                },
                close: function () {
                  r && r.buffer && r.buffer.length && r(10);
                },
                read: function (e, r, n, a) {
                  for (var i = 0, o = 0; o < a; o++) {
                    try {
                      var c = t();
                    } catch (s) {
                      throw new ke(29);
                    }
                    if (void 0 === c && 0 === i) throw new ke(6);
                    if (null === c || void 0 === c) break;
                    i++, (r[n + o] = c);
                  }
                  return i && (e.node.timestamp = Date.now()), i;
                },
                write: function (e, t, n, a) {
                  for (var i = 0; i < a; i++)
                    try {
                      r(t[n + i]);
                    } catch (o) {
                      throw new ke(29);
                    }
                  return a && (e.node.timestamp = Date.now()), i;
                },
              }),
                Ge(e, n, a);
            }
            var Je,
              $e,
              Qe,
              et = {};
            function tt(e, t, r) {
              try {
                var n = e(t);
              } catch (a) {
                if (a && a.node && ce(t) !== ce(Re(a.node))) return -54;
                throw a;
              }
              return (
                (R[r >> 2] = n.ud),
                (R[(r + 4) >> 2] = 0),
                (R[(r + 8) >> 2] = n.$c),
                (R[(r + 12) >> 2] = n.mode),
                (R[(r + 16) >> 2] = n.Fd),
                (R[(r + 20) >> 2] = n.uid),
                (R[(r + 24) >> 2] = n.xd),
                (R[(r + 28) >> 2] = n.Mc),
                (R[(r + 32) >> 2] = 0),
                (ee = [
                  n.size >>> 0,
                  ((Q = n.size),
                  1 <= +Math.abs(Q)
                    ? 0 < Q
                      ? (0 |
                          Math.min(+Math.floor(Q / 4294967296), 4294967295)) >>>
                        0
                      : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (R[(r + 40) >> 2] = ee[0]),
                (R[(r + 44) >> 2] = ee[1]),
                (R[(r + 48) >> 2] = 4096),
                (R[(r + 52) >> 2] = n.sd),
                (R[(r + 56) >> 2] = (n.qd.getTime() / 1e3) | 0),
                (R[(r + 60) >> 2] = 0),
                (R[(r + 64) >> 2] = (n.Ed.getTime() / 1e3) | 0),
                (R[(r + 68) >> 2] = 0),
                (R[(r + 72) >> 2] = (n.td.getTime() / 1e3) | 0),
                (R[(r + 76) >> 2] = 0),
                (ee = [
                  n.$c >>> 0,
                  ((Q = n.$c),
                  1 <= +Math.abs(Q)
                    ? 0 < Q
                      ? (0 |
                          Math.min(+Math.floor(Q / 4294967296), 4294967295)) >>>
                        0
                      : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (R[(r + 80) >> 2] = ee[0]),
                (R[(r + 84) >> 2] = ee[1]),
                0
              );
            }
            var rt = void 0;
            function nt() {
              return R[((rt += 4) - 4) >> 2];
            }
            function at(e) {
              if (!(e = ge[e])) throw new ke(8);
              return e;
            }
            function it(e) {
              try {
                e();
              } catch (t) {
                if (!(t instanceof Er) && "unwind" !== t)
                  throw (
                    (t &&
                      "object" === typeof t &&
                      t.stack &&
                      p("exception thrown: " + [t, t.stack]),
                    t)
                  );
              }
            }
            var ot,
              ct,
              st,
              _t = !1,
              ut = null,
              ft = 0,
              lt = null,
              dt = 0,
              pt = 0,
              mt = 0,
              ht = [],
              bt = {},
              wt = !1,
              gt = !1,
              vt = [];
            function yt() {
              function e() {
                gt =
                  document.pointerLockElement === r.canvas ||
                  document.mozPointerLockElement === r.canvas ||
                  document.webkitPointerLockElement === r.canvas ||
                  document.msPointerLockElement === r.canvas;
              }
              if ((r.preloadPlugins || (r.preloadPlugins = []), !Mt)) {
                Mt = !0;
                try {
                  Ot = !0;
                } catch (n) {
                  (Ot = !1),
                    console.log(
                      "warning: no blob constructor, cannot create blobs with mimetypes"
                    );
                }
                (It =
                  "undefined" != typeof MozBlobBuilder
                    ? MozBlobBuilder
                    : "undefined" != typeof WebKitBlobBuilder
                    ? WebKitBlobBuilder
                    : Ot
                    ? null
                    : console.log("warning: no BlobBuilder")),
                  (Pt =
                    "undefined" != typeof window
                      ? window.URL
                        ? window.URL
                        : window.webkitURL
                      : void 0),
                  r.nd ||
                    "undefined" !== typeof Pt ||
                    (console.log(
                      "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
                    ),
                    (r.nd = !0)),
                  r.preloadPlugins.push({
                    canHandle: function (e) {
                      return !r.nd && /\.(jpg|jpeg|png|bmp)$/i.test(e);
                    },
                    handle: function (e, t, n, a) {
                      var i = null;
                      if (Ot)
                        try {
                          (i = new Blob([e], { type: zt(t) })).size !==
                            e.length &&
                            (i = new Blob([new Uint8Array(e).buffer], {
                              type: zt(t),
                            }));
                        } catch (s) {
                          !(function (e) {
                            f || (f = {}), f[e] || ((f[e] = 1), p(e));
                          })(
                            "Blob constructor present but fails: " +
                              s +
                              "; falling back to blob builder"
                          );
                        }
                      i ||
                        ((i = new It()).append(new Uint8Array(e).buffer),
                        (i = i.getBlob()));
                      var o = Pt.createObjectURL(i),
                        c = new Image();
                      (c.onload = function () {
                        g(c.complete, "Image " + t + " could not be decoded");
                        var a = document.createElement("canvas");
                        (a.width = c.width),
                          (a.height = c.height),
                          a.getContext("2d").drawImage(c, 0, 0),
                          (r.preloadedImages[t] = a),
                          Pt.revokeObjectURL(o),
                          n && n(e);
                      }),
                        (c.onerror = function () {
                          console.log("Image " + o + " could not be decoded"),
                            a && a();
                        }),
                        (c.src = o);
                    },
                  }),
                  r.preloadPlugins.push({
                    canHandle: function (e) {
                      return (
                        !r.be &&
                        e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                      );
                    },
                    handle: function (e, t, n, a) {
                      function i(a) {
                        c || ((c = !0), (r.preloadedAudios[t] = a), n && n(e));
                      }
                      function o() {
                        c ||
                          ((c = !0),
                          (r.preloadedAudios[t] = new Audio()),
                          a && a());
                      }
                      var c = !1;
                      if (!Ot) return o();
                      try {
                        var s = new Blob([e], { type: zt(t) });
                      } catch (u) {
                        return o();
                      }
                      s = Pt.createObjectURL(s);
                      var _ = new Audio();
                      _.addEventListener(
                        "canplaythrough",
                        function () {
                          i(_);
                        },
                        !1
                      ),
                        (_.onerror = function () {
                          if (!c) {
                            console.log(
                              "warning: browser could not fully decode audio " +
                                t +
                                ", trying slower base64 approach"
                            );
                            for (
                              var r = "", n = 0, a = 0, o = 0;
                              o < e.length;
                              o++
                            )
                              for (n = (n << 8) | e[o], a += 8; 6 <= a; ) {
                                var s = (n >> (a - 6)) & 63;
                                (a -= 6),
                                  (r +=
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                      s
                                    ]);
                              }
                            2 == a
                              ? ((r +=
                                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                    (3 & n) << 4
                                  ]),
                                (r += "=="))
                              : 4 == a &&
                                ((r +=
                                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                    (15 & n) << 2
                                  ]),
                                (r += "=")),
                              (_.src =
                                "data:audio/x-" +
                                t.substr(-3) +
                                ";base64," +
                                r),
                              i(_);
                          }
                        }),
                        (_.src = s),
                        Ft(function () {
                          i(_);
                        }, 1e4);
                    },
                  });
                var t = r.canvas;
                t &&
                  ((t.requestPointerLock =
                    t.requestPointerLock ||
                    t.mozRequestPointerLock ||
                    t.webkitRequestPointerLock ||
                    t.msRequestPointerLock ||
                    function () {}),
                  (t.exitPointerLock =
                    document.exitPointerLock ||
                    document.mozExitPointerLock ||
                    document.webkitExitPointerLock ||
                    document.msExitPointerLock ||
                    function () {}),
                  (t.exitPointerLock = t.exitPointerLock.bind(document)),
                  document.addEventListener("pointerlockchange", e, !1),
                  document.addEventListener("mozpointerlockchange", e, !1),
                  document.addEventListener("webkitpointerlockchange", e, !1),
                  document.addEventListener("mspointerlockchange", e, !1),
                  r.elementPointerLock &&
                    t.addEventListener(
                      "click",
                      function (e) {
                        !gt &&
                          r.canvas.requestPointerLock &&
                          (r.canvas.requestPointerLock(), e.preventDefault());
                      },
                      !1
                    ));
              }
            }
            function Et(e, t, n, a) {
              if (t && r.Zc && e == r.canvas) return r.Zc;
              var i;
              if (t) {
                var o = { antialias: !1, alpha: !1, Cd: 1 };
                if (a) for (var c in a) o[c] = a[c];
                if (
                  "undefined" !== typeof er &&
                  (i = (function (e, t) {
                    e.hd ||
                      ((e.hd = e.getContext),
                      (e.getContext = function (t, r) {
                        return ("webgl" == t) ==
                          (r = e.hd(t, r)) instanceof WebGLRenderingContext
                          ? r
                          : null;
                      }));
                    var r = e.getContext("webgl", t);
                    return r
                      ? (function (e, t) {
                          var r = Kt(Zt),
                            n = { $d: r, attributes: t, version: t.Cd, Yc: e };
                          return (
                            e.canvas && (e.canvas.Ud = n),
                            (Zt[r] = n),
                            ("undefined" === typeof t.vd || t.vd) &&
                              (function (e) {
                                if ((e || (e = $t), !e.Ad)) {
                                  e.Ad = !0;
                                  var t = e.Yc;
                                  !(function (e) {
                                    var t = e.getExtension(
                                      "ANGLE_instanced_arrays"
                                    );
                                    t &&
                                      ((e.vertexAttribDivisor = function (
                                        e,
                                        r
                                      ) {
                                        t.vertexAttribDivisorANGLE(e, r);
                                      }),
                                      (e.drawArraysInstanced = function (
                                        e,
                                        r,
                                        n,
                                        a
                                      ) {
                                        t.drawArraysInstancedANGLE(e, r, n, a);
                                      }),
                                      (e.drawElementsInstanced = function (
                                        e,
                                        r,
                                        n,
                                        a,
                                        i
                                      ) {
                                        t.drawElementsInstancedANGLE(
                                          e,
                                          r,
                                          n,
                                          a,
                                          i
                                        );
                                      }));
                                  })(t),
                                    (function (e) {
                                      var t = e.getExtension(
                                        "OES_vertex_array_object"
                                      );
                                      t &&
                                        ((e.createVertexArray = function () {
                                          return t.createVertexArrayOES();
                                        }),
                                        (e.deleteVertexArray = function (e) {
                                          t.deleteVertexArrayOES(e);
                                        }),
                                        (e.bindVertexArray = function (e) {
                                          t.bindVertexArrayOES(e);
                                        }),
                                        (e.isVertexArray = function (e) {
                                          return t.isVertexArrayOES(e);
                                        }));
                                    })(t),
                                    (function (e) {
                                      var t =
                                        e.getExtension("WEBGL_draw_buffers");
                                      t &&
                                        (e.drawBuffers = function (e, r) {
                                          t.drawBuffersWEBGL(e, r);
                                        });
                                    })(t),
                                    (t.Xd = t.getExtension(
                                      "EXT_disjoint_timer_query"
                                    )),
                                    (t.ae = t.getExtension("WEBGL_multi_draw")),
                                    (t.getSupportedExtensions() || []).forEach(
                                      function (e) {
                                        0 > e.indexOf("lose_context") &&
                                          0 > e.indexOf("debug") &&
                                          t.getExtension(e);
                                      }
                                    );
                                }
                              })(n),
                            r
                          );
                        })(r, t)
                      : 0;
                  })(e, o))
                )
                  var s = Zt[i].Yc;
              } else s = e.getContext("2d");
              return s
                ? (n &&
                    (t ||
                      g(
                        "undefined" === typeof or,
                        "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
                      ),
                    (r.Zc = s),
                    t && (($t = Zt[i]), (r.Zc = or = $t && $t.Yc)),
                    (r.fe = t),
                    vt.forEach(function (e) {
                      e();
                    }),
                    yt()),
                  s)
                : null;
            }
            var At = !1,
              kt = void 0,
              xt = void 0;
            function Tt() {
              return (
                !!wt &&
                ((
                  document.exitFullscreen ||
                  document.cancelFullScreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen ||
                  document.webkitCancelFullScreen ||
                  function () {}
                ).apply(document, []),
                !0)
              );
            }
            var Rt = 0;
            function Lt(e) {
              if ("function" === typeof requestAnimationFrame)
                requestAnimationFrame(e);
              else {
                var t = Date.now();
                if (0 === Rt) Rt = t + 1e3 / 60;
                else for (; t + 2 >= Rt; ) Rt += 1e3 / 60;
                setTimeout(e, Math.max(Rt - t, 0));
              }
            }
            function Ft(e, t) {
              setTimeout(function () {
                it(e);
              }, 1000);
            }
            function zt(e) {
              return {
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                ogg: "audio/ogg",
                wav: "audio/wav",
                mp3: "audio/mpeg",
              }[e.substr(e.lastIndexOf(".") + 1)];
            }
            var Mt,
              Ot,
              It,
              Pt,
              St = [];
            function Bt() {
              var e = r.canvas;
              St.forEach(function (t) {
                t(e.width, e.height);
              });
            }
            function Dt(e, t, n) {
              t && n ? ((e.Td = t), (e.yd = n)) : ((t = e.Td), (n = e.yd));
              var a = t,
                i = n;
              if (
                (r.forcedAspectRatio &&
                  0 < r.forcedAspectRatio &&
                  (a / i < r.forcedAspectRatio
                    ? (a = Math.round(i * r.forcedAspectRatio))
                    : (i = Math.round(a / r.forcedAspectRatio))),
                (document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.webkitCurrentFullScreenElement) === e.parentNode &&
                  "undefined" != typeof screen)
              ) {
                var o = Math.min(screen.width / a, screen.height / i);
                (a = Math.round(a * o)), (i = Math.round(i * o));
              }
              xt
                ? (e.width != a && (e.width = a),
                  e.height != i && (e.height = i),
                  "undefined" != typeof e.style &&
                    (e.style.removeProperty("width"),
                    e.style.removeProperty("height")))
                : (e.width != t && (e.width = t),
                  e.height != n && (e.height = n),
                  "undefined" != typeof e.style &&
                    (a != t || i != n
                      ? (e.style.setProperty("width", a + "px", "important"),
                        e.style.setProperty("height", i + "px", "important"))
                      : (e.style.removeProperty("width"),
                        e.style.removeProperty("height"))));
            }
            function Ct() {
              return !1;
            }
            r._emscripten_is_main_browser_thread = Ct;
            var Ut,
              Vt = [];
            function Nt(e, t) {
              (L[e >> 2] = t), (L[(e + 4) >> 2] = (t / 4294967296) | 0);
            }
            function Gt(e, t, r, n, a) {
              function i(t) {
                var r = 0,
                  n = 0;
                t &&
                  ((n = v.response ? v.response.byteLength : 0),
                  (r = dr(n)),
                  k.set(new Uint8Array(v.response), r)),
                  (L[(e + 12) >> 2] = r),
                  Nt(e + 16, n);
              }
              var o = L[(e + 8) >> 2];
              if (o) {
                var c = I(o),
                  s = e + 112,
                  _ = I(s);
                _ || (_ = "GET");
                var u = L[(s + 52) >> 2],
                  f = L[(s + 56) >> 2],
                  l = !!L[(s + 60) >> 2],
                  d = L[(s + 68) >> 2],
                  p = L[(s + 72) >> 2];
                o = L[(s + 76) >> 2];
                var m = L[(s + 80) >> 2],
                  h = L[(s + 84) >> 2];
                s = L[(s + 88) >> 2];
                var b = !!(1 & u),
                  w = !!(2 & u);
                (u = !!(64 & u)),
                  (d = d ? I(d) : void 0),
                  (p = p ? I(p) : void 0);
                var g = m ? I(m) : void 0,
                  v = new XMLHttpRequest();
                if (
                  ((v.withCredentials = l),
                  v.open(_, c, !u, d, p),
                  u || (v.timeout = f),
                  (v.de = c),
                  (v.responseType = "arraybuffer"),
                  m && v.overrideMimeType(g),
                  o)
                )
                  for (; (_ = L[o >> 2]) && (c = L[(o + 4) >> 2]); )
                    (o += 8), (_ = I(_)), (c = I(c)), v.setRequestHeader(_, c);
                Vt.push(v),
                  (L[(e + 0) >> 2] = Vt.length),
                  (o = h && s ? k.slice(h, h + s) : null),
                  (v.onload = function (n) {
                    i(b && !w);
                    var a = v.response ? v.response.byteLength : 0;
                    Nt(e + 24, 0),
                      a && Nt(e + 32, a),
                      (T[(e + 40) >> 1] = v.readyState),
                      (T[(e + 42) >> 1] = v.status),
                      v.statusText && P(v.statusText, k, e + 44, 64),
                      200 <= v.status && 300 > v.status
                        ? t && t(e, v, n)
                        : r && r(e, v, n);
                  }),
                  (v.onerror = function (t) {
                    i(b);
                    var n = v.status;
                    Nt(e + 24, 0),
                      Nt(e + 32, v.response ? v.response.byteLength : 0),
                      (T[(e + 40) >> 1] = v.readyState),
                      (T[(e + 42) >> 1] = n),
                      r && r(e, v, t);
                  }),
                  (v.ontimeout = function (t) {
                    r && r(e, v, t);
                  }),
                  (v.onprogress = function (t) {
                    var r = b && w && v.response ? v.response.byteLength : 0,
                      a = 0;
                    b &&
                      w &&
                      ((a = dr(r)), k.set(new Uint8Array(v.response), a)),
                      (L[(e + 12) >> 2] = a),
                      Nt(e + 16, r),
                      Nt(e + 24, t.loaded - r),
                      Nt(e + 32, t.total),
                      (T[(e + 40) >> 1] = v.readyState),
                      3 <= v.readyState &&
                        0 === v.status &&
                        0 < t.loaded &&
                        (v.status = 200),
                      (T[(e + 42) >> 1] = v.status),
                      v.statusText && P(v.statusText, k, e + 44, 64),
                      n && n(e, v, t),
                      a && lr(a);
                  }),
                  (v.onreadystatechange = function (t) {
                    (T[(e + 40) >> 1] = v.readyState),
                      2 <= v.readyState && (T[(e + 42) >> 1] = v.status),
                      a && a(e, v, t);
                  });
                try {
                  v.send(o);
                } catch (y) {
                  r && r(e, v, y);
                }
              } else r(e, 0, "no url specified!");
            }
            function Wt(e, t, r, n) {
              var a = Ut;
              if (a) {
                var i = L[(e + 112 + 64) >> 2];
                i || (i = L[(e + 8) >> 2]);
                var o = I(i);
                try {
                  var c = a
                    .transaction(["FILES"], "readwrite")
                    .objectStore("FILES")
                    .put(t, o);
                  (c.onsuccess = function () {
                    (T[(e + 40) >> 1] = 4),
                      (T[(e + 42) >> 1] = 200),
                      P("OK", k, e + 44, 64),
                      r(e, 0, o);
                  }),
                    (c.onerror = function (t) {
                      (T[(e + 40) >> 1] = 4),
                        (T[(e + 42) >> 1] = 413),
                        P("Payload Too Large", k, e + 44, 64),
                        n(e, 0, t);
                    });
                } catch (s) {
                  n(e, 0, s);
                }
              } else n(e, 0, "IndexedDB not available!");
            }
            var Ht,
              Yt = {};
            function Xt() {
              if (!Ht) {
                var e,
                  t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG:
                      (
                        ("object" === typeof navigator &&
                          navigator.languages &&
                          navigator.languages[0]) ||
                        "C"
                      ).replace("-", "_") + ".UTF-8",
                    _: c || "./this.program",
                  };
                for (e in Yt) t[e] = Yt[e];
                var r = [];
                for (e in t) r.push(e + "=" + t[e]);
                Ht = r;
              }
              return Ht;
            }
            var qt = 1,
              jt = [],
              Zt = [];
            function Kt(e) {
              for (var t = qt++, r = e.length; r < t; r++) e[r] = null;
              return t;
            }
            var Jt,
              $t,
              Qt,
              er = {};
            function tr(e) {
              return 0 === e % 4 && (0 !== e % 100 || 0 === e % 400);
            }
            function rr(e, t) {
              for (var r = 0, n = 0; n <= t; r += e[n++]);
              return r;
            }
            var nr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
              ar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function ir(e, t) {
              for (e = new Date(e.getTime()); 0 < t; ) {
                var r = e.getMonth(),
                  n = (tr(e.getFullYear()) ? nr : ar)[r];
                if (!(t > n - e.getDate())) {
                  e.setDate(e.getDate() + t);
                  break;
                }
                (t -= n - e.getDate() + 1),
                  e.setDate(1),
                  11 > r
                    ? e.setMonth(r + 1)
                    : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
              }
              return e;
            }
            var or,
              cr = [];
            function sr(e, t, r, n) {
              e || (e = this),
                (this.parent = e),
                (this.Cc = e.Cc),
                (this.Lc = null),
                (this.id = ve++),
                (this.name = t),
                (this.mode = r),
                (this.rc = {}),
                (this.tc = {}),
                (this.Mc = n);
            }
            function _r(e, t) {
              var r = Array(S(e) + 1);
              return (e = P(e, r, 0, r.length)), t && (r.length = e), r;
            }
            Object.defineProperties(sr.prototype, {
              read: {
                get: function () {
                  return 365 === (365 & this.mode);
                },
                set: function (e) {
                  e ? (this.mode |= 365) : (this.mode &= -366);
                },
              },
              write: {
                get: function () {
                  return 146 === (146 & this.mode);
                },
                set: function (e) {
                  e ? (this.mode |= 146) : (this.mode &= -147);
                },
              },
            }),
              Ze(),
              (ye = Array(4096)),
              Ue(he, "/"),
              Ne("/tmp"),
              Ne("/home"),
              Ne("/home/web_user"),
              (function () {
                Ne("/dev"),
                  Ce(259, {
                    read: function () {
                      return 0;
                    },
                    write: function (e, t, r, n) {
                      return n;
                    },
                  }),
                  Ge("/dev/null", 259),
                  le(1280, pe),
                  le(1536, me),
                  Ge("/dev/tty", 1280),
                  Ge("/dev/tty1", 1536);
                var e = (function () {
                  if (
                    "object" === typeof crypto &&
                    "function" === typeof crypto.getRandomValues
                  ) {
                    var e = new Uint8Array(1);
                    return function () {
                      return crypto.getRandomValues(e), e[0];
                    };
                  }
                  return function () {
                    K("randomDevice");
                  };
                })();
                Ke("random", e),
                  Ke("urandom", e),
                  Ne("/dev/shm"),
                  Ne("/dev/shm/tmp");
              })(),
              (function () {
                Ne("/proc");
                var e = Ne("/proc/self");
                Ne("/proc/self/fd"),
                  Ue(
                    {
                      Cc: function () {
                        var t = ze(e, "fd", 16895, 73);
                        return (
                          (t.rc = {
                            Kc: function (e, t) {
                              var r = ge[+t];
                              if (!r) throw new ke(8);
                              return ((e = {
                                parent: null,
                                Cc: { ld: "fake" },
                                rc: {
                                  Nc: function () {
                                    return r.path;
                                  },
                                },
                              }).parent = e);
                            },
                          }),
                          t
                        );
                      },
                    },
                    "/proc/self/fd"
                  );
              })(),
              (r.requestFullscreen = function (e, t) {
                !(function (e, t) {
                  function n() {
                    wt = !1;
                    var e = a.parentNode;
                    (document.fullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement ||
                      document.webkitFullscreenElement ||
                      document.webkitCurrentFullScreenElement) === e
                      ? ((a.exitFullscreen = Tt),
                        kt && a.requestPointerLock(),
                        (wt = !0),
                        xt
                          ? ("undefined" != typeof SDL &&
                              (R[SDL.screen >> 2] =
                                8388608 | L[SDL.screen >> 2]),
                            Dt(r.canvas),
                            Bt())
                          : Dt(a))
                      : (e.parentNode.insertBefore(a, e),
                        e.parentNode.removeChild(e),
                        xt
                          ? ("undefined" != typeof SDL &&
                              (R[SDL.screen >> 2] =
                                -8388609 & L[SDL.screen >> 2]),
                            Dt(r.canvas),
                            Bt())
                          : Dt(a)),
                      r.onFullScreen && r.onFullScreen(wt),
                      r.onFullscreen && r.onFullscreen(wt);
                  }
                  "undefined" === typeof (kt = e) && (kt = !0),
                    "undefined" === typeof (xt = t) && (xt = !1);
                  var a = r.canvas;
                  At ||
                    ((At = !0),
                    document.addEventListener("fullscreenchange", n, !1),
                    document.addEventListener("mozfullscreenchange", n, !1),
                    document.addEventListener("webkitfullscreenchange", n, !1),
                    document.addEventListener("MSFullscreenChange", n, !1));
                  var i = document.createElement("div");
                  a.parentNode.insertBefore(i, a),
                    i.appendChild(a),
                    (i.requestFullscreen =
                      i.requestFullscreen ||
                      i.mozRequestFullScreen ||
                      i.msRequestFullscreen ||
                      (i.webkitRequestFullscreen
                        ? function () {
                            i.webkitRequestFullscreen(
                              Element.ALLOW_KEYBOARD_INPUT
                            );
                          }
                        : null) ||
                      (i.webkitRequestFullScreen
                        ? function () {
                            i.webkitRequestFullScreen(
                              Element.ALLOW_KEYBOARD_INPUT
                            );
                          }
                        : null)),
                    i.requestFullscreen();
                })(e, t);
              }),
              (r.requestAnimationFrame = function (e) {
                Lt(e);
              }),
              (r.setCanvasSize = function (e, t, n) {
                Dt(r.canvas, e, t), n || Bt();
              }),
              (r.pauseMainLoop = function () {
                (ut = null), ft++;
              }),
              (r.resumeMainLoop = function () {
                ft++;
                var e = dt,
                  t = pt,
                  n = lt;
                (lt = null),
                  (function (e) {
                    function t() {
                      if (n < ft) {
                        if (!m)
                          try {
                            kr(b);
                          } catch (e) {
                            if (!(e instanceof Er)) throw e;
                          }
                        return !1;
                      }
                      return !0;
                    }
                    g(
                      !lt,
                      "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
                    ),
                      (lt = e);
                    var n = ft;
                    (_t = !1),
                      (ct = function () {
                        if (!w)
                          if (0 < ht.length) {
                            var n = Date.now(),
                              a = ht.shift();
                            if ((a.wd(a.Pc), st)) {
                              var i = st,
                                o = 0 == i % 1 ? i - 1 : Math.floor(i);
                              st = a.Wd ? o : (8 * i + (o + 0.5)) / 9;
                            }
                            console.log(
                              'main loop blocker "' +
                                a.name +
                                '" took ' +
                                (Date.now() - n) +
                                " ms"
                            ),
                              r.setStatus &&
                                ((n = r.statusMessage || "Please wait..."),
                                (a = st),
                                (i = bt.Yd),
                                a
                                  ? a < i
                                    ? r.setStatus(
                                        n + " (" + (i - a) + "/" + i + ")"
                                      )
                                    : r.setStatus(n)
                                  : r.setStatus("")),
                              t() && setTimeout(ct, 0);
                          } else
                            t() &&
                              ((mt = (mt + 1) | 0),
                              1 == dt && 1 < pt && 0 != mt % pt
                                ? ut()
                                : (0 == dt && (ot = te()),
                                  w ||
                                    (r.preMainLoop && !1 === r.preMainLoop()) ||
                                    (it(e), r.postMainLoop && r.postMainLoop()),
                                  t() &&
                                    ("object" === typeof SDL &&
                                      SDL.audio &&
                                      SDL.audio.Gd &&
                                      SDL.audio.Gd(),
                                    ut())));
                      });
                  })(n),
                  (function (e, t) {
                    if (((dt = e), (pt = t), lt))
                      if ((_t || (_t = !0), 0 == e))
                        ut = function () {
                          var e = 0 | Math.max(0, ot + t - te());
                          setTimeout(ct, 1000);
                        };
                      else if (1 == e)
                        ut = function () {
                          Lt(ct);
                        };
                      else if (2 == e) {
                        if ("undefined" === typeof setImmediate) {
                          var n = [];
                          addEventListener(
                            "message",
                            function (e) {
                              ("setimmediate" !== e.data &&
                                "setimmediate" !== e.data.target) ||
                                (e.stopPropagation(), n.shift()());
                            },
                            !0
                          ),
                            (setImmediate = function (e) {
                              n.push(e),
                                void 0 === r.setImmediates &&
                                  (r.setImmediates = []),
                                r.setImmediates.push(e),
                                postMessage({ target: "setimmediate" });
                            });
                        }
                        ut = function () {
                          setImmediate(ct);
                        };
                      }
                  })(e, t),
                  ut();
              }),
              (r.getUserMedia = function () {
                window.getUserMedia ||
                  (window.getUserMedia =
                    navigator.getUserMedia || navigator.mozGetUserMedia),
                  window.getUserMedia(void 0);
              }),
              (r.createContext = function (e, t, r, n) {
                return Et(e, t, r, n);
              }),
              (function (e, t) {
                try {
                  var r = indexedDB.open("emscripten_filesystem", 1);
                } catch (n) {
                  return void t();
                }
                (r.onupgradeneeded = function (e) {
                  (e = e.target.result).objectStoreNames.contains("FILES") &&
                    e.deleteObjectStore("FILES"),
                    e.createObjectStore("FILES");
                }),
                  (r.onsuccess = function (e) {
                    !(function (e) {
                      (Ut = e), Z();
                    })(e.target.result);
                  }),
                  (r.onerror = function (e) {
                    t();
                  });
              })(0, function () {
                (Ut = !1), Z();
              }),
              ("undefined" !== typeof ENVIRONMENT_IS_FETCH_WORKER &&
                ENVIRONMENT_IS_FETCH_WORKER) ||
                j();
            var ur = {
                H: function (e, t) {
                  return ae(e, t);
                },
                a: function (e) {
                  return dr(e + 16) + 16;
                },
                b: function (e, t, r) {
                  throw (new ie(e).zd(t, r), e);
                },
                e: function (e, t, r) {
                  rt = r;
                  try {
                    var n = at(e);
                    switch (t) {
                      case 0:
                        var a = nt();
                        return 0 > a ? -28 : qe(n.path, n.flags, 0, a).Dc;
                      case 1:
                      case 2:
                      case 13:
                      case 14:
                        return 0;
                      case 3:
                        return n.flags;
                      case 4:
                        return (a = nt()), (n.flags |= a), 0;
                      case 12:
                        return (a = nt()), (x[(a + 0) >> 1] = 2), 0;
                      case 16:
                      case 8:
                      default:
                        return -28;
                      case 9:
                        return (R[mr() >> 2] = 28), -1;
                    }
                  } catch (i) {
                    return (
                      ("undefined" !== typeof et && i instanceof ke) || K(i),
                      -i.wc
                    );
                  }
                },
                D: function (e, t, r) {
                  try {
                    var n = at(e);
                    if (!n.Ec) {
                      var a = Te(n.path, { Qc: !0 }).node;
                      if (!a.rc.Sc) throw new ke(54);
                      var i = a.rc.Sc(a);
                      n.Ec = i;
                    }
                    e = 0;
                    for (
                      var o = je(n, 0, 1), c = Math.floor(o / 280);
                      c < n.Ec.length && e + 280 <= r;

                    ) {
                      var s = n.Ec[c];
                      if ("." === s[0])
                        var _ = 1,
                          u = 4;
                      else {
                        var f = Fe(n.node, s);
                        (_ = f.id),
                          (u =
                            8192 === (61440 & f.mode)
                              ? 2
                              : 16384 === (61440 & f.mode)
                              ? 4
                              : 40960 === (61440 & f.mode)
                              ? 10
                              : 8);
                      }
                      (ee = [
                        _ >>> 0,
                        ((Q = _),
                        1 <= +Math.abs(Q)
                          ? 0 < Q
                            ? (0 |
                                Math.min(
                                  +Math.floor(Q / 4294967296),
                                  4294967295
                                )) >>>
                              0
                            : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>>
                              0
                          : 0),
                      ]),
                        (R[(t + e) >> 2] = ee[0]),
                        (R[(t + e + 4) >> 2] = ee[1]),
                        (ee = [
                          (280 * (c + 1)) >>> 0,
                          ((Q = 280 * (c + 1)),
                          1 <= +Math.abs(Q)
                            ? 0 < Q
                              ? (0 |
                                  Math.min(
                                    +Math.floor(Q / 4294967296),
                                    4294967295
                                  )) >>>
                                0
                              : ~~+Math.ceil(
                                  (Q - +(~~Q >>> 0)) / 4294967296
                                ) >>> 0
                            : 0),
                        ]),
                        (R[(t + e + 8) >> 2] = ee[0]),
                        (R[(t + e + 12) >> 2] = ee[1]),
                        (x[(t + e + 16) >> 1] = 280),
                        (A[(t + e + 18) >> 0] = u),
                        P(s, k, t + e + 19, 256),
                        (e += 280),
                        (c += 1);
                    }
                    return je(n, 280 * c, 0), e;
                  } catch (l) {
                    return (
                      ("undefined" !== typeof et && l instanceof ke) || K(l),
                      -l.wc
                    );
                  }
                },
                o: function () {
                  return 42;
                },
                F: function (e, t, r) {
                  rt = r;
                  try {
                    var n = at(e);
                    switch (t) {
                      case 21509:
                      case 21505:
                      case 21510:
                      case 21511:
                      case 21512:
                      case 21506:
                      case 21507:
                      case 21508:
                      case 21523:
                      case 21524:
                        return n.vc ? 0 : -59;
                      case 21519:
                        if (!n.vc) return -59;
                        var a = nt();
                        return (R[a >> 2] = 0);
                      case 21520:
                        return n.vc ? -28 : -59;
                      case 21531:
                        if (((e = a = nt()), !n.tc.Bd)) throw new ke(59);
                        return n.tc.Bd(n, t, e);
                      default:
                        K("bad ioctl syscall " + t);
                    }
                  } catch (i) {
                    return (
                      ("undefined" !== typeof et && i instanceof ke) || K(i),
                      -i.wc
                    );
                  }
                },
                G: function (e, t) {
                  try {
                    return tt(Xe, (e = I(e)), t);
                  } catch (r) {
                    return (
                      ("undefined" !== typeof et && r instanceof ke) || K(r),
                      -r.wc
                    );
                  }
                },
                p: function (e, t, r) {
                  rt = r;
                  try {
                    return qe(I(e), t, r ? nt() : 0).Dc;
                  } catch (n) {
                    return (
                      ("undefined" !== typeof et && n instanceof ke) || K(n),
                      -n.wc
                    );
                  }
                },
                J: function (e, t) {
                  try {
                    return tt(Ye, (e = I(e)), t);
                  } catch (r) {
                    return (
                      ("undefined" !== typeof et && r instanceof ke) || K(r),
                      -r.wc
                    );
                  }
                },
                C: function (e, t) {
                  try {
                    return We((e = I(e)), (t = I(t))), 0;
                  } catch (r) {
                    return (
                      ("undefined" !== typeof et && r instanceof ke) || K(r),
                      -r.wc
                    );
                  }
                },
                K: function (e) {
                  try {
                    if (!e) return -21;
                    var t = {
                      __size__: 390,
                      domainname: 325,
                      machine: 260,
                      nodename: 65,
                      release: 130,
                      sysname: 0,
                      version: 195,
                    };
                    return (
                      D("Emscripten", e + t.sysname),
                      D("emscripten", e + t.nodename),
                      D("1.0", e + t.release),
                      D("#1", e + t.version),
                      D("wasm32", e + t.machine),
                      0
                    );
                  } catch (r) {
                    return (
                      ("undefined" !== typeof et && r instanceof ke) || K(r),
                      -r.wc
                    );
                  }
                },
                I: function (e) {
                  try {
                    var t = Te((e = I(e)), { parent: !0 }).node,
                      r = _e(e),
                      n = Fe(t, r);
                    e: {
                      try {
                        var a = Fe(t, r);
                      } catch (_) {
                        var i = _.wc;
                        break e;
                      }
                      var o = Ie(t, "wx");
                      i = o || (16384 === (61440 & a.mode) ? 31 : 0);
                    }
                    if (i) throw new ke(i);
                    if (!t.rc.Xc) throw new ke(63);
                    if (n.Lc) throw new ke(10);
                    try {
                      Ae.willDeletePath && Ae.willDeletePath(e);
                    } catch (_) {
                      p(
                        "FS.trackingDelegate['willDeletePath']('" +
                          e +
                          "') threw an exception: " +
                          _.message
                      );
                    }
                    t.rc.Xc(t, r);
                    var c = Le(n.parent.id, n.name);
                    if (ye[c] === n) ye[c] = n.Gc;
                    else
                      for (var s = ye[c]; s; ) {
                        if (s.Gc === n) {
                          s.Gc = n.Gc;
                          break;
                        }
                        s = s.Gc;
                      }
                    try {
                      Ae.onDeletePath && Ae.onDeletePath(e);
                    } catch (_) {
                      p(
                        "FS.trackingDelegate['onDeletePath']('" +
                          e +
                          "') threw an exception: " +
                          _.message
                      );
                    }
                    return 0;
                  } catch (_) {
                    return (
                      ("undefined" !== typeof et && _ instanceof ke) || K(_),
                      -_.wc
                    );
                  }
                },
                L: function (e) {
                  delete Vt[e - 1];
                },
                c: function () {
                  K();
                },
                h: ae,
                P: function (e, t) {
                  return e - t;
                },
                R: function () {
                  self.postMessage({ t: "gfx" });
                },
                t: function () {
                  var e = new URL(location.origin).hostname;
                  if (
                    (0 === e.length &&
                      (e = new URL(location.href.replace("blob:", ""))
                        .hostname),
                    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                      e
                    ))
                  )
                    0 === e.indexOf("10.") && (e = "10.*"),
                      0 === e.indexOf("192.168.") && (e = "192.168.*"),
                      0 === e.indexOf("172.") && (e = "172.*"),
                      0 === e.indexOf("127.") && (e = "127.*"),
                      0 === e.indexOf("*76.") && (e = "*76.*");
                  else {
                    var t = new RegExp(
                      "(" +
                        String.fromCharCode(92) +
                        ".vercel" +
                        String.fromCharCode(92) +
                        ".app/)$",
                      "i"
                    );
                    t.test(e) && (e = "*.vercel.app/"),
                      (t = new RegExp(
                        "(" +
                          String.fromCharCode(92) +
                          ".vercel" +
                          String.fromCharCode(92) +
                          ".app)$",
                        "i"
                      )).test(e) && (e = "*.vercel.app");
                  }
                  t = S(e) + 1;
                  var r = dr(t);
                  return P(e, k, r, t + 1), r;
                },
                S: function () {
                  self.postMessage({ t: "licerr" });
                },
                m: function (e, t, r) {
                  var n;
                  for (cr.length = 0, r >>= 2; (n = k[t++]); )
                    (n = 105 > n) && 1 & r && r++,
                      cr.push(n ? z[r++ >> 1] : R[r]),
                      ++r;
                  return re[e].apply(null, cr);
                },
                l: function (e, t, r) {
                  function n() {
                    U.get(e)(t);
                  }
                  0 <= r
                    ? Ft(n, r)
                    : (function (e) {
                        Lt(function () {
                          it(e);
                        });
                      })(n);
                },
                x: function () {
                  return 2147483648;
                },
                N: Ct,
                v: function (e, t, r) {
                  k.copyWithin(e, t, t + r);
                },
                w: function (e) {
                  var t = k.length;
                  if (2147483648 < e) return !1;
                  for (var r = 1; 4 >= r; r *= 2) {
                    var n = t * (1 + 0.2 / r);
                    (n = Math.min(n, e + 100663296)),
                      0 < (n = Math.max(e, n)) % 65536 &&
                        (n += 65536 - (n % 65536));
                    e: {
                      try {
                        h.grow(
                          (Math.min(2147483648, n) - E.byteLength + 65535) >>>
                            16
                        ),
                          C();
                        var a = 1;
                        break e;
                      } catch (i) {}
                      a = void 0;
                    }
                    if (a) return !0;
                  }
                  return !1;
                },
                M: function (e, t, r, n, a) {
                  function i(e, r) {
                    Wt(
                      e,
                      r.response,
                      function (e) {
                        it(function () {
                          l ? U.get(l)(e) : t && t(e);
                        });
                      },
                      function (e) {
                        it(function () {
                          l ? U.get(l)(e) : t && t(e);
                        });
                      }
                    );
                  }
                  function o(e) {
                    it(function () {
                      m ? U.get(m)(e) : a && a(e);
                    });
                  }
                  function c(e) {
                    it(function () {
                      d ? U.get(d)(e) : r && r(e);
                    });
                  }
                  function s(e) {
                    it(function () {
                      p ? U.get(p)(e) : n && n(e);
                    });
                  }
                  function _(e) {
                    it(function () {
                      l ? U.get(l)(e) : t && t(e);
                    });
                  }
                  var u = e + 112,
                    f = I(u),
                    l = L[(u + 36) >> 2],
                    d = L[(u + 40) >> 2],
                    p = L[(u + 44) >> 2],
                    m = L[(u + 48) >> 2],
                    h = L[(u + 52) >> 2],
                    b = !!(4 & h),
                    w = !!(32 & h);
                  if (((h = !!(16 & h)), "EM_IDB_STORE" === f))
                    (f = L[(u + 84) >> 2]),
                      Wt(e, k.slice(f, f + L[(u + 88) >> 2]), _, c);
                  else if ("EM_IDB_DELETE" === f)
                    !(function (e, t, r) {
                      var n = Ut;
                      if (n) {
                        var a = L[(e + 112 + 64) >> 2];
                        a || (a = L[(e + 8) >> 2]), (a = I(a));
                        try {
                          var o = n
                            .transaction(["FILES"], "readwrite")
                            .objectStore("FILES")
                            .delete(a);
                          (o.onsuccess = function (r) {
                            (r = r.target.result),
                              (L[(e + 12) >> 2] = 0),
                              Nt(e + 16, 0),
                              Nt(e + 24, 0),
                              Nt(e + 32, 0),
                              (T[(e + 40) >> 1] = 4),
                              (T[(e + 42) >> 1] = 200),
                              P("OK", k, e + 44, 64),
                              t(e, 0, r);
                          }),
                            (o.onerror = function (t) {
                              (T[(e + 40) >> 1] = 4),
                                (T[(e + 42) >> 1] = 404),
                                P("Not Found", k, e + 44, 64),
                                r(e, 0, t);
                            });
                        } catch (i) {
                          r(e, 0, i);
                        }
                      } else r(e, 0, "IndexedDB not available!");
                    })(e, _, c);
                  else if (h) {
                    if (w) return 0;
                    Gt(e, b ? i : _, c, s, o);
                  } else
                    !(function (e, t, r) {
                      var n = Ut;
                      if (n) {
                        var a = L[(e + 112 + 64) >> 2];
                        a || (a = L[(e + 8) >> 2]), (a = I(a));
                        try {
                          var o = n
                            .transaction(["FILES"], "readonly")
                            .objectStore("FILES")
                            .get(a);
                          (o.onsuccess = function (n) {
                            if (n.target.result) {
                              var a =
                                  (n = n.target.result).byteLength || n.length,
                                i = dr(a);
                              k.set(new Uint8Array(n), i),
                                (L[(e + 12) >> 2] = i),
                                Nt(e + 16, a),
                                Nt(e + 24, 0),
                                Nt(e + 32, a),
                                (T[(e + 40) >> 1] = 4),
                                (T[(e + 42) >> 1] = 200),
                                P("OK", k, e + 44, 64),
                                t(e, 0, n);
                            } else
                              (T[(e + 40) >> 1] = 4),
                                (T[(e + 42) >> 1] = 404),
                                P("Not Found", k, e + 44, 64),
                                r(e, 0, "no data");
                          }),
                            (o.onerror = function (t) {
                              (T[(e + 40) >> 1] = 4),
                                (T[(e + 42) >> 1] = 404),
                                P("Not Found", k, e + 44, 64),
                                r(e, 0, t);
                            });
                        } catch (i) {
                          r(e, 0, i);
                        }
                      } else r(e, 0, "IndexedDB not available!");
                    })(
                      e,
                      _,
                      w
                        ? c
                        : b
                        ? function (e) {
                            Gt(e, i, c, s, o);
                          }
                        : function (e) {
                            Gt(e, _, c, s, o);
                          }
                    );
                  return e;
                },
                A: function (e, t) {
                  try {
                    var r = 0;
                    return (
                      Xt().forEach(function (n, a) {
                        var i = t + r;
                        (R[(e + 4 * a) >> 2] = i), D(n, i), (r += n.length + 1);
                      }),
                      0
                    );
                  } catch (n) {
                    return (
                      ("undefined" !== typeof et && n instanceof ke) || K(n),
                      n.wc
                    );
                  }
                },
                B: function (e, t) {
                  try {
                    var r = Xt();
                    R[e >> 2] = r.length;
                    var n = 0;
                    return (
                      r.forEach(function (e) {
                        n += e.length + 1;
                      }),
                      (R[t >> 2] = n),
                      0
                    );
                  } catch (a) {
                    return (
                      ("undefined" !== typeof et && a instanceof ke) || K(a),
                      a.wc
                    );
                  }
                },
                O: function (e) {
                  kr(e);
                },
                g: function (e) {
                  try {
                    var t = at(e);
                    if (null === t.Dc) throw new ke(8);
                    t.Ec && (t.Ec = null);
                    try {
                      t.tc.close && t.tc.close(t);
                    } catch (r) {
                      throw r;
                    } finally {
                      ge[t.Dc] = null;
                    }
                    return (t.Dc = null), 0;
                  } catch (r) {
                    return (
                      ("undefined" !== typeof et && r instanceof ke) || K(r),
                      r.wc
                    );
                  }
                },
                E: function (e, t, r, n) {
                  try {
                    e: {
                      for (var a = at(e), i = (e = 0); i < r; i++) {
                        var o = R[(t + (8 * i + 4)) >> 2],
                          c = a,
                          s = R[(t + 8 * i) >> 2],
                          _ = o,
                          u = void 0,
                          f = A;
                        if (0 > _ || 0 > u) throw new ke(28);
                        if (null === c.Dc) throw new ke(8);
                        if (1 === (2097155 & c.flags)) throw new ke(8);
                        if (16384 === (61440 & c.node.mode)) throw new ke(31);
                        if (!c.tc.read) throw new ke(28);
                        var l = "undefined" !== typeof u;
                        if (l) {
                          if (!c.seekable) throw new ke(70);
                        } else u = c.position;
                        var d = c.tc.read(c, f, s, _, u);
                        l || (c.position += d);
                        var p = d;
                        if (0 > p) {
                          var m = -1;
                          break e;
                        }
                        if (((e += p), p < o)) break;
                      }
                      m = e;
                    }
                    return (R[n >> 2] = m), 0;
                  } catch (h) {
                    return (
                      ("undefined" !== typeof et && h instanceof ke) || K(h),
                      h.wc
                    );
                  }
                },
                u: function (e, t, r, n, a) {
                  try {
                    var i = at(e);
                    return -9007199254740992 >=
                      (e = 4294967296 * r + (t >>> 0)) || 9007199254740992 <= e
                      ? -61
                      : (je(i, e, n),
                        (ee = [
                          i.position >>> 0,
                          ((Q = i.position),
                          1 <= +Math.abs(Q)
                            ? 0 < Q
                              ? (0 |
                                  Math.min(
                                    +Math.floor(Q / 4294967296),
                                    4294967295
                                  )) >>>
                                0
                              : ~~+Math.ceil(
                                  (Q - +(~~Q >>> 0)) / 4294967296
                                ) >>> 0
                            : 0),
                        ]),
                        (R[a >> 2] = ee[0]),
                        (R[(a + 4) >> 2] = ee[1]),
                        i.Ec && 0 === e && 0 === n && (i.Ec = null),
                        0);
                  } catch (o) {
                    return (
                      ("undefined" !== typeof et && o instanceof ke) || K(o),
                      o.wc
                    );
                  }
                },
                k: function (e, t, r, n) {
                  try {
                    e: {
                      for (var a = at(e), i = (e = 0); i < r; i++) {
                        var o = a,
                          c = R[(t + 8 * i) >> 2],
                          s = R[(t + (8 * i + 4)) >> 2],
                          _ = void 0,
                          u = A;
                        if (0 > s || 0 > _) throw new ke(28);
                        if (null === o.Dc) throw new ke(8);
                        if (0 === (2097155 & o.flags)) throw new ke(8);
                        if (16384 === (61440 & o.node.mode)) throw new ke(31);
                        if (!o.tc.write) throw new ke(28);
                        o.seekable && 1024 & o.flags && je(o, 0, 2);
                        var f = "undefined" !== typeof _;
                        if (f) {
                          if (!o.seekable) throw new ke(70);
                        } else _ = o.position;
                        var l = o.tc.write(o, u, c, s, _, void 0);
                        f || (o.position += l);
                        try {
                          o.path &&
                            Ae.onWriteToFile &&
                            Ae.onWriteToFile(o.path);
                        } catch (h) {
                          p(
                            "FS.trackingDelegate['onWriteToFile']('" +
                              o.path +
                              "') threw an exception: " +
                              h.message
                          );
                        }
                        var d = l;
                        if (0 > d) {
                          var m = -1;
                          break e;
                        }
                        e += d;
                      }
                      m = e;
                    }
                    return (R[n >> 2] = m), 0;
                  } catch (h) {
                    return (
                      ("undefined" !== typeof et && h instanceof ke) || K(h),
                      h.wc
                    );
                  }
                },
                f: function (e) {
                  var t = Date.now();
                  return (
                    (R[e >> 2] = (t / 1e3) | 0),
                    (R[(e + 4) >> 2] = ((t % 1e3) * 1e3) | 0),
                    0
                  );
                },
                n: function (e, t) {
                  or.bindTexture(e, jt[t]);
                },
                q: function (e, t) {
                  for (var r = 0; r < e; r++) {
                    var n = or.createTexture(),
                      a = n && Kt(jt);
                    n ? ((n.name = a), (jt[a] = n)) : Jt || (Jt = 1282),
                      (R[(t + 4 * r) >> 2] = a);
                  }
                },
                i: function (e, t, r, n, a, i, o, c, s) {
                  var _ = or,
                    u = _.texImage2D;
                  if (s) {
                    var f = c - 5120;
                    f =
                      1 == f
                        ? k
                        : 4 == f
                        ? R
                        : 6 == f
                        ? F
                        : 5 == f || 28922 == f
                        ? L
                        : T;
                    var l = 31 - Math.clz32(f.BYTES_PER_ELEMENT);
                    s = f.subarray(
                      s >> l,
                      (s +
                        a *
                          ((n *
                            ({ 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4 }[
                              o - 6402
                            ] || 1) *
                            (1 << l) +
                            4 -
                            1) &
                            -4)) >>
                        l
                    );
                  } else s = null;
                  u.call(_, e, t, r, n, a, i, o, c, s);
                },
                j: function (e, t, r) {
                  or.texParameteri(e, t, r);
                },
                s: function e(t, r) {
                  return (
                    (t = new Date(1e3 * R[t >> 2])),
                    (R[r >> 2] = t.getUTCSeconds()),
                    (R[(r + 4) >> 2] = t.getUTCMinutes()),
                    (R[(r + 8) >> 2] = t.getUTCHours()),
                    (R[(r + 12) >> 2] = t.getUTCDate()),
                    (R[(r + 16) >> 2] = t.getUTCMonth()),
                    (R[(r + 20) >> 2] = t.getUTCFullYear() - 1900),
                    (R[(r + 24) >> 2] = t.getUTCDay()),
                    (R[(r + 36) >> 2] = 0),
                    (R[(r + 32) >> 2] = 0),
                    (R[(r + 28) >> 2] =
                      ((t.getTime() -
                        Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) /
                        864e5) |
                      0),
                    e.cd || (e.cd = B("GMT")),
                    (R[(r + 40) >> 2] = e.cd),
                    r
                  );
                },
                r: function (e, t) {
                  !(function () {
                    function e(e) {
                      return (e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/))
                        ? e[1]
                        : "GMT";
                    }
                    if (!Qt) {
                      Qt = !0;
                      var t = new Date().getFullYear(),
                        r = new Date(t, 0, 1),
                        n = new Date(t, 6, 1);
                      t = r.getTimezoneOffset();
                      var a = n.getTimezoneOffset(),
                        i = Math.max(t, a);
                      (R[wr() >> 2] = 60 * i),
                        (R[br() >> 2] = Number(t != a)),
                        (r = e(r)),
                        (n = e(n)),
                        (r = B(r)),
                        (n = B(n)),
                        a < t
                          ? ((R[hr() >> 2] = r), (R[(hr() + 4) >> 2] = n))
                          : ((R[hr() >> 2] = n), (R[(hr() + 4) >> 2] = r));
                    }
                  })(),
                    (e = new Date(1e3 * R[e >> 2])),
                    (R[t >> 2] = e.getSeconds()),
                    (R[(t + 4) >> 2] = e.getMinutes()),
                    (R[(t + 8) >> 2] = e.getHours()),
                    (R[(t + 12) >> 2] = e.getDate()),
                    (R[(t + 16) >> 2] = e.getMonth()),
                    (R[(t + 20) >> 2] = e.getFullYear() - 1900),
                    (R[(t + 24) >> 2] = e.getDay());
                  var r = new Date(e.getFullYear(), 0, 1);
                  (R[(t + 28) >> 2] =
                    ((e.getTime() - r.getTime()) / 864e5) | 0),
                    (R[(t + 36) >> 2] = -60 * e.getTimezoneOffset());
                  var n = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
                  return (
                    (e =
                      0 |
                      (n != (r = r.getTimezoneOffset()) &&
                        e.getTimezoneOffset() == Math.min(r, n))),
                    (R[(t + 32) >> 2] = e),
                    (e = R[(hr() + (e ? 4 : 0)) >> 2]),
                    (R[(t + 40) >> 2] = e),
                    t
                  );
                },
                Q: function () {
                  return 6;
                },
                y: function () {
                  return 28;
                },
                z: function (e, t, r, n) {
                  return (function (e, t, r, n) {
                    function a(e, t, r) {
                      for (
                        e = "number" === typeof e ? e.toString() : e || "";
                        e.length < t;

                      )
                        e = r[0] + e;
                      return e;
                    }
                    function i(e, t) {
                      return a(e, t, "0");
                    }
                    function o(e, t) {
                      function r(e) {
                        return 0 > e ? -1 : 0 < e ? 1 : 0;
                      }
                      var n;
                      return (
                        0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                          0 === (n = r(e.getMonth() - t.getMonth())) &&
                          (n = r(e.getDate() - t.getDate())),
                        n
                      );
                    }
                    function c(e) {
                      switch (e.getDay()) {
                        case 0:
                          return new Date(e.getFullYear() - 1, 11, 29);
                        case 1:
                          return e;
                        case 2:
                          return new Date(e.getFullYear(), 0, 3);
                        case 3:
                          return new Date(e.getFullYear(), 0, 2);
                        case 4:
                          return new Date(e.getFullYear(), 0, 1);
                        case 5:
                          return new Date(e.getFullYear() - 1, 11, 31);
                        case 6:
                          return new Date(e.getFullYear() - 1, 11, 30);
                      }
                    }
                    function s(e) {
                      e = ir(new Date(e.yc + 1900, 0, 1), e.Wc);
                      var t = new Date(e.getFullYear() + 1, 0, 4),
                        r = c(new Date(e.getFullYear(), 0, 4));
                      return (
                        (t = c(t)),
                        0 >= o(r, e)
                          ? 0 >= o(t, e)
                            ? e.getFullYear() + 1
                            : e.getFullYear()
                          : e.getFullYear() - 1
                      );
                    }
                    var _ = R[(n + 40) >> 2];
                    for (var u in ((n = {
                      Qd: R[n >> 2],
                      Pd: R[(n + 4) >> 2],
                      Uc: R[(n + 8) >> 2],
                      Oc: R[(n + 12) >> 2],
                      Jc: R[(n + 16) >> 2],
                      yc: R[(n + 20) >> 2],
                      Vc: R[(n + 24) >> 2],
                      Wc: R[(n + 28) >> 2],
                      ee: R[(n + 32) >> 2],
                      Od: R[(n + 36) >> 2],
                      Rd: _ ? I(_) : "",
                    }),
                    (r = I(r)),
                    (_ = {
                      "%c": "%a %b %d %H:%M:%S %Y",
                      "%D": "%m/%d/%y",
                      "%F": "%Y-%m-%d",
                      "%h": "%b",
                      "%r": "%I:%M:%S %p",
                      "%R": "%H:%M",
                      "%T": "%H:%M:%S",
                      "%x": "%m/%d/%y",
                      "%X": "%H:%M:%S",
                      "%Ec": "%c",
                      "%EC": "%C",
                      "%Ex": "%m/%d/%y",
                      "%EX": "%H:%M:%S",
                      "%Ey": "%y",
                      "%EY": "%Y",
                      "%Od": "%d",
                      "%Oe": "%e",
                      "%OH": "%H",
                      "%OI": "%I",
                      "%Om": "%m",
                      "%OM": "%M",
                      "%OS": "%S",
                      "%Ou": "%u",
                      "%OU": "%U",
                      "%OV": "%V",
                      "%Ow": "%w",
                      "%OW": "%W",
                      "%Oy": "%y",
                    })))
                      r = r.replace(new RegExp(u, "g"), _[u]);
                    var f =
                        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                          " "
                        ),
                      l =
                        "January February March April May June July August September October November December".split(
                          " "
                        );
                    for (u in (_ = {
                      "%a": function (e) {
                        return f[e.Vc].substring(0, 3);
                      },
                      "%A": function (e) {
                        return f[e.Vc];
                      },
                      "%b": function (e) {
                        return l[e.Jc].substring(0, 3);
                      },
                      "%B": function (e) {
                        return l[e.Jc];
                      },
                      "%C": function (e) {
                        return i(((e.yc + 1900) / 100) | 0, 2);
                      },
                      "%d": function (e) {
                        return i(e.Oc, 2);
                      },
                      "%e": function (e) {
                        return a(e.Oc, 2, " ");
                      },
                      "%g": function (e) {
                        return s(e).toString().substring(2);
                      },
                      "%G": function (e) {
                        return s(e);
                      },
                      "%H": function (e) {
                        return i(e.Uc, 2);
                      },
                      "%I": function (e) {
                        return (
                          0 == (e = e.Uc) ? (e = 12) : 12 < e && (e -= 12),
                          i(e, 2)
                        );
                      },
                      "%j": function (e) {
                        return i(
                          e.Oc + rr(tr(e.yc + 1900) ? nr : ar, e.Jc - 1),
                          3
                        );
                      },
                      "%m": function (e) {
                        return i(e.Jc + 1, 2);
                      },
                      "%M": function (e) {
                        return i(e.Pd, 2);
                      },
                      "%n": function () {
                        return "\n";
                      },
                      "%p": function (e) {
                        return 0 <= e.Uc && 12 > e.Uc ? "AM" : "PM";
                      },
                      "%S": function (e) {
                        return i(e.Qd, 2);
                      },
                      "%t": function () {
                        return "\t";
                      },
                      "%u": function (e) {
                        return e.Vc || 7;
                      },
                      "%U": function (e) {
                        var t = new Date(e.yc + 1900, 0, 1),
                          r = 0 === t.getDay() ? t : ir(t, 7 - t.getDay());
                        return 0 > o(r, (e = new Date(e.yc + 1900, e.Jc, e.Oc)))
                          ? i(
                              Math.ceil(
                                (31 -
                                  r.getDate() +
                                  (rr(
                                    tr(e.getFullYear()) ? nr : ar,
                                    e.getMonth() - 1
                                  ) -
                                    31) +
                                  e.getDate()) /
                                  7
                              ),
                              2
                            )
                          : 0 === o(r, t)
                          ? "01"
                          : "00";
                      },
                      "%V": function (e) {
                        var t = new Date(e.yc + 1901, 0, 4),
                          r = c(new Date(e.yc + 1900, 0, 4));
                        t = c(t);
                        var n = ir(new Date(e.yc + 1900, 0, 1), e.Wc);
                        return 0 > o(n, r)
                          ? "53"
                          : 0 >= o(t, n)
                          ? "01"
                          : i(
                              Math.ceil(
                                (r.getFullYear() < e.yc + 1900
                                  ? e.Wc + 32 - r.getDate()
                                  : e.Wc + 1 - r.getDate()) / 7
                              ),
                              2
                            );
                      },
                      "%w": function (e) {
                        return e.Vc;
                      },
                      "%W": function (e) {
                        var t = new Date(e.yc, 0, 1),
                          r =
                            1 === t.getDay()
                              ? t
                              : ir(
                                  t,
                                  0 === t.getDay() ? 1 : 7 - t.getDay() + 1
                                );
                        return 0 > o(r, (e = new Date(e.yc + 1900, e.Jc, e.Oc)))
                          ? i(
                              Math.ceil(
                                (31 -
                                  r.getDate() +
                                  (rr(
                                    tr(e.getFullYear()) ? nr : ar,
                                    e.getMonth() - 1
                                  ) -
                                    31) +
                                  e.getDate()) /
                                  7
                              ),
                              2
                            )
                          : 0 === o(r, t)
                          ? "01"
                          : "00";
                      },
                      "%y": function (e) {
                        return (e.yc + 1900).toString().substring(2);
                      },
                      "%Y": function (e) {
                        return e.yc + 1900;
                      },
                      "%z": function (e) {
                        var t = 0 <= (e = e.Od);
                        return (
                          (e = Math.abs(e) / 60),
                          (t ? "+" : "-") +
                            String("0000" + ((e / 60) * 100 + (e % 60))).slice(
                              -4
                            )
                        );
                      },
                      "%Z": function (e) {
                        return e.Rd;
                      },
                      "%%": function () {
                        return "%";
                      },
                    }))
                      0 <= r.indexOf(u) &&
                        (r = r.replace(new RegExp(u, "g"), _[u](n)));
                    return (u = _r(r, !1)).length > t
                      ? 0
                      : (A.set(u, e), u.length - 1);
                  })(e, t, r, n);
                },
                d: function (e) {
                  var t = (Date.now() / 1e3) | 0;
                  return e && (R[e >> 2] = t), t;
                },
              },
              fr = (function () {
                function e(e) {
                  (r.asm = e.exports),
                    (h = r.asm.T),
                    C(),
                    (U = r.asm.Y),
                    N.unshift(r.asm.U),
                    Z();
                }
                var t = { a: ur };
                if ((j(), r.instantiateWasm))
                  try {
                    return r.instantiateWasm(t, e);
                  } catch (n) {
                    return (
                      p(
                        "Module.instantiateWasm callback failed with error: " +
                          n
                      ),
                      !1
                    );
                  }
                return (
                  (t = (function (e) {
                    var t = J;
                    try {
                      e: {
                        try {
                          if (t == J && l) {
                            var r = new Uint8Array(l);
                            break e;
                          }
                          if (_) {
                            r = _(t);
                            break e;
                          }
                          throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
                        } catch (i) {
                          K(i);
                        }
                        r = void 0;
                      }
                      var n = new WebAssembly.Module(r),
                        a = new WebAssembly.Instance(n, e);
                    } catch (i) {
                      throw (
                        ((e = i.toString()),
                        p("failed to compile wasm module: " + e),
                        (0 <= e.indexOf("imported Memory") ||
                          0 <= e.indexOf("memory import")) &&
                          p(
                            "Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."
                          ),
                        i)
                      );
                    }
                    return [a, n];
                  })(t)),
                  e(t[0]),
                  r.asm
                );
              })();
            (r.___wasm_call_ctors = fr.U),
              (r._zappar_has_initialized = fr.V),
              (r._zappar_invert = fr.W),
              (r._zappar_loaded = fr.X),
              (r._zappar_pipeline_create = fr.Z),
              (r._zappar_pipeline_destroy = fr._),
              (r._zappar_pipeline_camera_frame_submit = fr.$),
              (r._zappar_pipeline_camera_frame_submit_raw_pointer = fr.aa),
              (r._zappar_pipeline_frame_update = fr.ba),
              (r._zappar_pipeline_camera_frame_user_data = fr.ca),
              (r._zappar_pipeline_camera_model = fr.da),
              (r._zappar_pipeline_frame_number = fr.ea),
              (r._zappar_pipeline_motion_accelerometer_submit = fr.fa),
              (r._zappar_pipeline_motion_rotation_rate_submit = fr.ga),
              (r._zappar_pipeline_motion_attitude_submit = fr.ha),
              (r._zappar_pipeline_motion_attitude_matrix_submit = fr.ia),
              (r._zappar_pipeline_camera_frame_user_facing = fr.ja),
              (r._zappar_pipeline_camera_frame_texture_matrix = fr.ka),
              (r._zappar_pipeline_camera_pose_with_attitude = fr.la),
              (r._zappar_pipeline_camera_pose_with_origin = fr.ma),
              (r._zappar_pipeline_camera_frame_camera_attitude = fr.na),
              (r._zappar_pipeline_camera_frame_device_attitude = fr.oa),
              (r._zappar_pipeline_camera_frame_texture_gl = fr.pa),
              (r._zappar_pipeline_camera_frame_upload_gl = fr.qa),
              (r._zappar_pipeline_sequence_record_start = fr.ra),
              (r._zappar_pipeline_sequence_record_stop = fr.sa),
              (r._zappar_pipeline_sequence_record_clear = fr.ta),
              (r._zappar_pipeline_sequence_record_device_attitude_matrices_set =
                fr.ua),
              (r._zappar_pipeline_sequence_record_data_size = fr.va),
              (r._zappar_pipeline_sequence_record_data = fr.wa),
              (r._zappar_pipeline_process_gl = fr.xa),
              (r._zappar_pipeline_camera_pose_default = fr.ya),
              (r._zappar_instant_world_tracker_create = fr.za),
              (r._zappar_instant_world_tracker_destroy = fr.Aa),
              (r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw =
                fr.Ba),
              (r._zappar_instant_world_tracker_anchor_pose_raw = fr.Ca),
              (r._zappar_instant_world_tracker_enabled_set = fr.Da),
              (r._zappar_instant_world_tracker_enabled = fr.Ea),
              (r._zappar_image_tracker_create = fr.Fa),
              (r._zappar_image_tracker_destroy = fr.Ga),
              (r._zappar_image_tracker_target_load_from_memory = fr.Ha),
              (r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc =
                fr.Ia);
            var lr = (r._free = fr.Ja);
            (r._zappar_image_tracker_anchor_count = fr.Ka),
              (r._zappar_image_tracker_anchor_id = fr.La),
              (r._zappar_image_tracker_anchor_pose_raw = fr.Ma),
              (r._zappar_image_tracker_enabled_set = fr.Na),
              (r._zappar_image_tracker_enabled = fr.Oa),
              (r._zappar_image_tracker_target_loaded_version = fr.Pa),
              (r.__Z33zappar_image_tracker_target_countP23zappar_image_tracker_ti =
                fr.Qa),
              (r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii =
                fr.Ra),
              (r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii =
                fr.Sa),
              (r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii =
                fr.Ta),
              (r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii =
                fr.Ua),
              (r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii =
                fr.Va),
              (r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii =
                fr.Wa),
              (r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii =
                fr.Xa),
              (r.__Z38zappar_image_tracker_target_radius_topP23zappar_image_tracker_tii =
                fr.Ya),
              (r.__Z41zappar_image_tracker_target_radius_bottomP23zappar_image_tracker_tii =
                fr.Za),
              (r.__Z39zappar_image_tracker_target_side_lengthP23zappar_image_tracker_tii =
                fr._a),
              (r.__Z49zappar_image_tracker_target_physical_scale_factorP23zappar_image_tracker_tii =
                fr.$a),
              (r.__Z49zappar_image_tracker_target_preview_mesh_verticesP23zappar_image_tracker_tii =
                fr.ab),
              (r.__Z48zappar_image_tracker_target_preview_mesh_normalsP23zappar_image_tracker_tii =
                fr.bb),
              (r.__Z44zappar_image_tracker_target_preview_mesh_uvsP23zappar_image_tracker_tii =
                fr.cb),
              (r.__Z48zappar_image_tracker_target_preview_mesh_indicesP23zappar_image_tracker_tii =
                fr.db),
              (r.__Z54zappar_image_tracker_target_preview_mesh_vertices_sizeP23zappar_image_tracker_tii =
                fr.eb),
              (r.__Z53zappar_image_tracker_target_preview_mesh_normals_sizeP23zappar_image_tracker_tii =
                fr.fb),
              (r.__Z49zappar_image_tracker_target_preview_mesh_uvs_sizeP23zappar_image_tracker_tii =
                fr.gb),
              (r.__Z53zappar_image_tracker_target_preview_mesh_indices_sizeP23zappar_image_tracker_tii =
                fr.hb),
              (r.__Z32zappar_image_tracker_target_typeP23zappar_image_tracker_tii =
                fr.ib),
              (r._zappar_face_tracker_create = fr.jb),
              (r._zappar_face_tracker_destroy = fr.kb),
              (r._zappar_face_tracker_model_load_from_memory = fr.lb),
              (r._zappar_face_tracker_anchor_count = fr.mb),
              (r._zappar_face_tracker_anchor_id = fr.nb),
              (r._zappar_face_tracker_anchor_pose_raw = fr.ob),
              (r._zappar_face_tracker_anchor_identity_coefficients = fr.pb),
              (r._zappar_face_tracker_anchor_expression_coefficients = fr.qb),
              (r._zappar_face_tracker_enabled_set = fr.rb),
              (r._zappar_face_tracker_enabled = fr.sb),
              (r._zappar_face_tracker_max_faces_set = fr.tb),
              (r._zappar_face_tracker_max_faces = fr.ub),
              (r._zappar_face_tracker_model_loaded_version = fr.vb),
              (r._zappar_face_landmark_create = fr.wb),
              (r._zappar_face_landmark_destroy = fr.xb),
              (r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i =
                fr.yb),
              (r._zappar_face_landmark_anchor_pose = fr.zb),
              (r._zappar_barcode_finder_create = fr.Ab),
              (r._zappar_barcode_finder_destroy = fr.Bb),
              (r._zappar_barcode_finder_found_number = fr.Cb),
              (r._zappar_barcode_finder_found_text = fr.Db),
              (r._zappar_barcode_finder_enabled_set = fr.Eb),
              (r._zappar_barcode_finder_enabled = fr.Fb),
              (r._zappar_barcode_finder_found_format = fr.Gb),
              (r._zappar_barcode_finder_formats = fr.Hb),
              (r._zappar_barcode_finder_formats_set = fr.Ib);
            var dr = (r._malloc = fr.Jb);
            (r._zappar_face_mesh_create = fr.Kb),
              (r._zappar_face_mesh_destroy = fr.Lb),
              (r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii =
                fr.Mb),
              (r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti =
                fr.Nb),
              (r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti = fr.Ob),
              (r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti =
                fr.Pb),
              (r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti =
                fr.Qb),
              (r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti = fr.Rb),
              (r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti = fr.Sb),
              (r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti = fr.Tb),
              (r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i =
                fr.Ub),
              (r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti =
                fr.Vb),
              (r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti = fr.Wb),
              (r._zappar_camera_source_create = fr.Xb),
              (r._zappar_camera_source_destroy = fr.Yb),
              (r._zappar_camera_source_start = fr.Zb),
              (r._zappar_camera_source_pause = fr._b),
              (r._zappar_camera_default_device_id = fr.$b),
              (r._zappar_sequence_source_create = fr.ac),
              (r.__Z28zappar_sequence_source_startP25zappar_sequence_source_ti =
                fr.bc),
              (r.__Z39zappar_sequence_source_load_from_memoryP25zappar_sequence_source_tiPKci =
                fr.cc),
              (r.__Z28zappar_sequence_source_pauseP25zappar_sequence_source_ti =
                fr.dc),
              (r._zappar_sequence_source_destroy = fr.ec),
              (r._zappar_sequence_source_max_playback_fps_set = fr.fc),
              (r._zappar_log_level_set = fr.gc),
              (r._zappar_log_level = fr.hc),
              (r.__Z23zappar_log_redirect_setPFv18zappar_log_level_tPKcE =
                fr.ic),
              (r._zappar_analytics_project_id_set = fr.jc);
            var pr,
              mr = (r.___errno_location = fr.kc),
              hr = (r.__get_tzname = fr.lc),
              br = (r.__get_daylight = fr.mc),
              wr = (r.__get_timezone = fr.nc),
              gr = (r.stackSave = fr.oc),
              vr = (r.stackRestore = fr.pc),
              yr = (r.stackAlloc = fr.qc);
            function Er(e) {
              (this.name = "ExitStatus"),
                (this.message = "Program terminated with exit(" + e + ")"),
                (this.status = e);
            }
            function Ar() {
              function e() {
                if (!pr && ((pr = !0), (r.calledRun = !0), !w)) {
                  if (
                    (r.noFSInit ||
                      Be ||
                      ((Be = !0),
                      Ze(),
                      (r.stdin = r.stdin),
                      (r.stdout = r.stdout),
                      (r.stderr = r.stderr),
                      r.stdin
                        ? Ke("stdin", r.stdin)
                        : We("/dev/tty", "/dev/stdin"),
                      r.stdout
                        ? Ke("stdout", null, r.stdout)
                        : We("/dev/tty", "/dev/stdout"),
                      r.stderr
                        ? Ke("stderr", null, r.stderr)
                        : We("/dev/tty1", "/dev/stderr"),
                      qe("/dev/stdin", 0),
                      qe("/dev/stdout", 1),
                      qe("/dev/stderr", 1)),
                    ne(N),
                    (Ee = !1),
                    ne(G),
                    n(r),
                    r.onRuntimeInitialized && r.onRuntimeInitialized(),
                    r.postRun)
                  )
                    for (
                      "function" == typeof r.postRun &&
                      (r.postRun = [r.postRun]);
                      r.postRun.length;

                    ) {
                      var e = r.postRun.shift();
                      W.unshift(e);
                    }
                  ne(W);
                }
              }
              if (!(0 < Y)) {
                if (r.preRun)
                  for (
                    "function" == typeof r.preRun && (r.preRun = [r.preRun]);
                    r.preRun.length;

                  )
                    H();
                ne(V),
                  0 < Y ||
                    (r.setStatus
                      ? (r.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            r.setStatus("");
                          }, 1),
                            e();
                        }, 1))
                      : e());
              }
            }
            function kr(e) {
              (b = e),
                m || (r.onExit && r.onExit(e), (w = !0)),
                s(e, new Er(e));
            }
            if (
              ((r.cwrap = function (e, t, r, n) {
                var a = (r = r || []).every(function (e) {
                  return "number" === e;
                });
                return "string" !== t && a && !n
                  ? v(e)
                  : function () {
                      return y(e, t, r, arguments);
                    };
              }),
              (r.setValue = function (e, t, r) {
                switch (
                  ("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"),
                  r)
                ) {
                  case "i1":
                  case "i8":
                    A[e >> 0] = t;
                    break;
                  case "i16":
                    x[e >> 1] = t;
                    break;
                  case "i32":
                    R[e >> 2] = t;
                    break;
                  case "i64":
                    (ee = [
                      t >>> 0,
                      ((Q = t),
                      1 <= +Math.abs(Q)
                        ? 0 < Q
                          ? (0 |
                              Math.min(
                                +Math.floor(Q / 4294967296),
                                4294967295
                              )) >>>
                            0
                          : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0
                        : 0),
                    ]),
                      (R[e >> 2] = ee[0]),
                      (R[(e + 4) >> 2] = ee[1]);
                    break;
                  case "float":
                    F[e >> 2] = t;
                    break;
                  case "double":
                    z[e >> 3] = t;
                    break;
                  default:
                    K("invalid type for setValue: " + r);
                }
              }),
              (r.getValue = function (e, t) {
                switch (
                  ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"),
                  t)
                ) {
                  case "i1":
                  case "i8":
                    return A[e >> 0];
                  case "i16":
                    return x[e >> 1];
                  case "i32":
                  case "i64":
                    return R[e >> 2];
                  case "float":
                    return F[e >> 2];
                  case "double":
                    return z[e >> 3];
                  default:
                    K("invalid type for getValue: " + t);
                }
                return null;
              }),
              (r.UTF8ToString = I),
              (q = function e() {
                pr || Ar(), pr || (q = e);
              }),
              (r.run = Ar),
              r.preInit)
            )
              for (
                "function" == typeof r.preInit && (r.preInit = [r.preInit]);
                0 < r.preInit.length;

              )
                r.preInit.pop()();
            return Ar(), t;
          };
        })(),
        c = o;
      function s(e) {
        var t = e.cwrap("zappar_log_level", "number", []),
          r = e.cwrap("zappar_log_level_set", null, ["number"]),
          n = e.cwrap("zappar_analytics_project_id_set", null, ["string"]),
          a = e.cwrap("zappar_pipeline_create", "number", []),
          i = e.cwrap("zappar_pipeline_destroy", null, ["number"]),
          o = e.cwrap("zappar_pipeline_frame_update", null, ["number"]),
          c = e.cwrap("zappar_pipeline_frame_number", "number", ["number"]),
          s = e.cwrap("zappar_pipeline_camera_model", "number", ["number"]),
          _ = e.cwrap("zappar_pipeline_camera_frame_user_data", "number", [
            "number",
          ]),
          u = e.cwrap("zappar_pipeline_camera_frame_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          f = e.cwrap("zappar_pipeline_camera_frame_submit_raw_pointer", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          l = e.cwrap(
            "zappar_pipeline_camera_frame_camera_attitude",
            "number",
            ["number"]
          ),
          d = e.cwrap(
            "zappar_pipeline_camera_frame_device_attitude",
            "number",
            ["number"]
          ),
          p = e.cwrap("zappar_pipeline_motion_accelerometer_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          m = e.cwrap("zappar_pipeline_motion_rotation_rate_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          h = e.cwrap("zappar_pipeline_motion_attitude_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          b = e.cwrap("zappar_pipeline_motion_attitude_matrix_submit", null, [
            "number",
            "number",
          ]),
          w = e.cwrap("zappar_camera_source_create", "number", [
            "number",
            "string",
          ]),
          g = e.cwrap("zappar_camera_source_destroy", null, ["number"]),
          v = e.cwrap("zappar_sequence_source_create", "number", ["number"]),
          y = e.cwrap("zappar_sequence_source_destroy", null, ["number"]),
          E = e.cwrap("zappar_image_tracker_create", "number", ["number"]),
          A = e.cwrap("zappar_image_tracker_destroy", null, ["number"]),
          k = e.cwrap("zappar_image_tracker_target_load_from_memory", null, [
            "number",
            "number",
            "number",
          ]),
          x = e.cwrap("zappar_image_tracker_target_loaded_version", "number", [
            "number",
          ]),
          T = e.cwrap("zappar_image_tracker_enabled", "number", ["number"]),
          R = e.cwrap("zappar_image_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          L = e.cwrap("zappar_image_tracker_anchor_count", "number", [
            "number",
          ]),
          F = e.cwrap("zappar_image_tracker_anchor_id", "string", [
            "number",
            "number",
          ]),
          z = e.cwrap("zappar_image_tracker_anchor_pose_raw", "number", [
            "number",
            "number",
          ]),
          M = e.cwrap("zappar_face_tracker_create", "number", ["number"]),
          O = e.cwrap("zappar_face_tracker_destroy", null, ["number"]),
          I = e.cwrap("zappar_face_tracker_model_load_from_memory", null, [
            "number",
            "number",
            "number",
          ]),
          P = e.cwrap("zappar_face_tracker_model_loaded_version", "number", [
            "number",
          ]),
          S = e.cwrap("zappar_face_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          B = e.cwrap("zappar_face_tracker_enabled", "number", ["number"]),
          D = e.cwrap("zappar_face_tracker_max_faces_set", null, [
            "number",
            "number",
          ]),
          C = e.cwrap("zappar_face_tracker_max_faces", "number", ["number"]),
          U = e.cwrap("zappar_face_tracker_anchor_count", "number", ["number"]),
          V = e.cwrap("zappar_face_tracker_anchor_id", "string", [
            "number",
            "number",
          ]),
          N = e.cwrap("zappar_face_tracker_anchor_pose_raw", "number", [
            "number",
            "number",
          ]),
          G = e.cwrap(
            "zappar_face_tracker_anchor_identity_coefficients",
            "number",
            ["number", "number"]
          ),
          W = e.cwrap(
            "zappar_face_tracker_anchor_expression_coefficients",
            "number",
            ["number", "number"]
          ),
          H = e.cwrap("zappar_face_mesh_create", "number", []),
          Y = e.cwrap("zappar_face_mesh_destroy", null, ["number"]),
          X = e.cwrap("zappar_face_landmark_create", "number", ["number"]),
          q = e.cwrap("zappar_face_landmark_destroy", null, ["number"]),
          j = e.cwrap("zappar_barcode_finder_create", "number", ["number"]),
          Z = e.cwrap("zappar_barcode_finder_destroy", null, ["number"]),
          K = e.cwrap("zappar_barcode_finder_enabled_set", null, [
            "number",
            "number",
          ]),
          J = e.cwrap("zappar_barcode_finder_enabled", "number", ["number"]),
          $ = e.cwrap("zappar_barcode_finder_found_number", "number", [
            "number",
          ]),
          Q = e.cwrap("zappar_barcode_finder_found_text", "string", [
            "number",
            "number",
          ]),
          ee = e.cwrap("zappar_barcode_finder_found_format", "number", [
            "number",
            "number",
          ]),
          te = e.cwrap("zappar_barcode_finder_formats", "number", ["number"]),
          re = e.cwrap("zappar_barcode_finder_formats_set", null, [
            "number",
            "number",
          ]),
          ne = e.cwrap("zappar_instant_world_tracker_create", "number", [
            "number",
          ]),
          ae = e.cwrap("zappar_instant_world_tracker_destroy", null, [
            "number",
          ]),
          ie = e.cwrap("zappar_instant_world_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          oe = e.cwrap("zappar_instant_world_tracker_enabled", "number", [
            "number",
          ]),
          ce = e.cwrap(
            "zappar_instant_world_tracker_anchor_pose_raw",
            "number",
            ["number"]
          ),
          se = e.cwrap(
            "zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw",
            null,
            ["number", "number", "number", "number", "number"]
          ),
          _e = 32,
          ue = e._malloc(_e),
          fe = (e._malloc(64), new Map()),
          le = function (t, r) {
            var n = fe.get(t);
            return (
              (!n || n[0] < r) &&
                (n && e._free(n[1]), (n = [r, e._malloc(r)]), fe.set(t, n)),
              n[1]
            );
          };
        return {
          log_level: function () {
            return t();
          },
          log_level_set: function (e) {
            return r(e);
          },
          analytics_project_id_set: function (e) {
            return n(e);
          },
          pipeline_create: function () {
            return a();
          },
          pipeline_destroy: function () {
            i();
          },
          pipeline_frame_update: function (e) {
            return o(e);
          },
          pipeline_frame_number: function (e) {
            return c(e);
          },
          pipeline_camera_model: function (t) {
            var r = s(t),
              n = new Float32Array(6);
            return n.set(e.HEAPF32.subarray(r / 4, 6 + r / 4)), (r = n);
          },
          pipeline_camera_frame_user_data: function (e) {
            return _(e);
          },
          pipeline_camera_frame_submit: function (t, r, n, a, i, o, c, s) {
            _e < r.byteLength &&
              (e._free(ue), (_e = r.byteLength), (ue = e._malloc(_e)));
            var _ = ue,
              f = r.byteLength;
            e.HEAPU8.set(new Uint8Array(r), ue);
            var l = n,
              d = a,
              p = i,
              m = le(4, o.byteLength);
            e.HEAPF32.set(o, m / 4);
            var h = le(5, c.byteLength);
            return (
              e.HEAPF32.set(c, h / 4), u(t, _, f, l, d, p, m, h, s ? 1 : 0)
            );
          },
          pipeline_camera_frame_submit_raw_pointer: function (
            t,
            r,
            n,
            a,
            i,
            o,
            c,
            s,
            _,
            u,
            l
          ) {
            var d = r,
              p = n,
              m = a,
              h = i,
              b = o,
              w = c,
              g = le(6, s.byteLength);
            e.HEAPF32.set(s, g / 4);
            var v = _,
              y = le(8, u.byteLength);
            return (
              e.HEAPF32.set(u, y / 4),
              f(t, d, p, m, h, b, w, g, v, y, l ? 1 : 0)
            );
          },
          pipeline_camera_frame_camera_attitude: function (t) {
            var r = l(t),
              n = new Float32Array(16);
            return n.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), (r = n);
          },
          pipeline_camera_frame_device_attitude: function (t) {
            var r = d(t),
              n = new Float32Array(16);
            return n.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), (r = n);
          },
          pipeline_motion_accelerometer_submit: function (e, t, r, n, a) {
            return p(e, t, r, n, a);
          },
          pipeline_motion_rotation_rate_submit: function (e, t, r, n, a) {
            return m(e, t, r, n, a);
          },
          pipeline_motion_attitude_submit: function (e, t, r, n, a) {
            return h(e, t, r, n, a);
          },
          pipeline_motion_attitude_matrix_submit: function (t, r) {
            var n = le(0, r.byteLength);
            return e.HEAPF32.set(r, n / 4), b(t, n);
          },
          camera_source_create: function (e, t) {
            return w(e, t);
          },
          camera_source_destroy: function () {
            g();
          },
          sequence_source_create: function (e) {
            return v(e);
          },
          sequence_source_destroy: function () {
            y();
          },
          image_tracker_create: function (e) {
            return E(e);
          },
          image_tracker_destroy: function () {
            A();
          },
          image_tracker_target_load_from_memory: function (t, r) {
            _e < r.byteLength &&
              (e._free(ue), (_e = r.byteLength), (ue = e._malloc(_e)));
            var n = ue,
              a = r.byteLength;
            return e.HEAPU8.set(new Uint8Array(r), ue), k(t, n, a);
          },
          image_tracker_target_loaded_version: function (e) {
            return x(e);
          },
          image_tracker_enabled: function (e) {
            var t = T(e);
            return (t = 1 === t);
          },
          image_tracker_enabled_set: function (e, t) {
            return R(e, t ? 1 : 0);
          },
          image_tracker_anchor_count: function (e) {
            return L(e);
          },
          image_tracker_anchor_id: function (e, t) {
            return F(e, t);
          },
          image_tracker_anchor_pose_raw: function (t, r) {
            var n = z(t, r),
              a = new Float32Array(16);
            return a.set(e.HEAPF32.subarray(n / 4, 16 + n / 4)), (n = a);
          },
          face_tracker_create: function (e) {
            return M(e);
          },
          face_tracker_destroy: function () {
            O();
          },
          face_tracker_model_load_from_memory: function (t, r) {
            _e < r.byteLength &&
              (e._free(ue), (_e = r.byteLength), (ue = e._malloc(_e)));
            var n = ue,
              a = r.byteLength;
            return e.HEAPU8.set(new Uint8Array(r), ue), I(t, n, a);
          },
          face_tracker_model_loaded_version: function (e) {
            return P(e);
          },
          face_tracker_enabled_set: function (e, t) {
            return S(e, t ? 1 : 0);
          },
          face_tracker_enabled: function (e) {
            var t = B(e);
            return (t = 1 === t);
          },
          face_tracker_max_faces_set: function (e, t) {
            return D(e, t);
          },
          face_tracker_max_faces: function (e) {
            return C(e);
          },
          face_tracker_anchor_count: function (e) {
            return U(e);
          },
          face_tracker_anchor_id: function (e, t) {
            return V(e, t);
          },
          face_tracker_anchor_pose_raw: function (t, r) {
            var n = N(t, r),
              a = new Float32Array(16);
            return a.set(e.HEAPF32.subarray(n / 4, 16 + n / 4)), (n = a);
          },
          face_tracker_anchor_identity_coefficients: function (t, r) {
            var n = G(t, r),
              a = new Float32Array(50);
            return a.set(e.HEAPF32.subarray(n / 4, 50 + n / 4)), (n = a);
          },
          face_tracker_anchor_expression_coefficients: function (t, r) {
            var n = W(t, r),
              a = new Float32Array(29);
            return a.set(e.HEAPF32.subarray(n / 4, 29 + n / 4)), (n = a);
          },
          face_mesh_create: function () {
            return H();
          },
          face_mesh_destroy: function () {
            Y();
          },
          face_landmark_create: function (e) {
            return X(e);
          },
          face_landmark_destroy: function () {
            q();
          },
          barcode_finder_create: function (e) {
            return j(e);
          },
          barcode_finder_destroy: function () {
            Z();
          },
          barcode_finder_enabled_set: function (e, t) {
            return K(e, t ? 1 : 0);
          },
          barcode_finder_enabled: function (e) {
            var t = J(e);
            return (t = 1 === t);
          },
          barcode_finder_found_number: function (e) {
            return $(e);
          },
          barcode_finder_found_text: function (e, t) {
            return Q(e, t);
          },
          barcode_finder_found_format: function (e, t) {
            return ee(e, t);
          },
          barcode_finder_formats: function (e) {
            return te(e);
          },
          barcode_finder_formats_set: function (e, t) {
            return re(e, t);
          },
          instant_world_tracker_create: function (e) {
            return ne(e);
          },
          instant_world_tracker_destroy: function () {
            ae();
          },
          instant_world_tracker_enabled_set: function (e, t) {
            return ie(e, t ? 1 : 0);
          },
          instant_world_tracker_enabled: function (e) {
            var t = oe(e);
            return (t = 1 === t);
          },
          instant_world_tracker_anchor_pose_raw: function (t) {
            var r = ce(t),
              n = new Float32Array(16);
            return n.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), (r = n);
          },
          instant_world_tracker_anchor_pose_set_from_camera_offset_raw:
            function (e, t, r, n, a) {
              return se(e, t, r, n, a);
            },
        };
      }
      function _(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                i = [],
                o = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(o = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  o = !0
                );
              } catch (s) {
                (c = !0), (a = s);
              } finally {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (c) throw a;
                }
              }
              return i;
            }
          })(e, r) ||
          t(e, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function l(e, t, r) {
        return (
          t && f(e.prototype, t),
          r && f(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var d = (function () {
          function e(t) {
            var r = this;
            u(this, e),
              (this._messageSender = t),
              (this._freeBufferPool = []),
              (this._buffer = new ArrayBuffer(16)),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u8cView = new Uint8ClampedArray(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              (this._offset = 1),
              (this._startOffset = -1),
              (this._timeoutSet = !1),
              (this._appender = {
                int: function (e) {
                  return r.int(e);
                },
                bool: function (e) {
                  return r.int(e ? 1 : 0);
                },
                float: function (e) {
                  return r.float(e);
                },
                string: function (e) {
                  return r.string(e);
                },
                dataWithLength: function (e) {
                  return r.arrayBuffer(e);
                },
                type: function (e) {
                  return r.int(e);
                },
                matrix4x4: function (e) {
                  return r.float32ArrayBuffer(e);
                },
                matrix3x3: function (e) {
                  return r.float32ArrayBuffer(e);
                },
                identityCoefficients: function (e) {
                  return r.float32ArrayBuffer(e);
                },
                expressionCoefficients: function (e) {
                  return r.float32ArrayBuffer(e);
                },
                cameraModel: function (e) {
                  return r.float32ArrayBuffer(e);
                },
                timestamp: function (e) {
                  return r.double(e);
                },
                barcodeFormat: function (e) {
                  return r.int(e);
                },
                faceLandmarkName: function (e) {
                  return r.int(e);
                },
                instantTrackerTransformOrientation: function (e) {
                  return r.int(e);
                },
                logLevel: function (e) {
                  return r.int(e);
                },
              }),
              this._freeBufferPool.push(new ArrayBuffer(16)),
              this._freeBufferPool.push(new ArrayBuffer(16));
          }
          return (
            l(e, [
              {
                key: "bufferReturn",
                value: function (e) {
                  this._freeBufferPool.push(e);
                },
              },
              {
                key: "_ensureArrayBuffer",
                value: function (e) {
                  var t = 4 * (this._offset + e + 8);
                  if (!(this._buffer && this._buffer.byteLength >= t)) {
                    var r = void 0;
                    if (!r) {
                      var n = t;
                      n--,
                        (n |= n >> 1),
                        (n |= n >> 2),
                        (n |= n >> 4),
                        (n |= n >> 8),
                        (n |= n >> 16),
                        n++,
                        (r = new ArrayBuffer(n));
                    }
                    var a = this._buffer ? this._i32View : void 0;
                    (this._buffer = r),
                      (this._i32View = new Int32Array(this._buffer)),
                      (this._f32View = new Float32Array(this._buffer)),
                      (this._f64View = new Float64Array(this._buffer)),
                      (this._u8View = new Uint8Array(this._buffer)),
                      (this._u8cView = new Uint8ClampedArray(this._buffer)),
                      (this._u16View = new Uint16Array(this._buffer)),
                      (this._u32View = new Uint32Array(this._buffer)),
                      a && this._i32View.set(a.subarray(0, this._offset));
                  }
                },
              },
              {
                key: "sendMessage",
                value: function (e, t) {
                  this._ensureArrayBuffer(4),
                    (this._startOffset = this._offset),
                    (this._i32View[this._offset + 1] = e),
                    (this._offset += 2),
                    t(this._appender),
                    (this._i32View[this._startOffset] =
                      this._offset - this._startOffset),
                    (this._startOffset = -1),
                    this._sendOneTime();
                },
              },
              {
                key: "_sendOneTime",
                value: function () {
                  var e = this;
                  !1 === this._timeoutSet &&
                    ((this._timeoutSet = !0),
                    setTimeout(function () {
                      (e._timeoutSet = !1), e._send();
                    }, 0));
                },
              },
              {
                key: "_send",
                value: function () {
                  0 !== this._freeBufferPool.length
                    ? ((this._i32View[0] = this._offset),
                      this._messageSender(this._buffer),
                      (this._buffer = void 0),
                      (this._buffer = this._freeBufferPool.pop()),
                      (this._i32View = new Int32Array(this._buffer)),
                      (this._f32View = new Float32Array(this._buffer)),
                      (this._f64View = new Float64Array(this._buffer)),
                      (this._u8View = new Uint8Array(this._buffer)),
                      (this._u8cView = new Uint8ClampedArray(this._buffer)),
                      (this._u16View = new Uint16Array(this._buffer)),
                      (this._u32View = new Uint32Array(this._buffer)),
                      (this._offset = 1),
                      (this._startOffset = -1))
                    : this._sendOneTime();
                },
              },
              {
                key: "int",
                value: function (e) {
                  this._ensureArrayBuffer(1),
                    (this._i32View[this._offset] = e),
                    this._offset++;
                },
              },
              {
                key: "double",
                value: function (e) {
                  this._ensureArrayBuffer(2),
                    this._offset % 2 === 1 && this._offset++,
                    (this._f64View[this._offset / 2] = e),
                    (this._offset += 2);
                },
              },
              {
                key: "float",
                value: function (e) {
                  this._ensureArrayBuffer(1),
                    (this._f32View[this._offset] = e),
                    this._offset++;
                },
              },
              {
                key: "int32Array",
                value: function (e) {
                  this._ensureArrayBuffer(e.length);
                  for (var t = 0; t < e.length; ++t)
                    this._i32View[this._offset + t] = e[t];
                  this._offset += e.length;
                },
              },
              {
                key: "float32Array",
                value: function (e) {
                  this._ensureArrayBuffer(e.length);
                  for (var t = 0; t < e.length; ++t)
                    this._f32View[this._offset + t] = e[t];
                  this._offset += e.length;
                },
              },
              {
                key: "booleanArray",
                value: function (e) {
                  this._ensureArrayBuffer(e.length);
                  for (var t = 0; t < e.length; ++t)
                    this._i32View[this._offset + t] = e[t] ? 1 : 0;
                  this._offset += e.length;
                },
              },
              {
                key: "uint8ArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.byteLength),
                    this._offset++,
                    this._u8View.set(e, 4 * this._offset),
                    (this._offset += e.byteLength >> 2),
                    0 !== (3 & e.byteLength) && this._offset++;
                },
              },
              {
                key: "arrayBuffer",
                value: function (e) {
                  var t = new Uint8Array(e);
                  this.uint8ArrayBuffer(t);
                },
              },
              {
                key: "uint8ClampedArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.byteLength),
                    this._offset++,
                    this._u8cView.set(e, 4 * this._offset),
                    (this._offset += e.byteLength >> 2),
                    0 !== (3 & e.byteLength) && this._offset++;
                },
              },
              {
                key: "float32ArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.length),
                    this._offset++,
                    this._f32View.set(e, this._offset),
                    (this._offset += e.length);
                },
              },
              {
                key: "uint16ArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.length),
                    this._offset++;
                  var t = 2 * this._offset;
                  this._u16View.set(e, t),
                    (this._offset += e.length >> 1),
                    0 !== (1 & e.length) && this._offset++;
                },
              },
              {
                key: "int32ArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.length),
                    this._offset++,
                    this._i32View.set(e, this._offset),
                    (this._offset += e.length);
                },
              },
              {
                key: "uint32ArrayBuffer",
                value: function (e) {
                  this._ensureArrayBuffer(e.byteLength / 4),
                    (this._i32View[this._offset] = e.length),
                    this._offset++,
                    this._u32View.set(e, this._offset),
                    (this._offset += e.length);
                },
              },
              {
                key: "string",
                value: function (e) {
                  var t = new TextEncoder().encode(e);
                  this._ensureArrayBuffer(t.byteLength / 4),
                    (this._i32View[this._offset] = t.byteLength),
                    this._offset++,
                    this._u8View.set(t, 4 * this._offset),
                    (this._offset += t.byteLength >> 2),
                    0 !== (3 & t.byteLength) && this._offset++;
                },
              },
            ]),
            e
          );
        })(),
        p = (function () {
          function e() {
            var t = this;
            u(this, e),
              (this._buffer = new ArrayBuffer(0)),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              (this._offset = 0),
              (this._length = 0),
              (this._startOffset = -1),
              (this._processor = {
                int: function () {
                  return t._i32View[t._startOffset++];
                },
                bool: function () {
                  return 1 === t._i32View[t._startOffset++];
                },
                type: function () {
                  return t._i32View[t._startOffset++];
                },
                float: function () {
                  return t._f32View[t._startOffset++];
                },
                timestamp: function () {
                  t._startOffset % 2 === 1 && t._startOffset++;
                  var e = t._f64View[t._startOffset / 2];
                  return (t._startOffset += 2), e;
                },
                string: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new TextDecoder().decode(
                      new Uint8Array(t._buffer, 4 * t._startOffset, e)
                    );
                  return (
                    (t._startOffset += e >> 2),
                    0 !== (3 & e) && t._startOffset++,
                    r
                  );
                },
                dataWithLength: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Uint8Array(e);
                  return (
                    r.set(
                      t._u8View.subarray(
                        4 * t._startOffset,
                        4 * t._startOffset + e
                      )
                    ),
                    (t._startOffset += r.byteLength >> 2),
                    0 !== (3 & r.byteLength) && t._startOffset++,
                    r.buffer
                  );
                },
                matrix4x4: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Float32Array(e);
                  return (
                    r.set(
                      t._f32View.subarray(t._startOffset, t._startOffset + 16)
                    ),
                    (t._startOffset += e),
                    r
                  );
                },
                matrix3x3: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Float32Array(e);
                  return (
                    r.set(
                      t._f32View.subarray(t._startOffset, t._startOffset + 9)
                    ),
                    (t._startOffset += e),
                    r
                  );
                },
                identityCoefficients: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Float32Array(e);
                  return (
                    r.set(
                      t._f32View.subarray(t._startOffset, t._startOffset + 50)
                    ),
                    (t._startOffset += e),
                    r
                  );
                },
                expressionCoefficients: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Float32Array(e);
                  return (
                    r.set(
                      t._f32View.subarray(t._startOffset, t._startOffset + 29)
                    ),
                    (t._startOffset += e),
                    r
                  );
                },
                cameraModel: function () {
                  var e = t._i32View[t._startOffset++],
                    r = new Float32Array(e);
                  return (
                    r.set(
                      t._f32View.subarray(t._startOffset, t._startOffset + 6)
                    ),
                    (t._startOffset += e),
                    r
                  );
                },
                barcodeFormat: function () {
                  return t._i32View[t._startOffset++];
                },
                faceLandmarkName: function () {
                  return t._i32View[t._startOffset++];
                },
                instantTrackerTransformOrientation: function () {
                  return t._i32View[t._startOffset++];
                },
                logLevel: function () {
                  return t._i32View[t._startOffset++];
                },
              });
          }
          return (
            l(e, [
              {
                key: "setData",
                value: function (e) {
                  (this._buffer = e),
                    (this._i32View = new Int32Array(this._buffer)),
                    (this._f32View = new Float32Array(this._buffer)),
                    (this._f64View = new Float64Array(this._buffer)),
                    (this._u8View = new Uint8Array(this._buffer)),
                    (this._u16View = new Uint16Array(this._buffer)),
                    (this._u32View = new Uint32Array(this._buffer)),
                    (this._offset = 0),
                    (this._length = 0),
                    e.byteLength >= 4 &&
                      ((this._offset = 1), (this._length = this._i32View[0])),
                    (this._startOffset = -1);
                },
              },
              {
                key: "hasMessage",
                value: function () {
                  return this._offset + 1 < this._length;
                },
              },
              {
                key: "forMessages",
                value: function (e) {
                  for (; this.hasMessage(); ) {
                    var t = this._i32View[this._offset],
                      r = this._i32View[this._offset + 1];
                    (this._startOffset = this._offset + 2),
                      (this._offset += t),
                      e(r, this._processor);
                  }
                },
              },
            ]),
            e
          );
        })(),
        m = (function () {
          function e(t, r) {
            u(this, e),
              (this._impl = t),
              (this._sender = r),
              (this._deserializer = new p()),
              (this.serializersByPipelineId = new Map()),
              (this._pipeline_id_by_pipeline_id = new Map()),
              (this._pipeline_by_instance = new Map()),
              (this._pipeline_id_by_camera_source_id = new Map()),
              (this._camera_source_by_instance = new Map()),
              (this._pipeline_id_by_sequence_source_id = new Map()),
              (this._sequence_source_by_instance = new Map()),
              (this._pipeline_id_by_image_tracker_id = new Map()),
              (this._image_tracker_by_instance = new Map()),
              (this._pipeline_id_by_face_tracker_id = new Map()),
              (this._face_tracker_by_instance = new Map()),
              (this._pipeline_id_by_face_mesh_id = new Map()),
              (this._face_mesh_by_instance = new Map()),
              (this._pipeline_id_by_face_landmark_id = new Map()),
              (this._face_landmark_by_instance = new Map()),
              (this._pipeline_id_by_barcode_finder_id = new Map()),
              (this._barcode_finder_by_instance = new Map()),
              (this._pipeline_id_by_instant_world_tracker_id = new Map()),
              (this._instant_world_tracker_by_instance = new Map());
          }
          return (
            l(e, [
              {
                key: "processBuffer",
                value: function (e) {
                  var t = this;
                  this._deserializer.setData(e),
                    this._deserializer.forMessages(function (e, r) {
                      switch (e) {
                        case 34:
                          t._impl.log_level_set(r.logLevel());
                          break;
                        case 31:
                          t._impl.analytics_project_id_set(r.string());
                          break;
                        case 27:
                          var n = r.type(),
                            a = t._impl.pipeline_create();
                          t._pipeline_by_instance.set(n, a),
                            t._pipeline_id_by_pipeline_id.set(n, n),
                            t.serializersByPipelineId.set(
                              n,
                              new d(function (e) {
                                t._sender(n, e);
                              })
                            );
                          break;
                        case 28:
                          var i = r.type(),
                            o = t._pipeline_by_instance.get(i);
                          if (void 0 === o) return;
                          t._impl.pipeline_destroy(o),
                            t._pipeline_by_instance.delete(i);
                          break;
                        case 9:
                          var c = r.type(),
                            s = t._pipeline_by_instance.get(c);
                          if (void 0 === s) return;
                          t._impl.pipeline_frame_update(s);
                          break;
                        case 8:
                          var _ = r.type(),
                            u = t._pipeline_by_instance.get(_);
                          if (void 0 === u) return;
                          t._impl.pipeline_camera_frame_submit(
                            u,
                            r.dataWithLength(),
                            r.int(),
                            r.int(),
                            r.int(),
                            r.matrix4x4(),
                            r.cameraModel(),
                            r.bool()
                          );
                          break;
                        case 10:
                          var f = r.type(),
                            l = t._pipeline_by_instance.get(f);
                          if (void 0 === l) return;
                          t._impl.pipeline_motion_accelerometer_submit(
                            l,
                            r.timestamp(),
                            r.float(),
                            r.float(),
                            r.float()
                          );
                          break;
                        case 11:
                          var p = r.type(),
                            m = t._pipeline_by_instance.get(p);
                          if (void 0 === m) return;
                          t._impl.pipeline_motion_rotation_rate_submit(
                            m,
                            r.timestamp(),
                            r.float(),
                            r.float(),
                            r.float()
                          );
                          break;
                        case 12:
                          var h = r.type(),
                            b = t._pipeline_by_instance.get(h);
                          if (void 0 === b) return;
                          t._impl.pipeline_motion_attitude_submit(
                            b,
                            r.timestamp(),
                            r.float(),
                            r.float(),
                            r.float()
                          );
                          break;
                        case 13:
                          var w = r.type(),
                            g = t._pipeline_by_instance.get(w);
                          if (void 0 === g) return;
                          t._impl.pipeline_motion_attitude_matrix_submit(
                            g,
                            r.matrix4x4()
                          );
                          break;
                        case 29:
                          var v = r.type(),
                            y = r.type(),
                            E = t._pipeline_by_instance.get(y),
                            A = r.string(),
                            k = t._impl.camera_source_create(E, A);
                          t._camera_source_by_instance.set(v, k),
                            t._pipeline_id_by_camera_source_id.set(v, y);
                          break;
                        case 30:
                          var x = r.type(),
                            T = t._camera_source_by_instance.get(x);
                          if (void 0 === T) return;
                          t._impl.camera_source_destroy(T),
                            t._camera_source_by_instance.delete(x);
                          break;
                        case 35:
                          var R = r.type(),
                            L = r.type(),
                            F = t._pipeline_by_instance.get(L),
                            z = t._impl.sequence_source_create(F);
                          t._sequence_source_by_instance.set(R, z),
                            t._pipeline_id_by_sequence_source_id.set(R, L);
                          break;
                        case 36:
                          var M = r.type(),
                            O = t._sequence_source_by_instance.get(M);
                          if (void 0 === O) return;
                          t._impl.sequence_source_destroy(O),
                            t._sequence_source_by_instance.delete(M);
                          break;
                        case 2:
                          var I = r.type(),
                            P = r.type(),
                            S = t._pipeline_by_instance.get(P),
                            B = t._impl.image_tracker_create(S);
                          t._image_tracker_by_instance.set(I, B),
                            t._pipeline_id_by_image_tracker_id.set(I, P);
                          break;
                        case 14:
                          var D = r.type(),
                            C = t._image_tracker_by_instance.get(D);
                          if (void 0 === C) return;
                          t._impl.image_tracker_destroy(C),
                            t._image_tracker_by_instance.delete(D);
                          break;
                        case 4:
                          var U = r.type(),
                            V = t._image_tracker_by_instance.get(U);
                          if (void 0 === V) return;
                          t._impl.image_tracker_target_load_from_memory(
                            V,
                            r.dataWithLength()
                          );
                          break;
                        case 3:
                          var N = r.type(),
                            G = t._image_tracker_by_instance.get(N);
                          if (void 0 === G) return;
                          t._impl.image_tracker_enabled_set(G, r.bool());
                          break;
                        case 20:
                          var W = r.type(),
                            H = r.type(),
                            Y = t._pipeline_by_instance.get(H),
                            X = t._impl.face_tracker_create(Y);
                          t._face_tracker_by_instance.set(W, X),
                            t._pipeline_id_by_face_tracker_id.set(W, H);
                          break;
                        case 21:
                          var q = r.type(),
                            j = t._face_tracker_by_instance.get(q);
                          if (void 0 === j) return;
                          t._impl.face_tracker_destroy(j),
                            t._face_tracker_by_instance.delete(q);
                          break;
                        case 22:
                          var Z = r.type(),
                            K = t._face_tracker_by_instance.get(Z);
                          if (void 0 === K) return;
                          t._impl.face_tracker_model_load_from_memory(
                            K,
                            r.dataWithLength()
                          );
                          break;
                        case 23:
                          var J = r.type(),
                            $ = t._face_tracker_by_instance.get(J);
                          if (void 0 === $) return;
                          t._impl.face_tracker_enabled_set($, r.bool());
                          break;
                        case 24:
                          var Q = r.type(),
                            ee = t._face_tracker_by_instance.get(Q);
                          if (void 0 === ee) return;
                          t._impl.face_tracker_max_faces_set(ee, r.int());
                          break;
                        case 25:
                          var te = r.type(),
                            re = t._impl.face_mesh_create();
                          t._face_mesh_by_instance.set(te, re);
                          break;
                        case 26:
                          var ne = r.type(),
                            ae = t._face_mesh_by_instance.get(ne);
                          if (void 0 === ae) return;
                          t._impl.face_mesh_destroy(ae),
                            t._face_mesh_by_instance.delete(ne);
                          break;
                        case 32:
                          var ie = r.type(),
                            oe = r.faceLandmarkName(),
                            ce = t._impl.face_landmark_create(oe);
                          t._face_landmark_by_instance.set(ie, ce);
                          break;
                        case 33:
                          var se = r.type(),
                            _e = t._face_landmark_by_instance.get(se);
                          if (void 0 === _e) return;
                          t._impl.face_landmark_destroy(_e),
                            t._face_landmark_by_instance.delete(se);
                          break;
                        case 16:
                          var ue = r.type(),
                            fe = r.type(),
                            le = t._pipeline_by_instance.get(fe),
                            de = t._impl.barcode_finder_create(le);
                          t._barcode_finder_by_instance.set(ue, de),
                            t._pipeline_id_by_barcode_finder_id.set(ue, fe);
                          break;
                        case 17:
                          var pe = r.type(),
                            me = t._barcode_finder_by_instance.get(pe);
                          if (void 0 === me) return;
                          t._impl.barcode_finder_destroy(me),
                            t._barcode_finder_by_instance.delete(pe);
                          break;
                        case 18:
                          var he = r.type(),
                            be = t._barcode_finder_by_instance.get(he);
                          if (void 0 === be) return;
                          t._impl.barcode_finder_enabled_set(be, r.bool());
                          break;
                        case 19:
                          var we = r.type(),
                            ge = t._barcode_finder_by_instance.get(we);
                          if (void 0 === ge) return;
                          t._impl.barcode_finder_formats_set(
                            ge,
                            r.barcodeFormat()
                          );
                          break;
                        case 5:
                          var ve = r.type(),
                            ye = r.type(),
                            Ee = t._pipeline_by_instance.get(ye),
                            Ae = t._impl.instant_world_tracker_create(Ee);
                          t._instant_world_tracker_by_instance.set(ve, Ae),
                            t._pipeline_id_by_instant_world_tracker_id.set(
                              ve,
                              ye
                            );
                          break;
                        case 15:
                          var ke = r.type(),
                            xe = t._instant_world_tracker_by_instance.get(ke);
                          if (void 0 === xe) return;
                          t._impl.instant_world_tracker_destroy(xe),
                            t._instant_world_tracker_by_instance.delete(ke);
                          break;
                        case 6:
                          var Te = r.type(),
                            Re = t._instant_world_tracker_by_instance.get(Te);
                          if (void 0 === Re) return;
                          t._impl.instant_world_tracker_enabled_set(
                            Re,
                            r.bool()
                          );
                          break;
                        case 7:
                          var Le = r.type(),
                            Fe = t._instant_world_tracker_by_instance.get(Le);
                          if (void 0 === Fe) return;
                          t._impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(
                            Fe,
                            r.float(),
                            r.float(),
                            r.float(),
                            r.instantTrackerTransformOrientation()
                          );
                      }
                    });
                },
              },
              {
                key: "exploreState",
                value: function () {
                  var e,
                    t = this,
                    r = n(this._pipeline_by_instance);
                  try {
                    var a = function () {
                      var r = _(e.value, 2),
                        n = r[0],
                        a = r[1],
                        i = t._pipeline_id_by_pipeline_id.get(n);
                      if (!i) return "continue";
                      var o = t.serializersByPipelineId.get(i);
                      if (!o) return "continue";
                      o.sendMessage(7, function (e) {
                        e.type(n), e.int(t._impl.pipeline_frame_number(a));
                      }),
                        o.sendMessage(6, function (e) {
                          e.type(n),
                            e.cameraModel(t._impl.pipeline_camera_model(a));
                        }),
                        o.sendMessage(5, function (e) {
                          e.type(n),
                            e.int(t._impl.pipeline_camera_frame_user_data(a));
                        }),
                        o.sendMessage(11, function (e) {
                          e.type(n),
                            e.matrix4x4(
                              t._impl.pipeline_camera_frame_camera_attitude(a)
                            );
                        }),
                        o.sendMessage(12, function (e) {
                          e.type(n),
                            e.matrix4x4(
                              t._impl.pipeline_camera_frame_device_attitude(a)
                            );
                        });
                    };
                    for (r.s(); !(e = r.n()).done; ) a();
                  } catch (C) {
                    r.e(C);
                  } finally {
                    r.f();
                  }
                  var i,
                    o = n(this._camera_source_by_instance);
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var c = _(i.value, 2),
                        s = c[0],
                        u =
                          (c[1], this._pipeline_id_by_camera_source_id.get(s));
                      if (u) this.serializersByPipelineId.get(u);
                    }
                  } catch (C) {
                    o.e(C);
                  } finally {
                    o.f();
                  }
                  var f,
                    l = n(this._sequence_source_by_instance);
                  try {
                    for (l.s(); !(f = l.n()).done; ) {
                      var d = _(f.value, 2),
                        p = d[0],
                        m =
                          (d[1],
                          this._pipeline_id_by_sequence_source_id.get(p));
                      if (m) this.serializersByPipelineId.get(m);
                    }
                  } catch (C) {
                    l.e(C);
                  } finally {
                    l.f();
                  }
                  var h,
                    b = n(this._image_tracker_by_instance);
                  try {
                    var w = function () {
                      var e = _(h.value, 2),
                        r = e[0],
                        n = e[1],
                        a = t._pipeline_id_by_image_tracker_id.get(r);
                      if (!a) return "continue";
                      var i = t.serializersByPipelineId.get(a);
                      if (!i) return "continue";
                      i.sendMessage(19, function (e) {
                        e.type(r),
                          e.int(t._impl.image_tracker_target_loaded_version(n));
                      }),
                        i.sendMessage(1, function (e) {
                          e.type(r),
                            e.int(t._impl.image_tracker_anchor_count(n));
                        });
                      for (
                        var o = function (e) {
                            i.sendMessage(2, function (a) {
                              a.type(r),
                                a.int(e),
                                a.string(t._impl.image_tracker_anchor_id(n, e));
                            });
                          },
                          c = 0;
                        c < t._impl.image_tracker_anchor_count(n);
                        c++
                      )
                        o(c);
                      for (
                        var s = function (e) {
                            i.sendMessage(3, function (a) {
                              a.type(r),
                                a.int(e),
                                a.matrix4x4(
                                  t._impl.image_tracker_anchor_pose_raw(n, e)
                                );
                            });
                          },
                          u = 0;
                        u < t._impl.image_tracker_anchor_count(n);
                        u++
                      )
                        s(u);
                    };
                    for (b.s(); !(h = b.n()).done; ) w();
                  } catch (C) {
                    b.e(C);
                  } finally {
                    b.f();
                  }
                  var g,
                    v = n(this._face_tracker_by_instance);
                  try {
                    var y = function () {
                      var e = _(g.value, 2),
                        r = e[0],
                        n = e[1],
                        a = t._pipeline_id_by_face_tracker_id.get(r);
                      if (!a) return "continue";
                      var i = t.serializersByPipelineId.get(a);
                      if (!i) return "continue";
                      i.sendMessage(18, function (e) {
                        e.type(r),
                          e.int(t._impl.face_tracker_model_loaded_version(n));
                      }),
                        i.sendMessage(13, function (e) {
                          e.type(r),
                            e.int(t._impl.face_tracker_anchor_count(n));
                        });
                      for (
                        var o = function (e) {
                            i.sendMessage(14, function (a) {
                              a.type(r),
                                a.int(e),
                                a.string(t._impl.face_tracker_anchor_id(n, e));
                            });
                          },
                          c = 0;
                        c < t._impl.face_tracker_anchor_count(n);
                        c++
                      )
                        o(c);
                      for (
                        var s = function (e) {
                            i.sendMessage(15, function (a) {
                              a.type(r),
                                a.int(e),
                                a.matrix4x4(
                                  t._impl.face_tracker_anchor_pose_raw(n, e)
                                );
                            });
                          },
                          u = 0;
                        u < t._impl.face_tracker_anchor_count(n);
                        u++
                      )
                        s(u);
                      for (
                        var f = function (e) {
                            i.sendMessage(16, function (a) {
                              a.type(r),
                                a.int(e),
                                a.identityCoefficients(
                                  t._impl.face_tracker_anchor_identity_coefficients(
                                    n,
                                    e
                                  )
                                );
                            });
                          },
                          l = 0;
                        l < t._impl.face_tracker_anchor_count(n);
                        l++
                      )
                        f(l);
                      for (
                        var d = function (e) {
                            i.sendMessage(17, function (a) {
                              a.type(r),
                                a.int(e),
                                a.expressionCoefficients(
                                  t._impl.face_tracker_anchor_expression_coefficients(
                                    n,
                                    e
                                  )
                                );
                            });
                          },
                          p = 0;
                        p < t._impl.face_tracker_anchor_count(n);
                        p++
                      )
                        d(p);
                    };
                    for (v.s(); !(g = v.n()).done; ) y();
                  } catch (C) {
                    v.e(C);
                  } finally {
                    v.f();
                  }
                  var E,
                    A = n(this._face_mesh_by_instance);
                  try {
                    for (A.s(); !(E = A.n()).done; ) {
                      var k = _(E.value, 2),
                        x = k[0],
                        T = (k[1], this._pipeline_id_by_face_mesh_id.get(x));
                      if (T) this.serializersByPipelineId.get(T);
                    }
                  } catch (C) {
                    A.e(C);
                  } finally {
                    A.f();
                  }
                  var R,
                    L = n(this._face_landmark_by_instance);
                  try {
                    for (L.s(); !(R = L.n()).done; ) {
                      var F = _(R.value, 2),
                        z = F[0],
                        M =
                          (F[1], this._pipeline_id_by_face_landmark_id.get(z));
                      if (M) this.serializersByPipelineId.get(M);
                    }
                  } catch (C) {
                    L.e(C);
                  } finally {
                    L.f();
                  }
                  var O,
                    I = n(this._barcode_finder_by_instance);
                  try {
                    var P = function () {
                      var e = _(O.value, 2),
                        r = e[0],
                        n = e[1],
                        a = t._pipeline_id_by_barcode_finder_id.get(r);
                      if (!a) return "continue";
                      var i = t.serializersByPipelineId.get(a);
                      if (!i) return "continue";
                      i.sendMessage(8, function (e) {
                        e.type(r),
                          e.int(t._impl.barcode_finder_found_number(n));
                      });
                      for (
                        var o = function (e) {
                            i.sendMessage(9, function (a) {
                              a.type(r),
                                a.int(e),
                                a.string(
                                  t._impl.barcode_finder_found_text(n, e)
                                );
                            });
                          },
                          c = 0;
                        c < t._impl.barcode_finder_found_number(n);
                        c++
                      )
                        o(c);
                      for (
                        var s = function (e) {
                            i.sendMessage(10, function (a) {
                              a.type(r),
                                a.int(e),
                                a.barcodeFormat(
                                  t._impl.barcode_finder_found_format(n, e)
                                );
                            });
                          },
                          u = 0;
                        u < t._impl.barcode_finder_found_number(n);
                        u++
                      )
                        s(u);
                    };
                    for (I.s(); !(O = I.n()).done; ) P();
                  } catch (C) {
                    I.e(C);
                  } finally {
                    I.f();
                  }
                  var S,
                    B = n(this._instant_world_tracker_by_instance);
                  try {
                    var D = function () {
                      var e = _(S.value, 2),
                        r = e[0],
                        n = e[1],
                        a = t._pipeline_id_by_instant_world_tracker_id.get(r);
                      if (!a) return "continue";
                      var i = t.serializersByPipelineId.get(a);
                      if (!i) return "continue";
                      i.sendMessage(4, function (e) {
                        e.type(r),
                          e.matrix4x4(
                            t._impl.instant_world_tracker_anchor_pose_raw(n)
                          );
                      });
                    };
                    for (B.s(); !(S = B.n()).done; ) D();
                  } catch (C) {
                    B.e(C);
                  } finally {
                    B.f();
                  }
                },
              },
            ]),
            e
          );
        })(),
        h = (function () {
          function e() {
            u(this, e), (this._funcs = []);
          }
          return (
            l(e, [
              {
                key: "bind",
                value: function (e) {
                  this._funcs.push(e);
                },
              },
              {
                key: "unbind",
                value: function (e) {
                  var t = this._funcs.indexOf(e);
                  t > -1 && this._funcs.splice(t, 1);
                },
              },
              {
                key: "emit",
                value: function () {
                  for (var e = 0, t = this._funcs.length; e < t; e++)
                    this._funcs[e]();
                },
              },
            ]),
            e
          );
        })(),
        b = (function () {
          function e() {
            u(this, e), (this._funcs = []);
          }
          return (
            l(e, [
              {
                key: "bind",
                value: function (e) {
                  this._funcs.push(e);
                },
              },
              {
                key: "unbind",
                value: function (e) {
                  var t = this._funcs.indexOf(e);
                  t > -1 && this._funcs.splice(t, 1);
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (var t = 0, r = this._funcs.length; t < r; t++)
                    this._funcs[t](e);
                },
              },
            ]),
            e
          );
        })(),
        w = (function () {
          function e() {
            u(this, e),
              (this.onOutgoingMessage = new h()),
              (this.onIncomingMessage = new b()),
              (this._outgoingMessages = []);
          }
          return (
            l(e, [
              {
                key: "postIncomingMessage",
                value: function (e) {
                  this.onIncomingMessage.emit(e);
                },
              },
              {
                key: "postOutgoingMessage",
                value: function (e, t) {
                  this._outgoingMessages.push({ msg: e, transferables: t }),
                    this.onOutgoingMessage.emit();
                },
              },
              {
                key: "getOutgoingMessages",
                value: function () {
                  var e = this._outgoingMessages;
                  return (this._outgoingMessages = []), e;
                },
              },
            ]),
            e
          );
        })(),
        g = "undefined" !== typeof Float32Array ? Float32Array : Array;
      Math.random;
      Math.PI;
      function v() {
        var e = new g(16);
        return (
          g != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0)),
          (e[0] = 1),
          (e[5] = 1),
          (e[10] = 1),
          (e[15] = 1),
          e
        );
      }
      function y(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      Math.hypot ||
        (Math.hypot = function () {
          for (var e = 0, t = arguments.length; t--; )
            e += arguments[t] * arguments[t];
          return Math.sqrt(e);
        });
      var E, A, k, x, T, R;
      !(function (e) {
        (e[(e.UNKNOWN = 131072)] = "UNKNOWN"),
          (e[(e.AZTEC = 1)] = "AZTEC"),
          (e[(e.CODABAR = 2)] = "CODABAR"),
          (e[(e.CODE_39 = 4)] = "CODE_39"),
          (e[(e.CODE_93 = 8)] = "CODE_93"),
          (e[(e.CODE_128 = 16)] = "CODE_128"),
          (e[(e.DATA_MATRIX = 32)] = "DATA_MATRIX"),
          (e[(e.EAN_8 = 64)] = "EAN_8"),
          (e[(e.EAN_13 = 128)] = "EAN_13"),
          (e[(e.ITF = 256)] = "ITF"),
          (e[(e.MAXICODE = 512)] = "MAXICODE"),
          (e[(e.PDF_417 = 1024)] = "PDF_417"),
          (e[(e.QR_CODE = 2048)] = "QR_CODE"),
          (e[(e.RSS_14 = 4096)] = "RSS_14"),
          (e[(e.RSS_EXPANDED = 8192)] = "RSS_EXPANDED"),
          (e[(e.UPC_A = 16384)] = "UPC_A"),
          (e[(e.UPC_E = 32768)] = "UPC_E"),
          (e[(e.UPC_EAN_EXTENSION = 65536)] = "UPC_EAN_EXTENSION"),
          (e[(e.ALL = 131071)] = "ALL");
      })(E || (E = {})),
        (function (e) {
          (e[(e.EYE_LEFT = 0)] = "EYE_LEFT"),
            (e[(e.EYE_RIGHT = 1)] = "EYE_RIGHT"),
            (e[(e.EAR_LEFT = 2)] = "EAR_LEFT"),
            (e[(e.EAR_RIGHT = 3)] = "EAR_RIGHT"),
            (e[(e.NOSE_BRIDGE = 4)] = "NOSE_BRIDGE"),
            (e[(e.NOSE_TIP = 5)] = "NOSE_TIP"),
            (e[(e.NOSE_BASE = 6)] = "NOSE_BASE"),
            (e[(e.LIP_TOP = 7)] = "LIP_TOP"),
            (e[(e.LIP_BOTTOM = 8)] = "LIP_BOTTOM"),
            (e[(e.MOUTH_CENTER = 9)] = "MOUTH_CENTER"),
            (e[(e.CHIN = 10)] = "CHIN"),
            (e[(e.EYEBROW_LEFT = 11)] = "EYEBROW_LEFT"),
            (e[(e.EYEBROW_RIGHT = 12)] = "EYEBROW_RIGHT");
        })(A || (A = {})),
        (function (e) {
          (e[(e.WORLD = 3)] = "WORLD"),
            (e[(e.MINUS_Z_AWAY_FROM_USER = 4)] = "MINUS_Z_AWAY_FROM_USER"),
            (e[(e.MINUS_Z_HEADING = 5)] = "MINUS_Z_HEADING"),
            (e[(e.UNCHANGED = 6)] = "UNCHANGED");
        })(k || (k = {})),
        (function (e) {
          (e[(e.LOG_LEVEL_NONE = 0)] = "LOG_LEVEL_NONE"),
            (e[(e.LOG_LEVEL_ERROR = 1)] = "LOG_LEVEL_ERROR"),
            (e[(e.LOG_LEVEL_WARNING = 2)] = "LOG_LEVEL_WARNING"),
            (e[(e.LOG_LEVEL_VERBOSE = 3)] = "LOG_LEVEL_VERBOSE");
        })(x || (x = {})),
        (function (e) {
          (e[(e.FRAME_PIXEL_FORMAT_I420 = 0)] = "FRAME_PIXEL_FORMAT_I420"),
            (e[(e.FRAME_PIXEL_FORMAT_I420A = 1)] = "FRAME_PIXEL_FORMAT_I420A"),
            (e[(e.FRAME_PIXEL_FORMAT_I422 = 2)] = "FRAME_PIXEL_FORMAT_I422"),
            (e[(e.FRAME_PIXEL_FORMAT_I444 = 3)] = "FRAME_PIXEL_FORMAT_I444"),
            (e[(e.FRAME_PIXEL_FORMAT_NV12 = 4)] = "FRAME_PIXEL_FORMAT_NV12"),
            (e[(e.FRAME_PIXEL_FORMAT_RGBA = 5)] = "FRAME_PIXEL_FORMAT_RGBA"),
            (e[(e.FRAME_PIXEL_FORMAT_BGRA = 6)] = "FRAME_PIXEL_FORMAT_BGRA"),
            (e[(e.FRAME_PIXEL_FORMAT_Y = 7)] = "FRAME_PIXEL_FORMAT_Y");
        })(T || (T = {})),
        (function (e) {
          (e[(e.IMAGE_TRACKER_TYPE_PLANAR = 0)] = "IMAGE_TRACKER_TYPE_PLANAR"),
            (e[(e.IMAGE_TRACKER_TYPE_CYLINDRICAL = 1)] =
              "IMAGE_TRACKER_TYPE_CYLINDRICAL"),
            (e[(e.IMAGE_TRACKER_TYPE_CONICAL = 2)] =
              "IMAGE_TRACKER_TYPE_CONICAL");
        })(R || (R = {}));
      var L,
        F = new Map(),
        z = (function () {
          function e(t) {
            var r = this;
            u(this, e),
              (this._gl = t),
              (this._viewports = []),
              (this._underlyingViewport = this._gl.viewport),
              this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT)),
              (this._gl.viewport = function (e, t, n, a) {
                (r._viewports[r._viewports.length - 1] = [e, t, n, a]),
                  r._underlyingViewport.call(r._gl, e, t, n, a);
              });
          }
          return (
            l(
              e,
              [
                {
                  key: "push",
                  value: function () {
                    this._viewports.push(
                      this._viewports[this._viewports.length - 1]
                    );
                  },
                },
                {
                  key: "pop",
                  value: function () {
                    var e = this._viewports.pop(),
                      t = this._viewports[this._viewports.length - 1];
                    (e &&
                      e[0] === t[0] &&
                      e[1] === t[1] &&
                      e[2] === t[2] &&
                      e[3] === t[3]) ||
                      this._underlyingViewport.call(
                        this._gl,
                        t[0],
                        t[1],
                        t[2],
                        t[3]
                      );
                  },
                },
              ],
              [
                {
                  key: "get",
                  value: function (t) {
                    var r = F.get(t);
                    return r || ((r = new e(t)), F.set(t, r)), r;
                  },
                },
              ]
            ),
            e
          );
        })(),
        M = r(4184);
      !(function (e) {
        (e[(e.OBJECT_URL = 0)] = "OBJECT_URL"),
          (e[(e.SRC_OBJECT = 1)] = "SRC_OBJECT");
      })(L || (L = {}));
      var O = {
        deviceMotionMutliplier: -1,
        blacklisted: !1,
        showGyroPermissionsWarningIfNecessary: !1,
        showSafariPermissionsResetIfNecessary: !1,
        requestHighFrameRate: !1,
        videoWidth: 640,
        videoHeight: 480,
        dataWidth: 320,
        dataHeight: 240,
        videoElementInDOM: !1,
        preferMediaStreamTrackProcessorCamera: !1,
        preferImageBitmapCamera: !1,
      };
      "undefined" !== typeof window &&
        ((window.zeeProfile = O),
        window.location.href.indexOf("_mstppipeline") >= 0 &&
          (console.log("Configuring for MSTP camera pipeline (if supported)"),
          (O.preferMediaStreamTrackProcessorCamera = !0)),
        window.location.href.indexOf("_imagebitmappipeline") >= 0 &&
          (console.log(
            "Configuring for ImageBitmap camera pipeline (if supported)"
          ),
          (O.preferImageBitmapCamera = !0)));
      var I = new M.UAParser(),
        P = (I.getOS().name || "unknown").toLowerCase(),
        S = (I.getEngine().name || "unknown").toLowerCase();
      ("webkit" === S &&
        "ios" !== P &&
        ((O.deviceMotionMutliplier = 1),
        "undefined" !== typeof window &&
          void 0 !== window.orientation &&
          B("15.0")),
      "webkit" === S && "ios" === P) &&
        ((O.deviceMotionMutliplier = 1), B(I.getOS().version || "15.0"));
      function B(e) {
        var t = e.split(".");
        if (t.length >= 2) {
          var r = parseInt(t[0]),
            n = parseInt(t[1]);
          (r < 11 || (11 === r && n < 3)) && (O.blacklisted = !0),
            (r < 12 || (12 === r && n < 2)) && (O.videoElementInDOM = !0),
            ((12 === r && n >= 2) || r >= 13) &&
              (O.showGyroPermissionsWarningIfNecessary = !0),
            r >= 13 && (O.showSafariPermissionsResetIfNecessary = !0),
            ((r >= 12 && n > 1) || r >= 13) &&
              navigator.mediaDevices &&
              navigator.mediaDevices.getSupportedConstraints &&
              navigator.mediaDevices.getSupportedConstraints().frameRate &&
              ((O.requestHighFrameRate = !0),
              r < 14 && ((O.videoHeight = 360), (O.dataHeight = 180)));
        }
      }
      function D(e, t, r) {
        var n = e.createShader(t);
        if (!n) throw new Error("Unable to create shader");
        e.shaderSource(n, r), e.compileShader(n);
        var a = e.getShaderInfoLog(n);
        if (a && a.trim().length > 0)
          throw new Error("Shader compile error: " + a);
        return n;
      }
      var C,
        U,
        V,
        N,
        G = (function () {
          function e(t) {
            u(this, e),
              (this._gl = t),
              (this._isPaused = !0),
              (this._hadFrames = !1),
              (this._isUserFacing = !1),
              (this._cameraToScreenRotation = 0),
              (this._isUploadFrame = !0),
              (this._computedTransformRotation = -1),
              (this._computedFrontCameraRotation = !1),
              (this._cameraUvTransform = v()),
              (this._framebufferWidth = 0),
              (this._framebufferHeight = 0),
              (this._framebufferId = null),
              (this._renderTexture = null),
              (this._isWebGL2 = !1),
              (this._isWebGL2 =
                t.getParameter(t.VERSION).indexOf("WebGL 2") >= 0),
              this._isWebGL2 ||
                (this._instancedArraysExtension = this._gl.getExtension(
                  "ANGLE_instanced_arrays"
                ));
          }
          return (
            l(e, [
              {
                key: "resetGLContext",
                value: function () {
                  (this._framebufferId = null),
                    (this._renderTexture = null),
                    (this._vertexBuffer = void 0),
                    (this._indexBuffer = void 0),
                    (this._greyscaleShader = void 0);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.resetGLContext();
                },
              },
              {
                key: "uploadFrame",
                value: function (e, t, r, n) {
                  var a = this._gl,
                    i = z.get(a);
                  i.push();
                  var o = a.isEnabled(a.SCISSOR_TEST),
                    c = a.isEnabled(a.DEPTH_TEST),
                    s = a.isEnabled(a.BLEND),
                    _ = a.isEnabled(a.CULL_FACE),
                    u = a.isEnabled(a.STENCIL_TEST),
                    f = a.getParameter(a.ACTIVE_TEXTURE),
                    l = a.getParameter(a.UNPACK_FLIP_Y_WEBGL),
                    d = a.getParameter(a.CURRENT_PROGRAM);
                  a.activeTexture(a.TEXTURE0);
                  var p = a.getParameter(a.TEXTURE_BINDING_2D),
                    m = a.getParameter(a.FRAMEBUFFER_BINDING),
                    h = a.getParameter(a.ARRAY_BUFFER_BINDING),
                    b = a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING);
                  a.disable(a.SCISSOR_TEST),
                    a.disable(a.DEPTH_TEST),
                    a.disable(a.BLEND),
                    a.disable(a.CULL_FACE),
                    a.disable(a.STENCIL_TEST),
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1),
                    a.bindTexture(a.TEXTURE_2D, e);
                  var w = a.RGBA,
                    g = a.RGBA,
                    v = a.UNSIGNED_BYTE;
                  a.texImage2D(a.TEXTURE_2D, 0, w, g, v, t);
                  var y = 0,
                    E = 0;
                  "undefined" !== typeof HTMLVideoElement &&
                  t instanceof HTMLVideoElement
                    ? ((y = t.videoWidth), (E = t.videoHeight))
                    : ((y = t.width), (E = t.height)),
                    E > y && (E = [y, (y = E)][0]),
                    this._updateTransforms(r, n);
                  var A = this._getFramebuffer(
                      a,
                      O.dataWidth / 4,
                      O.dataHeight
                    ),
                    k = this._getVertexBuffer(a),
                    x = this._getIndexBuffer(a),
                    T = this._getGreyscaleShader(a),
                    R = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_SIZE
                    ),
                    L = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_TYPE
                    ),
                    F = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_NORMALIZED
                    ),
                    M = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_STRIDE
                    ),
                    I = a.getVertexAttribOffset(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_POINTER
                    ),
                    P = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_ENABLED
                    ),
                    S = a.getVertexAttrib(
                      T.aVertexPositionLoc,
                      a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
                    ),
                    B = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_SIZE
                    ),
                    D = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_TYPE
                    ),
                    C = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_NORMALIZED
                    ),
                    U = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_STRIDE
                    ),
                    V = a.getVertexAttribOffset(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_POINTER
                    ),
                    N = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
                    ),
                    G = a.getVertexAttrib(
                      T.aTextureCoordLoc,
                      a.VERTEX_ATTRIB_ARRAY_ENABLED
                    ),
                    W = 0,
                    H = 0;
                  this._isWebGL2
                    ? ((W = a.getVertexAttrib(
                        T.aVertexPositionLoc,
                        a.VERTEX_ATTRIB_ARRAY_DIVISOR
                      )),
                      (H = a.getVertexAttrib(
                        T.aTextureCoordLoc,
                        a.VERTEX_ATTRIB_ARRAY_DIVISOR
                      )),
                      a.vertexAttribDivisor(T.aVertexPositionLoc, 0),
                      a.vertexAttribDivisor(T.aTextureCoordLoc, 0))
                    : this._instancedArraysExtension &&
                      ((W = a.getVertexAttrib(
                        T.aVertexPositionLoc,
                        this._instancedArraysExtension
                          .VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE
                      )),
                      (H = a.getVertexAttrib(
                        T.aTextureCoordLoc,
                        this._instancedArraysExtension
                          .VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE
                      )),
                      this._instancedArraysExtension.vertexAttribDivisorANGLE(
                        T.aVertexPositionLoc,
                        0
                      ),
                      this._instancedArraysExtension.vertexAttribDivisorANGLE(
                        T.aTextureCoordLoc,
                        0
                      )),
                    a.bindFramebuffer(a.FRAMEBUFFER, A),
                    a.viewport(
                      0,
                      0,
                      this._framebufferWidth,
                      this._framebufferHeight
                    ),
                    a.clear(a.COLOR_BUFFER_BIT),
                    a.bindBuffer(a.ARRAY_BUFFER, k),
                    a.vertexAttribPointer(
                      T.aVertexPositionLoc,
                      2,
                      a.FLOAT,
                      !1,
                      16,
                      0
                    ),
                    a.enableVertexAttribArray(T.aVertexPositionLoc),
                    a.vertexAttribPointer(
                      T.aTextureCoordLoc,
                      2,
                      a.FLOAT,
                      !1,
                      16,
                      8
                    ),
                    a.enableVertexAttribArray(T.aTextureCoordLoc),
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, x),
                    a.useProgram(T.program),
                    a.uniform1f(T.uTexWidthLoc, O.dataWidth),
                    a.uniformMatrix4fv(
                      T.uUvTransformLoc,
                      !1,
                      this._cameraUvTransform
                    ),
                    a.activeTexture(a.TEXTURE0),
                    a.bindTexture(a.TEXTURE_2D, e),
                    a.uniform1i(T.uSamplerLoc, 0),
                    a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0),
                    a.bindBuffer(a.ARRAY_BUFFER, S),
                    a.vertexAttribPointer(T.aVertexPositionLoc, R, L, F, M, I),
                    a.bindBuffer(a.ARRAY_BUFFER, N),
                    a.vertexAttribPointer(T.aTextureCoordLoc, B, D, C, U, V),
                    a.bindBuffer(a.ARRAY_BUFFER, h),
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, b),
                    P || a.disableVertexAttribArray(T.aVertexPositionLoc),
                    G || a.disableVertexAttribArray(T.aTextureCoordLoc),
                    this._isWebGL2
                      ? (a.vertexAttribDivisor(T.aVertexPositionLoc, W),
                        a.vertexAttribDivisor(T.aTextureCoordLoc, H))
                      : this._instancedArraysExtension &&
                        (this._instancedArraysExtension.vertexAttribDivisorANGLE(
                          T.aVertexPositionLoc,
                          W
                        ),
                        this._instancedArraysExtension.vertexAttribDivisorANGLE(
                          T.aTextureCoordLoc,
                          H
                        )),
                    a.bindFramebuffer(a.FRAMEBUFFER, m),
                    a.useProgram(d),
                    a.bindTexture(a.TEXTURE_2D, p),
                    a.activeTexture(f),
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, l),
                    i.pop(),
                    s && a.enable(a.BLEND),
                    _ && a.enable(a.CULL_FACE),
                    c && a.enable(a.DEPTH_TEST),
                    o && a.enable(a.SCISSOR_TEST),
                    u && a.enable(a.STENCIL_TEST);
                },
              },
              {
                key: "readFrame",
                value: function (e, t) {
                  var r = this._gl,
                    n = new Uint8Array(t),
                    a = r.getParameter(r.FRAMEBUFFER_BINDING),
                    i = this._getFramebuffer(r, O.dataWidth / 4, O.dataHeight);
                  return (
                    r.bindFramebuffer(r.FRAMEBUFFER, i),
                    r.readPixels(
                      0,
                      0,
                      this._framebufferWidth,
                      this._framebufferHeight,
                      r.RGBA,
                      r.UNSIGNED_BYTE,
                      n
                    ),
                    r.bindFramebuffer(r.FRAMEBUFFER, a),
                    {
                      uvTransform: this._cameraUvTransform,
                      data: t,
                      texture: e,
                      dataWidth: O.dataWidth,
                      dataHeight: O.dataHeight,
                      userFacing: this._computedFrontCameraRotation,
                    }
                  );
                },
              },
              {
                key: "_updateTransforms",
                value: function (e, t) {
                  (e == this._computedTransformRotation &&
                    t == this._computedFrontCameraRotation) ||
                    ((this._computedTransformRotation = e),
                    (this._computedFrontCameraRotation = t),
                    (this._cameraUvTransform = this._getCameraUvTransform()));
                },
              },
              {
                key: "_getCameraUvTransform",
                value: function () {
                  switch (this._computedTransformRotation) {
                    case 270:
                      return new Float32Array([
                        0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                      ]);
                    case 180:
                      return new Float32Array([
                        -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
                      ]);
                    case 90:
                      return new Float32Array([
                        0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
                      ]);
                  }
                  return new Float32Array([
                    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                  ]);
                },
              },
              {
                key: "_getFramebuffer",
                value: function (e, t, r) {
                  if (
                    this._framebufferWidth === t &&
                    this._framebufferHeight === r &&
                    this._framebufferId
                  )
                    return this._framebufferId;
                  if (
                    (this._framebufferId &&
                      (e.deleteFramebuffer(this._framebufferId),
                      (this._framebufferId = null)),
                    this._renderTexture &&
                      (e.deleteTexture(this._renderTexture),
                      (this._renderTexture = null)),
                    (this._framebufferId = e.createFramebuffer()),
                    !this._framebufferId)
                  )
                    throw new Error("Unable to create framebuffer");
                  if (
                    (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId),
                    (this._renderTexture = e.createTexture()),
                    !this._renderTexture)
                  )
                    throw new Error("Unable to create render texture");
                  e.activeTexture(e.TEXTURE0);
                  var n = e.getParameter(e.TEXTURE_BINDING_2D);
                  e.bindTexture(e.TEXTURE_2D, this._renderTexture),
                    e.texImage2D(
                      e.TEXTURE_2D,
                      0,
                      e.RGBA,
                      t,
                      r,
                      0,
                      e.RGBA,
                      e.UNSIGNED_BYTE,
                      null
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameterf(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.LINEAR
                    ),
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0,
                      e.TEXTURE_2D,
                      this._renderTexture,
                      0
                    );
                  var a = e.checkFramebufferStatus(e.FRAMEBUFFER);
                  if (a !== e.FRAMEBUFFER_COMPLETE)
                    throw new Error(
                      "Framebuffer not complete: " + a.toString()
                    );
                  return (
                    (this._framebufferWidth = t),
                    (this._framebufferHeight = r),
                    e.bindTexture(e.TEXTURE_2D, n),
                    e.bindFramebuffer(e.FRAMEBUFFER, null),
                    this._framebufferId
                  );
                },
              },
              {
                key: "_getVertexBuffer",
                value: function (e) {
                  if (this._vertexBuffer) return this._vertexBuffer;
                  if (
                    ((this._vertexBuffer = e.createBuffer()),
                    !this._vertexBuffer)
                  )
                    throw new Error("Unable to create vertex buffer");
                  e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
                  var t = new Float32Array([
                    -1, -1, 0, 0, -1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 0,
                  ]);
                  return (
                    e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW),
                    this._vertexBuffer
                  );
                },
              },
              {
                key: "_getIndexBuffer",
                value: function (e) {
                  if (this._indexBuffer) return this._indexBuffer;
                  if (
                    ((this._indexBuffer = e.createBuffer()), !this._indexBuffer)
                  )
                    throw new Error("Unable to create index buffer");
                  e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
                  var t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                  return (
                    e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW),
                    this._indexBuffer
                  );
                },
              },
              {
                key: "_getGreyscaleShader",
                value: function (e) {
                  if (this._greyscaleShader) return this._greyscaleShader;
                  var t = e.createProgram();
                  if (!t) throw new Error("Unable to create program");
                  var r = D(e, e.VERTEX_SHADER, W),
                    n = D(e, e.FRAGMENT_SHADER, H);
                  e.attachShader(t, r),
                    e.attachShader(t, n),
                    (function (e, t) {
                      e.linkProgram(t);
                      var r = e.getProgramInfoLog(t);
                      if (r && r.trim().length > 0)
                        throw new Error("Unable to link: " + r);
                    })(e, t);
                  var a = e.getUniformLocation(t, "uTexWidth");
                  if (!a)
                    throw new Error("Unable to get uniform location uTexWidth");
                  var i = e.getUniformLocation(t, "uUvTransform");
                  if (!i)
                    throw new Error(
                      "Unable to get uniform location uUvTransform"
                    );
                  var o = e.getUniformLocation(t, "uSampler");
                  if (!o)
                    throw new Error("Unable to get uniform location uSampler");
                  return (
                    (this._greyscaleShader = {
                      program: t,
                      aVertexPositionLoc: e.getAttribLocation(
                        t,
                        "aVertexPosition"
                      ),
                      aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
                      uTexWidthLoc: a,
                      uUvTransformLoc: i,
                      uSamplerLoc: o,
                    }),
                    this._greyscaleShader
                  );
                },
              },
            ]),
            e
          );
        })(),
        W =
          "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
        H =
          "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n";
      function Y(e, t, r, n) {
        var a = _(
            (function () {
              if (!V || !N) {
                var e = new OffscreenCanvas(1, 1);
                if (!(N = e.getContext("webgl")))
                  throw new Error("Unable to get offscreen GL context");
                V = new G(N);
              }
              return [V, N];
            })(),
            2
          ),
          i = a[0],
          o = a[1];
        if (
          (U ||
            ((U = o.createTexture()),
            o.bindTexture(o.TEXTURE_2D, U),
            o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE),
            o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE),
            o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR)),
          U)
        ) {
          (!C || C.byteLength < O.dataWidth * O.dataHeight) &&
            (console.log("Generating pixel buffer", O.dataWidth * O.dataHeight),
            (C = new ArrayBuffer(O.dataWidth * O.dataHeight))),
            i.uploadFrame(U, e.i, e.r, e.userFacing);
          var c = i.readFrame(U, C),
            s = {
              t: "imageBitmapS2C",
              dataWidth: c.dataWidth,
              dataHeight: c.dataHeight,
              frame: e.i,
              userFacing: c.userFacing,
              uvTransform: c.uvTransform || v(),
              tokenId: e.tokenId,
              p: e.p,
            };
          n.postOutgoingMessage(s, [e.i]);
          var u = r._pipeline_by_instance.get(e.p);
          u &&
            (t.pipeline_camera_frame_submit(
              u,
              C,
              c.dataWidth,
              c.dataHeight,
              e.tokenId,
              e.cameraToDevice,
              e.cameraModel,
              c.userFacing
            ),
            t.pipeline_frame_update(u),
            r.exploreState());
        }
      }
      var X = function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function c(e) {
              try {
                s(n.throw(e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, c);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        q = new w(),
        j = 0;
      var Z = 0,
        K = 0,
        J = 1,
        $ = v(),
        Q = new Float32Array([300, 300, 160, 120, 0, 0]);
      function ee(e, t, r, n, a, o, c) {
        return X(
          this,
          void 0,
          void 0,
          i().mark(function s() {
            var _, u, f, l, d, p, m, h, b, w, g, v, E, A;
            return i().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (i.next = 2), r.getReader();
                  case 2:
                    _ = i.sent;
                  case 3:
                    return (i.next = 6), _.read();
                  case 6:
                    if (!(u = i.sent).done) {
                      i.next = 10;
                      break;
                    }
                    return console.log("Stream done"), i.abrupt("return");
                  case 10:
                    return (
                      (f = u.value),
                      (l = f.allocationSize()) > K &&
                        (Z > 0 && e._free(Z), (Z = e._malloc(l)), (K = l)),
                      (i.next = 15),
                      f.copyTo(e.HEAPU8.subarray(Z, Z + K))
                    );
                  case 15:
                    (d = J),
                      J++,
                      (p = f.visibleRect.width),
                      (m = f.visibleRect.height),
                      (h = void 0),
                      (b = p),
                      (w = m),
                      (i.t0 = j),
                      (i.next =
                        270 === i.t0
                          ? 25
                          : 180 === i.t0
                          ? 29
                          : 90 === i.t0
                          ? 31
                          : 35);
                    break;
                  case 25:
                    return (
                      (h = new Float32Array([
                        0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                      ])),
                      (b = m),
                      (w = p),
                      i.abrupt("break", 37)
                    );
                  case 29:
                    return (
                      (h = new Float32Array([
                        -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
                      ])),
                      i.abrupt("break", 37)
                    );
                  case 31:
                    return (
                      (h = new Float32Array([
                        0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
                      ])),
                      (b = m),
                      (w = p),
                      i.abrupt("break", 37)
                    );
                  case 35:
                    return (
                      (h = new Float32Array([
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                      ])),
                      i.abrupt("break", 37)
                    );
                  case 37:
                    (g = f.clone()),
                      a
                        ? ((k = [-1, 1, -1]),
                          ((s = $)[0] = k[0]),
                          (s[1] = 0),
                          (s[2] = 0),
                          (s[3] = 0),
                          (s[4] = 0),
                          (s[5] = k[1]),
                          (s[6] = 0),
                          (s[7] = 0),
                          (s[8] = 0),
                          (s[9] = 0),
                          (s[10] = k[2]),
                          (s[11] = 0),
                          (s[12] = 0),
                          (s[13] = 0),
                          (s[14] = 0),
                          (s[15] = 1))
                        : y($),
                      (v = (300 * O.dataWidth) / 320),
                      (Q[0] = v),
                      (Q[1] = v),
                      (Q[2] = 0.5 * O.dataWidth),
                      (Q[3] = 0.5 * O.dataHeight),
                      (E = {
                        token: d,
                        d: g,
                        p: n,
                        t: "videoFrameS2C",
                        userFacing: a,
                        uvTransform: h,
                        w: b,
                        h: w,
                        cameraToDevice: $,
                        cameraModel: Q,
                        source: c,
                      }),
                      q.postOutgoingMessage(E, [E.d, E.uvTransform.buffer]),
                      (A = o._pipeline_by_instance.get(n)) &&
                        (t.pipeline_camera_frame_submit_raw_pointer(
                          A,
                          Z,
                          l,
                          te(f.format),
                          p,
                          m,
                          d,
                          $,
                          j,
                          Q,
                          a
                        ),
                        t.pipeline_frame_update(A),
                        o.exploreState()),
                      f.close(),
                      (i.next = 3);
                    break;
                  case 51:
                  case "end":
                    return i.stop();
                }
              var s, k;
            }, s);
          })
        );
      }
      function te(e) {
        switch (e) {
          case "I420":
            return T.FRAME_PIXEL_FORMAT_I420;
          case "I420A":
            return T.FRAME_PIXEL_FORMAT_I420A;
          case "I422":
            return T.FRAME_PIXEL_FORMAT_I422;
          case "I444":
            return T.FRAME_PIXEL_FORMAT_I444;
          case "NV12":
            return T.FRAME_PIXEL_FORMAT_NV12;
          case "RGBA":
          case "RGBX":
            return T.FRAME_PIXEL_FORMAT_RGBA;
          case "BGRA":
          case "BGRX":
            return T.FRAME_PIXEL_FORMAT_BGRA;
        }
        return T.FRAME_PIXEL_FORMAT_Y;
      }
      var re = self;
      q.onOutgoingMessage.bind(function () {
        var e,
          t = n(q.getOutgoingMessages());
        try {
          for (t.s(); !(e = t.n()).done; ) {
            var r = e.value;
            re.postMessage(r.msg, r.transferables);
          }
        } catch (a) {
          t.e(a);
        } finally {
          t.f();
        }
      });
      re.addEventListener("message", function e(t) {
        t &&
          t.data &&
          "wasm" === t.data.t &&
          (!(function (e) {
            X(
              this,
              void 0,
              void 0,
              i().mark(function t() {
                var r;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        r = c({
                          locateFile: function (t, r) {
                            return t.endsWith("zappar-cv.wasm") ? e : r + t;
                          },
                          onRuntimeInitialized: function () {
                            var e = s(r),
                              t = new m(e, function (e, t) {
                                q.postOutgoingMessage(
                                  { p: e, t: "zappar", d: t },
                                  [t]
                                );
                              });
                            q.postOutgoingMessage("loaded", []),
                              q.onIncomingMessage.bind(function (n) {
                                var a;
                                switch (n.t) {
                                  case "zappar":
                                    t.processBuffer(n.d),
                                      q.postOutgoingMessage(
                                        { t: "buf", d: n.d },
                                        [n.d]
                                      );
                                    break;
                                  case "buf":
                                    null ===
                                      (a = t.serializersByPipelineId.get(
                                        n.p
                                      )) ||
                                      void 0 === a ||
                                      a.bufferReturn(n.d);
                                    break;
                                  case "cameraFrameC2S":
                                    var i,
                                      o = n,
                                      c = t._pipeline_by_instance.get(o.p);
                                    c &&
                                      (e.pipeline_camera_frame_submit(
                                        c,
                                        o.d,
                                        o.width,
                                        o.height,
                                        o.token,
                                        o.c2d,
                                        o.cm,
                                        o.userFacing
                                      ),
                                      e.pipeline_frame_update(c),
                                      (i =
                                        e.pipeline_camera_frame_device_attitude(
                                          c
                                        )),
                                      t.exploreState());
                                    var s = {
                                      token: o.token,
                                      d: o.d,
                                      p: o.p,
                                      t: "cameraFrameRecycleS2C",
                                      att: i,
                                    };
                                    q.postOutgoingMessage(s, [o.d]);
                                    break;
                                  case "streamC2S":
                                    var _ = n;
                                    ee(
                                      r,
                                      e,
                                      _.s,
                                      _.p,
                                      _.userFacing,
                                      t,
                                      _.source
                                    );
                                    break;
                                  case "cameraToScreenC2S":
                                    j = n.r;
                                    break;
                                  case "imageBitmapC2S":
                                    Y(n, e, t, q);
                                }
                              });
                          },
                        });
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          })(
            location.href.startsWith("blob")
              ? t.data.url
              : new URL(r(1689), r.b).toString()
          ),
          re.removeEventListener("message", e));
      }),
        re.addEventListener("message", function (e) {
          q.postIncomingMessage(e.data);
        });
    })();
})();
//# sourceMappingURL=672.a701f267.chunk.js.map
