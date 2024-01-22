import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Staallain</title>
      </head>
      <body>
        {children}

        <br/>

        <section id="bodys" style={{backgroundColor: "black", width: "98vw", height: "89vh", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "1vh" }}>
          <div style={{color: "white", fontFamily: "monospace", fontSize: "3vh", letterSpacing : "1vh"}}> 
          Choose one of this options:
            <ul>
              <Link href='/docs/SKZ'>SKZ</Link>
              <br/>
              <Link href='/docs/XH'>XH</Link>
              <br/>
              <Link href='/docs/SKZ/-XH'>BOTH</Link>
            </ul>
          </div>
        </section>

      </body>
    </html>
  );
}
