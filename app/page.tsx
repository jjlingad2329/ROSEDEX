"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, ChevronDown, Clock3, MapPin, MessageCircle } from "lucide-react";

const gallery = [
  "/images/c0c8859d-f923-47ec-b95f-9ce0fa0e1174.jpg", "/images/b5ea757b-3020-47d7-905b-2ba69562a8f9.jpg",
  "/images/96d910b7-c2a8-4f49-a7df-237eed9b554b.jpg", "/images/3a7257fc-fe4c-4e91-afb9-f70a3222d557.jpg",
  "/images/1df7a90f-f30c-41b7-987a-4017fc54a819.jpg", "/images/10d73bd7-9b53-4105-9eab-56764f80a1de.jpg",
];

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const distance = Math.max(0, new Date("2026-10-03T13:00:00+08:00").getTime() - Date.now());
      setTime({ days: Math.floor(distance / 86400000), hours: Math.floor((distance / 3600000) % 24), minutes: Math.floor((distance / 60000) % 60), seconds: Math.floor((distance / 1000) % 60) });
    };
    tick(); const timer = window.setInterval(tick, 1000); return () => window.clearInterval(timer);
  }, []);
  return <div className="countdown">{Object.entries(time).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <section className="hero">
      <Image src="/images/9e855fdb-6a91-46ee-b436-e5d7843d88c6.jpg" alt="Dexter and Rosemarie" fill priority className="hero-photo" />
      <div className="hero-shade" />
      <nav aria-label="Wedding invitation"><a href="#story" className="monogram">D<span>&amp;</span>R</a><a href="#details">The day</a><a href="#attire">Attire</a><a href="#rsvp">RSVP</a></nav>
      <div className="hero-copy reveal"><p className="eyebrow">Passport to marriage</p><h1><span>Dexter</span><i>&amp;</i><span>Rosemarie</span></h1><p className="date">03 · 10 · 2026</p></div>
      <a href="#story" className="scroll-cue" aria-label="Continue to invitation"><span>Open our invitation</span><ChevronDown size={18} /></a>
    </section>

    <section id="story" className="intro paper-section"><p className="kicker">With the grace of God and the blessings of our beloved parents</p><h2>We joyfully invite you to witness the uniting of our lives as one.</h2><div className="parents"><div><span>Groom’s parents</span><p>Mr. Wilson Pangilinan<br/>Mrs. Myrna Presbitero</p></div><div className="seal">D<span>&amp;</span>R</div><div><span>Bride’s parents</span><p>Mr. Ronelo Acala<br/>Mrs. Gemma Acala</p></div></div></section>

    <section className="portrait-section"><div className="portrait-frame"><Image src="/images/b5ea757b-3020-47d7-905b-2ba69562a8f9.jpg" alt="Dexter and Rosemarie together" fill sizes="(max-width: 800px) 86vw, 46vw" /></div><div className="verse"><p>Kawikaan 19:14</p><blockquote>“Bahay at mga kayamanan ay minamana sa mga magulang; ngunit ang mabait na asawa ay galing sa Panginoon.”</blockquote></div></section>

    <section id="details" className="details paper-section"><p className="kicker">Your itinerary</p><h2>Save the date</h2><Countdown /><div className="detail-grid"><article><CalendarDays/><span>Date</span><h3>Saturday<br/>October 3, 2026</h3></article><article><Clock3/><span>Time</span><h3>Ceremony · 1:00 PM<br/>Reception · 4:00 PM</h3></article><article><MapPin/><span>Ceremony</span><h3>Iglesia Ni Cristo<br/>Lokal ng Sapalibutad</h3></article><article><MapPin/><span>Reception</span><h3>Finizzio Grande<br/>Bornal St., Sta. Cruz, Magalang</h3></article></div></section>

    <section className="passport-wrap"><Image src="/images/96d910b7-c2a8-4f49-a7df-237eed9b554b.jpg" alt="Passport to marriage invitation details" width={904} height={625} /></section>

    <section id="attire" className="attire"><div><p className="kicker">Dress code</p><h2>Autumn formal</h2><p>We kindly encourage our guests to wear formal attire in our warm wedding colors. Please reserve white for the bride.</p><div className="swatches" aria-label="Wedding color palette">{["#4b1d0b","#76320d","#9b4c21","#bf5b23","#dc7d2c","#dfa05d","#e9b77e"].map(c=><span key={c} style={{background:c}} />)}</div></div><div className="attire-card"><Image src="/images/3a7257fc-fe4c-4e91-afb9-f70a3222d557.jpg" alt="Wedding attire guide" fill sizes="(max-width: 800px) 90vw, 42vw" /></div></section>

    <section className="gallery" aria-label="Wedding invitation gallery">{gallery.map((src, i)=><figure key={src} className={`gallery-${i}`}><Image src={src} alt={i === 0 ? "Dexter and Rosemarie wedding invitation" : "Dexter and Rosemarie invitation detail"} fill sizes="(max-width: 800px) 90vw, 42vw" /></figure>)}</section>

    <section id="rsvp" className="rsvp"><p className="kicker">Kindly reply</p><h2>Will you join us?</h2><p>Please respond on or before <strong>September 25, 2026</strong>. Seats are limited to confirmed guests, and this will be an adults-only celebration.</p><button onClick={()=>setOpen(!open)} aria-expanded={open}><MessageCircle size={18}/>{open ? "Hide contacts" : "RSVP with us"}</button><div className={`contact-card ${open ? "open" : ""}`} aria-hidden={!open}><a href="sms:+639363468327">Dexter · 0936 346 8327</a><a href="sms:+639657245903">Rose · 0965 724 5903</a><p>Messenger: Dexter Presbitero</p></div></section>
    <footer><div className="footer-mark">D<span>&amp;</span>R</div><p>Cheers to the happy couple</p><small>October 3, 2026 · Magalang, Pampanga</small></footer>
  </main>;
}
