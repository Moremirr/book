import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const StageYes = () => {
  return (
    <div className="flex flex-col items-center space-y-8 w-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Heart className="w-20 h-20 md:w-32 md:h-32 text-red-500 drop-shadow-2xl" fill="currentColor" />
      </motion.div>
      <h1 className="text-2xl md:text-5xl font-bold text-white shadow-pink-500/50 drop-shadow-lg text-center leading-tight">
        Yay! I'm so happy! 🎉
      </h1>
      <div className="max-h-[70vh] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 pr-4 touch-auto">
        <div className="text-lg md:text-xl text-white/90 leading-relaxed text-justify space-y-4 pb-6">
          <p>Haloo dindin, ini beneran nih kamu pilih opsi iya!??, gila banget dunia ini</p>
          <p>THANK YOUUU UDAH PILIH IYA YAH‼️‼️‼️</p>
          <p>Speechless banget nih aku, ga nyangka si adindut mau ngasih gua kesempatan😿, ga nyangka doa-doa aku terjawab😿</p>
          <p>I know your last relationship might have given you some bad memories and trust issues with this kind of relationship, karena itu aku ga akan menyiakan kepercayaan yang udah kamu kasih ke aku, aku akan usahain sebaik mungkin to give the love you deserve.</p>
          <p>Perkataan doang sulit untuk nunjukin kebahagiaan aku dari kamu yang memilih untuk memberi aku kesempatan dalam menjalankan kisah romantis yang alay seperti di film-film, dibalik kekurangan dan kesalahan yang udah aku buat selamat beberapa bulan kita bertemu kembali ini, aku mau ngucapin makasih lagi ke kamu, karena kamu mau mencoba menerima aku for who I am, dan tentus saja AKU JANJI BAKAL BERUSAHA NGILANGIN BAD HABBITS DAN HAL BURUK LAINNYA DARI DIRI AKU.</p>
          <p>Mungkin masih banyak hal yang perlu aku pelajari dari hal-hal kek ginian, but i’ll try my best to improve upon it andi’ll do my best too to improve the way i treat you. I’ll try to make you the HAPPIEST GIRL EVER IN THE WORLD😋</p>
          <p>Abis ini mungkin akan ada banyak tantangan dan rintangan untuk kita, but as long as we’ve got each other, aku rasa apapun bisa ditrabas💪</p>
          <p>Ditunggu availablenya ya, nanti kita metu asik, gua traktir (kecuali playtopia)</p>
        </div>
      </div>
    </div>
  );
};

export default StageYes;
