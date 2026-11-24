# One Word for Your Wi-Fi

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/alfian-triadi/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/alfian-triadi/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

Entry for the [One Word for Your Wi-Fi](https://make.fun/c/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) bounty on [make.fun](https://make.fun).

## The word

> **Ghosting**

8 characters. One word, no trailing newline.

It vanishes mid-call, mid-download, mid-sentence — no warning, no goodbye.
My Wi-Fi ghosts me.

## How it works

`main.ts` (Node 22+) holds the word as a constant, validates it
(1–20 characters, a single word, not only whitespace), then writes it to
`/output/entry.txt` with no trailing newline.

```sh
node main.ts
cat /output/entry.txt
```
