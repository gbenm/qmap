# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/gbenm/qmap/compare/v1.0.0...v1.1.0) (2022-08-08)


### Features

* 🎸 Add On Result query node type ([f545b81](https://github.com/gbenm/qmap/commit/f545b815fab4ee6d08b449f23debe36e4ff1ad10))
* 🎸 add syntax to over result queries ([890d488](https://github.com/gbenm/qmap/commit/890d488675f4e1a5ac5fb3731c5efd47a3eef0dc))
* 🎸 allow ; and whitespaces as separators ([e9da3fb](https://github.com/gbenm/qmap/commit/e9da3fb5180ba234dbf6470a1b0c7464d7b9f71e))
* 🎸 allow change return type ([26acaac](https://github.com/gbenm/qmap/commit/26acaac5d2133a96242b196025693372e53e8ec0))
* 🎸 better typing ([08f3181](https://github.com/gbenm/qmap/commit/08f3181cd15aba0757eabab00f7344a4bb2b92b5))
* 🎸 can set default schema ([e6c21b0](https://github.com/gbenm/qmap/commit/e6c21b03dc0618dea480273e731fa74414736799))
* 🎸 can use global access ([a45596e](https://github.com/gbenm/qmap/commit/a45596ec7459291e3b65778586db49a1ae06ac48))
* 🎸 can use primitives ([1db1517](https://github.com/gbenm/qmap/commit/1db15171c173af17d609ef2caf06bd7fce541577))
* 🎸 create new object in json ([a78d967](https://github.com/gbenm/qmap/commit/a78d967a3635dfd2aaab3617c7984e5f7c06175c))
* 🎸 function can select and modify index ([8fb6f24](https://github.com/gbenm/qmap/commit/8fb6f240c5a106d78833b91ebf1913b16491a727))
* 🎸 generate global access ([7d9c323](https://github.com/gbenm/qmap/commit/7d9c323f569103f7fd9a0b9bacf74ccc76d4c320))
* 🎸 generate new object query ([94afa70](https://github.com/gbenm/qmap/commit/94afa700d27252000277881063d01ddacdbc58f3))
* 🎸 generate on result node ([2eb77f2](https://github.com/gbenm/qmap/commit/2eb77f28f73247fb019483cdc02411fe458cf8e3))
* 🎸 on result queries ([7f6b702](https://github.com/gbenm/qmap/commit/7f6b702117ebd6d96dbc8628f4f223a8fde98f7f))
* 🎸 OnResultQueryNode class ([433b82b](https://github.com/gbenm/qmap/commit/433b82b0340d3f0af169e016cdfa3f5ec26198a5))
* 🎸 optional dot ([bc70c9b](https://github.com/gbenm/qmap/commit/bc70c9b47bd4939109c64bf66d1f2f2a9faace4c))
* 🎸 remove undefined if the parent exists ([1925050](https://github.com/gbenm/qmap/commit/19250506532ef4e26fe59ee7832a092d0ecad33a))
* 🎸 select what arg is the array in by item function ([ca290aa](https://github.com/gbenm/qmap/commit/ca290aa0d98b67fcf3480342f26d46e77700e3bb))
* 🎸 select where apply the query ([64a3693](https://github.com/gbenm/qmap/commit/64a3693c9e737a93e219258e22e332ab5c4a9838))
* compiler cache ([#26](https://github.com/gbenm/qmap/issues/26)) ([c054972](https://github.com/gbenm/qmap/commit/c05497231033f046b71101a7bd4500907da50a4d))
* **compiler:** 🎸 primitives ([86034fd](https://github.com/gbenm/qmap/commit/86034fd1f29b5a0c2c10f8b7c8baa3863395aeb5))
* hide nodes ([#25](https://github.com/gbenm/qmap/issues/25)) ([1e656c8](https://github.com/gbenm/qmap/commit/1e656c8c43f972f2eed5d1c43acb3c857339cc5f))


### Bug Fixes

* 🐛 bad index ([457e134](https://github.com/gbenm/qmap/commit/457e134c4e6e48afe7f8292e8091e4858f8b64c2))
* 🐛 doesn't exclude if it was included explicitly ([d72724f](https://github.com/gbenm/qmap/commit/d72724f1307d09006f36d549f654d056db73da27))
* 🐛 don't pass array as function scoped result ([2fe8ba0](https://github.com/gbenm/qmap/commit/2fe8ba026ba388686e1f9f036c8f2cc5642a86b5))
* 🐛 reconize onresult as field ([eb9e1ff](https://github.com/gbenm/qmap/commit/eb9e1ffe57064436828eb7b6330b3d262a6e8096))
* 🐛 separator is necessary (spread and all) ([d407158](https://github.com/gbenm/qmap/commit/d40715877e191cbbf73c9d7f2f147569c7171ac8))
* 🐛 typo ([ed0d610](https://github.com/gbenm/qmap/commit/ed0d610c633c47cabcc2ffc25c0878692609192c))
* 🐛 typo ([5af7a02](https://github.com/gbenm/qmap/commit/5af7a0254f3e46bbae76afcfdcf7ea1b638da0d2))
* 🐛 undefined value in select ([fc32cbc](https://github.com/gbenm/qmap/commit/fc32cbc803840fe6c7be99550a89545dda7b5eee))


* 💍 improve spread test ([35810f2](https://github.com/gbenm/qmap/commit/35810f2cc354db19e4a3ca2f8f24c9d46dcadb6f))

## 1.0.0 (2022-08-08)


### Features

* 🎸 add errors ([6efc0ec](https://github.com/gbenm/qmap/commit/6efc0ecfcdceacf22bafb578f5495985fd89aa58))
* 🎸 add nullable types to compile ([3600f19](https://github.com/gbenm/qmap/commit/3600f19f8df9eb41ca042099160b4df3d9415221))
* 🎸 better support arrays ([4f90b1c](https://github.com/gbenm/qmap/commit/4f90b1c67bbe97e320be255ca5fbd4073b1f62da))
* 🎸 can ignore index generation ([0f58fbb](https://github.com/gbenm/qmap/commit/0f58fbbd4904da072a9174f7c43d420760e528ad))
* 🎸 comments ([1e22a07](https://github.com/gbenm/qmap/commit/1e22a0797c0af3a038b26e4e62f20499ac480821))
* 🎸 compile options ([82d048d](https://github.com/gbenm/qmap/commit/82d048d0887f066b2336db06fef2d1d775805fb1))
* 🎸 configuration can be undefined ([fdca719](https://github.com/gbenm/qmap/commit/fdca71937c705a0cd693ee7ae8398c025d6272db))
* 🎸 error list ([d8d5bc1](https://github.com/gbenm/qmap/commit/d8d5bc1440002025997c30a7c7539d0f4b5bb9c7))
* 🎸 eslint ([9b36c6e](https://github.com/gbenm/qmap/commit/9b36c6eafbec4490bbcd8018cbecef6b507511c8))
* 🎸 export packages ([9f5b1d5](https://github.com/gbenm/qmap/commit/9f5b1d5f7fe181095d4165c5943e66b5e5ae5c69))
* 🎸 first apply version ([28f815c](https://github.com/gbenm/qmap/commit/28f815c4f5021071d0c3873f3c084dd16d5dc3e5))
* 🎸 functions by item and variables ([f547de1](https://github.com/gbenm/qmap/commit/f547de1502798b5fac532d32a9502fecff4b0980))
* 🎸 generate JSON (part 1) ([ea54575](https://github.com/gbenm/qmap/commit/ea54575c0db193f6dfe0f5f6337240e29871ba62))
* 🎸 init lexer ([eb79a70](https://github.com/gbenm/qmap/commit/eb79a70823678e7ffa764d7b174677e4e170eb70))
* 🎸 introducing index and type ([7590d2a](https://github.com/gbenm/qmap/commit/7590d2a745eceba826eb9e1c4e4820fc3d2fb002))
* 🎸 JSON generation v2 and queries part v1 ([9fcb577](https://github.com/gbenm/qmap/commit/9fcb577747e6d8c86e5d66a00fe0e8f86457a5ce))
* 🎸 lodash ([657cdf2](https://github.com/gbenm/qmap/commit/657cdf2f2b44b8cdebcf5e729bf7621aded00984))
* 🎸 no name limitation ([ec7ba11](https://github.com/gbenm/qmap/commit/ec7ba1176c5d76f6ac82fa6bca2a43d7c92e9219))
* 🎸 override schema from includes function ([b4f7535](https://github.com/gbenm/qmap/commit/b4f7535f569eb23efc4af643ff7008082d7ec3fa))
* 🎸 qmap creator ([15c918c](https://github.com/gbenm/qmap/commit/15c918c29886e06bd6998913c0eb917ef2bb7241))
* 🎸 qmap options ([05c0c56](https://github.com/gbenm/qmap/commit/05c0c56cb4644997df635cf7d3645472a3c14c5e))
* 🎸 queries part 2 ([011b976](https://github.com/gbenm/qmap/commit/011b9765bdaa0b5006937ac8adeca20e214e6e1c))
* 🎸 rename, function, client function ([034a4a4](https://github.com/gbenm/qmap/commit/034a4a4b5bfa29b8d1d4c9e1e5cc118579f04059))
* 🎸 return of qmap function ([d90af6f](https://github.com/gbenm/qmap/commit/d90af6f006b17d0b62d522d42f07727bdd9861d7))
* 🎸 return type ([2db08f5](https://github.com/gbenm/qmap/commit/2db08f5e30fadef9d1e89d87aa4578aec176ecc3))
* 🎸 schemas and context queries ([9a7987f](https://github.com/gbenm/qmap/commit/9a7987fbd4bae68c8969685f6af53af2dcb9f1a7))
* 🎸 Spread node and build definitions function ([a2c28c4](https://github.com/gbenm/qmap/commit/a2c28c4479c04cf2ab933fa77ac6d1aad8fcea3d))
* 🎸 SymbolTable, Spread, exclude ([bc734ab](https://github.com/gbenm/qmap/commit/bc734ab9517e1a63598a524863340b2e749a7b53))
* 🎸 typescript ([7eb73b0](https://github.com/gbenm/qmap/commit/7eb73b0f630bdaadf26b05ec2509d8650f83d2ed))


### Bug Fixes

* 🐛 add to parentTable ([39879a6](https://github.com/gbenm/qmap/commit/39879a6b26022149ffb2e200c49c520909df7fe5))
* 🐛 copy of target (no deep) ([155425c](https://github.com/gbenm/qmap/commit/155425c1ce690377377ff5e5cad1bd8087100800))
* 🐛 ctx ([7c86b55](https://github.com/gbenm/qmap/commit/7c86b55d45f99ba37646290e46ee9bc1ad0a6b9f))
* 🐛 function ([530dbd3](https://github.com/gbenm/qmap/commit/530dbd3a30acbf377caa1dd8a8e49ac8b587caff))
* 🐛 get from index ([740413e](https://github.com/gbenm/qmap/commit/740413edea9a3d9dfc15ca361d9ae1573f55119d))
* 🐛 index ([21ef98c](https://github.com/gbenm/qmap/commit/21ef98c03512f468a9793b402aae75eb458732b2))
* 🐛 index ([8246df1](https://github.com/gbenm/qmap/commit/8246df11da874aca07e4eac93033acc33243abbd))
* 🐛 index must have all flag ([56234a6](https://github.com/gbenm/qmap/commit/56234a623499eb2aad8caa58203f5a35326bd920))
* 🐛 no statements ([5211f75](https://github.com/gbenm/qmap/commit/5211f759e7506729ec76e15e08edc94159b068bf))
* 🐛 return null ([c163091](https://github.com/gbenm/qmap/commit/c16309182eb4f158e8ec7a32c036c7d5df4eafe3))
* 🐛 root id ([ee401f4](https://github.com/gbenm/qmap/commit/ee401f4a43b15632c87a3867665b4c5e7cedfffa))
* 🐛 scopes and index ([51d2917](https://github.com/gbenm/qmap/commit/51d29178045cd6e950188844a0614aca326d79e6))
* 🐛 use eval instead JSON.parse ([70cca36](https://github.com/gbenm/qmap/commit/70cca364afacda8a72bc2bb7d03924c4581ae8b0))
* 🐛 version ([a358d8e](https://github.com/gbenm/qmap/commit/a358d8e0c59c5308cb502d6f436b280cede2304b))
