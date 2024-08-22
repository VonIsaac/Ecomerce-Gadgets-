import ImagePicker from "@/components/images/image-picker";
export default function ShareGadgetPage() {

    const classes = "bg-gray-400 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-neutral-600 px-2 py-1 focus:outline-neutral-ring-neutral-600 w-[25rem]"
    const classess  =  "bg-gray-400 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-neutral-600 px-2 py-1 focus:outline-neutral-ring-neutral-600"
  return (
    <>
      <header className = " text-white my-6 mx-4 flex justify-center items-center flex-col">
        <h1 className  = " text-5xl font-bold my-5 text-gray-600">
          Share your <span className = " text-blue-600">favorite Gadgets</span>
        </h1>
        <p className = " text-gray-500 font-semibold text-lg">Or any other gadgets you feel needs sharing!</p>
      </header>
      <main className = " text-white flex justify-center items-center " >
        <form >
          <div className = " flex gap-4 my-5">
            <p className = " flex flex-col">
              <label htmlFor = "name" className = " text-xl font-bold mb-1 uppercase text-gray-500" >Your name</label>
              <input type="text" id="name" name="name" required className ={classes} />
            </p>
            <p className = "flex flex-col">
              <label htmlFor="email" className = " text-xl font-bold mb-1 uppercase text-gray-500">Your email</label>
              <input type="email" id="email" name="email" required className ={classes} />
            </p>
          </div>
          <p className = "flex flex-col mb-3">
            <label htmlFor="title"  className = " text-xl font-bold mb-1 uppercase text-gray-500">Title</label>
            <input type="text" id="title" name="title" required className = {classess} />
          </p>
          <p className = "flex flex-col mb-3">
            <label htmlFor="summary" className = " text-xl font-bold mb-1 uppercase text-gray-500">Short Summary</label>
            <input type="text" id="summary" name="summary" required  className = {classess} />
          </p>
          <p  className = "flex flex-col mb-3">
            <label htmlFor="instructions" className = " text-xl font-bold mb-1 uppercase text-gray-500">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className = " rounded-md bg-neutral-500 font-bold px-4 py-2 text-xl "
            ></textarea>
          </p>
          <ImagePicker label= "Your Image" name= "image" />
          <p className = " flex items-end justify-end my-5">
            <button type="submit" className = " bg-neutral-700 px-3 py-1 rounded font-bold uppercase">
                Share Gadgets
            </button>
          </p>
        </form>
      </main>
    </>
  );
}