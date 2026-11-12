# Pierre-Stéphane Voltaire's portfolio

A portfolio website built with React, TypeScript, and Vite. It presents professional experience and provides downloadable developer and DevOps résumés.

## Development

```sh
npm install
npm run dev
```

Run `npm run build` to build the site, `npm run preview` to preview the build, and `npm run lint` to check the code.

## Content

- `src/cv.json` contains profile, experience, and education content.
- `src/components/` contains the website components.
- `public/resumes/` contains the résumé LaTeX sources and downloadable PDFs. Recompile the corresponding `.tex` file after editing it to update the PDF.
