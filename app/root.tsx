import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "@navikt/ds-css/dist/index.css";
import "./tailwind.css";
import {Box, Page} from "@navikt/ds-react";



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

        <ScrollRestoration />
        <Scripts />
        <Page
            footer={
              <Box background="surface-neutral-moderate" padding="8" as="footer">
                <Page.Block gutters width="lg">

                </Page.Block>
              </Box>
            }
        >
          <Box background="surface-neutral-moderate" padding="8" as="header">
            <Page.Block gutters width="lg">
              <img src={"Logo.png"} alt={"logo"} style={{width: "150px"}}/>
            </Page.Block>
          </Box>
          <Box
              padding="8"
              paddingBlock="16"
              as="main"
          >
            <Page.Block gutters width="lg">
              {children}
            </Page.Block>
          </Box>
        </Page>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
