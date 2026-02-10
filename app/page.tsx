import Footer from "../components/footer";
import Nav from "../components/nav";


export default () => <>
  <div className="bg-[#f7f2e0]">
  <div className="p-3">
  <section className="
  bg-[linear-gradient(to_right,rgba(255,255,255,0.7),rgb(255,255,255,0)),url('https://images.squarespace-cdn.com/content/v1/59532d4ae3df28164a992472/1511677346888-EXO1I0MIIKQM57LW8GID/jaroslaw-ceborski-250955.jpg?format=2500w')] 
  bg-cover bg-center rounded-[1.5em]">
    <div className="p-10 pt-20 ">
    <h2 className="text-[#544d4d] font-bold text-[1.2em] [text-shadow:_1px_2px_rgb(225,188,96)]">Lorem ipsum dolor sit amet.</h2>
    <h1 className="text-[#544d4d] font-bold text-[2em] [text-shadow:_1px_3px_rgb(225,188,96)]">WE ARE THE BEST</h1>
    <p className="mt-5 w-120">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, at ullam. Voluptatem aliquam, consequuntur ab pariatur eius odio quae vel!</p>
    <div className="mt-5 ml-4 bg-[#544d4d] w-35 h-10 flex items-center justify-center text-white rounded-[12rem] font-bold">Join us now </div>
    </div>
  </section>
  </div>
  <main>
    <div className="flex justify-around pt-2 pb-2 border-y-2  border-[#544d4d] font-bold text-[#544d4d]">
      <div className="">SERVICE1</div>
      <div className="">SERVICE2</div>
      <div className="">SERVICE3</div>
    </div>
    <div>
      <div className="w-full h-56 flex justify-around p-2 gap-2">
        <div className="w-95 m-0.5 "><img className="w-full h-full rounded-xl" src="https://images.pexels.com/photos/5675754/pexels-photo-5675754.jpeg" alt="" /></div>
        <div className="w-95 m-0.5"><img className="w-full h-full rounded-xl" src="https://images.pexels.com/photos/8102189/pexels-photo-8102189.jpeg" alt="" /></div>
        <div className="w-95 m-0.5"><img className="w-full h-full rounded-xl" src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg" alt="" /></div>
        <div className="w-95 m-0.5"><img className="w-full h-full rounded-xl" src="https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg" alt="" /></div>
      </div>
    </div>
  </main>
  </div>
</>

