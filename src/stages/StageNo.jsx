import React from 'react';
import { motion } from 'framer-motion';

const StageNo = () => {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0.9] }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-8xl mb-6 grayscale opacity-80">🥀</div>
            </motion.div>
            <p className="text-xl text-white/80 max-w-lg text-center leading-relaxed">
                Haii din, if you’re seeing this message, aku cuman mau bilang makasih udah jujur dengan perasaan kamu dan makasih juga karena kamu udah yakin terhadap pilihan kamu terhadap aku. Its okay kamu ga perlu ngerasa gimana-gimana gitu ke aku, karena aku yakin kamu sendiri juga tau mana pilihan yang terbaik untuk diri kamu, if you think this is the way it should go, then so be it.

                Banyak pertimbangan yang aku yakin udah kamu laluin untuk ngebuat keputusan ini, mungkin kamu ngerasa ini bukan waktu yang tepat, mungkin juga aku bukan orang yang tepat, for whatever reason you chose this, aku akan selalu terima pilihan kamu.

                As for me, aku sendiri bakal tetep jadi teman baik mu yang akan ada ketika kamu membutuhkan, yah kita masih bisa chatan asbun atau cerita-cerita doang, namun aku sendiri bakal stop pursuing kamu dan kamu juga ga menjadi top mind aku lagi untuk kedepannya.

                Aku ingetin lagi, ini bukan merupakan deklarasi kita untuk berhenti berhubungan, this is just a sign for me to focus on another things and open myself up to other possibilities, but if you change your mind midway, aku akan mencoba untuk selalu terbuka apabila kamu ingin try another possibility with me

                Sekali lagi makasih banyak atas waktunya dan kenangannya, hope you find what you’ve been searching, aku doain yang terbaik untuk kamu, untuk masa depan mu, see you next times yah

            </p>
        </div>
    );
};

export default StageNo;
