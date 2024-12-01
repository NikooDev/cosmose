'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import toast from 'react-hot-toast';
import './footer.scss';

const Footer = () => {
  const [email, setEmail] = useState<string | null>();

  const handleNewsletters = () => {
    const isEmailReg = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    toast.dismiss();

    if (email && isEmailReg.test(email)) {


      toast.success('Vous êtes maintenant inscrit à notre newsletter', { id: 'newsletters-success', duration: 5000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '15px', color: 'rgb(30 41 59)' } });
      setEmail('');
    } else if (!email || email.length === 0 || (email.trim() && !isEmailReg.test(email))) {
      toast.error('Votre adresse e-mail est incorrecte', { id: 'newsletters-error', duration: 3000, className: 'font-NexaHeavy', style: { background: 'rgb(232 229 251)', borderRadius: '30px', color: 'rgb(30 41 59)' } });
    }
  }

  return (
    <footer role="contentinfo" className="pt-10">
      <div className="container mx-auto flex gap-28 !px-24">
        <div className="w-3/4">
          <p className="font-NexaHeavy text-[1.3rem]">Liens utiles</p>
          <ul className="mt-3 leading-7">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
            <li><Link href="/confidentialite" className="hover:underline">Confidentialité</Link></li>
            <li><Link href="/sitemap" className="hover:underline">Plan du site</Link></li>
          </ul>
        </div>
        <div className="w-full">
          <p className="font-NexaHeavy text-[1.3rem]">Newsletters</p>
          <label className="mt-1 text-2xl font-NexaExtraLight whitespace-nowrap" htmlFor="newsletter">Ne manquez pas vos nouveautés</label>
          <div className="flex gap-4 items-center mt-5">
            <input type="text" id="newsletter" value={email ? email : ''} onChange={(event) => setEmail(event.target.value)} placeholder="Adresse e-mail" className="placeholder:text-theme-50 border border-theme-50 h-9 px-4 rounded-full w-full bg-transparent"/>
            <Button onClick={handleNewsletters} className="mt-0 px-8 h-9">S'inscrire</Button>
          </div>
        </div>
        <div className="w-3/4">
          <p className="font-NexaHeavy text-[1.3rem]">Nos réseaux</p>
          <ul className="mt-3 flex gap-7">
            <li>
              <a href="" target="_blank" role="button" className="group">
                <img src="/img/icons/instagram.svg" height={32} width={32} className="group-hover:scale-[1.2] transition-transform" alt="instagram"/>
              </a>
            </li>
            <li>
              <a href="" target="_blank" role="button" className="group">
                <img src="/img/icons/facebook.svg" height={32} width={32} className="group-hover:scale-[1.2] transition-transform" alt="facebook"/>
              </a>
            </li>
            <li>
              <a href="" target="_blank" role="button" className="group">
                <img src="/img/icons/linkedin.svg" height={32} width={32} className="group-hover:scale-[1.2] transition-transform" alt="linkedin"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center my-8">Cosmose © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
