## Dev server

Spouštěj na pozadí: `astro dev --background`
Správa: `astro dev stop`, `astro dev status`, `astro dev logs`

## Dokumentace

Před úkoly s těmito tématy si přečti příslušný návod:

- [Stránky, dynamické routy](https://docs.astro.build/en/guides/routing/)
- [Astro komponenty](https://docs.astro.build/en/basics/astro-components/)
- [Obsah a kolekce](https://docs.astro.build/en/guides/content-collections/)
- [Styly](https://docs.astro.build/en/guides/styling/)


# Kuchařka

Osobní kuchařka, jeden projekt do mého portfolia. Stack: Astro 6, čisté CSS, bez dalších frameworků. Web je statický, bude na GitHub Pages.

## Stránky
- `/` landing: hero + karty receptů
- `/recepty/[slug]` detail receptu (jedna šablona pro všechny recepty)
- Kontakt a seznam projektů tu NEJSOU, jsou na mém samostatném portfoliu. Jen odkaz "← portfolio".

## Struktura
- `src/content.config.ts` schéma kolekce `recepty`
- `src/content/recepty/*.md` recepty (frontmatter: title, kategorie, cas, porce, ingredience; postup v těle)
- `src/layouts/Base.astro` společný rámec (pruh, hlavička, patička)
- `src/components/RecipeCard.astro` karta receptu
- `src/styles/global.css` CSS proměnné a základ
- `public/` statické soubory (sken utěrky)

## Design
- Minimalistický. Jedno červené akcentní místo, hodně prostoru.
- Pozadí stránky #FCFAF7, karty #FFFFFF s tenkým rámečkem, bez stínů.
- Červená #D8354C (tmavší #A82438), růžová #F4DCD8, text #2B1015.
- Nadpisy Instrument Serif, text Manrope.
- Utěrka jen jako detail: pruh nahoře ze skenu (`/towel-border.jpg`), případně menší prvky. Nikdy jako pozadí pod textem.
- Barvy vždy přes CSS proměnné z `global.css`, žádné natvrdo zapsané hodnoty.
- Bez tmavého režimu.
- Mobile-first, dostupnost (alt texty, viditelný focus).

## Pravidla pro práci
- Komunikuj česky, stručně a neformálně.
- Jsem student a mám to mít v portfoliu, takže piš čistý, čitelný kód a u změn krátce vysvětli proč.
- Před větší změnou nejdřív popiš, co uděláš.
- Dělej malé kroky, po každém ať to jde spustit (`npm run dev`).
- Nepřidávej nové knihovny bez zeptání.
- Soubory s příponou `.astro` nemaž ani nepřejmenovávej bez zeptání.

## Aktuální stav
- Hotovo: layout, styly, karta, schéma, první recept (shakshuka), repo na GitHubu (Streans/kucharka).
- Rozpracované: landing page `src/pages/index.astro` hlásí chybu, zatím nevyřešeno.
- Dál: detail receptu `src/pages/recepty/[slug].astro`, víc receptů, pruh ze skenu utěrky, filtr podle kategorie, nasazení na GitHub Pages.