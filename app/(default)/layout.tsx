import * as React from "react"



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full overflow-hidden'>

            {children}

            <footer className="w-full px-6 my-24 gap-6 flex flex-col items-center select-none">

                <div className="w-full max-w-5xl text-xs">
                    All rights reserved © 2025
                </div>

            </footer>

        </main>
    );
}
