const PID2COV = {
    "santander_ar": "Argentina",
    "pagofacil_ar": "Argentina",
    "rapipago_ar": "Argentina",
    "bancodobrasil_br": "Brazil",
    "itau_br": "Brazil",
    "boleto_br": "Brazil",
    "bradesco_br": "Brazil",
    "caixa_br": "Brazil",
    "santander_br": "Brazil",
    "bancochile_cl": "Chile",
    "redcompra_cl": "Chile",
    "webpay_cl": "Chile",
    "servipag_cl": "Chile",
    "santander_cl": "Chile",
    "yamoney": "CIS countries",
    "webmoney": "CIS countries",
    "yamoneyac": "CIS countries",
    "qiwi": "CIS countries",
    "efecty_co": "Colombia",
    "pse_co": "Colombia",
    "davivienda_co": "Colombia",
    "exito_co": "Colombia",
    "baloto_co": "Colombia",
    "oc_co": "Colombia",
    "carulla_co": "Colombia",
    "surtimax_co": "Colombia",
    "payu_cz": "Czech Republic",
    "trustpay": "Europe",
    "neosurf": "France",
    "cherrycredits": "Global including South East",
    "upi_in": "India",
    "ebanking_in": "India",
    "bankcard_in": "India",
    "doku_id": "Indonesia",
    "atm_id": "Indonesia",
    "alfamart_id": "Indonesia",
    "boacompra": "Latin America",
    "ebanking_my": "Malaysia",
    "bancomer_mx": "Mexico",
    "santander_mx": "Mexico",
    "oxxo_mx": "Mexico",
    "spei_mx": "Mexico",
    "wavemoney_mm": "Myanmar",
    "reddotpay_mm": "Myanmar",
    "ooredoo_mm": "Myanmar",
    "telenor_mm": "Myanmar",
    "bcp_pe": "Peru",
    "interbank_pe": "Peru",
    "bbva_pe": "Peru",
    "pagoefectivo_pe": "Peru",
    "dragonpay_ph": "Philippines",
    "bayad_ph": "Philippines",
    "cebuana_ph": "Philippines",
    "ecpay_ph": "Philippines",
    "gcash_ph": "Philippines",
    "lbc_ph": "Philippines",
    "mlh_ph": "Philippines",
    "rds_ph": "Philippines",
    "smr_ph": "Philippines",
    "bol_ph": "Philippines",
    "711_ph": "Philippines",
    "dotpay_pl": "Poland",
    "yamoneygp": "Russia",
    "moneta_ru": "Russia",
    "alfaclick_ru": "Russia",
    "promsvyazbank_ru": "Russia",
    "faktura_ru": "Russia",
    "russianpost_ru": "Russia",
    "banktransfer_ru": "Russia",
    "beeline_ru": "Russia",
    "mtc_ru": "Russia",
    "tele2_ru": "Russia",
    "enets_sg": "Singapore",
    "gash_tw": "Taiwan",
    "scb_th": "Thailand",
    "krungsri_th": "Thailand",
    "ktb_th": "Thailand",
    "uob_th": "Thailand",
    "bankcard_tr": "Turkey",
    "redpagos_uy": "Uruguay",
    "abitab_uy": "Uruguay",
};
const PID2PM = {
    "711_ph": "7-Eleven Philippines",
    "abitab_uy": "Abitab Uruguay",
    "alfaclick_ru": "Alfa-Click Russia",
    "alfamart_id": "Alfamart Indonesia",
    "alipay_cn": "Alipay China",
    "atm_id": "ATM Indonesia",
    "baloto_co": "Baloto Colombia",
    "bancochile_cl": "Banco de Chile",
    "bancodobrasil_br": "bancodobrasil Brazil",
    "bancomer_mx": "BBVA Bancomer Mexico",
    "bancontact_be": "Bancontact/Mistercash Belgium",
    "bankcard_in": "India Credit/Debit Card India",
    "bankcard_tr": "Turkish Credit/Bank Card Turkey",
    "banktransfer_ru": "Russia Bank transfer Russia",
    "bayad_ph": "Bayad Center Philippines",
    "bbva_pe": "BBVA Peru",
    "bcp_pe": "BCP Peru",
    "beeline_ru": "Beeline Russia",
    "bitcash_jp": "Bitcash Japan",
    "boacompra": "BoaCompra Latin America",
    "bol_ph": "Bancnet Online Philippines",
    "boleto_br": "Boleto Brazil",
    "bradesco_br": "bradesco Brazil",
    "caixa_br": "caixa Brazil",
    "carulla_co": "Carulla Colombia",
    "cebuana_ph": "Cebuana Lhuillier Philippines",
    "cherrycredits": "CherryCredits Global",
    "creditcard_kr": "South Korea Credit Card",
    "davivienda_co": "Davivienda Colombia",
    "docomo_jp": "Docomo Carrier Billing Japan",
    "doku_id": "Doku Indonesia",
    "dotpay_pl": "Dotpay Poland",
    "dragonpay_ph": "Dragonpay Philippines",
    "ebanking_in": "India Netbanking India",
    "ebanking_kr": "South Korea Internet Banking",
    "ebanking_my": "E-banking Malaysia",
    "ecpay_ph": "ECPay Philippines",
    "efecty_co": "Efecty Colombia",
    "enets_sg": "eNets Singapore",
    "eps_at": "EPS Austria",
    "exito_co": "Almacenes Exito Colombia",
    "faktura_ru": "Faktura Russia",
    "gash_tw": "Gash Taiwan",
    "gcash_ph": "Globe Gcash Philippines",
    "giropay_de": "Giropay Germany",
    "ideal_nl": "iDeal Netherlands",
    "interbank_pe": "Interbank Peru",
    "itau_br": "itau Brazil",
    "krungsri_th": "Krungsri Thailand",
    "ktb_th": "Krung Thai Bank Thailand",
    "lbc_ph": "LBC Philippines",
    "mlh_ph": "M. Lhuillier Philippines",
    "molpoints": "MOLPoints Global",
    "molpointscard": "MOLPoints card Global",
    "moneta_ru": "Moneta Russia",
    "mtc_ru": "MTC Russia",
    "multibanco_pt": "Multibanco Portugal",
    "neosurf": "Neosurf France",
    "netcash_jp": "Netcash Japan",
    "oc_co": "Banco de Occidente Colombia",
    "onecard": "onecard",
    "ooredoo_mm": "Ooredoo Myanmar",
    "oxxo_mx": "oxxo Mexico",
    "p24_pl": "P24 Poland",
    "pagoefectivo_pe": "Pago Efectivo Peru",
    "pagofacil_ar": "Pago Fácil Argentina",
    "paysafecard": "Paysafecard Global",
    "payu_cz": "PayU Czech Republic",
    "payu_pl": "PayU Poland",
    "polipayment": "Polipayment Australia & New Zealand",
    "promsvyazbank_ru": "Promsvyazbank Russia",
    "pse_co": "PSE Colombia",
    "qiwi": "QIWI CIS countries",
    "rapipago_ar": "Rapi Pago Argentina",
    "rds_ph": "Robinsons Dept Store Philippines",
    "redcompra_cl": "RedCompra Chile",
    "reddotpay_mm": "Red dot pay Myanmar",
    "redpagos_uy": "redpagos Uruguay",
    "russianpost_ru": "Russian Post centres",
    "santander_ar": "Santander Rio Argentina",
    "santander_br": "Santander Brazil",
    "santander_cl": "Santander Chile",
    "santander_mx": "Santander Mexico",
    "scb_th": "SCB Thailand",
    "servipag_cl": "Servipag Chile",
    "smr_ph": "SM Payment Counters Philippines",
    "sofort": "Sofort Europe",
    "spei_mx": "SPEI Mexico",
    "surtimax_co": "Surtimax Colombia",
    "tele2_ru": "Tele2 Russia",
    "telenor_mm": "Telenor Myanmar",
    "tenpay_cn": "Tenpay China",
    "trustpay": "Trustpay Europe",
    "unionpay_cn": "Unionpay China",
    "uob_th": "UOB Thailand",
    "upi_in": "UPI India",
    "wavemoney_mm": "Wave Money Myanmar",
    "webmoney": "Webmoney",
    "webmoney_jp": "WebMoney Japan",
    "webpay_cl": "WebPay plus Chile",
    "yamoney": "Yandex.Money",
    "yamoneyac": "Bank Card (Yandex.Money)",
    "yamoneygp": "Cash (Yandex.Money) Russia",
};
const LAN2COV = {
    "english": [
        "India",
        "Indonesia",
        "Malaysia",
        "Philippines",
        "Singapore",
    ],
    "russian": [
        "CIS countries",
        "Russia",
    ],
    "thai": [
        "Thailand",
        "Myanmar",
    ],
    "spanish": [
        "Argentina",
        "Chile",
        "Colombia",
        "Mexico",
        "Peru",
        "Uruguay",
    ],
    "german": [
        "Germany",
        "Austria",
        "Belgium",
    ],
    "brazilian": [
        "Brazil",
    ],
    "vietnamese": [],
    "turkish": [
        "Turkey",
    ],
    "tchinese": [
        "Taiwan",
    ],
    "french": [
        "France",
        "Belgium",
    ],
    "koreana": [
        "South Korea",
    ],
    "ukrainian": [],
    "polish": [
        "Poland",
    ],
    "czech": [
        "Czech Republic",
    ],
    "swedish": [],
    "latam": [],
    "italian": [],
    "japanese": [
        "Japan",
    ],
    "danish": [],
    "portuguese": [
        "Portugal",
    ],
    "romanian": [],
    "finnish": [],
    "norwegian": [],
    "dutch": [
        "Netherlands",
        "Belgium",
    ],
    "bulgarian": [],
    "greek": [],
    "hungarian": [],
    "en": [],
    "harem": [],
};
//# sourceMappingURL=payssion.js.map