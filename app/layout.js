import "./globals.css";
import { Dancing_Script} from 'next/font/google'
import "./utils/ fontawesome"
import Nav from"../app/components/nav/page"
import 'aos/dist/aos.css';

const DancingScript = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "VITA LENTA",
  description: "....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={DancingScript.className}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
