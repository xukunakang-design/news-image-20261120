# Sum up 20 November's world news in one image

Entry for make.fun `news-image-20261120`, Friday 20 November 2026.

The program is `main.ts` (Node 22, standard library only). It reads
`entry.png` in this repository and writes it byte for byte to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` locally).

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is a newspaper front-page infographic titled
FRIDAY 20 NOVEMBER 2026, with five stories:

1. World Court: Myanmar guilty of Rohingya genocide, 9-6 ruling in The Hague.
2. Shenzhen Summit: Trump, Xi and Putin meet, joint declaration, no breakthrough.
3. Markets: Anthropic ANT closes $97, up 17% on debut; stocks fall 5th day, Nikkei down 4.8%.
4. Riyadh: Houthi missile hits sovereign wealth fund tower, Saudi intercepts another missile and 5 drones.
5. Kyiv and Europe: Russian strikes hit Kyiv bridges, 8 killed; Russia violates Poland airspace; Estonia closes Russia border for 6 months.

Image is 1024x1024 PNG, under 1 MiB.
