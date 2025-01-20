'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); 

export default function Jumbo() {

    useGSAP(() => {
      gsap.to('.box', { x: 360 });
    return;

},{}); 
}