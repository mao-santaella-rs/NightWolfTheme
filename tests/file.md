# Markdown Syntax Example

## 1. Headings

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## 2. Emphasis

*Italic*  
_Italic_  
**Bold**  
__Bold__  
***Bold and Italic***  
~~StrikeThrough~~

---

## 3. Lists

### Unordered List

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
    - Sub-subitem 2.2.1
* Item 3
+ Item 4

### Ordered List

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

---

## 4. Links

[Inline Link](https://www.example.com)  
[Reference Link][ref-link]  
<https://www.example.com>

[ref-link]: https://www.example.com "Example Website"

---

## 5. Images

![Alt text](https://via.placeholder.com/150 "Optional Title")  
![Reference Image][img-ref]

[img-ref]: https://via.placeholder.com/100 "Placeholder Image"

---

## 6. Blockquotes

> This is a blockquote.
>
> > Nested blockquote.

---

## 7. Code

Inline code: `console.log('Hello, world!')`

### Code Block (fenced)

```js
// JavaScript example
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Mao');
```

### Indented Code Block

    # Python example
    def hello():
        print("Hello, world!")

---

## 8. Horizontal Rule

---
***
___

---

## 9. Tables

| Syntax | Description | Example |
|--------|-------------|---------|
| Header | Title       | Text    |
| Cell   | Cell        | Cell    |

---

## 10. Task Lists

- [x] Write the outline
- [ ] Add more examples
- [ ] Review the file

---

## 11. HTML in Markdown

<div style="color: red;">This is HTML inside Markdown!</div>

---

## 12. Escaping Characters

\*This text is not italicized\*

---

## 13. Footnotes

Here is a footnote reference.[^1]

[^1]: Here is the footnote.

---

## 14. Definition Lists (not standard, but supported in some flavors)

Term 1
:   Definition 1

Term 2
:   Definition 2

---

## 15. Emoji (GitHub Flavored)

:smile: :rocket: :+1:

---

## 16. Math (if supported)

Inline math: \( E = mc^2 \)

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

---