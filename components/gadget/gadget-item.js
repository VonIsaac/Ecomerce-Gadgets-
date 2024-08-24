import Link from 'next/link';
import Image from 'next/image';


export default function GadgetItem({ title, slug, image, summary, creator }) {
  console.log(image); 
  return (
    <article className = " text-white m-5 bg-stone-800 py-5 px-2 w-[600px] rounded-lg" >
      <header className = " flex justify-center items-center flex-col">
        <div   >
          <Image 
              src={image} 
              alt={title}  
              width={500}
              height={500} 
              className = " w-[150px]" 
            />
        </div>
        <div >
          <h2 className = " text-3xl font-bold mt-3 text-gray-600">{title}</h2>
          <p className = " text-xs font-semibold text-gray-500 mb-4">by {creator}</p>
        </div>
      </header>
      <div>
        <p className = " text-center font-semibold mb-5 text-lg">{summary}</p>
        <div className = " text-end mx-3 ">
          <Link href={`/gadgets/${slug}`} className ="bg-slate-900 px-2 py-2 text-lg font-bold rounded-md">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}