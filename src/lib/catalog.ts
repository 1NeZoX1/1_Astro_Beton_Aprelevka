import productsJson from "@data/products.json";

export type RawProduct = {
  category: string;
  title?: string;
  name?: string;
  price: number;
};

export type Product = {
  category: string;
  sourceCategory: string;
  title: string;
  price: number;
  slug: string;
  categorySlug: string;
  concreteSubcategory?: string;
  concreteSubcategorySlug?: string;
  unit: "м³";
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
};

export type Category = {
  title: string;
  slug: string;
};

export type CategoryPage = Category & {
  description: string;
  seoTitle: string;
  seoDescription: string;
  products: Product[];
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ConcreteSubcategory = {
  title: string;
  slug: string;
};

export const CONCRETE_SUBCATEGORIES: ConcreteSubcategory[] = [
  { title: "Бетон на граните", slug: "granit" },
  { title: "Бетон на гравии", slug: "graviy" },
  { title: "Товарный бетон", slug: "tovarnyy-beton" },
  { title: "Гидротехнический бетон", slug: "gidrotehnicheskiy-beton" },
  { title: "Бетон на мелком щебне", slug: "melkiy-scheben" },
  { title: "Бетон по схеме Г", slug: "shema-g" },
  { title: "Тощий бетон", slug: "toschiy-beton" },
  { title: "Другое", slug: "drugoe" }
];

const DISPLAY_CATEGORIES: CategoryPage[] = [
  {
    title: "Бетон",
    slug: "beton",
    description: "Товарный бетон популярных марок для строительных и монолитных работ.",
    seoTitle: "Бетон купить с доставкой",
    seoDescription:
      "Каталог товарного бетона с доставкой по Москве и Московской области. Цены за 1 м³ и заявка на расчет.",
    products: []
  },
  {
    title: "Бетон с ПМД",
    slug: "beton-s-pmd",
    description:
      "Бетон с противоморозной добавкой для строительных работ при пониженных температурах.",
    seoTitle: "Бетон с ПМД купить с доставкой",
    seoDescription:
      "Бетон с ПМД: цены за 1 м³, позиции в каталоге и заявка на поставку по Москве и Московской области.",
    products: []
  },
  {
    title: "Фибробетон",
    slug: "fibrobeton",
    description:
      "Бетонные смеси с фиброволокном для задач, где требуется дополнительная устойчивость к трещинообразованию.",
    seoTitle: "Фибробетон купить с доставкой",
    seoDescription:
      "Фибробетон с доставкой по Москве и Московской области: цены за 1 м³ и заявка на поставку.",
    products: []
  },
  {
    title: "Керамзитобетон",
    slug: "keramzitobeton",
    description:
      "Легкий бетон на керамзитовом заполнителе для стяжек, перекрытий и ограждающих конструкций.",
    seoTitle: "Керамзитобетон купить с доставкой",
    seoDescription:
      "Керамзитобетон с доставкой по Москве и Московской области: цены, карточки товаров и заявка.",
    products: []
  },
  {
    title: "Сухой бетон",
    slug: "suhoy-beton",
    description: "Сухие бетонные смеси для приготовления раствора на строительной площадке.",
    seoTitle: "Сухой бетон купить с доставкой",
    seoDescription:
      "Сухой бетон в каталоге ЛИДЕР БЕТОН ГРУПП: цены за 1 м³ и заявка на поставку.",
    products: []
  },
  {
    title: "Растворы и ЦПС",
    slug: "rastvory-i-cps",
    description: "Растворы, пескобетон и цементно-песчаные смеси для кладочных и монтажных работ.",
    seoTitle: "Растворы и ЦПС купить с доставкой",
    seoDescription:
      "Растворы, пескобетон и ЦПС с доставкой по Москве и Московской области: цены и заявка на заказ.",
    products: []
  },
  {
    title: "Аренда техники",
    slug: "arenda-tehniki",
    description:
      "Позиции по аренде автобетононасоса, миксера с насосом и дополнительного оборудования.",
    seoTitle: "Аренда техники для бетона",
    seoDescription:
      "Аренда техники для подачи бетона по Москве и Московской области. Заявка на расчет стоимости.",
    products: []
  },
  {
    title: "Другое",
    slug: "drugoe",
    description: "Дополнительные материалы и позиции каталога для строительных работ.",
    seoTitle: "Строительные материалы и услуги",
    seoDescription:
      "Дополнительные материалы и позиции каталога с доставкой по Москве и Московской области.",
    products: []
  }
];

const DISPLAY_CATEGORY_BY_SLUG = new Map(
  DISPLAY_CATEGORIES.map((category) => [category.slug, category])
);

const EXCLUDED_CATEGORIES = new Set([
  "Арматура А3 25Г2С",
  "Арматура А3 А500С",
  "Арматура А1 А240"
]);

const EXCLUDED_PRODUCT_VALUES = new Set(["12", "бетон с пмд+a64:g68"]);

const TRANSLIT: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya"
};

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .split("")
    .map((char) => TRANSLIT[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProductTitle(product: RawProduct): string {
  return String(product.title ?? product.name ?? "").trim();
}

function isExcludedProductValue(value: unknown): boolean {
  const normalized = String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();

  return EXCLUDED_PRODUCT_VALUES.has(normalized) || normalized.includes("a64:g68");
}

function isVisibleProduct(product: RawProduct): boolean {
  return (
    Boolean(product.category?.trim() && getProductTitle(product)) &&
    !EXCLUDED_CATEGORIES.has(product.category) &&
    ![product.category, product.title, product.name].some(isExcludedProductValue)
  );
}

function classifyProduct(product: RawProduct): CategoryPage {
  const text = `${product.category} ${getProductTitle(product)}`.toLowerCase();

  if (/пмд|противомороз/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("beton-s-pmd")!;
  }

  if (/фибро/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("fibrobeton")!;
  }

  if (/керамзит/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("keramzitobeton")!;
  }

  if (/сухой бетон/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("suhoy-beton")!;
  }

  if (/цпс|цементно-песчан|раствор|пескобетон/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("rastvory-i-cps")!;
  }

  if (/аренда|автобетононасос|миксер|бетоновод|доп\.?\s*техника|труба/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("arenda-tehniki")!;
  }

  if (/бетон/.test(text)) {
    return DISPLAY_CATEGORY_BY_SLUG.get("beton")!;
  }

  return DISPLAY_CATEGORY_BY_SLUG.get("drugoe")!;
}

function getConcreteSubcategory(
  displayCategory: CategoryPage,
  sourceCategory: string,
  title: string
): ConcreteSubcategory | undefined {
  if (displayCategory.slug !== "beton") {
    return undefined;
  }

  const text = `${sourceCategory} ${title}`.toLowerCase();

  if (/гранит|граните|грните/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "granit");
  }

  if (/грави[йи]/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "graviy");
  }

  if (/гидротехническ/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find(
      (subcategory) => subcategory.slug === "gidrotehnicheskiy-beton"
    );
  }

  if (/мелком щебне|мелкий щебень/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "melkiy-scheben");
  }

  if (/схем[ае]\s*г/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "shema-g");
  }

  if (/тощий/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "toschiy-beton");
  }

  if (/доставка бетона|товарный бетон|бетон/.test(text)) {
    return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "tovarnyy-beton");
  }

  return CONCRETE_SUBCATEGORIES.find((subcategory) => subcategory.slug === "drugoe");
}

function normalizeProduct(product: RawProduct, slugCounts: Map<string, number>): Product {
  const sourceCategory = String(product.category).trim();
  const title = getProductTitle(product);
  const displayCategory = classifyProduct(product);
  const concreteSubcategory = getConcreteSubcategory(displayCategory, sourceCategory, title);
  const baseSlug = slugify(title);
  const slugKey = `${displayCategory.slug}/${baseSlug}`;
  const count = slugCounts.get(slugKey) ?? 0;
  slugCounts.set(slugKey, count + 1);
  const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

  return {
    category: displayCategory.title,
    sourceCategory,
    title,
    price: Number(product.price),
    categorySlug: displayCategory.slug,
    slug,
    concreteSubcategory: concreteSubcategory?.title,
    concreteSubcategorySlug: concreteSubcategory?.slug,
    unit: "м³",
    shortDescription: `${displayCategory.title}: позиция каталога для строительных работ с доставкой по Москве и Московской области.`,
    seoTitle: `${title} купить с доставкой`,
    seoDescription: `Купить ${title} с доставкой по Москве и Московской области. Цена за 1 м³ без учета доставки.`
  };
}

const slugCounts = new Map<string, number>();

export const products: Product[] = (productsJson as RawProduct[])
  .filter(isVisibleProduct)
  .map((product) => normalizeProduct(product, slugCounts))
  .filter((product) => Boolean(product.categorySlug && product.slug));

export const categoryPages: CategoryPage[] = DISPLAY_CATEGORIES.map((category) => ({
  ...category,
  products: products.filter((product) => product.categorySlug === category.slug)
}));

export const categories: Category[] = categoryPages.map(({ title, slug }) => ({ title, slug }));

export function getCategory(categorySlug: string): CategoryPage | undefined {
  return categoryPages.find((category) => category.slug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string): Product | undefined {
  return products.find(
    (product) => product.categorySlug === categorySlug && product.slug === productSlug
  );
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, limit);
}

export function getPopularProducts(limit = 8): Product[] {
  return products.slice(0, limit);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price);
}

export function formatProductPrice(product: Product): string {
  const price = `${formatPrice(product.price)} ₽`;
  return product.categorySlug === "arenda-tehniki" ? price : `${price}/${product.unit}`;
}

export function getProductSpecs(title: string): ProductSpec[] {
  const specs: ProductSpec[] = [];
  const patterns: Array<[string, RegExp]> = [
    ["Марка", /(?:^|\s)(М\d+)/i],
    ["Класс", /(?:^|\s)([BВ]\d+(?:[.,]\d+)?)/i],
    ["Подвижность", /(?:^|\s)(П\d+)/i],
    ["Морозостойкость", /(?:^|\s)(F\d+)/i],
    ["Водонепроницаемость", /(?:^|\s)(W\d+)/i]
  ];

  for (const [label, pattern] of patterns) {
    const match = title.match(pattern);
    if (match?.[1]) {
      specs.push({ label, value: match[1].toUpperCase() });
    }
  }

  return specs;
}
