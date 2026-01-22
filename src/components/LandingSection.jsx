import React from 'react'
import { FaStar } from "react-icons/fa6";

const LandingSection = ({movie ,onOpenModal}) => {
  

  return (
    <>

      <div className='relative lg:min-h-[calc(100vh-80px)]'>
        <img className='w-full h-full object-cover absolute inset-0' src={movie ? movie.yatayURL : "https://images.mubicdn.net/images/film/4665/cache-33723-1745490437/image-w1280.jpg"} alt="" />
        <div className='bg-black/50 relative w-full h-full top-0 text-white grid grid-cols-1 lg:grid-cols-2 p-12 lg:gap-52 gap-2 sm:items-center justify-between'>
          <div className='flex flex-col place-items-start gap-5 '>
            <p className='text-5xl font-bold'>{movie ? movie.filmName : "Aşk ve Gurur"}</p>
            <p>{movie ? movie.desc : "Film, Jane Austen’in beş kız kardeş, Jane, Elizabeth, Mary, Kitty ve Lydia Bennet’i anlatan romanından uyarlanmıştır. Hikaye George dönemi İngilteresi’nde geçer. Ailenin yaşamı, genç ve zengin bir adam olan Bay Bingley’in ve onun en yakın arkadaşı Bay Darcy’nin komşu gelişleri ile tepetaklak olur. Kızların anneleri olan Bayan Bennet, onların evlenmelerini istemektedir. Bay Bingley’in iyi bir aday olduğuna kanaat getirir. Bu aday ise Jane’den etkilenecektir. Bu durumu fark eden anneleri, kızını yağmurlu bir günde Bingley’in malikanesine gönderir. Geri dönemeyen Jane, üstüne bir de hastalanır. Bu kez ona yardıma giden Elizabeth de Bay Darcy’nin takibine takılır. Elizabeth bu durumdan hoşlansa da esas Bay Wickham’dan ziyadesi ile etkilenecektir. Lydia işin içine hesapsızca dahil olduğunda cesaret kavramı gözler önüne serilir. Gururun, aşkın önüne geçtiği bir çizgide kız kardeşlerin yaşamları umulmadık bir biçimde karmaşıklacaktır."}</p>
            <button onClick={onOpenModal} className=' border cursor-pointer rounded-3xl p-2 hover:scale-115 transition-transform duration-300'>Film ekle +</button>
          </div>

          <div className='flex flex-col place-items-start gap-3 bg-white/15 backdrop-blur-sm rounded-3xl p-4 '>
            <div className='grid grid-cols-3 gap-2'>
              <div className='aspect-3/4'>
                <img className='object-cover rounded-3xl w-full h-full mb-2' src={movie ? movie.firstActorImg : "https://images.ntv.com.tr/images/81e11eab-adbd-4416-922d-3d11b2c82a75.jpg?width=880&format=webp"} alt="" />
                <p className='text-gray-400'>{movie ? movie.firstActorName : "Keira Knightley"}</p>
              </div>
              <div className='aspect-3/4'>
                <img className='object-cover rounded-3xl w-full h-full mb-2' src={movie ? movie.secondActorImg : "https://goldenglobes.com/wp-content/uploads/2023/12/Matthew-Macfadyen-Photo.jpg"} alt="" />
                <p className='text-gray-400'>{movie ? movie.secondActorName : "Matthew Macfadyen"}</p>
              </div>
              <div className='aspect-3/4'>
                <img className='object-cover rounded-3xl w-full h-full mb-2' src={movie ? movie.thirdActorImg : "https://tr.web.img4.acsta.net/pictures/15/07/24/10/05/242676.jpg"} alt="" />
                <p className='text-gray-400'>{movie ? movie.thirdActorName : "Rosamund Pike"}</p>
              </div>
            </div>
            <p className='flex items-center gap-2'>IMDB: <FaStar className='text-orange-500' />{movie ? movie.imdb : "7.8"}/10</p>
            <p> {movie ? movie.category : "Aşk"} / {movie ? movie.year : 2005} </p>
          </div>
        </div>
      
      </div>


    </>
  )
}

export default LandingSection
