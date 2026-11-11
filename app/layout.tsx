import type { Metadata } from 'next';
import {Header,Footer} from '@/components/Shell';
import './globals.css';
export const metadata:Metadata={title:{default:'Bloody Ragdoll Physics — Interactive Wiki & Field Guide',template:'%s | Bloody Ragdoll Physics Guide'},description:'Explore confirmed weapons, syringes, NPC Wars and world events. An independent visual wiki with interactive experiments and honest source notes.',icons:{icon:'/icon.svg',apple:'/apple-touch-icon.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main">{children}</main><Footer/></body></html>}
