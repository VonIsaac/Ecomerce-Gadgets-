import Link from 'next/link';
import Image from 'next/image';


export default function GadgetItem({ title, slug, image, summary, creator }) {
  return (
    <article className = " text-white m-5" >
      <header className = "  ">
        <div   >
          <Image 
              src={image} 
              alt={title}  
              width={500}
              height={500} 
              className = " w-[100px]" 
            />
        </div>
        <div >
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div>
        <p >{summary}</p>
        <div>
          <Link href={`/gadgets/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}