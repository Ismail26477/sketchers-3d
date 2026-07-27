globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/videos/IMG_8120.MOV": {
		"type": "video/quicktime",
		"etag": "\"86-pIvPWbwL91+SNTYS1Hx0lIy39Tw\"",
		"mtime": "2026-07-27T20:07:11.278Z",
		"size": 134,
		"path": "../public/videos/IMG_8120.MOV"
	},
	"/assets/6-CcdYftmn.jpeg": {
		"type": "image/jpeg",
		"etag": "\"229b3a-KxT7ooGqLjdTe7CNoYzJ+LG4QL8\"",
		"mtime": "2026-07-27T20:07:10.250Z",
		"size": 2267962,
		"path": "../public/assets/6-CcdYftmn.jpeg"
	},
	"/assets/63-THibNRU2.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2efc29-XpoCPllurjj6arlTAI5ONNopHUw\"",
		"mtime": "2026-07-27T20:07:10.262Z",
		"size": 3079209,
		"path": "../public/assets/63-THibNRU2.jpeg"
	},
	"/assets/5-D5edLpYf.jpeg": {
		"type": "image/jpeg",
		"etag": "\"36e77b-qMUtH0jCUGZlbY/q69uIoHWZcWs\"",
		"mtime": "2026-07-27T20:07:10.214Z",
		"size": 3598203,
		"path": "../public/assets/5-D5edLpYf.jpeg"
	},
	"/assets/2-BqcbFx4D.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3ed4ee-O0bIpkO4JvmCM0in6ra3EbpYfss\"",
		"mtime": "2026-07-27T20:07:10.198Z",
		"size": 4117742,
		"path": "../public/assets/2-BqcbFx4D.jpeg"
	},
	"/assets/4-Dl9BK_M0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3ede08-dqCgq1WCr0VclStAT52mOkQFEYA\"",
		"mtime": "2026-07-27T20:07:10.210Z",
		"size": 4120072,
		"path": "../public/assets/4-Dl9BK_M0.jpeg"
	},
	"/assets/12-YOXyBkfN.jpeg": {
		"type": "image/jpeg",
		"etag": "\"49b15a-ewgzOcmLSZUBplcgXCFUzESw7qE\"",
		"mtime": "2026-07-27T20:07:10.158Z",
		"size": 4829530,
		"path": "../public/assets/12-YOXyBkfN.jpeg"
	},
	"/assets/61-OGQ6HQpS.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4bb18a-Zww7i1k+3TAqAyzrvR0YBgpnSIs\"",
		"mtime": "2026-07-27T20:07:10.254Z",
		"size": 4960650,
		"path": "../public/assets/61-OGQ6HQpS.jpeg"
	},
	"/assets/55-M7CdAQ0c.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5d7b57-UxLT/MME2/be9hut4RvVtAtGglA\"",
		"mtime": "2026-07-27T20:07:10.230Z",
		"size": 6126423,
		"path": "../public/assets/55-M7CdAQ0c.jpeg"
	},
	"/assets/59-B-te7qfd.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55a060-zahdqhuemgb+n7lzwroFprFJiRg\"",
		"mtime": "2026-07-27T20:07:10.246Z",
		"size": 5611616,
		"path": "../public/assets/59-B-te7qfd.jpeg"
	},
	"/assets/7-BLckSVK7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"47d1de-gCwa8RGLSOW6ZpGXz2PQMdGpw3k\"",
		"mtime": "2026-07-27T20:07:10.270Z",
		"size": 4706782,
		"path": "../public/assets/7-BLckSVK7.jpeg"
	},
	"/assets/57-Bv87CYVb.jpeg": {
		"type": "image/jpeg",
		"etag": "\"671ee4-l/uwPirqTvIDBxCHnQ5OffJUCvs\"",
		"mtime": "2026-07-27T20:07:10.238Z",
		"size": 6758116,
		"path": "../public/assets/57-Bv87CYVb.jpeg"
	},
	"/assets/58-ozY0Ajqx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"608b92-MeA+rUzkeEV433lwvtOJeS/FUYI\"",
		"mtime": "2026-07-27T20:07:10.242Z",
		"size": 6327186,
		"path": "../public/assets/58-ozY0Ajqx.jpeg"
	},
	"/assets/79-Xpwiw-wg.png": {
		"type": "image/png",
		"etag": "\"1e4f6a-llMdzFVSsUFDTu076cp21HJXss4\"",
		"mtime": "2026-07-27T20:07:10.302Z",
		"size": 1986410,
		"path": "../public/assets/79-Xpwiw-wg.png"
	},
	"/assets/1-DkUQTmQs.jpeg": {
		"type": "image/jpeg",
		"etag": "\"77e1cb-ZQAHwyGKjC8yLWpwBP44rNL0Acw\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 7856587,
		"path": "../public/assets/1-DkUQTmQs.jpeg"
	},
	"/assets/10-Dl7-6UYR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7552a9-iYCQ3HflaSsxHmi+de1PwjJoQUg\"",
		"mtime": "2026-07-27T20:07:10.154Z",
		"size": 7688873,
		"path": "../public/assets/10-Dl7-6UYR.jpeg"
	},
	"/assets/72-CfT4TJnl.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6c63c4-wJcVILC7YT5WOEnVBamjQoU+ugc\"",
		"mtime": "2026-07-27T20:07:10.282Z",
		"size": 7103428,
		"path": "../public/assets/72-CfT4TJnl.jpeg"
	},
	"/assets/71-BejQyqrR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"77dae1-2njBYxPug3SCSnNMu7sKQAQe30s\"",
		"mtime": "2026-07-27T20:07:10.274Z",
		"size": 7854817,
		"path": "../public/assets/71-BejQyqrR.jpeg"
	},
	"/assets/76-ZahNSG8R.jpeg": {
		"type": "image/jpeg",
		"etag": "\"48c469-2Qbn0yoCmZEkBEBhjRDetago750\"",
		"mtime": "2026-07-27T20:07:10.294Z",
		"size": 4768873,
		"path": "../public/assets/76-ZahNSG8R.jpeg"
	},
	"/assets/77-BbXr_BXf.jpeg": {
		"type": "image/jpeg",
		"etag": "\"383eff-NjqfGmtaJVBxnODIHlsLzGq0sMI\"",
		"mtime": "2026-07-27T20:07:10.298Z",
		"size": 3686143,
		"path": "../public/assets/77-BbXr_BXf.jpeg"
	},
	"/assets/Ambika-D12WrTeF.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1834-5GqGl3mwhzP9GZlFzICPTHN1RTE\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 6196,
		"path": "../public/assets/Ambika-D12WrTeF.jpeg"
	},
	"/assets/Atharva-Ce-OeblP.jpeg": {
		"type": "image/jpeg",
		"etag": "\"105f-STg6dZGaMDAQHM5iBUEeJ3wFnVU\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 4191,
		"path": "../public/assets/Atharva-Ce-OeblP.jpeg"
	},
	"/assets/Chattarpur-Cm5RNYsx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1983-dfy0MVagyL2T8v3HIuVtWm0EVhA\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 6531,
		"path": "../public/assets/Chattarpur-Cm5RNYsx.jpeg"
	},
	"/assets/81-DGcj3caY.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2515e2-x/IdE1oMUT0UgQ8yY4HKhSxtjy8\"",
		"mtime": "2026-07-27T20:07:10.314Z",
		"size": 2430434,
		"path": "../public/assets/81-DGcj3caY.jpeg"
	},
	"/assets/62-G3b2Yf0t.jpeg": {
		"type": "image/jpeg",
		"etag": "\"66cf40-nOtu6mDkwR6PS5zGIdbEBFTJZ2w\"",
		"mtime": "2026-07-27T20:07:10.258Z",
		"size": 6737728,
		"path": "../public/assets/62-G3b2Yf0t.jpeg"
	},
	"/assets/Emaarat-CBwGXLD1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"10a3-fVY5gbzlhAZ62JIksuu/XsRme6E\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 4259,
		"path": "../public/assets/Emaarat-CBwGXLD1.jpeg"
	},
	"/assets/Footer-CP59xa-y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e5-eQernzXgoB86BTBkG+2XK7c3oQM\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 5349,
		"path": "../public/assets/Footer-CP59xa-y.js"
	},
	"/assets/Green-DA2LhDxW.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1210-LpJAUTCKByZW8DiAYjFsmeRL3JY\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 4624,
		"path": "../public/assets/Green-DA2LhDxW.jpeg"
	},
	"/assets/LSSB-C_9jkvDx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"218c-xHBsGci+/XAduZGlTJl8X0zO/8g\"",
		"mtime": "2026-07-27T20:07:10.334Z",
		"size": 8588,
		"path": "../public/assets/LSSB-C_9jkvDx.jpeg"
	},
	"/assets/78-BEhH3Fsi.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4ceb4f-4laxjC6C90mY/r1CAVlCgLgztqM\"",
		"mtime": "2026-07-27T20:07:10.298Z",
		"size": 5040975,
		"path": "../public/assets/78-BEhH3Fsi.jpeg"
	},
	"/assets/PageHero-r3INgjrT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"309-a5cDd1eCUVpWgJNWf47z9SbrsOg\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 777,
		"path": "../public/assets/PageHero-r3INgjrT.js"
	},
	"/assets/Pyramid-BXron_h0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"115c-ceWop6G5cISR6Tovw04QRU9Kzds\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 4444,
		"path": "../public/assets/Pyramid-BXron_h0.jpeg"
	},
	"/assets/ServicePage-DU4NRaN5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"439-Eh/V9AsjGRC/PWuFQoSo30Jg1Yw\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 1081,
		"path": "../public/assets/ServicePage-DU4NRaN5.js"
	},
	"/assets/73-C-ywIVLP.jpeg": {
		"type": "image/jpeg",
		"etag": "\"97ee63-zHzV26Jy480Mka9/hZg9nStEXM8\"",
		"mtime": "2026-07-27T20:07:10.286Z",
		"size": 9956963,
		"path": "../public/assets/73-C-ywIVLP.jpeg"
	},
	"/assets/TheFirstFerry-CzdCMU7s.jpeg": {
		"type": "image/jpeg",
		"etag": "\"182f-dLSVGhgqOSme9b82ClM7D5SGAVg\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 6191,
		"path": "../public/assets/TheFirstFerry-CzdCMU7s.jpeg"
	},
	"/assets/Vatsalya-CQmUDDQ0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2840-TZWha6SHt8Aq89sTf5z3z/65bcY\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 10304,
		"path": "../public/assets/Vatsalya-CQmUDDQ0.jpeg"
	},
	"/assets/Vistaar-BWN_Q_pK.jpeg": {
		"type": "image/jpeg",
		"etag": "\"216a-B1fMxeZuyS+35H6q2WQpW2FA0kk\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 8554,
		"path": "../public/assets/Vistaar-BWN_Q_pK.jpeg"
	},
	"/assets/about-EBzrNoH3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd2-0AGdlSEfned+1qw/2pfYRbap85s\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 3026,
		"path": "../public/assets/about-EBzrNoH3.js"
	},
	"/assets/case-studies-D2IHeTLm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a64-WmySzLLf/yxJ+VV1q19ZGykZsn8\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 2660,
		"path": "../public/assets/case-studies-D2IHeTLm.js"
	},
	"/assets/contact-tRjao1cB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1186-So+GkmEQxuHeEIFSjt/7kfuTFCo\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 4486,
		"path": "../public/assets/contact-tRjao1cB.js"
	},
	"/assets/69-DL0ksoV9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"9f74f5-vovbqUg/j3ucPDK0yRJ1/aKBsCk\"",
		"mtime": "2026-07-27T20:07:10.262Z",
		"size": 10450165,
		"path": "../public/assets/69-DL0ksoV9.jpeg"
	},
	"/assets/g1-OmgqF9nz.jpg": {
		"type": "image/jpeg",
		"etag": "\"324be-sEhD6Mud24zgpVbtCVB+6PmCj+o\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 206014,
		"path": "../public/assets/g1-OmgqF9nz.jpg"
	},
	"/assets/g10-Clk-DQar.jpg": {
		"type": "image/jpeg",
		"etag": "\"780d0-OofSFdr9EzqT0ulZ+WPDWiWGPBo\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 491728,
		"path": "../public/assets/g10-Clk-DQar.jpg"
	},
	"/assets/g11-1SoqB0mj.jpg": {
		"type": "image/jpeg",
		"etag": "\"24469-qe7wqFnr9qNTxdUMN1CQ6LMkWig\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 148585,
		"path": "../public/assets/g11-1SoqB0mj.jpg"
	},
	"/assets/g12-CtjwusNm.jpg": {
		"type": "image/jpeg",
		"etag": "\"3fa60-tcJbGNzkgftFUoqgjangd0EbXVg\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 260704,
		"path": "../public/assets/g12-CtjwusNm.jpg"
	},
	"/assets/g13-Dc2PzsPs.jpg": {
		"type": "image/jpeg",
		"etag": "\"33031-LG5+JXz786XmL+nBWdmHD1lxv3o\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 208945,
		"path": "../public/assets/g13-Dc2PzsPs.jpg"
	},
	"/assets/g14-B0YfrxUS.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e4c4-aZakfEQJ3q+J7kMbiiJdEEQCJEo\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 189636,
		"path": "../public/assets/g14-B0YfrxUS.jpg"
	},
	"/assets/g15-ByBIRyiF.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b216-6zQs/+pNZEIuj91+CKWGDhJ0I3w\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 242198,
		"path": "../public/assets/g15-ByBIRyiF.jpg"
	},
	"/assets/g16-BpL1V4xO.jpg": {
		"type": "image/jpeg",
		"etag": "\"590ab-ZuuzhVnPV5OZEdCnx0eqRzhlM+0\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 364715,
		"path": "../public/assets/g16-BpL1V4xO.jpg"
	},
	"/assets/g17-v9D19oz_.jpg": {
		"type": "image/jpeg",
		"etag": "\"776e8-1/f2gJBT7TIvHjtEbGgmm6oE8T8\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 489192,
		"path": "../public/assets/g17-v9D19oz_.jpg"
	},
	"/assets/g18-mNig3gNV.jpg": {
		"type": "image/jpeg",
		"etag": "\"24356-BQbIJSrTxKe+WFb9dWAv2ltnBls\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 148310,
		"path": "../public/assets/g18-mNig3gNV.jpg"
	},
	"/assets/g19-bKna5TlX.jpg": {
		"type": "image/jpeg",
		"etag": "\"391c8-MKBbMWrosPQ2CHGOCWfwxyg13vk\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 233928,
		"path": "../public/assets/g19-bKna5TlX.jpg"
	},
	"/assets/g2-Cyxfg9YX.jpg": {
		"type": "image/jpeg",
		"etag": "\"36219-slnx4+HOK9SuGtzQb56PuPwBsYs\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 221721,
		"path": "../public/assets/g2-Cyxfg9YX.jpg"
	},
	"/assets/g20-BL6GChEB.jpg": {
		"type": "image/jpeg",
		"etag": "\"26dc2-F0dXZPebM6Kik9XFaY7u0jrVZig\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 159170,
		"path": "../public/assets/g20-BL6GChEB.jpg"
	},
	"/assets/80-BnmzktIS.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6d5e11-rh/diT14dx4tW9Wsx8ZyXrJCGxo\"",
		"mtime": "2026-07-27T20:07:10.310Z",
		"size": 7167505,
		"path": "../public/assets/80-BnmzktIS.jpeg"
	},
	"/assets/g3-BJvhCGEh.jpg": {
		"type": "image/jpeg",
		"etag": "\"30dc0-cSr5TdJlMowIucvjKVNrmEO7fDY\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 200128,
		"path": "../public/assets/g3-BJvhCGEh.jpg"
	},
	"/assets/3-Dt0ZPOwe.jpeg": {
		"type": "image/jpeg",
		"etag": "\"b2a935-6kusKEhCyVldsKvnqobx4ea+mgo\"",
		"mtime": "2026-07-27T20:07:10.202Z",
		"size": 11708725,
		"path": "../public/assets/3-Dt0ZPOwe.jpeg"
	},
	"/assets/g4-DGT69Ca-.jpg": {
		"type": "image/jpeg",
		"etag": "\"44682-8ncN11ioRaJpbrldhRs1LbtB3PE\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 280194,
		"path": "../public/assets/g4-DGT69Ca-.jpg"
	},
	"/assets/g5-X1nKA7e1.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d423-bcdHVKwpLJaS/XoFQUX7R7tjSZY\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 316451,
		"path": "../public/assets/g5-X1nKA7e1.jpg"
	},
	"/assets/g7-CYOv3a87.jpg": {
		"type": "image/jpeg",
		"etag": "\"27d06-BHohUq/Dn8CHTbqAZOf0OQACQ3o\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 163078,
		"path": "../public/assets/g7-CYOv3a87.jpg"
	},
	"/assets/g6-z6Z3m8k6.jpg": {
		"type": "image/jpeg",
		"etag": "\"367aa-LfulNT/z9WHQ5Pxs+S5Cjrq01D4\"",
		"mtime": "2026-07-27T20:07:10.338Z",
		"size": 223146,
		"path": "../public/assets/g6-z6Z3m8k6.jpg"
	},
	"/assets/g8-Dt70kJPs.jpg": {
		"type": "image/jpeg",
		"etag": "\"24a20-8N16MclU499l29iTk1+4wcVsC4I\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 150048,
		"path": "../public/assets/g8-Dt70kJPs.jpg"
	},
	"/assets/g9-D3v38JX6.jpg": {
		"type": "image/jpeg",
		"etag": "\"24143-b9yXO+YxfuPULHPbaJg1RduKZc8\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 147779,
		"path": "../public/assets/g9-D3v38JX6.jpg"
	},
	"/assets/82-CgELhpU7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"57b2c5-dekAUEUOVC37KsMVTfKry576Tbw\"",
		"mtime": "2026-07-27T20:07:10.318Z",
		"size": 5747397,
		"path": "../public/assets/82-CgELhpU7.jpeg"
	},
	"/assets/index-BK1xi_LB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57178-nWIqKacZAsmua7459oduBEIX/EU\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 356728,
		"path": "../public/assets/index-BK1xi_LB.js"
	},
	"/assets/index-Du3uL6IP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14c8-+2TMGaAxSsLQ006SytZkhj/elO0\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 5320,
		"path": "../public/assets/index-Du3uL6IP.css"
	},
	"/assets/logo-Bsm-Tcrm.png": {
		"type": "image/png",
		"etag": "\"cc51-0I85Zbj+69RTKtZITDvfY4feBAM\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 52305,
		"path": "../public/assets/logo-Bsm-Tcrm.png"
	},
	"/assets/omsatyam-CzvalnVv.jpeg": {
		"type": "image/jpeg",
		"etag": "\"26df-HPOAflN9YEuNDyKjSsyF9bHI3kk\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 9951,
		"path": "../public/assets/omsatyam-CzvalnVv.jpeg"
	},
	"/assets/8-C8k7JNPD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"86495d-muZQKvpklvkDjNY19yqfxY+cfVo\"",
		"mtime": "2026-07-27T20:07:10.306Z",
		"size": 8800605,
		"path": "../public/assets/8-C8k7JNPD.jpeg"
	},
	"/assets/projects._slug-BWLKBF9v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2dc-hTLl7CWq4rQv6cT/lOqrUAmlnes\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 732,
		"path": "../public/assets/projects._slug-BWLKBF9v.js"
	},
	"/assets/projects._slug-WPTvTQ0M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109e-JPmP6ss3M+xp25j1Fd93c5/QZP0\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 4254,
		"path": "../public/assets/projects._slug-WPTvTQ0M.js"
	},
	"/assets/projects.index-Xz6pmd7M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-bO85rksDeXjx+mUBYJKLB5RIcMs\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 1195,
		"path": "../public/assets/projects.index-Xz6pmd7M.js"
	},
	"/assets/proxy-DfMlD7Tu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d83c-oKALeYxhR85SL3fMgnkayYwV18g\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 120892,
		"path": "../public/assets/proxy-DfMlD7Tu.js"
	},
	"/assets/routes-D1HDcRvH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d13-B1rp6hbudskGOiIfLeKpoxnjeLE\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 40211,
		"path": "../public/assets/routes-D1HDcRvH.js"
	},
	"/assets/services.interactive-scale-models-BOdJnD74.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-UJEAoB2dJG0J1/J0qwJknK9jcFQ\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 482,
		"path": "../public/assets/services.interactive-scale-models-BOdJnD74.js"
	},
	"/assets/services.inventory-selector-bCP11zUM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c7-3oKk5GsYoByhpGDtYQQg6HFTMF0\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 455,
		"path": "../public/assets/services.inventory-selector-bCP11zUM.js"
	},
	"/assets/services.neighborhood-map-BefJJVZl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-M5AqN8V6jpXrLR8Ks9W2ECiYcuk\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 488,
		"path": "../public/assets/services.neighborhood-map-BefJJVZl.js"
	},
	"/assets/13-B3hDwcwb.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d0214a-c/f9CCex14T+t5T+E+VG5oBzFlo\"",
		"mtime": "2026-07-27T20:07:10.162Z",
		"size": 13640010,
		"path": "../public/assets/13-B3hDwcwb.jpeg"
	},
	"/assets/services.still-render-C0rWbWV-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216-kxMt59VFbtUvcxJ5MMIm8/d0fWg\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 534,
		"path": "../public/assets/services.still-render-C0rWbWV-.js"
	},
	"/assets/services.video-walkthrough-DXd4kSGe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df-4MRIOhb1uR8z/VdgYBk3wAYL3rI\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 479,
		"path": "../public/assets/services.video-walkthrough-DXd4kSGe.js"
	},
	"/assets/services.vr-tours-DeLsq3O4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cb-rJ8LQSDEyRZXoCSvPNEPw4UVkaY\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 459,
		"path": "../public/assets/services.vr-tours-DeLsq3O4.js"
	},
	"/assets/sidde-DNAIe7LX.jpeg": {
		"type": "image/jpeg",
		"etag": "\"208c-NcgtSMBMREN3IzfXgw4mMiArWQ8\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 8332,
		"path": "../public/assets/sidde-DNAIe7LX.jpeg"
	},
	"/assets/shriniwasa-CXJeWf-B.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1872-In+U0GWEeG9mf325cdenrb76msQ\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 6258,
		"path": "../public/assets/shriniwasa-CXJeWf-B.jpeg"
	},
	"/assets/styles-BkWuV9d6.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15acd-RL6nMvKg1FvxNfpnZoOHrJ0fT+Y\"",
		"mtime": "2026-07-27T20:07:10.342Z",
		"size": 88781,
		"path": "../public/assets/styles-BkWuV9d6.css"
	},
	"/assets/terms-CCM1A4gv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef0-x50oEbfaxQfA2as0SIZ1Zl9QyMw\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 3824,
		"path": "../public/assets/terms-CCM1A4gv.js"
	},
	"/assets/14-B5lnSEb-.jpeg": {
		"type": "image/jpeg",
		"etag": "\"dd0949-uiiFRTSN+3vxozh65gHSFvLGBzs\"",
		"mtime": "2026-07-27T20:07:10.174Z",
		"size": 14485833,
		"path": "../public/assets/14-B5lnSEb-.jpeg"
	},
	"/assets/zoom-CoK-p7FT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"973a-lVnH1gu/OhrJ/vDlxF/C5GQpF4o\"",
		"mtime": "2026-07-27T20:07:10.146Z",
		"size": 38714,
		"path": "../public/assets/zoom-CoK-p7FT.js"
	},
	"/assets/9-CmV5Q9ED.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7109e6-gw+S0dTs335KarszQHIlnzAp20w\"",
		"mtime": "2026-07-27T20:07:10.330Z",
		"size": 7408102,
		"path": "../public/assets/9-CmV5Q9ED.jpeg"
	},
	"/assets/83-B2d2nAgX.jpeg": {
		"type": "image/jpeg",
		"etag": "\"af5d9e-qgnYHwSeRzm/9qDYpIf3YjxXrG8\"",
		"mtime": "2026-07-27T20:07:10.322Z",
		"size": 11492766,
		"path": "../public/assets/83-B2d2nAgX.jpeg"
	},
	"/assets/15-DrVMKozt.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1282806-F4hTMwkuLYdi5x60nL6KEW+AAic\"",
		"mtime": "2026-07-27T20:07:10.182Z",
		"size": 19408902,
		"path": "../public/assets/15-DrVMKozt.jpeg"
	},
	"/assets/53-CPYmitWc.jpeg": {
		"type": "image/jpeg",
		"etag": "\"155b251-4rBXDFkQrewbPoIPF32qENKTWrs\"",
		"mtime": "2026-07-27T20:07:10.214Z",
		"size": 22393425,
		"path": "../public/assets/53-CPYmitWc.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_UBRpSP = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_UBRpSP
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
