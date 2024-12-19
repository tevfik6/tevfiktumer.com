import { useData } from "vitepress";
const translations = {
    "en": {
        "about-me": "About Me",
        "works": "Works",
        "read-more": "Read More",
        "blog": "Blog",
        "blogs": "Blogs",
        "next-page": "Next",
        "previous-page": "Previous",
        "dark_mode": {
            "label": "Color Mode",
            "light": "Light",
            "dark": "Dark",
            "system": "System",
        },
        "pagination-results": "Showing :fromPage to :toPage of :totalResults results.",
        "words": "words",
        "page-not-found": "The page not found!",
    },
    "tr": {
        "about-me": "Hakkımda",
        "works": "Projeler",
        "read-more": "Tamamını Oku",
        "blog": "Blog",
        "blogs": "Bloglar",
        "next-page": "Sonraki",
        "previous-page": "Önceki",
        "dark_mode": {
            "label": "Reng Modu",
            "light": "Aydınlık",
            "dark": "Karanlık",
            "system": "Sistem",
        },
        "pagination-results": "Toplam :totalResults, :fromPage'den :toPage'e kadarı gösteriliyor.",
        "pagination-results": ":totalResults sonuçtan :fromPage ile :toPage arası gösteriliyor",
        "words": "kelime",
        "page-not-found": "Sayfa bulunamadı!",
    }
};

const $translate = (key, alternative) => {
    const { site } = useData()
    const lang = site.value.lang
    const result = key.split('.').reduce((o, i) => {
        if (o) return o[i]
    }, translations[lang]);
    return result || alternative || key;
}

const $replaceVariables = (str, keyValues = {}) => {
    const keys = Object.keys(keyValues);
    if (keys.length) {
        let key
        for (key of keys) {
            const regex = new RegExp(`:${key}`, "g");
            str = str.replace(regex, keyValues[key]);
        }
    }
    return str;
}


export { $translate, $replaceVariables, translations };