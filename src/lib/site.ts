export const site = {
  name: "ЛИДЕР БЕТОН ГРУПП",
  legalName: "ООО «ЛИДЕР БЕТОН ГРУПП»",
  region: "Москва и Московская область",
  title: "Бетон с доставкой по Москве и Московской области",
  description:
    "Поставка бетона от производителя с доставкой по Москве и Московской области. Каталог марок, цены за 1 м³ и форма заявки.",
  phonePrimary: "+7 (495) 032-99-98",
  phoneSecondary: "+7 (495) 032-60-40",
  phonePrimaryHref: "tel:+74950329998",
  phoneSecondaryHref: "tel:+74950326040",
  whatsapp: "+7 986 703-74-24",
  whatsappHref: "https://wa.me/79867037424",
  maxHref: "https://max.ru/79867037424",
  telegramHref: "https://t.me/+79516457971",
  yandexMapHref: "https://yandex.ru/maps/-/CPTxRR8M",
  yandexMapWidgetSrc:
    "https://yandex.ru/map-widget/v1/?ll=37.071927%2C55.549429&z=16&pt=37.071927%2C55.549429%2Cpm2rdm",
  priceNote:
    "Цены указаны за 1 м³ без учета доставки. Итоговая стоимость рассчитывается индивидуально.",
  deliveryText:
    "Стоимость доставки рассчитывается индивидуально и зависит от адреса объекта, объема заказа, марки бетона, времени подачи и условий подъезда."
};

export const messengerLinks = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: site.whatsappHref,
    ariaLabel: "Написать в WhatsApp"
  },
  {
    key: "max",
    label: "MAX",
    href: site.maxHref,
    ariaLabel: "Написать в MAX"
  },
  {
    key: "telegram",
    label: "Telegram",
    href: site.telegramHref,
    ariaLabel: "Написать в Telegram"
  }
] as const;

export const navItems = [
  { href: "/", label: "Главная" },
  { href: "/o-kompanii/", label: "О компании" },
  { href: "/catalog/", label: "Каталог и цены" },
  { href: "/dostavka/", label: "Доставка" },
  { href: "/primery-rabot/", label: "Примеры работ" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/kontakty/", label: "Контакты" }
];
