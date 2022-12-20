'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "b3053c9ce5bd17416773c87136e5f93f",
"/": "b3053c9ce5bd17416773c87136e5f93f",
"main.dart.js": "0647ebc9d21f5e072a9d7e570768dc62",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b334de1292fc8bf32a4b5d600a0d9c1c",
".git/config": "6baf32ec964df14843ba2bfa7d96f3f1",
".git/objects/59/a5972d4a05fc3a21888149c4faeb12daf15b20": "b5d0d44540a33a20399ffa9df2277282",
".git/objects/50/e68ab5872b0bc475b2aeb4384b3ea6379c8690": "4abb0a763962d0653566b617d1340460",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/3b/bb5bed6eecdd1316309b3bb3ae44ded97e25bc": "9e51663e660a650c893d8f80e596f175",
".git/objects/6f/eb719dbd2fd019d135cc326adc35c314dce55b": "cd685a3375fa16f38a153691705d7bb5",
".git/objects/03/4db168af6f36ba5162a374ecef2fd8f970712a": "a7e8823df2cd98d2daac77193c9c6753",
".git/objects/9b/c74a2d5fe12652f865de59411aa90db7501bdc": "82c15764a9b1c91aafe6e29b6f05cd16",
".git/objects/32/e70d4d610ea5322d6ec23b75b01658269b9b3e": "a9188e7b5f2c9050097f8d51ccb2491d",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3c/e2d7c09bd8dd3729808f30c558d299f9b52d08": "3319308e0eecdc04278e77df62297ad9",
".git/objects/56/e400f3a92578c4f792febc42090ebf57f220a4": "34aa31897071b7c894365c309621717d",
".git/objects/3d/cee3c3186b77cfdab8e394812897d9828cdbc8": "9b7cc2f65109d87455d086d7ebc67979",
".git/objects/3d/4659142d8a8d223669a6399f2d8d61d75f60a8": "acf7cb6568e7057205b10cea07f6616e",
".git/objects/58/4f4d0ac60929bf7558fdd00ef1ebbdb4cd639c": "b2fc48e980e1a87e726299f5b1f0d3f6",
".git/objects/67/772d74f3fa7914eb12956e2df127d000e886d6": "3d835056a951b6634d6bfcee0677fa8c",
".git/objects/5a/a2271081b762eaf601dba00b12f6c661d1b2c8": "eb035a452d611050e541db02d1fd0918",
".git/objects/05/09ce3b78c172d54e73a5a89c5dad6cbec907d3": "59edcba16ffa14b1aeeb3c8e61a99040",
".git/objects/9d/4d9bc0ac1f73a278b922ed88fadfd05069bd27": "5c5fe3409a39eb0d823518010e8be19f",
".git/objects/9d/e101fae7e4d7068b4f46bfe90be94c55685c0d": "e12575865f6d8b53d0cb29a26e96e342",
".git/objects/02/adb9e91518c331b5bbb46f38a0ae460d388a8c": "a02a7d42654f2b03e10487a98c9c4986",
".git/objects/bb/7d8a998a553b2ab3d8eaf3b9b817aef248d4ec": "bef4cc152bb3477f1640a20f0b4f220d",
".git/objects/da/b3524f26efd733c0b3b4c951a4b459c796a198": "72a039175f92014614d4622c40fc7cbf",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/03509e432ba906283e9bdf856a7c8d0cafa53f": "1e83fec7a7373a763378517c10d0f0fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/f4/5e385aa959067baeda2986da82e4cb84fe776a": "d2d6072422d623f9052d5df1c6e86307",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/cf/172d083b40922b63ef641d667bc5591b67c0f4": "5610915a08211a86f8d16f7701d83557",
".git/objects/cf/7b7243bba02c1b4cad368ed1bf4185aee36f49": "f33c4c1d75f88a5858d4a875fa578775",
".git/objects/e4/e9f1874e9368284f112623035fd4ed4d3d6792": "909d0381f39e2a012c1775be22310f3a",
".git/objects/fe/0f89a816df0f08cfd2c5a264d3f440e0d4553d": "48722066860c9f9f49c495a359b39add",
".git/objects/fb/f2ab2b9a942d8d662ce1c898f2d994bc79df62": "026ad6397bf83d285122bc87398b1a06",
".git/objects/11/cd4ba0be15ab2a316cda2ee5cc0536ab442269": "eb6333b56bc2953f77c90230ac7406db",
".git/objects/29/3f63f13a546d60ba4cb3cca73e6c4230a95b3b": "501c38684d0bea4f7ea1f3df88f0cfd9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/b507b8f5c0a546e2a5b32311553d285811b344": "23eed743f344c56a54c38b5b7600f4a5",
".git/objects/89/33b8652423dfc03ddeac5654149c67211cf21d": "b396a7d4b3fd6cd627b981929b9d61a4",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fc08b571cc9d10c2da19bb345cdb19de02850e": "fee278ffa27729b86499cdc0df11bedc",
".git/objects/44/0d13cc08fef9bd01e859b04ae0777af99c70eb": "689054f003a717d15f29a027d02e860d",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/e35f3e1e10b7a5e6e9235e6c3d4bde92304e39": "78ccb68ebc4e349372b9283d787ab47a",
".git/objects/88/267850d11b73946ef8fe77f5003990e4c7cd83": "ecbd92893ae0f5cba03498b243fbfa1c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/36/64acf0457f17b1c4504a884aed8caaffc77078": "c7c22a166bf5a8146d8bc7b3eecea33c",
".git/objects/5d/e3069f45c61fcb04b7c9ccd439817718629f7d": "9b0a794fb7163297d759aa8d61b4e253",
".git/objects/31/e600f9c76d54107f76bc3954783173e1f208e0": "9a7531f1eace5a64b0c515aecd60eb6e",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/54/8db071e4f8887758189583021336db3e25a037": "3c0f8605115d248b9218f8774fe96c8e",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/08/4364a8b1fd7876f4104ef620859ac2cf03394b": "c5fffb1491b1f4e12ad27a93bb7687ec",
".git/objects/01/a33e8d16d741b1f98eadfe5c61944f9ba16f7e": "1260013e08427a2d61982c8ec84ee1c9",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/5fb6f40f5e9e37c7891059636fe0d4f561b6cb": "ffa1934534506f3d4efda1a19c355abf",
".git/objects/bf/fcac5aa7038355ed7bf450f54790516554843b": "595272a03bb4fa5c6803d7c9395f8e75",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/dd/a739c44d2806b003af90cfa9ee6d392d91d67a": "de65977b9d0b8731bb2580104985c3e0",
".git/objects/a9/f1e32ef4e4c0558949d329dc0e592201b28096": "44552b21264b7d9f9ec2d241f56be9e2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/e7b600de383df151cbc2539bd4122243db1ef1": "d961825dbf7e7346540919cb05535704",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e9/c4b3f4398c697181dda8aac596833cb45437ff": "07592929a119b1ed27248e64d1f63c01",
".git/objects/f1/a782e356bd01d9e1043a23ca268b24f2488378": "ecd5e5b55e208dbc57ec189e3cc3ee5f",
".git/objects/e7/63758b7a5d728c2b4f5ca6a14d4577be4d1b89": "7e8c1723805c2fbc2c3c91d045c2de50",
".git/objects/cb/c2c2212688cc6d750ce3eace6443ea303efc76": "8c2738f4511a8bd97ef4adcb34398934",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/f8/aa417caeefc252df7ba69e15e058e9316cd90f": "70b0a9a4fa27aef7cceeebf202f77afc",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/401f8b2ccb1ca6b9c8cde972e718b81caf0c05": "9edc0a16a0c7d283c95aa7b42d64ecf6",
".git/objects/77/801e74f402fc4535e216e595b65c12c9470f2c": "fcff7f0851b8f82c8792bb6cd4576e69",
".git/objects/70/0e1eba46a3ffc3af94ed2473685e24dc0c608a": "2d2653918475f611a1d39aef4d3862bc",
".git/objects/85/b6dca515857c098c66834893047a26167f2257": "5040e918a3d0fe834cff797ce95a4569",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/76/178bfa39daf200c92f94e63b90455de03a6ec2": "3b230f4bb50c0c077b682a4158219ace",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/e0c2aa3c026f91f9f810c2a649f1d0d72ee6ab": "bbc775fa789550f827d38c38df3ea045",
".git/objects/8b/8351c8d6a973d24384661e2bf9032cd88d4e48": "92021b67fc220fe273dff235e7969b7f",
".git/objects/14/c9e896a4b6fe168d8c2ab2c195c2de407ce476": "41d8776e54c06704a5009e06591bf324",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "642e85f72cd11554a67615485839cfff",
".git/logs/refs/heads/main": "642e85f72cd11554a67615485839cfff",
".git/logs/refs/remotes/origin/main": "d8da173ad88d7f91628185fa17574da2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b0075a26ffce730344ed18e6c03151c0",
".git/refs/remotes/origin/main": "b0075a26ffce730344ed18e6c03151c0",
".git/index": "26d7574bfba8dd129bf4053c212e29b0",
".git/COMMIT_EDITMSG": "171a632d74974a00508f521e9a28f199",
"assets/AssetManifest.json": "e16b4d72ad943b2b5e0288592fed1710",
"assets/NOTICES": "9b674bcbd8544538560b654ad2d59884",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/shaders/ink_sparkle.frag": "15feb9b61d7e664ade281eb4f9116873",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/background.jpg": "b6be0e6c7e7f340344534c1727ba5da1",
"assets/assets/images/Emilie_Chen_CV.pdf": "7f7419082b0267e5ac3a350cb14a65ac",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
