import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Маршрутизатор разработчика платёжных решений',description:'Найдите подходящий путь развития платежного решения.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>}
