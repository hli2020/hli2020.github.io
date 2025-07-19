import * as React from "react"



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full overflow-hidden max-w-2xl'>

            {children}

            <footer className="w-full px-6 my-24 gap-6 flex flex-col items-center select-none">

                <div className="w-full max-w-7xl text-xs">
                    © 2021 - 2025
                </div>

            </footer>

        </main>
    );
}
