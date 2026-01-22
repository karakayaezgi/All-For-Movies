import React, { useEffect, useState } from 'react'

const Modal = ({ onClose, onSubmitMovie, editingMovie, onUpdateMovie }) => {


  const getInitialFormData = () => (
    {
      id: crypto.randomUUID(),
      filmName: "",
      category: "",
      imdb: "",
      desc: "",
      year: "",
      yatayURL: "",
      dikeyURL: "",
      firstActorName: "",
      firstActorImg: "",
      secondActorName: "",
      secondActorImg: "",
      thirdActorName: "",
      thirdActorImg: "",
      isFavorite: false,
      isWatched: false
    }
  )
  const [formData, setFormData] = useState(getInitialFormData())

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingMovie) {
      onUpdateMovie(formData)
    }
    else {
      onSubmitMovie(formData)
    }
    setFormData(getInitialFormData())
    onClose()
  }

  useEffect(() => {
    if (editingMovie) {
      setFormData(editingMovie)
    }
  }, [editingMovie])


  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/50'></div>
      <form onSubmit={handleSubmit} className='bg-white relative rounded-2xl flex flex-col gap-3 text-black p-4 w-[90%] max-w-md max-h-[95vh] overflow-y-auto'>
        <h1 className='text-3xl font-semibold'>{editingMovie ? "Filmi Güncelle" : "Film Ekle"}</h1>
        <input required onChange={handleChange} value={formData.filmName} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='filmName' placeholder='Film adı...' />
        <select required onChange={handleChange} value={formData.category} name="category" className='border-gray-400 border outline-0 rounded-2xl p-2'>
          <option value="">Lütfen kategori seçiniz.</option>
          <option value="Bilim Kurgu">Bilim Kurgu</option>
          <option value="Aşk">Aşk</option>
          <option value="Dram">Dram</option>
          <option value="Çocuk">Çocuk</option>
          <option value="Komedi">Komedi</option>
          <option value="Korku Gerilim">Korku Gerilim</option>
          <option value="Macera-Fantazi">Macera-Fantazi</option>
          <option value="Epik Biyografik Gerilim">Epik Biyografik Gerilim</option>
        </select>
        <input required onChange={handleChange} value={formData.imdb} className='border-gray-400 border outline-0 rounded-2xl p-2' type="number" name='imdb' placeholder='IMDB puanı...(10 üzerinden)' />
        <textarea required onChange={handleChange} value={formData.desc} rows={4} className='border-gray-400 border outline-0 rounded-2xl p-2 min-h-25 md:min-h-35' name="desc" placeholder='Film açıklaması...'></textarea>
        <input required onChange={handleChange} value={formData.year} className='border-gray-400 border outline-0 rounded-2xl p-2' type="number" name='year' placeholder='Çıkış yılı...' />
        <input required onChange={handleChange} value={formData.yatayURL} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='yatayURL' placeholder='Yatay kapak resim URL...' />
        <input required onChange={handleChange} value={formData.dikeyURL} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='dikeyURL' placeholder='Dikey kapak resim URL...' />
        <input required onChange={handleChange} value={formData.firstActorName} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='firstActorName' placeholder='1. oyuncu adı...' />
        <input required onChange={handleChange} value={formData.firstActorImg} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='firstActorImg' placeholder='1. oyuncu resim...' />
        <input required onChange={handleChange} value={formData.secondActorName} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='secondActorName' placeholder='2. oyuncu adı...' />
        <input required onChange={handleChange} value={formData.secondActorImg} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='secondActorImg' placeholder='2. oyuncu resim...' />
        <input required onChange={handleChange} value={formData.thirdActorName} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='thirdActorName' placeholder='3. oyuncu adı...' />
        <input required onChange={handleChange} value={formData.thirdActorImg} className='border-gray-400 border outline-0 rounded-2xl p-2' type="text" name='thirdActorImg' placeholder='3. oyuncu resim...' />
        <div className='flex gap-2 justify-end'>
          <button onClick={onClose} className='cursor-pointer border border-gray-400 p-2 rounded-2xl' type='button'>Kapat</button>
          <button className='cursor-pointer border border-green-800 p-2 rounded-2xl text-green-800' type='submit'>Kaydet</button>
        </div>
      </form>
    </div>
  )
}

export default Modal
