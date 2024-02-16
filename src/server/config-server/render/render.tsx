import { Request, Response } from "express";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Helmet } from "react-helmet";
import { I18nextProvider } from "react-i18next";
import { StaticRouter } from "react-router-dom/server";

import App from "../../../client/App";

export default async (req: Request, res: Response) => {
    const helmet = Helmet.renderStatic();
    let didError = false;

    const [, lang] = req.url.split("/");

    req.i18n.changeLanguage(lang);

    const stream = renderToPipeableStream(
        <I18nextProvider i18n={req.i18n}>
            <StaticRouter location={req.path}>
                <App />
            </StaticRouter>
        </I18nextProvider>,
        {
            onAllReady() {
                res.statusCode = didError ? 500 : 200;
                res.setHeader("Content-type", "text/html");
                res.write(`<!DOCTYPE html`);
                res.write(`<html ${helmet.htmlAttributes.toString()}>
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    ${helmet.link.toString()}
                    <meta charset="UTF-8">
                    ${
                        process.env.NODE_ENV === "development" &&
                        `<script src=${process.env.BROWSER_REFRESH_URL}></script>`
                    }
                    <script>window.initialLanguage = '${lang}';</script>

                </head>
                <body>`);
                res.write(`<div id="root">`);
                stream.pipe(res);
                res.write(`</div>`);
                res.write(
                    `<script async data-chunk="main" src="http://localhost:${process.env.PORT}/static/main.js"></script>`
                );

                res.write(`</body></html>`);
            },
            onShellError() {
                res.statusCode = 500;
                res.send(`<h1>An error occurred</h1>`);
            },
            onError(err) {
                didError = true;
                console.error(err);
            },
        }
    );
};
