
/* Data layer for analytics by Littledata app, version v11.0.1 */
(function () {
  if (window.LittledataLayer) {
  	console.warn("Littledata snippet included multiple times.");
  	return;
  }

  function getCookieMatching(o){return document.cookie.length>0?document.cookie.split(";").map(o=>o.trim()).map(o=>o.split("=")).filter(([i])=>i?.match?.(o)).map(([o,i])=>({[o]:i})):[]}const gaClientIDCookie=getCookieMatching(/^_ga$/).map(o=>o[Object.keys(o).pop()]).pop(),gaSessionIDCookie=getCookieMatching(/^_ga_.+$/).map(o=>o[Object.keys(o).pop()]).pop(),ga4ClientID=gaClientIDCookie?.split?.(".")?.slice?.(2,4).join("."),ga4SessionID=gaSessionIDCookie?.split?.(".")?.[2];

  

  window.LittledataLayer = {
   ...{
  "betaTester": false,
  "productPageClicks": true,
  "productListLinksHaveImages": false,
  "productListLinksHavePrices": false,
  "productListsOnAnyPage": true,
  "debug": true,
  "respectUserTrackingConsent": false,
  "productClicks": true,
  "hideBranding": false,
  "referralExclusion": "/(paypal|visa|MasterCard|clicksafe|arcot\\.com|geschuetzteinkaufen|checkout\\.shopify\\.com|checkout\\.rechargeapps\\.com|portal\\.afterpay\\.com|payfort)/",
  "googleAnalytics4": {
    "measurementId": "G-WMP411PCFL",
    "googleSignals": true,
    "disabledEvents": [],
    "clientSidePurchase": false,
    "cookieUpdate": true,
    "googleAdsConversionIds": [],
    "doNotTrackReplaceState": false,
    "usePageTypeForListName": false,
    "uniqueIdentifierForOrders": "orderName",
    "ordersFilteredBySourceName": [],
    "disabledApps": [
      {
        "id": "129785",
        "label": "Shopify POS"
      }
    ],
    "extraLinkerDomains": [],
    "disabledRecurring": false,
    "productIdentifier": "VARIANT_ID",
    "productIdentifierUpdatedAt": "2023-11-14T14:45:20.007Z",
    "uniqueIdentifierForOrdersUpdatedAt": "2022-08-25T07:51:08.549Z"
  },
  "ecommerce": {
    "currencyCode": "{{shop.currency}}",
    "impressions": []
  },
  "version": "v11.0.1",
  "transactionWatcherURL": "https://transactions.littledata.io"
},
   attributes: {
			...(ga4ClientID && { '_google-clientID': ga4ClientID }),
			...(ga4SessionID && { '_ga4session-clientID': ga4SessionID }),
		}
  }
	console.log(`%cThis store uses Littledata 🚀 to automate its Google Analytics setup and make better, data-driven decisions. Learn more at https://apps.shopify.com/littledata`,'color: #088f87;',);
  
		function colibrius_gLoad() {
			const colibrius_g = document.createElement('script');

			colibrius_g.type = 'text/javascript';
			colibrius_g.async = true;
			colibrius_g.src = 'https://d26ky332zktp97.cloudfront.net/colibrius-g.js';

			document.head.appendChild(colibrius_g);
		}
		colibrius_gLoad();
	
})();
