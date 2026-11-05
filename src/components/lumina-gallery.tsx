import {useEffect,useState} from 'react';
const slides=Array.from({length:7},(_,i)=>({src:`/images/lumina/0${i+1}.png`,alt:`Lumina supplied product-listing sample ${i+1} of 7`}));
export function LuminaGallery(){
 const [index,setIndex]=useState(0),[playing,setPlaying]=useState(()=>!matchMedia('(prefers-reduced-motion: reduce)').matches),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>{if(media.matches)setPlaying(false)};media.addEventListener('change',change);return()=>media.removeEventListener('change',change)},[]);
 useEffect(()=>{if(!playing||hovered||focused)return;const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),4000);return()=>clearInterval(timer)},[playing,hovered,focused,index]);
 function select(i:number){setIndex((i+7)%7)}
 return <section className="lumina-gallery" aria-label="Lumina seven-image listing gallery" aria-roledescription="carousel" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}><div className="lumina-gallery-stage"><img key={index} src={slides[index].src} alt={slides[index].alt} width="1254" height="1254"/></div><div className="lumina-gallery-controls"><span>Image {index+1} / 7</span></div><div className="lumina-thumbnails" aria-label="Choose listing image">{slides.map((slide,i)=><button key={slide.src} aria-label={`Show image ${i+1}`} aria-pressed={i===index} onClick={()=>select(i)}><img src={slide.src} alt="" width="80" height="80" loading="lazy"/></button>)}</div></section>
}
