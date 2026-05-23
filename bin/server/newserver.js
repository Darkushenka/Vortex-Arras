/*jslint node: true */
/* global goog */
"use strict";

// General requires
var _this = void 0;
require('google-closure-library');
goog.require('goog.structs.PriorityQueue');
goog.require('goog.structs.QuadTree');

// Import game settings.
var c = require('../../config.json');

// Import utilities.
var util = require('./lib/util');
var ran = require('./lib/random');
var hshg = require('./lib/hshg');

// Let's get a cheaper array removal thing
Array.prototype.remove = function (index) {
  if (index === _this.length - 1) {
    return _this.pop();
  } else {
    var r = _this[index];
    _this[index] = _this.pop();
    return r;
  }
};

// Define player keys
var keys = ['k', 'l', 'testk', 'testl',
// Focus Group
'ZNr3GBQOhD2CDDYpZD3JZkZ6hmhoF4wGiTYTikZlSLr1Z66yWKuVMitRkpUbPy6s',
// Mine
'HKib09Ep3hIcwFXpiCj5iEkpLBN88HQ22hiFqg5alcxn4AYl6VcsPFTqMvllLt1D',
// Parodia
'n9hx8iQH8453dWQpdDvJcAvPzQej80xQz86TxuYaJ8CaOr4hEH2zHPlSeayVPjFZ',
// SGM
'5piWwi06VXdEuOsz1rbcHiglurbaYIPtslIgE0NNMGQgNcqErdJ4kUVYpDJsRlVC',
// Aznaft
'q80UgWYIQVM2oZW5iQO6VRdLcOTuHkSgUx4U7NN8z76Ltgj7gVc6tSWvmpPkRUGH',
// Licht
'9zcVcKxiv60ZoBr6CaO9ecjR3i0Mj9yx4Qgt9IGwzxps8Q5ge1GQJiYe59GBxKip',
// Tenderlicious
'M67ZAZIgboiBcUtcKoHOuwXlQJWN9DEwhr0CIqR9xjiwpDyb4cUrwUIynKnuQmrU',
// ManticoreKiller
'iBKZrtZEP6Gq1m1y4hpbIH2htBKegkaj6eyO70L9FMAEydiV4gA4ufiLWFx0R5C2',
// JB Columbia
'zbH5Myv66HmR9Mda39xlLXa9TyBGzXnKZV7xpN5NCDTXorn52123eHY4kcZmPNLx',
// Teal Knight
'pee4OZmPo9yrINv30kIMMVviEr1PRfiuIYQEOGXTK6lnLZumy9O942NabE8BiEce',
// unnamed
'08IhobFLBYah8Mk8MKqqG6W576iS4jznjK4WnIsSzcFC0OhkIY51DQV0DWWsgfbg',
// Pie
'36spA3cA2FNDamjM4SaiNNfNMkUMSERgduUvAL3Ms8bsioX4uoMyQteMWx1dRpdp',
// Sergio
'i3tpmHTC2ty8CCzjhISDKO1MrkZOwmoWZ08XZLOg3IfCqbtAsdC8QPKPMhbPHQmV',
// Corrupt X
'gQHpJkeGoxknxqkiX9msLhwS1NzikXa1RiOKOJD2o2zf15XL35P1YWZeMcivXLNB',
// Jorjito Gamer
'kKWsRf0OdLWzipECohr5FqjuyecPZYOGxl1zAXabtllaWx2OVKfLTKBiit8KVg5j',
// warrior
'77L1QgQgsTQrZHhTSuv1iK1NyvpBL9AYyvmkF21Sjp4T7ldxGodQnC9dM1YtvZzG',
// TTTank
'M6I9vmmRiitxg07rBG2IuC7aNpp7LHQGVPtwGfkk3hIBR0jhlWwaqzpzPXqU2awM',
// CX
'5AxKhPIu5jF3B3cIxjA2BHUy30ccYgEUXJmK16ksJotp9D9WVlY6QqPLDPGim1MK',
// Faxaro
'kcrJTPqvhraysgCNrFZORGNR4UTMRvbQ2zuhI3iXpGyMg6wDtU5QMgcV8vNdLLHQ',
// Mipha
'EXoiZYDuwSwmp7Zg0m7hdaLyv2PMbQgQorkwRznC0NC3saubVNtxVUGtOWZ2xdcz',
// svorlds
'G0t2lQYeaTHHU8sp5ibNjFCCLMr41cPCOJRKUC5eUGfkUKDxpVwo5azomBSznZuR',
// FTM
'kf2VcjtzpMvVwhlgIjq4MX6LWbIoNzcvfsxARS0qWiuVWf6BPPsQ2p1FgBVvNoB1',
// pnvv / Cannon Man
'3hO6R7AOR0aiiFuRyGaHKrgJHjTEpsD2LZ866bhvlz2Ru9AT8QmiBNf5PZuXCFIA',
// wowie's friend
'z272UlNODnYVK79jva6pybRpwtp1h0FdJh8F8JRQJ5VY9lPrcugp6nd403Op4voC', 'eOb4DCk81Hzay8Kgjcu6tbbpIUCveloxahmnkmg3aU6FlvdWjJd2Uui5cFQdsnby', '9qGqNv5iYTSIhkCaMmZpvYhSpaLnHQJnj6m2gdoVWIXgLaFgIrbcFYHM8bcBsGYS', 'qqWz1E1uVtErG4N80YDVQJywzOk6PJFDrC6uzqoQ9XL2nNrCCr1KvY8XUEyCroHT', 'r0KXqfIifiavtqP3v0b5gqb5ArQY5sJWO7fjG4P6AFE5MRyfjDGK7sO7nXg23Tkv', 'nUzNolF4Yys4ua6x78GiVH0Fparcm8GyD60IZzVHji0b2gQL3citWEEi3b1J9iRT', 'XSxFurVLlc7o99nnakK5EPA2Z16tqBxP3xKcq5y4XOjRyfFRqaSxbBNRUtab71FH', 'uYLfr6k6wEmgMtGVna366Gujor3gUWhWUHgbsz2uUNhQ8OKkwzb1IpDehnz7dfFL', 'TVA4eYx29geFN6kb2Osyt5veaih0OOJG2MzB4qBBlUQr5CpRJqIhrTModxcT5NXI', 'eyQqQE0h0l6x7XpkXpnZdYPsRJgvdl6L8xAoEzF0ZGlTV8HH0wUePj03LuULDhSN', 'ZuOzwoZw4lCWwekTMh9bEAw4Tv92uLhzGN0DMDV2Rk7Sfn3Hsbf87ssHcvxTbDek',
// Public
'PUBLICRSUZbhCMu2ocDrhtje1ev6ff3eM6IxsCPUBLIC', 'PUBLICb7HbKa0zFp5PzJVkcu17GIbp56JeHxZlPUBLIC', 'PUBLICwxTybWuUrYfEA84kVunN5btV4vROYCW0PUBLIC', 'PUBLICfOKBjTZzW1VvoEfJTY3G7U2TcwT8iREyPUBLIC', 'PUBLICKKRLO0lpLy2IDHUdqzE0MBsZUhrBnYRpPUBLIC', 'PUBLICsC7wKFQ6CXPB241uA5RzORP2Z14CSO86PUBLIC', 'PUBLIC6criSrXdLBoTtIWQHCmcOPfzqgDZcGOiPUBLIC', 'PUBLIC3QdiZpPEAtB4gif0TEU3822qJz3W23J2PUBLIC', 'PUBLICEDZLxLjRRfa8tS5EqRIExtHpWq0MJSVZPUBLIC', 'PUBLIC5vmCtP1IjDnglKJk7AmWg3hAuZ4ZGGnVPUBLIC', 'PUBLICe1r6NsdjhOnpNuPqnskTzLvJoaXn3dsqPUBLIC', 'PUBLICTbfzA0MB2H6hRataGEQENmu1o9eOpytkPUBLIC', 'PUBLICpJlxtdn2iplYuIWXznUX3f6RHHPC3uFrPUBLIC', 'PUBLICadVvUN4mp0MTSAnsc3BKIJ6l40Y5sV00PUBLIC', 'TRUSTED5vmCtP1IjDnglKJk7sAmWg3hAuZ4ZGGnVTRUSTED', 'TRUSTEDe1r6NsdjhOnpNuPqnskTfzLvJoaXn3dsqTRUSTED', 'TRUSTEDTbfzA0MB2H6hRataGE3QENmu1o9eOpytkTRUSTED', 'TRUSTEDpJlxtdn2iplYuIWXsznUX3f6RHHPC3uFrTRUSTED', 'TRUSTEDadVvUN4mp0MTSAnsc3BKfIJ6l40Y5sV00TRUSTED', 'TRUSTED3nYR28Kwhnx1n6JvP4Tm r2dxLhrTvrcNTRUSTED', 'TRUSTEDNwHIdUtjLSmITUVNg5B6c4uVWiB7IFq2STRUSTED', 'TRUSTEDDIIocNBJS9mYstVFSuiwNxbQeEXOFlrPhTRUSTED', 'TRUSTED17rtKXqQ7wzek6Ejf9rGCfOdRr5vrm5AxTRUSTED', 'TRUSTEDWJkuJFZ2Wljq2WXasxHrM0Vsbra5iyb6vTRUSTED', 'TRUSTEDzxVdPsuU1yGRQrkbADH6rBaE8TKdAvJabTRUSTED', 'TRUSTED7nAZ3NBi9ZB07KfLV0cnGO0YEXoSGf1lLTRUSTED', 'TRUSTEDFyJTLBCrokyoFICQFi4hAGJd09jkCDqOJTRUSTED', 'TRUSTEDPBHbBZkW9foaXPDfGe6xq9Y6XvJhrwowqTRUSTED', 'TRUSTEDtTZe5CYcmmCQBLj0WztAHn5MnI0dhqNrXTRUSTED', 'GUDPOSTERNwR7FWcY1eeNkyiCrzGfuo3wGWhETFmbGUDPOSTER', 'GUDPOSTERR2gdw10L7u4auP3yr1G1EC59TnRA3H31GUDPOSTER', 'GUDPOSTERVLX8LwHtMrLIMFx0XdzTdauVAmSKV9SZGUDPOSTER', 'GUDPOSTER8Uk4cGa2ut3vFfaPmjbmRBtAXpFHXsBNGUDPOSTER', 'GUDPOSTERdHHy9pqMejwGZJ7nUZMRw0Mnc1g8UJ8oGUDPOSTER', 'GUDPOSTERrgZPXqFSJXdChEMvgQjjxjGZfsObOArCGUDPOSTER', 'GUDPOSTERysJI3BfzB2cRCDDdFkAaFWxZk5TNHwfvGUDPOSTER', 'GUDPOSTERlFps80nCJ6cnFGjyH9QoKqgETwGX1sIQGUDPOSTER', 'GUDPOSTERmED6CZg213gXoCYyDqxMLGFtuuCPn8NmGUDPOSTER', 'GUDPOSTERlSL92YPpoqh48GuQwydpGuocJAH6Vx5VGUDPOSTER', 'GIVEAWAYZ1yVvobK3MWgCBxYjFheJd3UrWW2ULJuGIVEAWAY', 'GIVEAWAYaVGcMBm3LwxmLkxxGSt6NNg9AUDsj5v5GIVEAWAY', 'GIVEAWAYAMkJmX3xKv3tiieS5oAfEsJbni4xInIwGIVEAWAY', 'GIVEAWAYi3AbdptFr9m2fGGqY9p6Vvi3uRX6ALHRGIVEAWAY', 'GIVEAWAYxwABlNSPU4291UJICWyeXQB4ET0ZyA0uGIVEAWAY', 'GIVEAWAYczPSwYnpHDGKaimREjN1e86N6CmSH0NWGIVEAWAY', 'GIVEAWAYDx3U7MOBNyDmjv6Rz6Le6wgG4Xk0cwilGIVEAWAY', 'GIVEAWAYCOr2yK7od6RRch52ToBO5s0xxizBVVajGIVEAWAY', 'GIVEAWAYV7fiIzckU8xQ57i3Bu8ngWetPOzS9ktvGIVEAWAY', 'GIVEAWAYpbo21yNoMcvwhbIeMOsqMIjzYKOLZyEgGIVEAWAY',
// Twitter
'500kBomberContestTokenVUBefeRUMQsLShjas4dhfSF', '500kBomberContestTokenNSEefeRUMQsLShjbs4dhfSF',
// TnT
'500kBomberContestTokenWDWefeRUMQsLShjcs4dhfSF',
// crnz
'500kPoacherContestTokenZZb1FkYER7B0ZV7bs9df8s', '500kAutoDoubleContestTokenKBSj41qloynOGws87X2',
// JeShAn
'500kFortressContestTokenl2fd42tL7C6ZynSDF33ox',
// Lucario
// Youtube
'SGMTokenGiveaway51NP3JOh9NKvsnVh6PDRGI1wALGXWLzE2jZXztWKxlyPN00w', 'SGMTokenGiveaway2puyw4VGFTTSqgxeFvvvqxMTzZ5S3XPtVQXLCSIOpW7Rxv8m', 'SGMTokenGiveawayYAu4abk9oLMaBqOXfx2QvSqznNqw7mTFv7lBFk5LJ7ksPd7W', 'SGMTokenGiveawaybgSA5xNNpo4Vhsfg8lOlop8f4FOPWk9VXcMvjl62JYWhKOWF', 'SGMTokenGiveawaya7C7vBTBPxgWEgg1g3UbYttE30A33aFVqEEd2pdV3PfbxvA0', 'SGMTokenGiveawayBFu7eKC22KxKYuFiUTOyjmMCpBhr1HseP7pNo4yl5xOZt9IS', 'SGMTokenGiveawayAHVq7eEAUWZzCtK4vcHslWIDMPykPAfsnq4jdsHYE3HIhlBO', 'SGMTokenGiveawayS0wxtOYFcnBirWbbP9EePvgo8rPVrhatpixkaH78CdKdtorr', 'SGMTokenGiveaway7p8JwRnATdS3H10gIKy5dKQXlbj93WplkC9NpfjNTREG9IQn', 'SGMTokenGiveawaynM1ffqsEM31Vv6KMmlxhs6Ug0s65FiyN3w9eP6QM7FmpbS2i', 'SGMTokenAa05Q1oDwf0Mxaw57vBTBPX3M25gjitRD0daHTObk796GqSJ3KUhKf5p', 'SGMTokenxg3Kw7jPUoxFOXbO4POF19iovCUnNzqoQ9XL2rTAoXoAtyHDZR5YFgAk', 'SGMToken7KteCaOERDa8TkfzIQIm54rhewlKL2lWIDMPykPAfsnq41MGxgogphB9', 'OMTokenIGnPS8RSGiP8lvTQDdve9ANPfSOyTgvPQMYdFlcn7IVcJg8oeGreEBYs', 'OMTokenLTARU3UJldlHUf8215Wg4AbdThRvA3j0wG2FbwyZCTixkaH78CdK8BnV', 'OMToken7sOXlNs9Qu58TmaCu9TpD4JkzRuGrKKOS74tZimimR8Iu5du7v6GRbRH', 'JBColombiaTokenwZXpYskkovgQL4jZlqS42xaqgVAvHZPZgVcccsBkHhsXhq69', 'JBColombiaToken8WwiA5demyL1gQZ9D5kvFMOwkJRc3STikct22cMoPmjfli69', 'JBColombiaTokenPDuZydKLePKQ9TyOMqiquI0YVHcCJBJb3pORyzfo42nHhT69', 'JBColombiaTokeniC0Eh8jMoncX4bAKbslR174tZimimBXoUGhvaKY0dBwbLI69', 'JBColombiaTokenWWqX44i7VqxtQB3qsViJHbJnK3FryxqgAAFerRFxYO2wJc69', 'JBColombiaTokenlzgPyfwuto7KY8BqxDserADmpeuMR31wxgD0dWpNWvHZv969', 'SMTokenlSrBG8RTazOHzZ6zeyBPFI1tOSiuDSJNcfozraRKb8votLtwmNFC964KG', 'SMTokennrNg7MzqzJe2xz11cKDETqCBKVhDiOS6x1gyTMV8EHLkRGGFXAHLUVUjk', 'SMTokenfjlzipOhA8Lfp38kt9FnzGKRg6g79hujlFVPbEyzsbEqbYOD2ohveMSh8', 'SMTokenNHPtbYKUDrR8MBQoQIymCwdbFSoHHNTuBMPvS4iugQigBMvfrGurB3qM4', 'SMTokenI33BqYnppCCVAMOkykIeOWIsmetgkymFK1A7XgeZGGW52xVq1xRKv38vC', 'SMTokenHxNBGJGRf6SqXAOIhgMEOuPUp4X4LszwBEeco3Wrw2IuOe3jxoWyLKdR0', 'SMTokennjophXq0WC3jzDpPrDbfXLE2eoFOMvQWKucR0ZwECIlXDBTQnF33uyDXd',
// Patreon / rewards
'tokenlordkarma88tokenlordkarma88tokenlordkarma88tokenlordkarma88', 'hereIsUrTokenBuddyThxForTheOverGunnerLmao', 'DukeonkledDukeonkleThankYouSoMuch123e911DukeonkledDukeonkledDuke', 'FireNationFireNationThanksATon018s380280FireNationFireNationFire', 'rewardTokenJSdf323H0Cj85aVOG3SPlgp7Y9BuBoFcwpmNFjfLEDQhOFTIpukdr',
// Call
'rewardTokenDg2JDTp0rxDKXIPE8PHcmdHqWyH2CqPqpcAf6QcT8m2hgBZnJ7KHE', 'rewardTokenad3JTsTwuVLkQvfmVH2d2Ukbf8WbFuPBqTpYFdFx9AuZEnmv9EW8U', 'rewardTokenJsa43Tthn1M5Ey9oDRODzzrazqRxL28cTchgInjVCrSfnWEATdYeP', 'rewardTokensdfsJTyz2YMS3GLDfD2NvqXK46p1ScsmdLxI1owBkjHw983lwkR8Z',
// Wiki
'WIKIREWARDV7V0bZRP8lM3fUvwuAX7DC5FpZCU1AyJByaulkH9YHZ7WIKIREWARD', 'WIKIREWARDDOE8Iqg5K124sNXSR51WWycmCnFtCLjyF7uole5sgQgoWIKIREWARD', 'WIKIREWARD5z5xXA0flzxeRgGu6EjSWlOq23gdGoYALClfsUT143Y9WIKIREWARD', 'WIKIREWARD4DTEvdwSBKPBRCAJxeS9surL09uzxx33gAHmMYFldRsMWIKIREWARD', 'WIKIREWARDqGXxMucMJcSeqWFcAfCLVNStnmOezkzOUot8xbfpCuk1WIKIREWARD', 'EDITOR1eKAAURvtnHYFuUz6dzPqOwPt6SFWbacEucDnm8KroabolnzLZrdEDITOR', 'EDITOR38Gi67EFmLdh6nXuKqtRc79HKk34c6bQl08tbUeZlGcxBS2c350yEDITOR', 'EDITOR7mAKjd6XYprdtvbWqqUjEEfCqomx67aLSyG70eiFuvRVv2Eest27EDITOR', 'EDITORoNzv0DxKzLYY7YCYdIsRHdNz8DNNiuqI2I9mBM2blBpWZ39chumsEDITOR', 'EDITOR399V1FLGtsne5BMg5QfeeHdR63bxkV51Av0ET3F5y92q7EMhI8R3EDITOR', 'EDITORmUJbmoFVshllWIUb11kyXxQfyESa4t3SYcGRHSlWzLrzfwkHCIVUEDITOR',
// Themes
'YouAreTheCreatorOfBadlands', 'WowYouMadeADopeFishyTheme', 'ThanksForHelpingPlantAForest', 'MidnightIsSuperCoolNotYouTheTheme', 'DrinkBleachPlz', 'FrostyAndBeautifulJustLikeYourColdHeart'];

// Get class definitions and index them
var Class = function () {
  var def = require('./lib/definitions');
  var i = 0;
  for (var k in def) {
    if (!def.hasOwnProperty(k)) continue;
    def[k].index = i++;
  }
  return def;
}();
var ROOMSPEED = 1;
// Define entities
var _makeEntity = function makeEntity() {
  // Pooled memory 
  var __a = {
    "int": [],
    "float": [],
    str: []
  };
  // Shared math functions
  var getLength = function getLength(x, y) {
    return Math.sqrt(x * x + y * y);
  };
  var getDirection = function getDirection(x, y) {
    return Math.atan2(y, x);
  };
  var DEGTORAD = Math.PI / 180;
  // The value loader
  var load = function load(fallback, val) {
    return val == null ? fallback : val;
  };
  // A status container creator
  var newStatusBox = function () {
    var attribute = function attribute(status, id, index, inital) {
      status[index] += id * inital;
      return {
        get: function get() {
          return status[index] & id;
        },
        set: function set(bool) {
          if (bool) status[index] = status[index] | id;else status[index] = status[index] & ~id;
        }
      };
    };
    return function () {
      var status = [0];
      return {
        ghost: attribute(status, 1, 0, false),
        inGrid: attribute(status, 2, 0, false),
        invuln: attribute(status, 4, 0, false)
      };
    };
  }();
  // A kills container creator
  var newKillBox = function newKillBox() {
    var data = [0, 0, 0];
    return {
      get: data.slice,
      addSolo: function addSolo() {
        return data[0]++;
      },
      addAssist: function addAssist() {
        return data[1]++;
      },
      addBoss: function addBoss() {
        return data[2]++;
      }
    };
  };
  // A health bar creator
  var healthTypes = function () {
    // Static-type functions
    var regenerateStatic = function regenerateStatic(data, boost) {
      var amount = data[0],
        max = data[1];
      data[0] += max / 10 / 60 / 2.5 + boost;
      data[0] = Math.min(data[0], max);
    };
    var getStaticDamage = function getStaticDamage(data, amount, capped) {
      return capped ? Math.min(amount, data[0]) : amount;
    };
    // Dynamic-type functions
    var regenerateDynamic = function regenerateDynamic(data, boost) {
      var amount = data[0],
        max = data[1],
        regen = data[2];
      var r = util.clamp(amount / max, 0, 1);
      if (!r) data[0] = 0.0001;else if (r === 1) data[0] = max;else {
        data[0] += regen * Math.exp(-50 * Math.pow(Math.sqrt(0.5 * r) - 0.4, 2)) / 3 + r * max / 10 / 15 + boost;
        data[0] = Math.min(data[0], max);
      }
    };
    var getDynamicDamage = function getDynamicDamage(data, amount, capped) {
      var permeability = data[1] ? util.clamp(data[0] / data[1], 0, 1) : 0;
      return capped ? Math.min(amount * permeability, data[0]) : amount * permeability;
    };
    // Shared functions
    var _getRatio = function getRatio(data) {
      return data[1] ? util.clamp(1 - Math.pow(data[0] / data[1] - 1, 4), 0, 1) : 0;
    };
    return {
      newStatic: function newStatic() {
        var data = [1.0, 0.0];
        return {
          dealDamage: function dealDamage(amount) {
            return data[0] -= getStaticDamage(data, amount, 1);
          },
          getAmount: function getAmount() {
            return data[0];
          },
          getDisplay: function getDisplay() {
            return data[0] / data[1];
          },
          getRatio: function getRatio() {
            return _getRatio(data);
          },
          getDamage: function getDamage(amount, capped) {
            return getStaticDamage(data, amount, capped);
          },
          regenerate: function regenerate(boost) {
            return regenerateStatic(data, boost);
          }
        };
      },
      newDynamic: function newDynamic() {
        var data = [0.0, 0.0, 0.0];
        return {
          dealDamage: function dealDamage(amount) {
            return data[0] -= getDynamicDamage(data, amount, 1);
          },
          getAmount: function getAmount() {
            return data[0];
          },
          getDisplay: function getDisplay() {
            return data[0] / data[1];
          },
          getRatio: function getRatio() {
            return _getRatio(data);
          },
          getDamage: function getDamage(amount, capped) {
            return getDynamicDamage(data, amount, capped);
          },
          regenerate: function regenerate(boost) {
            return regenerateDynamic(data, boost);
          }
        };
      }
    };
  }();
  // The skills container creator
  // Index references
  var skc = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,
    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9,
    accel: 10,
    rst: 11,
    brst: 12,
    ghost: 13
  };
  var newSkills = function () {
    // The big update method
    var _update = function () {
      // Some math functions
      var apply = function apply(f, x) {
        return x < 0 ? 1 / (1 - x * f) : f * x + 1;
      };
      var curves = function () {
        var make = function make(x) {
          return Math.log(4 * x + 1) / Math.log(5);
        };
        var length = c.MAX_SKILL * 2;
        var storedValues = new Array(length);
        for (var i = 0; i < length; i++) {
          storedValues[i] = make(i / c.MAX_SKILL);
        }
        return storedValues;
      }();
      return function (data) {
        // Reset it if it's past the cap
        for (var i = 0; i < 10; i++) {
          if (data.raw[i] > data.caps[i]) {
            data.points += data.raw[i] - data.caps[i];
            data.raw[i] = data.caps[i];
          }
        }
        // Refresh all the stuff
        // Bullet stats
        data.real[skc.rld] = Math.pow(0.5, curves[data.raw[skc.rld]]);
        data.real[skc.pen] = apply(2.5, curves[data.raw[skc.pen]]);
        data.real[skc.str] = apply(2, curves[data.raw[skc.str]]);
        data.real[skc.dam] = apply(3, curves[data.raw[skc.dam]]);
        data.real[skc.spd] = 0.5 + apply(1.5, curves[data.raw[skc.spd]]);
        // Misc bullet stats
        data.real[skc.accel] = apply(0.5, curves[data.raw[skc.rld]]);
        data.real[skc.rst] = 0.5 * curves[data.raw[skc.str]] + 2.5 * curves[data.raw[skc.pen]];
        data.real[skc.ghost] = curves[data.raw[skc.pen]];
        // Body stats
        data.real[skc.shi] = c.GLASS_HEALTH_FACTOR * apply(3 / c.GLASS_HEALTH_FACTOR - 1, curves[data.raw[skc.shi]]);
        data.real[skc.atk] = apply(1, curves[data.raw[skc.atk]]);
        data.real[skc.hlt] = c.GLASS_HEALTH_FACTOR * apply(2 / c.GLASS_HEALTH_FACTOR - 1, curves[data.raw[skc.hlt]]);
        data.real[skc.mob] = apply(0.8, curves[data.raw[skc.mob]]);
        data.real[skc.rgn] = apply(25, curves[data.raw[skc.rgn]]);
        // Misc body stats
        data.real[skc.brst] = 0.3 * (0.5 * curves[data.raw[skc.atk]] + 0.5 * curves[data.raw[skc.hlt]] + curves[data.raw[skc.rgn]]);
      };
    }();
    // Modification methods
    var _change = function change(data, index, levels) {
      if (data.points && data.raw[index] < data.caps[index]) {
        data.raw[index] += levels;
        _update(data);
      }
    };
    var _set = function set(data, values) {
      for (var i = 0; i < 10; i++) {
        data.raw[i] = values[i];
      }
      _update(data);
    };
    var _setCaps = function setCaps(data, values) {
      for (var i = 0; i < 10; i++) {
        data.caps[i] = values[i];
      }
      _update(data);
    };
    var _maintain = function () {
      var levelToPoint = function () {
        var templevelers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 44];
        // Generate the real level array check thingy
        var levelers = new Array(c.SKILL_CAP);
        for (var i = 0; i < c.SKILL_CAP; i++) levelers[i] = templevelers.indexOf(i) !== -1;
        return levelers;
      }();
      var levelToScore = function () {
        var tempArray = [];
        for (var i = 0; i < c.SKILL_CAP; i++) tempArray[i] = Math.ceil(1.8 * Math.pow(i + 1, 1.8) - 2 * i + 1);
        return tempArray;
      }();
      return function (data) {
        if (data.level < c.SKILL_CAP) {
          var didStuff = false;
          while (data.score - data.deduction >= levelToScore[data.level]) {
            data.deduction += levelToScore[data.level];
            data.level++;
            data.points += levelToPoint[data.level];
            data.canUpgrade = data.canUpgrade || data.level == c.TIER_1 || data.level == c.TIER_2 || data.level == c.TIER_3;
            didStuff = true;
          }
          if (didStuff) {
            _update(data);
            return 1;
          }
        }
        return false;
      };
    }();
    var returnSkills = function returnSkills(data) {
      for (var i = 0; i < 10; i++) {
        __a["int"][i] = data.raw[i];
      }
      return __a["int"];
    };
    return function () {
      var data = {
        raw: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        caps: [c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL, c.MAX_SKILL],
        real: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        points: 0,
        score: 0,
        deduction: 0,
        level: 0,
        canUpgrade: false
      };
      return {
        change: function change(index, levels) {
          return _change(data, index, levels);
        },
        update: function update() {
          return _update(data);
        },
        set: function set(values) {
          return _set(data, values);
        },
        setCaps: function setCaps(values) {
          return _setCaps(data, values);
        },
        maintain: function maintain() {
          return _maintain(data);
        },
        get: function get() {
          return returnSkills(data);
        }
      };
    };
  }();
  // A gun
  var newGun = function newGun() {
    var live = function () {
      var doRecoil = function doRecoil(gun) {
        var motion = gun.physics[0],
          position = gun.physics[1];
        if (motion || position) {
          position += motion;
          motion -= 0.25 * position / ROOMSPEED;
          if (motion > 0) motion *= 0.75;
        }
        if (gun.settings.canShoot.get() && gun.settings.hasNoRecoil.get()) {
          if (motion > 0) gun.body.accelerate(-position * gun.physics[2] /*trueRecoil*/ * 0.045 / ROOMSPEED, gun.body.facing + gun.mechanics.angle);
        }
        gun.physics[0] = motion;
        gun.physics[1] = position;
      };
      var doLive = function () {
        // The shooting function
        var fire = function () {
          var bulletInit = function () {
            var interpret = function () {
              var out = {
                SPEED: 0.0,
                HEALTH: 0.0,
                RESIST: 0.0,
                DAMAGE: 0.0,
                PENETRATION: 0.0,
                RANGE: 0.0,
                DENSITY: 0.0,
                PUSHABILITY: 0.0,
                HETERO: 0.0
              };
              return function (gun) {
                var shoot = gun.properties.settings;
                var sk = gun.body.getSkills();
                // Defaults
                out.SPEED = shoot.maxSpeed * sk[skc.spd];
                out.HEALTH = shoot.health * sk[skc.str];
                out.RESIST = shoot.resist + sk[skc.rst];
                out.DAMAGE = shoot.damage * sk[skc.dam];
                out.PENETRATION = Math.max(1, shoot.pen * sk[skc.pen]);
                out.RANGE = shoot.range / Math.sqrt(sk[skc.spd]);
                out.DENSITY = shoot.density * sk[skc.pen] * sk[skc.pen];
                out.PUSHABILITY = 1 / sk[skc.pen];
                out.HETERO = 3 - 2.8 * sk[skc.ghost];
                // Special cases
                switch (gun.properties.calculator) {
                  case 0:
                    break;
                  case 5:
                    // THRUSTER 
                    gun.physics[3] = shoot.recoil * Math.sqrt(sk[skc.rld] * sk[skc.spd]);
                    break;
                  case 6:
                    // SUSTAINED
                    out.RANGE = shoot.range;
                    break;
                  case 3:
                    // SWARM
                    out.PENETRATION = Math.max(1, shoot.pen * (0.5 * (sk[skc.pen] - 1) + 1));
                    out.HEALTH /= shoot.pen * sk[skc.pen];
                    break;
                  case 8:
                    // TRAP
                    out.PUSHABILITY = 1 / Math.pow(sk[skc.pen], 0.5);
                    out.RANGE = shoot.range;
                    break;
                  case 7: // NECRO
                  case 2:
                    // DRONE
                    out.PUSHABILITY = 1;
                    out.PENETRATION = Math.max(1, shoot.pen * (0.5 * (sk[skc.pen] - 1) + 1));
                    out.HEALTH = shoot.health * sk[skc.str] / Math.pow(sk[skc.pen], 0.8);
                    out.DAMAGE = shoot.damage * sk[skc.dam] * shoot.pen * sk[skc.pen];
                    out.RANGE = shoot.range;
                    break;
                }
                // Go through and make sure we respect its natural properties
                for (var property in out) {
                  if (gun.properties.bullet.stat[property] == null || !out.hasOwnProperty(property)) continue;
                  out[property] *= gun.properties.bullet.stat[property];
                }
                return out;
              };
            }();
            var necroFunction = function necroFunction(gun, mancer, host) {
              var body = gun.body,
                props = gun.properties;
              var reloadFactor = body.getSkills()[0];
              var permission = props.countsOwnKids ? props.countsOwnKids > gun.children.length * reloadFactor : body.getMaxChildren() ? body.getMaxChildren() > body.getKids() * reloadFactor : true;
              if (permission) {
                __a["float"][0] = host.getFacing();
                __a["float"][1] = host.getSize();
                // Reset it as much as possible
                host.define(Class.genericEntity);
                // Turn it
                bulletInit(gun, host);
                // Init it with stuff
                host.setTeam(mancer.getTeam());
                host.setMaster(mancer.getMaster());
                host.setColor(mancer.getBulletColor());
                host.setFacing(__a["float"][0]);
                host.setSize(__a["float"][1]);
                host.fullHeal();
                return true;
              }
              return false;
            };
            return function (gun, o) {
              var body = gun.body,
                props = gun.properties;
              // Define it by its natural properties
              props.bullet.types.forEach(function (type) {
                return o.define(type);
              });
              // Pass the gun attributes
              o.define({
                BODY: interpret(gun),
                SIZE: body.size * gun.mechanics.width * props.settings.size / 2,
                LABEL: _this.master.label + (props.label === '' ? '' : ' ' + props.label) + ' ' + o.getLabel()
              });
              o.setColor(body.getBulletColor());
              // Prepare to pass gun skills
              var skill = body.getSkills();
              skill[5] = skill[6] = skill[7] = skill[8] = skill[9] = 0;
              o.assignSkills(skill);
              // Keep track of it and give it the function it needs to remove itself upon death
              gun.children.push(o);
              o.addDerefFunction(function () {
                return util.remove(gun.children, gun.children.indexOf(o));
              });
              if (body.getMaxChildren()) {
                body.addChild(o);
              }
              o.addDerefFunction(function () {
                return body.removeChild(o);
              });
              // Set the source
              o.setSource(body);
              // Necromancers' bullshit
              if (props.calculator === 7) o.necro = function (host) {
                return necroFunction(gun, o, host);
              };
              // Otherwise
              o.refreshBodyAttributes();
              o.life();
            };
          }();
          return function (gun, x, y, ddd) {
            var body = gun.body,
              props = gun.properties,
              physics = gun.physics,
              mech = gun.mechanics;
            var sk = body.getSkills();
            // Recoil
            gun.lastShot[0] = util.time();
            gun.lastShot[1] = 3 * Math.log(Math.sqrt(sk[skc.spd]) + physics[3] + 1) + 1;
            physics.motion += gun.lastShot[1];
            // Find inaccuracy
            var ss, sd;
            do {
              ss = ran.gauss(0, Math.sqrt(props.settings.shudder));
            } while (Math.abs(ss) >= props.settings.shudder * 2);
            do {
              sd = ran.gauss(0, props.settings.spray * props.settings.shudder);
            } while (Math.abs(sd) >= props.settings.spray / 2);
            sd *= Math.PI / 180;
            // Find speed
            var speed = (props.negRecoil ? -1 : 1) * props.settings.speed * c.runSpeed * sk[skc.spd] * (1 + ss);
            var sx = speed * Math.cos(mech.angle + body.facing + sd),
              sy = speed * Math.sin(mech.angle + body.facing + sd);
            // Boost it if we should
            var velocity = body.getVelocity();
            var vlen = getLength(velocity[0], velocity[1]);
            if (vlen) {
              var slen = getLength(sx, sy);
              var extraBoost = Math.max(0, sx * velocity[0] + sy * velocity[1]);
              if (extraBoost) {
                extraBoost /= slen * slen;
                sx += extraBoost * sx;
                sy += extraBoost * sy;
              }
            }
            // Create the bullet
            var position = body.getPosition(),
              size = body.getSize();
            var o = _makeEntity(position[0] + size * x - sx, position[1] + size * y - sy);
            o.shove(sx, sy);
            o.forceSizeUpdate();
            bulletInit(gun, o);
          };
        }();
        // The actual update function
        return function (gun) {
          // Live
          var body = gun.body,
            props = gun.properties,
            physics = gun.physics,
            mech = gun.mechanics;
          var sk = body.getSkills();
          // Decides what to do based on child-counting settings
          var permission = (props.countsOwnKids ? props.countsOwnKids > gun.children.length * (props.calculator === 7 ? sk[0] : 1) : body.getMaxChildren() ? body.getKids().length * (props.calculator === 7 ? sk[0] : 1) : true) && !body.isInvulnurable();
          // Cycle up if we should
          if (permission || !props.waitToCycle && physics.cycle < 1) physics.cycle += 1 / props.settings.reload / ROOMSPEED / (props.calculator === 7 || props.calculator === 4 ? 1 : sk[skc.rld]);
          // Firing routines
          if (permission && physics.cycle >= 1 && (props.autofire || (props.altFire ? body.controls.alt.get() : body.controls.fire.get()))) {
            // Find the end of the gun barrel
            var gx = mech.offset * Math.cos(mech.direction + mech.angle + body.facing) + (1.5 * mech.length - mech.width * props.settings.size / 2) * Math.cos(mech.angle + body.facing);
            var gy = mech.offset * Math.sin(mech.direction + mech.angle + body.facing) + (1.5 * mech.length - mech.width * props.settings.size / 2) * Math.sin(mech.angle + body.facing);
            // Shoot, multiple times in a tick if needed
            while (permission && physics.cycle >= 1) {
              fire(gun, gx, gy, sk);
              // Figure out if we may still shoot
              permission = props.countsOwnKids ? props.countsOwnKids > gun.children.length * (props.calculator === 7 ? sk[0] : 1) : body.getMaxChildren() ? body.getKids().length * (props.calculator === 7 ? sk[0] : 1) : true;
              // Cycle down
              physics.cycle -= 1;
            } // If we're not shooting, only cycle up to where we'll have the proper firing delay
          } else if (physics.cycle > !props.waitToCycle - mech.delay) physics.cycle = !props.waitToCycle - mech.delay;
        };
      }();
      // The life function
      return function (gun) {
        doRecoil(gun);
        doLive(gun);
      };
    }();
    var getTracking = function getTracking(gun) {
      var speed = gun.body.getSkills()[skc.spd];
      __a["float"][0] = c.runSpeed * speed * gun.properties.settings.maxSpeed * gun.properties.bullet.stats.SPEED;
      __a["float"][1] = speed * gun.properties.settings.range * gun.properties.bullet.stats.RANGE;
      return __a["float"];
    };
    return function (body, info) {
      var isInert = info.PROPERTIES == null;
      var properties = isInert ? null : {
        settings: info.PROPERTIES.SHOOT_SETTINGS,
        label: load('', info.PROPERTIES.LABEL),
        autofire: load(false, info.PROPERTIES.AUTOFIRE),
        altFire: load(false, info.PROPERTIES.ALT_FIRE),
        calculator: load(0, info.PROPERTIES.STAT_CALCULATOR),
        waitToCycle: load(false, info.PROPERTIES.WAIT_TO_CYCLE),
        countsOwnKids: load(false, info.PROPERTIES.MAX_CHILDREN),
        syncsSkills: load(false, info.PROPERTIES.SYNCS_SKILLS),
        negRecoil: load(false, info.PROPERTIES.NEGATIVE_RECOIL),
        bullet: function () {
          var types = Array.isArray(info.PROPERTIES.TYPE) ? info.PROPERTIES.TYPE.splice() : [info.PROPERTIES.TYPE];
          var stats = {};
          types.forEach(function setStats(type) {
            if (type.PARENT != null) {
              // Make sure we load from the parents first
              for (var i = 0; i < type.PARENT.length; i++) setStats(type.PARENT[i]);
            }
            if (type.BODY != null) {
              // Get values if they exist
              for (var index in type.BODY) stats[index] = type.BODY[index];
            }
          });
          return {
            types: types,
            stats: stats
          };
        }()
      };
      var _position = info.POSITION;
      var gun = {
        body: body,
        mechanics: {
          length: _position[0] / 10,
          width: _position[1] / 10,
          aspect: _position[2],
          direction: getDirection(_position[3], _position[4]),
          offset: getLength(_position[3], _position[4]) / 10,
          angle: _position[5] * DEGTORAD,
          delay: _position[6]
        },
        properties: properties,
        color: info.PROPERTIES && info.PROPERTIES.GUN_COLOR ? info.PROPERTIES.GUN_COLOR : null,
        lastShot: [0, 0.0],
        physics: isInert ? null : [0.0,
        // motion
        0.0,
        // position
        !properties.waitToCycle - _position[6],
        // cycle
        properties.settings.recoil // trueRecoil
        ],
        children: []
      };
      return {
        getLastShot: gun.lastShot.slice,
        getTracking: isInert ? function () {} : function () {
          return getTracking(gun);
        },
        live: isInert ? function () {} : function () {
          return live(gun);
        }
      };
    };
  };
  // The attributes object
  var Attributes = function Attributes() {
    return {
      physical: {
        acceleration: 0,
        topSpeed: 0,
        penetration: 0,
        damage: 0,
        fov: 0,
        density: 0,
        stealth: 0,
        pushability: 0,
        range: 0
      },
      settings: {
        drawHealth: false,
        drawShape: false,
        damageEffects: false,
        ratioEffects: false,
        motionEffects: false,
        acceptsScore: false,
        givesKillMessage: false,
        canGoOutsideRoom: false,
        hitsOwnType: false,
        diesAtLowSpeed: false,
        diesAtRange: false,
        independent: false,
        persistsAfterDeath: false,
        clearOnMasterUpgrade: false,
        healthWithLevel: false,
        isObstacle: false,
        isNecromancer: false,
        hasNoRecoil: false,
        cravesAttention: false,
        buffVsFood: false,
        leaderboardable: false,
        reloadToAcceleration: false,
        variesInSize: false,
        isFood: false,
        isIntangable: false
      },
      body: {
        acceleration: 0,
        speed: 0,
        health: 0,
        resist: 0,
        shield: 0,
        regen: 0,
        damage: 0,
        penetration: 0,
        fov: 0,
        range: 0,
        density: 0,
        stealth: 0,
        pushability: 0,
        heteroMultiplier: 0
      },
      aiSettings: {
        farm: false,
        blind: false,
        chase: false,
        skynet: false,
        view360: false,
        reverseDirection: false,
        shapefriend: false
      },
      index: -1,
      mockup: {},
      label: '',
      type: -1,
      shape: 0,
      color: 0,
      motionType: -1,
      facingType: -1,
      damageClass: 0,
      skillNames: 0,
      dangerValue: 1,
      squiggle: 1,
      upgrades: [],
      maxChildren: 0,
      creationMessage: ''
    };
  };
  // A definer
  var define = function () {
    var check = function check(val) {
      return val != null;
    };
    return function (def) {
      var obj = Attributes();
      if (def.PARENT != null) {
        for (var i = 0; i < def.PARENT.length; i++) {
          _this.define(def.PARENT[i]);
        }
      }
      if (check(def.index)) obj.index = def.index;
      if (check(def.NAME)) obj.name = def.NAME;
      if (check(def.LABEL)) obj.label = def.LABEL;
      if (check(def.TYPE)) obj.type = def.TYPE;
      if (check(def.SHAPE)) obj.shape = def.SHAPE;
      if (check(def.COLOR)) obj.color = def.COLOR;
      if (def.CONTROLLERS != null) {
        var toAdd = [];
        def.CONTROLLERS.forEach(function (ioName) {
          toAdd.push(eval('new io_' + ioName + '(this)'));
        });
        _this.addController(toAdd);
      }
      if (check(def.MOTION_TYPE)) obj.motionType = def.MOTION_TYPE;
      if (check(def.FACING_TYPE)) obj.facingType = def.FACING_TYPE;
      if (check(def.BROADCAST_MESSAGE)) obj.creationMessage = def.BROADCAST_MESSAGE;
      if (check(def.DAMAGE_CLASS)) obj.damageClass = def.DAMAGE_CLASS;
      if (check(def.STAT_NAMES)) obj.skillNames = def.STAT_NAMES;
      if (check(def.DANGER)) obj.dangervalue = def.DANGER;
      // Settings stuff
      if (check(def.DRAW_HEALTH)) obj.settings.drawHealth = def.DRAW_HEALTH;
      if (check(def.DRAW_SELF)) obj.settings.drawShape = def.DRAW_SELF;
      if (check(def.DAMAGE_EFFECTS)) obj.settings.damageEffects = def.DAMAGE_EFFECTS;
      if (check(def.RATIO_EFFECTS)) obj.settings.ratioEffects = def.RATIO_EFFECTS;
      if (check(def.MOTION_EFFECTS)) obj.settings.motionEffects = def.MOTION_EFFECTS;
      if (check(def.ACCEPTS_SCORE)) obj.settings.acceptsScore = def.ACCEPTS_SCORE;
      if (check(def.GIVE_KILL_MESSAGE)) obj.settings.givesKillMessage = def.GIVE_KILL_MESSAGE;
      if (check(def.CAN_GO_OUTSIDE_ROOM)) obj.settings.canGoOutsideRoom = def.CAN_GO_OUTSIDE_ROOM;
      if (check(def.HITS_OWN_TYPE)) obj.settings.hitsOwnType = def.HITS_OWN_TYPE;
      if (check(def.DIE_AT_LOW_SPEED)) obj.settings.diesAtLowSpeed = def.DIE_AT_LOW_SPEED;
      if (check(def.DIE_AT_RANGE)) obj.settings.diesAtRange = def.DIE_AT_RANGE;
      if (check(def.INDEPENDENT)) obj.settings.independent = def.INDEPENDENT;
      if (check(def.PERSISTS_AFTER_DEATH)) obj.settings.persistsAfterDeath = def.PERSISTS_AFTER_DEATH;
      if (check(def.CLEAR_ON_MASTER_UPGRADE)) obj.settings.clearOnMasterUpgrade = def.CLEAR_ON_MASTER_UPGRADE;
      if (check(def.HEALTH_WITH_LEVEL)) obj.settings.health = def.HEALTH_WITH_LEVEL;
      if (check(def.OBSTACLE)) obj.settings.isObstacle = def.OBSTACLE;
      if (check(def.NECRO)) obj.settings.isNecromancer = def.NECRO;
      if (check(def.HAS_NO_RECOIL)) obj.settings.hasNoRecoil = def.HAS_NO_RECOIL;
      if (check(def.CRAVES_ATTENTION)) obj.settings.cravesAttention = def.CRAVES_ATTENTION;
      if (check(def.BUFF_VS_FOOD)) obj.settings.buffVsFood = def.BUFF_VS_FOOD;
      if (check(def.CAN_BE_ON_LEADERBOARD)) obj.settings.leaderboardable = def.CAN_BE_ON_LEADERBOARD;
      if (check(def.IS_SMASHER)) obj.settings.reloadToAcceleration = def.IS_SMASHER;
      if (check(def.INTANGIBLE)) obj.settings.isIntangable = def.INTANGIBLE;
      if (check(def.VARIES_IN_SIZE)) obj.settings.variesInSize = def.VARIES_IN_SIZE;
      // AI settings
      if (check(def.AI)) {
        if (check(def.AI.NO_LEAD)) obj.aiSettings.chase = def.AI.NO_LEAD;
        if (check(def.AI.SKYNET)) obj.aiSettings.skynet = def.AI.SKYNET;
        if (check(def.AI.BLIND)) obj.aiSettings.blind = def.AI.BLIND;
        if (check(def.AI.FARMER)) obj.aiSettings.farm = def.AI.FARMER;
        if (check(def.AI.FULL_VIEW)) obj.aiSettings.view360 = def.AI.FULL_VIEW;
        if (check(def.AI.STRAFE)) obj.aiSettings.reverseDirection = def.AI.STRAFE;
        if (check(def.AI.LIKES_SHAPES)) obj.aiSettings.shapefriend = def.AI.LIKES_SHAPES;
      }
      // Upgrades stuff
      if (def.RESET_UPGRADES) obj.upgrades = [];
      if (check(def.UPGRADES_TIER_1)) def.UPGRADES_TIER_1.forEach(function (e) {
        obj.upgrades.push({
          "class": e,
          level: c.TIER_1,
          index: e.index
        });
      });
      if (check(def.UPGRADES_TIER_2)) def.UPGRADES_TIER_2.forEach(function (e) {
        obj.upgrades.push({
          "class": e,
          level: c.TIER_2,
          index: e.index
        });
      });
      if (check(def.UPGRADES_TIER_3)) def.UPGRADES_TIER_3.forEach(function (e) {
        obj.upgrades.push({
          "class": e,
          level: c.TIER_3,
          index: e.index
        });
      });
      if (def.SIZE != null) {
        _this.SIZE = def.SIZE * _this.squiggle;
        if (_this.coreSize == null) {
          _this.coreSize = _this.SIZE;
        }
      }
      if (def.SKILL != null && def.SKILL != []) {
        if (def.SKILL.length != 10) {
          throw 'Inappropiate skill raws.';
        }
        _this.skill.set(def.SKILL);
      }
      if (def.LEVEL != null) {
        if (def.LEVEL === -1) {
          _this.skill.reset();
        }
        while (_this.skill.level < c.SKILL_CHEAT_CAP && _this.skill.level < def.LEVEL) {
          _this.skill.score += _this.skill.levelScore;
          _this.skill.maintain();
        }
        _this.refreshBodyAttributes();
      }
      if (def.SKILL_CAP != null && def.SKILL_CAP != []) {
        if (def.SKILL_CAP.length != 10) {
          throw 'Inappropiate skill caps.';
        }
        _this.skill.setCaps(def.SKILL_CAP);
      }
      if (def.VALUE != null) {
        _this.skill.score = Math.max(_this.skill.score, def.VALUE * _this.squiggle);
      }
      if (def.ALT_ABILITIES != null) {
        _this.abilities = def.ALT_ABILITIES;
      }
      if (def.GUNS != null) {
        var newGuns = [];
        def.GUNS.forEach(function (gundef) {
          newGuns.push(new Gun(_this, gundef));
        });
        _this.guns = newGuns;
      }
      if (def.MAX_CHILDREN != null) {
        _this.maxChildren = def.MAX_CHILDREN;
      }
      if (def.FOOD != null) {
        if (def.FOOD.LEVEL != null) {
          _this.foodLevel = def.FOOD.LEVEL;
          _this.foodCountup = 0;
        }
      }
      if (def.BODY != null) {
        if (def.BODY.ACCELERATION != null) {
          _this.ACCELERATION = def.BODY.ACCELERATION;
        }
        if (def.BODY.SPEED != null) {
          _this.SPEED = def.BODY.SPEED;
        }
        if (def.BODY.HEALTH != null) {
          _this.HEALTH = def.BODY.HEALTH;
        }
        if (def.BODY.RESIST != null) {
          _this.RESIST = def.BODY.RESIST;
        }
        if (def.BODY.SHIELD != null) {
          _this.SHIELD = def.BODY.SHIELD;
        }
        if (def.BODY.REGEN != null) {
          _this.REGEN = def.BODY.REGEN;
        }
        if (def.BODY.DAMAGE != null) {
          _this.DAMAGE = def.BODY.DAMAGE;
        }
        if (def.BODY.PENETRATION != null) {
          _this.PENETRATION = def.BODY.PENETRATION;
        }
        if (def.BODY.FOV != null) {
          _this.FOV = def.BODY.FOV;
        }
        if (def.BODY.RANGE != null) {
          _this.RANGE = def.BODY.RANGE;
        }
        if (def.BODY.SHOCK_ABSORB != null) {
          _this.SHOCK_ABSORB = def.BODY.SHOCK_ABSORB;
        }
        if (def.BODY.DENSITY != null) {
          _this.DENSITY = def.BODY.DENSITY;
        }
        if (def.BODY.STEALTH != null) {
          _this.STEALTH = def.BODY.STEALTH;
        }
        if (def.BODY.PUSHABILITY != null) {
          _this.PUSHABILITY = def.BODY.PUSHABILITY;
        }
        if (def.BODY.HETERO != null) {
          _this.heteroMultiplier = def.BODY.HETERO;
        }
        _this.refreshBodyAttributes();
      }
      if (def.TURRETS != null) {
        var o;
        _this.turrets.forEach(function (o) {
          return o.destroy();
        });
        _this.turrets = [];
        def.TURRETS.forEach(function (def) {
          o = new Entity(_this, _this.master);
          (Array.isArray(def.TYPE) ? def.TYPE : [def.TYPE]).forEach(function (type) {
            return o.define(type);
          });
          o.bindToMaster(def.POSITION, _this);
        });
      }
      if (def.mockup != null) {
        _this.mockup = def.mockup;
      }
    };
  }();
  // Return the constructor
  return function (x, y) {
    var creationTime = util.time();
    var status = newStatusBox();
    var kills = newKillBox();
    var skills = newSkills();
    // Inheritance and control
    var family = {
      master: null,
      source: null,
      parent: null
    };
    // Health
    var health = healthTypes.newStatic();
    var shield = healthTypes.newDynamic();
    // Return the new entity
    return {
      life: function life() {},
      getSkills: function getSkills() {
        return skills.get();
      },
      refreshBodyAttributes: function refreshBodyAttributes() {},
      define: function define(type) {},
      setTeam: function setTeam(team) {},
      getTeam: function getTeam() {},
      setMaster: function setMaster(master) {},
      getMaster: function getMaster() {},
      setColor: function setColor(col) {},
      setFacing: function setFacing(dir) {},
      setSize: function setSize(size) {},
      getFacing: function getFacing() {},
      getSize: function getSize() {},
      getLabel: function getLabel() {},
      getMaxChildren: function getMaxChildren() {},
      addChild: function addChild(newlyborn) {},
      removeChild: function removeChild(deadkid) {},
      addDerefFunction: function addDerefFunction(func) {},
      isInvulnurable: function isInvulnurable() {},
      getVelocity: function getVelocity() {
        return [0, 0];
      },
      getPosition: function getPosition() {
        return [0, 0];
      },
      accelerate: function accelerate(amount, direction) {},
      shove: function shove(x, y) {},
      forceSizeUpdate: function forceSizeUpdate() {},
      getBulletColor: function getBulletColor() {},
      assignSkills: function assignSkills(assignment) {
        return skills.set(assignment);
      },
      necro: function necro() {},
      fullHeal: function fullHeal() {}
    };
  };
};