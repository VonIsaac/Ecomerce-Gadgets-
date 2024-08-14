import Link from 'next/link';
import Image from 'next/image';


export default function GadgetItem({ title, slug, image, summary, creator }) {
  return (
    <article className = " text-white" >
      <header>
        <div >
          <Image src={image} alt={title} fill />
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