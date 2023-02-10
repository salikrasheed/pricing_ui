"use client"
import { ChakraProvider } from '@chakra-ui/react';
import { Features } from './features';
import { Header } from './header';
import { Pricing } from './pricing';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
        <Header/>
        <Pricing/>
        <Features/>
        {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
